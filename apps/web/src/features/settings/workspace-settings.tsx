"use client";

import { api } from "@runway/backend/convex/_generated/api";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@runway/ui/components/alert-dialog";
import { Button } from "@runway/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@runway/ui/components/card";
import { Input } from "@runway/ui/components/input";
import { Label } from "@runway/ui/components/label";
import { Spinner } from "@runway/ui/components/spinner";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { type FormEvent, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

type BaseRole = "owner" | "admin" | "member";

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
	role: string;
	user: { email?: string | null };
}
interface FullOrg {
	members?: Member[];
	name?: string;
	slug?: string;
}

// Re-mint the Convex JWT so its slug claim tracks the change immediately (same reason
// as setActiveWorkspace — the proxy reads the slug off the cookie). `throw: false` so a
// transient mint failure doesn't break navigation.
async function remintToken() {
	await authClient.convex.token({ fetchOptions: { throw: false } });
}

export function WorkspaceSettings({ workspaceId }: { workspaceId: string }) {
	const currentUser = useQuery(api.auth.getCurrentUser);
	const myEmail = currentUser?.email ?? null;
	const router = useRouter();

	const [org, setOrg] = useState<FullOrg | null>(null);
	const [loading, setLoading] = useState(true);
	const [name, setName] = useState("");
	const [slug, setSlug] = useState("");
	const [saving, setSaving] = useState(false);
	const [leaving, setLeaving] = useState(false);
	const [deleting, setDeleting] = useState(false);

	const refetch = useCallback(async () => {
		const { data, error } = await authClient.organization.getFullOrganization({
			query: { organizationId: workspaceId },
		});
		if (error) {
			toast.error(error.message ?? "Could not load workspace");
		}
		const full = (data as FullOrg | null) ?? null;
		setOrg(full);
		setName(full?.name ?? "");
		setSlug(full?.slug ?? "");
		setLoading(false);
	}, [workspaceId]);

	useEffect(() => {
		refetch();
	}, [refetch]);

	const myRole = myEmail
		? org?.members?.find((m) => m.user.email === myEmail)?.role
		: undefined;
	const role = myRole ? baseRole(myRole) : "member";
	const canManage = role === "owner" || role === "admin";
	const isOwner = role === "owner";

	const onSave = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSaving(true);
		const nextSlug = slug.trim();
		const { error } = await authClient.organization.update({
			data: { name: name.trim(), slug: nextSlug },
			organizationId: workspaceId,
		});
		setSaving(false);
		if (error) {
			toast.error(error.message ?? "Could not save changes");
			return;
		}
		toast.success("Workspace updated");
		const slugChanged = nextSlug !== org?.slug;
		await refetch();
		if (slugChanged) {
			// The workspace URL changed — re-mint the token and move to the new slug.
			await remintToken();
			router.replace(`/${nextSlug}/settings`);
		}
	};

	const onLeave = async () => {
		setLeaving(true);
		const { error } = await authClient.organization.leave({
			organizationId: workspaceId,
		});
		if (error) {
			setLeaving(false);
			toast.error(error.message ?? "Could not leave workspace");
			return;
		}
		await remintToken();
		router.push("/dashboard");
	};

	const onDelete = async () => {
		setDeleting(true);
		const { error } = await authClient.organization.delete({
			organizationId: workspaceId,
		});
		if (error) {
			setDeleting(false);
			toast.error(error.message ?? "Could not delete workspace");
			return;
		}
		await remintToken();
		router.push("/dashboard");
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
			<Card>
				<CardHeader>
					<CardTitle>General</CardTitle>
					<CardDescription>Your workspace name and URL slug.</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="flex flex-col gap-4" onSubmit={onSave}>
						<div className="flex flex-col gap-1.5">
							<Label htmlFor="ws-name">Name</Label>
							<Input
								disabled={!canManage}
								id="ws-name"
								onChange={(e) => setName(e.target.value)}
								required
								value={name}
							/>
						</div>
						<div className="flex flex-col gap-1.5">
							<Label htmlFor="ws-slug">Slug</Label>
							<Input
								disabled={!canManage}
								id="ws-slug"
								onChange={(e) => setSlug(e.target.value)}
								required
								value={slug}
							/>
							<p className="text-muted-foreground text-xs">
								Used in your workspace URL: /{slug || "your-slug"}
							</p>
						</div>
						{canManage ? (
							<div>
								<Button
									disabled={
										saving || (name === org?.name && slug === org?.slug)
									}
									type="submit"
								>
									{saving ? "Saving…" : "Save changes"}
								</Button>
							</div>
						) : (
							<p className="text-muted-foreground text-sm">
								Only owners and admins can edit workspace settings.
							</p>
						)}
					</form>
				</CardContent>
			</Card>

			<Card className="border-destructive/30">
				<CardHeader>
					<CardTitle className="text-destructive">Danger zone</CardTitle>
					<CardDescription>
						{isOwner
							? "Deleting a workspace removes all of its members and data. This cannot be undone."
							: "Leave this workspace. You'll lose access until you're invited again."}
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2">
					<AlertDialog>
						<AlertDialogTrigger
							render={
								<Button disabled={leaving} variant="outline">
									{leaving ? "Leaving…" : "Leave workspace"}
								</Button>
							}
						/>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Leave this workspace?</AlertDialogTitle>
								<AlertDialogDescription>
									You&apos;ll lose access to {org?.name ?? "this workspace"}{" "}
									until someone invites you back.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction onClick={onLeave}>Leave</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>

					{isOwner ? (
						<AlertDialog>
							<AlertDialogTrigger
								render={
									<Button disabled={deleting} variant="destructive">
										{deleting ? "Deleting…" : "Delete workspace"}
									</Button>
								}
							/>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Delete this workspace?</AlertDialogTitle>
									<AlertDialogDescription>
										This permanently removes {org?.name ?? "this workspace"},
										its members, and all of its data. This cannot be undone.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancel</AlertDialogCancel>
									<AlertDialogAction onClick={onDelete}>
										Delete workspace
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					) : null}
				</CardContent>
			</Card>
		</div>
	);
}
