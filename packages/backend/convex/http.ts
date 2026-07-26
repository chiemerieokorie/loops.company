import { registerRoutes as registerStripeRoutes } from "@convex-dev/stripe";
import type { GenericActionCtx, GenericDataModel } from "convex/server";
import { httpRouter } from "convex/server";
import type Stripe from "stripe";

import { components, internal } from "./_generated/api";
import { httpAction } from "./_generated/server";
import { authComponent, createAuth } from "./auth";
import { planForSubscription, planFromMetadata } from "./lib/billingPlans";
import { handleEmailWebhook } from "./resend";

const http = httpRouter();

authComponent.registerRoutes(http, createAuth, { cors: true });

// Stripe → Convex bridge. The component verifies the signature and syncs its own
// customers/subscriptions/invoices tables BEFORE these handlers run; we then PROJECT
// the result onto the workspace entitlement (`billing.setPlan`, keyed by the signed
// `orgId` metadata = workspaceId). This is the ONLY thing that grants/revokes a
// plan — never the client, never the return page. The status→plan decision lives in
// the pure `planForSubscription` (unit-tested in billing.test.ts).
async function projectSubscription(
	ctx: GenericActionCtx<GenericDataModel>,
	sub: Stripe.Subscription
): Promise<void> {
	const workspaceId = sub.metadata?.orgId;
	if (!workspaceId) {
		return;
	}
	const decision = planForSubscription(sub);
	if (!decision.grant) {
		await ctx.runMutation(internal.billing.setPlan, {
			workspaceId,
			plan: "free",
			clearSubscription: true,
			expectedSubscriptionId: sub.id,
		});
		return;
	}
	// The component has already synced the row, so read period/cancel from it (avoids
	// API-version field-moves). Component stores seconds → ms.
	const synced = await ctx.runQuery(components.stripe.public.getSubscription, {
		stripeSubscriptionId: sub.id,
	});
	await ctx.runMutation(internal.billing.setPlan, {
		workspaceId,
		plan: decision.plan,
		stripeSubscriptionId: sub.id,
		billingInterval: decision.billingInterval,
		currentPeriodEnd: synced ? synced.currentPeriodEnd * 1000 : undefined,
		cancelAtPeriodEnd: synced?.cancelAtPeriodEnd,
	});
}

registerStripeRoutes(http, components.stripe, {
	webhookPath: "/stripe/webhook",
	events: {
		// First activation (the checkout completed). The subscription.created event
		// also fires and carries the full period — but setting the plan here makes the
		// upgrade visible the instant checkout returns.
		"checkout.session.completed": async (ctx, event) => {
			const session = event.data.object;
			const workspaceId = session.metadata?.orgId;
			if (!workspaceId) {
				return;
			}
			// Stamp the subscription id immediately so the out-of-order guard in
			// `setPlan` can protect this just-granted row — otherwise a redelivered
			// stale `subscription.deleted` could wipe it before `subscription.created`
			// lands (e.g. on a re-subscribe).
			const stripeSubscriptionId =
				typeof session.subscription === "string"
					? session.subscription
					: (session.subscription?.id ?? undefined);
			await ctx.runMutation(internal.billing.setPlan, {
				workspaceId,
				plan: planFromMetadata(session.metadata),
				...(stripeSubscriptionId ? { stripeSubscriptionId } : {}),
			});
			// Slack "wins bot" — celebrate the new subscription (convex/slack.postWin).
			// Opt-in + best-effort: the action no-ops unless SLACK_BOT_TOKEN +
			// SLACK_WINS_CHANNEL are set, and it's scheduled so a Slack outage can
			// never fail the webhook. `amount_total` is the smallest currency unit.
			// Renewals (invoice.paid) would post with `isRenewal: true`.
			await ctx.scheduler.runAfter(0, internal.slack.postWin, {
				event: {
					type: "subscription",
					workspaceId,
					plan: planFromMetadata(session.metadata),
					amountCents: session.amount_total ?? undefined,
					currency: session.currency ?? undefined,
					isRenewal: false,
				},
			});
		},
		// Created (dashboard/out-of-checkout), updated (renewal, plan switch, scheduled
		// cancel toggle), and deleted (period ended) all funnel through the projector.
		"customer.subscription.created": (ctx, event) =>
			projectSubscription(ctx, event.data.object),
		"customer.subscription.updated": (ctx, event) =>
			projectSubscription(ctx, event.data.object),
		"customer.subscription.deleted": async (ctx, event) => {
			const workspaceId = event.data.object.metadata?.orgId;
			if (workspaceId) {
				await ctx.runMutation(internal.billing.setPlan, {
					workspaceId,
					plan: "free",
					clearSubscription: true,
					expectedSubscriptionId: event.data.object.id,
				});
			}
		},
	},
});

// Resend delivery-status webhook. Configure this URL
// (https://<deployment>.convex.site/resend-webhook) in the Resend dashboard
// with all `email.*` events enabled, and set RESEND_WEBHOOK_SECRET.
http.route({
	path: "/resend-webhook",
	method: "POST",
	handler: httpAction((ctx, req) => handleEmailWebhook(ctx, req)),
});

// --- Trigger.dev job callbacks ---
//
// The tasks in @runway/jobs POST their result here after uploading to R2, so an
// internal mutation can persist the RawRef inside a trusted, membership-free context
// (see convex/jobs.ts). The ONLY authorization is a shared secret sent in the
// `x-trigger-callback-secret` header, compared in constant time against the
// TRIGGER_CALLBACK_SECRET deployment env var (the same value is set on the
// Trigger.dev project env). No secret configured ⇒ every callback is rejected.

const CALLBACK_SECRET_HEADER = "x-trigger-callback-secret";

// Constant-time string comparison — avoids leaking the secret via response timing.
// (httpAction runs in the V8 runtime, so no Node `crypto.timingSafeEqual`.)
function secretsMatch(expected: string, provided: string): boolean {
	if (expected.length !== provided.length) {
		return false;
	}
	// Accumulate mismatches over the WHOLE string (no early return) so the loop's
	// duration doesn't depend on where the first differing character is.
	let mismatches = 0;
	for (let i = 0; i < expected.length; i++) {
		if (expected.charCodeAt(i) !== provided.charCodeAt(i)) {
			mismatches += 1;
		}
	}
	return mismatches === 0;
}

function callbackAuthorized(req: Request): boolean {
	const expected = process.env.TRIGGER_CALLBACK_SECRET;
	const provided = req.headers.get(CALLBACK_SECRET_HEADER);
	if (!(expected && provided)) {
		return false;
	}
	return secretsMatch(expected, provided);
}

http.route({
	path: "/trigger/note-export-complete",
	method: "POST",
	handler: httpAction(async (ctx, req) => {
		if (!callbackAuthorized(req)) {
			return new Response("unauthorized", { status: 401 });
		}
		const body = (await req.json()) as { noteId: string; ref: unknown };
		await ctx.runMutation(internal.notes.attachExportRef, {
			noteId: body.noteId as never,
			ref: body.ref as never,
		});
		return new Response(null, { status: 204 });
	}),
});

http.route({
	path: "/trigger/import-complete",
	method: "POST",
	handler: httpAction(async (ctx, req) => {
		if (!callbackAuthorized(req)) {
			return new Response("unauthorized", { status: 401 });
		}
		const body = (await req.json()) as { importId: string; ref: unknown };
		await ctx.runMutation(internal.documentImports.attachRef, {
			importId: body.importId as never,
			ref: body.ref as never,
		});
		return new Response(null, { status: 204 });
	}),
});

export default http;
