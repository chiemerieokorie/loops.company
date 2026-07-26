import { describe, expect, it } from "vitest";

import {
	buildAppearance,
	type ColorResolver,
	withAlpha,
} from "./stripe-appearance";

// Pure mapping tests — the oklch→literal resolution happens in the browser
// (readStripeAppearance via canvas); here we inject a fake resolver, so no DOM.

const TOKENS: Record<string, string> = {
	"--primary": "#5b5bd6",
	"--foreground": "#1a1a2e",
	"--muted-foreground": "rgb(119, 126, 137)",
	"--background": "#ffffff",
	"--input": "#e8e8ee",
	"--ring": "#6b6be0",
	"--destructive": "#f04545",
};
const fakeResolve: ColorResolver = (cssVar) => TOKENS[cssVar] ?? "#000000";

describe("withAlpha", () => {
	it("converts #rrggbb to rgba", () => {
		expect(withAlpha("#5b5bd6", 0.4)).toBe("rgba(91, 91, 214, 0.4)");
	});

	it("converts rgb()/rgba() to rgba with the new alpha", () => {
		expect(withAlpha("rgb(119, 126, 137)", 0.2)).toBe(
			"rgba(119, 126, 137, 0.2)"
		);
	});

	it("passes unknown formats through unchanged", () => {
		expect(withAlpha("oklch(0.5 0.1 270)", 0.4)).toBe("oklch(0.5 0.1 270)");
	});
});

describe("buildAppearance", () => {
	it("maps tokens to Stripe variables and picks the light theme", () => {
		const appearance = buildAppearance({
			resolve: fakeResolve,
			radius: "10px",
			dark: false,
		});
		expect(appearance.theme).toBe("stripe");
		expect(appearance.variables?.colorPrimary).toBe("#5b5bd6");
		expect(appearance.variables?.colorText).toBe("#1a1a2e");
		expect(appearance.variables?.colorBackground).toBe("#ffffff");
		expect(appearance.variables?.borderRadius).toBe("10px");
		expect(appearance.variables?.fontFamily).toContain("Geist");
	});

	it("uses the night theme in dark mode", () => {
		expect(
			buildAppearance({ resolve: fakeResolve, radius: "10px", dark: true })
				.theme
		).toBe("night");
	});

	it("builds focus/invalid/selected rules from the ring + primary tokens", () => {
		const { rules } = buildAppearance({
			resolve: fakeResolve,
			radius: "10px",
			dark: false,
		});
		expect(rules?.[".Input:focus"]?.boxShadow).toContain("rgba(107, 107, 224");
		expect(rules?.[".Input--invalid"]?.border).toContain("#f04545");
		expect(rules?.[".Tab--selected"]?.color).toBe("#5b5bd6");
	});
});
