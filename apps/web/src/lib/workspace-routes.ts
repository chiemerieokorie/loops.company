// Single source of truth for the workspace-scoped top-level routes — consumed by
// `proxy.ts` (to resolve bare paths) and the sidebar nav.
//
// Segments that live under `/[workspace]/<segment>`. The overview is the workspace
// ROOT (`/[slug]`), not a segment — see HOME_ALIASES.
export const WORKSPACE_ROUTES = ["documents", "members", "settings"] as const;

const ROUTE_SET = new Set<string>(WORKSPACE_ROUTES);

// Bare entry paths that map to the workspace ROOT (the overview at `/[slug]`), not a
// sub-route. `/dashboard` is the conventional post-login target (login/signup/OAuth/
// invite point here); the proxy sends it to `/[slug]`.
const HOME_ALIASES = new Set<string>(["dashboard"]);

// Decode the active workspace slug from the convex JWT payload — OPTIMISTIC: we do
// NOT verify the signature (it's only a routing hint; authority stays server-side).
// The JWT is RS256-signed so the payload is plain base64url JSON.
export function slugFromJwt(jwt: string | undefined): string | null {
	if (!jwt) {
		return null;
	}
	const part = jwt.split(".")[1];
	if (!part) {
		return null;
	}
	const padded = part
		.replace(/-/g, "+")
		.replace(/_/g, "/")
		.padEnd(part.length + ((4 - (part.length % 4)) % 4), "=");
	try {
		const payload = JSON.parse(atob(padded)) as {
			activeOrganizationSlug?: unknown;
		};
		return typeof payload.activeOrganizationSlug === "string"
			? payload.activeOrganizationSlug
			: null;
	} catch {
		return null;
	}
}

// The proxy's bare-path rule. Returns the pathname to redirect to, or null to pass
// the request through untouched. Query string is the caller's concern.
//
// `/` (root) = the public landing → never rewritten. A first segment equal to the
// active slug, or a foreign/unknown slug, passes through — the `[workspace]` gate
// decides. A home alias (`/dashboard`) → the workspace root `/[slug]`. A known
// workspace route (`/settings`) → `/[slug]/settings` (path preserved).
export function resolveWorkspaceRewrite({
	pathname,
	activeSlug,
}: {
	pathname: string;
	activeSlug: string | null;
}): string | null {
	const seg0 = pathname.split("/")[1] ?? "";
	if (seg0 === "" || activeSlug === null || seg0 === activeSlug) {
		return null;
	}
	if (HOME_ALIASES.has(seg0)) {
		return `/${activeSlug}`;
	}
	if (ROUTE_SET.has(seg0)) {
		return `/${activeSlug}${pathname}`;
	}
	return null;
}
