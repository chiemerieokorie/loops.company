import { v } from "convex/values";

// Storage pointer written by Trigger.dev jobs after an R2 upload. Keep this contract
// local to the backend so the web deployment does not need the jobs storage package.
export const rawRef = v.object({
	bucket: v.string(),
	key: v.string(),
	contentType: v.string(),
	sizeBytes: v.number(),
	source: v.string(),
	sourceType: v.string(),
	fetchedAt: v.number(),
	sourceUrl: v.optional(v.string()),
});
