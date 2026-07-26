"use client";

import type { Content, Extensions } from "@tiptap/core";
import { EditorProvider } from "@tiptap/react";
import { EditorBubbleMenu } from "./bubble/bubble-menu";
import { EditorDragHandle } from "./drag-handle";
import { editorProps } from "./editor-config";

// The presentational editor shell — the seam you replace to swap editors. It
// composes a Tiptap surface (the `/` slash menu rides in via `extensions`; the
// bubble menu and drag handle are context children) and knows NOTHING about
// Convex, domain blocks, or how the extension array was built. Transport and
// domain blocks are injected from above as `extensions`; rendering, styling, and
// the menus live here. To adopt a different editor you reimplement this one
// component against the same `{ content, extensions }` contract.

interface EditorProps {
	/** Initial document content (synced doc JSON, a string, or null). */
	content: Content;
	/** The fully-assembled extension array (see `buildEditorExtensions`). */
	extensions: Extensions;
}

export function Editor({ content, extensions }: EditorProps) {
	return (
		<EditorProvider
			content={content}
			editorProps={editorProps}
			extensions={extensions}
		>
			<EditorBubbleMenu />
			<EditorDragHandle />
		</EditorProvider>
	);
}
