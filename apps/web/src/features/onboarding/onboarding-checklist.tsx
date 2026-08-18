"use client";

import { api } from "@runway/backend/convex/_generated/api";
import { Button } from "@runway/ui/components/button";
import {
	type CentralIconProps,
	IconArrowRight,
	IconBubbleSparkle,
	IconCrossSmall,
	IconFileText,
	IconPeople,
	IconRocket,
} from "@runway/ui/icons";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import type { Route } from "next";
import Link from "next/link";
import type { FC } from "react";

interface Step {
	description: string;
	href: Route;
	icon: FC<CentralIconProps>;
	title: string;
}

// First-run getting-started guide for a new workspace. Rendered at the top of the
// dashboard overview; it shows ONLY until the user completes it (clicks through the
// steps and dismisses) or dismisses it outright — state persists per-user via
// `userPreferences.completeOnboarding`. Steps deep-link to the same destinations as the
// permanent quick-action cards, but framed as an onboarding path.
export function OnboardingChecklist({
	workspaceSlug,
}: {
	workspaceSlug: string;
}) {
	// Skip until the Convex client is authed: this mounts on the dashboard and would
	// otherwise fire before the token lands on a fresh load / mid-refresh.
	const { isAuthenticated } = useConvexAuth();
	const state = useQuery(
		api.userPreferences.getOnboardingState,
		isAuthenticated ? {} : "skip"
	);
	const complete = useMutation(
		api.userPreferences.completeOnboarding
	).withOptimisticUpdate((store) => {
		store.setQuery(
			api.userPreferences.getOnboardingState,
			{},
			{
				completed: true,
			}
		);
	});

	// Hide while loading (undefined) and once completed — never flash then vanish.
	if (!state || state.completed) {
		return null;
	}

	const ws: `/${string}` = `/${workspaceSlug}`;
	const steps: Step[] = [
		{
			description: "Start a collaborative, real-time document.",
			href: `${ws}/documents` as Route,
			icon: IconFileText,
			title: "Create your first document",
		},
		{
			description: "Add teammates to your workspace and set roles.",
			href: `${ws}/members` as Route,
			icon: IconPeople,
			title: "Invite your team",
		},
		{
			description: "Draft, summarize, and answer with AI.",
			href: `${ws}/assistant` as Route,
			icon: IconBubbleSparkle,
			title: "Meet the assistant",
		},
	];

	return (
		<div className="flex flex-col gap-4 rounded-xl bg-muted p-4">
			<div className="flex items-start justify-between gap-3">
				<div className="flex items-center gap-3">
					<span className="flex size-9 items-center justify-center rounded-md bg-background text-foreground">
						<IconRocket className="size-4" />
					</span>
					<div className="flex flex-col">
						<span className="font-medium text-foreground text-sm">
							Welcome — let’s get you set up
						</span>
						<span className="text-muted-foreground text-xs">
							A few quick steps to get the most out of your workspace.
						</span>
					</div>
				</div>
				<Button
					aria-label="Dismiss getting started"
					onClick={() => complete()}
					size="icon"
					variant="ghost"
				>
					<IconCrossSmall />
				</Button>
			</div>

			<ul className="flex flex-col gap-1.5">
				{steps.map((step) => (
					<li key={step.href}>
						<Link
							className="flex items-center gap-3 rounded-lg bg-background px-3 py-2.5 transition-colors hover:bg-background/60"
							href={step.href}
						>
							<span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
								<step.icon className="size-4" />
							</span>
							<div className="flex min-w-0 flex-1 flex-col">
								<span className="truncate font-medium text-foreground text-sm">
									{step.title}
								</span>
								<span className="truncate text-muted-foreground text-xs">
									{step.description}
								</span>
							</div>
							<IconArrowRight className="size-4 shrink-0 text-muted-foreground" />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
