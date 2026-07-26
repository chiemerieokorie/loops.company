"use client";

import { api } from "@runway/backend/convex/_generated/api";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@runway/ui/components/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@runway/ui/components/sidebar";
import { IconChevronGrabberVertical, IconPlusMedium } from "@runway/ui/icons";
import { useConvexAuth, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { WorkspaceAvatar } from "@/features/shared/generated-avatar";
import { CreateWorkspaceDialog } from "@/features/shell/create-workspace-dialog";
import { setActiveWorkspace } from "@/lib/workspace-client";

// A workspace as returned by `session.listMyWorkspaces`.
interface Workspace {
	slug: string;
	workspaceId: string;
}

// Org/workspace switcher in the sidebar header. The active workspace comes from
// the URL (`activeSlug`, passed down from the gate layout); the full list is read
// reactively from `session.listMyWorkspaces`. Switching sets the active org on the
// session (so the next request's gate takes its zero-query path) and routes to the
// new workspace's dashboard. "Add workspace" opens the create flow.
export function WorkspaceSwitcher({ activeSlug }: { activeSlug: string }) {
	const router = useRouter();
	// Skip until the Convex client is authed: this mounts on the persistent sidebar
	// and would otherwise fire before the token lands on a fresh load / mid-refresh.
	const { isAuthenticated } = useConvexAuth();
	const workspaces = useQuery(
		api.session.listMyWorkspaces,
		isAuthenticated ? {} : "skip"
	) as Workspace[] | undefined;
	const [createOpen, setCreateOpen] = useState(false);
	// A ref (not state) so the in-flight guard doesn't trigger renders or leak a
	// setState onto the component once `router.push` remounts the sidebar.
	const switching = useRef(false);

	const handleSwitch = async (workspaceId: string, slug: string) => {
		if (slug === activeSlug || switching.current) {
			return;
		}
		switching.current = true;
		try {
			await setActiveWorkspace(workspaceId);
			router.push(`/${slug}`);
		} finally {
			switching.current = false;
		}
	};

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={
							<SidebarMenuButton
								className="data-[state=open]:bg-sidebar-accent"
								size="lg"
							/>
						}
					>
						<WorkspaceAvatar name={activeSlug} size={32} />
						<div className="grid flex-1 text-left leading-tight">
							<span className="truncate font-medium text-sm">{activeSlug}</span>
							<span className="truncate text-muted-foreground text-xs">
								Workspace
							</span>
						</div>
						<IconChevronGrabberVertical className="ml-auto size-4" />
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="start"
						className="min-w-56 rounded-lg"
						side="bottom"
						sideOffset={4}
					>
						{/* Base UI requires DropdownMenuLabel (MenuGroupLabel) to live inside
						    a DropdownMenuGroup — a free-standing label throws
						    "MenuGroupContext is missing" and crashes the shell. */}
						<DropdownMenuGroup>
							<DropdownMenuLabel className="font-normal text-muted-foreground text-xs">
								Workspaces
							</DropdownMenuLabel>
							{workspaces?.map((workspace) => (
								<DropdownMenuItem
									className="gap-2"
									key={workspace.workspaceId}
									onClick={() =>
										handleSwitch(workspace.workspaceId, workspace.slug)
									}
								>
									<WorkspaceAvatar name={workspace.slug} size={24} />
									<span className="truncate">{workspace.slug}</span>
								</DropdownMenuItem>
							))}
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							className="gap-2"
							onClick={() => setCreateOpen(true)}
						>
							<div className="flex size-6 items-center justify-center rounded-md border border-border bg-background text-muted-foreground">
								<IconPlusMedium className="size-4" />
							</div>
							<span className="text-muted-foreground">Add workspace</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
			<CreateWorkspaceDialog onOpenChange={setCreateOpen} open={createOpen} />
		</SidebarMenu>
	);
}
