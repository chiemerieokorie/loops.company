"use client";

import { Button } from "@runway/ui/components/button";
import { cn } from "@runway/ui/lib/utils";
import type { SuggestionKeyDownProps } from "@tiptap/suggestion";
import {
	type Ref,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import type { SlashItem } from "./slash-registry";

// The slash popup, rendered by the suggestion plugin (which owns positioning).
// It's purely a keyboard-driven listbox: the editor keeps DOM focus, so this
// component never takes focus — instead the plugin forwards key events to the
// `onKeyDown` handle below. That keeps typing-to-filter and arrow-navigation on
// one input (the editor) with no focus juggling.

export interface SlashMenuHandle {
	/** Returns true when the key was consumed (Up/Down/Enter/Tab). */
	onKeyDown: (props: SuggestionKeyDownProps) => boolean;
}

interface SlashMenuProps {
	command: (item: SlashItem) => void;
	items: SlashItem[];
	// React 19: ref is a regular prop (no forwardRef). The suggestion plumbing
	// reads it off `ReactRenderer.ref` to drive keyboard navigation.
	ref?: Ref<SlashMenuHandle>;
}

export function SlashMenu({ items, command, ref }: SlashMenuProps) {
	const [selected, setSelected] = useState(0);
	const [prevItems, setPrevItems] = useState(items);
	const listRef = useRef<HTMLDivElement>(null);

	// A changed result set (the user typed another character) should never leave
	// the highlight pointing past the end — reset to the first match during render
	// (the React-recommended "adjust state on prop change" pattern, no effect).
	if (items !== prevItems) {
		setPrevItems(items);
		setSelected(0);
	}

	// Keep the highlighted row visible as it moves past the scroll viewport.
	useEffect(() => {
		const node = listRef.current?.children[selected] as HTMLElement | undefined;
		node?.scrollIntoView({ block: "nearest" });
	}, [selected]);

	// No dependency array on purpose: the handle is rebuilt every render so it always
	// closes over the CURRENT `items`/`selected`. The suggestion plugin reads it via
	// `ReactRenderer.ref` between keystrokes (each keystroke is a separate event with
	// a render in between), so a "stale closure" can't occur — do not add deps here.
	useImperativeHandle(ref, () => ({
		onKeyDown: ({ event }) => {
			if (items.length === 0) {
				return false;
			}
			if (event.key === "ArrowUp") {
				setSelected((i) => (i + items.length - 1) % items.length);
				return true;
			}
			if (event.key === "ArrowDown") {
				setSelected((i) => (i + 1) % items.length);
				return true;
			}
			if (event.key === "Enter" || event.key === "Tab") {
				const item = items[selected];
				if (item) {
					command(item);
				}
				return true;
			}
			return false;
		},
	}));

	if (items.length === 0) {
		return (
			<div className="w-72 rounded-xl border border-border-subtle bg-popover p-3 text-muted-foreground text-p13 shadow-soft">
				No matching blocks
			</div>
		);
	}

	return (
		<div
			className="slash-menu max-h-80 w-72 overflow-y-auto rounded-xl border border-border-subtle bg-popover p-1 shadow-soft"
			data-testid="slash-menu"
			ref={listRef}
		>
			{items.map((item, index) => {
				const Icon = item.icon;
				const isActive = index === selected;
				return (
					<Button
						className={cn(
							"h-auto w-full justify-start gap-2.5 px-2 py-1.5 text-left font-normal transition-colors duration-100",
							isActive ? "bg-muted" : "hover:bg-muted/60"
						)}
						data-active={isActive ? "" : undefined}
						key={item.title}
						onClick={() => command(item)}
						onPointerMove={() => setSelected(index)}
						type="button"
						variant="ghost"
					>
						<span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-background ring-1 ring-border-subtle">
							<Icon className="size-4 text-foreground/80" />
						</span>
						<span className="flex min-w-0 flex-col">
							<span className="truncate text-foreground text-p13">
								{item.title}
							</span>
							<span className="truncate text-muted-foreground text-xs">
								{item.description}
							</span>
						</span>
					</Button>
				);
			})}
		</div>
	);
}
