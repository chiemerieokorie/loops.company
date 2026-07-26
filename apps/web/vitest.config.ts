import { defineConfig } from "vitest/config";

// Unit tests for the web app. Plain Node — the covered helpers (editor URL
// normalization / slash filtering, and the pricing/appearance logic) need no DOM.
// `css.postcss.plugins: []` skips the app's Tailwind PostCSS pipeline, which isn't a
// valid plugin shape for Vite's config loader.
export default defineConfig({
	css: { postcss: { plugins: [] } },
	test: {
		environment: "node",
		include: ["src/**/*.test.{ts,tsx}"],
		exclude: ["**/node_modules/**"],
	},
});
