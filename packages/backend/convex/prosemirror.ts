import { ProsemirrorSync } from "@convex-dev/prosemirror-sync";
import { ConvexError, v } from "convex/values";
import { asyncMap } from "convex-helpers";
import { components } from "./_generated/api";
import type { Doc } from "./_generated/dataModel";
import {
	internalMutation,
	type MutationCtx,
	type QueryCtx,
} from "./_generated/server";
import { assertWithinLimit } from "./entitlement";
import {
	assertMember,
	canAccessDoc,
	type Role,
	resolveDocAccess,
} from "./lib/access";
import { authedMutation, authedQuery, publicQuery } from "./lib/functions";

// Collaborative documents. The prosemirror-sync component stores each document's
// OT steps + snapshots (keyed by `docId`); we expose its sync API gated by DOCUMENT
// ACCESS (lib/access `resolveDocAccess`): a "workspace"-visibility doc is
// readable/writable by every member (the default), while a "private" doc is reachable
// only by its creator, workspace owner/admins, and members with an explicit grant
// (viewer = read, editor = write). The `documents` row (schema.ts) maps docId ->
// workspace and holds the creator + visibility the resolver reads.

const prosemirrorSync = new ProsemirrorSync(components.prosemirrorSync);

// Load a document by its sync id, or throw the "not found" that both the sync API and
// the CRUD handlers treat as "denied". No access check — callers layer that on.
async function loadDoc(
	ctx: QueryCtx | MutationCtx,
	docId: string
): Promise<Doc<"documents">> {
	const doc = await ctx.db
		.query("documents")
		.withIndex("by_doc", (q) => q.eq("docId", docId))
		.first();
	if (!doc) {
		throw new ConvexError("document not found");
	}
	return doc;
}

// Load a document AND assert the caller's effective access to it. Exported so the file
// plane (convex/files.ts) gates uploads (write) / reads (read) by the same resolver.
// Throws "document not found" for an unknown id and "forbidden" when access is denied.
export async function loadDocForAccess(
	ctx: QueryCtx | MutationCtx,
	docId: string,
	need: "read" | "write"
): Promise<Doc<"documents">> {
	const doc = await loadDoc(ctx, docId);
	await resolveDocAccess(ctx, doc, need);
	return doc;
}

// Filter a workspace's documents to those the caller can see — mirrors
// `resolveDocAccess` read semantics. Shared docs are always visible; a private doc is
// visible to the creator, an owner/admin, or a grantee. A private doc that isn't
// creator/privileged costs ONE indexed point lookup (by principal+resource), and those
// lookups run concurrently (`asyncMap`). We resolve grants PER DOC rather than scanning
// `by_principal`: that scan would collect the caller's grants across ALL workspaces,
// and a stale grant in a workspace they've since left would trip the grants RLS rule
// (which throws, not filters) and break the whole list. A point lookup only ever reads
// THIS doc's grant, whose workspace the caller is a member of.
async function accessibleDocs(
	ctx: QueryCtx | MutationCtx,
	userId: string,
	role: Role,
	docs: Doc<"documents">[]
): Promise<Doc<"documents">[]> {
	const privileged = role === "owner" || role === "admin";
	const resolved = await asyncMap(docs, async (doc) => {
		if (
			doc.visibility !== "private" ||
			privileged ||
			doc.createdBy === userId
		) {
			return doc;
		}
		const grant = await ctx.db
			.query("grants")
			.withIndex("by_principal_resource", (q) =>
				q
					.eq("principalId", userId)
					.eq("resourceType", "document")
					.eq("resourceId", doc.docId)
			)
			.first();
		return grant ? doc : null;
	});
	return resolved.filter((doc): doc is Doc<"documents"> => doc !== null);
}

