import { api } from "@runway/backend/convex/_generated/api";
import { cache } from "react";

import { fetchAuthQuery } from "@/lib/auth-server";

// Server-only workspace/session reads for the `/[workspace]` gate. Both are
// wrapped in `React.cache()` so multiple calls within ONE request (e.g. the gate
// + a page that also needs the slug) collapse to a single Convex round-trip.

// The caller's active org as denormalized on their session — the "free" read the
// gate's common path relies on. Free relative to an app-table query: it comes
// straight off the Better Auth session, no `memberships` scan. `fetchAuthQuery`
// forwards the caller's Convex token so the read is authenticated.
export const getActiveOrg = cache(() =>
	fetchAuthQuery(api.session.getActiveOrg, {})
);

// The mismatch path: resolve a URL slug to a workspace and assert the caller is a
// member. Throws "forbidden" (which the gate catches → redirect) when the slug is
// unknown or the caller isn't a member — the IDOR guard. Wrapped so a layout and a
// page resolving the same slug share the one check.
export const assertWorkspaceAccess = cache((slug: string) =>
	fetchAuthQuery(api.session.assertWorkspaceAccess, { slug })
);
