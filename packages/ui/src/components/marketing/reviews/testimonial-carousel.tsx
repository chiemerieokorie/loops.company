"use client";

import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
	defaultTestimonialCarouselItems,
	defaultTestimonialCarouselStats,
} from "./data";

export interface TestimonialCarouselItem {
	authorAvatar: string;
	authorName: string;
	authorTitle: string;
	logoNode: React.ReactNode;
	quote: string;
}

export interface TestimonialCarouselStat {
	/** Icon node rendered above the stat label. */
	iconNode: React.ReactNode;
	/** Visual label shown below the icon (e.g. "25% Increase in total user engagement"). */
	label: string;
	/** Accessible label for screen readers (e.g. "25% Increase in total user engagement"). */
	srLabel: string;
}

export interface TestimonialCarouselProps {
	moreStoriesHref?: string;
	stats?: TestimonialCarouselStat[];
	testimonials?: TestimonialCarouselItem[];
}

export function TestimonialCarousel({
	testimonials = defaultTestimonialCarouselItems,
	stats = defaultTestimonialCarouselStats,
	moreStoriesHref = "#",
}: TestimonialCarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	const prev = () =>
		setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
	const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

	const current = testimonials[activeIndex];

	const navButtonClass =
		"absolute inset-y-0 my-auto inline-flex h-9 w-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-card font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 max-md:hidden dark:ring-foreground/15 dark:hover:bg-muted/50";

	return (
		<section className="relative bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative mx-auto max-w-xl">
					{/* Prev */}
					<button
						aria-label="Previous testimonial"
						className={`${navButtonClass} -left-16`}
						onClick={prev}
						type="button"
					>
						<ChevronUp className="-translate-y-px" />
					</button>

					{/* Next */}
					<button
						aria-label="Next testimonial"
						className={`${navButtonClass} -right-16`}
						onClick={next}
						type="button"
					>
						<ChevronDown className="translate-y-px" />
					</button>

					{/* Stacked background cards */}
					<div className="absolute inset-0 origin-bottom translate-y-6 scale-90 rounded-2xl border border-transparent bg-card shadow-black/6.5 shadow-md ring-1 ring-border" />
					<div className="absolute inset-0 origin-bottom translate-y-3 scale-95 rounded-2xl border border-transparent bg-card shadow-black/6.5 shadow-md ring-1 ring-border" />

					{/* Active testimonial card */}
					<div className="relative z-10 origin-bottom">
						<div
							className="relative space-y-8 rounded-2xl bg-card p-10 text-card-foreground shadow-black/10 shadow-lg ring-1 ring-border"
							data-slot="card"
						>
							<div>{current?.logoNode}</div>
							<p className="text-lg before:mr-1 before:font-serif before:content-['\201C'] after:ml-1 after:font-serif after:content-['\201D']">
								{current?.quote}
							</p>
							<div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
								<div className="aspect-square size-12 overflow-hidden rounded-xl border border-transparent shadow-black/15 shadow-md ring-1 ring-foreground/10">
									<img
										alt={`Avatar of ${current?.authorName}`}
										decoding="async"
										height={120}
										loading="lazy"
										src={current?.authorAvatar}
										style={{ color: "transparent" }}
										width={120}
									/>
								</div>
								<div className="space-y-0.5 text-base *:block">
									<span className="font-medium text-foreground">
										{current?.authorName}
									</span>
									<span className="text-muted-foreground text-sm">
										{current?.authorTitle}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Stats panel */}
				<div className="relative mx-auto mt-20 mb-9 w-fit max-w-xl">
					{/* Corner decorators */}
					{["top-left", "top-right", "bottom-right", "bottom-left"].map(
						(corner) => {
							const posClass =
								corner === "top-left"
									? "-translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)]"
									: corner === "top-right"
										? "right-0 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)]"
										: corner === "bottom-right"
											? "right-0 bottom-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]"
											: "bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]";
							return (
								<div
									aria-hidden="true"
									className={`mask-radial-from-15% absolute z-1 size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25 ${posClass}`}
									key={corner}
								/>
							);
						}
					)}

					<div className="relative grid grid-cols-2 border py-6">
						<span className="pointer-events-none absolute inset-y-4 left-1/2 w-0.5 rounded border-background border-r bg-foreground/10" />
						{stats.map((stat) => (
							<div className="space-y-4 px-6" key={stat.srLabel}>
								{stat.iconNode}
								<p className="text-balance text-center font-medium text-muted-foreground text-sm">
									<span className="sr-only">{stat.srLabel}</span>
									<span aria-hidden="true">{stat.label}</span>
								</p>
							</div>
						))}
					</div>
				</div>

				<a
					className="mx-auto flex h-9 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 font-medium text-primary text-sm underline-offset-4 transition-all hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50"
					href={moreStoriesHref}
				>
					Read more customer Stories
					<ChevronRight className="size-4" />
				</a>
			</div>
		</section>
	);
}
