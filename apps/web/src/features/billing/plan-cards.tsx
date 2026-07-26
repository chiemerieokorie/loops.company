"use client";

import { Button } from "@runway/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@runway/ui/components/card";
import { IconCheckmark1Small } from "@runway/ui/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

// The upgrade chooser for free workspaces. Plans/features are display copy; the
// authoritative price lives in Stripe (resolved by lookup key at checkout), so the
// exact total is confirmed on the checkout step. A monthly/annual toggle picks the
// interval; "Upgrade" routes to the embedded checkout.
//
// Edit the tiers/copy to match your product. The plan `key`s must match the paid
// plans in convex/lib/billingPlans.ts (`pro`, `team`).

type Interval = "monthly" | "annual";

const PLANS = [
	{
		key: "pro",
		name: "Pro",
		blurb: "For individuals who need the full toolkit.",
		features: [
			"Everything in Free",
			"Advanced analytics",
			"Priority support",
			"Custom integrations",
		],
	},
	{
		key: "team",
		name: "Team",
		blurb: "For teams collaborating across workspaces.",
		features: [
			"Everything in Pro",
			"Unlimited team members",
			"SSO & audit logs",
			"Dedicated support",
		],
	},
] as const;

export function PlanCards({ workspaceSlug }: { workspaceSlug: string }) {
	const router = useRouter();
	const [interval, setInterval] = useState<Interval>("monthly");

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h2 className="font-medium text-base">Upgrade your workspace</h2>
				<div className="inline-flex rounded-md bg-muted p-0.5">
					{(["monthly", "annual"] as const).map((value) => (
						<Button
							aria-pressed={interval === value}
							className={
								interval === value
									? "h-auto rounded-[6px] bg-primary px-3 py-1 text-primary-foreground text-sm hover:bg-primary/90"
									: "h-auto rounded-[6px] px-3 py-1 text-muted-foreground text-sm hover:bg-transparent hover:text-foreground"
							}
							key={value}
							onClick={() => setInterval(value)}
							size="sm"
							type="button"
							variant="ghost"
						>
							{value === "monthly" ? "Monthly" : "Annual"}
						</Button>
					))}
				</div>
			</div>

			<div className="grid gap-2 sm:grid-cols-2">
				{PLANS.map((plan) => (
					<Card key={plan.key}>
						<CardHeader>
							<CardTitle className="font-medium">{plan.name}</CardTitle>
							<CardDescription>{plan.blurb}</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="flex flex-col gap-2">
								{plan.features.map((feature) => (
									<li
										className="flex items-center gap-2 text-muted-foreground text-sm"
										key={feature}
									>
										<IconCheckmark1Small className="size-4 text-primary" />
										{feature}
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button
								className="w-full"
								onClick={() =>
									router.push(
										`/${workspaceSlug}/billing/checkout?plan=${plan.key}&interval=${interval}`
									)
								}
								type="button"
							>
								Upgrade to {plan.name}
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
			<p className="text-muted-foreground text-xs">
				Billed {interval === "monthly" ? "monthly" : "annually"}. Your exact
				total is shown at checkout.
			</p>
		</div>
	);
}
