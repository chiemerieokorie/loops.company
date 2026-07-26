import { beforeEach, describe, expect, it, vi } from "vitest";

import { api, internal } from "./_generated/api";
import type { Id } from "./_generated/dataModel";
import { setupBackend } from "./test.setup";

// Mock the Trigger.dev SDK so `jobs.ts` never touches the network — we assert on the
// captured `tasks.trigger(id, payload)` call instead. `vi.hoisted` makes the spy
// available to the hoisted `vi.mock` factory.
const { triggerMock } = vi.hoisted(() => ({ triggerMock: vi.fn() }));
vi.mock("@trigger.dev/sdk", () => ({ tasks: { trigger: triggerMock } }));

const SECRET = "test-callback-secret";
const SITE = "https://example.convex.site";
const WS = "ws_jobs";
const OTHER_WS = "ws_other";
const FORBIDDEN = /forbidden/;
const NOT_FOUND = /not found/;
const TRIGGER_DOWN = /trigger down/;

// A valid `rawRef` payload (matches @chiemerieokorie/trigger-kit/convex).
const SAMPLE_REF = {
	bucket: "runway-raw",
	key: "runway/note-markdown/ws_jobs:note1.md",
	contentType: "text/markdown",
	sizeBytes: 42,
	source: "runway",
	sourceType: "note-markdown",
	fetchedAt: 1_700_000_000_000,
};

type T = ReturnType<typeof setupBackend>;

const addMember = (t: T, userId: string, workspaceId: string) =>
	t.run((ctx) =>
		ctx.db.insert("memberships", { userId, workspaceId, role: "owner" })
	);

const seedNote = (t: T) =>
	t.run((ctx) =>
		ctx.db.insert("notes", {
			workspaceId: WS,
			title: "Title",
			body: "Body",
			createdBy: "alice",
		})
	);

const jsonPost = (secret: string | null, body: unknown): RequestInit => ({
	method: "POST",
	headers: {
		"content-type": "application/json",
		...(secret ? { "x-trigger-callback-secret": secret } : {}),
	},
	body: JSON.stringify(body),
});

beforeEach(() => {
	triggerMock.mockReset();
	triggerMock.mockResolvedValue({ id: "run_test" });
	process.env.TRIGGER_CALLBACK_SECRET = SECRET;
	process.env.CONVEX_SITE_URL = SITE;
});

describe("note-export callback (/trigger/note-export-complete)", () => {
	it("stores the RawRef on the note when the secret matches", async () => {
		const t = setupBackend();
		const noteId = await seedNote(t);

		const res = await t.fetch(
			"/trigger/note-export-complete",
			jsonPost(SECRET, { noteId, ref: SAMPLE_REF })
		);
		expect(res.status).toBe(204);

		const note = await t.run((ctx) => ctx.db.get(noteId));
		expect(note?.exportRef).toEqual(SAMPLE_REF);
	});

	it("rejects a wrong secret with 401 and does not write", async () => {
		const t = setupBackend();
		const noteId = await seedNote(t);

		const res = await t.fetch(
			"/trigger/note-export-complete",
			jsonPost("wrong", { noteId, ref: SAMPLE_REF })
		);
		expect(res.status).toBe(401);

		const note = await t.run((ctx) => ctx.db.get(noteId));
		expect(note?.exportRef).toBeUndefined();
	});

	it("rejects a missing secret header with 401", async () => {
		const t = setupBackend();
		const noteId = await seedNote(t);
		const res = await t.fetch(
			"/trigger/note-export-complete",
			jsonPost(null, { noteId, ref: SAMPLE_REF })
		);
		expect(res.status).toBe(401);
	});

	it("is a no-op (still 204) when the note was deleted before the callback", async () => {
		const t = setupBackend();
		const noteId = await seedNote(t);
		await t.run((ctx) => ctx.db.delete(noteId));
		const res = await t.fetch(
			"/trigger/note-export-complete",
			jsonPost(SECRET, { noteId, ref: SAMPLE_REF })
		);
		expect(res.status).toBe(204);
	});
});

describe("import-complete callback (/trigger/import-complete)", () => {
	const seedImport = (t: T) =>
		t.run((ctx) =>
			ctx.db.insert("documentImports", {
				workspaceId: WS,
				sourceUrl: "https://example.com/a.pdf",
				filename: "a.pdf",
				status: "pending" as const,
			})
		);

	it("marks the import ready with its RawRef when the secret matches", async () => {
		const t = setupBackend();
		const importId = await seedImport(t);

		const res = await t.fetch(
			"/trigger/import-complete",
			jsonPost(SECRET, { importId, ref: SAMPLE_REF })
		);
		expect(res.status).toBe(204);

		const row = await t.run((ctx) => ctx.db.get(importId));
		expect(row?.status).toBe("ready");
		expect(row?.ref).toEqual(SAMPLE_REF);
	});

	it("rejects a wrong secret with 401 and leaves the row pending", async () => {
		const t = setupBackend();
		const importId = await seedImport(t);

		const res = await t.fetch(
			"/trigger/import-complete",
			jsonPost("wrong", { importId, ref: SAMPLE_REF })
		);
		expect(res.status).toBe(401);

		const row = await t.run((ctx) => ctx.db.get(importId));
		expect(row?.status).toBe("pending");
	});
});

