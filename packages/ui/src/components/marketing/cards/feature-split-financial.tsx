export interface FeatureSplitFinancialProps {
	description?: string;
	eyebrow?: string;
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
	heading?: string;
}

export function FeatureSplitFinancial({
	eyebrow = "Financial Analytics",
	heading = "Financial Analytics",
	description = "Monitor your investments, track expenses, and manage your financial portfolio with our powerful analytics tools.",
	feature1Title = "Smart Insights",
	feature1Description = "AI-powered recommendations to optimize your financial strategy.",
	feature2Title = "Real-time Updates",
	feature2Description = "Stay informed with live market data and instant portfolio alerts.",
}: FeatureSplitFinancialProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @3xl:grid-cols-2 gap-3 overflow-hidden rounded-2xl border">
					{/* Left: heading + description + currency illustration, spans 2 rows */}
					<div className="@3xl:row-span-2 flex flex-col gap-8 @3xl:border-r border-b @3xl:border-b-0 p-8">
						<div>
							<p className="font-medium text-primary text-sm">{eyebrow}</p>
							<h2 className="mt-2 font-bold text-2xl text-foreground">
								{heading}
							</h2>
							<p className="mt-3 text-muted-foreground">{description}</p>
						</div>

						{/* BTC / USD / EURO stacked currency mini-cards */}
						<div aria-hidden="true" className="flex flex-1 items-end">
							<div className="flex -space-x-4">
								{[
									{ label: "BTC", color: "blue" },
									{ label: "USD", color: "green" },
									{ label: "EURO", color: "red" },
								].map(({ label, color }) => (
									<div
										className={`before:mask-b-from-65% relative w-20 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration p-3 shadow-black/6.5 shadow-md ring-1 ring-border-illustration before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-25% before:from-${color}-500/15 before:to-75%`}
										key={label}
									>
										<div
											className={`flex items-center gap-1 text-${color}-900 dark:text-${color}-300`}
										>
											<span className="font-medium text-xs">{label}</span>
										</div>
										<div className="space-y-1.5">
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2.5 rounded-full bg-border" />
												<div className="h-[3px] w-8 rounded-full bg-border" />
											</div>
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2.5 rounded-full bg-border" />
												<div className="h-[3px] w-8 rounded-full bg-border" />
											</div>
										</div>
										<div className="space-y-1.5">
											<div className="h-[3px] w-full rounded-full bg-border" />
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2/3 rounded-full bg-border" />
												<div className="h-[3px] w-1/3 rounded-full bg-border" />
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Top-right cell */}
					<div className="border-b p-8">
						<h3 className="font-semibold text-foreground">{feature1Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature1Description}</p>
					</div>

					{/* Bottom-right cell */}
					<div className="p-8">
						<h3 className="font-semibold text-foreground">{feature2Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature2Description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
