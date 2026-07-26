"use client";

import { Bot, Brain, Hourglass, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface ExpandableCardTab {
	content: {
		title: string;
		description: string;
		ctaLabel?: string;
		ctaHref?: string;
	};
	icon: React.ReactNode;
	label: string;
}

export interface ExpandableCardTabsProps {
	badges?: string[];
	imageAlt?: string;
	imageUrl?: string;
	tabs?: ExpandableCardTab[];
}

export function ExpandableCardTabs({
	tabs = [
		{
			label: "AI Models",
			icon: <Brain className="size-4" />,
			content: {
				title: "Accelerate development with AI-powered assistance",
				description:
					"Switch between GPT, Claude, and Gemini from a unified interface with seamless provider switching.",
				ctaLabel: "Learn more",
				ctaHref: "#",
			},
		},
		{
			label: "Smart Agent",
			icon: <Bot className="size-4" />,
			content: {
				title: "Automate your workflow with intelligent agents",
				description:
					"Automate repetitive tasks with context-aware AI agents that understand your codebase.",
				ctaLabel: "Learn more",
				ctaHref: "#",
			},
		},
	],
	badges = ["SOC 2", "ISO 27001", "GDPR"],
	imageUrl = "https://images.unsplash.com/photo-1600223260976-32a509b23602?q=80&w=2340&auto=format&fit=crop",
	imageAlt = "Feature background",
}: ExpandableCardTabsProps) {
	const [activeTab, setActiveTab] = useState(0);
	// biome-ignore lint/style/noNonNullAssertion: activeTab is always a valid index (state is initialized to 0 and only set via tab index iteration)
	const active = tabs[activeTab]!;

	return (
		<section className="@container overflow-hidden bg-background py-24">
			<h2 className="sr-only">features</h2>
			<div className="mx-auto max-w-5xl px-2 md:px-6">
				<div className="grid gap-px rounded-2xl bg-foreground/10 p-px md:grid-cols-2">
					<div className="relative grid grid-rows-[auto_1fr] rounded-[15px] bg-background p-6 sm:p-12">
						<div className="flex gap-2">
							{tabs.map((tab, index) => (
								<button
									className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg px-3.5 shadow-sm ring ring-border duration-200 hover:ring-foreground/10 active:scale-[0.98]"
									data-state={activeTab === index ? "expanded" : "collapsed"}
									key={tab.label}
									onClick={() => setActiveTab(index)}
									style={{
										background:
											activeTab === index
												? "var(--color-illustration)"
												: undefined,
										boxShadow:
											activeTab === index
												? "0 1px 3px rgba(0,0,0,0.04)"
												: undefined,
									}}
									type="button"
								>
									<span
										className={`shrink-0 transition-colors ${activeTab === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
									>
										{tab.icon}
									</span>
									<span
										className={`font-medium text-sm transition-colors ${activeTab === index ? "text-foreground" : "text-muted-foreground"}`}
									>
										{tab.label}
									</span>
								</button>
							))}
						</div>
						<div className="mt-12 flex flex-col gap-16">
							<div className="max-w-sm text-balance">
								<h3 className="font-medium text-4xl text-foreground">
									{active.content.title}
								</h3>
								<p className="my-6 text-muted-foreground">
									{active.content.description}
								</p>
								{active.content.ctaLabel && (
									<a
										className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
										href={active.content.ctaHref ?? "#"}
									>
										{active.content.ctaLabel}{" "}
										<span className="ml-0.5 block size-0 border-y-4 border-y-transparent border-l-4 border-l-foreground/50" />
									</a>
								)}
							</div>
							<div className="mt-auto max-w-sm">
								<ul className="mt-auto space-y-3 pt-8 text-muted-foreground text-sm">
									{badges.map((badge) => (
										<li className="flex items-center gap-3" key={badge}>
											<ShieldCheck className="size-4" />
											<span className="font-medium text-foreground">
												{badge}
											</span>
										</li>
									))}
									<li className="flex items-center gap-3">
										<Hourglass className="size-4 text-muted-foreground" />
										<span>
											<span className="font-medium text-foreground">99.9%</span>{" "}
											uptime
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="relative aspect-3/4 overflow-hidden rounded-[15px] bg-background">
							<div className="absolute inset-0" style={{ opacity: 1 }}>
								<div className="absolute inset-0 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[15px] before:border before:border-foreground/10">
									<div className="dither absolute inset-0 opacity-65 dark:opacity-35">
										<Image
											alt={imageAlt}
											className="size-full object-cover"
											fill
											loading="lazy"
											src={imageUrl}
											unoptimized
										/>
									</div>
									<Image
										alt={imageAlt}
										className="size-full object-cover opacity-65 dark:opacity-35"
										fill
										loading="lazy"
										src={imageUrl}
										unoptimized
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