// A 256-bit CSPRNG bearer token for a public share link — long and unguessable so a
// PII-bearing document can't be enumerated. Server-side only (never client-supplied).
function generateShareToken(): string {
	const bytes = new Uint8Array(32);
	crypto.getRandomValues(bytes);
	return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

// Drop every share link pointing at a document — called when the document is
// hard-deleted or made private, so no public link outlives (or outreaches) it.
export async function deleteSharesForDoc(
	ctx: MutationCtx,
	docId: string
): Promise<void> {
	const shares = await ctx.db
		.query("shares")
		.withIndex("by_doc", (q) => q.eq("docId", docId))
		.collect();
	for (const share of shares) {
		await ctx.db.delete(share._id);
	}
}

// The `void`-returning sync gates. Passed by REFERENCE (not inline arrows) so `ctx`
// keeps its app-typed signature — an inline arrow would be contextually typed to the
// component's GenericQueryCtx and reject the typed db. Read requires read access
// (viewer or editor); write requires editor — so a viewer-granted member can load a
// private doc's content but the component rejects their step submissions.
function docGate(need: "read" | "write") {
	return async (ctx: QueryCtx | MutationCtx, docId: string): Promise<void> => {
		const doc = await loadDoc(ctx, docId);
		// A trashed document is unreachable: reject sync reads/writes so an editor open
		// when the doc got trashed can't keep mutating a row on its way to being purged
		// (those edits would be silently lost). CRUD handlers load trashed docs directly
		// via `loadDoc` so restore/deleteForever still work.
		if (doc.trashedAt !== undefined) {
			throw new ConvexError("document not found");
		}
		await resolveDocAccess(ctx, doc, need);
	};
}
const assertDocRead = docGate("read");
const assertDocWrite = docGate("write");

// The five sync endpoints are generated by the component and run on the RAW db —
// they do NOT pass through authedQuery/authedMutation and are NOT covered by the RLS
// net in lib/functions. Their ONLY authorization is this checkRead/checkWrite gate:
// `resolveDocAccess` resolves the caller's effective access to the doc and throws when
// denied (read-only for viewers).
export const {
	getSnapshot,
	submitSnapshot,
	latestVersion,
	getSteps,
	submitSteps,
} = prosemirrorSync.syncApi({
	checkRead: assertDocRead,
	checkWrite: assertDocWrite,
});

// Create a document for a workspace: register an empty ProseMirror doc with the
// sync component AND record the workspace mapping in ONE transaction, so the doc
// never exists without the membership gate that protects it. Returns the new
// `docId` for the client to open. The editor never auto-creates (that path would
// hit the gated submitSnapshot with no `documents` row and be correctly denied).
export const createDocument = authedMutation({
	args: { workspaceId: v.string(), title: v.string() },
	returns: v.string(),
	handler: async (ctx, args) => {
		await assertMember(ctx, args.workspaceId);
		// Enforce the workspace plan's document cap before creating.
		await assertWithinLimit(ctx, args.workspaceId, "documents");
		const docId = crypto.randomUUID();
		await prosemirrorSync.create(ctx, docId, { type: "doc", content: [] });
		await ctx.db.insert("documents", {
			docId,
			workspaceId: args.workspaceId,
			title: args.title,
			// The creator is the implicit editor (always full access, even once private).
			// New docs default to "workspace" visibility (absent = shared with members).
			createdBy: ctx.userId,
		});
		return docId;
	},
});

// The workspace's documents the caller can see, newest first. Shared docs to every
// member; private docs only to their creator / owner-admins / grantees (accessibleDocs).
export const list = authedQuery({
	args: { workspaceId: v.string() },
	returns: v.array(
		v.object({
			docId: v.string(),
			title: v.string(),
			createdAt: v.number(),
			visibility: v.union(v.literal("workspace"), v.literal("private")),
		})
	),
	handler: async (ctx, args) => {
		const { role } = await assertMember(ctx, args.workspaceId);
		const docs = await ctx.db
			.query("documents")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.collect();
		const live = docs.filter((doc) => doc.trashedAt === undefined);
		const visible = await accessibleDocs(ctx, ctx.userId, role, live);
		return visible
			.map((doc) => ({
				docId: doc.docId,
				title: doc.title,
				createdAt: doc._creationTime,
				visibility: doc.visibility ?? ("workspace" as const),
			}))
			.sort((a, b) => b.createdAt - a.createdAt);
	},
});

// A single document's metadata (id + title + visibility), or null if it doesn't exist
// or the caller can't see it. Deliberately TOLERANT (publicQuery on the raw db, returns
// null rather than throwing) so the editor page can render a clean "not found / no
// access" state — and so a reactive `useQuery` on a foreign/hand-typed id never throws
// and crashes the shell. Every negative (no doc, no read access, not signed in)
// collapses into one indistinguishable `null`.
export const get = publicQuery({
	args: { docId: v.string() },
	returns: v.union(
		v.null(),
		v.object({
			docId: v.string(),
			title: v.string(),
			visibility: v.union(v.literal("workspace"), v.literal("private")),
		})
	),
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			return null;
		}
		const doc = await ctx.db
			.query("documents")
			.withIndex("by_doc", (q) => q.eq("docId", args.docId))
			.first();
		if (!doc) {
			return null;
		}
		// A trashed document reads as gone — the editor page shows its not-found state
		// rather than opening a doc that's on its way to being purged.
		if (doc.trashedAt !== undefined) {
			return null;
		}
		// Read access: any member for a shared doc; creator/owner-admin/grantee if private.
		if (!(await canAccessDoc(ctx, doc, "read"))) {
			return null;
		}
		return {
			docId: doc.docId,
			title: doc.title,
			visibility: doc.visibility ?? ("workspace" as const),
		};
	},
});

