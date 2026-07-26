import { describe, expect, it } from "vitest";

import { internal } from "../_generated/api";
import { setupBackend } from "../test.setup";

type T = ReturnType<typeof setupBackend>;

// Seed two workspaces (wsA has an owner + a member, wsB has just an owner) plus one
// document and one note, then return the min/max `_creationTime` across all rows so
// window assertions don't depend on convex-test's clock.
async function seed(t: T): Promise<{ min: number; max: number }> {
	await t.run(async (ctx) => {
		await ctx.db.insert("memberships", {
			userId: "ownerA",
			workspaceId: "wsA",
			role: "owner",
		});
		await ctx.db.insert("memberships", {
			userId: "memberA",
			workspaceId: "wsA",
			role: "member",
		});
		await ctx.db.insert("memberships", {
			userId: "ownerB",
			workspaceId: "wsB",
			role: "owner",
		});
		await ctx.db.insert("documents", {
			docId: "doc1",
			workspaceId: "wsA",
			title: "Doc",
		});
		await ctx.db.insert("notes", {
			workspaceId: "wsA",
			title: "Note",
			body: "Body",
			createdBy: "ownerA",
		});
	});
	return await t.run(async (ctx) => {
		const times = [
			...(await ctx.db.query("memberships").collect()),
			...(await ctx.db.query("documents").collect()),
			...(await ctx.db.query("notes").collect()),
		].map((row) => row._creationTime);
		return { min: Math.min(...times), max: Math.max(...times) };
	});
}

describe("getReportStats", () => {
	it("counts workspaces via owner memberships and totals within a covering window", async () => {
		const t = setupBackend();
		const { min, max } = await seed(t);

		const stats = await t.query(internal.slack.internal.getReportStats, {
			since: min,
			until: max + 1,
		});

		// Two owners = two workspaces; the extra member row must not inflate the count.
		expect(stats.totalWorkspaces).toBe(2);
		expect(stats.newWorkspaces).toBe(2);
		expect(stats.totalDocuments).toBe(1);
		expect(stats.documentsCreated).toBe(1);
		expect(stats.totalNotes).toBe(1);
		expect(stats.notesCreated).toBe(1);
	});

	it("excludes rows outside the window from the 'new' counts but not the totals", async () => {
		const t = setupBackend();
		const { min } = await seed(t);

		// Window entirely before every seeded row (until = min is exclusive).
		const stats = await t.query(internal.slack.internal.getReportStats, {
			since: 1,
			until: min,
		});

		expect(stats.newWorkspaces).toBe(0);
		expect(stats.documentsCreated).toBe(0);
		expect(stats.notesCreated).toBe(0);
		expect(stats.totalWorkspaces).toBe(2);
		expect(stats.totalDocuments).toBe(1);
		expect(stats.totalNotes).toBe(1);
	});
});

describe("getWorkspaceOwnerUserId", () => {
	it("returns the owner's userId, ignoring non-owner members", async () => {
		const t = setupBackend();
		await seed(t);

		expect(
			await t.query(internal.slack.internal.getWorkspaceOwnerUserId, {
				workspaceId: "wsA",
			})
		).toBe("ownerA");
	});

	it("returns null for a workspace with no owner row", async () => {
		const t = setupBackend();
		await seed(t);

		expect(
			await t.query(internal.slack.internal.getWorkspaceOwnerUserId, {
				workspaceId: "does-not-exist",
			})
		).toBeNull();
	});
});
