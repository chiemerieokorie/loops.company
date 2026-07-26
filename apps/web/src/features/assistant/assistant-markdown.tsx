"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Assistant replies arrive as markdown from the model. We render them with
// react-markdown (plain semantic HTML, no injected classes) and let
// shadcn/typeset own the styling via the `.typeset .typeset-chat` wrapper the
// caller provides — typeset's `:where()` rules then style every element without
// fighting the renderer. remark-gfm adds tables, task lists, strikethrough, and
// autolinks. No rehype-raw: model output is never treated as raw HTML.
//
// Chat bubbles are narrow, so a wide table is wrapped in `typeset-scroll` to
// scroll horizontally instead of overflowing the bubble.
const MARKDOWN_COMPONENTS = {
	table: ({ children }: { children?: React.ReactNode }) => (
		<div className="typeset-scroll">
			<table>{children}</table>
		</div>
	),
	// Links open safely in a new tab.
	a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
		<a href={href} rel="noopener noreferrer" target="_blank">
			{children}
		</a>
	),
};

export function AssistantMarkdown({ text }: { text: string }) {
	return (
		<Markdown components={MARKDOWN_COMPONENTS} remarkPlugins={[remarkGfm]}>
			{text}
		</Markdown>
	);
}
