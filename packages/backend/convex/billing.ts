import { v } from "convex/values";

import { components } from "./_generated/api";
import {
	internalMutation,
	internalQuery,
	type QueryCtx,
} from "./_generated/server";
import { assertMember, assertRole } from "./lib/access";
import { authedQuery } from "./lib/functions";
import { DEFAULT_PLAN, type PlanName, planValidator } from "./lib/plans";

// Workspace billing. The plan a workspace is on is written ONLY by the Stripe
// webhook (`setPlan`); everything read here is either the local entitlement row or
// the @convex-dev/stripe component's synced money-state. Gate a feature by reading
// `currentPlan` and comparing against the tier.

const roleValidator = v.union(
	v.literal("owner"),
	v.literal("admin"),
	v.literal("member")
);

// The component stores Stripe timestamps in raw SECONDS; the app uses milliseconds.
const SUBSCRIPTION_INVOICE_LIMIT = 12;
const toMillis = (seconds: number): number => seconds * 1000;

// Subset of the Stripe component's invoice row (the fields this query reads).
// Annotating the callbacks keeps this file typechecking before `convex dev` codegen
// types the `components.stripe` API.
interface StripeInvoiceRow {
	amountDue: number;
	amountPaid: number;
	created: number;
	status: string;
	stripeInvoiceId: string;
}

// The workspace's current plan (defaults to free with no billing row). Exported so
// feature gates elsewhere can read it without going through the public query.
export async function currentPlan(
	ctx: QueryCtx,
	workspaceId: string
): Promise<PlanName> {
	const record = await ctx.db
		.query("workspaceBilling")
		.withIndex("by_workspace", (q) => q.eq("workspaceId", workspaceId))
		.first();
	return record?.plan ?? DEFAULT_PLAN;
}

// Member-readable summary the billing page needs in one round-trip: the tier plus the
// caller's role. `role` gates the admin-only subscription/invoice detail from an
// explicit value (not a swallowed authorization throw, which would hide real backend
// errors as "not admin"); `plan` is the tier shown to everyone.
export const myBillingSummary = authedQuery({
	args: { workspaceId: v.string() },
	returns: v.object({ role: roleValidator, plan: planValidator }),
	handler: async (ctx, args) => {
		const { role } = await assertMember(ctx, args.workspaceId);
		const workspacePlan = await currentPlan(ctx, args.workspaceId);
		return { role, plan: workspacePlan };
	},
});

// Authorize a billing OPERATION for a workspace. The Stripe billing actions
// (convex/stripe.ts) run in the Node runtime with no `ctx.db`, so they delegate the
// owner/admin check to this internal query — the auth identity propagates through
// `ctx.runQuery`, and `assertRole` reads it. Throws "forbidden" otherwise.
export const requireBillingRole = internalQuery({
	args: { workspaceId: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		await assertRole(ctx, args.workspaceId, ["owner", "admin"]);
		return null;
	},
});

// The workspace's Stripe customer id (the map WE own — the component's `customers`
// table has no orgId). Null until the first checkout creates one. Internal: read by
// the checkout/portal actions.
export const getWorkspaceCustomerId = internalQuery({
	args: { workspaceId: v.string() },
	returns: v.union(v.string(), v.null()),
	handler: async (ctx, args) => {
		const record = await ctx.db
			.query("workspaceBilling")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.first();
		return record?.stripeCustomerId ?? null;
	},
});

// Persist the workspace→customer map after the checkout action creates a Stripe
// customer (raw SDK). Internal — entitlement state is never client-written.
export const persistWorkspaceCustomer = internalMutation({
	args: { workspaceId: v.string(), stripeCustomerId: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const now = Date.now();
		const existing = await ctx.db
			.query("workspaceBilling")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.first();
		if (existing) {
			await ctx.db.patch(existing._id, {
				stripeCustomerId: args.stripeCustomerId,
				updatedAt: now,
			});
		} else {
			await ctx.db.insert("workspaceBilling", {
				workspaceId: args.workspaceId,
				plan: DEFAULT_PLAN,
				stripeCustomerId: args.stripeCustomerId,
				updatedAt: now,
			});
		}
		return null;
	},
});

