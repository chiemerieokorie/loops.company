import { ConvexError, v } from "convex/values";

import type { MutationCtx, QueryCtx } from "./_generated/server";
import { currentPlan } from "./billing";
import { assertMember } from "./lib/access";
import { maybeAuthedQuery } from "./lib/functions";
import {
	DEFAULT_PLAN,
	type PlanName,
	planLimits,
	planValidator,
} from "./lib/plans";

// Plan/feature gating (the billing counterpart to lib/access). Where `assertMember`/
// `assertRole` answer "may this user touch this workspace", these answer "does this
// workspace's PLAN allow one more of X". The plan is read from the reactive
// `workspaceBilling` row (`currentPlan`) — never a JWT/session claim, which would be
// stale after an upgrade and wrong after a workspace switch. The Stripe webhook is the
// only writer of the plan; these helpers are the only readers that THROW.

type Ctx = QueryCtx | MutationCtx;

// The workspace-scoped resources with a per-plan cap. Each maps to a numeric field on
// `PlanLimits`. Both tables carry a `by_workspace` index, so a count is one indexed
// range read — and because the gate keeps each workspace at or under its cap, that read
// is naturally bounded by the cap.
export type LimitedResource = "documents" | "notes";

const LIMIT_FIELD = {
	documents: "maxDocuments",
	notes: "maxNotes",
} as const satisfies Record<
	LimitedResource,
	keyof ReturnType<typeof planLimits>
>;

// Count a workspace's LIVE rows in a limited table — trashed rows don't count against
// the cap, so trashing something frees quota. Written per-table (not over a union table
// name) so Convex's index typing stays exact.
async function countWorkspaceRows(
	ctx: Ctx,
	resource: LimitedResource,
	workspaceId: string
): Promise<number> {
	if (resource === "documents") {
		const rows = await ctx.db
			.query("documents")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", workspaceId))
			.collect();
		return rows.filter((row) => row.trashedAt === undefined).length;
	}
	const rows = await ctx.db
		.query("notes")
		.withIndex("by_workspace", (q) => q.eq("workspaceId", workspaceId))
		.collect();
	return rows.filter((row) => row.trashedAt === undefined).length;
}

// Assert the workspace's plan has room for one more `resource` before creating it.
// Throws "…limit reached: …" (parallel to the "forbidden: …" access gates) so a create
// mutation can call it right after `assertMember` and let the message surface to the UI.
export async function assertWithinLimit(
	ctx: Ctx,
	workspaceId: string,
	resource: LimitedResource
): Promise<void> {
	const plan = await currentPlan(ctx, workspaceId);
	const cap = planLimits(plan)[LIMIT_FIELD[resource]];
	const used = await countWorkspaceRows(ctx, resource, workspaceId);
	if (used >= cap) {
		throw new ConvexError(
			`${resource} limit reached: the ${plan} plan allows ${cap} ${resource} — upgrade to add more`
		);
	}
}

// The workspace's plan, its caps, and live usage against them — one round-trip for a
// "3 / 10 notes used" meter or an upgrade nudge. Member-readable (the caps aren't
// secret); the RLS net additionally scopes the counts to the caller's workspace.
export const entitlements = maybeAuthedQuery({
	args: { workspaceId: v.string() },
	returns: v.object({
		plan: planValidator,
		limits: v.object({ maxDocuments: v.number(), maxNotes: v.number() }),
		usage: v.object({ documents: v.number(), notes: v.number() }),
	}),
	handler: async (ctx, args) => {
		// Boot window: this mounts on the dashboard shell and subscribes before the
		// Convex token lands. Return the default-plan shape with zero usage instead of
		// throwing; the meter re-runs with real caps/usage the instant auth lands.
		if (ctx.userId === null) {
			const bootLimits = planLimits(DEFAULT_PLAN);
			return {
				plan: DEFAULT_PLAN,
				limits: {
					maxDocuments: bootLimits.maxDocuments,
					maxNotes: bootLimits.maxNotes,
				},
				usage: { documents: 0, notes: 0 },
			};
		}
		await assertMember(ctx, args.workspaceId);
		const plan: PlanName = await currentPlan(ctx, args.workspaceId);
		const limits = planLimits(plan);
		const [documents, notes] = await Promise.all([
			countWorkspaceRows(ctx, "documents", args.workspaceId),
			countWorkspaceRows(ctx, "notes", args.workspaceId),
		]);
		return {
			plan,
			limits: { maxDocuments: limits.maxDocuments, maxNotes: limits.maxNotes },
			usage: { documents, notes },
		};
	},
});
