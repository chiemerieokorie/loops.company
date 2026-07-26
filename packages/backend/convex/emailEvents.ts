import { vOnEmailEventArgs } from "@convex-dev/resend";
import { v } from "convex/values";

import { internalMutation } from "./_generated/server";

/**
 * Dispatched by the Resend component (via the `/resend-webhook` route) whenever
 * an email's delivery status changes. Records the event to the `emailEvents`
 * table so application code can query and react to it.
 *
 * Wired up as `onEmailEvent` on the shared Resend instance in `resend.ts`.
 */
export const handleEmailEvent = internalMutation({
	args: vOnEmailEventArgs,
	returns: v.null(),
	handler: async (ctx, { id, event }) => {
		await ctx.db.insert("emailEvents", {
			emailId: id,
			type: event.type,
			occurredAt: event.created_at,
		});
		return null;
	},
});
