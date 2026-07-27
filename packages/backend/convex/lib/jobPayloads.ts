import { z } from "zod";

// The Trigger.dev task payload contracts. Mirrors packages/jobs/src/payloads.ts,
// which is the task side of the same wire contract — the two are deployed
// separately (Convex vs. the self-hosted Trigger.dev instance), so each owns its
// own copy rather than the backend taking a package dependency on @runway/jobs.
// That dependency previously pulled the private @chiemerieokorie/* toolkit into
// the web app's install graph; keeping the contract local keeps the Vercel build
// free of the private registry entirely.
//
// The tasks validate their input against their copy via `schemaTask`, so a drift
// between the two surfaces as a task-level validation failure rather than silent
// corruption. Keep them in sync when either changes.

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
