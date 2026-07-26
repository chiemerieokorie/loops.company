import type { GenericCtx } from "@convex-dev/better-auth";

import { components } from "../_generated/api";
import type { DataModel } from "../_generated/dataModel";
import { resolveActiveOrganizationId } from "./activeOrg";

// The Convex JWT payload (the `better-auth.convex_jwt` cookie). We extend the convex
// plugin's default payload so the active workspace slug travels in the token itself —
// `apps/web/src/proxy.ts` base64-decodes this cookie (optimistically, no verification)
// to rewrite bare authed paths to `/[activeSlug]/…` with zero backend round-trips. The
// authoritative checks remain server-side/RLS.
//
// IMPORTANT (verified against @convex-dev/better-auth's convex plugin): a custom
// `jwt.definePayload` REPLACES the plugin's default user claims (`omit(user,
// ["id","image"])`) — so we re-include them here, or Convex identity loses
// `email`/`name`. `sub` (the user id) is set separately by Better Auth's jwt plugin
// and is NOT part of this payload, so it is preserved. The plugin always appends
// `sessionId` + `iat` after this returns.

type JwtUser = Record<string, unknown> & { id?: unknown; image?: unknown };
type JwtSession = Record<string, unknown> & {
	activeOrganizationId?: string | null;
	userId?: unknown;
};

// Derive-on-read: the authoritative active org is `session.activeOrganizationId`
// (org-plugin-maintained — always correct, incl. right after `setActive`). We resolve
// the slug from it at MINT time rather than reading a denormalized field, so the token
// slug can never go stale on a workspace switch. One indexed component lookup per mint
// (~15 min/user); the proxy hot path stays free (slug is baked into the JWT).
export async function buildConvexJwtPayload(
	ctx: GenericCtx<DataModel>,
	{ user, session }: { user: JwtUser; session: JwtSession }
): Promise<Record<string, unknown>> {
	const { id: userId, image: _image, ...userClaims } = user;
	// Effective active org: the session's, or — for a brand-new user whose session
	// predates their async-created default workspace — a fallback to that workspace
	// (lib/activeOrg). Same source `getActiveOrg` uses, so the JWT slug the proxy reads
	// and the gate's session read never disagree.
	const activeOrganizationId =
		typeof userId === "string"
			? await resolveActiveOrganizationId(ctx, {
					sessionActiveOrganizationId: session.activeOrganizationId ?? null,
					userId,
				})
			: (session.activeOrganizationId ?? null);
	const activeOrganizationSlug =
		activeOrganizationId === null
			? null
			: await ctx.runQuery(components.betterAuth.queries.getOrganizationSlug, {
					organizationId: activeOrganizationId,
				});
	return {
		...userClaims,
		activeOrganizationId,
		activeOrganizationSlug,
	};
}
