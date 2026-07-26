import {
	wrapDatabaseReader,
	wrapDatabaseWriter,
} from "convex-helpers/server/rowLevelSecurity";
import { describe, expect, it } from "vitest";

import { buildRules } from "./lib/functions";
import { setupBackend } from "./test.setup";

// The deny-by-default RLS net (lib/functions) is the authorization BACKSTOP: even a
// handler that FORGETS its assertMember must never reach a cross-workspace row. These
// drive the wrapped db DIRECTLY — with NO explicit check in front — to lock that in
// behaviourally, independent of the real handlers (which all do check).

const FORBIDDEN = /forbidden/;
const DENY = { defaultPolicy: "deny" as const };
const WS = "ws_a";

type T = ReturnType<typeof setupBackend>;

// A note seeded straight onto the RAW db (bypassing the net) as a cross-workspace
// target the wrapped db must refuse to leak.
function seedNote(t: T) {
	return t.run((ctx) =>
		ctx.db.insert("notes", {
			workspaceId: WS,
			title: "secret",
			body: "",
			createdBy: "alice",
		})
	);
}

describe("RLS net — the deny-by-default backstop", () => {
	it("throws forbidden on a cross-workspace READ with no explicit check", async () => {
		const t = setupBackend();
		const noteId = await seedNote(t);
		await t.run(async (ctx) => {
			const db = wrapDatabaseReader(
				ctx,
				ctx.db,
				buildRules("mallory", new Set()),
				DENY
			);
			await expect(db.get(noteId)).rejects.toThrow(FORBIDDEN);
		});
	});

	it("lets a member read their own workspace's rows", async () => {
		const t = setupBackend();
		const noteId = await seedNote(t);
		await t.run(async (ctx) => {
			const db = wrapDatabaseReader(
				ctx,
				ctx.db,
				buildRules("alice", new Set([WS])),
				DENY
			);
			const note = await db.get(noteId);
			expect(note?.title).toBe("secret");
		});
	});

	it("throws forbidden on a cross-workspace INSERT and PATCH", async () => {
		const t = setupBackend();
		const noteId = await seedNote(t);
		await t.run(async (ctx) => {
			const db = wrapDatabaseWriter(
				ctx,
				ctx.db,
				buildRules("mallory", new Set()),
				DENY
			);
			await expect(
				db.insert("notes", {
					workspaceId: WS,
					title: "x",
					body: "",
					createdBy: "mallory",
				})
			).rejects.toThrow(FORBIDDEN);
			await expect(db.patch(noteId, { title: "x" })).rejects.toThrow(FORBIDDEN);
		});
	});

	it("scopes memberships reads to the caller's OWN rows", async () => {
		const t = setupBackend();
		const aliceRow = await t.run((ctx) =>
			ctx.db.insert("memberships", {
				userId: "alice",
				workspaceId: WS,
				role: "owner",
			})
		);
		// mallory IS a member of WS, but the row belongs to alice → filtered to null
		// (a read-scope filter, not a thrown "forbidden").
		await t.run(async (ctx) => {
			const db = wrapDatabaseReader(
				ctx,
				ctx.db,
				buildRules("mallory", new Set([WS])),
				DENY
			);
			expect(await db.get(aliceRow)).toBeNull();
		});
	});

	it("denies a table with no rule (deny-by-default) even to a member", async () => {
		const t = setupBackend();
		await t.run((ctx) =>
			ctx.db.insert("emailEvents", {
				emailId: "e_1",
				type: "email.delivered",
				occurredAt: "2026-01-01T00:00:00Z",
			})
		);
		// `emailEvents` has no rule in buildRules, so the deny default filters every row
		// out — a newly-added, unconsidered table is locked, never leaked. Asserted via
		// `.query()` (which always knows the table, so the deny predicate always runs);
		// a bare `.get(id)` on a ruleless table can't infer the table and falls through
		// to the raw db, but app code reads ruleless tables only on the raw db anyway.
		await t.run(async (ctx) => {
			const db = wrapDatabaseReader(
				ctx,
				ctx.db,
				buildRules("alice", new Set([WS])),
				DENY
			);
			expect(await db.query("emailEvents").first()).toBeNull();
		});
	});
});
