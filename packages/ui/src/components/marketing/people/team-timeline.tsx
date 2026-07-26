import { defaultMilestones } from "./data";
import type { TimelineMilestone } from "./types";

export type { TimelineMilestone };

export interface TeamTimelineProps {
	description?: string;
	milestones?: TimelineMilestone[];
	title?: string;
}

export function TeamTimeline({
	title = "Our journey so far",
	description = "From garage startup to global team — every moment has shaped who we are.",
	milestones = defaultMilestones,
}: TeamTimelineProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-4xl px-6">
				<div className="text-center">
					<h2 className="text-balance font-semibold text-4xl text-foreground">
						{title}
					</h2>
					<p className="mx-auto mt-4 max-w-md text-balance text-lg text-muted-foreground">
						{description}
					</p>
				</div>
				<div className="relative mt-20">
					<div
						aria-hidden="true"
						className="mask-y-from-85% absolute top-0 left-1/2 @max-md:hidden h-full w-px -translate-x-1/2 bg-border"
					/>
					<div className="space-y-16">
						{milestones.map((milestone, index) => {
							const isEven = index % 2 === 0;
							return (
								<div
									className={`flex @max-md:flex-col items-center justify-center gap-8 md:gap-16 ${isEven ? "" : "@md:flex-row-reverse"}`}
									key={milestone.label}
								>
									<div
										className={`${milestone.rotation} bg-card p-3 shadow-black/3 shadow-xl ring-1 ${milestone.isLast ? "ring-border" : "ring-foreground/5"} md:p-4`}
									>
										<div className="relative aspect-[4/3] w-40 overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10 md:w-52">
											<img
												alt={milestone.imageAlt}
												className="size-full object-cover grayscale"
												decoding="async"
												height="300"
												loading="lazy"
												src={milestone.image}
												style={{ color: "transparent" }}
												width="400"
											/>
										</div>
										<p className="mt-2 text-muted-foreground text-xs">
											{milestone.imageCaption}
										</p>
									</div>
									<div
										aria-hidden="true"
										className={`z-10 flex @max-md:hidden size-4 items-center justify-center rounded-full bg-background ring-2 ${milestone.isLast ? "ring-primary" : "ring-foreground/10"} ${isEven ? "-translate-x-3/4 md:-translate-x-full" : "translate-x-3/4 md:translate-x-full"}`}
									/>
									<div
										className={`w-40 md:w-52 ${isEven ? "" : "@md:text-right"}`}
									>
										<p className="font-medium text-foreground">
											{milestone.label}
										</p>
										<p className="mt-1 text-muted-foreground text-sm">
											{milestone.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
