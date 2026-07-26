import { Placeholder } from "@tiptap/extensions";

// The empty-state hint. Placeholder emits an `is-empty` class + a
// `data-placeholder` attribute on the current empty node; the ghost text itself is
// drawn by the `.astor-doc-editor .is-empty::before` rule in index.css (styled to
// our muted-foreground token). `includeChildren` lets the hint show inside empty
// headings too, so each block type gets its own prompt.
export const DocumentPlaceholder = Placeholder.configure({
	includeChildren: true,
	placeholder: ({ node }) => {
		if (node.type.name === "heading") {
			return `Heading ${node.attrs.level}`;
		}
		return "Press ‘/’ for commands…";
	},
});
