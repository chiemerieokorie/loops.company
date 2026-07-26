import { defaultSplitColumns, defaultSplitFeatures } from "./data";

export interface CompetitorComparisonFeature {
	label: string;
	tooltip?: string;
}

export interface CompetitorColumn {
	/** SVG logo node rendered in place of the name, or alongside it */
	logo?: React.ReactNode;
	/** Name displayed in the column header */
	name: string;
	values: Array<boolean>;
}

export interface ComparisonSplitProps {
	columns?: CompetitorColumn[];
	/** Left-side body copy */
	description?: string;
	features?: CompetitorComparisonFeature[];
	/** Left-side heading */
	heading?: string;
}

const CheckSvg = () => (
	<svg
		className="size-2.5"
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

export function ComparisonSplit({
	heading = "Quick comparison guide",
	description = "Astor offers a robust and user-friendly link management solution, emerging as the top choice over the competition.",
	features = defaultSplitFeatures,
	columns = defaultSplitColumns,
}: ComparisonSplitProps) {
	return (
		<section className="bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl md:px-6">
				<div className="grid gap-12 lg:grid-cols-2">
					{/* Left marketing copy */}
					<div className="max-w-lg max-md:px-6">
						<div className="text-balance lg:max-w-xs">
							<h2 className="font-semibold text-3xl text-foreground md:text-4xl lg:text-5xl">
								{heading}
							</h2>
							<p className="mt-4 text-balance text-muted-foreground lg:mt-6">
								{description}
							</p>
						</div>
					</div>

					{/* Right comparison table */}
					<div className="grid grid-cols-2">
						{/* Feature label column */}
						<div>
							<div className="sticky top-0 z-[1] flex h-14 items-end gap-1.5 px-6 py-2">
								<div className="font-medium text-muted-foreground text-sm">
									Features
								</div>
							</div>
							{features.map((feature) => (
								<div
									className="flex h-14 items-center rounded-l-lg px-6 text-muted-foreground last:h-[calc(3.5rem+1px)] even:bg-card"
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

						{/* Competitor columns */}
						<div className="grid grid-cols-2">
							{columns.map((col, colIndex) => {
								const isFirst = colIndex === 0;
								return (
									<div className="group" key={col.name}>
										<div
											className={
												isFirst
													? "relative z-10 rounded-xl bg-card/50 shadow-black/[0.065] shadow-xl ring-1 ring-border"
													: ""
											}
											data-plan={col.name.toLowerCase()}
										>
											{/* Column header */}
											<div className="sticky top-0 flex h-14 flex-col items-center justify-center gap-1.5 rounded-t-xl px-4 text-center lg:px-6">
												{col.logo ?? (
													<span className="font-medium text-sm">
														{col.name}
													</span>
												)}
											</div>

											{/* Value cells */}
											{features.map((feature, featureIndex) => {
												const supported = col.values[featureIndex] ?? false;
												return (
													<div
														className="flex h-14 items-center justify-center px-6 text-sm last:h-[calc(3.5rem+1px)] last:border-b odd:bg-card group-last:odd:rounded-r-lg"
														key={`${col.name}-${feature.label}`}
													>
														{supported ? (
															<span className="flex size-4 items-center justify-center rounded-full bg-emerald-600 font-sans font-semibold text-white text-xs">
																<CheckSvg />
															</span>
														) : (
															<span className="flex size-4 items-center justify-center rounded-full bg-rose-500 font-sans font-semibold text-white text-xs">
																✗
															</span>
														)}
													</div>
												);
											})}
											<div className="h-6" />
										</div>
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
