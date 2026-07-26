"use client";

import { api } from "@runway/backend/convex/_generated/api";
import type { Id } from "@runway/backend/convex/_generated/dataModel";
import { Button } from "@runway/ui/components/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@runway/ui/components/dialog";
import { Input } from "@runway/ui/components/input";
import {
	NativeSelect,
	NativeSelectOption,
} from "@runway/ui/components/native-select";
import { Separator } from "@runway/ui/components/separator";
import { Skeleton } from "@runway/ui/components/skeleton";
import {
	IconCheckmark1Small,
	IconClipboard,
	IconGlobe,
	IconLock,
	IconPeople,
} from "@runway/ui/icons";
import { useMutation, useQuery } from "convex/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { ProfileAvatar } from "@/features/shared/generated-avatar";
import { authClient } from "@/lib/auth-client";

type GrantRole = "viewer" | "editor";
type Visibility = "workspace" | "private";

const NO_ACCESS = "none";
const COPIED_RESET_MS = 1500;

interface Member {
	email: string;
	image: string | null;
	name: string;
	role: string;
	userId: string;
}

// Better Auth's member shape from getFullOrganization (loosely typed at the boundary).
interface RawMember {
	role?: string | null;
	user?: {
		id?: string | null;
		email?: string | null;
		image?: string | null;
		name?: string | null;
	} | null;
	userId?: string | null;
}

// A member has IMPLICIT, ungrantable access — always read/write regardless of grants —
// when they're a workspace owner/admin or the document's creator. We show them a fixed
// "Full access" instead of the grant picker.
function hasImplicitAccess(member: Member, creatorId: string | null): boolean {
	return (
		member.role.includes("owner") ||
		member.role.includes("admin") ||
		member.userId === creatorId
	);
}

