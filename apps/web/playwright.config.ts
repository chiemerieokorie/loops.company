import { defineConfig, devices } from "@playwright/test";

// End-to-end tests that drive the REAL Next.js app in a browser — the tier vitest
// (jsdom/unit) can't cover: server-component auth gating, redirects, and real
// navigation. Deliberately NOT part of the `turbo run test` CI gate (it needs a
// running server + a browser, so it's slower); run it on demand:
//
//   pnpm --filter web exec playwright install chromium   # one-time, installs the browser
//   pnpm --filter web test:e2e
//
// The suite needs NO real Convex deployment. Against the dummy `.convex.*` URLs below,
// `isAuthenticated()` (apps/web/src/app/(authed)/layout.tsx) mints no token and returns
// false — exactly the unauthenticated path the auth-gate spec asserts. Public routes
// (`/`, `/login`) render without a backend. Add specs that need a signed-in session
// only once there's a seeded test deployment to point at.
const PORT = process.env.WEB_PORT ?? "3001";
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
	testDir: "./e2e",
	fullyParallel: true,
	// Fail the run if a `test.only` was committed by mistake.
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	reporter: "line",
	use: {
		baseURL: BASE_URL,
		// Keep a trace for the first retry so a flake is debuggable without re-running.
		trace: "on-first-retry",
	},
	projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
	webServer: {
		command: "pnpm dev",
		// A public route — ready as soon as the dev server compiles, no auth/backend.
		url: `${BASE_URL}/login`,
		reuseExistingServer: !process.env.CI,
		// `next dev` cold-compiles on first request; give it room.
		timeout: 120_000,
		env: {
			WEB_PORT: PORT,
			// Dummy deployment URLs so @runway/env/web boot-validation passes. No real
			// Convex is contacted by the public routes or the unauthenticated gate.
			NEXT_PUBLIC_CONVEX_URL: "https://example.convex.cloud",
			NEXT_PUBLIC_CONVEX_SITE_URL: "https://example.convex.site",
		},
	},
});
