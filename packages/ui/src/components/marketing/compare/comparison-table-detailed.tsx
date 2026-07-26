import { defaultDetailedPlans, defaultDetailedSections } from "./data";

export interface DetailedComparisonPlan {
	cta: {
		label: string;
		href: string;
		variant?: "primary" | "secondary";
	};
	/** Set to true to visually elevate this plan (card background, shadow, ring) */
	highlighted?: boolean;
	icon?: React.ReactNode;
	name: string;
}

export interface DetailedComparisonFeature {
	label: string;
	tooltip?: string;
}

export interface DetailedComparisonSection {
	description?: string;
	features: DetailedComparisonFeature[];
	title: string;
}

export interface DetailedComparisonRow {
	/** One value per plan, in the same order as the `plans` prop */
	values: Array<string | boolean>;
}

export interface DetailedComparisonTableProps {
	featuresLabel?: string;
	/**
	 * "card" — Pro column uses bg-card (Block004 style)
	 * "illustration" — Pro column uses bg-illustration (Block003 style)
	 */
	highlightVariant?: "card" | "illustration";
	plans?: DetailedComparisonPlan[];
	sections?: Array<{
		section: DetailedComparisonSection;
		rows: DetailedComparisonRow[];
	}>;
}

function CheckIcon() {
	return (
		<span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/10 font-sans font-semibold text-emerald-600 text-xs">
			✓
		</span>
	);
}

function CrossIcon() {
	return (
		<span className="flex size-5 items-center justify-center rounded-full bg-foreground/[0.065] font-sans font-semibold text-foreground/65 text-xs">
			✗
		</span>
	);
}

function CellValue({ value }: { value: string | boolean }) {
	if (value === true) {
		return <CheckIcon />;
	}
	if (value === false) {
		return <CrossIcon />;
	}
	return <div>{value}</div>;
}

export function ComparisonTableDetailed({
	plans = defaultDetailedPlans,
	sections = defaultDetailedSections,
	featuresLabel = "Features",
	highlightVariant = "card",
}: DetailedComparisonTableProps) {
	return (
		<section className="bg-background pb-16 md:py-24">
			<div className="mx-auto max-w-5xl md:px-6">
				<div className="grid grid-cols-2 md:grid-cols-4">
					{/* Feature labels column */}
					<div>
						<div className="sticky top-0 z-[1] flex h-18 items-end gap-1.5 border-b bg-background px-6 py-2 max-md:hidden">
							<div className="font-medium text-muted-foreground text-sm">
								{featuresLabel}
							</div>
						</div>
						{sections?.map((group) => (
							<div key={group.section.title}>
								<div className="relative flex h-14 flex-col justify-center px-6 md:h-28">
									<h3 className="font-medium">{group.section.title}</h3>
									{group.section.description && (
										<p className="mt-1 line-clamp-2 text-balance text-muted-foreground text-sm max-md:hidden md:-mr-24">
											{group.section.description}
										</p>
									)}
								</div>
								{group.section.features.map((feature) => (
									<div
										className="flex h-14 items-center border-t px-6 text-muted-foreground last:h-[calc(3.5rem+1px)] last:border-b md:border-l"
										key={feature.label}
									>
										<div className="text-sm">{feature.label}</div>
										{feature.tooltip && (
											<button
												className="flex size-7"
												data-slot="tooltip-trigger"
												data-state="closed"
											>
												<span className="m-auto flex size-4 items-center justify-center rounded-full bg-foreground/10 text-foreground/65 text-sm">
													?
												</span>
											</button>
										)}
									</div>
								))}
							</div>
						))}
					</div>

					{/* Plan columns */}
					<div className="grid md:col-span-3 md:grid-cols-3">
						{plans.map((plan, planIndex) => {
							const isHighlighted = plan.highlighted === true;
							const highlightClass =
								highlightVariant === "illustration"
									? "relative z-[1] md:rounded-xl md:bg-illustration md:shadow-black/6.5 md:shadow-xl md:ring-1 md:ring-border"
									: "relative z-[1] md:rounded-xl md:bg-card md:shadow-black/6.5 md:shadow-xl md:ring-1 md:ring-border";

							return (
								<div className="group" key={plan.name}>
									<div
										className={isHighlighted ? highlightClass : ""}
										data-plan={plan.name.toLowerCase()}
									>
										{/* Sticky header */}
										<div
											className={`sticky top-0 flex h-18 flex-col items-center justify-center gap-1.5 border-b px-4 text-center max-md:hidden lg:px-${isHighlighted ? "6" : "8"} ${isHighlighted ? "rounded-t-xl bg-card" : "bg-background"}`}
										>
											{plan.icon}
											<div className="font-medium text-sm">{plan.name}</div>
										</div>

										{/* Section rows */}
										{sections?.map((group, sectionIndex) => (
											<div key={`${plan.name}-${group.section.title}`}>
												<div aria-hidden="true" className="h-14 md:h-28" />
												<div>
													{group.rows.map((row, rowIndex) => (
														<div
															className="flex h-14 items-center justify-center border-t px-6 text-sm last:h-[calc(3.5rem+1px)] last:border-b max-md:border-l md:group-last:border-r"
															key={`${plan.name}-${sectionIndex}-${rowIndex}`}
														>
															<CellValue
																value={row.values[planIndex] ?? false}
															/>
														</div>
													))}
												</div>
											</div>
										))}

										{/* CTA */}
										<div className="flex h-20 items-center justify-center px-4 text-sm max-md:hidden lg:px-6">
											<a
												className={`inline-flex h-8 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 font-medium text-xs transition-all focus-visible:outline-none active:scale-98 disabled:pointer-events-none disabled:opacity-50 ${
													plan.cta.variant === "primary"
														? "border-[0.5px] border-white/10 bg-primary text-primary-foreground shadow-black/15 shadow-md hover:bg-primary/90 dark:border-transparent"
														: "border border-transparent bg-card shadow-black/10 shadow-sm ring-1 ring-foreground/10 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50"
												}`}
												href={plan.cta.href}
											>
												{plan.cta.label}
											</a>
										</div>
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
