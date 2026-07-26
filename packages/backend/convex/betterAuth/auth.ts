import { createAuth } from "../auth";

// Static Better Auth instance for SCHEMA GENERATION ONLY (`npx @better-auth/cli
// generate`, run from this directory). This file must contain nothing else: it is
// never imported at runtime, so the empty ctx (which omits env/Convex wiring the
// real callers provide) never reaches a live code path.
// biome-ignore lint/suspicious/noExplicitAny: generation-only stub — createAuth is never invoked with this ctx at runtime; Convex provides the real ctx via registerRoutes/createApi.
export const auth = createAuth({} as any);
