import { ConvexError, v } from "convex/values";

import type { Doc } from "./_generated/dataModel";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import { canAccessDoc, resolveDocAccess } from "./lib/access";
import { authedMutation, authedQuery } from "./lib/functions";
import { deleteSharesForDoc } from "./prosemirror";

// Grants — private, per-member sharing of a document (resource access, distinct from
// workspace tenancy and from the public share-link plane). Only someone who can already
// MANAGE the resource (write access: creator / owner-admin / editor grant) may grant,
// revoke, or change its visibility — no privilege escalation. Effective-access
// resolution lives in lib/access `resolveDocAccess`; this module is the lifecycle +
// the visibility toggle.

const RESOURCE_TYPE = v.union(v.literal("document"));
const GRANT_ROLE = v.union(v.literal("viewer"), v.literal("editor"));
const VISIBILITY = v.union(v.literal("workspace"), v.literal("private"));

const grantValidator = v.object({
	_id: v.id("grants"),
	_creationTime: v.number(),
	workspaceId: v.string(),
	resourceType: RESOURCE_TYPE,
	resourceId: v.string(),
	principalId: v.string(),
	role: GRANT_ROLE,
	grantedBy: v.string(),
});

type Ctx = QueryCtx | MutationCtx;

// Load a document by its sync id, or throw the same "not found" the doc plane uses.
async function loadDoc(ctx: Ctx, docId: string): Promise<Doc<"documents">> {
	const doc = await ctx.db
		.query("documents")
		.withIndex("by_doc", (q) => q.eq("docId", docId))
		.first();
	if (!doc) {
		throw new ConvexError("document not found");
	}
	return doc;
}

// Load a document AND assert the caller may manage its sharing (write access). Returns
// the doc so callers get its workspaceId. This is the single gate every write in this
// module funnels through. A trashed doc can't be managed — restore it first (matches
// rename/createShare in prosemirror.ts).
async function assertCanManageDoc(
	ctx: Ctx,
	docId: string
): Promise<Doc<"documents">> {
	const doc = await loadDoc(ctx, docId);
	if (doc.trashedAt !== undefined) {
		throw new ConvexError("document not found");
	}
	await resolveDocAccess(ctx, doc, "write");
	return doc;
}

// Grant (or update) a member's access to a document. Manager-gated. A grant to someone
// who ISN'T a workspace member is inert, not an error — `resolveDocAccess` gates on
// membership first, so the grant only ever takes effect for an actual member (the
// membership row itself isn't readable here: RLS scopes it to its owner).
export const create = authedMutation({
	args: {
		docId: v.string(),
		principalId: v.string(),
		role: GRANT_ROLE,
	},
	returns: v.id("grants"),
	handler: async (ctx, args) => {
		const doc = await assertCanManageDoc(ctx, args.docId);
		// Supersede any existing grant for the same (principal, document).
		const existing = await ctx.db
			.query("grants")
			.withIndex("by_principal_resource", (q) =>
				q
					.eq("principalId", args.principalId)
					.eq("resourceType", "document")
					.eq("resourceId", args.docId)
			)
			.first();
		if (existing) {
			await ctx.db.patch(existing._id, {
				role: args.role,
				grantedBy: ctx.userId,
			});
			return existing._id;
		}
		return await ctx.db.insert("grants", {
			workspaceId: doc.workspaceId,
			resourceType: "document",
			resourceId: args.docId,
			principalId: args.principalId,
			role: args.role,
			grantedBy: ctx.userId,
		});
	},
});

// Revoke a grant. Manager-gated on the grant's resource.
export const revoke = authedMutation({
	args: { grantId: v.id("grants") },
	returns: v.null(),
	handler: async (ctx, args) => {
		const grant = await ctx.db.get(args.grantId);
		if (!grant) {
			throw new ConvexError("grant not found");
		}
		await assertCanManageDoc(ctx, grant.resourceId);
		await ctx.db.delete(args.grantId);
		return null;
	},
});

// Change a document's visibility (workspace ↔ private). Manager-gated. Going private
// keeps existing grants; every member without a grant loses access on the next read.
// It ALSO revokes any public share link — "private" would otherwise leave a live,
// sign-in-free token that resolves the full content to anyone, defeating the intent.
// Re-publishing afterward is an explicit `createShare` the manager can still choose.
export const setVisibility = authedMutation({
	args: { docId: v.string(), visibility: VISIBILITY },
	returns: v.null(),
	handler: async (ctx, args) => {
		const doc = await assertCanManageDoc(ctx, args.docId);
		await ctx.db.patch(doc._id, { visibility: args.visibility });
		if (args.visibility === "private") {
			await deleteSharesForDoc(ctx, args.docId);
		}
		return null;
	},
});

// The management state for a document's Share panel, in one reactive read: the current
// visibility, whether the caller may manage sharing, and (only when they may) the list
// of grants. A non-manager gets `canManage: false` and an empty list — never the
// grantee roster. TOLERANT like `prosemirror.get`: returns `null` (not a throw) when the
// doc is gone or the caller can't read it, so a live subscription that loses access
// (visibility flipped, grant revoked) resolves cleanly instead of crashing.
export const documentAccess = authedQuery({
	args: { docId: v.string() },
	returns: v.union(
		v.null(),
		v.object({
			workspaceId: v.string(),
			// The creator has implicit, ungrantable full access — the UI marks them so.
			creatorId: v.union(v.string(), v.null()),
			visibility: VISIBILITY,
			canManage: v.boolean(),
			grants: v.array(grantValidator),
		})
	),
	handler: async (ctx, args) => {
		const doc = await ctx.db
			.query("documents")
			.withIndex("by_doc", (q) => q.eq("docId", args.docId))
			.first();
		if (!(doc && (await canAccessDoc(ctx, doc, "read")))) {
			return null;
		}
		const canManage = await canAccessDoc(ctx, doc, "write");
		const grants = canManage
			? await ctx.db
					.query("grants")
					.withIndex("by_resource", (q) =>
						q.eq("resourceType", "document").eq("resourceId", args.docId)
					)
					.collect()
			: [];
		return {
			workspaceId: doc.workspaceId,
			creatorId: doc.createdBy ?? null,
			visibility: doc.visibility ?? "workspace",
			canManage,
			grants,
		};
	},
});
