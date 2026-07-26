"use client";

import { api } from "@runway/backend/convex/_generated/api";
import { Badge } from "@runway/ui/components/badge";
import { Button } from "@runway/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@runway/ui/components/card";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@runway/ui/components/empty";
import { Input } from "@runway/ui/components/input";
import { Label } from "@runway/ui/components/label";
import {
	NativeSelect,
	NativeSelectOption,
} from "@runway/ui/components/native-select";
import { Spinner } from "@runway/ui/components/spinner";
import { IconCrossSmall, IconInvite } from "@runway/ui/icons";
import { useQuery } from "convex/react";
import { type FormEvent, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { ProfileAvatar } from "@/features/shared/generated-avatar";
import { authClient } from "@/lib/auth-client";

type BaseRole = "owner" | "admin" | "member";
type InviteRole = "admin" | "member";

// A member's role can be a comma-separated string (or a custom dynamic role). Collapse
// to the strongest base role — matches the app's `memberships.role` projection.
function baseRole(role: string): BaseRole {
	const parts = role.split(",").map((p) => p.trim());
	if (parts.includes("owner")) {
		return "owner";
	}
	if (parts.includes("admin")) {
		return "admin";
	}
	return "member";
}

interface Member {
	id: string;
	role: string;
	user: { name?: string | null; email?: string | null; image?: string | null };
}
interface Invitation {
	email: string;
	id: string;
	role?: string | null;
	status: string;
}
interface FullOrg {
	invitations?: Invitation[];
	members?: Member[];
}

export function MembersView({ workspaceId }: { workspaceId: string }) {
	const currentUser = useQuery(api.auth.getCurrentUser);
	const myEmail = currentUser?.email ?? null;

	const [org, setOrg] = useState<FullOrg | null>(null);
	const [loading, setLoading] = useState(true);
	const [email, setEmail] = useState("");
	const [inviteRole, setInviteRole] = useState<InviteRole>("member");
	const [inviting, setInviting] = useState(false);

	const refetch = useCallback(async () => {
		const { data, error } = await authClient.organization.getFullOrganization({
			query: { organizationId: workspaceId },
		});
		if (error) {
			toast.error(error.message ?? "Could not load members");
		}
		setOrg((data as FullOrg | null) ?? null);
		setLoading(false);
	}, [workspaceId]);

	useEffect(() => {
		refetch();
	}, [refetch]);

	const members = org?.members ?? [];
	const invitations = (org?.invitations ?? []).filter(
		(i) => i.status === "pending"
	);

	// The caller's role in THIS workspace, derived from the member list (correct even
	// for a deep-linked, non-active workspace). owner/admin may manage.
	const myRole = myEmail
		? members.find((m) => m.user.email === myEmail)?.role
		: undefined;
	const canManage = myRole
		? baseRole(myRole) === "owner" || baseRole(myRole) === "admin"
		: false;

	const onInvite = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setInviting(true);
		const { data, error } = await authClient.organization.inviteMember({
			email,
			role: inviteRole,
			organizationId: workspaceId,
		});
		setInviting(false);
		if (error) {
			toast.error(error.message ?? "Could not send invitation");
			return;
		}
		setEmail("");
		// No email provider is wired (dev stub), so surface the accept link directly.
		const invitationId = (data as { id?: string } | null)?.id;
		if (invitationId) {
			const link = `${window.location.origin}/accept-invitation/${invitationId}`;
			try {
				await navigator.clipboard.writeText(link);
				toast.success("Invitation created — accept link copied to clipboard");
			} catch {
				toast.success("Invitation created");
			}
		} else {
			toast.success("Invitation sent");
		}
		await refetch();
	};

	const onChangeRole = async (memberId: string, role: BaseRole) => {
		const { error } = await authClient.organization.updateMemberRole({
			memberId,
			role,
			organizationId: workspaceId,
		});
		if (error) {
			toast.error(error.message ?? "Could not update role");
			return;
		}
		toast.success("Role updated");
		await refetch();
	};

	const onRemove = async (memberId: string) => {
		const { error } = await authClient.organization.removeMember({
			memberIdOrEmail: memberId,
			organizationId: workspaceId,
		});
		if (error) {
			toast.error(error.message ?? "Could not remove member");
			return;
		}
		toast.success("Member removed");
		await refetch();
	};

	const onCancelInvite = async (invitationId: string) => {
		const { error } = await authClient.organization.cancelInvitation({
			invitationId,
		});
		if (error) {
			toast.error(error.message ?? "Could not cancel invitation");
			return;
		}
		toast.success("Invitation cancelled");
		await refetch();
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center py-16">
				<Spinner />
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-6">
			{canManage ? (
				<Card>
					<CardHeader>
						<CardTitle>Invite a teammate</CardTitle>
						<CardDescription>
							They&apos;ll join this workspace once they accept.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form
							className="flex flex-col gap-3 sm:flex-row sm:items-end"
							onSubmit={onInvite}
						>
							<div className="flex flex-1 flex-col gap-1.5">
								<Label htmlFor="invite-email">Email</Label>
								<Input
									autoComplete="off"
									id="invite-email"
									onChange={(e) => setEmail(e.target.value)}
									placeholder="name@company.com"
									required
									type="email"
									value={email}
								/>
							</div>
							<div className="flex flex-col gap-1.5">
								<Label htmlFor="invite-role">Role</Label>
								<NativeSelect
									id="invite-role"
									onChange={(e) => setInviteRole(e.target.value as InviteRole)}
									value={inviteRole}
								>
									<NativeSelectOption value="member">Member</NativeSelectOption>
									<NativeSelectOption value="admin">Admin</NativeSelectOption>
								</NativeSelect>
							</div>
							<Button disabled={inviting || email.length === 0} type="submit">
								<IconInvite />
								{inviting ? "Sending…" : "Send invite"}
							</Button>
						</form>
					</CardContent>
				</Card>
			) : null}

			<Card>
				<CardHeader>
					<CardTitle>Members</CardTitle>
					<CardDescription>
						{members.length} {members.length === 1 ? "person" : "people"} in
						this workspace.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-1">
					{members.map((member) => {
						const name = member.user.name ?? member.user.email ?? "Unknown";
						const role = baseRole(member.role);
						const isSelf = member.user.email === myEmail;
						const editable = canManage && role !== "owner" && !isSelf;
						return (
							<div
								className="flex items-center gap-3 rounded-lg px-2 py-2"
								key={member.id}
							>
								<ProfileAvatar
									image={member.user.image}
									name={name}
									size={36}
								/>
								<div className="min-w-0 flex-1">
									<p className="truncate font-medium text-foreground text-sm">
										{name}
										{isSelf ? (
											<span className="text-muted-foreground"> (you)</span>
										) : null}
									</p>
									<p className="truncate text-muted-foreground text-sm">
										{member.user.email}
									</p>
								</div>
								{editable ? (
									<>
										<NativeSelect
											aria-label={`Role for ${name}`}
											className="w-28"
											onChange={(e) =>
												onChangeRole(member.id, e.target.value as BaseRole)
											}
											value={role}
										>
											<NativeSelectOption value="member">
												Member
											</NativeSelectOption>
											<NativeSelectOption value="admin">
												Admin
											</NativeSelectOption>
										</NativeSelect>
										<Button
											aria-label={`Remove ${name}`}
											onClick={() => onRemove(member.id)}
											size="icon-sm"
											variant="ghost"
										>
											<IconCrossSmall />
										</Button>
									</>
								) : (
									<Badge variant={role === "owner" ? "default" : "secondary"}>
										{role}
									</Badge>
								)}
							</div>
						);
					})}
				</CardContent>
			</Card>

			{invitations.length > 0 ? (
				<Card>
					<CardHeader>
						<CardTitle>Pending invitations</CardTitle>
						<CardDescription>
							Invites that haven&apos;t been accepted yet.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col gap-1">
						{invitations.map((invitation) => (
							<div
								className="flex items-center gap-3 rounded-lg px-2 py-2"
								key={invitation.id}
							>
								<div className="min-w-0 flex-1">
									<p className="truncate text-foreground text-sm">
										{invitation.email}
									</p>
								</div>
								<Badge variant="secondary">
									{baseRole(invitation.role ?? "member")}
								</Badge>
								{canManage ? (
									<Button
										aria-label={`Cancel invitation for ${invitation.email}`}
										onClick={() => onCancelInvite(invitation.id)}
										size="icon-sm"
										variant="ghost"
									>
										<IconCrossSmall />
									</Button>
								) : null}
							</div>
						))}
					</CardContent>
				</Card>
			) : null}

			{members.length === 0 && invitations.length === 0 ? (
				<Empty>
					<EmptyHeader>
						<EmptyTitle>No members yet</EmptyTitle>
						<EmptyDescription>
							Invite teammates to collaborate in this workspace.
						</EmptyDescription>
					</EmptyHeader>
				</Empty>
			) : null}
		</div>
	);
}
