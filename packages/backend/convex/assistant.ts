import { openai } from "@ai-sdk/openai";
import { Agent, vStreamArgs } from "@convex-dev/agent";
import { paginationOptsValidator } from "convex/server";
import { ConvexError, v } from "convex/values";

import { components, internal } from "./_generated/api";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import { internalAction } from "./_generated/server";
import { assertMember, currentUserId } from "./lib/access";
import { authedMutation, authedQuery } from "./lib/functions";

// The in-app AI assistant. The `@convex-dev/agent` component owns the conversation
// (messages, hybrid context, websocket delta streaming); this module is the thin,
// tenancy-scoped surface the web app talks to. Every thread maps to a workspace +
// user via the `assistantThreads` projection (schema.ts), so the same `assertMember`
// net that guards every other record guards assistant history too — and because a
// conversation is PRIVATE (not workspace-shared), `requireOwnThread` also pins each
// thread to the user who started it.
//
// This is a generic starter assistant: swap `INSTRUCTIONS` and the model for your
// product, or give the Agent `tools` to let it read/act on your data.
const INSTRUCTIONS = `You are a helpful AI assistant embedded in a team workspace app.
You help members get work done: answer questions, draft and refine text, summarize,
brainstorm, and explain concepts clearly. Be concise and direct. Use Markdown for
structure — short paragraphs, lists, and fenced code blocks for code. If a request
needs information you don't have, say so rather than inventing an answer. You cannot
see the workspace's data or take actions on the user's behalf; you respond in text.`;

// One shared agent instance. `@ai-sdk/openai` reads OPENAI_API_KEY from the
// deployment env LAZILY at call time (not at construction), so registering the agent
// never blocks a push — an unconfigured deployment just fails the send with a clear
// error the UI gates on (see `isConfigured`). gpt-4o-mini is a fast, low-cost default
// for an interactive assistant; swap the model id for your needs.
export const assistant = new Agent(components.agent, {
	name: "Assistant",
	languageModel: openai("gpt-4o-mini"),
	instructions: INSTRUCTIONS,
});

const DEFAULT_TITLE = "New chat";
const TITLE_MAX = 60;

// Derive a thread title from the first user message — trimmed to a single line and
// capped so the thread list stays tidy. Falls back to the default if empty.
function titleFromPrompt(prompt: string): string {
	const firstLine = prompt.trim().split("\n")[0]?.trim() ?? "";
	if (!firstLine) {
		return DEFAULT_TITLE;
	}
	return firstLine.length > TITLE_MAX
		? `${firstLine.slice(0, TITLE_MAX - 1)}…`
		: firstLine;
}

// Resolve a thread to its app-side projection AND prove the caller owns it:
// membership in the thread's workspace (the RLS net already enforces this on read)
// PLUS the thread belonging to this exact user (a conversation is private, not
// workspace-shared). Throws the standard "forbidden" otherwise.
async function requireOwnThread(ctx: QueryCtx | MutationCtx, threadId: string) {
	const userId = await currentUserId(ctx);
	const row = await ctx.db
		.query("assistantThreads")
		.withIndex("by_thread", (q) => q.eq("threadId", threadId))
		.unique();
	if (!row) {
		throw new ConvexError("thread not found");
	}
	await assertMember(ctx, row.workspaceId);
	if (row.userId !== userId) {
		throw new ConvexError("forbidden: not your conversation");
	}
	return row;
}

// Whether the assistant is usable — i.e. OPENAI_API_KEY is set on the deployment. The
// UI gates the chat on this so an unconfigured starter shows a clear setup hint
// instead of a chat box that errors on first send.
export const isConfigured = authedQuery({
	args: {},
	returns: v.boolean(),
	handler: () => Boolean(process.env.OPENAI_API_KEY),
});

// List the caller's own threads in a workspace, most-recent first.
export const listThreads = authedQuery({
	args: { workspaceId: v.string() },
	returns: v.array(
		v.object({
			threadId: v.string(),
			title: v.string(),
			lastMessageAt: v.number(),
		})
	),
	handler: async (ctx, args) => {
		await assertMember(ctx, args.workspaceId);
		const userId = await currentUserId(ctx);
		const rows = await ctx.db
			.query("assistantThreads")
			.withIndex("by_workspace_user", (q) =>
				q.eq("workspaceId", args.workspaceId).eq("userId", userId)
			)
			.collect();
		return rows
			.map((row) => ({
				threadId: row.threadId,
				title: row.title,
				lastMessageAt: row.lastMessageAt,
			}))
			.sort((a, b) => b.lastMessageAt - a.lastMessageAt);
	},
});

