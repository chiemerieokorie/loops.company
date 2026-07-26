"use client";

import { api } from "@runway/backend/convex/_generated/api";
import { Button } from "@runway/ui/components/button";
import { Input } from "@runway/ui/components/input";
import { IconChainLink1 } from "@runway/ui/icons";
import { type Preloaded, useMutation, usePreloadedQuery } from "convex/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CollabDocument } from "./collab-document";
import { ShareDialog } from "./share-dialog";

// The centered document column — shared by the not-found and editor states so the
// back link, title, and body all align to the same measure.
const COLUMN = "mx-auto flex w-full max-w-3xl flex-col";

// The editor page body. The document's metadata is PRELOADED on the server
// (`preloadAuthQuery` in the page), so `usePreloadedQuery` returns it hydrated on
// the first render — no client "Loading…" flash for the title, and a foreign or
// deleted id resolves to the not-found state instantly (server-side), never a spin.
// The editor CONTENT still streams in via the sync hook (CollabDocument), which
// shows its own skeleton while the snapshot loads.
export function DocumentView({
	docId,
	preloadedDoc,
	workspace,
}: {
	docId: string;
	preloadedDoc: Preloaded<typeof api.prosemirror.get>;
	workspace: string;
}) {
	const doc = usePreloadedQuery(preloadedDoc);
	// Optimistically patch the `get` subscription so the title never flickers back
	// to the old value between commit and the server round-trip (auto-rolls back on
	// error). The list's own row is patched by document-list's optimistic rename.
	const rename = useMutation(api.prosemirror.rename).withOptimisticUpdate(
		(store, args) => {
			const current = store.getQuery(api.prosemirror.get, {
				docId: args.docId,
			});
			if (current) {
				store.setQuery(
					api.prosemirror.get,
					{ docId: args.docId },
					{ ...current, title: args.title }
				);
			}
		}
	);

	// Seed the title once per document (the React "adjust state on prop change"
	// pattern, keyed on docId) so a reactive refetch never clobbers what the user is
	// currently typing.
	const [title, setTitle] = useState(doc?.title ?? "");
	const [seededDocId, setSeededDocId] = useState(doc?.docId);
	if (doc && doc.docId !== seededDocId) {
		setSeededDocId(doc.docId);
		setTitle(doc.title);
	}

	const [shareOpen, setShareOpen] = useState(false);

	const backLink = (
		<Link
			className="inline-flex w-fit items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-foreground"
			href={`/${workspace}/documents`}
		>
			<ArrowLeft className="size-4" />
			Documents
		</Link>
	);

	if (doc === null) {
		return (
			<div className={`${COLUMN} gap-4 pt-4`}>
				{backLink}
				<div className="rounded-md border border-border p-6">
					<h2 className="font-medium text-foreground">Document not found</h2>
					<p className="mt-1 text-muted-foreground text-sm">
						It may have been deleted, or you don’t have access to it.
					</p>
				</div>
			</div>
		);
	}

	const commitTitle = () => {
		const next = title.trim();
		if (next && next !== doc.title) {
			rename({ docId, title: next });
		}
	};

	return (
		<div className={`${COLUMN} gap-3 pt-4 pb-32`}>
			<div className="flex items-center justify-between gap-3">
				{backLink}
				<Button onClick={() => setShareOpen(true)} size="sm" variant="outline">
					<IconChainLink1 className="size-4" />
					Share
				</Button>
			</div>
			<ShareDialog docId={docId} onOpenChange={setShareOpen} open={shareOpen} />
			<Input
				aria-label="Document title"
				className="h-auto border-0 bg-transparent px-2 font-medium text-3xl text-foreground leading-tight tracking-tight shadow-none placeholder:text-muted-foreground/50 focus-visible:ring-0"
				onBlur={commitTitle}
				onChange={(event) => setTitle(event.target.value)}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						event.preventDefault();
						event.currentTarget.blur();
					}
				}}
				placeholder="Untitled"
				value={title}
			/>
			<CollabDocument docId={docId} />
		</div>
	);
}
