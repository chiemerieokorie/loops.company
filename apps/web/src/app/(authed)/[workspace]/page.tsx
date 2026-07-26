import { DashboardOverview } from "@/features/dashboard/dashboard-overview";
import { WorkspaceNotes } from "@/features/dashboard/workspace-notes";
import { assertWorkspaceAccess, getActiveOrg } from "@/lib/workspace-server";

// The workspace overview — the ROOT of `/[workspace]` (the post-login landing).
// A glance at the workspace. Gated + shelled by `[workspace]/layout.tsx`.
export default async function WorkspaceOverviewPage({
	params,
}: {
	params: Promise<{ workspace: string }>;
}) {
	const { workspace } = await params;

	// Zero extra query on the active-workspace common path (the id is already on the
	// session); one indexed slug→id check on a deep-link/mismatch.
	const active = await getActiveOrg();
	const workspaceId =
		active.activeOrganizationSlug === workspace && active.activeOrganizationId
			? active.activeOrganizationId
			: (await assertWorkspaceAccess(workspace)).workspaceId;

	return (
		<div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
			<div className="flex flex-col gap-1">
				<h2 className="font-medium text-foreground text-lg">Overview</h2>
				<p className="text-pretty text-muted-foreground text-sm">
					Your workspace at a glance.
				</p>
			</div>

			<DashboardOverview workspaceId={workspaceId} workspaceSlug={workspace} />

			<WorkspaceNotes workspaceId={workspaceId} />
		</div>
	);
}