// Start a fresh conversation. The agent component mints the thread; we keep the
// workspace/user mapping so it stays scoped and listable.
export const createThread = authedMutation({
	args: { workspaceId: v.string() },
	returns: v.object({ threadId: v.string() }),
	handler: async (ctx, args) => {
		await assertMember(ctx, args.workspaceId);
		const userId = await currentUserId(ctx);
		const { threadId } = await assistant.createThread(ctx, { userId });
		await ctx.db.insert("assistantThreads", {
			workspaceId: args.workspaceId,
			userId,
			threadId,
			title: DEFAULT_TITLE,
			lastMessageAt: Date.now(),
		});
		return { threadId };
	},
});

// Send a user turn. Saves the prompt synchronously (so the UI shows it instantly),
// then schedules the streaming response so the mutation stays fast and the deltas
// flow over the component's websocket sync.
export const sendMessage = authedMutation({
	args: { threadId: v.string(), prompt: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const row = await requireOwnThread(ctx, args.threadId);
		const userId = await currentUserId(ctx);
		// Can't generate embeddings in a mutation (no fetch); the streaming action
		// below produces the assistant turn regardless.
		const { messageId } = await assistant.saveMessage(ctx, {
			threadId: args.threadId,
			userId,
			prompt: args.prompt,
			skipEmbeddings: true,
		});
		await ctx.db.patch(row._id, {
			lastMessageAt: Date.now(),
			// Name the thread after its first real message.
			title:
				row.title === DEFAULT_TITLE ? titleFromPrompt(args.prompt) : row.title,
		});
		await ctx.scheduler.runAfter(0, internal.assistant.generateResponse, {
			threadId: args.threadId,
			promptMessageId: messageId,
		});
		return null;
	},
});

// The streaming assistant turn. Runs as a scheduled action so the response streams in
// as deltas the `listMessages` query merges live (no HTTP streaming needed). Fails
// loudly if OPENAI_API_KEY is unset — the UI won't reach here (it gates on
// `isConfigured`), but a direct caller gets a clear error rather than a silent no-op.
export const generateResponse = internalAction({
	args: { threadId: v.string(), promptMessageId: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		if (!process.env.OPENAI_API_KEY) {
			throw new Error("OPENAI_API_KEY is not set");
		}
		const result = await assistant.streamText(
			ctx,
			{ threadId: args.threadId },
			{ promptMessageId: args.promptMessageId },
			{ saveStreamDeltas: true }
		);
		// Drain the stream so every delta is persisted before the action resolves.
		await result.consumeStream();
		return null;
	},
});

// The thread transcript for the chat UI: persisted messages (paginated) merged with
// in-flight stream deltas. Shape matches what `useThreadMessages({ stream: true })`
// expects — `{ ...paginationResult, streams }` with a `streamArgs` input.
export const listMessages = authedQuery({
	args: {
		threadId: v.string(),
		paginationOpts: paginationOptsValidator,
		streamArgs: vStreamArgs,
	},
	handler: async (ctx, args) => {
		await requireOwnThread(ctx, args.threadId);
		const paginated = await assistant.listMessages(ctx, {
			threadId: args.threadId,
			paginationOpts: args.paginationOpts,
			excludeToolMessages: true,
		});
		const streams = await assistant.syncStreams(ctx, {
			threadId: args.threadId,
			streamArgs: args.streamArgs,
		});
		return { ...paginated, streams };
	},
});

// Rename a conversation (keeps the component's metadata and the projection in sync).
export const renameThread = authedMutation({
	args: { threadId: v.string(), title: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const row = await requireOwnThread(ctx, args.threadId);
		const title = args.title.trim().slice(0, TITLE_MAX) || DEFAULT_TITLE;
		await ctx.db.patch(row._id, { title });
		await assistant.updateThreadMetadata(ctx, {
			threadId: args.threadId,
			patch: { title },
		});
		return null;
	},
});

// Delete a conversation and all its messages/streams. `deleteThreadAsync` walks the
// component's tables across scheduled pages; we drop the projection row up front so
// it vanishes from the list immediately.
export const deleteThread = authedMutation({
	args: { threadId: v.string() },
	returns: v.null(),
	handler: async (ctx, args) => {
		const row = await requireOwnThread(ctx, args.threadId);
		await assistant.deleteThreadAsync(ctx, { threadId: args.threadId });
		await ctx.db.delete(row._id);
		return null;
	},
});
