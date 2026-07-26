import { AssistantView } from "@/features/assistant/assistant-view";
import { assertWorkspaceAccess, getActiveOrg } from "@/lib/workspace-server";

// Workspace-scoped AI assistant. Resolve the URL slug to its org id — zero extra query
// on the active-workspace common path (the id is on the session), one indexed slug→id
// check on a deep-link mismatch — then hand it to the client chat view.
export default async function AssistantPage({
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
		<div className="mx-auto flex h-[calc(100dvh-8rem)] w-full max-w-3xl flex-col">
			<AssistantView workspaceId={workspaceId} />
		</div>
	);
}
