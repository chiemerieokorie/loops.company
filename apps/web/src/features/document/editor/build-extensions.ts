import type { Extensions } from "@tiptap/core";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { DocumentCodeBlock } from "./extensions/code-block";
import { SelectWithinBlock } from "./extensions/custom-keymap";
import { DocumentHighlight } from "./extensions/highlight";
import { DocumentImage } from "./extensions/image";
import { DocumentPlaceholder } from "./extensions/placeholder";
import { DocumentTaskItem, DocumentTaskList } from "./extensions/task-list";
import { SlashCommand } from "./slash/slash-command";
import { BUILTIN_SLASH_ITEMS, type SlashItem } from "./slash/slash-registry";

// The single place that decides what the editor IS. Swapping the prose base,
// adding the placeholder hint, or replacing the slash engine happens here and
// nowhere else — callers only inject their domain pieces.
//
// `extensions` are appended verbatim and ORDER MATTERS: the document feature
// passes `[MetricBlock, sync.extension]`, and the prosemirror-sync extension must
// stay LAST so its collaboration plugin wraps everything above it. Domain slash
// commands (e.g. "Metric block") arrive via `slashItems` and are concatenated
// after the built-ins, keeping this module free of any domain import.

export interface BuildEditorExtensionsOptions {
	/** Extra extensions (domain nodes, the collab transport) — appended in order. */
	extensions?: Extensions;
	/** Feature-injected slash commands, appended after the built-in blocks. */
	slashItems?: SlashItem[];
}

export function buildEditorExtensions({
	slashItems = [],
	extensions = [],
}: BuildEditorExtensionsOptions = {}): Extensions {
	return [
		// Link ships in StarterKit (v3). Don't navigate on click while editing, and
		// autolink/normalize to https so the bubble-menu link control is predictable.
		// `codeBlock` is disabled here in favour of the syntax-highlighted
		// DocumentCodeBlock (lowlight) added below.
		StarterKit.configure({
			codeBlock: false,
			link: {
				openOnClick: false,
				autolink: true,
				defaultProtocol: "https",
			},
		}),
		// Prose polish + extra block/mark types (all free, MIT).
		DocumentPlaceholder,
		SelectWithinBlock,
		DocumentTaskList,
		DocumentTaskItem,
		DocumentHighlight,
		DocumentCodeBlock,
		DocumentImage,
		// Text color: TextStyle carries the inline style mark, Color adds the
		// setColor/unsetColor commands the bubble menu's colour picker calls.
		TextStyle,
		Color,
		SlashCommand.configure({
			items: [...BUILTIN_SLASH_ITEMS, ...slashItems],
		}),
		...extensions,
	];
}
