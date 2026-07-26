import { MembersView } from "@/features/members/members-view";
import { assertWorkspaceAccess, getActiveOrg } from "@/lib/workspace-server";

// Workspace-scoped members management (invite / roles / remove / pending invites).
// Resolve the URL slug to its org id — zero extra query on the active-workspace common
// path (the id is on the session), one indexed slug→id check on a deep-link mismatch —
// then hand it to the client view, which drives everything via `authClient.organization.*`.
export default async function MembersPage({
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
				<h1 className="font-medium text-foreground text-lg">Members</h1>
				<p className="text-muted-foreground text-sm">
					Invite teammates and manage their roles for this workspace.
				</p>
			</div>
			<MembersView workspaceId={workspaceId} />
		</div>
	);
}
