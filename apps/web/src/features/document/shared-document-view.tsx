"use client";

import { api } from "@runway/backend/convex/_generated/api";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@runway/ui/components/empty";
import { Spinner } from "@runway/ui/components/spinner";
import { useQuery } from "convex/react";

import { ReadonlyDocument } from "./readonly-document";

// The public share viewer — rendered at /share/[token], outside the authed shell, so
// anyone with the link can read the document without signing in. `resolveShare`
// authorizes by token and returns the title + content (or null for an unknown/revoked
// link or a trashed document). No editing chrome; just a centered, read-only render.
export function SharedDocumentView({ token }: { token: string }) {
	const shared = useQuery(api.prosemirror.resolveShare, { token });

	if (shared === undefined) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<Spinner className="text-muted-foreground" />
			</div>
		);
	}

	if (shared === null) {
		return (
			<div className="flex min-h-screen items-center justify-center p-6">
				<Empty>
					<EmptyHeader>
						<EmptyTitle>This link isn&apos;t available</EmptyTitle>
						<EmptyDescription>
							The shared document may have been unpublished or deleted.
						</EmptyDescription>
					</EmptyHeader>
				</Empty>
			</div>
		);
	}

	let content: object | null = null;
	if (shared.content) {
		try {
			content = JSON.parse(shared.content) as object;
		} catch {
			content = null;
		}
	}

	return (
		<div className="mx-auto w-full max-w-3xl px-6 py-16">
			<h1 className="text-balance font-medium text-foreground text-h1">
				{shared.title || "Untitled"}
			</h1>
			<div className="mt-8">
				<ReadonlyDocument content={content} />
			</div>
			<p className="mt-16 text-muted-foreground text-xs">
				Shared read-only. Anyone with this link can view it.
			</p>
		</div>
	);
}
