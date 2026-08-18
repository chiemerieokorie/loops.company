import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { isAuthenticated } from "@/lib/auth-server";

// Single server-side gate for every route under this group. The convex-better-auth
// documented pattern: `isAuthenticated()` mints/validates the Convex token (via
// `/api/auth/convex/token`), so an expired or forged cookie won't pass — unlike a
// middleware cookie-presence check. React-`cache()`-deduped with the root layout's
// `getToken()`, so no extra round-trip. Route groups don't change URLs, so paths stay
// the same. Convex RLS remains the actual data boundary.
export default async function AuthedLayout({
	children,
}: {
	children: ReactNode;
}) {
	if (!(await isAuthenticated())) {
		redirect("/");
	}

	return children;
}
