import { v } from "convex/values";

import { authComponent } from "./auth";
import { publicQuery } from "./lib/functions";

// A small example of an auth-AWARE public read: it tolerates an unauthenticated caller
// (returning a different message) instead of throwing, which is exactly what
// `publicQuery` is for. An entity-gated read should use `authedQuery` instead so the
// RLS net applies.
export const get = publicQuery({
	args: {},
	returns: v.object({ message: v.string() }),
	handler: async (ctx) => {
		const authUser = await authComponent.safeGetAuthUser(ctx);
		return { message: authUser ? "This is private" : "Not authenticated" };
	},
});
