import { describe, expect, it } from "vitest";

import { api } from "./_generated/api";
import { setupBackend } from "./test.setup";

// Per-resource grants + the private-document access model (lib/access `resolveDocAccess`).
// Exercised through the app tables + the doc-plane reads/writes that DON'T touch the
// prosemirror-sync component (get/list/rename/trash + grants CRUD) — the same
// convex-test boundary the share suite uses; the sync-content gate and deleteForever
// (component calls) are validated by the real push instead.

const WS = "ws_grants";
const FORBIDDEN = /forbidden/;

type T = ReturnType<typeof setupBackend>;
type Role = "owner" | "admin" | "member";
type Visibility = "workspace" | "private";

const addMember = (t: T, userId: string, role: Role = "member") =>
	t.run((ctx) =>
		ctx.db.insert("memberships", { userId, workspaceId: WS, role })
	);

const seedDoc = (
	t: T,
	docId: string,
	createdBy: string,
	visibility: Visibility
) =>
	t.run((ctx) =>
		ctx.db.insert("documents", {
			docId,
			workspaceId: WS,
			title: docId,
			createdBy,
			visibility,
		})
	);

describe("documents — workspace visibility (default)", () => {
	it("lets every workspace member read and write a shared document", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await addMember(t, "bob");
		await seedDoc(t, "d1", "alice", "workspace");
		const bob = t.withIdentity({ subject: "bob" });

		expect(await bob.query(api.prosemirror.get, { docId: "d1" })).toMatchObject(
			{
				docId: "d1",
				visibility: "workspace",
			}
		);
		const list = await bob.query(api.prosemirror.list, { workspaceId: WS });
		expect(list.map((d) => d.docId)).toContain("d1");
		// A member has editor access to a shared doc.
		await bob.mutation(api.prosemirror.rename, {
			docId: "d1",
			title: "By Bob",
		});
	});
});

describe("documents — private visibility", () => {
	it("hides a private doc from non-granted members but not its creator", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await addMember(t, "bob");
		await seedDoc(t, "p1", "alice", "private");
		const alice = t.withIdentity({ subject: "alice" });
		const bob = t.withIdentity({ subject: "bob" });

		// Creator: full access.
		expect(
			await alice.query(api.prosemirror.get, { docId: "p1" })
		).toMatchObject({ docId: "p1", visibility: "private" });
		expect(
			(await alice.query(api.prosemirror.list, { workspaceId: WS })).map(
				(d) => d.docId
			)
		).toContain("p1");

		// Non-granted member: invisible + denied.
		expect(await bob.query(api.prosemirror.get, { docId: "p1" })).toBeNull();
		expect(
			(await bob.query(api.prosemirror.list, { workspaceId: WS })).map(
				(d) => d.docId
			)
		).not.toContain("p1");
		await expect(
			bob.mutation(api.prosemirror.rename, { docId: "p1", title: "x" })
		).rejects.toThrow(FORBIDDEN);
	});

	it("gives workspace owner/admins full access without a grant", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await addMember(t, "carol", "admin");
		await seedDoc(t, "p1", "alice", "private");
		const carol = t.withIdentity({ subject: "carol" });

		expect(
			await carol.query(api.prosemirror.get, { docId: "p1" })
		).not.toBeNull();
		await carol.mutation(api.prosemirror.rename, { docId: "p1", title: "ok" });
	});
});

describe("grants — viewer vs editor", () => {
	it("a viewer grant is read-only; an editor grant can write", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await addMember(t, "bob");
		await seedDoc(t, "p1", "alice", "private");
		const alice = t.withIdentity({ subject: "alice" });
		const bob = t.withIdentity({ subject: "bob" });

		// Viewer: can read, cannot write.
		await alice.mutation(api.grants.create, {
			docId: "p1",
			principalId: "bob",
			role: "viewer",
		});
		expect(
			await bob.query(api.prosemirror.get, { docId: "p1" })
		).not.toBeNull();
		expect(
			(await bob.query(api.prosemirror.list, { workspaceId: WS })).map(
				(d) => d.docId
			)
		).toContain("p1");
		await expect(
			bob.mutation(api.prosemirror.rename, { docId: "p1", title: "x" })
		).rejects.toThrow(FORBIDDEN);

		// Upgrade to editor (supersedes, single row): can write now.
		await alice.mutation(api.grants.create, {
			docId: "p1",
			principalId: "bob",
			role: "editor",
		});
		await bob.mutation(api.prosemirror.rename, { docId: "p1", title: "ok" });
		const rows = await t.run((ctx) =>
			ctx.db
				.query("grants")
				.withIndex("by_principal_resource", (q) =>
					q
						.eq("principalId", "bob")
						.eq("resourceType", "document")
						.eq("resourceId", "p1")
				)
				.collect()
		);
		expect(rows).toHaveLength(1);
		expect(rows[0]?.role).toBe("editor");
	});

	it("revoking a grant removes access", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await addMember(t, "bob");
		await seedDoc(t, "p1", "alice", "private");
		const alice = t.withIdentity({ subject: "alice" });
		const bob = t.withIdentity({ subject: "bob" });

		const grantId = await alice.mutation(api.grants.create, {
			docId: "p1",
			principalId: "bob",
			role: "editor",
		});
		expect(
			await bob.query(api.prosemirror.get, { docId: "p1" })
		).not.toBeNull();
		await alice.mutation(api.grants.revoke, { grantId });
		expect(await bob.query(api.prosemirror.get, { docId: "p1" })).toBeNull();
	});
});

