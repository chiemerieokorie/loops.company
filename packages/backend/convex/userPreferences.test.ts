import { describe, expect, it } from "vitest";

import { api } from "./_generated/api";
import { setupBackend } from "./test.setup";

// Per-user onboarding state. These functions are USER-scoped (no workspace/membership
// needed) — a signed-in caller only ever reads/writes their own `userPreferences` row,
// enforced by the RLS net (lib/functions). Verifies the read/write round-trip,
// idempotency, per-user isolation, and the auth gate.

const NOT_AUTHENTICATED = /not authenticated/;

describe("userPreferences — onboarding state", () => {
	it("reports not-onboarded until completeOnboarding is called", async () => {
		const t = setupBackend();
		const as = t.withIdentity({ subject: "alice" });

		expect(await as.query(api.userPreferences.getOnboardingState, {})).toEqual({
			completed: false,
		});

		await as.mutation(api.userPreferences.completeOnboarding, {});

		expect(await as.query(api.userPreferences.getOnboardingState, {})).toEqual({
			completed: true,
		});
	});

	it("is idempotent — repeated completion keeps a single row", async () => {
		const t = setupBackend();
		const as = t.withIdentity({ subject: "alice" });

		await as.mutation(api.userPreferences.completeOnboarding, {});
		await as.mutation(api.userPreferences.completeOnboarding, {});

		expect(await as.query(api.userPreferences.getOnboardingState, {})).toEqual({
			completed: true,
		});

		const rows = await t.run((ctx) =>
			ctx.db
				.query("userPreferences")
				.withIndex("by_user", (q) => q.eq("userId", "alice"))
				.collect()
		);
		expect(rows).toHaveLength(1);
	});

	it("is per-user — one caller's completion doesn't onboard another", async () => {
		const t = setupBackend();
		await t
			.withIdentity({ subject: "alice" })
			.mutation(api.userPreferences.completeOnboarding, {});

		expect(
			await t
				.withIdentity({ subject: "mallory" })
				.query(api.userPreferences.getOnboardingState, {})
		).toEqual({ completed: false });
	});

	it("tolerates the unauthenticated boot window on read, but the mutation still rejects", async () => {
		const t = setupBackend();
		// `getOnboardingState` is a `maybeAuthedQuery`: it must NOT throw during the
		// unauthenticated boot window (a reactive shell subscription firing before the
		// Convex token lands). It reports "nothing to show" (checklist hidden) and
		// re-runs with the real value once auth lands.
		expect(await t.query(api.userPreferences.getOnboardingState, {})).toEqual({
			completed: true,
		});
		// The mutation must still reject an anonymous caller.
		await expect(
			t.mutation(api.userPreferences.completeOnboarding, {})
		).rejects.toThrow(NOT_AUTHENTICATED);
	});
});
