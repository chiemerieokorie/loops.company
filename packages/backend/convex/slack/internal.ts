import { v } from "convex/values";

import { internalQuery } from "../_generated/server";

// Resolve a workspace's owner userId from the `memberships` projection, so the
// subscription-win action (../slack.ts) can look up the owner's email. Null when
// the workspace has no owner row (shouldn't happen, but never throw a win path).
export const getWorkspaceOwnerUserId = internalQuery({
	args: { workspaceId: v.string() },
	returns: v.union(v.string(), v.null()),
	handler: async (ctx, args) => {
		const members = await ctx.db
			.query("memberships")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.collect();
		const owner = members.find((member) => member.role === "owner");
		return owner?.userId ?? null;
	},
});

// Data source for the daily/weekly Slack reports (../slack.ts). Aggregates the
// app's own tables over a [since, until) window plus all-time totals. User counts
// live in the Better Auth component, so they're gathered action-side in ../slack.ts
// (paginating the component) rather than here.
//
// SCALE: these full-table scans are fine at starter/early scale. If a table grows
// large, replace the scan with a maintained counter updated from the write path.

export const getReportStats = internalQuery({
	args: { since: v.number(), until: v.number() },
	returns: v.object({
		newWorkspaces: v.number(),
		documentsCreated: v.number(),
		notesCreated: v.number(),
		totalWorkspaces: v.number(),
		totalDocuments: v.number(),
		totalNotes: v.number(),
	}),
	handler: async (ctx, args) => {
		const inWindow = (t: number): boolean => t >= args.since && t < args.until;

		// Every workspace (org) has exactly one owner membership, so counting owner
		// rows is a faithful workspace count without reaching into the component.
		const memberships = await ctx.db.query("memberships").collect();
		let totalWorkspaces = 0;
		let newWorkspaces = 0;
		for (const membership of memberships) {
			if (membership.role !== "owner") {
				continue;
			}
			totalWorkspaces += 1;
			if (inWindow(membership._creationTime)) {
				newWorkspaces += 1;
			}
		}

		const documents = await ctx.db.query("documents").collect();
		let totalDocuments = 0;
		let documentsCreated = 0;
		for (const document of documents) {
			totalDocuments += 1;
			if (inWindow(document._creationTime)) {
				documentsCreated += 1;
			}
		}

		const notes = await ctx.db.query("notes").collect();
		let totalNotes = 0;
		let notesCreated = 0;
		for (const note of notes) {
			totalNotes += 1;
			if (inWindow(note._creationTime)) {
				notesCreated += 1;
			}
		}

		return {
			newWorkspaces,
			documentsCreated,
			notesCreated,
			totalWorkspaces,
			totalDocuments,
			totalNotes,
		};
	},
});
