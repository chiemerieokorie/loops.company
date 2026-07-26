"use client";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupText,
	InputGroupTextarea,
} from "@runway/ui/components/input-group";
import { IconArrowUp, IconSparkle } from "@runway/ui/icons";

// The assistant's compose box: a textarea with a sparkle marker and a send button.
// Enter submits, Shift+Enter newlines. Controlled — the caller owns the draft and the
// request lifecycle.
export function AiPromptInput({
	value,
	onValueChange,
	onSubmit,
	disabled = false,
	placeholder = "Ask the assistant anything…",
	className,
}: {
	value: string;
	onValueChange?: (value: string) => void;
	onSubmit?: () => void;
	disabled?: boolean;
	placeholder?: string;
	className?: string;
}) {
	const canSend = !disabled && value.trim().length > 0;
	return (
		<InputGroup className={className}>
			<InputGroupTextarea
				onChange={(event) => onValueChange?.(event.target.value)}
				onKeyDown={(event) => {
					if (event.key === "Enter" && !event.shiftKey) {
						event.preventDefault();
						if (canSend) {
							onSubmit?.();
						}
					}
				}}
				placeholder={placeholder}
				value={value}
			/>
			<InputGroupAddon align="block-end">
				<IconSparkle className="size-3.5 text-accent-iris" />
				<InputGroupText className="text-muted-foreground">AI</InputGroupText>
				<InputGroupButton
					aria-label="Send message"
					className="ml-auto"
					disabled={!canSend}
					onClick={() => canSend && onSubmit?.()}
					variant="default"
				>
					<IconArrowUp />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
}
