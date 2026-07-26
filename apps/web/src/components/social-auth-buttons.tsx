"use client";

import { Button } from "@runway/ui/components/button";
import { Separator } from "@runway/ui/components/separator";
import { IconFacebook, IconGoogle } from "@runway/ui/icons";
import { cn } from "@runway/ui/lib/utils";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

type SocialProvider = "google" | "facebook";

const LABELS: Record<SocialProvider, string> = {
	google: "Google",
	facebook: "Facebook",
};

// Social sign-in options shown beneath the email/password form on login & signup.
// `signIn.social` is built into the Better Auth client core — no extra plugin. Each
// provider is only wired on the backend when its secrets are set (see convex/auth.ts),
// so an unconfigured provider surfaces a toast instead of silently doing nothing.
export function SocialAuthButtons({
	callbackURL = "/dashboard",
	className,
}: {
	callbackURL?: string;
	className?: string;
}) {
	const signInWith = (provider: SocialProvider) =>
		authClient.signIn.social(
			{ provider, callbackURL },
			{
				onError: (error) => {
					toast.error(
						error.error.message ||
							`${LABELS[provider]} sign-in isn't available right now`
					);
				},
			}
		);

	return (
		<div className={cn("flex flex-col gap-4", className)}>
			<div className="flex items-center gap-3">
				<Separator className="flex-1" />
				<span className="text-muted-foreground text-p13">or continue with</span>
				<Separator className="flex-1" />
			</div>
			<div className="grid grid-cols-2 gap-2">
				<Button
					className="justify-center"
					onClick={() => signInWith("google")}
					type="button"
					variant="outline"
				>
					<IconGoogle />
					Google
				</Button>
				<Button
					className="justify-center"
					onClick={() => signInWith("facebook")}
					type="button"
					variant="outline"
				>
					<IconFacebook />
					Facebook
				</Button>
			</div>
		</div>
	);
}
