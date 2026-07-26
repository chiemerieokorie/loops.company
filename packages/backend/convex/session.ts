import { ConvexError, v } from "convex/values";

import { components } from "./_generated/api";
import { authComponent, createAuth } from "./auth";
import { assertMember } from "./lib/access";
import { resolveActiveOrganizationId } from "./lib/activeOrg";
import { authedQuery, maybeAuthedQuery, publicQuery } from "./lib/functions";

// Session/workspace lookups the Next.js `/[workspace]` gate calls server-side (via
// `fetchAuthQuery`). These are the cheap, server-owned reads that let the app build
// `/[slug]/...` URLs and enforce the tenancy boundary on a deep link WITHOUT
// trusting the URL.

// The caller's active org + its slug. The "free" read the gate's common path relies
// on: `getAuth` resolves the auth API + the caller's session headers, then
// `getSession` returns the session row (with `activeOrganizationId`). The slug is
// DERIVED on read from that id (org-plugin-authoritative), so it is always correct —
// including right after a `setActive` switch. Returns nulls when unauthenticated or
// orgless (defensive — a user can sign in before the default-org trigger lands).
export const getActiveOrg = publicQuery({
	args: {},
	returns: v.object({
		activeOrganizationId: v.union(v.null(), v.string()),
		activeOrganizationSlug: v.union(v.null(), v.string()),
	}),
	handler: async (ctx) => {
		const { auth, headers } = await authComponent.getAuth(createAuth, ctx);
		const session = await auth.api.getSession({ headers });
		const active = session?.session as
			| { activeOrganizationId?: string }
			| undefined;
		const userId = session?.user?.id ?? null;
		const activeOrganizationId =
			userId === null
				? null
				: await resolveActiveOrganizationId(ctx, {
						sessionActiveOrganizationId: active?.activeOrganizationId ?? null,
						userId,
					});
		const activeOrganizationSlug =
			activeOrganizationId === null
				? null
				: await ctx.runQuery(
						components.betterAuth.queries.getOrganizationSlug,
						{ organizationId: activeOrganizationId }
					);
		return { activeOrganizationId, activeOrganizationSlug };
	},
});

// The mismatch path: the URL slug differs from the session's active slug (deep-link,
// just-switched org, or hand-edited URL). Resolve slug → org id across the component
// boundary, then `assertMember` — the SAME chokepoint every data path uses. A
// non-member (or unknown slug) throws "forbidden", which the gate catches and turns
// into a redirect. We NEVER trust the URL slug: a member of workspace A cannot view
// `/b-slug/...` just by typing it (IDOR guard).
export const assertWorkspaceAccess = authedQuery({
	args: { slug: v.string() },
	returns: v.object({ workspaceId: v.string() }),
	handler: async (ctx, args) => {
		const workspaceId = await ctx.runQuery(
			components.betterAuth.queries.getOrganizationIdBySlug,
			{ slug: args.slug }
		);
		if (workspaceId === null) {
			// Unknown slug is indistinguishable from "not a member" — same error, no
			// slug-enumeration oracle.
			throw new ConvexError("forbidden: not a member of this workspace");
		}
		await assertMember(ctx, workspaceId);
		return { workspaceId };
	},
});

// The org switcher's data: every workspace the caller belongs to, each with the slug
// the switcher routes to. Reads the `memberships` projection (indexed `by_user`) and
// resolves each slug across the component boundary. Rows whose org has no slug are
// dropped (can't be routed to).
//
// `maybeAuthedQuery`, not `authedQuery`, ON PURPOSE: the switcher mounts this as a
// reactive client `useQuery` on EVERY authed page, so it fires before the client's
// Convex token lands (initial load / mid-refresh). A throwing `authedQuery` would emit
// a "not authenticated" server error there; the non-throwing wrapper tolerates the
// transient no-identity and returns []. No authority is lost: it only ever reads the
// caller's OWN memberships (the RLS net additionally scopes `memberships` to
// `doc.userId === ctx.userId`); a missing identity → [].
export const listMyWorkspaces = maybeAuthedQuery({
	args: {},
	returns: v.array(
		v.object({
			workspaceId: v.string(),
			slug: v.string(),
		})
	),
	handler: async (ctx) => {
		if (ctx.userId === null) {
			return [];
		}
		const memberships = await ctx.db
			.query("memberships")
			.withIndex("by_user", (q) => q.eq("userId", ctx.userId))
			.collect();
		const result: { workspaceId: string; slug: string }[] = [];
		for (const membership of memberships) {
			const slug = await ctx.runQuery(
				components.betterAuth.queries.getOrganizationSlug,
				{ organizationId: membership.workspaceId }
			);
			if (slug !== null) {
				result.push({ workspaceId: membership.workspaceId, slug });
			}
		}
		return result;
	},
});
