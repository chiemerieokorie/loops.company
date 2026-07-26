"use client";

import { api } from "@runway/backend/convex/_generated/api";
import type { Id } from "@runway/backend/convex/_generated/dataModel";
import { Button } from "@runway/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@runway/ui/components/card";
import { Input } from "@runway/ui/components/input";
import { IconTrashCan } from "@runway/ui/icons";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

// A note as returned by `notes.list` — the RLS example table scoped to a workspace.
interface Note {
	_id: Id<"notes">;
	body: string;
	title: string;
}

// Compact demo of the workspace-scoped `notes` table (the RLS example): lists the
// workspace's notes, a minimal create form, and a per-note delete. All three calls
// carry `workspaceId`, so the backend's `assertMember` gate authorizes each one.
export function WorkspaceNotes({ workspaceId }: { workspaceId: string }) {
	// Skip until the Convex client is authed, so this never fires during the
	// unauthenticated boot window on a fresh load / mid-refresh.
	const { isAuthenticated } = useConvexAuth();
	const notes = useQuery(
		api.notes.list,
		isAuthenticated ? { workspaceId } : "skip"
	) as Note[] | undefined;
	const createNote = useMutation(api.notes.create);
	const trashNote = useMutation(api.notes.trash);

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [pending, setPending] = useState(false);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const trimmedTitle = title.trim();
		if (!trimmedTitle || pending) {
			return;
		}
		setPending(true);
		try {
			await createNote({ workspaceId, title: trimmedTitle, body: body.trim() });
			setTitle("");
			setBody("");
		} catch (error) {
			// Surfaces the plan's note-cap message (entitlement gate) and other failures.
			toast.error(
				error instanceof Error ? error.message : "Could not add note"
			);
		} finally {
			setPending(false);
		}
	};

	const handleTrash = async (noteId: Id<"notes">) => {
		try {
			await trashNote({ noteId });
			toast.success("Moved to trash");
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Could not delete note"
			);
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Notes</CardTitle>
				<CardDescription>
					A workspace-scoped example of the row-level-security pattern.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<form
					className="flex flex-col gap-2 sm:flex-row"
					onSubmit={handleSubmit}
				>
					<Input
						aria-label="Note title"
						className="sm:flex-1"
						onChange={(event) => setTitle(event.target.value)}
						placeholder="Title"
						value={title}
					/>
					<Input
						aria-label="Note body"
						className="sm:flex-1"
						onChange={(event) => setBody(event.target.value)}
						placeholder="Body (optional)"
						value={body}
					/>
					<Button disabled={!title.trim() || pending} type="submit">
						{pending ? "Adding…" : "Add note"}
					</Button>
				</form>

				<ul className="flex flex-col gap-2">
					{notes?.map((note) => (
						<li
							className="flex items-start justify-between gap-3 rounded-md border border-border p-3"
							key={note._id}
						>
							<div className="flex min-w-0 flex-col">
								<span className="truncate font-medium text-sm">
									{note.title}
								</span>
								{note.body ? (
									<span className="truncate text-muted-foreground text-sm">
										{note.body}
									</span>
								) : null}
							</div>
							<Button
								aria-label={`Delete ${note.title}`}
								onClick={() => handleTrash(note._id)}
								size="icon"
								variant="ghost"
							>
								<IconTrashCan className="size-4" />
							</Button>
						</li>
					))}
				</ul>

				{notes && notes.length === 0 ? (
					<p className="text-muted-foreground text-sm">No notes yet.</p>
				) : null}
			</CardContent>
		</Card>
	);
}
