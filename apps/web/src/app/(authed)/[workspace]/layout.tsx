import { Separator } from "@runway/ui/components/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@runway/ui/components/sidebar";
import { notFound, redirect } from "next/navigation";
import type { ReactNode } from "react";

import { AppSidebar } from "@/features/shell/app-sidebar";
import { HeaderBreadcrumb } from "@/features/shell/header-breadcrumb";
import { PromoteActiveWorkspace } from "@/features/shell/promote-active-workspace";
import { assertWorkspaceAccess, getActiveOrg } from "@/lib/workspace-server";

// Per-workspace gate + shell for everything under `/[workspace]`. The parent
// (authed)/layout.tsx already proved the caller is signed in; this layer proves
// they may see THIS workspace and never trusts the URL slug.
//
// EFFICIENCY (the whole point): navigating within your ACTIVE workspace costs
// ZERO database queries. The active slug is denormalized onto the session
// (auth.ts), so `getActiveOrg` reads it straight off the session with no
// `memberships` scan; when `params.workspace` equals it, we render immediately.
// The ONE indexed membership check fires on the mismatch path (deep-link, a
// just-switched org, or a hand-edited URL). Both reads are `React.cache()`-deduped
// within the request (lib/workspace-server).
//
// NOTE: the zero-query path is keyed on the session's *active* slug, and a render
// does not promote a deep-linked workspace to active (a session write as a
// side-effect of a GET is an anti-pattern). So a member browsing a workspace that
// isn't their active one pays the one indexed check on every navigation until they
// switch into it (the switcher's `setActive` updates the session). Acceptable: one
// indexed read, only for the non-active-workspace case.
//
// SECURITY BOUNDARY — read before trusting this gate for anything: workspace
// DATA is gated independently, downstream, by `assertMember` inside every Convex
// `authedQuery` (lib/access — the RLS net). This layout gates only the *shell*
// (sidebar + the slug already in the URL); it renders nothing workspace-sensitive
// on its own. The common path's zero-query shortcut rests on the session's
// `activeOrganizationSlug`, which is server-owned (`input: false`) so a client
// can't forge it. It proves membership *as of session creation* — but the backend
// closes the gap from the other side: when a user loses access (member removed, or
// the org deleted), the `member`/`organization` onDelete triggers clear the active
// org off their sessions (backend `clearActiveOrgForMember`/`clearActiveOrgForWorkspace`),
// so this path stops matching the stale slug and falls through to the membership
// check below. Worst case before the next `getSession` refresh is a glimpse of the
// non-sensitive shell; every data query already 403s regardless.
export default async function WorkspaceLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ workspace: string }>;
}) {
	const { workspace } = await params;
	const { activeOrganizationSlug } = await getActiveOrg();

	// Common path: URL slug === the session's active workspace. Render the shell
	// with zero queries — the session vouches for membership in the active org as
	// of sign-in; workspace DATA is gated downstream by `assertMember` regardless
	// (see the SECURITY BOUNDARY note above).
	let promoteWorkspaceId: string | null = null;
	if (activeOrganizationSlug !== workspace) {
		// Mismatch path (deep-link / just-switched / hand-edited URL). One indexed
		// slug→org + `by_user_workspace` check:
		//  - member of a FOREIGN-but-valid workspace → render it, then PROMOTE it to
		//    active client-side post-render (not a session write on this GET).
		//  - unknown slug / non-member → `notFound()` (unknown ≡ non-member, no leak)
		//    → the friendly `[workspace]/not-found.tsx`.
		try {
			const { workspaceId } = await assertWorkspaceAccess(workspace);
			promoteWorkspaceId = workspaceId;
		} catch {
			// Not a member of `workspace` (or unknown/stale slug). If the user HAS an
			// active workspace, they were routed here wrongly — e.g. a stale convex_jwt
			// right after sign-in, or a hand-edited/bad link — so bounce them to their
			// REAL workspace rather than dead-ending. Only a user with NO workspace at
			// all gets the friendly not-found.
			if (activeOrganizationSlug) {
				redirect(`/${activeOrganizationSlug}`);
			}
			notFound();
		}
	}

	return (
		<SidebarProvider>
			{promoteWorkspaceId ? (
				<PromoteActiveWorkspace workspaceId={promoteWorkspaceId} />
			) : null}
			<AppSidebar workspaceSlug={workspace} />
			<SidebarInset className="overflow-hidden">
				<header className="flex h-14 shrink-0 items-center gap-2">
					<div className="flex min-w-0 flex-1 items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator
							className="mr-1 data-vertical:h-4 data-vertical:self-center"
							orientation="vertical"
						/>
						<HeaderBreadcrumb workspaceSlug={workspace} />
					</div>
				</header>
				<div className="min-w-0 flex-1 overflow-y-auto p-4">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
