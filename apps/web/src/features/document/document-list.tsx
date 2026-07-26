"use client";

import { api } from "@runway/backend/convex/_generated/api";
import { Button } from "@runway/ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@runway/ui/components/dropdown-menu";
import { Input } from "@runway/ui/components/input";
import { IconFileText, IconLock } from "@runway/ui/icons";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

// A row of `prosemirror.list` — the workspace's documents (docId + title). The
// rich-text content lives in the prosemirror-sync component; this is the index.
interface DocumentSummary {
	createdAt: number;
	docId: string;
	title: string;
	visibility: "workspace" | "private";
}

// The workspace documents index: create (→ opens the new doc), open, inline
// rename, and delete. Every call carries the doc/workspace so the backend's
// membership gate authorizes it. Mirrors the `WorkspaceNotes` RLS-demo pattern.
export function DocumentList({
	workspaceId,
	workspaceSlug,
}: {
	workspaceId: string;
	workspaceSlug: string;
}) {
	const router = useRouter();
	// Skip until the Convex client is authed, so this never fires during the
	// unauthenticated boot window on a fresh load / mid-refresh.
	const { isAuthenticated } = useConvexAuth();
	const documents = useQuery(
		api.prosemirror.list,
		isAuthenticated ? { workspaceId } : "skip"
	) as DocumentSummary[] | undefined;

	// Optimistic updates keep the list instant: a new doc shows before the server
	// assigns its real id, a rename retitles in place, a delete removes the row —
	// each auto-rolls back if the mutation fails. The callbacks close over
	// `workspaceId` so they patch the right `list` subscription.
	const createDocument = useMutation(
		api.prosemirror.createDocument
	).withOptimisticUpdate((store, args) => {
		const list = store.getQuery(api.prosemirror.list, {
			workspaceId: args.workspaceId,
		});
		if (list === undefined) {
			return;
		}
		store.setQuery(api.prosemirror.list, { workspaceId: args.workspaceId }, [
			{
				docId: `optimistic-${crypto.randomUUID()}`,
				title: args.title,
				createdAt: Date.now(),
				// New docs are workspace-visible; the creator can make them private after.
				visibility: "workspace" as const,
			},
			...list,
		]);
	});
	const renameDocument = useMutation(
		api.prosemirror.rename
	).withOptimisticUpdate((store, args) => {
		const list = store.getQuery(api.prosemirror.list, { workspaceId });
		if (list === undefined) {
			return;
		}
		store.setQuery(
			api.prosemirror.list,
			{ workspaceId },
			list.map((doc) =>
				doc.docId === args.docId ? { ...doc, title: args.title } : doc
			)
		);
	});
	const trashDocument = useMutation(api.prosemirror.trash).withOptimisticUpdate(
		(store, args) => {
			const list = store.getQuery(api.prosemirror.list, { workspaceId });
			if (list === undefined) {
				return;
			}
			store.setQuery(
				api.prosemirror.list,
				{ workspaceId },
				list.filter((doc) => doc.docId !== args.docId)
			);
		}
	);

	const [creating, setCreating] = useState(false);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [draftTitle, setDraftTitle] = useState("");

	const handleCreate = async () => {
		if (creating) {
			return;
		}
		setCreating(true);
		try {
			const docId = await createDocument({ workspaceId, title: "Untitled" });
			router.push(`/${workspaceSlug}/documents/${docId}`);
		} catch (error) {
			// Surfaces the plan's document-cap message (entitlement gate) and other failures.
			toast.error(
				error instanceof Error ? error.message : "Could not create document"
			);
		} finally {
			setCreating(false);
		}
	};

	const startRename = (doc: DocumentSummary) => {
		setEditingId(doc.docId);
		setDraftTitle(doc.title);
	};

	const commitRename = async (docId: string) => {
		const title = draftTitle.trim();
		setEditingId(null);
		if (title) {
			await renameDocument({ docId, title });
		}
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between gap-4">
				<div className="flex flex-col gap-1">
					<h2 className="font-medium text-foreground text-lg">Documents</h2>
					<p className="text-muted-foreground text-sm">
						Collaborative rich-text documents for this workspace.
					</p>
				</div>
				<Button disabled={creating} onClick={handleCreate}>
					{creating ? "Creating…" : "New document"}
				</Button>
			</div>

			<ul className="flex flex-col gap-2">
				{documents?.map((doc) => (
					<li
						className="flex items-center justify-between gap-3 rounded-md border border-border p-3"
						key={doc.docId}
					>
						{editingId === doc.docId ? (
							<Input
								aria-label="Document title"
								className="flex-1"
								onBlur={() => commitRename(doc.docId)}
								onChange={(event) => setDraftTitle(event.target.value)}
								onKeyDown={(event) => {
									if (event.key === "Enter") {
										commitRename(doc.docId);
									}
									if (event.key === "Escape") {
										setEditingId(null);
									}
								}}
								ref={(el) => el?.focus()}
								value={draftTitle}
							/>
						) : (
							<Link
								className="flex min-w-0 flex-1 items-center gap-2"
								href={`/${workspaceSlug}/documents/${doc.docId}`}
							>
								<IconFileText className="size-4 shrink-0 text-muted-foreground" />
								<span className="truncate font-medium text-sm">
									{doc.title || "Untitled"}
								</span>
								{doc.visibility === "private" ? (
									<IconLock
										aria-label="Private"
										className="size-3.5 shrink-0 text-muted-foreground"
									/>
								) : null}
							</Link>
						)}
						<DropdownMenu>
							<DropdownMenuTrigger
								render={
									<Button
										aria-label="Document actions"
										size="icon"
										variant="ghost"
									>
										<MoreHorizontal className="size-4" />
									</Button>
								}
							/>
							<DropdownMenuContent align="end">
								<DropdownMenuItem onClick={() => startRename(doc)}>
									Rename
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => trashDocument({ docId: doc.docId })}
									variant="destructive"
								>
									Move to trash
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</li>
				))}
			</ul>

			{documents && documents.length === 0 ? (
				<p className="text-muted-foreground text-sm">
					No documents yet. Create your first one.
				</p>
			) : null}
		</div>
	);
}