describe("jobs.exportNote action", () => {
	it("triggers export-note with the note content + callback URL for a member", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);
		const noteId = await seedNote(t);

		const result = await t
			.withIdentity({ subject: "alice" })
			.action(api.jobs.exportNote, { noteId });

		expect(result).toEqual({ runId: "run_test" });
		expect(triggerMock).toHaveBeenCalledTimes(1);
		expect(triggerMock).toHaveBeenCalledWith("export-note", {
			noteId,
			workspaceId: WS,
			title: "Title",
			body: "Body",
			callbackUrl: `${SITE}/trigger/note-export-complete`,
		});
	});

	it("rejects a non-member and never triggers a task", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);
		const noteId = await seedNote(t);

		await expect(
			t
				.withIdentity({ subject: "mallory" })
				.action(api.jobs.exportNote, { noteId })
		).rejects.toThrow(FORBIDDEN);
		expect(triggerMock).not.toHaveBeenCalled();
	});
});

describe("documentImports.request + enqueue", () => {
	it("creates a pending row and schedules the enqueue action for a member", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);

		const importId = (await t
			.withIdentity({ subject: "alice" })
			.mutation(api.documentImports.request, {
				workspaceId: WS,
				sourceUrl: "https://example.com/report.pdf",
				filename: "report.pdf",
			})) as Id<"documentImports">;

		const row = await t.run((ctx) => ctx.db.get(importId));
		expect(row?.status).toBe("pending");
	});

	// The enqueue action is exercised directly (rather than through the scheduler)
	// so the assertion doesn't depend on convex-test's scheduled-action timing.
	it("enqueueDocumentImport triggers parse-document with the row's payload", async () => {
		const t = setupBackend();
		const importId = await t.run((ctx) =>
			ctx.db.insert("documentImports", {
				workspaceId: WS,
				sourceUrl: "https://example.com/report.pdf",
				filename: "report.pdf",
				status: "pending" as const,
			})
		);

		await t.action(internal.jobs.enqueueDocumentImport, { importId });

		expect(triggerMock).toHaveBeenCalledWith(
			"parse-document",
			{
				importId,
				workspaceId: WS,
				sourceUrl: "https://example.com/report.pdf",
				filename: "report.pdf",
				callbackUrl: `${SITE}/trigger/import-complete`,
			},
			{ idempotencyKey: importId }
		);
	});

	it("marks the import failed (and rethrows) when triggering throws", async () => {
		const t = setupBackend();
		triggerMock.mockRejectedValueOnce(new Error("trigger down"));
		const importId = await t.run((ctx) =>
			ctx.db.insert("documentImports", {
				workspaceId: WS,
				sourceUrl: "https://example.com/report.pdf",
				filename: "report.pdf",
				status: "pending" as const,
			})
		);

		await expect(
			t.action(internal.jobs.enqueueDocumentImport, { importId })
		).rejects.toThrow(TRIGGER_DOWN);

		const row = await t.run((ctx) => ctx.db.get(importId));
		expect(row?.status).toBe("failed");
		expect(row?.error).toMatch(TRIGGER_DOWN);
	});

	it("forbids a non-member from requesting an import", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);
		await expect(
			t
				.withIdentity({ subject: "mallory" })
				.mutation(api.documentImports.request, {
					workspaceId: WS,
					sourceUrl: "https://example.com/x.pdf",
					filename: "x.pdf",
				})
		).rejects.toThrow(FORBIDDEN);
	});
});

describe("membership gating on the internal note loader", () => {
	it("returns content for a member, forbids others, hides trashed", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);
		const noteId = await seedNote(t);

		expect(
			await t.query(internal.notes.loadForExport, { noteId, userId: "alice" })
		).toEqual({ workspaceId: WS, title: "Title", body: "Body" });

		await expect(
			t.query(internal.notes.loadForExport, { noteId, userId: "mallory" })
		).rejects.toThrow(FORBIDDEN);

		await t.run((ctx) => ctx.db.patch(noteId, { trashedAt: Date.now() }));
		await expect(
			t.query(internal.notes.loadForExport, { noteId, userId: "alice" })
		).rejects.toThrow(NOT_FOUND);
	});
});

describe("documentImports.list scoping", () => {
	it("returns only the caller's workspace rows", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS);
		await t.run(async (ctx) => {
			await ctx.db.insert("documentImports", {
				workspaceId: WS,
				sourceUrl: "https://example.com/mine.pdf",
				filename: "mine.pdf",
				status: "pending" as const,
			});
			await ctx.db.insert("documentImports", {
				workspaceId: OTHER_WS,
				sourceUrl: "https://example.com/theirs.pdf",
				filename: "theirs.pdf",
				status: "pending" as const,
			});
		});

		const rows = await t
			.withIdentity({ subject: "alice" })
			.query(api.documentImports.list, { workspaceId: WS });
		expect(rows).toHaveLength(1);
		expect(rows[0]?.filename).toBe("mine.pdf");
	});
});
