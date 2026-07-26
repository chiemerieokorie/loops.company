import {
	IconBold,
	IconCode,
	IconHighlight,
	IconItalic,
	IconStrikeThrough,
	IconUnderline,
} from "@runway/ui/icons";
import type { Editor } from "@tiptap/core";
import type { ComponentType } from "react";

// The selection (bubble) menu registry. Like the slash registry, this is data:
// each entry is a mark toggle described by its active-check and its command, so
// the menu UI stays a dumb mapper. Marks only — the link control has its own UI
// flow (a URL input) and is composed separately in `bubble-menu.tsx`.

export interface BubbleItem {
	command: (editor: Editor) => void;
	icon: ComponentType<{ className?: string }>;
	isActive: (editor: Editor) => boolean;
	/** Accessible label / tooltip. */
	label: string;
	/** Stable id + the mark name passed to `isActive`. */
	name: string;
}

export const BUBBLE_ITEMS: BubbleItem[] = [
	{
		name: "bold",
		label: "Bold",
		icon: IconBold,
		isActive: (editor) => editor.isActive("bold"),
		command: (editor) => editor.chain().focus().toggleBold().run(),
	},
	{
		name: "italic",
		label: "Italic",
		icon: IconItalic,
		isActive: (editor) => editor.isActive("italic"),
		command: (editor) => editor.chain().focus().toggleItalic().run(),
	},
	{
		name: "underline",
		label: "Underline",
		icon: IconUnderline,
		isActive: (editor) => editor.isActive("underline"),
		command: (editor) => editor.chain().focus().toggleUnderline().run(),
	},
	{
		name: "strike",
		label: "Strikethrough",
		icon: IconStrikeThrough,
		isActive: (editor) => editor.isActive("strike"),
		command: (editor) => editor.chain().focus().toggleStrike().run(),
	},
	{
		name: "code",
		label: "Inline code",
		icon: IconCode,
		isActive: (editor) => editor.isActive("code"),
		command: (editor) => editor.chain().focus().toggleCode().run(),
	},
	{
		name: "highlight",
		label: "Highlight",
		icon: IconHighlight,
		isActive: (editor) => editor.isActive("highlight"),
		command: (editor) => editor.chain().focus().toggleHighlight().run(),
	},
];
