"use client";

import { useRouter } from "next/navigation";

import SignInForm from "@/components/sign-in-form";

export default function LoginPage() {
	const router = useRouter();

	return (
		<div className="flex w-full flex-col">
			<div className="text-center">
				<h1 className="text-balance text-foreground text-h1">Welcome back</h1>
				<p className="mt-2 text-pretty text-muted-foreground text-p14">
					Sign in to your account to continue.
				</p>
			</div>
			<SignInForm onSwitchToSignUp={() => router.push("/signup")} />
		</div>
	);
}
