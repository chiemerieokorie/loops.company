"use node";

import { tasks } from "@trigger.dev/sdk";
import { v } from "convex/values";

import { internal } from "./_generated/api";
import { internalAction } from "./_generated/server";
import { authedAction } from "./lib/functions";
import type {
	NoteExportPayload,
	ParseDocumentPayload,
} from "./lib/jobPayloads";

// The Convex → Trigger.dev bridge. These actions run in the Node runtime ("use
// node") because `tasks.trigger` (the @trigger.dev/sdk) needs Node. They authorize
// the caller, gather the task payload from internal queries, and enqueue a run on
// the self-hosted Trigger.dev instance. Completion comes back asynchronously via the
// HTTP callbacks in convex/http.ts — these actions don't wait on the run.
//
// Requires the Convex deployment env: TRIGGER_SECRET_KEY (auth to the instance) and,
// if not using the cloud default, TRIGGER_API_URL=https://trigger.loops.company.

// The task IDs, kept as string constants so a rename is a single edit. They must
// match the `id` on each `task()`/`schemaTask()` in packages/jobs/src/trigger.
const EXPORT_NOTE_TASK = "export-note";
const PARSE_DOCUMENT_TASK = "parse-document";

// Build a Convex HTTP-action callback URL. CONVEX_SITE_URL is provided by the
// runtime and is the `.convex.site` origin that serves convex/http.ts.
function callbackUrl(path: string): string {
	const base = process.env.CONVEX_SITE_URL;
	if (!base) {
		throw new Error("CONVEX_SITE_URL is not set");
	}
	return `${base}${path}`;
}

// Export a note to Markdown in R2 via the `export-note` task. Membership is checked
// in `internal.notes.loadForExport` using the authenticated user id.
export const exportNote = authedAction({
	args: { noteId: v.id("notes") },
	returns: v.object({ runId: v.string() }),
	handler: async (ctx, args) => {
		const note = await ctx.runQuery(internal.notes.loadForExport, {
			noteId: args.noteId,
			userId: ctx.userId,
		});
		const payload: NoteExportPayload = {
			noteId: args.noteId,
			workspaceId: note.workspaceId,
			title: note.title,
			body: note.body,
			callbackUrl: callbackUrl("/trigger/note-export-complete"),
		};
		const handle = await tasks.trigger(EXPORT_NOTE_TASK, payload);
		return { runId: handle.id };
	},
});

// Enqueue the `parse-document` task for a `documentImports` row. Internal: scheduled
// by `documentImports.request` after it has created the row and checked membership.
// If triggering fails, mark the import failed so it doesn't hang on "pending".
export const enqueueDocumentImport = internalAction({
	args: { importId: v.id("documentImports") },
	returns: v.null(),
	handler: async (ctx, args) => {
		const imp = await ctx.runQuery(internal.documentImports.loadForJob, {
			importId: args.importId,
		});
		const payload: ParseDocumentPayload = {
			importId: args.importId,
			workspaceId: imp.workspaceId,
			sourceUrl: imp.sourceUrl,
			filename: imp.filename,
			callbackUrl: callbackUrl("/trigger/import-complete"),
		};
		try {
			// Key the run to the import row so a re-run of this enqueue (retry, double
			// schedule) dedups to the same Trigger.dev run instead of launching a second
			// docling conversion and orphaning a unique-keyed R2 blob. Each new import
			// gets a fresh importId, so distinct imports still run independently.
			await tasks.trigger(PARSE_DOCUMENT_TASK, payload, {
				idempotencyKey: args.importId,
			});
		} catch (error) {
			await ctx.runMutation(internal.documentImports.markFailed, {
				importId: args.importId,
				error: error instanceof Error ? error.message : String(error),
			});
			throw error;
		}
		return null;
	},
});
