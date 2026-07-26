import { ConvexError } from "convex/values";

import type { Doc } from "../_generated/dataModel";
import type { MutationCtx, QueryCtx } from "../_generated/server";

// The tenancy core: every query/mutation resolves the acting user, then asserts a
// membership in the workspace the target record belongs to. A member of workspace A
// therefore cannot touch any record of workspace B — the access path is "load
// record → read its workspaceId → assertMember(that)". Orgs ARE workspaces, so the
// `workspaceId` is the Better Auth organization id (a plain string).

export type Role = "owner" | "admin" | "member";
type Ctx = QueryCtx | MutationCtx;

// The acting user's id — the Better Auth user id, which is `getUserIdentity().subject`
// and equals `memberships.userId`. Throws when unauthenticated.
export async function currentUserId(ctx: Ctx): Promise<string> {
	const identity = await ctx.auth.getUserIdentity();
	if (!identity) {
		throw new ConvexError("not authenticated");
	}
	return identity.subject;
}

// Assert the acting user is a member of `workspaceId`; returns the membership (with
// role) for further role checks. Throws "forbidden" otherwise — this is the single
// chokepoint multi-tenancy depends on.
export async function assertMember(
	ctx: Ctx,
	workspaceId: string
): Promise<{ role: Role }> {
	const userId = await currentUserId(ctx);
	// `.first()`, not `.unique()`: a duplicate membership row (e.g. a re-sync from
	// Better Auth) must still grant access cleanly, never throw on the security
	// path. Absence is the only thing that denies.
	const membership = await ctx.db
		.query("memberships")
		.withIndex("by_user_workspace", (q) =>
			q.eq("userId", userId).eq("workspaceId", workspaceId)
		)
		.first();
	if (!membership) {
		throw new ConvexError("forbidden: not a member of this workspace");
	}
	return { role: membership.role };
}

// Non-throwing membership probe — for paths that must collapse "anonymous" and
// "non-member" into the SAME negative answer rather than surface a distinguishable
// throw.
export async function isMember(
	ctx: Ctx,
	workspaceId: string
): Promise<boolean> {
	try {
		await assertMember(ctx, workspaceId);
		return true;
	} catch {
		return false;
	}
}

// Assert membership AND that the role is sufficient (e.g. only owner/admin may
// invite members or delete workspace-wide resources).
export async function assertRole(
	ctx: Ctx,
	workspaceId: string,
	allowed: readonly Role[]
): Promise<void> {
	const { role } = await assertMember(ctx, workspaceId);
	if (!allowed.includes(role)) {
		throw new ConvexError("forbidden: insufficient role");
	}
}

// ── Per-resource access grants (documents) ──────────────────────────────────────
// A second access grain, orthogonal to workspace tenancy: a per-user grant on a
// PRIVATE document (viewer = read, editor = read+write). Resolved at read time by the
// order below (broadest wins) — never a stored per-row ACL. The RLS net (lib/functions)
// is only workspace-level, so it CANNOT backstop this; every document read/write must
// call `resolveDocAccess` explicitly.

export type DocAccess = "viewer" | "editor";

// Resolve the caller's effective access to a document, or throw. Order (short-circuits
// the common shared case with zero grant lookups):
//   non-member → forbidden (assertMember) ·
//   workspace owner/admin → editor · the doc's creator → editor ·
//   visibility "workspace"/absent → member → editor (preserves the default all-members
//   -shared behavior) ·
//   visibility "private" → the caller's direct grant (viewer|editor), else forbidden.
// `need: "write"` additionally requires `editor` (a viewer is read-only).
export async function resolveDocAccess(
	ctx: Ctx,
	doc: Doc<"documents">,
	need: "read" | "write"
): Promise<DocAccess> {
	// Membership is the outer boundary — a non-member is denied before any grant logic
	// (grants are only ever issued to members of the doc's workspace).
	const { role } = await assertMember(ctx, doc.workspaceId);
	const userId = await currentUserId(ctx);

	let access: DocAccess | undefined;
	if (role === "owner" || role === "admin") {
		access = "editor";
	} else if (doc.createdBy === userId) {
		access = "editor";
	} else if (doc.visibility === "private") {
		// Private → the caller needs a direct grant.
		const grant = await ctx.db
			.query("grants")
			.withIndex("by_principal_resource", (q) =>
				q
					.eq("principalId", userId)
					.eq("resourceType", "document")
					.eq("resourceId", doc.docId)
			)
			.first();
		access = grant?.role;
	} else {
		// "workspace" (or legacy absent) → every member shares full access.
		access = "editor";
	}

	if (!access) {
		throw new ConvexError("forbidden: no access to this document");
	}
	if (need === "write" && access !== "editor") {
		throw new ConvexError("forbidden: read-only access to this document");
	}
	return access;
}

// Non-throwing probe — collapses "no access" / "read-only when write needed" into a
// boolean for UI gating (opening a manage-sharing panel as a non-manager would
// otherwise make a reactive query throw and crash the subscription).
export async function canAccessDoc(
	ctx: Ctx,
	doc: Doc<"documents">,
	need: "read" | "write"
): Promise<boolean> {
	try {
		await resolveDocAccess(ctx, doc, need);
		return true;
	} catch {
		return false;
	}
}
