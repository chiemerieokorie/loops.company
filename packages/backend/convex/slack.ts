/**
 * Slack "Wins Bot" notification functions.
 *
 * Posts growth + engagement wins to the configured wins channel, plus a daily
 * and weekly aggregate report. Every path is opt-in: `sendSlackMessage`
 * (lib/slack) no-ops when `SLACK_BOT_TOKEN`/`SLACK_WINS_CHANNEL` are unset, so
 * dev/CI stay silent. Reports are additionally gated on
 * `SLACK_REPORTS_ENABLED=true` (set on prod only) so only production posts the
 * aggregates while every deployment can still relay event pings.
 *
 * Event wins funnel through a single `postWin` action over a discriminated
 * `WinEvent` union (scheduled from the originating write, never inline, so a
 * Slack outage can't roll it back). `postWin` numbers each message with a
 * per-type monthly counter and rolls the counter back if delivery fails, so the
 * "#N this month" sequence stays dense.
 *
 * Runs in the default V8 runtime (no "use node"): `fetch` and the Better Auth
 * component reads used here are all available there.
 */

import type { FunctionReturnType } from "convex/server";
import { v } from "convex/values";

import { components, internal } from "./_generated/api";
import {
	type ActionCtx,
	internalAction,
	internalMutation,
	internalQuery,
} from "./_generated/server";
import { authComponent } from "./auth";
import {
	buildReportMessage,
	formatWin,
	isSlackConfigured,
	type ReportUserCounts,
	sendSlackMessage,
	type WinContext,
	type WinEvent,
	type WinIdentity,
} from "./lib/slack";

// The scheduled payload for `postWin`. Kept in sync with the `WinEvent` type in
// lib/slack (which the pure formatter consumes).
const winEventValidator = v.union(
	v.object({ type: v.literal("signup"), userId: v.string() }),
	v.object({
		type: v.literal("member"),
		userId: v.string(),
		workspaceId: v.string(),
		role: v.string(),
	}),
	v.object({
		type: v.literal("subscription"),
		workspaceId: v.string(),
		plan: v.string(),
		amountCents: v.optional(v.number()),
		currency: v.optional(v.string()),
		isRenewal: v.boolean(),
	})
);

// =============================================================================
// Resolvers + counter (event pings carry only ids)
// =============================================================================

/** A Better Auth user's display name + email by id, for the win message. */
export const getWinIdentity = internalQuery({
	args: { userId: v.string() },
	returns: v.object({
		name: v.union(v.string(), v.null()),
		email: v.union(v.string(), v.null()),
	}),
	handler: async (ctx, args) => {
		const user = await authComponent.getAnyUserById(ctx, args.userId);
		return { name: user?.name ?? null, email: user?.email ?? null };
	},
});

/**
 * Adjust the monthly per-type win counter by `delta` (default +1) and return
 * the new count, floored at 0. `postWin` bumps +1 to number the message, then
 * rolls back -1 if delivery fails, so the count tracks DELIVERED wins rather
 * than attempts. OCC serializes concurrent bumps, so no increment is lost.
 */
export const bumpWinCounter = internalMutation({
	args: { key: v.string(), delta: v.optional(v.number()) },
	returns: v.number(),
	handler: async (ctx, args) => {
		const delta = args.delta ?? 1;
		const now = Date.now();
		const existing = await ctx.db
			.query("winCounters")
			.withIndex("by_key", (q) => q.eq("key", args.key))
			.first();
		if (existing) {
			const count = Math.max(0, existing.count + delta);
			await ctx.db.patch(existing._id, { count, updatedAt: now });
			return count;
		}
		const count = Math.max(0, delta);
		await ctx.db.insert("winCounters", {
			key: args.key,
			count,
			updatedAt: now,
		});
		return count;
	},
});

/** The Better Auth org's display name, or the workspace id as a fallback. */
async function resolveWorkspaceName(
	ctx: ActionCtx,
	workspaceId: string
): Promise<string> {
	const org = (await ctx.runQuery(components.betterAuth.adapter.findOne, {
		model: "organization",
		where: [{ field: "id", value: workspaceId }],
	})) as { name?: string } | null;
	return org?.name ?? workspaceId;
}

const ANONYMOUS: WinIdentity = { name: null, email: null };

// Resolve identity + workspace name for a win. Best-effort: a lookup failure is
// logged and swallowed (identity degrades to anonymous "***"), so a win is never
// dropped just because the user/org row couldn't be read.
async function resolveWin(
	ctx: ActionCtx,
	event: WinEvent
): Promise<WinContext> {
	try {
		if (event.type === "signup") {
			const identity = await ctx.runQuery(internal.slack.getWinIdentity, {
				userId: event.userId,
			});
			return { identity };
		}
		if (event.type === "member") {
			const [identity, workspaceName] = await Promise.all([
				ctx.runQuery(internal.slack.getWinIdentity, { userId: event.userId }),
				resolveWorkspaceName(ctx, event.workspaceId),
			]);
			return { identity, workspaceName };
		}
		const ownerUserId = await ctx.runQuery(
			internal.slack.internal.getWorkspaceOwnerUserId,
			{ workspaceId: event.workspaceId }
		);
		const [identity, workspaceName] = await Promise.all([
			ownerUserId
				? ctx.runQuery(internal.slack.getWinIdentity, { userId: ownerUserId })
				: Promise.resolve(ANONYMOUS),
			resolveWorkspaceName(ctx, event.workspaceId),
		]);
		return { identity, workspaceName };
	} catch (error) {
		console.error(`[slack-wins] resolve failed for ${event.type}:`, error);
		return { identity: ANONYMOUS };
	}
}

