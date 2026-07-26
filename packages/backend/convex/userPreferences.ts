import { v } from "convex/values";

import { authedMutation, maybeAuthedQuery } from "./lib/functions";

// Per-user settings (NOT workspace-scoped). Today this tracks only whether the caller
// has finished the first-run onboarding checklist — completion is stored as a nullable
// `onboardedAt` timestamp and read as a derived boolean. The RLS net (lib/functions)
// confines every op here to the caller's own row (`doc.userId === ctx.userId`), so
// these functions never need an explicit ownership check.

// Whether the caller has completed (or dismissed) first-run onboarding. Drives the
// dashboard's first-run checklist — it renders only while `completed` is false.
export const getOnboardingState = maybeAuthedQuery({
	args: {},
	returns: v.object({ completed: v.boolean() }),
	handler: async (ctx) => {
		// Boot window: this mounts on the dashboard shell and subscribes before the
		// Convex token lands. Report "nothing to show" (checklist hidden) instead of
		// throwing; the query re-runs with the real value the instant auth lands.
		if (ctx.userId === null) {
			return { completed: true };
		}
		const row = await ctx.db
			.query("userPreferences")
			.withIndex("by_user", (q) => q.eq("userId", ctx.userId))
			.unique();
		return { completed: Boolean(row?.onboardedAt) };
	},
});

// Mark first-run onboarding done (whether the user finished the steps or dismissed the
// checklist). Upserts the caller's row, stamping `onboardedAt`. Idempotent — re-running
// just refreshes the timestamp.
export const completeOnboarding = authedMutation({
	args: {},
	returns: v.null(),
	handler: async (ctx) => {
		const existing = await ctx.db
			.query("userPreferences")
			.withIndex("by_user", (q) => q.eq("userId", ctx.userId))
			.unique();
		const onboardedAt = Date.now();
		if (existing) {
			await ctx.db.patch(existing._id, { onboardedAt });
		} else {
			await ctx.db.insert("userPreferences", {
				userId: ctx.userId,
				onboardedAt,
			});
		}
		return null;
	},
});
