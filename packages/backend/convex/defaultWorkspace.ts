import { v } from "convex/values";

import { internal } from "./_generated/api";
import { internalAction } from "./_generated/server";
import { createAuth } from "./auth";
import { randomSlugSuffix, slugifyWorkspace } from "./lib/defaultWorkspace";

// The action behind the `user.onCreate` trigger (scheduled from
// lib/defaultWorkspace → createDefaultWorkspace). It mints the user's default
// organization via Better Auth's real creation path, which also creates the
// owner `member` row — that fires the `member.onCreate` trigger in auth.ts and
// projects the membership into the app's `memberships` table. So this action's
// only job is "create the org + owner member"; the projection is automatic.
//
// Why an action: `auth.api.createOrganization` needs the Better Auth runtime,
// which only instantiates in an action ctx (`createAuth(ctx)`), the same
// contract the email senders use (auth.ts → requireActionCtx).
//
// SYSTEM ACTION (no session): we pass `body.userId` and NO `headers`. Better
// Auth's create-organization endpoint resolves the creator from the session
// when headers are present and otherwise falls back to `body.userId`, marking
// it an `isSystemAction` that bypasses the `allowUserToCreateOrganization`
// gate (see better-auth organization/routes/crud-org). That is exactly the
// "create on behalf of a user, server-side" path we want.

const MAX_SLUG_ATTEMPTS = 5;
const ALREADY_EXISTS = /already exists|ORGANIZATION_ALREADY_EXISTS/i;

export const createDefaultWorkspaceAction = internalAction({
	args: {
		userId: v.string(),
		name: v.string(),
		slugSeed: v.string(),
	},
	returns: v.null(),
	handler: async (ctx, args) => {
		// IDEMPOTENCY: never create a second default org. If the user already has
		// any membership (the projection), they already have a workspace — bail.
		// This guards against double-fire (re-runs, retries) and against a user
		// created by a path that already assigns an org.
		const existing: string | null = await ctx.runQuery(
			internal.lib.activeOrg.getDefaultOrganizationId,
			{ userId: args.userId }
		);
		if (existing !== null) {
			return null;
		}

		const auth = createAuth(ctx);
		const baseSlug = slugifyWorkspace(args.slugSeed);

		// SLUG COLLISION: createOrganization rejects a duplicate slug
		// (ORGANIZATION_ALREADY_EXISTS). Try the base slug first, then append a
		// random suffix on collision. Bounded retries — a handful of base36
		// suffixes makes a real collision astronomically unlikely.
		for (let attempt = 0; attempt < MAX_SLUG_ATTEMPTS; attempt++) {
			const slug =
				attempt === 0 ? baseSlug : `${baseSlug}-${randomSlugSuffix()}`;
			try {
				await auth.api.createOrganization({
					body: {
						name: args.name,
						slug,
						// Server-only: create on behalf of this user (no session). The
						// creator becomes the org `owner` and gets the owner member row.
						userId: args.userId,
						keepCurrentActiveOrganization: true,
					},
				});
				return null;
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				if (ALREADY_EXISTS.test(message) && attempt < MAX_SLUG_ATTEMPTS - 1) {
					// Slug taken. This can mean a CONCURRENT `user.onCreate` fire already
					// created THIS user's default org (racing our non-transactional
					// existence check above) — in which case retrying with a suffix would
					// mint a SECOND org. Re-check membership before retrying: if the user
					// now has an org, another fire won; bail. Only a genuine collision with
					// a DIFFERENT user's identical slug falls through to a suffixed retry.
					const raced: string | null = await ctx.runQuery(
						internal.lib.activeOrg.getDefaultOrganizationId,
						{ userId: args.userId }
					);
					if (raced !== null) {
						return null;
					}
				} else {
					throw error;
				}
			}
		}
		return null;
	},
});
