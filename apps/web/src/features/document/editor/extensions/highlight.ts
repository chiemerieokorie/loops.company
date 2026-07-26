import { Highlight } from "@tiptap/extension-highlight";

// A single-color highlight mark (toggled from the bubble menu) for calling out key
// figures — loan amounts, cap rates, dates — in an underwriting doc. Single-color
// (not multicolor) keeps it a plain toggle; the tint is our accent-iris so it reads
// as a deliberate mark, not a browser default. `box-decoration-clone` keeps the
// rounded background intact when a highlight wraps across lines.
export const DocumentHighlight = Highlight.configure({
	multicolor: false,
	HTMLAttributes: {
		class: "rounded-sm bg-accent-iris/20 box-decoration-clone px-0.5",
	},
});
