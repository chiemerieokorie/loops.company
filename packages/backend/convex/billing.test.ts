import { describe, expect, it } from "vitest";

import { internal } from "./_generated/api";
import { setupBackend } from "./test.setup";

// Workspace billing — entitlement projection (the webhook writer) + the role gate.
// These exercise the app's own `workspaceBilling`/`memberships` tables, NOT the
// Stripe component's synced reads (those need a registered component), so no
// component registration is required.

const WS = "ws_a";
const FORBIDDEN = /forbidden/;

type T = ReturnType<typeof setupBackend>;
const addMember = (
	t: T,
	userId: string,
	workspaceId: string,
	role: "owner" | "admin" | "member"
) =>
	t.run((ctx) => ctx.db.insert("memberships", { userId, workspaceId, role }));
const readBilling = (t: T, workspaceId: string) =>
	t.run((ctx) =>
		ctx.db
			.query("workspaceBilling")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", workspaceId))
			.collect()
	);

describe("setPlan — entitlement projection (webhook writer)", () => {
	it("upserts one row and is idempotent on the workspace", async () => {
		const t = setupBackend();
		await t.mutation(internal.billing.setPlan, {
			workspaceId: WS,
			plan: "pro",
		});
		await t.mutation(internal.billing.setPlan, {
			workspaceId: WS,
			plan: "pro",
		});
		const rows = await readBilling(t, WS);
		expect(rows).toHaveLength(1);
		expect(rows[0]?.plan).toBe("pro");
	});

	it("stores the money-state and a downgrade preserves the customer id", async () => {
		const t = setupBackend();
		await t.mutation(internal.billing.persistWorkspaceCustomer, {
			workspaceId: WS,
			stripeCustomerId: "cus_1",
		});
		await t.mutation(internal.billing.setPlan, {
			workspaceId: WS,
			plan: "team",
			stripeSubscriptionId: "sub_1",
			billingInterval: "year",
			currentPeriodEnd: 1000,
			cancelAtPeriodEnd: false,
		});
		let rows = await readBilling(t, WS);
		expect(rows[0]).toMatchObject({
			plan: "team",
			stripeCustomerId: "cus_1",
			stripeSubscriptionId: "sub_1",
			billingInterval: "year",
			currentPeriodEnd: 1000,
			cancelAtPeriodEnd: false,
		});

		// A downgrade event omits the money-state — it must not clobber the customer.
		await t.mutation(internal.billing.setPlan, {
			workspaceId: WS,
			plan: "free",
		});
		rows = await readBilling(t, WS);
		expect(rows).toHaveLength(1);
		expect(rows[0]?.plan).toBe("free");
		expect(rows[0]?.stripeCustomerId).toBe("cus_1");
	});

	it("clearSubscription resets the period/sub fields but keeps the customer", async () => {
		const t = setupBackend();
		await t.mutation(internal.billing.persistWorkspaceCustomer, {
			workspaceId: WS,
			stripeCustomerId: "cus_1",
		});
		await t.mutation(internal.billing.setPlan, {
			workspaceId: WS,
			plan: "pro",
			stripeSubscriptionId: "sub_1",
			billingInterval: "month",
			currentPeriodEnd: 5000,
			cancelAtPeriodEnd: true,
		});

		// Cancellation (subscription.deleted) → free + cleared money-state.
		await t.mutation(internal.billing.setPlan, {
			workspaceId: WS,
			plan: "free",
			clearSubscription: true,
		});
		const rows = await readBilling(t, WS);
		expect(rows).toHaveLength(1);
		expect(rows[0]?.plan).toBe("free");
		// Durable map kept; stale subscription/period fields gone.
		expect(rows[0]?.stripeCustomerId).toBe("cus_1");
		expect(rows[0]?.stripeSubscriptionId).toBeUndefined();
		expect(rows[0]?.currentPeriodEnd).toBeUndefined();
		expect(rows[0]?.cancelAtPeriodEnd).toBeUndefined();
	});

	it("ignores a stale delete for a subscription already replaced by a newer one", async () => {
		const t = setupBackend();
		// Active on a NEW subscription id.
		await t.mutation(internal.billing.setPlan, {
			workspaceId: WS,
			plan: "pro",
			stripeSubscriptionId: "sub_new",
		});
		// A late/redelivered delete for the OLD sub must NOT downgrade the new one.
		await t.mutation(internal.billing.setPlan, {
			workspaceId: WS,
			plan: "free",
			clearSubscription: true,
			expectedSubscriptionId: "sub_old",
		});
		const rows = await readBilling(t, WS);
		expect(rows[0]?.plan).toBe("pro");
		expect(rows[0]?.stripeSubscriptionId).toBe("sub_new");
	});
});

describe("requireBillingRole — the billing authorization gate", () => {
	it("allows owner/admin (resolves null)", async () => {
		const t = setupBackend();
		await addMember(t, "alice", WS, "owner");
		const result = await t
			.withIdentity({ subject: "alice" })
			.query(internal.billing.requireBillingRole, { workspaceId: WS });
		expect(result).toBeNull();
	});

	it("rejects a plain member and a non-member", async () => {
		const t = setupBackend();
		await addMember(t, "carol", WS, "member");
		await expect(
			t
				.withIdentity({ subject: "carol" })
				.query(internal.billing.requireBillingRole, { workspaceId: WS })
		).rejects.toThrow(FORBIDDEN);
		await expect(
			t
				.withIdentity({ subject: "mallory" })
				.query(internal.billing.requireBillingRole, { workspaceId: WS })
		).rejects.toThrow(FORBIDDEN);
	});
});

describe("getWorkspaceCustomerId / persistWorkspaceCustomer", () => {
	it("round-trips the workspace→customer map", async () => {
		const t = setupBackend();
		expect(
			await t.query(internal.billing.getWorkspaceCustomerId, {
				workspaceId: WS,
			})
		).toBeNull();
		await t.mutation(internal.billing.persistWorkspaceCustomer, {
			workspaceId: WS,
			stripeCustomerId: "cus_42",
		});
		expect(
			await t.query(internal.billing.getWorkspaceCustomerId, {
				workspaceId: WS,
			})
		).toBe("cus_42");
	});
});