// Manage who can access a document: its visibility (shared with the whole workspace vs.
// private to specific members), per-member grants when private, and the public,
// sign-in-free share link. All management is gated on `canManage` (write access) —
// a viewer sees state read-only.
export function ShareDialog({
	docId,
	open,
	onOpenChange,
}: {
	docId: string;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const access = useQuery(api.grants.documentAccess, open ? { docId } : "skip");
	const setVisibility = useMutation(api.grants.setVisibility);
	const createGrant = useMutation(api.grants.create);
	const revokeGrant = useMutation(api.grants.revoke);

	const canManage = access?.canManage ?? false;
	const visibility: Visibility = access?.visibility ?? "workspace";
	const isPrivate = visibility === "private";

	// The workspace roster (for the picker), fetched only when managing a private doc.
	const [members, setMembers] = useState<Member[] | null>(null);
	const workspaceId = access?.workspaceId;
	useEffect(() => {
		if (!(open && canManage && isPrivate && workspaceId)) {
			return;
		}
		let cancelled = false;
		authClient.organization
			.getFullOrganization({ query: { organizationId: workspaceId } })
			.then(({ data }) => {
				if (cancelled) {
					return;
				}
				const raw = ((data as { members?: RawMember[] } | null)?.members ??
					[]) as RawMember[];
				setMembers(
					raw.flatMap((m) => {
						const userId = m.userId ?? m.user?.id;
						if (!userId) {
							return [];
						}
						return [
							{
								userId,
								name: m.user?.name ?? m.user?.email ?? "Member",
								email: m.user?.email ?? "",
								image: m.user?.image ?? null,
								role: m.role ?? "member",
							},
						];
					})
				);
			})
			.catch(() => toast.error("Couldn't load members"));
		return () => {
			cancelled = true;
		};
	}, [open, canManage, isPrivate, workspaceId]);

	const grantByPrincipal = useMemo(() => {
		const map = new Map<string, { grantId: Id<"grants">; role: GrantRole }>();
		for (const grant of access?.grants ?? []) {
			map.set(grant.principalId, { grantId: grant._id, role: grant.role });
		}
		return map;
	}, [access]);

	const onChangeVisibility = (next: Visibility) => {
		setVisibility({ docId, visibility: next }).catch(() =>
			toast.error("Couldn't change visibility")
		);
	};

	const onSetRole = (userId: string, role: GrantRole | null) => {
		const existing = grantByPrincipal.get(userId);
		let action: Promise<unknown> | undefined;
		if (role === null) {
			action = existing
				? revokeGrant({ grantId: existing.grantId })
				: undefined;
		} else {
			action = createGrant({ docId, principalId: userId, role });
		}
		action?.catch(() => toast.error("Couldn't update access"));
	};

	const renderBody = () => {
		if (access === undefined) {
			return <AccessSkeleton />;
		}
		if (access === null) {
			return (
				<p className="py-8 text-center text-muted-foreground text-sm">
					You no longer have access to this document.
				</p>
			);
		}
		return (
			<div className="flex flex-col gap-4 py-1">
				<GeneralAccess
					canManage={canManage}
					onChange={onChangeVisibility}
					visibility={visibility}
				/>

				{isPrivate && canManage ? (
					<PeopleAccess
						creatorId={access.creatorId}
						members={members}
						onSetRole={onSetRole}
						roleOf={(userId) => grantByPrincipal.get(userId)?.role}
					/>
				) : null}

				<Separator />

				<PublicLink canManage={canManage} docId={docId} />
			</div>
		);
	};

	return (
		<Dialog onOpenChange={onOpenChange} open={open}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Share document</DialogTitle>
					<DialogDescription>
						Choose who can access this document and publish a public link.
					</DialogDescription>
				</DialogHeader>

				{renderBody()}
			</DialogContent>
		</Dialog>
	);
}

function GeneralAccess({
	visibility,
	canManage,
	onChange,
}: {
	visibility: Visibility;
	canManage: boolean;
	onChange: (next: Visibility) => void;
}) {
	const isPrivate = visibility === "private";
	return (
		<div className="flex items-center gap-3">
			<span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
				{isPrivate ? (
					<IconLock className="size-4" />
				) : (
					<IconPeople className="size-4" />
				)}
			</span>
			<div className="flex min-w-0 flex-1 flex-col">
				<span className="font-medium text-foreground text-sm">
					General access
				</span>
				<span className="text-muted-foreground text-xs">
					{isPrivate
						? "Only people with access can open it."
						: "Everyone in the workspace can edit."}
				</span>
			</div>
			<NativeSelect
				aria-label="Document visibility"
				className="w-36"
				disabled={!canManage}
				onChange={(event) => onChange(event.target.value as Visibility)}
				value={visibility}
			>
				<NativeSelectOption value="workspace">Workspace</NativeSelectOption>
				<NativeSelectOption value="private">Private</NativeSelectOption>
			</NativeSelect>
		</div>
	);
}

function PeopleAccess({
	members,
	creatorId,
	roleOf,
	onSetRole,
}: {
	members: Member[] | null;
	creatorId: string | null;
	roleOf: (userId: string) => GrantRole | undefined;
	onSetRole: (userId: string, role: GrantRole | null) => void;
}) {
	const [query, setQuery] = useState("");
	const trimmed = query.trim().toLowerCase();
	const shown = members
		? members.filter(
				(m) =>
					!trimmed ||
					m.name.toLowerCase().includes(trimmed) ||
					m.email.toLowerCase().includes(trimmed)
			)
		: [];

	if (members === null) {
		return <AccessSkeleton />;
	}

	return (
		<div className="flex flex-col gap-2">
			<Input
				aria-label="Search members"
				onChange={(event) => setQuery(event.target.value)}
				placeholder="Search members…"
				value={query}
			/>
			{shown.length === 0 ? (
				<p className="py-4 text-center text-muted-foreground text-xs">
					No members match “{query.trim()}”.
				</p>
			) : (
				<ul className="-mx-1 flex max-h-64 flex-col overflow-y-auto">
					{shown.map((member) => (
						<li
							className="flex items-center gap-3 rounded-lg px-1 py-1.5"
							key={member.userId}
						>
							<ProfileAvatar
								image={member.image}
								name={member.name}
								size={28}
							/>
							<div className="flex min-w-0 flex-1 flex-col">
								<span className="truncate font-medium text-foreground text-sm">
									{member.name}
								</span>
								<span className="truncate text-muted-foreground text-xs">
									{member.email}
								</span>
							</div>
							{hasImplicitAccess(member, creatorId) ? (
								<span className="text-muted-foreground text-xs">
									Full access
								</span>
							) : (
								<NativeSelect
									aria-label={`Access for ${member.name}`}
									className="w-28"
									onChange={(event) =>
										onSetRole(
											member.userId,
											event.target.value === NO_ACCESS
												? null
												: (event.target.value as GrantRole)
										)
									}
									value={roleOf(member.userId) ?? NO_ACCESS}
								>
									<NativeSelectOption value={NO_ACCESS}>
										No access
									</NativeSelectOption>
									<NativeSelectOption value="viewer">
										Can view
									</NativeSelectOption>
									<NativeSelectOption value="editor">
										Can edit
									</NativeSelectOption>
								</NativeSelect>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

// The public, sign-in-free share link. Reading the link needs only read access;
// publishing/revoking is manager-gated (createShare/revokeShare require write).
function PublicLink({
	docId,
	canManage,
}: {
	docId: string;
	canManage: boolean;
}) {
	const share = useQuery(api.prosemirror.getShare, { docId });
	const createShare = useMutation(api.prosemirror.createShare);
	const revokeShare = useMutation(api.prosemirror.revokeShare);
	const [busy, setBusy] = useState(false);
	const [copied, setCopied] = useState(false);

	const origin = typeof window === "undefined" ? "" : window.location.origin;
	const url = share ? `${origin}/share/${share.token}` : "";

	const run = useCallback(async (action: Promise<unknown>, message: string) => {
		setBusy(true);
		try {
			await action;
		} catch {
			toast.error(message);
		} finally {
			setBusy(false);
		}
	}, []);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			toast.success("Link copied");
			setTimeout(() => setCopied(false), COPIED_RESET_MS);
		} catch {
			toast.error("Couldn't copy the link");
		}
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-3">
				<span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
					<IconGlobe className="size-4" />
				</span>
				<div className="flex min-w-0 flex-1 flex-col">
					<span className="font-medium text-foreground text-sm">
						Public link
					</span>
					<span className="text-muted-foreground text-xs">
						{share
							? "Anyone with the link can view, no sign-in."
							: "Create a link to share read-only."}
					</span>
				</div>
				{canManage && share === null ? (
					<Button
						disabled={busy}
						onClick={() => run(createShare({ docId }), "Couldn't create link")}
						size="sm"
					>
						{busy ? "Creating…" : "Create link"}
					</Button>
				) : null}
			</div>

			{share ? (
				<div className="flex items-center gap-2">
					<Input
						aria-label="Share link"
						className="flex-1"
						readOnly
						value={url}
					/>
					<Button
						aria-label="Copy link"
						onClick={copy}
						size="icon"
						variant="outline"
					>
						{copied ? <IconCheckmark1Small /> : <IconClipboard />}
					</Button>
				</div>
			) : null}

			{canManage && share ? (
				<Button
					className="self-start text-destructive"
					disabled={busy}
					onClick={() => run(revokeShare({ docId }), "Couldn't stop sharing")}
					size="sm"
					variant="ghost"
				>
					Stop sharing
				</Button>
			) : null}
		</div>
	);
}

function AccessSkeleton() {
	return (
		<div className="flex flex-col gap-3 py-2">
			{[0, 1, 2].map((row) => (
				<div className="flex items-center gap-3" key={row}>
					<Skeleton className="size-9 rounded-md" />
					<div className="flex flex-1 flex-col gap-1.5">
						<Skeleton className="h-3.5 w-28" />
						<Skeleton className="h-3 w-40" />
					</div>
					<Skeleton className="h-8 w-28" />
				</div>
			))}
		</div>
	);
}
