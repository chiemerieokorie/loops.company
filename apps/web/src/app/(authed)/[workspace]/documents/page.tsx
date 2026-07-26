import { DocumentList } from "@/features/document/document-list";
import { assertWorkspaceAccess, getActiveOrg } from "@/lib/workspace-server";

// The workspace-scoped `/[workspace]/documents` index. Gated + shelled by
// `[workspace]/layout.tsx`; resolves the workspace id the same way the overview
// page does (zero extra query on the active-workspace common path, one indexed
// slug→id check on a deep-link/mismatch), then hands it to the client list.
export default async function DocumentsPage({
	params,
}: {
	params: Promise<{ workspace: string }>;
}) {
	const { workspace } = await params;

	const active = await getActiveOrg();
	const workspaceId =
		active.activeOrganizationSlug === workspace && active.activeOrganizationId
			? active.activeOrganizationId
			: (await assertWorkspaceAccess(workspace)).workspaceId;

	return (
		<div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
			<DocumentList workspaceId={workspaceId} workspaceSlug={workspace} />
		</div>
	);
}
