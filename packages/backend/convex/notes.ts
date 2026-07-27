import { ConvexError, v } from "convex/values";

import { internalMutation, internalQuery } from "./_generated/server";
import { assertWithinLimit } from "./entitlement";
import { assertMember } from "./lib/access";
import { authedMutation, authedQuery } from "./lib/functions";
import { rawRef } from "./lib/rawRef";

// The `notes` example — a minimal workspace-scoped CRUD demonstrating the RLS
// pattern (schema.ts + lib/functions) plus the soft-delete/trash pattern. Every call
// carries a `workspaceId` (or a note whose workspace is resolved), and `assertMember`
// is the authorization chokepoint; the RLS net in lib/functions is the deny-by-default
// backstop. Deleting moves a note to the trash (`trashedAt`); the retention cron
// (convex/crons.purgeExpiredTrash) hard-deletes it after the window.

export const list = authedQuery({
	args: { workspaceId: v.string() },
	returns: v.array(
		v.object({
			_id: v.id("notes"),
			_creationTime: v.number(),
			workspaceId: v.string(),
			title: v.string(),
			body: v.string(),
			createdBy: v.string(),
		})
	),
	handler: async (ctx, args) => {
		await assertMember(ctx, args.workspaceId);
		const rows = await ctx.db
			.query("notes")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.order("desc")
			.collect();
		// Hide trashed notes from the live list. Bounded by the plan's note cap, so this
		// in-memory filter never scans an unbounded set.
		return rows
			.filter((note) => note.trashedAt === undefined)
			.map((note) => ({
				_id: note._id,
				_creationTime: note._creationTime,
				workspaceId: note.workspaceId,
				title: note.title,
				body: note.body,
				createdBy: note.createdBy,
			}));
	},
});

export const create = authedMutation({
	args: { workspaceId: v.string(), title: v.string(), body: v.string() },
	returns: v.id("notes"),
	handler: async (ctx, args) => {
		await assertMember(ctx, args.workspaceId);
		// Enforce the workspace plan's note cap before inserting.
		await assertWithinLimit(ctx, args.workspaceId, "notes");
		return await ctx.db.insert("notes", {
			workspaceId: args.workspaceId,
			title: args.title,
			body: args.body,
			createdBy: ctx.userId,
		});
	},
});

// Move a note to the trash (soft delete). Recoverable via `restore` until the
// retention cron purges it. A no-op if the note is already gone.
export const trash = authedMutation({
	args: { noteId: v.id("notes") },
	returns: v.null(),
	handler: async (ctx, args) => {
		const note = await ctx.db.get(args.noteId);
		if (note) {
			await assertMember(ctx, note.workspaceId);
			await ctx.db.patch(args.noteId, {
				trashedAt: Date.now(),
				trashedBy: ctx.userId,
			});
		}
		return null;
	},
});

// Bring a trashed note back to the live list.
export const restore = authedMutation({
	args: { noteId: v.id("notes") },
	returns: v.null(),
	handler: async (ctx, args) => {
		const note = await ctx.db.get(args.noteId);
		if (note) {
			await assertMember(ctx, note.workspaceId);
			await ctx.db.patch(args.noteId, {
				trashedAt: undefined,
				trashedBy: undefined,
			});
		}
		return null;
	},
});

// The workspace's trashed notes, most-recently-trashed first.
export const listTrashed = authedQuery({
	args: { workspaceId: v.string() },
	returns: v.array(
		v.object({
			_id: v.id("notes"),
			title: v.string(),
			body: v.string(),
			trashedAt: v.number(),
		})
	),
	handler: async (ctx, args) => {
		await assertMember(ctx, args.workspaceId);
		const rows = await ctx.db
			.query("notes")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.collect();
		return rows
			.flatMap((note) =>
				note.trashedAt === undefined
					? []
					: [
							{
								_id: note._id,
								title: note.title,
								body: note.body,
								trashedAt: note.trashedAt,
							},
						]
			)
			.sort((a, b) => b.trashedAt - a.trashedAt);
	},
});

// Permanently delete a trashed note now (skip the retention window).
export const deleteForever = authedMutation({
	args: { noteId: v.id("notes") },
	returns: v.null(),
	handler: async (ctx, args) => {
		const note = await ctx.db.get(args.noteId);
		if (note) {
			await assertMember(ctx, note.workspaceId);
			await ctx.db.delete(args.noteId);
		}
		return null;
	},
});

// Hard-delete a single note. Internal-only: called by the retention cron
// (convex/crons.purgeExpiredTrash), which has already selected expired-trash rows, so
// there is no membership context to assert here.
export const purge = internalMutation({
	args: { noteId: v.id("notes") },
	returns: v.null(),
	handler: async (ctx, args) => {
		await ctx.db.delete(args.noteId);
		return null;
	},
});

// --- Trigger.dev `export-note` job bridge (see convex/jobs.ts) ---

// Load a note's exportable content, asserting the caller is a member of its
// workspace. Internal: called from the `jobs.exportNote` action, which passes the
// authenticated `userId` (an action can't run the membership check itself — no db).
export const loadForExport = internalQuery({
	args: { noteId: v.id("notes"), userId: v.string() },
	returns: v.object({
		workspaceId: v.string(),
		title: v.string(),
		body: v.string(),
	}),
	handler: async (ctx, args) => {
		const note = await ctx.db.get(args.noteId);
		if (!note || note.trashedAt !== undefined) {
			throw new ConvexError("note not found");
		}
		const membership = await ctx.db
			.query("memberships")
			.withIndex("by_user_workspace", (q) =>
				q.eq("userId", args.userId).eq("workspaceId", note.workspaceId)
			)
			.first();
		if (!membership) {
			throw new ConvexError("forbidden: not a member of this workspace");
		}
		return {
			workspaceId: note.workspaceId,
			title: note.title,
			body: note.body,
		};
	},
});

// Persist the R2 pointer the `export-note` task produced. Internal: called by the
// HTTP callback (convex/http.ts) after verifying the shared secret, so there's no
// membership context here. A no-op if the note was deleted before the job finished.
export const attachExportRef = internalMutation({
	args: { noteId: v.id("notes"), ref: rawRef },
	returns: v.null(),
	handler: async (ctx, args) => {
		const note = await ctx.db.get(args.noteId);
		if (note) {
			await ctx.db.patch(args.noteId, { exportRef: args.ref });
		}
		return null;
	},
});
