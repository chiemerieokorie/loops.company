"use client";

import { EditorContent, useEditor } from "@tiptap/react";

import { buildEditorExtensions } from "./editor/build-extensions";
import { readonlyEditorProps } from "./editor/editor-config";

// A read-only render of a document's ProseMirror content — used by the public share
// viewer, which has no collaboration transport (`sync.extension`) and no editing
// chrome. Reuses the SAME extension set as the live editor so every node/mark type in
// the content deserializes correctly; `editable: false` makes the slash/placeholder
// behaviors inert. `content` is the parsed ProseMirror JSON (null → nothing to show).
//
// The rendered output is styled by shadcn/typeset (`.typeset .typeset-docs`) rather
// than the editor's `prose` rhythm — this is the starter's showcase of typeset on a
// real reading surface. See readonlyEditorProps in editor-config.ts.
export function ReadonlyDocument({ content }: { content: object | null }) {
	const editor = useEditor({
		editable: false,
		content: content ?? undefined,
		extensions: buildEditorExtensions(),
		editorProps: readonlyEditorProps,
		// Tiptap v3 + Next SSR: defer the first render to the client to avoid a
		// hydration mismatch.
		immediatelyRender: false,
	});

	if (!editor) {
		return null;
	}
	return (
		<div className="typeset typeset-docs">
			<EditorContent editor={editor} />
		</div>
	);
}
