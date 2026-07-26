import { Extension } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import Suggestion from "@tiptap/suggestion";
import { SlashMenu, type SlashMenuHandle } from "./slash-menu";
import { filterSlashItems, type SlashItem } from "./slash-registry";

// The `/` slash command, as a thin Tiptap extension over the free MIT
// `@tiptap/suggestion` utility (the same primitive Mention uses — not a Pro
// line). All the editing behavior lives in the injected `items` registry; this
// file is only the plumbing: detect `/`, filter the registry by the typed query,
// render the menu, and hand keyboard control to it. Positioning is owned by the
// plugin's `mount` (Floating UI, bundled in `@tiptap/suggestion`) — no tippy, no
// extra dependency.

export interface SlashCommandOptions {
	items: SlashItem[];
}

// The props the React menu needs; the menu calls `command(item)` and the
// suggestion plugin routes that to `item.command(editor, range)` (see `command`
// below), so the menu never touches the editor directly.
interface SlashMenuRenderProps {
	command: (item: SlashItem) => void;
	items: SlashItem[];
}

export const SlashCommand = Extension.create<SlashCommandOptions>({
	name: "slashCommand",

	addOptions() {
		return { items: [] };
	},

	addProseMirrorPlugins() {
		return [
			Suggestion<SlashItem, SlashItem>({
				editor: this.editor,
				char: "/",
				// "/" mid-word (URLs, and/or, dates) shouldn't trigger the menu.
				allowSpaces: false,
				items: ({ query }) => filterSlashItems(this.options.items, query),
				// The selected item carries its own behavior; run it against the
				// `/query` range so the trigger text is replaced, not left behind.
				command: ({ editor, range, props }) => props.command(editor, range),
				render: () => {
					let component: ReactRenderer<
						SlashMenuHandle,
						SlashMenuRenderProps
					> | null = null;
					let unmount: (() => void) | null = null;

					return {
						onStart: (props) => {
							component = new ReactRenderer(SlashMenu, {
								editor: props.editor,
								props: { items: props.items, command: props.command },
							});
							unmount = props.mount(component.element);
						},
						onUpdate: (props) => {
							component?.updateProps({
								items: props.items,
								command: props.command,
							});
						},
						onKeyDown: (props) => {
							// Let the plugin handle Escape (it dismisses the suggestion).
							if (props.event.key === "Escape") {
								return false;
							}
							return component?.ref?.onKeyDown(props) ?? false;
						},
						onExit: () => {
							unmount?.();
							component?.destroy();
							component = null;
							unmount = null;
						},
					};
				},
			}),
		];
	},
});
