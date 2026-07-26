import { describe, expect, it } from "vitest";

import { api, internal } from "./_generated/api";
import { PLAN_LIMITS, planLimits } from "./lib/plans";
import { setupBackend } from "./test.setup";

const WS = "ws_ent";
const LIMIT_REACHED = /limit reached/;
const FORBIDDEN = /forbidden/;

type T = ReturnType<typeof setupBackend>;

const addMember = (
	t: T,
	userId: string,
	workspaceId: string,
	role: "owner" | "admin" | "member"
) =>
	t.run((ctx) => ctx.db.insert("memberships", { userId, workspaceId, role }));

describe("planLimits — the per-tier caps", () => {
	it("free is the tightest tier and team the loosest", () => {
		expect(planLimits("free").maxNotes).toBeLessThan(
			planLimits("pro").maxNotes
		);
		expect(planLimits("pro").maxNotes).toBeLessThan(
			planLimits("team").maxNotes
		);
		expect(planLimits("free").maxDocuments).toBeLessThan(
			planLimits("team").maxDocuments
		);
	});
});

describe("assertWithinLimit — enforced at notes.create", () => {
	it("blocks the note that would exceed the free plan's cap", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS, "owner");
		const as = t.withIdentity({ subject: "alice" });
		const cap = PLAN_LIMITS.free.maxNotes;
		for (let i = 0; i < cap; i++) {
			await as.mutation(api.notes.create, {
				workspaceId: WS,
				title: `n${i}`,
				body: "b",
			});
		}
		await expect(
			as.mutation(api.notes.create, {
				workspaceId: WS,
				title: "over",
				body: "b",
			})
		).rejects.toThrow(LIMIT_REACHED);
	});

	it("a paid plan raises the cap past the free limit", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS, "owner");
		// The Stripe webhook's writer — flip the workspace to pro.
		await t.mutation(internal.billing.setPlan, {
			workspaceId: WS,
			plan: "pro",
		});
		const as = t.withIdentity({ subject: "alice" });
		const overFree = PLAN_LIMITS.free.maxNotes + 1;
		for (let i = 0; i < overFree; i++) {
			await as.mutation(api.notes.create, {
				workspaceId: WS,
				title: `n${i}`,
				body: "b",
			});
		}
		const view = await as.query(api.entitlement.entitlements, {
			workspaceId: WS,
		});
		expect(view.plan).toBe("pro");
		expect(view.usage.notes).toBe(overFree);
		expect(view.limits.maxNotes).toBe(PLAN_LIMITS.pro.maxNotes);
	});
});

describe("entitlements query — usage against caps", () => {
	it("reports zero usage and free caps for a fresh workspace", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS, "owner");
		const view = await t
			.withIdentity({ subject: "alice" })
			.query(api.entitlement.entitlements, { workspaceId: WS });
		expect(view).toMatchObject({
			plan: "free",
			limits: {
				maxNotes: PLAN_LIMITS.free.maxNotes,
				maxDocuments: PLAN_LIMITS.free.maxDocuments,
			},
			usage: { notes: 0, documents: 0 },
		});
	});

	it("denies a non-member", async () => {
		const t = setupBackend();
		await expect(
			t
				.withIdentity({ subject: "mallory" })
				.query(api.entitlement.entitlements, { workspaceId: WS })
		).rejects.toThrow(FORBIDDEN);
	});
});