describe("grants — management gate", () => {
	it("only a manager may grant; a grant to a non-member is inert", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await addMember(t, "bob");
		await seedDoc(t, "p1", "alice", "private");
		const alice = t.withIdentity({ subject: "alice" });
		const bob = t.withIdentity({ subject: "bob" });

		// A non-granted member can't manage sharing.
		await expect(
			bob.mutation(api.grants.create, {
				docId: "p1",
				principalId: "bob",
				role: "viewer",
			})
		).rejects.toThrow(FORBIDDEN);

		// Even a viewer-granted member can't manage (write needed).
		await alice.mutation(api.grants.create, {
			docId: "p1",
			principalId: "bob",
			role: "viewer",
		});
		await expect(
			bob.mutation(api.grants.create, {
				docId: "p1",
				principalId: "alice",
				role: "viewer",
			})
		).rejects.toThrow(FORBIDDEN);

		// A grant to a non-member succeeds but grants nothing — membership is the outer
		// boundary, so the stranger still resolves to no access.
		await alice.mutation(api.grants.create, {
			docId: "p1",
			principalId: "stranger",
			role: "editor",
		});
		expect(
			await t
				.withIdentity({ subject: "stranger" })
				.query(api.prosemirror.get, { docId: "p1" })
		).toBeNull();
	});

	it("documentAccess exposes the roster only to a manager", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await addMember(t, "bob");
		await seedDoc(t, "p1", "alice", "private");
		const alice = t.withIdentity({ subject: "alice" });
		const bob = t.withIdentity({ subject: "bob" });
		await alice.mutation(api.grants.create, {
			docId: "p1",
			principalId: "bob",
			role: "viewer",
		});

		const asManager = await alice.query(api.grants.documentAccess, {
			docId: "p1",
		});
		expect(asManager).not.toBeNull();
		expect(asManager?.canManage).toBe(true);
		expect(asManager?.visibility).toBe("private");
		expect(asManager?.grants.map((g) => g.principalId)).toEqual(["bob"]);

		// A viewer sees visibility but not the roster.
		const asViewer = await bob.query(api.grants.documentAccess, {
			docId: "p1",
		});
		expect(asViewer?.canManage).toBe(false);
		expect(asViewer?.grants).toEqual([]);

		// A member with NO access resolves to null (not a throw) — a live subscription
		// that loses access must not crash.
		await addMember(t, "dave");
		expect(
			await t
				.withIdentity({ subject: "dave" })
				.query(api.grants.documentAccess, { docId: "p1" })
		).toBeNull();
	});
});

describe("grants — cross-workspace isolation", () => {
	it("lists a workspace without tripping on a stale grant from another workspace", async () => {
		const t = setupBackend();
		await addMember(t, "bob");
		await seedDoc(t, "p1", "alice", "private");
		// Bob's grant on the private doc in THIS workspace.
		await t.run((ctx) =>
			ctx.db.insert("grants", {
				workspaceId: WS,
				resourceType: "document",
				resourceId: "p1",
				principalId: "bob",
				role: "viewer",
				grantedBy: "alice",
			})
		);
		// A STALE grant in a workspace Bob is NOT a member of (e.g. he was removed
		// after being granted). Listing THIS workspace must not read it — a per-doc
		// lookup only touches grants in the workspace being listed.
		await t.run((ctx) =>
			ctx.db.insert("grants", {
				workspaceId: "ws_elsewhere",
				resourceType: "document",
				resourceId: "elsewhere-doc",
				principalId: "bob",
				role: "editor",
				grantedBy: "x",
			})
		);

		const list = await t
			.withIdentity({ subject: "bob" })
			.query(api.prosemirror.list, { workspaceId: WS });
		expect(list.map((d) => d.docId)).toContain("p1");
	});
});

describe("grants — visibility toggle", () => {
	it("going private then back to workspace flips member access", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await addMember(t, "bob");
		await seedDoc(t, "d1", "alice", "workspace");
		const alice = t.withIdentity({ subject: "alice" });
		const bob = t.withIdentity({ subject: "bob" });

		expect(
			await bob.query(api.prosemirror.get, { docId: "d1" })
		).not.toBeNull();
		await alice.mutation(api.grants.setVisibility, {
			docId: "d1",
			visibility: "private",
		});
		expect(await bob.query(api.prosemirror.get, { docId: "d1" })).toBeNull();
		await alice.mutation(api.grants.setVisibility, {
			docId: "d1",
			visibility: "workspace",
		});
		expect(
			await bob.query(api.prosemirror.get, { docId: "d1" })
		).not.toBeNull();
	});

	it("a non-manager can't change visibility", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await addMember(t, "bob");
		await seedDoc(t, "p1", "alice", "private");
		const bob = t.withIdentity({ subject: "bob" });
		await expect(
			bob.mutation(api.grants.setVisibility, {
				docId: "p1",
				visibility: "workspace",
			})
		).rejects.toThrow(FORBIDDEN);
	});

	it("documentAccess returns null for an unknown document", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		const alice = t.withIdentity({ subject: "alice" });
		expect(
			await alice.query(api.grants.documentAccess, { docId: "ghost" })
		).toBeNull();
	});

	it("going private revokes an existing public share link", async () => {
		const t = setupBackend();
		await addMember(t, "alice");
		await seedDoc(t, "d1", "alice", "workspace");
		const alice = t.withIdentity({ subject: "alice" });

		await alice.mutation(api.prosemirror.createShare, { docId: "d1" });
		expect(
			await alice.query(api.prosemirror.getShare, { docId: "d1" })
		).not.toBeNull();

		await alice.mutation(api.grants.setVisibility, {
			docId: "d1",
			visibility: "private",
		});
		// The public token is gone — "private" doesn't leave a live world-readable link.
		expect(
			await alice.query(api.prosemirror.getShare, { docId: "d1" })
		).toBeNull();
	});
});