/** Month bucket for the counter key: "YYYY-MM" (UTC). */
function currentMonthKey(now: number): string {
	const d = new Date(now);
	const month = `${d.getUTCMonth() + 1}`.padStart(2, "0");
	return `${d.getUTCFullYear()}-${month}`;
}

// =============================================================================
// Event pings
// =============================================================================

/**
 * Post a win to Slack. Scheduled from the originating write (signup trigger,
 * member trigger, Stripe webhook) so a failure here never affects that write.
 * No-ops when the bot is unconfigured. Bumps the per-type monthly counter to
 * number the message, then rolls it back if delivery fails.
 */
export const postWin = internalAction({
	args: { event: winEventValidator },
	returns: v.null(),
	handler: async (ctx, args) => {
		if (!isSlackConfigured()) {
			return null;
		}
		const event = args.event as WinEvent;
		const resolved = await resolveWin(ctx, event);

		const counterKey = `${event.type}:${currentMonthKey(Date.now())}`;
		const count = await ctx.runMutation(internal.slack.bumpWinCounter, {
			key: counterKey,
		});

		const delivered = await sendSlackMessage(formatWin(event, resolved, count));
		if (!delivered) {
			// Give the number back so "#N this month" reflects delivered wins.
			await ctx.runMutation(internal.slack.bumpWinCounter, {
				key: counterKey,
				delta: -1,
			});
		}
		return null;
	},
});

// =============================================================================
// Reports
// =============================================================================

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const SEVEN_DAYS_MS = 7 * ONE_DAY_MS;
const USER_PAGE_SIZE = 200;

function reportsEnabled(): boolean {
	return process.env.SLACK_REPORTS_ENABLED === "true";
}

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC",
});

/** Start of the UTC day containing `ts` (YYYY-MM-DD 00:00:00 UTC). */
function startOfUtcDay(ts: number): number {
	const d = new Date(ts);
	return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}

function toMs(value: unknown): number {
	if (typeof value === "number") {
		return value;
	}
	const parsed = Date.parse(String(value));
	return Number.isNaN(parsed) ? 0 : parsed;
}

/**
 * Count total + new users by paginating the Better Auth component's `user`
 * table. Fine at current scale; if the user base grows large, switch to a
 * maintained counter updated from the signup hook.
 */
async function countUsers(
	ctx: ActionCtx,
	since: number,
	until: number
): Promise<ReportUserCounts> {
	let cursor: string | null = null;
	let totalUsers = 0;
	let newUsers = 0;

	for (;;) {
		const result: FunctionReturnType<
			typeof components.betterAuth.adapter.findMany
		> = await ctx.runQuery(components.betterAuth.adapter.findMany, {
			model: "user",
			paginationOpts: { cursor, numItems: USER_PAGE_SIZE },
		});
		for (const user of result.page) {
			totalUsers += 1;
			const createdAt = toMs((user as { createdAt?: unknown }).createdAt);
			if (createdAt >= since && createdAt < until) {
				newUsers += 1;
			}
		}
		if (result.isDone) {
			break;
		}
		cursor = result.continueCursor;
	}

	return { totalUsers, newUsers };
}

async function sendReport(
	ctx: ActionCtx,
	cadence: "Daily" | "Weekly",
	since: number,
	until: number,
	periodLabel: string
): Promise<void> {
	if (!reportsEnabled()) {
		return;
	}
	const [stats, users] = await Promise.all([
		ctx.runQuery(internal.slack.internal.getReportStats, { since, until }),
		countUsers(ctx, since, until),
	]);
	await sendSlackMessage(
		buildReportMessage({ cadence, periodLabel, stats, users, quoteSeed: since })
	);
}

export const sendDailyReport = internalAction({
	args: {},
	returns: v.null(),
	handler: async (ctx) => {
		// Cover the most recent completed UTC day: [00:00, 24:00).
		const until = startOfUtcDay(Date.now());
		const since = until - ONE_DAY_MS;
		await sendReport(ctx, "Daily", since, until, DATE_FORMAT.format(since));
		return null;
	},
});

export const sendWeeklyReport = internalAction({
	args: {},
	returns: v.null(),
	handler: async (ctx) => {
		// Cover the most recent 7 completed UTC days ending at today 00:00 UTC.
		const until = startOfUtcDay(Date.now());
		const since = until - SEVEN_DAYS_MS;
		const label = `${DATE_FORMAT.format(since)} → ${DATE_FORMAT.format(until - 1)}`;
		await sendReport(ctx, "Weekly", since, until, label);
		return null;
	},
});
