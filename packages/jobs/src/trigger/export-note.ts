import { putRawAt, type RawRef } from "@chiemerieokorie/trigger-kit";
import { schemaTask } from "@trigger.dev/sdk";
import { postCallback } from "../callback.js";
import { noteExportPayload } from "../payloads.js";

// Internal-content job: render a note to Markdown and stash it in R2, then hand the
// RawRef back to Convex to persist on the note row. Needs only the R2 env
// (rawStore) — no docling service — so it's the simplest end-to-end proof of the
// Convex → Trigger.dev → R2 → callback bridge.
//
// `putRawAt` uses a DETERMINISTIC key (`{workspaceId}:{noteId}`), so re-exporting
// the same note overwrites the same object instead of orphaning blobs.
export const exportNoteTask = schemaTask({
	id: "export-note",
	schema: noteExportPayload,
	run: async (payload): Promise<{ ref: RawRef }> => {
		const markdown = `# ${payload.title}\n\n${payload.body}\n`;
		const ref = await putRawAt({
			id: `${payload.workspaceId}:${payload.noteId}`,
			source: "runway",
			sourceType: "note-markdown",
			contentType: "text/markdown",
			body: markdown,
		});
		await postCallback(payload.callbackUrl, { noteId: payload.noteId, ref });
		return { ref };
	},
});
