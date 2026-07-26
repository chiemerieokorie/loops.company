import type { EditorProviderProps } from "@tiptap/react";

// Shared editor chrome config, kept out of the component so the visual shell and
// the wiring evolve independently. `editorProps.attributes` styles the
// contenteditable surface itself (the ProseMirror root) — the prose rhythm lives
// here, on the editable, so both the live editor and any read-only render match.

export const editorProps: NonNullable<EditorProviderProps["editorProps"]> = {
	attributes: {
		// `runway-doc-editor` is the scope hook for the editor's own CSS in the UI
		// package globals (the Placeholder ghost text + task-list checkbox tint).
		// `prose-sm` sets the typographic rhythm; the focus ring is suppressed because
		// selection + the bubble menu already signal focus, and a ring around a
		// full-width document reads as an error state.
		class:
			"runway-doc-editor prose-sm max-w-none min-h-[60vh] focus:outline-none",
		"data-testid": "document-editor",
	},
};

// Read-only render config (the public share viewer). Drops `prose-sm` and the
// `runway-doc-editor` scope: the rhythm comes from shadcn/typeset instead — the
// ReadonlyDocument wraps this surface in `.typeset .typeset-docs`, and typeset's
// checkbox tint / heading weight are handled by the `.typeset` rules in the UI
// globals. Keeping the two configs separate lets the read-only surface adopt
// typeset without disturbing the live editor.
export const readonlyEditorProps: NonNullable<
	EditorProviderProps["editorProps"]
> = {
	attributes: {
		class: "max-w-none focus:outline-none",
		"data-testid": "document-readonly",
	},
};
