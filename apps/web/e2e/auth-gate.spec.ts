import { expect, test } from "@playwright/test";

// The route-level auth gate: apps/web/src/app/(authed)/layout.tsx is a server
// component that calls `isAuthenticated()` and `redirect("/login")` before rendering
// anything under the group. `/dashboard` lives there, so an unauthenticated visitor
// must never see the app shell — they land on /login. This is the security boundary
// every authed route inherits, so it's the one E2E worth having from day one.
//
// No real Convex needed: against the dummy deployment URL (playwright.config.ts), the
// token check returns false and the guard redirects — the unauthenticated outcome.

const LOGIN_URL = /\/login$/;

test.describe("the (authed) route gate", () => {
	test("redirects an unauthenticated visitor from /dashboard to /login", async ({
		page,
	}) => {
		await page.goto("/dashboard");
		await expect(page).toHaveURL(LOGIN_URL);
	});

	test("redirects an unauthenticated visitor away from a workspace route", async ({
		page,
	}) => {
		// A nested workspace slug is also under (authed) and inherits the same guard.
		await page.goto("/any-workspace");
		await expect(page).toHaveURL(LOGIN_URL);
	});
});
