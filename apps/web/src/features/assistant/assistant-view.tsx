"use client";

import {
	optimisticallySendMessage,
	toUIMessages,
	useThreadMessages,
} from "@convex-dev/agent/react";
import { api } from "@runway/backend/convex/_generated/api";
import { Button } from "@runway/ui/components/button";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@runway/ui/components/empty";
import { Spinner } from "@runway/ui/components/spinner";
import { IconPlusMedium, IconSparklesSoft } from "@runway/ui/icons";
import { cn } from "@runway/ui/lib/utils";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { AiPromptInput } from "@/features/assistant/ai-prompt-input";
import { AssistantMarkdown } from "@/features/assistant/assistant-markdown";

const SUGGESTIONS = [
	"Summarize the key points of a document",
	"Draft a short announcement for my team",
	"Explain a technical concept in simple terms",
	"Brainstorm names for a new project",
];

function Welcome({ onPick }: { onPick: (prompt: string) => void }) {
	return (
		<div className="mx-auto flex h-full max-w-md flex-col items-center justify-center gap-5 text-center">
			<span
				aria-hidden="true"
				className="flex size-11 items-center justify-center rounded-2xl bg-accent-iris/10 text-accent-iris"
			>
				<IconSparklesSoft className="size-5" />
			</span>
			<div className="flex flex-col gap-1.5">
				<h2 className="font-medium text-foreground text-lg">How can I help?</h2>
				<p className="text-pretty text-muted-foreground text-sm">
					Ask a question, draft something, or think through an idea.
				</p>
			</div>
			<div className="grid w-full gap-2">
				{SUGGESTIONS.map((suggestion) => (
					<Button
						className="h-auto justify-start whitespace-normal rounded-xl bg-muted px-3 py-2.5 text-left font-normal text-muted-foreground text-p13 hover:bg-muted/60 hover:text-foreground"
						key={suggestion}
						onClick={() => onPick(suggestion)}
						variant="ghost"
					>
						{suggestion}
					</Button>
				))}
			</div>
		</div>
	);
}

function MessageBubble({ role, text }: { role: string; text: string }) {
	const isUser = role === "user";
	return (
		<div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
			<div
				className={cn(
					"max-w-[85%] rounded-2xl px-3.5 py-2.5",
					// User turns are plain text (not markdown). Assistant replies render as
					// markdown styled by shadcn/typeset — `typeset-chat` owns the size and
					// rhythm, so no `text-sm` here (it would override typeset's leading).
					isUser
						? "whitespace-pre-wrap bg-primary text-primary-foreground text-sm"
						: "typeset typeset-chat bg-muted text-foreground"
				)}
			>
				{isUser ? text : <AssistantMarkdown text={text} />}
			</div>
		</div>
	);
}

function ThreadMessages({ threadId }: { threadId: string }) {
	const messages = useThreadMessages(
		api.assistant.listMessages,
		{ threadId },
		{ initialNumItems: 30, stream: true }
	);
	const uiMessages = toUIMessages(messages.results ?? []);
	const bottomRef = useRef<HTMLDivElement>(null);
	const lastText = uiMessages.at(-1)?.text ?? "";

	// Keep the latest turn in view as it streams in — the deps are the scroll
	// TRIGGERS (message count + the growing last message), not values read in the body.
	// biome-ignore lint/correctness/useExhaustiveDependencies: deps are scroll triggers, not body reads
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
	}, [lastText, uiMessages.length]);

	if (messages.isLoading) {
		return (
			<div className="flex h-full items-center justify-center">
				<Spinner className="text-muted-foreground" />
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4 py-2">
			{uiMessages.map((message) => (
				<MessageBubble
					key={message.key}
					role={message.role}
					text={message.text}
				/>
			))}
			<div ref={bottomRef} />
		</div>
	);
}

