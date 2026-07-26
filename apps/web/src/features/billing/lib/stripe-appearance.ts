import type { Appearance } from "@stripe/stripe-js";

// Map runway's @runway/ui design tokens onto Stripe's Appearance API. Stripe
// Elements render in a cross-origin iframe that CANNOT read our CSS custom
// properties and CANNOT parse oklch() — so the client resolves each token to a
// concrete rgb/hex value (via a <canvas>, which coerces any CSS Color 4 value)
// and passes literals in. `buildAppearance` is pure (inject `resolve`) so it's
// unit-testable without a browser; `readStripeAppearance` is the browser entry
// that wires the canvas.

// Load runway's UI font INTO the iframe — it can't see next/font's hashed family.
export const STRIPE_FONTS: Array<{ cssSrc: string }> = [
	{
		cssSrc:
			"https://fonts.googleapis.com/css2?family=Geist:wght@400;500&display=swap",
	},
];
const FONT_FAMILY = "Geist, ui-sans-serif, system-ui, sans-serif";
// 16px base prevents iOS Safari focus-zoom.
const FONT_SIZE_BASE = "16px";
const FOCUS_RING_ALPHA = 0.4;
const INVALID_RING_ALPHA = 0.2;
const SELECTED_TINT_ALPHA = 0.08;
const FALLBACK_RADIUS = "10px";
const HEX_RE = /^#([\da-f]{6})$/i;
const RGB_RE = /^rgba?\(([^)]+)\)$/i;

export type ColorResolver = (cssVar: string) => string;

// Re-alpha a resolved color (canvas yields "#rrggbb" or "rgba(r, g, b, a)").
export function withAlpha(color: string, alpha: number): string {
	const hex = HEX_RE.exec(color);
	if (hex) {
		const h = hex[1];
		const r = Number.parseInt(h.slice(0, 2), 16);
		const g = Number.parseInt(h.slice(2, 4), 16);
		const b = Number.parseInt(h.slice(4, 6), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}
	const rgb = RGB_RE.exec(color);
	if (rgb) {
		const [r, g, b] = rgb[1].split(",").map((part) => part.trim());
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}
	return color;
}

export function buildAppearance({
	resolve,
	radius,
	dark,
}: {
	resolve: ColorResolver;
	radius: string;
	dark: boolean;
}): Appearance {
	const primary = resolve("--primary");
	const foreground = resolve("--foreground");
	const mutedForeground = resolve("--muted-foreground");
	const background = resolve("--background");
	const inputBorder = resolve("--input");
	const ring = resolve("--ring");
	const danger = resolve("--destructive");
	return {
		theme: dark ? "night" : "stripe",
		variables: {
			fontFamily: FONT_FAMILY,
			fontSizeBase: FONT_SIZE_BASE,
			borderRadius: radius,
			colorPrimary: primary,
			colorBackground: background,
			colorText: foreground,
			colorTextSecondary: mutedForeground,
			colorTextPlaceholder: mutedForeground,
			colorDanger: danger,
			colorIcon: mutedForeground,
		},
		rules: {
			".Input": {
				backgroundColor: background,
				border: `1px solid ${inputBorder}`,
				boxShadow: "none",
				color: foreground,
				padding: "0.5rem 0.625rem",
			},
			".Input::placeholder": { color: mutedForeground },
			".Input:focus": {
				border: `1px solid ${ring}`,
				boxShadow: `0 0 0 3px ${withAlpha(ring, FOCUS_RING_ALPHA)}`,
				outline: "none",
			},
			".Input--invalid": {
				border: `1px solid ${danger}`,
				boxShadow: `0 0 0 3px ${withAlpha(danger, INVALID_RING_ALPHA)}`,
				color: foreground,
			},
			".Label": { color: foreground, fontWeight: "500" },
			".Tab": {
				backgroundColor: background,
				border: `1px solid ${inputBorder}`,
				boxShadow: "none",
				color: foreground,
			},
			".Tab:hover": { color: foreground },
			".Tab--selected": {
				backgroundColor: withAlpha(primary, SELECTED_TINT_ALPHA),
				border: `1px solid ${primary}`,
				color: primary,
			},
			".Tab--selected:focus": {
				boxShadow: `0 0 0 3px ${withAlpha(ring, FOCUS_RING_ALPHA)}`,
			},
		},
	};
}

// Browser entry: resolve the live tokens (normalizing oklch via canvas) and build.
export function readStripeAppearance(dark: boolean): Appearance {
	const styles = getComputedStyle(document.documentElement);
	const canvas = document.createElement("canvas").getContext("2d");
	const resolve: ColorResolver = (cssVar) => {
		const raw = styles.getPropertyValue(cssVar).trim();
		if (!(canvas && raw)) {
			return raw;
		}
		canvas.fillStyle = "#000";
		// Canvas coerces ANY CSS Color 4 value (incl. oklch) to #rrggbb / rgba().
		canvas.fillStyle = raw;
		return canvas.fillStyle;
	};
	const radius = styles.getPropertyValue("--radius").trim() || FALLBACK_RADIUS;
	return buildAppearance({ resolve, radius, dark });
}
