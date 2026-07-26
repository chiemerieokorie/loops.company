"use client";

import { useEffect } from "react";

import { authClient } from "@/lib/auth-client";

// Rendered by the `[workspace]` gate ONLY on the foreign-but-valid path — the user
// is a confirmed member of a workspace that isn't their session-active one.
// Promotes it to active client-side, post-render (a `setActive` + JWT re-mint, NOT a
// session write during the GET). After this, bare-path routing follows them here and
// the gate takes its zero-query path on the next navigation. Renders nothing.
//
// Inlined (not the shared `setActiveWorkspace`) so we can CANCEL the cookie re-mint
// if the user navigates away mid-flight: on fast A→B→A between foreign workspaces, a
// stale re-mint landing last would write the wrong slug into the cookie. `setActive`
// itself is idempotent (last write wins server-side); the cleanup suppresses only the
// stale mint. Strict-mode's double-invoke is harmless here (both calls idempotent).
export function PromoteActiveWorkspace({
	workspaceId,
}: {
	workspaceId: string;
}) {
	useEffect(() => {
		let cancelled = false;
		void (async () => {
			await authClient.organization.setActive({ organizationId: workspaceId });
			if (cancelled) {
				return;
			}
			await authClient.convex.token({ fetchOptions: { throw: false } });
		})();
		return () => {
			cancelled = true;
		};
	}, [workspaceId]);
	return null;
}
