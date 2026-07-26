import { describe, expect, it } from "vitest";

import { api } from "./_generated/api";
import { setupBackend } from "./test.setup";

// The public-sharing logic that runs on the APP tables (shares + documents) — token
// authorization, trashed-doc rejection, member gating, and revoke. The content read
// itself (`resolveShare` → the prosemirror-sync component's getSnapshot) isn't wired in
// convex-test, so it's validated by the real Convex push instead; every path here
// returns before that component call.

const WS = "ws_share";
const FORBIDDEN = /forbidden/;
const NOT_FOUND = /not found/;
const TOKEN_HEX_LENGTH = 64;

type T = ReturnType<typeof setupBackend>;

const addMember = (t: T, userId: string, workspaceId: string) =>
	t.run((ctx) =>
		ctx.db.insert("memberships", { userId, workspaceId, role: "member" })
	);

const seedDoc = (t: T, docId: string, workspaceId: string, title: string) =>
	t.run((ctx) => ctx.db.insert("documents", { docId, workspaceId, title }));

const trashDoc = (t: T, docId: string) =>
	t.run(async (ctx) => {
		const doc = await ctx.db
			.query("documents")
			.withIndex("by_doc", (q) => q.eq("docId", docId))
			.first();
		if (doc) {
			await ctx.db.patch(doc._id, { trashedAt: Date.now() });
		}
	});

describe("document sharing — links", () => {
	it("creates a stable link, is idempotent, and getShare/revokeShare round-trip", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);
		await seedDoc(t, "d1", WS, "My Doc");
		const as = t.withIdentity({ subject: "alice" });

		const { token } = await as.mutation(api.prosemirror.createShare, {
			docId: "d1",
		});
		expect(token).toHaveLength(TOKEN_HEX_LENGTH);
		// Re-publishing returns the same token (one stable link per document).
		const again = await as.mutation(api.prosemirror.createShare, {
			docId: "d1",
		});
		expect(again.token).toBe(token);
		expect(await as.query(api.prosemirror.getShare, { docId: "d1" })).toEqual({
			token,
		});

		await as.mutation(api.prosemirror.revokeShare, { docId: "d1" });
		expect(
			await as.query(api.prosemirror.getShare, { docId: "d1" })
		).toBeNull();
	});

	it("refuses to share a trashed document", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);
		await seedDoc(t, "d1", WS, "My Doc");
		await trashDoc(t, "d1");
		await expect(
			t
				.withIdentity({ subject: "alice" })
				.mutation(api.prosemirror.createShare, { docId: "d1" })
		).rejects.toThrow(NOT_FOUND);
	});

	it("denies a non-member creating a share", async () => {
		const t = setupBackend();
		await seedDoc(t, "d1", WS, "My Doc");
		await expect(
			t
				.withIdentity({ subject: "mallory" })
				.mutation(api.prosemirror.createShare, { docId: "d1" })
		).rejects.toThrow(FORBIDDEN);
	});
});

describe("document sharing — public resolve (token authorization)", () => {
	it("returns null for an unknown token (no existence oracle)", async () => {
		const t = setupBackend();
		// No identity: resolveShare is a public read.
		expect(
			await t.query(api.prosemirror.resolveShare, { token: "does-not-exist" })
		).toBeNull();
	});

	it("returns null after the link is revoked", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);
		await seedDoc(t, "d1", WS, "My Doc");
		const as = t.withIdentity({ subject: "alice" });
		const { token } = await as.mutation(api.prosemirror.createShare, {
			docId: "d1",
		});
		await as.mutation(api.prosemirror.revokeShare, { docId: "d1" });
		expect(await t.query(api.prosemirror.resolveShare, { token })).toBeNull();
	});

	it("returns null once the shared document is trashed", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);
		await seedDoc(t, "d1", WS, "My Doc");
		const as = t.withIdentity({ subject: "alice" });
		const { token } = await as.mutation(api.prosemirror.createShare, {
			docId: "d1",
		});
		await trashDoc(t, "d1");
		expect(await t.query(api.prosemirror.resolveShare, { token })).toBeNull();
	});
});
