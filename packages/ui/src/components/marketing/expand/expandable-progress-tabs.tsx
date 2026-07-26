"use client";

import { Hourglass, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface ExpandableProgressTab {
	content: {
		title: string;
		description: string;
		ctaLabel?: string;
		ctaHref?: string;
	};
	duration?: number;
	label: string;
}

export interface ExpandableProgressTabsProps {
	autoplay?: boolean;
	badges?: string[];
	imageAlt?: string;
	imageUrl?: string;
	quote?: string;
	quoteAuthor?: string;
	quoteAuthorImage?: string;
	quoteAuthorRole?: string;
	tabs?: ExpandableProgressTab[];
}

const CIRCUMFERENCE = 62.831_853_071_795_86;

export function ExpandableProgressTabs({
	tabs = [
		{
			label: "AI Models",
			duration: 6000,
			content: {
				title: "Build faster with intelligent code completion",
				description:
					"Our AI understands your codebase context and suggests relevant completions, helping you write better code in less time.",
				ctaLabel: "Learn more",
				ctaHref: "#",
			},
		},
		{
			label: "Smart Agent",
			duration: 6000,
			content: {
				title: "Automate workflows with intelligent agents",
				description:
					"Context-aware agents that understand your project and handle repetitive tasks autonomously.",
				ctaLabel: "Learn more",
				ctaHref: "#",
			},
		},
		{
			label: "Workflows",
			duration: 6000,
			content: {
				title: "Design and ship complex automations",
				description:
					"Chain actions together with a visual workflow builder backed by reliable execution.",
				ctaLabel: "Learn more",
				ctaHref: "#",
			},
		},
	],
	autoplay = true,
	imageUrl = "https://images.unsplash.com/photo-1600223260976-32a509b23602?q=80&w=2340&auto=format&fit=crop",
	imageAlt = "Feature background",
	badges = ["SOC 2", "ISO 27001", "GDPR"],
	quote = '"Looks really good. Did you design in code or Figma first?"',
	quoteAuthor = "Shadcn",
	quoteAuthorRole = "Creator of Shadcn UI",
	quoteAuthorImage = "https://avatars.githubusercontent.com/u/124599?v=4",
}: ExpandableProgressTabsProps) {
	const [activeTab, setActiveTab] = useState(0);
	const [animKey, setAnimKey] = useState(0);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	// biome-ignore lint/style/noNonNullAssertion: activeTab is always a valid index (state is initialized to 0 and only set via tab index iteration)
	const active = tabs[activeTab]!;
	const activeDuration = active.duration ?? 6000;

	useEffect(() => {
		if (!autoplay) {
			return;
		}
		timerRef.current = setTimeout(() => {
			setActiveTab((prev) => (prev + 1) % tabs.length);
			setAnimKey((k) => k + 1);
		}, activeDuration);
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, [activeTab, autoplay, activeDuration, tabs.length]);

	const handleTabClick = (index: number) => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		setActiveTab(index);
		setAnimKey((k) => k + 1);
	};

	return (
		<section className="@container overflow-hidden bg-background py-24">
			<div
				aria-hidden="true"
				className="h-px border-foreground/10 border-b border-dashed"
			/>
			<div className="mx-auto my-1 max-w-5xl px-2 sm:px-6">
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative p-6 sm:p-12">
						<div
							aria-hidden="true"
							className="mask-y-from-80% pointer-events-none absolute -inset-x-1 -top-36 -bottom-56 border-foreground/10 border-x border-dashed"
						/>
						<div className="flex h-full flex-col justify-between gap-12">
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
							<div className="-ml-4 flex gap-2">
								{tabs.map((tab, index) => (
									<button
										className="group flex cursor-pointer items-center gap-2 rounded-full py-2 pr-1 duration-200 active:scale-[0.98]"
										data-state={activeTab === index ? "expanded" : "collapsed"}
										key={tab.label}
										onClick={() => handleTabClick(index)}
										type="button"
									>
										<div className="size-4">
											{activeTab === index ? (
												<svg
													className="size-4"
													fill="none"
													height="24"
													key={animKey}
													viewBox="0 0 24 24"
													width="24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<circle
														cx="12"
														cy="12"
														opacity="0.1"
														r="10"
														stroke="currentColor"
														strokeWidth="2"
													/>
													<circle
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeDasharray={CIRCUMFERENCE}
														strokeDashoffset={CIRCUMFERENCE}
														strokeLinecap="round"
														strokeWidth="2"
														transform="rotate(-90 12 12)"
													>
														<animate
															attributeName="stroke-dashoffset"
															dur={`${activeDuration}ms`}
															fill="freeze"
															from={CIRCUMFERENCE}
															to="0"
														/>
													</circle>
												</svg>
											) : (
												<div className="size-4" />
											)}
										</div>
										<span
											className={`font-medium text-sm transition-colors group-hover:text-foreground ${activeTab === index ? "text-foreground" : "text-muted-foreground"}`}
										>
											{tab.label}
										</span>
									</button>
								))}
							</div>
						</div>
					</div>
					<div className="relative h-fit">
						<div
							aria-hidden="true"
							className="mask-y-from-80% pointer-events-none absolute -inset-x-1 -top-36 -bottom-56 border-foreground/10 border-x border-dashed"
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
					<ul className="mt-auto space-y-3 text-muted-foreground text-sm">
						{badges.map((badge) => (
							<li className="flex items-center gap-3" key={badge}>
								<ShieldCheck className="size-4" />
								<span className="font-medium text-foreground">{badge}</span>
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
