import { type NextRequest, NextResponse } from "next/server";

import { resolveWorkspaceRewrite, slugFromJwt } from "@/lib/workspace-routes";

const SECURITY_HEADERS: Record<string, string> = {
	"X-Frame-Options": "DENY",
	"X-Content-Type-Options": "nosniff",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

function withSecurityHeaders(response: NextResponse): NextResponse {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		response.headers.set(key, value);
	}
	return response;
}

// Optimistic, zero-BACKEND-round-trip routing: read the active workspace slug from
// the `convex_jwt` cookie (no Convex call) and send a bare route into the active
// workspace: a scoped route (`/settings`) → `/[slug]/settings` (path + query preserved),
// and the `/dashboard` home alias → the workspace root `/[slug]`. We `redirect` (not
// `rewrite`) on purpose: the slug should be VISIBLE in the URL so `/[workspace]/…`
// links are shareable/bookmarkable. The redirect is a cheap client 307 — no backend is
// hit for slug resolution.
//
// Routing only — NOT authorization (the JWT isn't verified here); the `[workspace]`
// gate + `assertMember` RLS are the authority. A missing slug (unauth/orgless) passes
// through so the page-level gate decides.
export function proxy(request: NextRequest): NextResponse {
	const jwt =
		request.cookies.get("better-auth.convex_jwt")?.value ??
		request.cookies.get("__Secure-better-auth.convex_jwt")?.value;
	const target = resolveWorkspaceRewrite({
		pathname: request.nextUrl.pathname,
		activeSlug: slugFromJwt(jwt),
	});
	if (target) {
		const url = request.nextUrl.clone();
		url.pathname = target;
		return withSecurityHeaders(NextResponse.redirect(url));
	}
	return withSecurityHeaders(NextResponse.next());
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|manifest.webmanifest|icons/).*)",
	],
};
