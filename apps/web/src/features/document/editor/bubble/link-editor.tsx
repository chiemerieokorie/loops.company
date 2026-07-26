"use client";

import { Button } from "@runway/ui/components/button";
import { Input } from "@runway/ui/components/input";
import { IconBrokenChainLink1 } from "@runway/ui/icons";
import type { Editor } from "@tiptap/core";
import {
	type FormEvent,
	type KeyboardEvent,
	useEffect,
	useRef,
	useState,
} from "react";
import { applyLink, removeLink } from "./link-url";

// The link control for the bubble menu. It is rendered INLINE inside the bubble
// bar (not a portaled popover) on purpose: the BubbleMenu plugin hides itself when
// the editor blurs unless focus lands inside the menu's own DOM. A portal escapes
// that subtree and collapses the bar mid-edit; an inline form keeps focus within
// it, so the selection survives and the bar stays open while typing a URL. The
// URL normalization + editor ops live in ./link-url (pure, unit-tested).

export function LinkForm({
	editor,
	onClose,
}: {
	editor: Editor;
	onClose: () => void;
}) {
	const [value, setValue] = useState(
		() => (editor.getAttributes("link").href as string | undefined) ?? ""
	);
	const inputRef = useRef<HTMLInputElement>(null);

	// Focus + select on open so the user can type or paste immediately. Focus moves
	// into the (inline) menu, so the bar stays visible.
	useEffect(() => {
		inputRef.current?.focus();
		inputRef.current?.select();
	}, []);

	const submit = (event: FormEvent) => {
		event.preventDefault();
		if (applyLink(editor, value)) {
			onClose();
		}
	};

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			event.preventDefault();
			onClose();
		}
	};

	const hasLink = editor.isActive("link");

	return (
		<form className="flex items-center gap-1" onSubmit={submit}>
			<Input
				aria-label="Link URL"
				className="h-7 w-56 text-sm"
				onChange={(event) => setValue(event.target.value)}
				onKeyDown={onKeyDown}
				placeholder="Paste or type a link…"
				ref={inputRef}
				value={value}
			/>
			<Button size="sm" type="submit" variant="ghost">
				Apply
			</Button>
			{hasLink ? (
				<Button
					aria-label="Remove link"
					onClick={() => {
						removeLink(editor);
						onClose();
					}}
					size="icon-sm"
					type="button"
					variant="ghost"
				>
					<IconBrokenChainLink1 className="size-4" />
				</Button>
			) : null}
		</form>
	);
}
