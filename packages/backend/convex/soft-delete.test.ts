import { describe, expect, it, vi } from "vitest";

import { api, internal } from "./_generated/api";
import type { Id } from "./_generated/dataModel";
import { PLAN_LIMITS } from "./lib/plans";
import { setupBackend } from "./test.setup";

const WS = "ws_trash";
const LIMIT_REACHED = /limit reached/;
const DAY_MS = 86_400_000;

type T = ReturnType<typeof setupBackend>;

const addMember = (
	t: T,
	userId: string,
	workspaceId: string,
	role: "owner" | "admin" | "member"
) =>
	t.run((ctx) => ctx.db.insert("memberships", { userId, workspaceId, role }));

describe("notes soft-delete", () => {
	it("trash hides from the list, listTrashed shows it, restore brings it back", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS, "owner");
		const as = t.withIdentity({ subject: "alice" });
		const noteId = await as.mutation(api.notes.create, {
			workspaceId: WS,
			title: "keep",
			body: "",
		});

		await as.mutation(api.notes.trash, { noteId });
		expect(await as.query(api.notes.list, { workspaceId: WS })).toHaveLength(0);
		const trashed = await as.query(api.notes.listTrashed, { workspaceId: WS });
		expect(trashed).toHaveLength(1);
		expect(trashed[0]?._id).toBe(noteId);

		await as.mutation(api.notes.restore, { noteId });
		expect(await as.query(api.notes.list, { workspaceId: WS })).toHaveLength(1);
		expect(
			await as.query(api.notes.listTrashed, { workspaceId: WS })
		).toHaveLength(0);
	});

	it("trashed notes don't count toward the plan cap", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS, "owner");
		const as = t.withIdentity({ subject: "alice" });
		const cap = PLAN_LIMITS.free.maxNotes;
		let firstId: Id<"notes"> | null = null;
		for (let i = 0; i < cap; i++) {
			const id = await as.mutation(api.notes.create, {
				workspaceId: WS,
				title: `n${i}`,
				body: "",
			});
			if (i === 0) {
				firstId = id;
			}
		}
		if (!firstId) {
			throw new Error("expected at least one note");
		}
		// At the cap — the next create is blocked.
		await expect(
			as.mutation(api.notes.create, {
				workspaceId: WS,
				title: "over",
				body: "",
			})
		).rejects.toThrow(LIMIT_REACHED);

		// Trashing one frees a slot, so a create succeeds again.
		await as.mutation(api.notes.trash, { noteId: firstId });
		await as.mutation(api.notes.create, {
			workspaceId: WS,
			title: "new",
			body: "",
		});
		const view = await as.query(api.entitlement.entitlements, {
			workspaceId: WS,
		});
		// cap - 1 live + 1 new = cap; the trashed row is excluded.
		expect(view.usage.notes).toBe(cap);
	});

	it("deleteForever removes the row entirely", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS, "owner");
		const as = t.withIdentity({ subject: "alice" });
		const noteId = await as.mutation(api.notes.create, {
			workspaceId: WS,
			title: "x",
			body: "",
		});
		await as.mutation(api.notes.trash, { noteId });
		await as.mutation(api.notes.deleteForever, { noteId });
		expect(await t.run((ctx) => ctx.db.get(noteId))).toBeNull();
	});
});

describe("purgeExpiredTrash cron", () => {
	it("purges rows past the retention window and keeps recent ones", async () => {
		// The cron fans out per-row purges via `runAfter(0)`; fake timers let
		// `finishAllScheduledFunctions` drive those to completion. A fixed clock keeps
		// the `Date.now()` aging math (and the cron's cutoff) deterministic.
		vi.useFakeTimers();
		vi.setSystemTime(new Date("2026-06-01T00:00:00Z"));
		try {
			const t = setupBackend();
			await addMember(t, "alice", WS, "owner");
			const as = t.withIdentity({ subject: "alice" });
			const oldId = await as.mutation(api.notes.create, {
				workspaceId: WS,
				title: "old",
				body: "",
			});
			const freshId = await as.mutation(api.notes.create, {
				workspaceId: WS,
				title: "fresh",
				body: "",
			});
			await as.mutation(api.notes.trash, { noteId: oldId });
			await as.mutation(api.notes.trash, { noteId: freshId });
			// Age the old note past the 30-day window.
			await t.run((ctx) =>
				ctx.db.patch(oldId, { trashedAt: Date.now() - 40 * DAY_MS })
			);

			await t.mutation(internal.crons.purgeExpiredTrash, {});
			await t.finishAllScheduledFunctions(vi.runAllTimers);

			expect(await t.run((ctx) => ctx.db.get(oldId))).toBeNull();
			expect(await t.run((ctx) => ctx.db.get(freshId))).not.toBeNull();
		} finally {
			vi.useRealTimers();
		}
	});
});
