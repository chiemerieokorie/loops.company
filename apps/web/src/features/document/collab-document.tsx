"use client";

import { useTiptapSync } from "@convex-dev/prosemirror-sync/tiptap";
import { api } from "@runway/backend/convex/_generated/api";
import type { Id } from "@runway/backend/convex/_generated/dataModel";
import { Skeleton } from "@runway/ui/components/skeleton";
import { useConvex } from "convex/react";
import { useCallback, useMemo } from "react";
import { buildEditorExtensions } from "./editor/build-extensions";
import { Editor } from "./editor/editor";
import { createImageSlashItem } from "./editor/extensions/image";

// The collaborative document: a Notion-style Tiptap editor kept in sync across
// clients by @convex-dev/prosemirror-sync's OT. The Notion chrome (slash menu,
// bubble menu, prose blocks) lives in the `editor/` module and is editor-agnostic;
// this file owns only the Convex transport (`sync.extension`), injected LAST so its
// collaboration plugin wraps everything above it.
//
// Docs are created server-side via api.prosemirror.createDocument (which records
// the workspace membership gate). We deliberately do NOT use the hook's
// auto-create: that path calls the gated submitSnapshot with no `documents` row,
// which checkWrite correctly denies. A missing doc here is surfaced, not retried.

export function CollabDocument({ docId }: { docId: string }) {
	const convex = useConvex();
	const sync = useTiptapSync(api.prosemirror, docId, {
		snapshotDebounceMs: 1000,
	});

	// Upload an image to Convex file storage, returning its served URL. Threaded
	// into the `/image` slash command (editor/extensions/image).
	const uploadImage = useCallback(
		async (file: File): Promise<string> => {
			// `docId` gates the upload/read on this document's workspace membership
			// (see convex/files.ts) — not just "any authenticated user".
			const postUrl = await convex.mutation(api.files.generateUploadUrl, {
				docId,
			});
			const result = await fetch(postUrl, {
				body: file,
				headers: { "Content-Type": file.type },
				method: "POST",
			});
			if (!result.ok) {
				throw new Error("upload failed");
			}
			const { storageId } = (await result.json()) as {
				storageId: Id<"_storage">;
			};
			const url = await convex.query(api.files.getUrl, { docId, storageId });
			if (!url) {
				throw new Error("upload failed");
			}
			return url;
		},
		[convex, docId]
	);

	const extensions = useMemo(
		() =>
			sync.extension
				? buildEditorExtensions({
						extensions: [sync.extension],
						slashItems: [createImageSlashItem(uploadImage)],
					})
				: [],
		[sync.extension, uploadImage]
	);

	if (sync.isLoading) {
		// The title is already server-rendered (DocumentView preloads it); this
		// skeletons only the editor body while the OT snapshot streams in.
		return (
			<div aria-hidden className="flex w-full flex-col gap-3 px-2 py-2">
				<Skeleton className="h-4 w-3/4" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-11/12" />
				<Skeleton className="h-4 w-2/3" />
			</div>
		);
	}
	if (sync.initialContent === null) {
		return (
			<p className="px-2 py-4 text-muted-foreground text-p13">
				This document hasn’t been created yet.
			</p>
		);
	}
	// Typography (prose-sm) is applied to the editable itself via editorProps. Fill
	// the parent column (DocumentView already centers + width-constrains the page),
	// so the editor body left-aligns with the title and the back link — no extra
	// mx-auto/max-w here or the editor would double-center and drift right.
	return (
		<div className="w-full px-2">
			<Editor content={sync.initialContent} extensions={extensions} />
		</div>
	);
}
