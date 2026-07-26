import { ConvexError } from "convex/values";
import {
	customAction,
	customCtx,
	customMutation,
	customQuery,
} from "convex-helpers/server/customFunctions";
import {
	type RLSConfig,
	type Rules,
	wrapDatabaseReader,
	wrapDatabaseWriter,
} from "convex-helpers/server/rowLevelSecurity";

import type { DataModel } from "../_generated/dataModel";
import { action, mutation, type QueryCtx, query } from "../_generated/server";

// The sanctioned PUBLIC function constructors. EVERY member-facing query/mutation is
// built from `authedQuery`/`authedMutation` here — this keeps the authorization net
// below from being silently bypassed by importing the raw `query`/`mutation`.
//
// LAYERS (explicit checks primary, RLS as a loud fallback):
//   1. lib/access `assertMember`/`assertRole` — PRIMARY, explicit, role-aware,
//      throws the precise "forbidden" / "insufficient role" at the endpoint.
//   2. The deny-by-default RLS net below — the per-`db`-op backstop that catches a
//      forgotten check. It THROWS the same "forbidden" (rather than silently
//      filtering to null, which a load-then-check handler would mis-report as "not
//      found").
//
// Tenancy (which workspace a row belongs to) is irreducibly OUR job: Better Auth's
// org plugin answers role→permission (RBAC, resource-TYPE level) but has no
// knowledge of individual Convex rows, so it cannot gate them.

interface WorkspaceDoc {
	workspaceId: string;
}

// A user belongs to few workspaces in practice; cap the scan so a pathological
// membership count can't blow Convex's per-transaction read limit. Fail LOUD if
// exceeded rather than silently dropping workspaces.
const MAX_WORKSPACE_MEMBERSHIPS = 1000;

// Resolve the caller and load their workspace set ONCE from the RAW db (before the
// wrappers exist), so the per-row rule lookups never recurse through RLS.
async function loadAuthz(
	ctx: QueryCtx
): Promise<{ userId: string; workspaces: Set<string> }> {
	const identity = await ctx.auth.getUserIdentity();
	if (!identity) {
		throw new ConvexError("not authenticated");
	}
	const userId = identity.subject;
	const rows = await ctx.db
		.query("memberships")
		.withIndex("by_user", (q) => q.eq("userId", userId))
		.take(MAX_WORKSPACE_MEMBERSHIPS + 1);
	if (rows.length > MAX_WORKSPACE_MEMBERSHIPS) {
		throw new ConvexError(
			`too many workspace memberships (> ${MAX_WORKSPACE_MEMBERSHIPS}) — contact support`
		);
	}
	return { userId, workspaces: new Set(rows.map((row) => row.workspaceId)) };
}

// The deny rules are the security backstop; keep them behaviourally simple.
export function buildRules(
	userId: string,
	workspaces: Set<string>
): Rules<QueryCtx, DataModel> {
	// LOUD deny: throw the same error assertMember throws, so a cross-workspace
	// db.get / insert / patch / delete raises "forbidden" — not a silent null that
	// a load-then-check handler would surface as "not found".
	const inWorkspace = (_ctx: QueryCtx, doc: WorkspaceDoc): Promise<boolean> => {
		if (workspaces.has(doc.workspaceId)) {
			return Promise.resolve(true);
		}
		throw new ConvexError("forbidden: not a member of this workspace");
	};
	const workspaceScoped = {
		read: inWorkspace,
		insert: inWorkspace,
		modify: inWorkspace,
	};
	return {
		// A user reads only their OWN membership rows (what assertMember checks). No
		// insert/modify rule ON PURPOSE: the projection is written ONLY by the
		// org-sync triggers on the RAW db, so any write through the wrapped db is
		// (correctly) denied by default.
		memberships: {
			read: (_ctx, doc) => Promise.resolve(doc.userId === userId),
		},
		// The example app table — workspace-scoped like every tenant record.
		notes: workspaceScoped,
		// External document imports (docling → R2 via Trigger.dev) — workspace-scoped.
		// Members create/list them; the task's completion write lands via an internal
		// mutation on the RAW db (documentImports.attachRef), not through here.
		documentImports: workspaceScoped,
		// Collaborative documents — workspace-scoped. (The rich-text content lives in
		// the prosemirror-sync component's tables, gated separately in prosemirror.ts.)
		documents: workspaceScoped,
		// Document share links — workspace-scoped for members who create/read/revoke
		// them. The PUBLIC read path (`resolveShare`) authorizes by token on the RAW db
		// via publicQuery, so it doesn't pass through this net.
		shares: workspaceScoped,
		// Per-resource access grants — workspace-scoped as a BACKSTOP only. RLS is
		// workspace-level and can't express per-principal access, so the real gate is
		// the explicit `resolveDocAccess`/`assertCanManageDoc` calls in grants.ts +
		// prosemirror.ts. This rule just confines grant rows to their own workspace.
		grants: workspaceScoped,
		// Billing entitlement: members READ their workspace's row (the plan). No
		// insert/modify rule ON PURPOSE — it's written ONLY by the Stripe webhook's
		// internal mutations on the RAW db (billing.setPlan), never through here.
		workspaceBilling: {
			read: inWorkspace,
		},
		// AI assistant thread projections — workspace-scoped like every tenant record.
		// This is the tenancy BACKSTOP; per-user ownership (a conversation is private)
		// is enforced explicitly by `requireOwnThread` in convex/assistant.ts.
		assistantThreads: workspaceScoped,
		// Per-user settings — USER-scoped, not workspace-scoped: a caller reads and
		// writes ONLY their own row (`doc.userId === userId`). Unlike `memberships`,
		// the user writes this themselves (completeOnboarding), so it has insert/modify
		// rules too. Every op is confined to the caller's own row.
		userPreferences: {
			read: (_ctx, doc) => Promise.resolve(doc.userId === userId),
			insert: (_ctx, doc) => Promise.resolve(doc.userId === userId),
			modify: (_ctx, doc) => Promise.resolve(doc.userId === userId),
		},
	} satisfies Rules<QueryCtx, DataModel>;
}

