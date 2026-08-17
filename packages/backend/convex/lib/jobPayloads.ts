// Trigger.dev payload contracts consumed by the Convex bridge. They intentionally
// contain no Trigger.dev or storage-package imports so web builds remain independent
// of the separately deployed jobs workspace.
export type NoteExportPayload = {
	noteId: string;
	workspaceId: string;
	title: string;
	body: string;
	callbackUrl: string;
};

export type ParseDocumentPayload = {
	importId: string;
	workspaceId: string;
	sourceUrl: string;
	filename: string;
	callbackUrl: string;
};
