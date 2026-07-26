import { WorkspaceSettings } from "@/features/settings/workspace-settings";
import { assertWorkspaceAccess, getActiveOrg } from "@/lib/workspace-server";

// Workspace settings (name/slug + danger zone). Same slug→id resolution as the members
// page; the client view drives updates via `authClient.organization.*`.
export default async function SettingsPage({
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
		<div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
			<div>
				<h1 className="font-medium text-foreground text-lg">Settings</h1>
				<p className="text-muted-foreground text-sm">
					Manage your workspace name, URL, and membership.
				</p>
			</div>
			<WorkspaceSettings workspaceId={workspaceId} />
		</div>
	);
}
