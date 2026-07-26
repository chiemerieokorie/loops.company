export interface FeatureSplitCurrencyProps {
	description?: string;
	eyebrow?: string;
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
	feature3Description?: string;
	feature3Title?: string;
	heading?: string;
}

export function FeatureSplitCurrency({
	eyebrow = "Currency Conversion",
	heading = "Currency Conversion",
	description = "Convert between currencies instantly with live exchange rates and historical trend data.",
	feature1Title = "Live Rates",
	feature1Description = "Up-to-the-second exchange rates from global markets.",
	feature2Title = "Multi-currency Support",
	feature2Description = "Support for 150+ currencies including crypto assets.",
	feature3Title = "Rate Alerts",
	feature3Description = "Get notified when your target exchange rate is reached.",
}: FeatureSplitCurrencyProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @3xl:grid-cols-6 gap-3 overflow-hidden rounded-2xl border">
					{/* Left 2 columns spanning 2 rows: heading + currency illustration */}
					<div className="@3xl:col-span-2 @3xl:row-span-2 flex flex-col gap-8 @3xl:border-r border-b @3xl:border-b-0 p-8">
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
									{
										label: "BTC",
										colorClass: "from-blue-500/15",
										textClass: "text-blue-900 dark:text-blue-300",
										icon: (
											<svg
												className="size-3"
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
											>
												<path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
											</svg>
										),
									},
									{
										label: "USD",
										colorClass: "from-green-500/15",
										textClass: "text-green-900 dark:text-green-300",
										icon: (
											<svg
												className="size-3"
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
											>
												<line x1="12" x2="12" y1="2" y2="22" />
												<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
											</svg>
										),
									},
									{
										label: "EURO",
										colorClass: "from-red-500/15",
										textClass: "text-red-900 dark:text-red-300",
										icon: (
											<svg
												className="size-3"
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
											>
												<path d="M4 10h12" />
												<path d="M4 14h9" />
												<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
											</svg>
										),
									},
								].map(({ label, colorClass, textClass, icon }) => (
									<div
										className={`before:mask-b-from-65% relative w-16 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-25% before:${colorClass} before:to-75%`}
										key={label}
									>
										<div
											className={`flex -translate-x-0.5 items-center gap-0.5 ${textClass}`}
										>
											{icon}
											<span className="font-medium text-xs">{label}</span>
										</div>
										<div className="space-y-1.5">
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2.5 rounded-full bg-border" />
												<div className="h-[3px] w-6 rounded-full bg-border" />
											</div>
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2.5 rounded-full bg-border" />
												<div className="h-[3px] w-6 rounded-full bg-border" />
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

					{/* Top-right 4 columns split into 2×2 */}
					<div className="@3xl:col-span-2 @3xl:border-r border-b p-8">
						<h3 className="font-semibold text-foreground">{feature1Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature1Description}</p>
					</div>

					<div className="@3xl:col-span-2 border-b p-8">
						<h3 className="font-semibold text-foreground">{feature2Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature2Description}</p>
					</div>

					{/* Bottom-right 4 columns */}
					<div className="@3xl:col-span-4 p-8">
						<h3 className="font-semibold text-foreground">{feature3Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature3Description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
