"use client";

import { Bot, Brain, Globe, Hourglass, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface ExpandableAccordionItem {
	description: string;
	icon: React.ReactNode;
	label: string;
}

export interface ExpandableAccordionSplitProps {
	badges?: string[];
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	imageAlt?: string;
	imageUrl?: string;
	items?: ExpandableAccordionItem[];
	quote?: string;
	quoteAuthor?: string;
	quoteAuthorImage?: string;
	quoteAuthorRole?: string;
	title?: string;
}

export function ExpandableAccordionSplit({
	title = "Ship with confidence using our unified platform",
	description = "Streamline your workflow with tools designed to enhance productivity at every step.",
	ctaLabel = "Learn more",
	ctaHref = "#",
	items = [
		{
			label: "AI Models",
			description:
				"Switch between GPT, Claude, and Gemini from a unified interface.",
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
	badges = ["SOC 2", "ISO 27001", "GDPR"],
	quote = '"Looks really good. Did you design in code or Figma first?"',
	quoteAuthor = "Shadcn",
	quoteAuthorRole = "Creator of Shadcn UI",
	quoteAuthorImage = "https://avatars.githubusercontent.com/u/124599?v=4",
}: ExpandableAccordionSplitProps) {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<section className="@container overflow-hidden bg-background py-24">
			<div aria-hidden="true" className="h-px border-b border-dashed" />
			<div className="mx-auto my-1 max-w-5xl px-2 sm:px-6">
				<div className="grid sm:gap-6 md:grid-cols-2">
					<div className="relative">
						<div
							aria-hidden="true"
							className="mask-y-from-85% pointer-events-none absolute -inset-x-1 -top-24 -bottom-96 border-foreground/10 border-x border-dashed"
						/>
						<div className="flex h-full flex-col gap-12 px-6 pt-6 sm:p-12 sm:pb-6">
							<div className="text-balance">
								<h2 className="font-medium text-4xl text-foreground">
									{title}
								</h2>
								<p className="mt-4 mb-6 text-muted-foreground">{description}</p>
								<a
									className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
									href={ctaHref}
								>
									{ctaLabel}
								</a>
							</div>
							<div className="mt-auto grid grid-rows-[1fr_auto_auto] divide-y transition-all duration-300">
								{items.map((item, index) => (
									<div
										className="group relative grid grid-rows-[auto_1fr] not-first:border-t not-first:border-t-card"
										data-expanded={activeItem === index}
										key={item.label}
									>
										<button
											className="group flex w-full cursor-pointer items-center gap-3 py-4 text-left"
											onClick={() => setActiveItem(index)}
											type="button"
										>
											<span
												className={`shrink-0 transition-colors ${activeItem === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
											>
												{item.icon}
											</span>
											<h3
												className={`font-medium transition-colors group-hover:text-foreground ${activeItem === index ? "text-foreground" : "text-muted-foreground"}`}
											>
												{item.label}
											</h3>
										</button>
										<div
											className="grid transition-[grid-template-rows] duration-300"
											style={{
												gridTemplateRows: activeItem === index ? "1fr" : "0fr",
											}}
										>
											<div className="overflow-hidden">
												<p className="text-balance pb-6 pl-7 text-muted-foreground">
													{item.description}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="relative aspect-4/5 sm:aspect-square md:aspect-auto">
						<div
							aria-hidden="true"
							className="mask-y-from-85% pointer-events-none absolute -inset-x-1 -top-24 -bottom-96 border-foreground/10 border-x border-dashed"
						/>
						<div className="relative h-full overflow-hidden rounded-xl">
							<div className="absolute inset-0" style={{ opacity: 1 }}>
								<div className="dither absolute inset-0 opacity-75 dark:opacity-25">
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
									className="size-full object-cover opacity-75 dark:opacity-40"
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
			<div aria-hidden="true" className="h-px border-t border-dashed" />
			<div className="mx-auto max-w-5xl px-2 py-6 sm:px-6 sm:py-12">
				<div className="grid @xl:grid-cols-2 @xl:gap-6 gap-12 px-6 sm:px-12">
					<ul className="mt-auto space-y-3 text-muted-foreground text-sm">
						{badges.map((badge) => (
							<li className="flex items-center gap-3" key={badge}>
								<span className="text-emerald-600 dark:text-emerald-500/75">
									<ShieldCheck className="size-4" />
								</span>
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
			<div aria-hidden="true" className="h-px border-t border-dashed" />
		</section>
	);
}
