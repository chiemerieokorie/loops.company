import { cronJobs } from "convex/server";
import { v } from "convex/values";

import { components, internal } from "./_generated/api";
import { internalMutation } from "./_generated/server";

const crons = cronJobs();

crons.interval(
	"Clean up finalized Resend emails",
	{ hours: 1 },
	internal.crons.cleanupResend,
	{}
);

crons.interval(
	"Purge notes and documents past the trash retention window",
	{ hours: 24 },
	internal.crons.purgeExpiredTrash,
	{}
);

// Slack "wins bot" aggregate reports (convex/slack). Both no-op unless
// SLACK_REPORTS_ENABLED=true (set on prod only) AND the bot is configured
// (SLACK_BOT_TOKEN + SLACK_WINS_CHANNEL), so dev/CI deployments post nothing.
crons.daily(
	"slack-daily-report",
	{ hourUTC: 13, minuteUTC: 30 },
	internal.slack.sendDailyReport,
	{}
);

crons.weekly(
	"slack-weekly-report",
	{ dayOfWeek: "monday", hourUTC: 14, minuteUTC: 0 },
	internal.slack.sendWeeklyReport,
	{}
);

const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const TRASH_RETENTION_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * The Resend component retains finalized (delivered/bounced/cancelled) emails
 * until you prune them. This removes delivered/finalized emails after a week,
 * and abandoned emails (which usually indicate a bug) after a month.
 */
export const cleanupResend = internalMutation({
	args: {},
	returns: v.null(),
	handler: async (ctx) => {
		await ctx.scheduler.runAfter(0, components.resend.lib.cleanupOldEmails, {
			olderThan: ONE_WEEK_MS,
		});
		await ctx.scheduler.runAfter(
			0,
			components.resend.lib.cleanupAbandonedEmails,
			{ olderThan: 4 * ONE_WEEK_MS }
		);
		return null;
	},
});

/**
 * Permanently delete notes and documents trashed longer ago than the retention
 * window. Selects via each table's `by_trashed` index (numeric `trashedAt` only —
 * live rows have it absent, so the `gte(1)` lower bound excludes them) and fans out
 * one purge per row so a large sweep never runs as a single oversized transaction.
 */
export const purgeExpiredTrash = internalMutation({
	args: {},
	returns: v.null(),
	handler: async (ctx) => {
		const cutoff = Date.now() - TRASH_RETENTION_MS;
		const notes = await ctx.db
			.query("notes")
			.withIndex("by_trashed", (q) =>
				q.gte("trashedAt", 1).lte("trashedAt", cutoff)
			)
			.collect();
		for (const note of notes) {
			await ctx.scheduler.runAfter(0, internal.notes.purge, {
				noteId: note._id,
			});
		}
		const documents = await ctx.db
			.query("documents")
			.withIndex("by_trashed", (q) =>
				q.gte("trashedAt", 1).lte("trashedAt", cutoff)
			)
			.collect();
		for (const document of documents) {
			await ctx.scheduler.runAfter(0, internal.prosemirror.purge, {
				documentId: document._id,
			});
		}
		return null;
	},
});

export default crons;
