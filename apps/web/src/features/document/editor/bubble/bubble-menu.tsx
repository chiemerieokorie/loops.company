"use client";

import { Separator } from "@runway/ui/components/separator";
import { Toggle } from "@runway/ui/components/toggle";
import { IconChainLink1, IconTextColor } from "@runway/ui/icons";
import type { Editor } from "@tiptap/core";
import { NodeSelection } from "@tiptap/pm/state";
import { useCurrentEditor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import { type ReactNode, useEffect, useState } from "react";
import { BUBBLE_ITEMS } from "./bubble-registry";
import { ColorForm } from "./color-editor";
import { LinkForm } from "./link-editor";

// The selection (bubble) menu: appears over a text selection for inline
// formatting. Built on the FREE, built-in `@tiptap/react/menus` BubbleMenu (no
// Pro line), it maps the mark registry to pressable toggles (the shadcn `Toggle`
// primitive — aria-pressed + active styling come for free) plus an inline link
// control. The editor comes from EditorProvider context, so this drops in as a
// child of <Editor/> with no prop threading.

// Show the format bar only over an actual text selection where marks apply.
// Exported + pure so the visibility rule is unit-testable without mounting the
// editor. A NodeSelection of an ATOMIC block (e.g. the metric block) reports
// `from !== to` too but has no text for marks to apply to — exclude it generally
// (by `isAtom`) so any future atomic block is covered without naming it here.
export function bubbleShouldShow({
	editor,
	from,
	to,
}: {
	editor: Editor;
	from: number;
	to: number;
}): boolean {
	if (from === to || editor.isActive("codeBlock")) {
		return false;
	}
	const { selection } = editor.state;
	return !(selection instanceof NodeSelection && selection.node.isAtom);
}

export function EditorBubbleMenu() {
	const { editor } = useCurrentEditor();
	// When a sub-control is open the bar swaps to it (rendered inline so focus stays
	// inside the menu and the bar doesn't blur away — see link-editor / color-editor).
	const [linkOpen, setLinkOpen] = useState(false);
	const [colorOpen, setColorOpen] = useState(false);

	// The bar is shown/hidden by the plugin while this component stays mounted, so
	// the link form would otherwise persist onto the next selection. Close it when
	// the selection COLLAPSES (the bar is going away) — gating on `empty` instead of
	// every `selectionUpdate` so a remote collaborator's edit, which just remaps a
	// still-live selection, doesn't snap the form shut mid-edit. Apply/escape closes
	// are handled in LinkForm.
	useEffect(() => {
		if (!editor) {
			return;
		}
		const closeIfCollapsed = () => {
			if (editor.state.selection.empty) {
				setLinkOpen(false);
				setColorOpen(false);
			}
		};
		editor.on("selectionUpdate", closeIfCollapsed);
		return () => {
			editor.off("selectionUpdate", closeIfCollapsed);
		};
	}, [editor]);

	if (!editor) {
		return null;
	}

	let body: ReactNode;
	if (linkOpen) {
		body = <LinkForm editor={editor} onClose={() => setLinkOpen(false)} />;
	} else if (colorOpen) {
		body = <ColorForm editor={editor} onClose={() => setColorOpen(false)} />;
	} else {
		body = (
			<>
				{BUBBLE_ITEMS.map((item) => {
					const Icon = item.icon;
					return (
						<Toggle
							aria-label={item.label}
							className="size-7 transition-transform active:scale-[0.97]"
							key={item.name}
							onPressedChange={() => item.command(editor)}
							pressed={item.isActive(editor)}
							size="sm"
						>
							<Icon className="size-4" />
						</Toggle>
					);
				})}
				<Separator className="mx-0.5 h-5" orientation="vertical" />
				<Toggle
					aria-label="Link"
					className="size-7 transition-transform active:scale-[0.97]"
					onPressedChange={() => setLinkOpen(true)}
					pressed={editor.isActive("link")}
					size="sm"
				>
					<IconChainLink1 className="size-4" />
				</Toggle>
				<Toggle
					aria-label="Text color"
					className="size-7 transition-transform active:scale-[0.97]"
					onPressedChange={() => setColorOpen(true)}
					pressed={editor.isActive("textStyle")}
					size="sm"
				>
					<IconTextColor className="size-4" />
				</Toggle>
			</>
		);
	}

	return (
		<BubbleMenu
			className="flex items-center gap-0.5 rounded-xl border border-border-subtle bg-popover p-1 shadow-soft"
			editor={editor}
			shouldShow={({ editor: instance, from, to }) =>
				bubbleShouldShow({ editor: instance, from, to })
			}
		>
			{body}
		</BubbleMenu>
	);
}
