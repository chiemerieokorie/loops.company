"use client";

import { api } from "@runway/backend/convex/_generated/api";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from "@runway/ui/components/breadcrumb";
import { useConvexAuth, useQuery } from "convex/react";

// A workspace as returned by `session.listMyWorkspaces` — the switcher's data.
interface Workspace {
	slug: string;
	workspaceId: string;
}

// The header title: a single breadcrumb showing the active workspace name. The name
// is resolved reactively from `session.listMyWorkspaces` matched on the slug the gate
// passed in; until it loads (or if the slug isn't in the list) we fall back to the
// slug itself so the header is never empty.
export function HeaderBreadcrumb({ workspaceSlug }: { workspaceSlug: string }) {
	// Skip until the Convex client is authed: this mounts on the persistent header
	// and would otherwise fire before the token lands on a fresh load / mid-refresh.
	const { isAuthenticated } = useConvexAuth();
	const workspaces = useQuery(
		api.session.listMyWorkspaces,
		isAuthenticated ? {} : "skip"
	) as Workspace[] | undefined;
	const active = workspaces?.find(
		(workspace) => workspace.slug === workspaceSlug
	);
	const label = active?.slug ?? workspaceSlug;

	return (
		<Breadcrumb className="min-w-0">
			<BreadcrumbList className="min-w-0 flex-nowrap">
				<BreadcrumbItem className="min-w-0">
					<BreadcrumbPage className="truncate">{label}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
