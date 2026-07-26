"use client";

import { Bot, Brain, Hourglass, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface ExpandableTabBorderTab {
	content: {
		title: string;
		description: string;
		ctaLabel?: string;
		ctaHref?: string;
	};
	icon: React.ReactNode;
	label: string;
}

export interface ExpandableTabBorderProps {
	badges?: string[];
	imageAlt?: string;
	imageUrl?: string;
	quote?: string;
	quoteAuthor?: string;
	quoteAuthorImage?: string;
	quoteAuthorRole?: string;
	tabs?: ExpandableTabBorderTab[];
}

export function ExpandableTabBorder({
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
	quote = '"Looks really good. Did you design in code or Figma first?"',
	quoteAuthor = "Shadcn",
	quoteAuthorRole = "Creator of Shadcn UI",
	quoteAuthorImage = "https://avatars.githubusercontent.com/u/124599?v=4",
}: ExpandableTabBorderProps) {
	const [activeTab, setActiveTab] = useState(0);
	// biome-ignore lint/style/noNonNullAssertion: activeTab is always a valid index (state is initialized to 0 and only set via tab index iteration)
	const active = tabs[activeTab]!;

	return (
		<section className="@container overflow-hidden bg-background py-24">
			<h2 className="sr-only">features</h2>
			<div className="border-foreground/10 border-y border-dashed">
				<div className="mx-auto max-w-5xl px-4 sm:px-14">
					<div className="relative flex">
						{tabs.map((tab, index) => (
							<button
								className="group cursor-pointer px-4 duration-200 active:scale-[0.98]"
								data-state={activeTab === index ? "expanded" : "collapsed"}
								key={tab.label}
								onClick={() => setActiveTab(index)}
								type="button"
							>
								{activeTab === index && (
									<div
										aria-hidden="true"
										className="absolute -bottom-px h-px before:absolute before:inset-x-4 before:inset-y-0 before:rounded-full before:bg-foreground"
									/>
								)}
								<div className="flex items-center justify-center gap-3 py-4 duration-200">
									<span
										className={`shrink-0 transition-colors ${activeTab === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
									>
										{tab.icon}
									</span>
									<span
										className={`font-medium text-sm transition-colors group-hover:text-foreground ${activeTab === index ? "text-foreground" : "text-muted-foreground"}`}
									>
										{tab.label}
									</span>
								</div>
							</button>
						))}
					</div>
				</div>
			</div>
			<div className="mx-auto my-1 max-w-5xl px-2 sm:px-6">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="relative p-6 sm:p-12">
						<div
							aria-hidden="true"
							className="mask-y-from-80% pointer-events-none absolute -inset-x-1 -inset-y-56 border-foreground/10 border-x border-dashed"
						/>
						<div className="flex h-full flex-col gap-12">
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
					<div className="relative h-fit">
						<div
							aria-hidden="true"
							className="mask-y-from-80% pointer-events-none absolute -inset-x-1 -inset-y-56 border-foreground/10 border-x border-dashed"
						/>
						<div className="relative aspect-7/8 overflow-hidden rounded-xl">
							<div className="absolute inset-0" style={{ opacity: 1 }}>
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
			<div
				aria-hidden="true"
				className="h-px border-foreground/10 border-t border-dashed"
			/>
			<div className="mx-auto max-w-5xl px-2 @2xl:py-12 py-6 sm:px-6">
				<div className="grid @2xl:grid-cols-2 @2xl:gap-6 gap-12 @2xl:px-12 px-6">
					<div className="flex flex-col justify-end @2xl:pl-12">
						<div className="relative mt-auto max-w-xl">
							<p className="max-w-xs text-balance text-foreground">{quote}</p>
							<div className="mt-4 flex items-center gap-2">
								<div className="relative size-10 overflow-hidden rounded-lg shadow before:absolute before:inset-0 before:rounded-lg before:border before:border-foreground/10">
									<Image
										alt={quoteAuthor}
										decoding="async"
										height={56}
										loading="lazy"
										src={quoteAuthorImage}
										unoptimized
										width={56}
									/>
								</div>
								<div className="space-y-0.5">
									<p className="font-medium text-foreground text-sm">
										{quoteAuthor}
									</p>
									<span className="block text-muted-foreground text-xs">
										{quoteAuthorRole}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
