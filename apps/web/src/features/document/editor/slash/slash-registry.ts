import {
	IconChecklist,
	IconCode,
	IconH1,
	IconH2,
	IconH3,
	IconListBullets,
	IconMinusLarge,
	IconNumberedList,
	IconOpenQuote1,
	IconParagraph,
} from "@runway/ui/icons";
import type { Editor, Range } from "@tiptap/core";
import type { ComponentType } from "react";

// The slash-menu command registry. This is a DATA layer on purpose: a slash item
// is a plain descriptor (title, how to find it, what it does), so adding,
// removing, or reordering commands is a one-array edit — never an editor rewrite.
// Domain commands (e.g. the metric block) are injected from the feature that owns
// them via `buildEditorExtensions({ slashItems })`, so this module stays
// domain-agnostic and the dependency direction points one way (feature → editor).

export type SlashIcon = ComponentType<{ className?: string }>;

export interface SlashItem {
	/** Extra search terms so "h1"/"heading"/"title" all find the same command. */
	aliases?: string[];
	/**
	 * Apply the command. `range` is the `/query` span to replace — every command
	 * deletes it first so the trigger text never lingers in the document.
	 */
	command: (editor: Editor, range: Range) => void;
	/** One-line description shown under the title. */
	description: string;
	/** The leading glyph. */
	icon: SlashIcon;
	/** Display title and the primary match term. */
	title: string;
}

// The free, StarterKit-backed block commands. Every action here is a built-in
// chain command — no Pro extension, no new node — so this list is portable across
// any Tiptap editor that loads StarterKit.
export const BUILTIN_SLASH_ITEMS: SlashItem[] = [
	{
		title: "Text",
		description: "Plain paragraph",
		icon: IconParagraph,
		aliases: ["paragraph", "body", "p"],
		command: (editor, range) =>
			editor.chain().focus().deleteRange(range).setParagraph().run(),
	},
	{
		title: "Heading 1",
		description: "Large section heading",
		icon: IconH1,
		aliases: ["h1", "title"],
		command: (editor, range) =>
			editor
				.chain()
				.focus()
				.deleteRange(range)
				.setNode("heading", { level: 1 })
				.run(),
	},
	{
		title: "Heading 2",
		description: "Medium section heading",
		icon: IconH2,
		aliases: ["h2", "subtitle"],
		command: (editor, range) =>
			editor
				.chain()
				.focus()
				.deleteRange(range)
				.setNode("heading", { level: 2 })
				.run(),
	},
	{
		title: "Heading 3",
		description: "Small section heading",
		icon: IconH3,
		aliases: ["h3"],
		command: (editor, range) =>
			editor
				.chain()
				.focus()
				.deleteRange(range)
				.setNode("heading", { level: 3 })
				.run(),
	},
	{
		title: "Bullet list",
		description: "Unordered list",
		icon: IconListBullets,
		aliases: ["unordered", "ul", "bullets"],
		command: (editor, range) =>
			editor.chain().focus().deleteRange(range).toggleBulletList().run(),
	},
	{
		title: "Numbered list",
		description: "Ordered list",
		icon: IconNumberedList,
		aliases: ["ordered", "ol", "numbers"],
		command: (editor, range) =>
			editor.chain().focus().deleteRange(range).toggleOrderedList().run(),
	},
	{
		title: "To-do list",
		description: "Checklist with checkboxes",
		icon: IconChecklist,
		aliases: ["todo", "task", "checkbox", "checklist"],
		command: (editor, range) =>
			editor.chain().focus().deleteRange(range).toggleTaskList().run(),
	},
	{
		title: "Quote",
		description: "Callout / blockquote",
		icon: IconOpenQuote1,
		aliases: ["blockquote", "callout"],
		command: (editor, range) =>
			editor.chain().focus().deleteRange(range).toggleBlockquote().run(),
	},
	{
		title: "Code",
		description: "Code block",
		icon: IconCode,
		aliases: ["codeblock", "pre", "snippet"],
		command: (editor, range) =>
			editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
	},
	{
		title: "Divider",
		description: "Horizontal rule",
		icon: IconMinusLarge,
		aliases: ["hr", "rule", "separator", "line"],
		command: (editor, range) =>
			editor.chain().focus().deleteRange(range).setHorizontalRule().run(),
	},
];

// Match an item against the `/query` the user has typed: title first, then
// aliases. Case-insensitive substring — enough for a small, curated list and
// predictable (no fuzzy surprises). An empty query returns everything.
export function filterSlashItems(
	items: SlashItem[],
	query: string
): SlashItem[] {
	const q = query.trim().toLowerCase();
	if (!q) {
		return items;
	}
	return items.filter((item) => {
		const haystack = [item.title, ...(item.aliases ?? [])]
			.join(" ")
			.toLowerCase();
		return haystack.includes(q);
	});
}
