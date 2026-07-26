"use client";

import { Button, buttonVariants } from "@runway/ui/components/button";
import Image from "next/image";
import { useState } from "react";

export interface ExpandableSegmentedTab {
	content: {
		title: string;
		description: string;
	};
	label: string;
}

export interface ExpandableSegmentedProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	imageAlt?: string;
	imageUrl?: string;
	tabs?: ExpandableSegmentedTab[];
	title?: string;
}

export function ExpandableSegmented({
	title = "Ship with confidence using our unified platform",
	description = "Streamline your workflow with tools designed to enhance productivity at every step.",
	tabs = [
		{
			label: "AI Models",
			content: {
				title: "Unified AI Model Access",
				description:
					"Switch between ChatGPT, Claude, and Gemini from a unified interface with seamless provider switching and consistent API responses.",
			},
		},
		{
			label: "Global Reach",
			content: {
				title: "Worldwide Collaboration",
				description:
					"Collaborate in real time with teammates across the globe with low-latency infrastructure and automatic region routing.",
			},
		},
		{
			label: "Smart Agent",
			content: {
				title: "Autonomous Workflows",
				description:
					"Automate repetitive tasks with context-aware AI agents that understand your codebase and trigger actions on your behalf.",
			},
		},
	],
	ctaLabel = "Learn more",
	ctaHref = "#",
	imageUrl = "https://images.unsplash.com/photo-1723869791623-3b6a012f996b?q=80&w=2340&auto=format&fit=crop",
	imageAlt = "Feature background",
}: ExpandableSegmentedProps) {
	const [activeTab, setActiveTab] = useState(0);
	// biome-ignore lint/style/noNonNullAssertion: activeTab is always a valid index (state is initialized to 0 and only set via tab index iteration)
	const active = tabs[activeTab]!;

	// Each button is ~89px wide (padding accounts for the 4px inset on each side)
	const PILL_WIDTH = 89;
	const PILL_INSET = 4;

	return (
		<section className="@container relative overflow-hidden bg-background py-24">
			<div className="mx-auto my-1 max-w-6xl px-6">
				<div className="grid items-end gap-6 md:grid-cols-2 lg:gap-12 lg:px-12">
					<h2 className="text-balance font-semibold text-4xl text-foreground">
						{title}
					</h2>
					<p className="text-balance text-lg text-muted-foreground">
						{description}
					</p>
				</div>
				<div className="mt-6 grid items-end gap-12 md:mt-8 md:grid-cols-2 lg:px-12">
					{/* Segmented control */}
					<div className="relative flex w-fit rounded-xl not-dark:bg-muted p-1 ring ring-muted dark:ring-border">
						{/* Sliding pill indicator */}
						<div
							aria-hidden="true"
							className="absolute inset-y-1 rounded-lg bg-illustration shadow transition-[left] duration-200 ease-in-out dark:bg-muted"
							style={{
								left: `${PILL_INSET + activeTab * PILL_WIDTH}px`,
								width: `${PILL_WIDTH}px`,
							}}
						/>
						{tabs.map((tab, index) => (
							<Button
								className="group relative cursor-pointer rounded-lg px-3 duration-200 active:scale-[0.98]"
								data-state={activeTab === index ? "expanded" : "collapsed"}
								key={tab.label}
								onClick={() => setActiveTab(index)}
								style={{ width: `${PILL_WIDTH}px` }}
								type="button"
								variant="ghost"
							>
								<div className="flex h-8 items-center justify-center duration-200">
									<span
										className={`font-medium text-sm transition-colors group-hover:text-foreground ${
											activeTab === index
												? "text-foreground"
												: "text-muted-foreground"
										}`}
									>
										{tab.label}
									</span>
								</div>
							</Button>
						))}
					</div>

					{/* CTA */}
					<div className="py-1 max-md:row-start-1">
						<a
							className={buttonVariants({ variant: "default" })}
							href={ctaHref}
						>
							{ctaLabel}
						</a>
					</div>
				</div>

				{/* Fade-masked image preview */}
				<div className="mask-b-from-35% mask-b-to-95% mt-6 md:mt-20">
					<div className="relative overflow-hidden rounded-t-2xl bg-background px-3 pt-3 sm:px-12 sm:pt-12">
						{/* Illustration: two overlapping card panels */}
						<div
							className="relative z-10 flex aspect-square h-full items-center justify-center -space-x-6 pt-6 sm:-space-x-20 md:aspect-video"
							style={{ opacity: 1 }}
						>
							<div className="h-full basis-1/2 translate-y-16 rounded-2xl bg-card shadow-black/25 shadow-xl ring ring-border" />
							<div className="relative h-full basis-1/2 rounded-2xl bg-illustration shadow-black/25 shadow-xl ring ring-black/25 ring-border" />
						</div>
						{/* Dithered background image */}
						<div
							className="absolute inset-0 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-t-2xl before:border before:border-foreground/10"
							style={{ opacity: 1 }}
						>
							<div className="dither absolute inset-0 opacity-25 dark:opacity-30">
								<Image
									alt={imageAlt}
									className="size-full object-cover opacity-50"
									fill
									loading="lazy"
									src={imageUrl}
									unoptimized
								/>
							</div>
							<Image
								alt={imageAlt}
								className="size-full object-cover opacity-50"
								fill
								loading="lazy"
								src={imageUrl}
								unoptimized
							/>
						</div>
					</div>
				</div>

				{/* Active tab description */}
				<div className="relative grid gap-px pt-6 sm:grid-cols-2 md:pt-12 lg:px-12">
					<h3 className="font-medium text-foreground text-lg">
						{active.content.title}
					</h3>
					<p className="max-w-sm text-balance text-muted-foreground">
						{active.content.description}
					</p>
				</div>
			</div>
		</section>
	);
}
