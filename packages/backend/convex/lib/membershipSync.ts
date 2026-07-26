import { asyncMap } from "convex-helpers";
import { getManyFrom } from "convex-helpers/server/relationships";

import type { MutationCtx } from "../_generated/server";

// The bridge from Better Auth organization membership → the app's `memberships`
// projection. The org plugin owns orgs/members in the component's tables; these
// helpers keep the app-side projection the access layer gates on in sync, driven by
// component `member`/`organization` table triggers in auth.ts.
//
// IDs line up by construction: a Better Auth user id IS the component user's
// document id, which is also `getUserIdentity().subject` (what `currentUserId`
// returns). So `member.userId` === the app's `memberships.userId`, and the org id
// (`member.organizationId`) IS the app's `workspaceId`. Both are stored as plain
// strings — never Convex `v.id(...)` — which is exactly what the ID model requires
// (an app row's `_id` can never equal a Better Auth id).

export type AppRole = "owner" | "admin" | "member";

// Better Auth stores a member's role as a (possibly comma-separated) string. The app
// projection models only the three base roles, so collapse to the strongest base
// role present; anything unrecognized projects as "member".
export function projectRole(role: string): AppRole {
	const parts = role.split(",").map((part) => part.trim());
	if (parts.includes("owner")) {
		return "owner";
	}
	if (parts.includes("admin")) {
		return "admin";
	}
	return "member";
}

// Upsert the projection for one org member. Idempotent on (userId, workspaceId): a
// re-sync updates the role in place rather than duplicating (and `assertMember`
// tolerates duplicates regardless).
export async function syncMembership(
	ctx: MutationCtx,
	member: { userId: string; organizationId: string; role: string }
): Promise<void> {
	const role = projectRole(member.role);
	const existing = await ctx.db
		.query("memberships")
		.withIndex("by_user_workspace", (q) =>
			q.eq("userId", member.userId).eq("workspaceId", member.organizationId)
		)
		.first();
	if (existing) {
		if (existing.role !== role) {
			await ctx.db.patch(existing._id, { role });
		}
		return;
	}
	await ctx.db.insert("memberships", {
		userId: member.userId,
		workspaceId: member.organizationId,
		role,
	});
}

// Remove the projection row(s) for one (user, workspace) pair — fired when a member
// is removed or leaves an organization.
export async function removeMembership(
	ctx: MutationCtx,
	userId: string,
	workspaceId: string
): Promise<void> {
	const rows = await ctx.db
		.query("memberships")
		.withIndex("by_user_workspace", (q) =>
			q.eq("userId", userId).eq("workspaceId", workspaceId)
		)
		.collect();
	await asyncMap(rows, (row) => ctx.db.delete(row._id));
}

// Remove every projection row for a deleted workspace (organization). A safety net
// alongside the per-member onDelete cascade — idempotent if the rows are already
// gone.
export async function removeWorkspaceMemberships(
	ctx: MutationCtx,
	workspaceId: string
): Promise<void> {
	const rows = await getManyFrom(
		ctx.db,
		"memberships",
		"by_workspace",
		workspaceId,
		"workspaceId"
	);
	await asyncMap(rows, (row) => ctx.db.delete(row._id));
}
