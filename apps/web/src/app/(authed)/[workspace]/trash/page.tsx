import { TrashView } from "@/features/trash/trash-view";
import { assertWorkspaceAccess, getActiveOrg } from "@/lib/workspace-server";

// Workspace trash: notes and documents you've deleted, restorable until the retention
// cron (convex/crons.purgeExpiredTrash) permanently removes them. Resolves the URL slug
// to its org id the same way the other workspace pages do.
export default async function TrashPage({
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
		<div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
			<div>
				<h1 className="font-medium text-foreground text-lg">Trash</h1>
				<p className="text-muted-foreground text-sm">
					Deleted notes and documents stay here for 30 days, then they&apos;re
					permanently removed.
				</p>
			</div>
			<TrashView workspaceId={workspaceId} />
		</div>
	);
}
