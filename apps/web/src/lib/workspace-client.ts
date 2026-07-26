import { authClient } from "@/lib/auth-client";

// Switch the active workspace AND re-mint the convex JWT cookie so its slug claim
// matches the new active org immediately. Without the re-mint, the proxy's bare-path
// routing would lag the switch until the token's ~15-min expiry (the cookie only
// re-derives on a fresh mint). The provider auto-refreshes only when `sessionId`
// changes, and setActive updates a field on the SAME session — so we force the mint here.
export async function setActiveWorkspace(workspaceId: string): Promise<void> {
	await authClient.organization.setActive({ organizationId: workspaceId });
	// Hits /api/auth/convex/token → re-mints `convex_jwt` (derive-on-read gives it the
	// new slug). `throw: false` so a transient mint failure doesn't break the switch.
	await authClient.convex.token({ fetchOptions: { throw: false } });
}
