import { defaultPricingPlans, defaultPricingSections } from "./data";

export interface PricingComparisonPlan {
	cta: {
		label: string;
		href: string;
		variant?: "primary" | "secondary";
	};
	/** Set to true to visually elevate this column */
	highlighted?: boolean;
	name: string;
	price: string;
}

export interface PricingComparisonFeature {
	label: string;
	tooltip?: string;
}

export interface PricingComparisonSection {
	description?: string;
	features: PricingComparisonFeature[];
	title: string;
}

export interface PricingComparisonRow {
	/** One value per plan, in the same order as the `plans` prop.
	 *  Use "-" for unavailable (renders a dash badge instead of ✗). */
	values: Array<string | boolean | "-">;
}

export interface ComparisonTablePricingProps {
	featuresLabel?: string;
	plans?: PricingComparisonPlan[];
	sections?: Array<{
		section: PricingComparisonSection;
		rows: PricingComparisonRow[];
	}>;
}

function CheckIcon() {
	return (
		<span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/10 font-sans font-semibold text-emerald-600 text-xs">
			✓
		</span>
	);
}

function DashIcon() {
	return (
		<span className="flex size-5 items-center justify-center rounded-full bg-foreground/[0.065] font-sans font-semibold text-foreground/65 text-xs">
			-
		</span>
	);
}

function CellValue({ value }: { value: string | boolean | "-" }) {
	if (value === true) {
		return <CheckIcon />;
	}
	if (value === false || value === "-") {
		return <DashIcon />;
	}
	return <div>{value}</div>;
}

export function ComparisonTablePricing({
	plans = defaultPricingPlans,
	sections = defaultPricingSections,
	featuresLabel = "Features",
}: ComparisonTablePricingProps) {
	return (
		<section className="pb-16 md:py-24">
			<div className="mx-auto max-w-5xl md:px-6">
				<div className="grid grid-cols-3 md:grid-cols-4">
					{/* Feature labels column — col-span-2 on mobile */}
					<div className="col-span-2 md:col-span-1">
						<div className="sticky top-0 z-[1] flex h-36 items-end gap-1.5 border-b bg-background py-2 max-md:hidden">
							<div className="font-medium text-muted-foreground text-sm">
								{featuresLabel}
							</div>
						</div>
						{sections?.map((group) => (
							<div key={group.section.title}>
								<div className="relative flex h-14 flex-col justify-center max-md:px-6 md:h-28">
									<h3 className="font-medium text-lg">{group.section.title}</h3>
									{group.section.description && (
										<p className="mt-1 line-clamp-2 text-balance text-muted-foreground text-sm max-md:hidden md:-mr-24">
											{group.section.description}
										</p>
									)}
								</div>
								{group.section.features.map((feature) => (
									<div
										className="flex h-14 items-center border-t text-muted-foreground last:h-[calc(3.5rem+1px)] last:border-b max-md:px-6"
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
							return (
								<div className="group" key={plan.name}>
									<div
										className={
											isHighlighted
												? "relative z-[1] md:rounded-xl md:bg-foreground/[0.02] md:ring-1 md:ring-border"
												: ""
										}
										data-plan={plan.name.toLowerCase()}
									>
										{/* Sticky plan header with price + CTA */}
										<div
											className={`sticky top-0 flex h-36 flex-col justify-center border-b px-4 max-md:hidden lg:px-${isHighlighted ? "6" : "8"} ${isHighlighted ? "rounded-t-xl bg-foreground/[0.02] backdrop-blur" : "bg-background"}`}
										>
											<div className="font-medium text-lg">{plan.name}</div>
											<div className="mt-0.5 mb-4 text-muted-foreground">
												{plan.price}
											</div>
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

										{/* Section rows */}
										{sections?.map((group, sectionIndex) => (
											<div key={`${plan.name}-${group.section.title}`}>
												<div aria-hidden="true" className="h-14 md:h-28" />
												<div>
													{group.rows.map((row, rowIndex) => (
														<div
															className="flex h-14 items-center border-t px-6 text-sm last:h-[calc(3.5rem+1px)] last:border-b max-md:justify-center max-md:border-l md:px-4 lg:px-8"
															key={`${plan.name}-${sectionIndex}-${rowIndex}`}
														>
															<CellValue value={row.values[planIndex] ?? "-"} />
														</div>
													))}
												</div>
											</div>
										))}

										<div className="flex h-6 items-center justify-center px-4 text-sm max-md:hidden lg:px-6" />
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