// The Stripe webhook flips the plan — INTERNAL (registerRoutes in http.ts verifies
// the signature + syncs the component tables, then calls this). Upserts one row per
// workspace. Idempotent and OCC-safe: the concurrent checkout.session.completed +
// first subscription event both run this; the loser retries, re-reads the
// now-present row, and patches. Only the money-state fields that were PROVIDED are
// patched (a downgrade event omitting period/sub id must not clobber the stored
// customer) — EXCEPT `clearSubscription`, which resets the subscription/period fields
// (used on cancellation). `stripeCustomerId` is never touched here.
export const setPlan = internalMutation({
	args: {
		workspaceId: v.string(),
		plan: planValidator,
		stripeSubscriptionId: v.optional(v.string()),
		billingInterval: v.optional(v.string()),
		// MILLISECONDS (convert the component's seconds before calling).
		currentPeriodEnd: v.optional(v.number()),
		cancelAtPeriodEnd: v.optional(v.boolean()),
		// Reset the subscription/period fields (cancellation → free). Takes precedence.
		clearSubscription: v.optional(v.boolean()),
		// When clearing, only proceed if the stored subscription matches this id.
		// Guards against a stale/redelivered delete that races a newer re-subscribe.
		expectedSubscriptionId: v.optional(v.string()),
	},
	returns: v.id("workspaceBilling"),
	handler: async (ctx, args) => {
		const now = Date.now();
		const existing = await ctx.db
			.query("workspaceBilling")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.first();
		// Out-of-order webhook guard: a stale `subscription.deleted`/terminal event
		// (redelivered, or racing a re-subscribe) must not clear a DIFFERENT, newer
		// subscription. Skip the downgrade unless the stored sub is the one named.
		if (
			args.clearSubscription &&
			args.expectedSubscriptionId &&
			existing?.stripeSubscriptionId &&
			existing.stripeSubscriptionId !== args.expectedSubscriptionId
		) {
			return existing._id;
		}
		const patch = args.clearSubscription
			? {
					plan: args.plan,
					updatedAt: now,
					// `undefined` in a patch deletes the optional field.
					stripeSubscriptionId: undefined,
					billingInterval: undefined,
					currentPeriodEnd: undefined,
					cancelAtPeriodEnd: undefined,
				}
			: {
					plan: args.plan,
					updatedAt: now,
					...(args.stripeSubscriptionId !== undefined && {
						stripeSubscriptionId: args.stripeSubscriptionId,
					}),
					...(args.billingInterval !== undefined && {
						billingInterval: args.billingInterval,
					}),
					...(args.currentPeriodEnd !== undefined && {
						currentPeriodEnd: args.currentPeriodEnd,
					}),
					...(args.cancelAtPeriodEnd !== undefined && {
						cancelAtPeriodEnd: args.cancelAtPeriodEnd,
					}),
				};
		if (existing) {
			await ctx.db.patch(existing._id, patch);
			return existing._id;
		}
		return await ctx.db.insert("workspaceBilling", {
			workspaceId: args.workspaceId,
			...patch,
		});
	},
});

// The billing page's read: local entitlement + the component's synced money-state.
// Owner/admin only (invoices/amounts are billing detail). Component timestamps are
// seconds → ms here.
export const getWorkspaceBilling = authedQuery({
	args: { workspaceId: v.string() },
	returns: v.object({
		plan: planValidator,
		billingInterval: v.union(v.string(), v.null()),
		cancelAtPeriodEnd: v.boolean(),
		currentPeriodEnd: v.union(v.number(), v.null()),
		subscription: v.union(
			v.object({
				status: v.string(),
				priceId: v.string(),
				currentPeriodEnd: v.number(),
				cancelAtPeriodEnd: v.boolean(),
			}),
			v.null()
		),
		invoices: v.array(
			v.object({
				stripeInvoiceId: v.string(),
				status: v.string(),
				amountPaid: v.number(),
				amountDue: v.number(),
				created: v.number(),
			})
		),
	}),
	handler: async (ctx, args) => {
		await assertRole(ctx, args.workspaceId, ["owner", "admin"]);
		const record = await ctx.db
			.query("workspaceBilling")
			.withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
			.first();
		const sub = await ctx.runQuery(
			components.stripe.public.getSubscriptionByOrgId,
			{ orgId: args.workspaceId }
		);
		const invoices = await ctx.runQuery(
			components.stripe.public.listInvoicesByOrgId,
			{ orgId: args.workspaceId }
		);
		return {
			plan: record?.plan ?? DEFAULT_PLAN,
			billingInterval: record?.billingInterval ?? null,
			cancelAtPeriodEnd: record?.cancelAtPeriodEnd ?? false,
			currentPeriodEnd: record?.currentPeriodEnd ?? null,
			subscription: sub
				? {
						status: sub.status,
						priceId: sub.priceId,
						currentPeriodEnd: toMillis(sub.currentPeriodEnd),
						cancelAtPeriodEnd: sub.cancelAtPeriodEnd,
					}
				: null,
			invoices: invoices
				.slice()
				.sort(
					(a: StripeInvoiceRow, b: StripeInvoiceRow) => b.created - a.created
				)
				.slice(0, SUBSCRIPTION_INVOICE_LIMIT)
				.map((invoice: StripeInvoiceRow) => ({
					stripeInvoiceId: invoice.stripeInvoiceId,
					status: invoice.status,
					amountPaid: invoice.amountPaid,
					amountDue: invoice.amountDue,
					created: toMillis(invoice.created),
				})),
		};
	},
});
