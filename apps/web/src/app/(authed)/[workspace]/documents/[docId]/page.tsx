import { api } from "@runway/backend/convex/_generated/api";

import { DocumentView } from "@/features/document/document-view";
import { preloadAuthQuery } from "@/lib/auth-server";

// A single collaborative document. Gated + shelled by `[workspace]/layout.tsx`.
// The doc metadata is PRELOADED on the server so the title renders on the first
// paint and a foreign/deleted id shows the not-found state with no client flash;
// the backend's checkRead/checkWrite still gate every sync op regardless of the URL.
export default async function DocumentPage({
	params,
}: {
	params: Promise<{ workspace: string; docId: string }>;
}) {
	const { docId, workspace } = await params;

	const preloadedDoc = await preloadAuthQuery(api.prosemirror.get, { docId });

	return (
		<DocumentView
			docId={docId}
			preloadedDoc={preloadedDoc}
			workspace={workspace}
		/>
	);
}
