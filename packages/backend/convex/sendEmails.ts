"use node";

import { v } from "convex/values";

import {
	renderMagicLinkEmail,
	renderPasswordResetEmail,
	renderTransactionalEmail,
	renderVerificationEmail,
	renderWelcomeEmail,
	renderWorkspaceInviteEmail,
} from "../emails/render";
import { APP_NAME } from "../emails/theme";
import { internalAction } from "./_generated/server";
import { DEFAULT_FROM, enqueueEmail } from "./resend";

/**
 * Email senders. These run in the Convex Node runtime because React Email's
 * renderer depends on `react-dom/server`. Each action renders a template to
 * HTML + plain text, then enqueues it through the Resend component.
 *
 * They are invoked from `auth.ts` (verification, reset, welcome) and can be
 * scheduled from any app function (transactional).
 */

export const sendVerification = internalAction({
	args: {
		to: v.string(),
		url: v.string(),
		name: v.optional(v.string()),
	},
	returns: v.null(),
	handler: async (ctx, { to, url, name }) => {
		const { html, text } = await renderVerificationEmail({ url, name });
		await enqueueEmail(ctx, {
			from: DEFAULT_FROM,
			to,
			subject: "Confirm your email",
			html,
			text,
		});
		return null;
	},
});

export const sendPasswordReset = internalAction({
	args: {
		to: v.string(),
		url: v.string(),
		name: v.optional(v.string()),
	},
	returns: v.null(),
	handler: async (ctx, { to, url, name }) => {
		const { html, text } = await renderPasswordResetEmail({ url, name });
		await enqueueEmail(ctx, {
			from: DEFAULT_FROM,
			to,
			subject: "Reset your password",
			html,
			text,
		});
		return null;
	},
});

export const sendWelcome = internalAction({
	args: {
		to: v.string(),
		name: v.optional(v.string()),
		url: v.optional(v.string()),
	},
	returns: v.null(),
	handler: async (ctx, { to, name, url }) => {
		const { html, text } = await renderWelcomeEmail({ name, url });
		await enqueueEmail(ctx, {
			from: DEFAULT_FROM,
			to,
			subject: `Welcome to ${APP_NAME}`,
			html,
			text,
		});
		return null;
	},
});

export const sendTransactional = internalAction({
	args: {
		to: v.string(),
		subject: v.string(),
		heading: v.string(),
		lines: v.array(v.string()),
		cta: v.optional(v.object({ label: v.string(), url: v.string() })),
		previewText: v.optional(v.string()),
	},
	returns: v.null(),
	handler: async (ctx, { to, subject, heading, lines, cta, previewText }) => {
		const { html, text } = await renderTransactionalEmail({
			heading,
			lines,
			cta,
			previewText,
		});
		await enqueueEmail(ctx, {
			from: DEFAULT_FROM,
			to,
			subject,
			html,
			text,
		});
		return null;
	},
});

export const sendMagicLink = internalAction({
	args: {
		to: v.string(),
		url: v.string(),
		name: v.optional(v.string()),
	},
	returns: v.null(),
	handler: async (ctx, { to, url, name }) => {
		const { html, text } = await renderMagicLinkEmail({ url, name });
		await enqueueEmail(ctx, {
			from: DEFAULT_FROM,
			to,
			subject: `Your ${APP_NAME} sign-in link`,
			html,
			text,
		});
		return null;
	},
});

export const sendWorkspaceInvite = internalAction({
	args: {
		to: v.string(),
		url: v.string(),
		workspaceName: v.string(),
		inviterName: v.optional(v.string()),
	},
	returns: v.null(),
	handler: async (ctx, { to, url, workspaceName, inviterName }) => {
		const { html, text } = await renderWorkspaceInviteEmail({
			url,
			workspaceName,
			inviterName,
		});
		await enqueueEmail(ctx, {
			from: DEFAULT_FROM,
			to,
			subject: `You're invited to ${workspaceName} on ${APP_NAME}`,
			html,
			text,
		});
		return null;
	},
});