// Deny by default: a table with no rule above is fully inaccessible through these
// wrappers — a newly-added, unconsidered table is locked, never leaked.
const config: RLSConfig = { defaultPolicy: "deny" };

export const authedQuery = customQuery(
	query,
	customCtx(async (ctx) => {
		const { userId, workspaces } = await loadAuthz(ctx);
		return {
			userId,
			db: wrapDatabaseReader(
				ctx,
				ctx.db,
				buildRules(userId, workspaces),
				config
			),
		};
	})
);

// Non-throwing counterpart to `authedQuery`. Injects the signed-in caller as
// `ctx.userId` (a string) when a token is present, or `null` when it isn't — and
// NEVER throws on a missing identity. Use for reactively-subscribed `useQuery`
// reads that mount on the persistent authed shell (onboarding checklist, plan/usage
// meter, notification bell, …). Those subscribe on the client BEFORE the Convex
// client has finished attaching its auth token on a fresh load or mid-refresh; a
// throwing `authedQuery` turns that unavoidable boot window into a burst of "not
// authenticated" server errors (one per query, on every load), and a thrown reactive
// query surfaces in the app as an error overlay. Returning an empty shape instead
// lets the function SUCCEED while unauthenticated — no error log — and the query
// re-runs reactively with real data the moment auth lands. The handler MUST branch
// on `ctx.userId === null` and return its empty shape BEFORE touching `ctx.db`. RLS
// is unaffected: with no caller the db is wrapped with an EMPTY workspace set
// (deny-all), so even an accidental read can't leak. Anything that mutates or must
// reject anonymous callers keeps using `authedQuery`/`authedMutation`.
export const maybeAuthedQuery = customQuery(
	query,
	customCtx(async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			return {
				userId: null,
				db: wrapDatabaseReader(ctx, ctx.db, buildRules("", new Set()), config),
			};
		}
		const { userId, workspaces } = await loadAuthz(ctx);
		return {
			userId,
			db: wrapDatabaseReader(
				ctx,
				ctx.db,
				buildRules(userId, workspaces),
				config
			),
		};
	})
);

export const authedMutation = customMutation(
	mutation,
	customCtx(async (ctx) => {
		const { userId, workspaces } = await loadAuthz(ctx);
		return {
			userId,
			db: wrapDatabaseWriter(
				ctx,
				ctx.db,
				buildRules(userId, workspaces),
				config
			),
		};
	})
);

// Authenticated ACTION constructor — actions have no `ctx.db`, so there's no RLS net
// to wrap; this just proves a signed-in caller and exposes `ctx.userId`. Real
// per-workspace authorization happens via an internal QUERY the action runs (role
// checks need `ctx.db`, i.e. the `memberships` projection).
export const authedAction = customAction(
	action,
	customCtx(async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new ConvexError("not authenticated");
		}
		return { userId: identity.subject };
	})
);

// Explicitly PUBLIC — no auth, RAW db. Use ONLY for open reads.
export const publicQuery = query;

// Authenticated but NOT membership-scoped: requires a signed-in user yet runs on the
// RAW db (no net). For flows that act OUTSIDE the caller's current memberships (e.g.
// accepting an invite to join a new workspace).
export const sessionMutation = customMutation(
	mutation,
	customCtx(async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new ConvexError("not authenticated");
		}
		return { userId: identity.subject };
	})
);
