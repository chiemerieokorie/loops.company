import type { Metadata } from "next";

import { SharedDocumentView } from "@/features/document/shared-document-view";

// A fully PUBLIC route (outside the (authed) group, so no auth gate) that renders a
// shared document read-only. Noindex — a share link is a bearer credential, not
// something search engines should crawl.
export const metadata: Metadata = {
	title: "Shared document",
	robots: { index: false, follow: false },
};

export default async function SharePage({
	params,
}: {
	params: Promise<{ token: string }>;
}) {
	const { token } = await params;
	return <SharedDocumentView token={token} />;
}
