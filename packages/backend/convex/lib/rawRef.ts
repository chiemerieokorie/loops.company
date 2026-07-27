import { v } from "convex/values";

// Convex validator for an R2 raw-blob pointer: a Trigger.dev task uploads the bytes
// to R2 and hands this small pointer back to persist on the owning row (a note's
// `exportRef`, a document import's `ref`). Single source of truth for the shape, so
// the schema and the task callbacks can't drift.
//
// This was previously imported from `@chiemerieokorie/trigger-kit/convex`. It's
// defined locally now so the Convex backend — and therefore the Next.js app that
// depends on it — installs without access to the private GitHub Packages registry.
// The task side (packages/jobs) still produces this shape via the toolkit's
// putRaw/putRawAt, so the two must stay in agreement: see the fixture in
// convex/jobs.test.ts, which is the contract these fields were derived from.
export const rawRef = v.object({
	// R2 bucket the object lives in.
	bucket: v.string(),
	// Object key within the bucket, e.g. "runway/note-markdown/{workspaceId}:{noteId}.md".
	key: v.string(),
	contentType: v.string(),
	sizeBytes: v.number(),
	// Provenance: which app wrote it, and what kind of blob it is.
	source: v.string(),
	sourceType: v.string(),
	// Epoch millis the blob was written.
	fetchedAt: v.number(),
	// Present only for blobs derived from an external URL (the `parse-document`
	// task passes a sourceUrl through); absent for internally generated content
	// such as note exports.
	sourceUrl: v.optional(v.string()),
});
