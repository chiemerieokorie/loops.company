"use client";

import { Button } from "@runway/ui/components/button";
import type { Editor } from "@tiptap/core";

// The text-color palette, adapted from Novel (steven-tey/novel, Apache-2.0). Kept
// small and curated. `null` clears the colour (back to the prose default).
const TEXT_COLORS: { color: string | null; name: string }[] = [
	{ name: "Default", color: null },
	{ name: "Gray", color: "#78716C" },
	{ name: "Purple", color: "#9333EA" },
	{ name: "Red", color: "#E00000" },
	{ name: "Orange", color: "#C2410C" },
	{ name: "Yellow", color: "#CA8A04" },
	{ name: "Green", color: "#008A00" },
	{ name: "Blue", color: "#2563EB" },
	{ name: "Pink", color: "#BA4081" },
];

// The colour control for the bubble menu. Rendered INLINE inside the bubble bar
// (not a portaled dropdown) for the same reason as the link control: the BubbleMenu
// plugin hides on blur unless focus stays inside its own DOM, so a portal would
// collapse the bar mid-interaction. Uses the `setColor`/`unsetColor` commands from
// the Color extension (composed in build-extensions).
export function ColorForm({
	editor,
	onClose,
}: {
	editor: Editor;
	onClose: () => void;
}) {
	const apply = (color: string | null) => {
		if (color) {
			editor.chain().focus().setColor(color).run();
		} else {
			editor.chain().focus().unsetColor().run();
		}
		onClose();
	};

	return (
		<div className="flex items-center gap-0.5">
			{TEXT_COLORS.map(({ color, name }) => (
				<Button
					aria-label={name}
					className="size-7"
					key={name}
					onClick={() => apply(color)}
					size="icon-sm"
					type="button"
					variant="ghost"
				>
					<span
						className="flex size-4 items-center justify-center rounded-sm border border-border-subtle font-medium text-xs"
						style={color ? { color } : undefined}
					>
						A
					</span>
				</Button>
			))}
		</div>
	);
}
