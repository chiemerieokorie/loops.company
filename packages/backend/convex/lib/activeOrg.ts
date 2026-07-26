import type { GenericCtx } from "@convex-dev/better-auth";
import { v } from "convex/values";
import { asyncMap } from "convex-helpers";

import { components, internal } from "../_generated/api";
import type { DataModel } from "../_generated/dataModel";
import { internalQuery, type MutationCtx } from "../_generated/server";

// The user's DEFAULT organization (workspace) id — the first `memberships` row in
// creation order. Used by `applyActiveOrgToSession` to seed
// `session.activeOrganizationId` so a freshly signed-in user lands in a workspace
// without an explicit "set active org" round-trip, and by the default-workspace
// action's idempotency check.
//
// An internalQuery (not a raw helper) because the session hook runs in a Better Auth
// request context that only has `ctx.runQuery` — not `ctx.db` — to reach app tables.
// Returns null when the user has no membership yet (the hook then leaves the
// session's active org unset rather than throwing).
export const getDefaultOrganizationId = internalQuery({
	args: { userId: v.string() },
	returns: v.union(v.null(), v.string()),
	handler: async (ctx, args) => {
		const membership = await ctx.db
			.query("memberships")
			.withIndex("by_user", (q) => q.eq("userId", args.userId))
			.first();
		return membership?.workspaceId ?? null;
	},
});

// The EFFECTIVE active org for read paths (getActiveOrg + the JWT mint). The
// session's `activeOrganizationId` is the authority, but a brand-new user's first
// session has none: the default workspace is created by an async post-signup action
// AFTER the session was written, so it never lands on that first session. Without
// this fallback that user reads a null active org for their whole first session. So
// when the session has no active org, fall back to the user's default workspace
// (their first membership). Returns null only when the user belongs to no workspace.
export async function resolveActiveOrganizationId(
	ctx: GenericCtx<DataModel>,
	{
		sessionActiveOrganizationId,
		userId,
	}: { sessionActiveOrganizationId: string | null; userId: string }
): Promise<string | null> {
	if (sessionActiveOrganizationId !== null) {
		return sessionActiveOrganizationId;
	}
	return await ctx.runQuery(internal.lib.activeOrg.getDefaultOrganizationId, {
		userId,
	});
}

type SessionWithActiveOrg<S> = S | (S & { activeOrganizationId: string });

// Seed a new session's active org from the user's default workspace. The thin
// delegate for auth.ts's `databaseHooks.session.create.before` — mirrors how the
// triggers delegate to lib/* modules, keeping auth.ts declarative. Explicit return
// type breaks the `internal`-self-reference inference cycle. No membership → leave
// the session unchanged (a user may sign in before the default-org trigger lands).
export async function applyActiveOrgToSession<S extends { userId: string }>(
	ctx: GenericCtx<DataModel>,
	session: S
): Promise<{ data: SessionWithActiveOrg<S> }> {
	const activeOrganizationId = await ctx.runQuery(
		internal.lib.activeOrg.getDefaultOrganizationId,
		{ userId: session.userId }
	);
	if (activeOrganizationId === null) {
		return { data: session };
	}
	return { data: { ...session, activeOrganizationId } };
}

// When a user loses access to a workspace (removed as a member, or the whole org
// deleted), drop that workspace from any of their sessions' active-org field. Thin
// delegate over the component mutation, since the `session` table lives in the Better
// Auth component. Idempotent.
export async function clearActiveOrgForMember(
	ctx: MutationCtx,
	userId: string,
	workspaceId: string
): Promise<void> {
	await ctx.runMutation(
		components.betterAuth.mutations.clearActiveOrgForMember,
		{ userId, organizationId: workspaceId }
	);
}

// Org-deletion fan-out: clear the active org from every current member's session.
// Reads the app `memberships` projection (indexed `by_workspace`) for the userIds, so
// it MUST run BEFORE those rows are deleted (the org.onDelete trigger orders it ahead
// of `removeWorkspaceMemberships`).
export async function clearActiveOrgForWorkspace(
	ctx: MutationCtx,
	workspaceId: string
): Promise<void> {
	const rows = await ctx.db
		.query("memberships")
		.withIndex("by_workspace", (q) => q.eq("workspaceId", workspaceId))
		.collect();
	await asyncMap(rows, (row) =>
		clearActiveOrgForMember(ctx, row.userId, workspaceId)
	);
}
