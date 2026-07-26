import { expect, test } from "@playwright/test";

// Smoke tests for the PUBLIC surface — the pages a signed-out visitor can reach. These
// render without a backend, so they're a fast sanity check that the app boots, routes
// resolve, and the sign-in entry points are wired. Assertions target STRUCTURE (form
// controls, route hrefs), not marketing copy — so they survive the string swaps a new
// project will make to the landing page.

const GET_STARTED = /get started/i;

test.describe("public pages render", () => {
	test("the landing page loads and links to sign-up", async ({ page }) => {
		const response = await page.goto("/");
		expect(response?.ok()).toBe(true);
		// "Get started" appears in several sections (header, hero, CTA), all linking to
		// /signup — assert the first is visible rather than a single unique match.
		await expect(
			page.getByRole("link", { name: GET_STARTED }).first()
		).toBeVisible();
	});

	test("the login page shows the sign-in form", async ({ page }) => {
		await page.goto("/login");
		await expect(page.getByLabel("Email")).toBeVisible();
		await expect(page.getByLabel("Password")).toBeVisible();
	});
});
