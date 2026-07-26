import { defaultPlans, defaultRows } from "./data";

export interface ComparisonPlan {
	cta?: {
		label: string;
		href: string;
		variant?: "primary" | "secondary";
	};
	icon?: React.ReactNode;
	name: string;
}

export interface ComparisonFeature {
	label: string;
	tooltip?: string;
}

export interface ComparisonRow {
	feature: ComparisonFeature;
	values: Array<string | boolean>;
}

export interface ComparisonTableProps {
	featuresLabel?: string;
	plans?: ComparisonPlan[];
	rows?: ComparisonRow[];
	/** "gradient" adds a subtle indigo/emerald gradient behind the plan columns */
	variant?: "default" | "gradient";
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

export function ComparisonTable({
	plans = defaultPlans,
	rows = defaultRows,
	featuresLabel = "Benefits",
	variant = "default",
}: ComparisonTableProps) {
	const planCount = plans.length;

	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-2xl">
					<div className="grid grid-cols-2">
						{/* Feature labels column */}
						<div>
							<div className="flex h-18 items-center">
								<div className="font-medium text-lg">{featuresLabel}</div>
							</div>
							{rows.map((row) => (
								<div
									className="flex h-14 items-center gap-2 border-t max-md:text-sm"
									key={row.feature.label}
								>
									<div>{row.feature.label}</div>
									{row.feature.tooltip && (
										<button data-slot="tooltip-trigger" data-state="closed">
											<span className="flex size-4 items-center justify-center rounded-full bg-foreground/10 text-foreground/65 text-sm">
												?
											</span>
										</button>
									)}
								</div>
							))}
						</div>

						{/* Plan columns */}
						<div
							className={`grid rounded-2xl ${planCount === 3 ? "grid-cols-3" : planCount === 2 ? "grid-cols-2" : "grid-cols-1"} ${variant === "gradient" ? "bg-linear-to-b from-indigo-500/10 via-emerald-500/5 to-background" : ""}`}
						>
							{plans.map((plan, planIndex) => {
								const isHighlighted = planIndex === 1 && plans.length >= 3;
								return (
									<div
										className={
											isHighlighted
												? "my-2 rounded-lg bg-card shadow-black/10 shadow-lg ring-1 ring-foreground/5 last:mr-2"
												: ""
										}
										key={plan.name}
									>
										<div
											className={`flex flex-col items-center justify-center gap-1 px-6 text-center ${isHighlighted ? "h-16" : "h-18 pt-2"}`}
										>
											{plan.icon}
											<div className="font-medium text-sm">{plan.name}</div>
										</div>
										{rows.map((row, rowIndex) => (
											<div
												className="flex h-14 items-center justify-center border-t px-6"
												key={`${plan.name}-${rowIndex}`}
											>
												<CellValue value={row.values[planIndex] ?? false} />
											</div>
										))}
										{plan.cta && (
											<div className="border-t px-4 text-sm">
												<div className="flex h-18 items-center justify-center">
													<a
														className={`inline-flex h-8 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 font-medium text-xs transition-all duration-200 focus-visible:outline-none active:scale-98 disabled:pointer-events-none disabled:opacity-50 ${
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
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
