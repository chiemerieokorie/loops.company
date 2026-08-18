import { Badge } from "@runway/ui/components/badge";
import { buttonVariants } from "@runway/ui/components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@runway/ui/components/card";
import { IconCheckmark1Small } from "@runway/ui/icons";
import { cn } from "@runway/ui/lib/utils";
import Link from "next/link";
import { Section } from "../components/section";

// Placeholder tiers that mirror the app's actual plans (free / pro / team — see
// convex/lib/plans.ts). Swap the prices and copy for your product.
const plans = [
	{
		name: "Free",
		price: "$0",
		period: "/mo",
		description: "For individuals and small teams getting started",
		popular: false,
		features: [
			"1 workspace",
			"Up to 2 teammates",
			"3 documents & 10 notes",
			"Community support",
		],
	},
	{
		name: "Pro",
		price: "$20",
		period: "/mo",
		description: "For growing teams that need more room and AI",
		popular: true,
		features: [
			"Everything in Free",
			"Up to 10 teammates",
			"100 documents & 500 notes",
			"Built-in AI assistant",
			"Priority support",
		],
	},
	{
		name: "Team",
		price: "$60",
		period: "/mo",
		description: "For organizations that need scale and control",
		popular: false,
		features: [
			"Everything in Pro",
			"Up to 50 teammates",
			"Unlimited documents & notes",
			"Advanced roles & permissions",
			"SSO & audit log",
			"Dedicated support",
		],
	},
];

export function PricingSection() {
	return (
		<Section headline="Pricing that scales with your team." id="pricing">
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
				{plans.map((plan) => (
					<Card
						className={cn("h-full", plan.popular && "ring-2 ring-primary")}
						key={plan.name}
					>
						<CardHeader>
							<div className="flex items-center justify-between">
								<CardTitle className="text-xl">{plan.name}</CardTitle>
								{plan.popular && <Badge>Most popular</Badge>}
							</div>
							<p className="mt-1">
								<span className="text-foreground">{plan.price}</span>
								<span className="text-muted-foreground">{plan.period}</span>
							</p>
							<CardDescription className="mt-2">
								{plan.description}
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-1 flex-col gap-6">
							<ul className="flex flex-col gap-2 text-muted-foreground">
								{plan.features.map((feature) => (
									<li className="flex gap-3" key={feature}>
										<IconCheckmark1Small className="size-4 shrink-0 translate-y-0.5 text-foreground" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
							<Link
								className={buttonVariants({
									className: "mt-auto w-full",
									size: "lg",
									variant: plan.popular ? "default" : "secondary",
								})}
								href="/contact"
							>
								Get started
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
