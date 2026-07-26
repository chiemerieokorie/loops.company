import { v } from "convex/values";

import { publicQuery } from "./lib/functions";

// A tiny unauthenticated liveness probe. Built from `publicQuery` (the sanctioned
// public-read escape hatch) rather than the raw `query` builder, so it routes through
// the one place allowed to touch the raw builders and the authorization-fitness test
// stays green.
export const get = publicQuery({
	args: {},
	returns: v.string(),
	handler: () => "OK",
});
