import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@runway/ui/components/card";
import {
	IconBubbleSparkle,
	IconFileText,
	IconPeople,
	IconPlusMedium,
} from "@runway/ui/icons";
import type { ComponentType } from "react";
import { Section } from "../components/section";

interface Step {
	description: string;
	icon: ComponentType<{ className?: string }>;
	title: string;
}

const STEPS: Step[] = [
	{
		icon: IconPlusMedium,
		title: "Create your workspace",
		description:
			"Spin up a workspace for your team in seconds — no setup, no configuration to wrangle.",
	},
	{
		icon: IconPeople,
		title: "Invite your team",
		description:
			"Add teammates and assign roles. Everyone works from the same source of truth.",
	},
	{
		icon: IconFileText,
		title: "Bring your work together",
		description:
			"Create documents and notes your whole team can edit in real time, all in one place.",
	},
	{
		icon: IconBubbleSparkle,
		title: "Move faster with AI",
		description:
			"Let the built-in assistant draft, summarize, and answer as you go — grounded in your context.",
	},
];

export function HowItWorksSection() {
	return (
		<Section
			eyebrow="How it works"
			headline="Get your team up and running in minutes."
			id="how-it-works"
			subheadline={
				<p>
					No setup, no migration. Create a workspace, invite your team, and
					start collaborating today.
				</p>
			}
		>
			<ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
				{STEPS.map((step, i) => (
					<li key={step.title}>
						<Card className="h-full">
							<CardContent className="flex flex-col gap-3">
								<div className="flex items-center justify-between">
									<step.icon className="size-5 text-foreground" />
									<span className="text-muted-foreground text-sm tabular-nums">
										{String(i + 1).padStart(2, "0")}
									</span>
								</div>
								<div className="flex flex-col gap-1.5">
									<CardTitle>{step.title}</CardTitle>
									<CardDescription>{step.description}</CardDescription>
								</div>
							</CardContent>
						</Card>
					</li>
				))}
			</ol>
		</Section>
	);
}
