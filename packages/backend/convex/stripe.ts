"use node";

import { StripeSubscriptions } from "@convex-dev/stripe";
import { v } from "convex/values";
import Stripe from "stripe";

import { components, internal } from "./_generated/api";
import type { ActionCtx } from "./_generated/server";
import {
	buildBillingReturnUrl,
	buildEmbeddedSessionParams,
	lookupKeyFor,
} from "./lib/billingPlans";
import { authedAction } from "./lib/functions";

// The Stripe billing ACTIONS (Node runtime). Embedded checkout must use the raw
// Stripe SDK — the @convex-dev/stripe component's createCheckoutSession discards
// `client_secret`, which the embedded Elements flow requires. The component still
// owns the customer PORTAL, cancellation, and (in billing.ts) the synced reads.
//
// AUTHORIZATION: actions have no `ctx.db`, so each delegates the owner/admin check
// to `internal.billing.requireBillingRole` (auth identity propagates through
// `ctx.runQuery`). The reference is `workspaceId`.

const planArg = v.union(v.literal("pro"), v.literal("team"));
const intervalArg = v.union(v.literal("monthly"), v.literal("annual"));

// Component client — used for the portal + cancellation (it owns those).
const stripeSubscriptions = new StripeSubscriptions(components.stripe, {});

function getStripe(): Stripe {
	const key = process.env.STRIPE_SECRET_KEY;
	if (!key) {
		throw new Error("STRIPE_SECRET_KEY is not set");
	}
	// No explicit apiVersion: stripe-node v22 is pinned to the API version that
	// `ui_mode: "elements"` requires.
	return new Stripe(key);
}

function getSiteUrl(): string {
	const url = process.env.SITE_URL;
	if (!url) {
		throw new Error("SITE_URL is not set");
	}
	return url;
}

// Resolve the workspace's Better Auth org slug (for return/portal URLs). Falls back
// to the id if somehow unslugged (never expected — every org is created with a slug).
async function resolveSlug(
	ctx: ActionCtx,
	workspaceId: string
): Promise<string> {
	const slug: string | null = await ctx.runQuery(
		components.betterAuth.queries.getOrganizationSlug,
		{ organizationId: workspaceId }
	);
	return slug ?? workspaceId;
}

// Create the embedded Checkout Session for a workspace upgrade. Returns the
// `client_secret` the browser island mounts. Owner/admin only.
export const createCheckoutSession = authedAction({
	args: {
		workspaceId: v.string(),
		plan: planArg,
		interval: intervalArg,
	},
	returns: v.object({ clientSecret: v.union(v.string(), v.null()) }),
	handler: async (ctx, args): Promise<{ clientSecret: string | null }> => {
		// Owner/admin only. A non-admin (reachable by direct URL) is an EXPECTED
		// refusal → return null so the page redirects to /billing, rather than a throw
		// that would crash the checkout Server Component into the error boundary.
		try {
			await ctx.runQuery(internal.billing.requireBillingRole, {
				workspaceId: args.workspaceId,
			});
		} catch {
			return { clientSecret: null };
		}

		const stripe = getStripe();

		// Independent pre-reads run together (after the auth gate): the double-billing
		// guard's subscriptions, the price lookup, the workspace→customer map, and the
		// org slug for the return URL. None depends on another; only the customer
		// CREATE below is conditional.
		const [existingSubs, prices, existingCustomerId, slug] = await Promise.all([
			ctx.runQuery(components.stripe.public.listSubscriptionsByOrgId, {
				orgId: args.workspaceId,
			}),
			stripe.prices.list({
				lookup_keys: [lookupKeyFor(args.plan, args.interval)],
				active: true,
				limit: 1,
			}),
			ctx.runQuery(internal.billing.getWorkspaceCustomerId, {
				workspaceId: args.workspaceId,
			}),
			resolveSlug(ctx, args.workspaceId),
		]);

		// Guard against double-billing (this route is reachable by direct URL): check
		// ALL rows for any active/trialing one — a `.first()` on the org index can
		// return a stale canceled row and let a second subscription through. Switching
		// plans must go through the billing portal, never a second checkout.
		const hasActiveSub = existingSubs.some(
			(sub: { status: string }) =>
				sub.status === "active" || sub.status === "trialing"
		);
		// Already subscribed (reachable by direct URL) is an EXPECTED refusal, not a
		// fault → return null (the page redirects to /billing; plan changes go through
		// the portal). A MISSING price below, by contrast, is a real misconfiguration
		// and is left to throw so it surfaces instead of silently bouncing.
		if (hasActiveSub) {
			return { clientSecret: null };
		}

		const price = prices.data[0];
		if (!price) {
			throw new Error(
				`no active Stripe price for "${lookupKeyFor(args.plan, args.interval)}"`
			);
		}

		// Ensure ONE Stripe customer per workspace (the map we own). Idempotency key
		// guards against a double-create race on the first checkout.
		let customerId = existingCustomerId;
		if (!customerId) {
			const customer = await stripe.customers.create(
				{
					metadata: { workspaceId: args.workspaceId, orgId: args.workspaceId },
				},
				{ idempotencyKey: `runway_ws_customer_${args.workspaceId}` }
			);
			customerId = customer.id;
			await ctx.runMutation(internal.billing.persistWorkspaceCustomer, {
				workspaceId: args.workspaceId,
				stripeCustomerId: customerId,
			});
		}

		const session = await stripe.checkout.sessions.create(
			buildEmbeddedSessionParams({
				priceId: price.id,
				customerId,
				workspaceId: args.workspaceId,
				userId: ctx.userId,
				plan: args.plan,
				returnUrl: buildBillingReturnUrl(getSiteUrl(), slug),
			})
		);
		return { clientSecret: session.client_secret };
	},
});

// Mint a Stripe Customer Portal session so admins can manage payment methods,
// invoices, and cancellation. Null if the workspace never purchased. Owner/admin.
export const createBillingPortalSession = authedAction({
	args: { workspaceId: v.string() },
	returns: v.union(v.object({ url: v.string() }), v.null()),
	handler: async (ctx, args): Promise<{ url: string } | null> => {
		await ctx.runQuery(internal.billing.requireBillingRole, {
			workspaceId: args.workspaceId,
		});
		const customerId = await ctx.runQuery(
			internal.billing.getWorkspaceCustomerId,
			{ workspaceId: args.workspaceId }
		);
		if (!customerId) {
			return null;
		}
		const slug = await resolveSlug(ctx, args.workspaceId);
		return await stripeSubscriptions.createCustomerPortalSession(ctx, {
			customerId,
			returnUrl: `${getSiteUrl()}/${slug}/billing`,
		});
	},
});

// Cancel at period end (the workspace keeps access until the period ends). Reads the
// active subscription from the component's synced row by orgId. Owner/admin.
export const cancelSubscription = authedAction({
	args: { workspaceId: v.string() },
	returns: v.object({ canceled: v.boolean() }),
	handler: async (ctx, args): Promise<{ canceled: boolean }> => {
		await ctx.runQuery(internal.billing.requireBillingRole, {
			workspaceId: args.workspaceId,
		});
		const subscription = await ctx.runQuery(
			components.stripe.public.getSubscriptionByOrgId,
			{ orgId: args.workspaceId }
		);
		if (!subscription) {
			return { canceled: false };
		}
		await stripeSubscriptions.cancelSubscription(ctx, {
			stripeSubscriptionId: subscription.stripeSubscriptionId,
			cancelAtPeriodEnd: true,
		});
		return { canceled: true };
	},
});