// Rename a document. Requires WRITE access (editor) to the doc.
export const rename = authedMutation({
	args: { docId: v.string(), title: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const doc = await loadDocForAccess(ctx, args.docId, "write");
		// Can't rename a trashed document — it's in the trash, restore it first.
		if (doc.trashedAt !== undefined) {
			throw new ConvexError("document not found");
		}
		await ctx.db.patch(doc._id, { title: args.title });
		return null;
	},
});

// Move a document to the trash (soft delete). It drops out of `list` and `get`, and a
// public share link resolves to null while trashed (resolveShare checks trashedAt). We
// deliberately DON'T revoke the share here: trash is "delete" (fully undoable), so
// restore brings the doc — and its link — back to exactly its prior state. To take a
// doc down publicly without deleting it, use "Stop sharing" (revokeShare). Restorable
// until the retention cron purges it.
export const trash = authedMutation({
	args: { docId: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const doc = await loadDocForAccess(ctx, args.docId, "write");
		await ctx.db.patch(doc._id, {
			trashedAt: Date.now(),
			trashedBy: ctx.userId,
		});
		return null;
	},
});

// Bring a trashed document back to the live list. Requires WRITE access.
export const restore = authedMutation({
	args: { docId: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const doc = await loadDocForAccess(ctx, args.docId, "write");
		await ctx.db.patch(doc._id, {
			trashedAt: undefined,
			trashedBy: undefined,
		});
		return null;
	},
});

// The workspace's trashed documents, most-recently-trashed first.
export const listTrashed = authedQuery({
	args: { workspaceId: v.string() },
	returns: v.array(
		v.object({
			docId: v.string(),
			title: v.string(),
			trashedAt: v.number(),
		})
	),
	handler: async (ctx, args) => {
		const { role } = await assertMember(ctx, args.workspaceId);
		const docs = await ctx.db
			.query("documents")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.collect();
		const trashed = docs.filter((doc) => doc.trashedAt !== undefined);
		const visible = await accessibleDocs(ctx, ctx.userId, role, trashed);
		return visible
			.map((doc) => ({
				docId: doc.docId,
				title: doc.title,
				// Non-null on trashed docs — narrowed for the validator.
				trashedAt: doc.trashedAt ?? 0,
			}))
			.sort((a, b) => b.trashedAt - a.trashedAt);
	},
});

// Permanently delete a trashed document now (skip the retention window). Drops the
// rich-text content (the prosemirror-sync component's snapshot/step rows via
// `deleteDocument`), any share links, and the `documents` tenancy row — so "delete
// forever" actually erases the content, not just the mapping.
export const deleteForever = authedMutation({
	args: { docId: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const doc = await loadDocForAccess(ctx, args.docId, "write");
		await deleteSharesForDoc(ctx, doc.docId);
		await ctx.runMutation(components.prosemirrorSync.lib.deleteDocument, {
			id: doc.docId,
		});
		await ctx.db.delete(doc._id);
		return null;
	},
});

