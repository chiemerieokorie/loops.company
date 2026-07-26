import type Stripe from "stripe";

import { isPlanName, type PlanName } from "./plans.js";

// Pure checkout config + param builders (no "use node", no ctx) — the Stripe
// price→plan mapping and the embedded-session shape, unit-testable without a
// browser or a deployment. The node action (convex/stripe.ts) resolves prices by
// lookup key and mints the session from `buildEmbeddedSessionParams`; the webhook
// (http.ts) reads the plan back off metadata via `planFromMetadata`.
//
// Plans are FLAT tiers: monthly + annual each get their OWN Stripe price, keyed by a
// stable lookup key so rotating a price in the dashboard never touches code. Create
// four Prices in Stripe with these exact lookup keys.

export type PaidPlan = "pro" | "team";
export type BillingInterval = "monthly" | "annual";

export const CHECKOUT_PLANS = {
	pro: { monthly: "runway_pro_monthly", annual: "runway_pro_annual" },
	team: { monthly: "runway_team_monthly", annual: "runway_team_annual" },
} as const satisfies Record<PaidPlan, Record<BillingInterval, string>>;

export function isPaidPlan(value: string): value is PaidPlan {
	return value === "pro" || value === "team";
}

export function isBillingInterval(value: string): value is BillingInterval {
	return value === "monthly" || value === "annual";
}

// The Stripe price lookup key for a (plan, interval). Resolved to a concrete price
// id at runtime via `stripe.prices.list({ lookup_keys })`.
export function lookupKeyFor(
	plan: PaidPlan,
	interval: BillingInterval
): string {
	return CHECKOUT_PLANS[plan][interval];
}

// The plan a subscription grants, read back from the metadata WE stamped at checkout
// (`{ plan }`). Trust our own metadata; fall back to `free` for anything unrecognized
// (a deleted/lapsed subscription downgrades to free).
export function planFromMetadata(
	metadata: Record<string, unknown> | null | undefined
): PlanName {
	const plan = metadata?.plan;
	if (typeof plan === "string" && isPlanName(plan)) {
		return plan;
	}
	return "free";
}

// Reverse of CHECKOUT_PLANS: Stripe price lookup key → plan. Lets the projector base
// entitlement on the price the customer is ACTUALLY paying for, which survives a plan
// change made through the Customer Portal (where the checkout-time metadata goes stale).
const LOOKUP_KEY_TO_PLAN: Record<string, PaidPlan> = Object.fromEntries(
	(Object.keys(CHECKOUT_PLANS) as PaidPlan[]).flatMap((plan) =>
		(Object.values(CHECKOUT_PLANS[plan]) as string[]).map(
			(key) => [key, plan] as const
		)
	)
);

export function planFromLookupKey(
	lookupKey: string | null | undefined
): PaidPlan | undefined {
	return lookupKey ? LOOKUP_KEY_TO_PLAN[lookupKey] : undefined;
}

// A subscription in one of these statuses keeps its paid plan: active/trialing, and
// `past_due` (dunning grace — the customer had access and Stripe is retrying the
// charge, so we KEEP the plan set rather than no-op, which self-heals a row an
// out-of-order event may have downgraded). ANY other status → free (safe default that
// covers canceled/unpaid/incomplete/incomplete_expired/paused and future statuses).
const GRANT_STATUSES = new Set(["active", "trialing", "past_due"]);

// Structurally-typed subset of Stripe.Subscription the projector reads — kept minimal
// so this stays unit-testable without constructing a full Stripe object.
export interface ProjectableSubscription {
	items: {
		data: Array<{
			price: {
				lookup_key?: string | null;
				recurring?: { interval?: string | null } | null;
			};
		}>;
	};
	metadata?: Record<string, unknown> | null;
	status: string;
}

// The entitlement decision for a subscription event. Prefer the plan implied by the
// PRICE (survives portal plan-switches); fall back to the checkout metadata.
// `grant: false` → downgrade to free.
export function planForSubscription(sub: ProjectableSubscription):
	| { grant: true; plan: PlanName; billingInterval: string | undefined }
	| {
			grant: false;
	  } {
	if (!GRANT_STATUSES.has(sub.status)) {
		return { grant: false };
	}
	const price = sub.items.data[0]?.price;
	const plan =
		planFromLookupKey(price?.lookup_key) ?? planFromMetadata(sub.metadata);
	return {
		grant: true,
		plan,
		billingInterval: price?.recurring?.interval ?? undefined,
	};
}

// Where Stripe sends the buyer after the embedded checkout confirms — back inside
// the workspace shell, with `?upgraded=1` for the celebration banner.
// `{CHECKOUT_SESSION_ID}` is filled by Stripe. Display-only — the webhook, not this
// page, grants the plan.
export function buildBillingReturnUrl(siteUrl: string, slug: string): string {
	return `${siteUrl}/${slug}/billing?upgraded=1&session_id={CHECKOUT_SESSION_ID}`;
}

// The embedded ("elements" ui_mode) Checkout Session params. Minted with the raw
// Stripe SDK (not the @convex-dev/stripe component, which discards `client_secret`).
// `orgId` is the key the component extracts into its indexed `subscriptions.orgId`
// column (so `getSubscriptionByOrgId` works); `workspaceId` is the same value kept
// explicit; `plan` is what the webhook reads back. Metadata is mirrored onto
// `subscription_data` so it survives onto the synced subscription row AND every
// renewal event — and so the component's `handleSubscriptionCreated` can backfill
// `orgId` onto any invoice that synced before the subscription (its documented
// invoice-before-subscription timing fix). Dropping `orgId` here would silently
// break both `getSubscriptionByOrgId` and `listInvoicesByOrgId`.
export function buildEmbeddedSessionParams(o: {
	priceId: string;
	customerId: string;
	workspaceId: string;
	userId: string;
	plan: PaidPlan;
	returnUrl: string;
}): Stripe.Checkout.SessionCreateParams {
	const metadata = {
		orgId: o.workspaceId,
		workspaceId: o.workspaceId,
		userId: o.userId,
		plan: o.plan,
	};
	return {
		// stripe-node v22 types pre-date the `custom`→`elements` rename; the runtime
		// literal is correct. Cast through unknown — the runtime is the source of truth.
		ui_mode:
			"elements" as unknown as Stripe.Checkout.SessionCreateParams["ui_mode"],
		mode: "subscription",
		customer: o.customerId,
		// Flat tier — one line item, quantity 1 (seats are member caps, not Stripe qty).
		line_items: [{ price: o.priceId, quantity: 1 }],
		return_url: o.returnUrl,
		metadata,
		subscription_data: { metadata },
	};
}
