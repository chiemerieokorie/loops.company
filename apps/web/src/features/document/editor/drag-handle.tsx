"use client";

import { Button } from "@runway/ui/components/button";
import { DragHandle } from "@tiptap/extension-drag-handle-react";
import { useCurrentEditor } from "@tiptap/react";
import { GripVertical } from "lucide-react";

// Block drag-handle: a grip that appears beside the hovered block and lets the user
// drag to reorder. It is a rendered React component (a portal positioned by the
// drag-handle plugin, which the component self-registers on the editor), NOT an
// editor extension — so it lives in the shell as a child of EditorProvider and
// reads the editor from context. Astor deferred this; it's new to runway.
export function EditorDragHandle() {
	const { editor } = useCurrentEditor();
	if (!editor) {
		return null;
	}
	return (
		<DragHandle editor={editor}>
			<Button
				aria-label="Drag to reorder block"
				className="h-6 w-5 cursor-grab text-muted-foreground/60 active:cursor-grabbing"
				size="icon"
				type="button"
				variant="ghost"
			>
				<GripVertical className="size-4" />
			</Button>
		</DragHandle>
	);
}
