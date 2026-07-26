import { v } from "convex/values";

import { mutation } from "./_generated/server";

// Clear a session's denormalized active org when it points at `organizationId`.
// Called across the component boundary from the app's member/org removal triggers
// (lib/activeOrg) so a just-removed member's session stops claiming the workspace
// they can no longer access.
//
// Component isolation forces this through a component function (the `session` table
// lives inside this component); it is never mounted on an HTTP route. Scans only the
// user's OWN sessions (indexed `userId` — a user may hold several) and clears the
// active-org field on those active in this org; a session active in a DIFFERENT org
// is untouched. Idempotent: a session already cleared (or never pointing here) is a
// no-op. Setting the optional field to `undefined` removes it, so the next
// `getSession` reports no active org.
export const clearActiveOrgForMember = mutation({
	args: { userId: v.string(), organizationId: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const sessions = await ctx.db
			.query("session")
			.withIndex("userId", (q) => q.eq("userId", args.userId))
			.collect();
		for (const session of sessions) {
			if (session.activeOrganizationId === args.organizationId) {
				await ctx.db.patch(session._id, {
					activeOrganizationId: undefined,
				});
			}
		}
		return null;
	},
});
