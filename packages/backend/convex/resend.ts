import { Resend, type SendEmailOptions } from "@convex-dev/resend";
import type { GenericActionCtx } from "convex/server";

import { components, internal } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";

/**
 * Resend defaults to test mode, which only allows delivery to Resend's
 * approved test addresses. Opt into real delivery by setting
 * `RESEND_TEST_MODE=false` in the Convex deployment (and a verified domain).
 */
const isTestMode = process.env.RESEND_TEST_MODE !== "false";

/**
 * Shared Resend component instance. Used by:
 * - `sendEmails.ts` (node actions) to enqueue rendered emails
 * - `http.ts` to handle the delivery-status webhook
 *
 * `onEmailEvent` is dispatched whenever Resend reports a status change
 * (delivered, bounced, opened, complained, ...) via the webhook.
 */
export const resend: Resend = new Resend(components.resend, {
	testMode: isTestMode,
	onEmailEvent: internal.emailEvents.handleEmailEvent,
});

/**
 * Default sender. Set `EMAIL_FROM` (e.g. `Runway <noreply@yourdomain.com>`)
 * once you have a verified domain in Resend. The `onboarding@resend.dev`
 * fallback works out of the box in test mode.
 */
export const DEFAULT_FROM =
	process.env.EMAIL_FROM ?? "Runway <onboarding@resend.dev>";

/**
 * The Resend client types its ctx against a mutation `runMutation`. Convex 1.41
 * gave action and mutation `runMutation` slightly different signatures (only the
 * mutation variant takes `transactionLimits`), so an action ctx — the documented
 * caller for these network operations — is no longer structurally assignable.
 * The cast bridges that gap; runtime behavior is unchanged (Resend only calls
 * `runMutation(fn, args)`, which an action ctx fully supports).
 */
type ResendRunCtx = Parameters<typeof resend.sendEmail>[0];

const asResendCtx = (ctx: GenericActionCtx<DataModel>): ResendRunCtx =>
	ctx as unknown as ResendRunCtx;

/** Enqueue an email through the Resend component from a node action. */
export const enqueueEmail = (
	ctx: GenericActionCtx<DataModel>,
	options: SendEmailOptions
) => resend.sendEmail(asResendCtx(ctx), options);

/** Handle the Resend delivery-status webhook from an HTTP action. */
export const handleEmailWebhook = (
	ctx: GenericActionCtx<DataModel>,
	req: Request
) => resend.handleResendEventWebhook(asResendCtx(ctx), req);
