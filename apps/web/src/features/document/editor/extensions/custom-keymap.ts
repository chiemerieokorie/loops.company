import { Extension } from "@tiptap/core";
import type { EditorState } from "@tiptap/pm/state";

// "Select within block first" — the Notion/Novel Mod-A behavior. A first Mod-A
// selects only the current block's text; a second Mod-A (when the block is already
// fully selected) falls through to ProseMirror's default whole-document select.
// Without this, Mod-A jumps straight to the entire document, which is jarring in a
// long underwriting doc. Pattern adapted from Novel (Apache-2.0); reimplemented.

// The current block's text range. Pure + exported so the keymap logic is testable
// without dispatching a real keyboard event.
export function blockTextRange(state: EditorState): {
	from: number;
	to: number;
} {
	return {
		from: state.selection.$from.start(),
		to: state.selection.$to.end(),
	};
}

// True when the selection already spans its whole block — the signal to let the
// default "select all" take over on the next Mod-A.
export function selectionSpansBlock(state: EditorState): boolean {
	const { from, to } = blockTextRange(state);
	return state.selection.from <= from && state.selection.to >= to;
}

export const SelectWithinBlock = Extension.create({
	name: "selectWithinBlock",

	addKeyboardShortcuts() {
		return {
			"Mod-a": ({ editor }) => {
				if (selectionSpansBlock(editor.state)) {
					// Already block-wide → don't consume; default Mod-A selects the doc.
					return false;
				}
				const { from, to } = blockTextRange(editor.state);
				return editor.commands.setTextSelection({ from, to });
			},
		};
	},
});
