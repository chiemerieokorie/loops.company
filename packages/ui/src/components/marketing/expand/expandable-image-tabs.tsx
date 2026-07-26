"use client";

import { Bot, Brain, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface ExpandableImageTab {
	description: string;
	icon: React.ReactNode;
	label: string;
}

export interface ExpandableImageTabsProps {
	description?: string;
	imageAlt?: string;
	imageUrl?: string;
	tabs?: ExpandableImageTab[];
	title?: string;
	/** "stacked" renders icon-label buttons vertically on the left with description on the right.
	 *  "horizontal" renders text-only buttons horizontally below the image with a description panel.
	 *  "below" renders icon-label buttons below the image in a 3-column grid (Block014 style). */
	variant?: "stacked" | "horizontal" | "below";
}

export function ExpandableImageTabs({
	title = "Ship with confidence using our unified platform",
	description = "Streamline your workflow with tools designed to enhance productivity at every step.",
	tabs = [
		{
			label: "AI Models",
			description: "Switch between LLMs from a unified interface.",
			icon: <Brain className="size-4" />,
		},
		{
			label: "Global Reach",
			description: "Collaborate in real time with teammates across the globe.",
			icon: <Globe className="size-4" />,
		},
		{
			label: "Smart Agent",
			description: "Automate repetitive tasks with context-aware AI agents.",
			icon: <Bot className="size-4" />,
		},
	],
	imageUrl = "https://images.unsplash.com/photo-1723869791623-3b6a012f996b?q=80&w=2340&auto=format&fit=crop",
	imageAlt = "Feature background",
	variant = "below",
}: ExpandableImageTabsProps) {
	const [activeTab, setActiveTab] = useState(0);
	// biome-ignore lint/style/noNonNullAssertion: activeTab is always a valid index (state is initialized to 0 and only set via tab index iteration)
	const active = tabs[activeTab]!;

	const ImagePanel = (
		<div className="mask-b-from-35% mask-b-to-95%">
			<div className="relative overflow-hidden rounded-t-2xl bg-background px-3 pt-3 sm:px-12 sm:pt-12">
				<div
					className="relative z-10 flex aspect-4/5 h-full items-center justify-center overflow-hidden rounded-xl bg-card shadow-black/4 shadow-md ring ring-border sm:aspect-square md:aspect-video"
					style={{ opacity: 1 }}
				>
					<div aria-hidden="true">
						<div className="mb-4 flex gap-2 text-sm">
							<span className="opacity-75">Loyalty program</span>
							<span className="text-muted-foreground">loyalty program</span>
						</div>
						<div className="grid gap-2 text-xs sm:grid-cols-2">
							{[0, 1].map((i) => (
								<div
									className="flex gap-2 rounded-md border border-transparent bg-illustration p-1.5 shadow shadow-black/[0.065] ring-1 ring-border-illustration"
									key={i}
								>
									<div className="w-1 rounded-full bg-primary" />
									<div>
										<div className="font-medium text-sm">Start Date</div>
										<div className="line-clamp-1 text-muted-foreground">
											Feb 6, 2024 at 00:00
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
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
	);

	if (variant === "below") {
		return (
			<section className="@container overflow-hidden bg-background py-24">
				<div className="mx-auto my-1 max-w-6xl px-6">
					<div className="mb-12 grid items-end gap-6 md:mb-20 md:grid-cols-2 lg:px-12">
						<h2 className="text-balance font-semibold text-4xl text-foreground">
							{title}
						</h2>
						<p className="text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>
					{ImagePanel}
					<div className="grid divide-dashed divide-foreground/10 max-sm:divide-y sm:mt-12 sm:grid-cols-3 sm:divide-x lg:px-6">
						{tabs.map((tab, index) => (
							<div className="group" key={tab.label}>
								<div
									className="group relative max-sm:py-6 max-lg:group-last:pr-0 max-lg:group-first:pl-0 sm:px-6"
									style={{ opacity: activeTab === index ? 1 : 0.5 }}
								>
									<button
										className="group flex w-full cursor-pointer items-center gap-3 text-left before:absolute before:inset-0"
										onClick={() => setActiveTab(index)}
										type="button"
									>
										<span
											className={`shrink-0 transition-colors ${activeTab === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
										>
											{tab.icon}
										</span>
										<h3
											className={`font-medium transition-colors group-hover:text-foreground ${activeTab === index ? "text-foreground" : "text-muted-foreground"}`}
										>
											{tab.label}
										</h3>
									</button>
									<p className="mt-3 text-balance text-muted-foreground">
										{tab.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	if (variant === "stacked") {
		return (
			<section className="@container relative overflow-hidden bg-background py-24">
				<div className="mx-auto my-1 max-w-6xl px-6">
					<div className="relative mb-12 grid items-end gap-6 rounded-t-[15px] bg-background sm:mb-20 md:grid-cols-2 lg:gap-12 lg:px-12">
						<h2 className="text-balance font-semibold text-4xl text-foreground">
							{title}
						</h2>
						<p className="text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>
					{ImagePanel}
					<div className="relative grid gap-px sm:grid-cols-2">
						<div className="py-4 max-md:-ml-3 md:px-3 md:px-9 md:py-10">
							{tabs.map((tab, index) => (
								<button
									className="group flex w-fit cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-left duration-200 hover:bg-foreground/5 active:scale-[0.98]"
									data-expanded={activeTab === index}
									key={tab.label}
									onClick={() => setActiveTab(index)}
									type="button"
								>
									<span
										className={`shrink-0 transition-colors ${activeTab === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
									>
										{tab.icon}
									</span>
									<span
										className={`font-medium transition-colors group-hover:text-foreground ${activeTab === index ? "text-foreground" : "text-muted-foreground"}`}
									>
										{tab.label}
									</span>
								</button>
							))}
						</div>
						<div className="max-sm:rounded-l-[15px] sm:py-6 lg:p-12">
							<p className="text-balance text-muted-foreground">
								{active.description}
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}

	// horizontal variant
	return (
		<section className="@container relative overflow-hidden bg-background py-24">
			<div className="mx-auto my-1 max-w-6xl px-6">
				<div className="relative mb-12 grid items-end gap-6 rounded-t-[15px] bg-background sm:mb-20 md:grid-cols-2 lg:gap-12 lg:px-12">
					<h2 className="text-balance font-semibold text-4xl text-foreground">
						{title}
					</h2>
					<p className="text-balance text-lg text-muted-foreground">
						{description}
					</p>
				</div>
				<div className="relative overflow-hidden rounded-2xl bg-background p-3 sm:p-12">
					<div
						className="relative z-10 flex aspect-square h-full items-center justify-center rounded-xl bg-card shadow-black/4 shadow-md ring ring-border md:aspect-video"
						style={{ opacity: 1 }}
					>
						<div aria-hidden="true" className="scale-[0.85]">
							<div className="mb-4 flex gap-2 text-sm">
								<span className="opacity-75">Loyalty program</span>
								<span className="text-muted-foreground">loyalty program</span>
							</div>
							<div className="grid gap-2 text-xs sm:grid-cols-2">
								{[0, 1].map((i) => (
									<div
										className="flex gap-2 rounded-md border border-transparent bg-illustration p-1.5 shadow shadow-black/[0.065] ring-1 ring-border-illustration"
										key={i}
									>
										<div className="w-1 rounded-full bg-primary" />
										<div>
											<div className="font-medium text-sm">Start Date</div>
											<div className="line-clamp-1 text-muted-foreground">
												Feb 6, 2024 at 00:00
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div
						className="absolute inset-0 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-2xl before:border before:border-foreground/10"
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
				<div className="relative py-4 lg:px-9">
					<div className="flex max-lg:-ml-3">
						{tabs.map((tab, index) => (
							<button
								className="group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-left duration-200 hover:bg-foreground/5 active:scale-[0.98]"
								data-expanded={activeTab === index}
								key={tab.label}
								onClick={() => setActiveTab(index)}
								type="button"
							>
								<span
									className={`font-medium text-sm transition-colors group-hover:text-foreground ${activeTab === index ? "text-foreground" : "text-muted-foreground"}`}
								>
									{tab.label}
								</span>
							</button>
						))}
					</div>
					<p className="mt-2 max-w-xl text-balance text-lg text-muted-foreground lg:pl-3">
						{active.description}
					</p>
				</div>
			</div>
		</section>
	);
}