// Hard-delete a single document — content, shares, and the row. Internal-only: called
// by the retention cron (convex/crons.purgeExpiredTrash), which has already selected
// expired-trash rows, so there is no membership context to assert here.
export const purge = internalMutation({
	args: { documentId: v.id("documents") },
	returns: v.null(),
	handler: async (ctx, args) => {
		const doc = await ctx.db.get(args.documentId);
		if (doc) {
			await deleteSharesForDoc(ctx, doc.docId);
			await ctx.runMutation(components.prosemirrorSync.lib.deleteDocument, {
				id: doc.docId,
			});
		}
		await ctx.db.delete(args.documentId);
		return null;
	},
});

// --- Public sharing ---------------------------------------------------------------
//
// A member can publish a document as a public, read-only link. The token is the
// bearer credential — anyone with it can VIEW the document without signing in. One
// stable link per document; revoking deletes the row. Content is read from the
// prosemirror-sync component directly (see `resolveShare`), NOT through the
// membership-gated syncApi.

// Publish a document — returns its (new or existing) public share token. Requires WRITE
// access (a viewer can't publish); a trashed document can't be shared.
export const createShare = authedMutation({
	args: { docId: v.string() },
	returns: v.object({ token: v.string() }),
	handler: async (ctx, args) => {
		const doc = await loadDocForAccess(ctx, args.docId, "write");
		if (doc.trashedAt !== undefined) {
			throw new ConvexError("document not found");
		}
		const existing = await ctx.db
			.query("shares")
			.withIndex("by_doc", (q) => q.eq("docId", args.docId))
			.first();
		if (existing) {
			return { token: existing.token };
		}
		const token = generateShareToken();
		await ctx.db.insert("shares", {
			token,
			docId: args.docId,
			workspaceId: doc.workspaceId,
			createdBy: ctx.userId,
		});
		return { token };
	},
});

// The document's current share token, or null — drives the Share dialog's state.
// Read access is enough to SEE the link state (managing it requires write, below).
export const getShare = authedQuery({
	args: { docId: v.string() },
	returns: v.union(v.null(), v.object({ token: v.string() })),
	handler: async (ctx, args) => {
		await loadDocForAccess(ctx, args.docId, "read");
		const share = await ctx.db
			.query("shares")
			.withIndex("by_doc", (q) => q.eq("docId", args.docId))
			.first();
		return share ? { token: share.token } : null;
	},
});

// Revoke the document's public link — immediate (deletes the row). No-op if unshared.
// Requires WRITE access (managing public sharing is an editor action).
export const revokeShare = authedMutation({
	args: { docId: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		await loadDocForAccess(ctx, args.docId, "write");
		await deleteSharesForDoc(ctx, args.docId);
		return null;
	},
});

// Resolve a public share token to a read-only view — the token IS the authorization,
// so this needs no sign-in (publicQuery, raw db). Unknown token, a revoked (deleted)
// link, and a trashed/purged document all collapse to `null` (no existence oracle).
// Reads the document's content straight from the prosemirror-sync component's own
// query, bypassing the membership-gated syncApi.
export const resolveShare = publicQuery({
	args: { token: v.string() },
	returns: v.union(
		v.null(),
		v.object({ title: v.string(), content: v.union(v.string(), v.null()) })
	),
	handler: async (ctx, args) => {
		const share = await ctx.db
			.query("shares")
			.withIndex("by_token", (q) => q.eq("token", args.token))
			.first();
		if (!share) {
			return null;
		}
		const doc = await ctx.db
			.query("documents")
			.withIndex("by_doc", (q) => q.eq("docId", share.docId))
			.first();
		if (!doc || doc.trashedAt !== undefined) {
			return null;
		}
		const snapshot = await ctx.runQuery(
			components.prosemirrorSync.lib.getSnapshot,
			{ id: share.docId }
		);
		return { title: doc.title, content: snapshot.content ?? null };
	},
});
