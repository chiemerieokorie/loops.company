"use client";

import { api } from "@runway/backend/convex/_generated/api";
import { Button } from "@runway/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@runway/ui/components/card";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@runway/ui/components/empty";
import { Spinner } from "@runway/ui/components/spinner";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { toast } from "sonner";

const DAY_MS = 86_400_000;
const RETENTION_DAYS = 30;

// How long until the retention cron purges a row trashed at `trashedAt`. Approximate
// (the cron runs daily) — a friendly countdown, not a precise deadline.
function purgeLabel(trashedAt: number): string {
	const daysLeft = Math.ceil(
		(trashedAt + RETENTION_DAYS * DAY_MS - Date.now()) / DAY_MS
	);
	if (daysLeft <= 0) {
		return "Purges soon";
	}
	return daysLeft === 1 ? "Purges in 1 day" : `Purges in ${daysLeft} days`;
}

function TrashRow({
	title,
	trashedAt,
	onRestore,
	onDelete,
}: {
	title: string;
	trashedAt: number;
	onRestore: () => void;
	onDelete: () => void;
}) {
	return (
		<div className="flex items-center gap-3 rounded-lg px-2 py-2">
			<div className="min-w-0 flex-1">
				<p className="truncate text-foreground text-sm">
					{title || "Untitled"}
				</p>
				<p className="text-muted-foreground text-xs tabular-nums">
					{purgeLabel(trashedAt)}
				</p>
			</div>
			<div className="flex shrink-0 items-center gap-2">
				<Button onClick={onRestore} size="sm" variant="outline">
					Restore
				</Button>
				<Button
					className="text-destructive"
					onClick={onDelete}
					size="sm"
					variant="ghost"
				>
					Delete forever
				</Button>
			</div>
		</div>
	);
}

// The workspace trash: soft-deleted documents and notes, each with Restore and
// Delete-forever. Reads the `listTrashed` queries and calls the restore/deleteForever
// mutations; both are workspace-membership gated on the backend.
export function TrashView({ workspaceId }: { workspaceId: string }) {
	// Skip until the Convex client is authed, so these never fire during the
	// unauthenticated boot window on a fresh load / mid-refresh.
	const { isAuthenticated } = useConvexAuth();
	const documents = useQuery(
		api.prosemirror.listTrashed,
		isAuthenticated ? { workspaceId } : "skip"
	);
	const notes = useQuery(
		api.notes.listTrashed,
		isAuthenticated ? { workspaceId } : "skip"
	);

	const restoreDocument = useMutation(api.prosemirror.restore);
	const deleteDocument = useMutation(api.prosemirror.deleteForever);
	const restoreNote = useMutation(api.notes.restore);
	const deleteNote = useMutation(api.notes.deleteForever);

	const run = async (action: () => Promise<unknown>, success: string) => {
		try {
			await action();
			toast.success(success);
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Something went wrong"
			);
		}
	};

	if (documents === undefined || notes === undefined) {
		return (
			<div className="flex items-center justify-center py-16">
				<Spinner />
			</div>
		);
	}

	if (documents.length === 0 && notes.length === 0) {
		return (
			<Empty>
				<EmptyHeader>
					<EmptyTitle>Trash is empty</EmptyTitle>
					<EmptyDescription>
						Deleted notes and documents show up here.
					</EmptyDescription>
				</EmptyHeader>
			</Empty>
		);
	}

	return (
		<div className="flex flex-col gap-6">
			{documents.length > 0 ? (
				<Card>
					<CardHeader>
						<CardTitle>Documents</CardTitle>
						<CardDescription>
							{documents.length} deleted{" "}
							{documents.length === 1 ? "document" : "documents"}.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-1">
						{documents.map((doc) => (
							<TrashRow
								key={doc.docId}
								onDelete={() =>
									run(
										() => deleteDocument({ docId: doc.docId }),
										"Deleted forever"
									)
								}
								onRestore={() =>
									run(() => restoreDocument({ docId: doc.docId }), "Restored")
								}
								title={doc.title}
								trashedAt={doc.trashedAt}
							/>
						))}
					</CardContent>
				</Card>
			) : null}

			{notes.length > 0 ? (
				<Card>
					<CardHeader>
						<CardTitle>Notes</CardTitle>
						<CardDescription>
							{notes.length} deleted {notes.length === 1 ? "note" : "notes"}.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-1">
						{notes.map((note) => (
							<TrashRow
								key={note._id}
								onDelete={() =>
									run(() => deleteNote({ noteId: note._id }), "Deleted forever")
								}
								onRestore={() =>
									run(() => restoreNote({ noteId: note._id }), "Restored")
								}
								title={note.title}
								trashedAt={note.trashedAt}
							/>
						))}
					</CardContent>
				</Card>
			) : null}
		</div>
	);
}
