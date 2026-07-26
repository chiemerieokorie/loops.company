"use client";

import { Button } from "@runway/ui/components/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@runway/ui/components/dialog";
import { Field, FieldGroup, FieldLabel } from "@runway/ui/components/field";
import { Input } from "@runway/ui/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { setActiveWorkspace } from "@/lib/workspace-client";

// Slugify a name into a Better Auth-safe org slug (mirrors the backend's
// `slugifyWorkspace`): lowercase, alnum + single hyphens, no leading/trailing
// hyphen. A random suffix guarantees uniqueness so create never 409s on a clash.
function toSlug(name: string): string {
	const stem =
		name
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/^-+|-+$/g, "")
			.slice(0, 40) || "workspace";
	return `${stem}-${Math.random().toString(36).slice(2, 8)}`;
}

// Create-workspace flow: name → `organization.create` (also mints the owner member,
// which the backend trigger projects into `memberships`) → switch active org +
// re-mint the JWT → land in the new workspace. Controlled by the switcher.
export function CreateWorkspaceDialog({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const router = useRouter();
	const [name, setName] = useState("");
	const [pending, setPending] = useState(false);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const trimmed = name.trim();
		if (!trimmed || pending) {
			return;
		}
		setPending(true);
		try {
			const slug = toSlug(trimmed);
			const { data, error } = await authClient.organization.create({
				name: trimmed,
				slug,
			});
			if (error || !data) {
				toast.error(error?.message ?? "Could not create workspace");
				return;
			}
			await setActiveWorkspace(data.id);
			onOpenChange(false);
			setName("");
			router.push(`/${slug}`);
		} finally {
			setPending(false);
		}
	};

	return (
		<Dialog onOpenChange={onOpenChange} open={open}>
			<DialogContent>
				<form onSubmit={handleSubmit}>
					<DialogHeader>
						<DialogTitle>Create workspace</DialogTitle>
						<DialogDescription>
							A workspace has its own notes, members, and settings.
						</DialogDescription>
					</DialogHeader>
					<FieldGroup className="py-4">
						<Field>
							<FieldLabel htmlFor="workspace-name">Name</FieldLabel>
							<Input
								id="workspace-name"
								onChange={(event) => setName(event.target.value)}
								placeholder="Acme Capital"
								value={name}
							/>
						</Field>
					</FieldGroup>
					<DialogFooter>
						<Button
							onClick={() => onOpenChange(false)}
							type="button"
							variant="ghost"
						>
							Cancel
						</Button>
						<Button disabled={!name.trim() || pending} type="submit">
							{pending ? "Creating…" : "Create workspace"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
