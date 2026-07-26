import type { CSSProperties } from "react";

/**
 * Design tokens and shared inline styles for the transactional emails.
 *
 * Two palettes adapted from the React Email demo templates:
 * - `neutralTheme`  → "Barebone" look, used for auth emails (verification, reset)
 * - `brandTheme`    → "Matte" look, used for welcome / general transactional
 *
 * Styles are inline (not Tailwind) so they render identically inside a Convex
 * `"use node"` action and the local `react-email` preview server, with no build
 * step or external assets.
 */

export const APP_NAME = "Runway";

export interface EmailTheme {
	/** Call-to-action button background. */
	buttonBg: string;
	/** Call-to-action button text. */
	buttonText: string;
	/** Card background. */
	card: string;
	/** Tertiary/fine-print text. */
	faint: string;
	/** Secondary/body text. */
	muted: string;
	/** Page (outermost) background. */
	page: string;
	/** Hairline borders. */
	stroke: string;
	/** Primary text. */
	text: string;
}

export const neutralTheme: EmailTheme = {
	page: "#F3F4F6",
	card: "#FFFFFF",
	text: "#14171E",
	muted: "#43454B",
	faint: "#7B7D81",
	buttonBg: "#14171E",
	buttonText: "#FFFFFF",
	stroke: "#E4E4E7",
};

export const brandTheme: EmailTheme = {
	page: "#FBFCFB",
	card: "#FFFFFF",
	text: "#103B05",
	muted: "#194A07",
	faint: "#869C7F",
	buttonBg: "#103B05",
	buttonText: "#FBFFF9",
	stroke: "#D8E1D4",
};

export const fontFamily =
	"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export const headingStyle = (theme: EmailTheme): CSSProperties => ({
	margin: "0 0 16px",
	fontSize: "26px",
	fontWeight: 600,
	lineHeight: 1.25,
	letterSpacing: "-0.3px",
	color: theme.text,
});

export const paragraphStyle = (theme: EmailTheme): CSSProperties => ({
	margin: "0 0 16px",
	fontSize: "15px",
	lineHeight: 1.6,
	color: theme.muted,
});

export const faintStyle = (theme: EmailTheme): CSSProperties => ({
	margin: "28px 0 0",
	fontSize: "13px",
	lineHeight: 1.5,
	color: theme.faint,
});

export const buttonStyle = (theme: EmailTheme): CSSProperties => ({
	display: "inline-block",
	backgroundColor: theme.buttonBg,
	color: theme.buttonText,
	borderRadius: "8px",
	padding: "12px 26px",
	fontSize: "15px",
	fontWeight: 500,
	lineHeight: 1.4,
	textDecoration: "none",
});