// The workspace AI assistant: one conversation at a time, resumed from the most
// recent thread on open. "New chat" starts a fresh one; a thread is minted lazily on
// the first send, so visiting the assistant without sending never creates one. Gated
// on `isConfigured` so an unconfigured deployment shows a setup hint instead of a chat
// box that errors.
export function AssistantView({ workspaceId }: { workspaceId: string }) {
	// Skip until the Convex client is authed, so these never fire during the
	// unauthenticated boot window on a fresh load / mid-refresh.
	const { isAuthenticated } = useConvexAuth();
	const configured = useQuery(
		api.assistant.isConfigured,
		isAuthenticated ? {} : "skip"
	);
	const threads = useQuery(
		api.assistant.listThreads,
		isAuthenticated ? { workspaceId } : "skip"
	);
	const createThread = useMutation(api.assistant.createThread);
	const sendMessage = useMutation(
		api.assistant.sendMessage
	).withOptimisticUpdate(optimisticallySendMessage(api.assistant.listMessages));

	const [threadId, setThreadId] = useState<string | null>(null);
	const [draft, setDraft] = useState("");
	const [sending, setSending] = useState(false);
	// A staged first message for a just-created thread — see handleSend + the effect
	// below for why the send is deferred.
	const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);
	// Resume the latest conversation exactly once, on first load — after that the user
	// drives it ("New chat" → null → a fresh thread on next send).
	const resumed = useRef(false);
	useEffect(() => {
		if (!resumed.current && threads && threads.length > 0) {
			resumed.current = true;
			setThreadId(threads[0]?.threadId ?? null);
		}
	}, [threads]);

	const reportSendError = useCallback((error: unknown) => {
		toast.error(
			error instanceof Error ? error.message : "Could not send message"
		);
	}, []);

	const handleSend = useCallback(
		async (prompt: string) => {
			const trimmed = prompt.trim();
			if (!trimmed || sending) {
				return;
			}
			setSending(true);
			setDraft("");
			// Existing thread: its `listMessages` query is already subscribed, so the
			// optimistic echo lands instantly. Send straight through.
			if (threadId) {
				try {
					await sendMessage({ threadId, prompt: trimmed });
				} catch (error) {
					reportSendError(error);
				} finally {
					setSending(false);
				}
				return;
			}
			// New thread: mint it and STAGE the prompt — don't send yet. The optimistic
			// update writes into the thread's `listMessages` query, which only exists once
			// `ThreadMessages` has mounted and subscribed. The effect below fires the send
			// after that render, so the first message of a new chat echoes instantly too.
			try {
				const { threadId: id } = await createThread({ workspaceId });
				setThreadId(id);
				setPendingPrompt(trimmed);
			} catch (error) {
				reportSendError(error);
				setSending(false);
			}
		},
		[threadId, workspaceId, sending, createThread, sendMessage, reportSendError]
	);

	// Fire a staged first message once its freshly-created thread is mounted and its
	// `listMessages` query is subscribed (see handleSend), so the optimistic echo has a
	// query to write into.
	useEffect(() => {
		if (!(threadId && pendingPrompt)) {
			return;
		}
		const prompt = pendingPrompt;
		setPendingPrompt(null);
		sendMessage({ threadId, prompt })
			.catch(reportSendError)
			.finally(() => setSending(false));
	}, [threadId, pendingPrompt, sendMessage, reportSendError]);

	if (configured === false) {
		return (
			<Empty>
				<EmptyHeader>
					<EmptyTitle>Assistant isn&apos;t configured</EmptyTitle>
					<EmptyDescription>
						Set <code className="text-foreground">OPENAI_API_KEY</code> on the
						Convex deployment (
						<code className="text-foreground">
							convex env set OPENAI_API_KEY=…
						</code>
						) to enable the AI assistant.
					</EmptyDescription>
				</EmptyHeader>
			</Empty>
		);
	}

	const activeTitle =
		threads?.find((thread) => thread.threadId === threadId)?.title ??
		"New conversation";

	return (
		<div className="flex h-full min-h-0 flex-col">
			<div className="flex shrink-0 items-center justify-between pb-2">
				<span className="truncate font-medium text-p13">{activeTitle}</span>
				<Button
					aria-label="New chat"
					onClick={() => setThreadId(null)}
					size="icon-sm"
					variant="ghost"
				>
					<IconPlusMedium className="size-3.5" />
				</Button>
			</div>
			<div className="min-h-0 flex-1 overflow-y-auto">
				{threadId ? (
					<ThreadMessages key={threadId} threadId={threadId} />
				) : (
					<Welcome onPick={handleSend} />
				)}
			</div>
			<div className="shrink-0 pt-3">
				<AiPromptInput
					disabled={sending}
					onSubmit={() => handleSend(draft)}
					onValueChange={setDraft}
					value={draft}
				/>
				<p className="mt-1.5 text-center text-muted-foreground text-xs">
					The assistant can make mistakes. Verify important information.
				</p>
			</div>
		</div>
	);
}
