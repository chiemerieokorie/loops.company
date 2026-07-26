import type { GenericMutationCtx } from "convex/server";

import { internal } from "../_generated/api";
import type { DataModel } from "../_generated/dataModel";

// "Every new user gets a default organization (= workspace), so no user is ever
// orgless." This module is the modular trigger handler behind auth.ts's thin
// `user: { onCreate }` wiring.
//
// MECHANISM (why a scheduled action, not in-transaction work):
// The `user.onCreate` trigger runs in the APP's MUTATION ctx — it has `ctx.db` and
// `ctx.scheduler` but cannot instantiate Better Auth or call `auth.api.*` (those
// need an action ctx). The correct, supported way to mint an org is
// `auth.api.createOrganization`, which also creates the owner `member` row (firing
// our member.onCreate trigger → projecting into the app `memberships` table for
// free). So we `scheduler.runAfter(0, …)` an internalAction. runAfter(0) is
// transactional: the action is enqueued iff the user insert commits. The small
// window where the user exists without an org is tolerated by every read path (the
// session-create hook and access layer treat "no membership yet" as a non-error).

// A workspace name for a freshly-created user. Better Auth requires a non-empty org
// name; fall back through name → email-local-part → a generic label.
export function defaultWorkspaceName(user: {
	name?: string | null;
	email?: string | null;
}): string {
	const name = user.name?.trim();
	if (name) {
		return `${name}'s Workspace`;
	}
	const emailLocal = user.email?.split("@")[0]?.trim();
	if (emailLocal) {
		return `${emailLocal}'s Workspace`;
	}
	return "My Workspace";
}

const SLUG_MAX_LEN = 48;
const RANDOM_SLUG = "workspace";

// Slugify a seed into a Better Auth-safe org slug: lowercase, alnum + single
// hyphens, no leading/trailing hyphen, bounded length. Empty seeds fall back to a
// generic stem so the caller can always append a uniqueness suffix.
export function slugifyWorkspace(seed: string): string {
	const slug = seed
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, SLUG_MAX_LEN)
		.replace(/-+$/g, "");
	return slug || RANDOM_SLUG;
}

// A short random suffix (collision breaker).
export function randomSlugSuffix(): string {
	return Math.random().toString(36).slice(2, 8);
}

// The trigger delegate wired into auth.ts as `user.onCreate`. Thin by design:
// enqueue the action that does the real (action-only) work. We pass the user's id
// (= the Better Auth user document `_id`, which is also the app-side
// `memberships.userId`) plus a name seed; the action regenerates the slug so all
// slug policy lives in one place (the action).
export async function createDefaultWorkspace(
	ctx: GenericMutationCtx<DataModel>,
	user: { _id: string; name?: string | null; email?: string | null }
): Promise<void> {
	await ctx.scheduler.runAfter(
		0,
		internal.defaultWorkspace.createDefaultWorkspaceAction,
		{
			userId: user._id,
			name: defaultWorkspaceName(user),
			slugSeed: user.name ?? user.email ?? "",
		}
	);
}
