import { rawRef } from "./lib/rawRef";
import { ConvexError, v } from "convex/values";

import { internal } from "./_generated/api";
import { internalMutation, internalQuery } from "./_generated/server";
import { assertMember } from "./lib/access";
import { authedMutation, authedQuery } from "./lib/functions";

// External document imports processed by the `parse-document` Trigger.dev task
// (docling → R2). Flow: a member `request`s an import → a row is created `pending`
// and an internal action is scheduled to enqueue the task → the task converts the
// source and calls back → `attachRef`/`markFailed` finalises the row. Every entry
// point is membership-gated (the RLS net in lib/functions is the backstop); the two
// internal writes run on the raw db from trusted contexts (the enqueue action / the
// verified HTTP callback).

const importStatus = v.union(
	v.literal("pending"),
	v.literal("ready"),
	v.literal("failed")
);

// Kick off an import: record the request, then schedule the enqueue action (which
// runs in Node and triggers the Trigger.dev task — a mutation can't do that itself).
export const request = authedMutation({
	args: {
		workspaceId: v.string(),
		sourceUrl: v.string(),
		filename: v.string(),
	},
	returns: v.id("documentImports"),
	handler: async (ctx, args) => {
		await assertMember(ctx, args.workspaceId);
		const importId = await ctx.db.insert("documentImports", {
			workspaceId: args.workspaceId,
			sourceUrl: args.sourceUrl,
			filename: args.filename,
			status: "pending",
		});
		await ctx.scheduler.runAfter(0, internal.jobs.enqueueDocumentImport, {
			importId,
		});
		return importId;
	},
});

// The workspace's imports, newest first.
export const list = authedQuery({
	args: { workspaceId: v.string() },
	returns: v.array(
		v.object({
			_id: v.id("documentImports"),
			_creationTime: v.number(),
			sourceUrl: v.string(),
			filename: v.string(),
			status: importStatus,
			ref: v.optional(rawRef),
			error: v.optional(v.string()),
		})
	),
	handler: async (ctx, args) => {
		await assertMember(ctx, args.workspaceId);
		const rows = await ctx.db
			.query("documentImports")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.order("desc")
			.collect();
		return rows.map((row) => ({
			_id: row._id,
			_creationTime: row._creationTime,
			sourceUrl: row.sourceUrl,
			filename: row.filename,
			status: row.status,
			ref: row.ref,
			error: row.error,
		}));
	},
});

// Load an import for the enqueue action. Internal: called from `jobs
// .enqueueDocumentImport` (scheduled by `request`, so the membership check already
// happened at request time).
export const loadForJob = internalQuery({
	args: { importId: v.id("documentImports") },
	returns: v.object({
		workspaceId: v.string(),
		sourceUrl: v.string(),
		filename: v.string(),
	}),
	handler: async (ctx, args) => {
		const row = await ctx.db.get(args.importId);
		if (!row) {
			throw new ConvexError("import not found");
		}
		return {
			workspaceId: row.workspaceId,
			sourceUrl: row.sourceUrl,
			filename: row.filename,
		};
	},
});

// Finalise an import as ready with its R2 pointer. Internal: called by the verified
// HTTP callback (convex/http.ts). A no-op if the row was deleted meanwhile.
export const attachRef = internalMutation({
	args: { importId: v.id("documentImports"), ref: rawRef },
	returns: v.null(),
	handler: async (ctx, args) => {
		const row = await ctx.db.get(args.importId);
		if (row) {
			await ctx.db.patch(args.importId, { status: "ready", ref: args.ref });
		}
		return null;
	},
});

// Finalise an import as failed. Internal: called by the enqueue action if the task
// couldn't be triggered, or by the callback path on a reported failure.
export const markFailed = internalMutation({
	args: { importId: v.id("documentImports"), error: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const row = await ctx.db.get(args.importId);
		if (row) {
			await ctx.db.patch(args.importId, {
				status: "failed",
				error: args.error,
			});
		}
		return null;
	},
});
