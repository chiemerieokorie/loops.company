import { convexTest } from "convex-test";

import schema from "./schema";

// ONE place that builds the app's module map for convex-test. `import.meta.glob`
// mirrors what `convex dev` bundles (excluding *.test files), so tests exercise
// the real functions.
//
// `./betterAuth/` is a locally-installed Convex COMPONENT (labs.convex.dev
// better-auth local install), not app code — `convex dev` registers it separately
// and excludes it from the app module map; mirror that by filtering it out so the
// test module map matches production (its functions run against the component
// schema, never the app schema).
//
// The billing entitlement tests below touch only the app's own `workspaceBilling`
// and `memberships` tables, not the Stripe component's synced reads, so no
// component registration is needed here.
const allModules = import.meta.glob("./**/!(*.test).{ts,tsx,js,jsx}");
export const modules = Object.fromEntries(
	Object.entries(allModules).filter(
		([path]) => !path.startsWith("./betterAuth/")
	)
);

export function setupBackend() {
	return convexTest(schema, modules);
}
