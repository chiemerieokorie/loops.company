export interface HeroCenteredBevelProps {
	description?: string;
	metrics?: Array<{ label: string; value: string; change?: string }>;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	title?: string;
}

export function HeroCenteredBevel({
	title = "Unlock Revenue Growth with Intelligent Analytics",
	description = "Empower your business with real-time insights and AI-driven analytics that turn data into decisions.",
	primaryCta = { label: "Get Started", href: "#" },
	secondaryCta = { label: "Learn More", href: "#" },
	metrics = [
		{ label: "Annual Revenue", value: "$2.4M", change: "+32%" },
		{ label: "Active Users", value: "18,400", change: "+14%" },
		{ label: "Conversion Rate", value: "4.7%", change: "+0.8%" },
	],
}: HeroCenteredBevelProps) {
	return (
		<section className="relative selection:bg-primary-foreground selection:text-primary">
			<div className="pt-15">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-6xl border-x"
				/>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 top-15 z-10 mx-auto max-w-[80rem] rounded-t-[2rem] border-x border-t"
				/>

				<div className="relative z-20 mx-auto max-w-5xl px-6 pt-24 pb-16 text-center md:pt-36">
					<h1 className="mx-auto max-w-3xl text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
						{title}
					</h1>
					<p className="mx-auto mt-4 mb-8 max-w-2xl text-balance text-lg text-muted-foreground">
						{description}
					</p>
					<div className="flex items-center justify-center gap-3 max-sm:flex-col">
						<a
							className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent"
							href={primaryCta.href}
						>
							{primaryCta.label}
						</a>
						<a
							className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
							href={secondaryCta.href}
						>
							{secondaryCta.label}
						</a>
					</div>
				</div>

				{/* Metrics row */}
				<div className="relative z-20 mx-auto max-w-4xl px-6 pb-20">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						{metrics.map((metric) => (
							<div
								className="rounded-2xl border border-border bg-card p-6 shadow-black/6.5 shadow-md ring-1 ring-border"
								key={metric.label}
							>
								<p className="text-muted-foreground text-sm">{metric.label}</p>
								<div className="mt-2 flex items-baseline gap-2">
									<span className="font-semibold text-2xl">{metric.value}</span>
									{metric.change && (
										<span className="font-medium text-emerald-600 text-sm dark:text-emerald-400">
											{metric.change}
										</span>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
