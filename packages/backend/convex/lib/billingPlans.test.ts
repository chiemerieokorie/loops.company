import { describe, expect, it } from "vitest";

import {
	type ProjectableSubscription,
	planForSubscription,
	planFromLookupKey,
} from "./billingPlans";

// The webhook projector's entitlement decision (convex/http.ts calls this). Pure, so
// the full Stripe subscription-status matrix is locked here without a deployment.

function sub(
	status: string,
	opts: {
		lookupKey?: string | null;
		interval?: string;
		metadataPlan?: string;
	} = {}
): ProjectableSubscription {
	return {
		status,
		metadata: opts.metadataPlan ? { plan: opts.metadataPlan } : {},
		items: {
			data: [
				{
					price: {
						lookup_key: opts.lookupKey ?? null,
						recurring: opts.interval ? { interval: opts.interval } : null,
					},
				},
			],
		},
	};
}

describe("planForSubscription — status matrix", () => {
	it("grants on active/trialing/past_due (past_due is dunning grace)", () => {
		for (const status of ["active", "trialing", "past_due"]) {
			expect(
				planForSubscription(sub(status, { lookupKey: "runway_pro_monthly" }))
			).toMatchObject({ grant: true, plan: "pro" });
		}
	});

	it("downgrades to free on every non-entitled status (safe default)", () => {
		for (const status of [
			"canceled",
			"unpaid",
			"incomplete",
			"incomplete_expired",
			"paused",
			"some_future_status",
		]) {
			expect(
				planForSubscription(sub(status, { lookupKey: "runway_pro_monthly" }))
			).toEqual({ grant: false });
		}
	});
});

describe("planForSubscription — plan resolution", () => {
	it("derives the plan from the PRICE lookup key (survives a portal plan switch)", () => {
		// Stale checkout metadata says 'pro', but the customer now pays the team price.
		const result = planForSubscription(
			sub("active", {
				lookupKey: "runway_team_annual",
				interval: "year",
				metadataPlan: "pro",
			})
		);
		expect(result).toMatchObject({
			grant: true,
			plan: "team",
			billingInterval: "year",
		});
	});

	it("falls back to checkout metadata when the price has no lookup key", () => {
		const result = planForSubscription(
			sub("active", { lookupKey: null, metadataPlan: "team" })
		);
		expect(result).toMatchObject({ grant: true, plan: "team" });
	});
});

describe("planFromLookupKey", () => {
	it("maps known keys and returns undefined otherwise", () => {
		expect(planFromLookupKey("runway_pro_monthly")).toBe("pro");
		expect(planFromLookupKey("runway_team_annual")).toBe("team");
		expect(planFromLookupKey("nope")).toBeUndefined();
		expect(planFromLookupKey(null)).toBeUndefined();
		expect(planFromLookupKey(undefined)).toBeUndefined();
	});
});
