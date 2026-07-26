"use client";

import { ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { defaultTestimonialTabs } from "./data";

export interface TestimonialTab {
	authorAvatar: string;
	authorName: string;
	authorTitle: string;
	caseStudyHref?: string;
	caseStudySummary: string;
	id: string;
	logoLabel: string;
	logoNode: React.ReactNode;
	quote: string;
}

export interface TestimonialTabsProps {
	tabs?: TestimonialTab[];
}

export function TestimonialTabs({
	tabs = defaultTestimonialTabs,
}: TestimonialTabsProps) {
	const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");
	const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

	return (
		<section className="bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-3xl">
					{/* Star rating */}
					<div className="flex gap-1">
						{Array.from({ length: 5 }).map((_, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: static decoration
							<Star
								className="size-5 fill-background stroke-background drop-shadow"
								key={i}
							/>
						))}
					</div>

					{/* Company tab bar */}
					<div className="relative my-12 -ml-6 w-fit p-0.5">
						<div className="mask-x-from-75% mask-l-from-95% absolute -inset-y-px -right-8 -left-2 border-foreground/10 border-y" />
						<span
							className="absolute bottom-0 flex h-px translate-y-px rounded-full"
							style={{
								backgroundColor: "rgb(99, 91, 255)",
								transform: "translateX(22px)",
								width: "52px",
							}}
						/>
						<div
							aria-orientation="horizontal"
							className="flex items-center gap-1"
							role="tablist"
						>
							{tabs.map((tab) => (
								<button
									aria-label={tab.logoLabel}
									aria-selected={tab.id === activeId}
									className="relative flex h-10 items-center rounded px-6 transition-all duration-200 not-last:before:absolute not-last:before:inset-y-0.5 not-last:before:-right-[2.5px] not-last:before:w-px not-last:before:bg-foreground/10 hover:bg-foreground/5"
									data-state={tab.id === activeId ? "active" : "inactive"}
									key={tab.id}
									onClick={() => setActiveId(tab.id)}
									role="tab"
									type="button"
								>
									{tab.logoNode}
								</button>
							))}
						</div>
					</div>

					{/* Active tab content */}
					{activeTab && activeTab.caseStudySummary && (
						<div role="tabpanel">
							<div className="mt-12 space-y-8 border-b pb-12">
								<p className="text-balance font-medium text-xl md:text-2xl/8.5">
									{activeTab.caseStudySummary}
								</p>
								{activeTab.caseStudyHref && (
									<a
										className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 pr-1.5 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
										href={activeTab.caseStudyHref}
									>
										Read Case Study
										<ChevronRight
											className="scale-90 opacity-50"
											strokeWidth={2.5}
										/>
									</a>
								)}
							</div>
							<div className="border-background border-t pt-12">
								<p className="text-balance text-lg before:mr-1 before:content-['\201C'] after:ml-1 after:content-['\201D']">
									{activeTab.quote}
								</p>
								<div className="mt-6 flex items-center gap-3">
									{activeTab.authorAvatar && (
										<div className="aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-black/15 shadow-md ring-1 ring-foreground/10">
											<img
												alt={`${activeTab.authorName}'s avatar`}
												className="size-full object-cover"
												decoding="async"
												height={120}
												loading="lazy"
												src={activeTab.authorAvatar}
												style={{ color: "transparent" }}
												width={120}
											/>
										</div>
									)}
									<div className="space-y-px">
										<p className="font-medium text-sm">
											{activeTab.authorName}
										</p>
										<p className="text-muted-foreground text-xs">
											{activeTab.authorTitle}
										</p>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
