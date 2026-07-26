import { v } from "convex/values";

import { query } from "./_generated/server";

// Component-internal read of an organization's slug. The app cannot read this
// component's tables directly (component isolation), so it reaches the slug —
// which lives only in the org plugin's `organization` table — through this
// function via `ctx.runQuery(components.betterAuth.queries.getOrganizationSlug)`.
//
// It is "public" only in the Convex component sense (callable across the component
// boundary); it is never mounted on an HTTP route, so it is not reachable from the
// open internet. The id arrives as a plain string (org ids are stored as strings
// everywhere), so we normalize it against this component's `organization` table
// before `get`. A non-normalizable id (foreign table, garbage) yields null rather
// than throwing.
export const getOrganizationSlug = query({
	args: { organizationId: v.string() },
	returns: v.union(v.null(), v.string()),
	handler: async (ctx, args) => {
		const id = ctx.db.normalizeId("organization", args.organizationId);
		if (id === null) {
			return null;
		}
		const org = await ctx.db.get(id);
		return org?.slug ?? null;
	},
});

// Reverse of the above: resolve a workspace URL slug to its organization id. The
// app's `/[workspace]` gate needs this for the deep-link / just-switched path, where
// it knows the slug from the URL but must turn it into the `workspaceId` that
// `assertMember` gates on. Component isolation forces the lookup through the
// boundary. Indexed on `slug` (betterAuth/schema). Returns null for an unknown slug
// — never throws — so the caller treats "no such workspace" identically to "not a
// member" (no slug enumeration oracle).
export const getOrganizationIdBySlug = query({
	args: { slug: v.string() },
	returns: v.union(v.null(), v.string()),
	handler: async (ctx, args) => {
		const org = await ctx.db
			.query("organization")
			.withIndex("slug", (q) => q.eq("slug", args.slug))
			.first();
		return org?._id ?? null;
	},
});
