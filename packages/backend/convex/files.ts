import { v } from "convex/values";
import { authedMutation, authedQuery } from "./lib/functions";
import { loadDocForAccess } from "./prosemirror";

// Image (and other file) uploads for the document editor, backed by Convex file
// storage. Flow: the client calls `generateUploadUrl` → POSTs the file to that URL
// → receives a `storageId` → calls `getUrl` to resolve the served URL → embeds it
// as an <img src>. The URL is stored (not a base64 data URI), so it stays small in
// the prosemirror-sync OT log.
//
// TENANCY: both endpoints take the `docId` the image is being added to and assert the
// caller's access to that document (`loadDocForAccess`). Uploading needs WRITE access
// (an editor) and resolving a stored file needs READ — so a private doc's media follows
// the same grant rules as its content; there's no "any authed user can write/read
// arbitrary storage" gap.
//
// CAVEAT (accepted starter behavior): a Convex *served* URL, once resolved, is
// public-by-URL (a browser `<img>` loads it without auth). Since the URL only ever
// reaches members (it's embedded in a workspace-gated document and resolved only by
// members here), that's an acceptable simplification. For strictly-private media,
// serve files through an authenticated HTTP action instead.

// A short-lived upload URL, for someone with WRITE access to the target document.
export const generateUploadUrl = authedMutation({
	args: { docId: v.string() },
	returns: v.string(),
	handler: async (ctx, args) => {
		await loadDocForAccess(ctx, args.docId, "write");
		return await ctx.storage.generateUploadUrl();
	},
});

// Resolve a stored file's served URL (or null if it no longer exists), for someone
// with READ access to the target document.
export const getUrl = authedQuery({
	args: { docId: v.string(), storageId: v.id("_storage") },
	returns: v.union(v.null(), v.string()),
	handler: async (ctx, args) => {
		await loadDocForAccess(ctx, args.docId, "read");
		return await ctx.storage.getUrl(args.storageId);
	},
});
