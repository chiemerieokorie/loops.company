// The Convex `rawRef` validator is loops.company's shared adapter for an R2 raw-blob
// pointer (@chiemerieokorie/trigger-kit) — a Trigger.dev task uploads the bytes to R2
// and hands this small pointer back to persist on the owning row. Single source of
// truth for the shape, so schema + task can't drift.
import { rawRef } from "@chiemerieokorie/trigger-kit/convex";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The app's control-plane tables. The Better Auth component owns auth/orgs in its
// own tables; `memberships` is the app-side projection the access helpers scope
// every query and mutation by (orgs ARE workspaces — see lib/membershipSync).

const ROLE = v.union(
	v.literal("owner"),
	v.literal("admin"),
	v.literal("member")
);

export default defineSchema({
	// A user's membership in a workspace. The tenancy boundary: every record below is
	// scoped to a workspace, and access requires a membership row. Better Auth org
	// members sync here via the `member` table triggers in auth.ts.
	memberships: defineTable({
		userId: v.string(),
		workspaceId: v.string(),
		role: ROLE,
	})
		.index("by_user", ["userId"])
		.index("by_user_workspace", ["userId", "workspaceId"])
		.index("by_workspace", ["workspaceId"]),

	// Example workspace-scoped table demonstrating the RLS pattern (lib/functions).
	// Replace/extend for your domain — the only requirement for a tenant record is a
	// `workspaceId` and a `by_workspace` index.
	notes: defineTable({
		workspaceId: v.string(),
		title: v.string(),
		body: v.string(),
		createdBy: v.string(),
		// Soft-delete: absent = live; set = in the trash, restorable until the
		// retention cron (convex/crons.purgeExpiredTrash) hard-deletes it. `by_trashed`
		// drives that sweep — live rows have `trashedAt` absent, so the cron's
		// `gte(1)` lower bound excludes them.
		trashedAt: v.optional(v.number()),
		trashedBy: v.optional(v.string()),
		// Pointer to this note's last Markdown export in R2, written by the
		// `export-note` Trigger.dev task via `internal.notes.attachExportRef` (see
		// convex/jobs.ts). Absent until the note has been exported at least once.
		exportRef: v.optional(rawRef),
	})
		.index("by_workspace", ["workspaceId"])
		.index("by_trashed", ["trashedAt"]),

	// External document imports handled by the `parse-document` Trigger.dev task:
	// docling converts the `sourceUrl` (PDF/HTML) to Markdown, stores it in R2, and
	// the task calls back to set `status: "ready"` + `ref` (or "failed" + `error`).
	// Workspace-scoped like every tenant record.
	documentImports: defineTable({
		workspaceId: v.string(),
		sourceUrl: v.string(),
		filename: v.string(),
		status: v.union(
			v.literal("pending"),
			v.literal("ready"),
			v.literal("failed")
		),
		ref: v.optional(rawRef),
		error: v.optional(v.string()),
	}).index("by_workspace", ["workspaceId"]),

	// Collaborative documents. The rich-text CONTENT lives in the prosemirror-sync
	// component's own tables (keyed by `docId`); this row is the docId -> workspace
	// mapping that gates access (convex/prosemirror.ts) plus the editable title.
	// `docId` is a crypto.randomUUID(), decoupled from the Convex `_id`.
	documents: defineTable({
		docId: v.string(),
		workspaceId: v.string(),
		title: v.string(),
		// Who created the document — the implicit editor (always full access, ungrantable).
		// Optional so pre-existing rows (created before this field) stay valid; treated as
		// "no known creator" when absent.
		createdBy: v.optional(v.string()),
		// Access grain. Absent / "workspace" = shared with every workspace member (the
		// default — RLS-style tenancy). "private" = only the creator, workspace
		// owner/admins, and explicitly `grants`-ed members can access it. See
		// lib/access `resolveDocAccess` for the resolution order.
		visibility: v.optional(
			v.union(v.literal("workspace"), v.literal("private"))
		),
		// Soft-delete, same contract as `notes` above. Trashing hides the doc from the
		// list (and a shared link resolves to null while trashed); `deleteForever`/the
		// retention cron erase this row AND the doc's content (the prosemirror-sync
		// component rows, via deleteDocument) AND any share links — see prosemirror.ts.
		trashedAt: v.optional(v.number()),
		trashedBy: v.optional(v.string()),
	})
		.index("by_doc", ["docId"])
		.index("by_workspace", ["workspaceId"])
		.index("by_trashed", ["trashedAt"]),

	// Per-resource access grants — a SECOND access grain, orthogonal to workspace
	// tenancy: a specific member (`principalId` = Better Auth user id) is granted
	// `viewer` (read) or `editor` (read+write) on one resource. Today the only
	// `resourceType` is "document" (gating a PRIVATE document, schema `documents`);
	// the type is a union so a new project reuses this table for its own private
	// resources. Resolution lives in lib/access `resolveDocAccess`; the RLS net
	// (lib/functions) only backstops at the workspace level, so the per-principal
	// gate is always an explicit resolver call. Grants are created only by someone
	// who can already manage the resource (no privilege escalation).
	grants: defineTable({
		workspaceId: v.string(),
		resourceType: v.union(v.literal("document")),
		resourceId: v.string(),
		principalId: v.string(),
		role: v.union(v.literal("viewer"), v.literal("editor")),
		grantedBy: v.string(),
	})
		// List a resource's grants (the Share roster).
		.index("by_resource", ["resourceType", "resourceId"])
		// Point-lookup a specific member's grant on a specific resource — the access
		// resolver's hot path. Its leading `principalId` prefix also covers any future
		// "all of a principal's grants" query, so no separate by_principal index.
		.index("by_principal_resource", [
			"principalId",
			"resourceType",
			"resourceId",
		]),

	// Public share links for documents. `token` is a 256-bit bearer credential — anyone
	// with the link can VIEW the document read-only, no sign-in. One row per shared
	// document; revoking deletes the row. The `resolveShare` publicQuery reads by token
	// (the token IS the authorization); members manage links through the workspace-scoped
	// RLS net (lib/functions).
	shares: defineTable({
		token: v.string(),
		docId: v.string(),
		workspaceId: v.string(),
		createdBy: v.string(),
	})
		.index("by_token", ["token"])
		.index("by_doc", ["docId"]),

	// Per-workspace billing entitlement (one row per workspace). Written ONLY by the
	// Stripe webhook via `internal.billing.setPlan`; exposed read-only through the RLS
	// net (lib/functions). `stripeCustomerId` is the durable workspace→customer map.
	workspaceBilling: defineTable({
		workspaceId: v.string(),
		plan: v.union(v.literal("free"), v.literal("pro"), v.literal("team")),
		stripeCustomerId: v.optional(v.string()),
		stripeSubscriptionId: v.optional(v.string()),
		// "month" | "year" — the active subscription's billing interval (display).
		billingInterval: v.optional(v.string()),
		currentPeriodEnd: v.optional(v.number()),
		cancelAtPeriodEnd: v.optional(v.boolean()),
		updatedAt: v.optional(v.number()),
	}).index("by_workspace", ["workspaceId"]),

	// App-level log of Resend delivery events (delivered, bounced, opened,
	// complained, ...) received via the webhook. The Resend component keeps its
	// own internal record; this table exists so application code can query and
	// react to delivery status. Written by `emailEvents.handleEmailEvent`.
	emailEvents: defineTable({
		// The Resend component's branded EmailId (returned from sendEmail).
		emailId: v.string(),
		// Event type, e.g. "email.delivered", "email.bounced", "email.opened".
		type: v.string(),
		// ISO timestamp reported by Resend for when the event occurred.
		occurredAt: v.string(),
	}).index("by_email", ["emailId"]),

	// App-side projection of an AI assistant conversation (convex/assistant.ts). The
	// `@convex-dev/agent` component owns the thread's messages + stream deltas under
	// its own opaque `threadId`; THIS row is the tenancy mapping the access helpers
	// scope by — the workspace it belongs to and the user who started it (a
	// conversation is private, not workspace-shared) — plus the derived title shown
	// in the thread list and a `lastMessageAt` bumped per message so the list sorts
	// most-recent-first without scanning the component's message tables.
	assistantThreads: defineTable({
		workspaceId: v.string(),
		userId: v.string(),
		// The `@convex-dev/agent` thread id — an opaque string, not a Convex Id.
		threadId: v.string(),
		title: v.string(),
		lastMessageAt: v.number(),
	})
		.index("by_workspace_user", ["workspaceId", "userId"])
		.index("by_thread", ["threadId"]),

	// Per-user settings (NOT workspace-scoped). Today it tracks only whether the user
	// has finished the first-run onboarding checklist — `onboardedAt` is a nullable
	// timestamp, present once dismissed/completed. Extend for richer per-user prefs.
	// User-scoped in the RLS net (lib/functions): a caller only ever touches their row.
	userPreferences: defineTable({
		userId: v.string(),
		onboardedAt: v.optional(v.number()),
	}).index("by_user", ["userId"]),

	// Monthly per-type counters for the Slack "wins bot" (convex/slack.ts). `key` is
	// `<winType>:<YYYY-MM>` (e.g. "signup:2026-07"); `count` is bumped +1 when a win
	// message is delivered and rolled back -1 if delivery fails, so each message can
	// carry a dense "#N this month" number. Ops-only — no tenant/user data.
	winCounters: defineTable({
		key: v.string(),
		count: v.number(),
		updatedAt: v.number(),
	}).index("by_key", ["key"]),
});
