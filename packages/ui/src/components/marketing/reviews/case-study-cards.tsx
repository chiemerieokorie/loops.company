import { ChevronRight } from "lucide-react";
import { defaultCaseStudyCards } from "./data";

export interface CaseStudyCardItem {
	authorAvatar: string;
	authorName: string;
	authorTitle: string;
	caseStudyHref?: string;
	gradientClass?: string;
	logoNode: React.ReactNode;
	quote: string;
	summary: React.ReactNode;
}

export interface CaseStudyCardsProps {
	cards?: CaseStudyCardItem[];
}

export function CaseStudyCards({
	cards = defaultCaseStudyCards,
}: CaseStudyCardsProps) {
	return (
		<section className="@container bg-background py-16 md:py-24 lg:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid @4xl:grid-cols-2 gap-6 *:border *:border-transparent *:shadow-lg">
					{cards.map((card, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: display-only list
						<div
							className={`row-span-5 grid grid-rows-subgrid gap-8 rounded-xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border ${card.gradientClass ?? ""}`}
							data-slot="card"
							key={index}
						>
							{/* Logo */}
							{card.logoNode}

							{/* Summary with highlight */}
							<p className="text-balance font-medium text-muted-foreground text-xl">
								{card.summary}
							</p>

							{/* CTA */}
							{card.caseStudyHref && (
								<a
									className="inline-flex h-8 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 pr-1.5 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
									href={card.caseStudyHref}
								>
									Read Case Study
									<ChevronRight
										className="scale-90 opacity-50"
										strokeWidth={2.5}
									/>
								</a>
							)}

							{/* Quote + author */}
							<div className="row-span-2 grid grid-rows-subgrid gap-8 border-t pt-8">
								<p className="self-end text-balance text-foreground before:mr-1 before:content-['\201C'] after:ml-1 after:content-['\201D']">
									{card.quote}
								</p>
								<div className="flex items-center gap-3">
									<div className="aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-black/15 shadow-md ring-1 ring-foreground/10">
										<img
											alt={`${card.authorName}'s avatar`}
											className="size-full object-cover"
											decoding="async"
											height={46}
											loading="lazy"
											src={card.authorAvatar}
											style={{ color: "transparent" }}
											width={46}
										/>
									</div>
									<div className="space-y-px">
										<p className="font-medium text-sm">{card.authorName}</p>
										<p className="text-muted-foreground text-xs">
											{card.authorTitle}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
