"use client";

import { Button, buttonVariants } from "@runway/ui/components/button";
import { IconInvite } from "@runway/ui/icons";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

// Consumes an organization-invite link, rendered in the shared `(auth)` layout.
// Acceptance requires the user to be signed in with the invited email.
export default function AcceptInvitationPage() {
	const { invitationId } = useParams<{ invitationId: string }>();
	const router = useRouter();
	const [accepting, setAccepting] = useState(false);

	const onAccept = async () => {
		setAccepting(true);
		const { error } = await authClient.organization.acceptInvitation({
			invitationId,
		});
		if (error) {
			toast.error(error.message ?? "Could not accept invitation");
			setAccepting(false);
			return;
		}
		router.push("/dashboard");
	};

	return (
		<div className="flex w-full flex-col items-center text-center">
			<span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
				<IconInvite className="size-5" />
			</span>
			<h1 className="mt-4 text-balance text-foreground text-h1">
				You're invited to a workspace
			</h1>

			<Authenticated>
				<p className="mt-2 text-pretty text-muted-foreground text-p14">
					Accept to join. You'll need to be signed in with the email the invite
					was sent to.
				</p>
				<Button
					className="mt-6 w-full justify-center"
					disabled={accepting}
					onClick={onAccept}
					size="lg"
					type="button"
				>
					{accepting ? "Accepting…" : "Accept invitation"}
				</Button>
			</Authenticated>

			<Unauthenticated>
				<p className="mt-2 text-pretty text-muted-foreground text-p14">
					Sign in with the invited email to accept.
				</p>
				<Link
					className={buttonVariants({
						size: "lg",
						className: "mt-6 w-full justify-center",
					})}
					href="/"
				>
					Sign in to accept
				</Link>
			</Unauthenticated>

			<AuthLoading>
				<p className="mt-2 text-muted-foreground text-p14">Loading…</p>
			</AuthLoading>
		</div>
	);
}
