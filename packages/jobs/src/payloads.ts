import { z } from "zod";

// The task payload contracts, defined as Zod schemas so the tasks validate their
// input (via `schemaTask`) AND the Convex backend can import the inferred TYPES to
// build type-checked `tasks.trigger(...)` calls. This file has no Trigger.dev /
// trigger-kit / docling imports on purpose — it's the one module the backend pulls
// in (as `@runway/jobs/payloads`), so it must stay dependency-light.

// `exportNoteTask` — export a note's content to R2 as Markdown.
export const noteExportPayload = z.object({
	noteId: z.string(),
	workspaceId: z.string(),
	title: z.string(),
	body: z.string(),
	// Convex HTTP endpoint the task POSTs the resulting RawRef back to.
	callbackUrl: z.string().url(),
});
export type NoteExportPayload = z.infer<typeof noteExportPayload>;

// `parseDocumentTask` — convert an external PDF/HTML URL to Markdown via docling,
// then store it in R2.
export const parseDocumentPayload = z.object({
	importId: z.string(),
	workspaceId: z.string(),
	sourceUrl: z.string().url(),
	filename: z.string(),
	callbackUrl: z.string().url(),
});
export type ParseDocumentPayload = z.infer<typeof parseDocumentPayload>;
