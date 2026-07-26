"use client";

import { useRouter } from "next/navigation";

import SignUpForm from "@/components/sign-up-form";

export default function SignupPage() {
	const router = useRouter();

	return (
		<div className="flex w-full flex-col">
			<div className="text-center">
				<h1 className="text-balance text-foreground text-h1">
					Create your account
				</h1>
				<p className="mt-2 text-pretty text-muted-foreground text-p14">
					Get started in seconds — no credit card required.
				</p>
			</div>
			<SignUpForm onSwitchToSignIn={() => router.push("/login")} />
		</div>
	);
}
