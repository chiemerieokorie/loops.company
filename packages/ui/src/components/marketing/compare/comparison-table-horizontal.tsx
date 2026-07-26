import { defaultHorizontalPlans, defaultHorizontalSections } from "./data";

export interface HorizontalComparisonPlan {
	cta: {
		label: string;
		href: string;
		variant?: "primary" | "secondary";
	};
	name: string;
	price: string;
}

export interface HorizontalComparisonFeature {
	label: string;
	tooltip?: string;
}

export interface HorizontalComparisonSection {
	features: HorizontalComparisonFeature[];
	icon?: React.ReactNode;
	title: string;
}

export interface HorizontalComparisonRow {
	/** One value per plan, in the same order as the `plans` prop.
	 *  false / undefined = dot (unavailable); true = check; string = text value */
	values: Array<string | boolean>;
}

export interface ComparisonTableHorizontalProps {
	plans?: HorizontalComparisonPlan[];
	sections?: Array<{
		section: HorizontalComparisonSection;
		rows: HorizontalComparisonRow[];
	}>;
}

const CheckPathIcon = () => (
	<svg
		className="size-3"
		height="16"
		viewBox="0 0 512 512"
		width="16"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"
			fill="currentColor"
		/>
	</svg>
);

export function ComparisonTableHorizontal({
	plans = defaultHorizontalPlans,
	sections = defaultHorizontalSections,
}: ComparisonTableHorizontalProps) {
	return (
		<section className="bg-background pb-16 md:pt-18 md:pb-24">
			<div className="mx-auto max-w-5xl md:px-6">
				{/* Sticky plan headers */}
				<div className="before:mask-b-from-70% gap-5 px-6 pt-6 pb-6 before:absolute before:inset-0 before:bg-background/50 before:backdrop-blur-sm max-md:before:hidden md:sticky md:top-0 md:z-[9] md:grid md:grid-cols-3 md:px-0 md:pb-12">
					{plans.map((plan) => (
						<div
							className="relative z-10 flex flex-wrap items-end justify-between gap-2 rounded-xl bg-card p-4 shadow shadow-black/[0.065] ring-1 ring-border"
							key={plan.name}
						>
							<div>
								<h3 className="font-medium capitalize">{plan.name}</h3>
								<div className="mt-0.5 text-muted-foreground text-sm">
									{plan.price}
								</div>
							</div>
							<a
								className={`inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 font-medium text-xs transition-all focus-visible:outline-none active:scale-98 disabled:pointer-events-none disabled:opacity-50 ${
									plan.cta.variant === "primary"
										? "border-[0.5px] border-white/10 bg-primary text-primary-foreground shadow-black/15 shadow-md hover:bg-primary/90 dark:border-transparent"
										: "border border-transparent bg-card shadow-black/10 shadow-sm ring-1 ring-foreground/10 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50"
								}`}
								href={plan.cta.href}
							>
								{plan.cta.label}
							</a>
						</div>
					))}
				</div>

				{/* Feature sections */}
				<div className="space-y-12">
					{sections?.map((group) => (
						<div key={group.section.title}>
							<div className="relative flex h-16 flex-col justify-center px-6 md:px-4">
								<h3 className="flex items-center gap-2 font-medium text-lg [&>svg]:size-4.5">
									{group.section.icon}
									{group.section.title}
								</h3>
							</div>
							{group.section.features.map((feature, featureIndex) => (
								<div
									className="grid gap-3 border-t last:border-b md:grid-cols-3"
									key={feature.label}
								>
									{plans.map((plan, planIndex) => {
										const value =
											group.rows[featureIndex]?.values[planIndex] ?? false;
										return (
											<div
												className="flex h-14 items-center gap-2 px-6 md:px-4"
												key={`${plan.name}-${feature.label}`}
											>
												{value === false ? (
													<>
														<span
															aria-hidden="true"
															className="flex size-4.5 items-center justify-center"
														>
															<span className="block size-1.5 rounded-full bg-foreground/50 opacity-50" />
														</span>
														<div className="flex items-center gap-1.5 opacity-50">
															<span className="line-clamp-1 opacity-50">
																{feature.label}
															</span>
														</div>
													</>
												) : (
													<>
														<span
															aria-hidden="true"
															className="flex size-4.5 items-center justify-center"
														>
															<CheckPathIcon />
														</span>
														<div className="flex items-center gap-1.5">
															{value !== true && value}{" "}
															{feature.tooltip ? (
																<button
																	className="px-0 text-left"
																	data-slot="tooltip-trigger"
																	data-state="closed"
																>
																	<span className="line-clamp-1 cursor-help underline decoration-dotted underline-offset-2 opacity-50">
																		{feature.label}
																	</span>
																</button>
															) : (
																<span className="line-clamp-1 opacity-50">
																	{feature.label}
																</span>
															)}
														</div>
													</>
												)}
											</div>
										);
									})}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
