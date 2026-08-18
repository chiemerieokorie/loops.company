import { expect, test } from "@playwright/test";

// Smoke tests for the PUBLIC surface — the pages a signed-out visitor can reach.
// These render without a backend, so they're a fast sanity check that the app
// boots and routes resolve. The landing page is the holding company's site: an
// orb-centered hero whose only call to action is /contact. There are no sign-in
// entry points, so there's nothing auth-shaped to assert here.

const GET_IN_TOUCH = /get in touch/i;

test.describe("public pages render", () => {
	test("the landing page loads and links to contact", async ({ page }) => {
		const response = await page.goto("/");
		expect(response?.ok()).toBe(true);
		await expect(
			page.getByRole("link", { name: GET_IN_TOUCH }).first()
		).toBeVisible();
	});

	test("the contact page loads", async ({ page }) => {
		const response = await page.goto("/contact");
		expect(response?.ok()).toBe(true);
	});
});
