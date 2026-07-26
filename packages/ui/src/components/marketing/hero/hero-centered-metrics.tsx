export interface HeroCenteredMetricsProps {
	description?: string;
	metrics?: Array<{ label: string; value: string; description?: string }>;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	title?: string;
	trustBrands?: Array<{ name: string }>;
	trustLabel?: string;
}

export function HeroCenteredMetrics({
	title = "AI solutions for seamless Customer Acquisition",
	description = "Empowering businesses with cutting-edge technology to streamline operations and drive success.",
	primaryCta = { label: "Get Started", href: "#" },
	secondaryCta = { label: "Watch Demo", href: "#" },
	metrics = [
		{
			label: "Revenue increase",
			value: "3.2x",
			description: "average for customers",
		},
		{
			label: "Time to value",
			value: "48h",
			description: "from sign-up to results",
		},
		{
			label: "Uptime SLA",
			value: "99.99%",
			description: "guaranteed reliability",
		},
		{ label: "Customers", value: "12K+", description: "across 60+ countries" },
	],
	trustLabel = "Trusted by innovative teams at",
	trustBrands = [
		{ name: "Stripe" },
		{ name: "Linear" },
		{ name: "Vercel" },
		{ name: "Supabase" },
		{ name: "Resend" },
	],
}: HeroCenteredMetricsProps) {
	return (
		<section>
			<div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-36 lg:px-12 lg:pt-44">
				<div className="text-center">
					<h1 className="text-balance font-semibold text-5xl text-foreground md:font-medium lg:text-7xl">
						{title}
					</h1>
					<p className="mx-auto mt-4 mb-6 max-w-xl text-balance text-lg text-muted-foreground lg:text-xl">
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
							className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 pl-3.5 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
							href={secondaryCta.href}
						>
							<svg
								className="!size-3 fill-foreground"
								fill="none"
								height="24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="24"
							>
								<polygon points="6 3 20 12 6 21 6 3" />
							</svg>
							{secondaryCta.label}
						</a>
					</div>
				</div>

				{/* Metrics grid */}
				<div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
					{metrics.map((metric) => (
						<div
							className="rounded-2xl border border-border bg-card p-6 text-center shadow-black/6.5 shadow-sm ring-1 ring-border"
							key={metric.label}
						>
							<p className="font-semibold text-3xl lg:text-4xl">
								{metric.value}
							</p>
							<p className="mt-1 font-medium text-sm">{metric.label}</p>
							{metric.description && (
								<p className="mt-1 text-muted-foreground text-xs">
									{metric.description}
								</p>
							)}
						</div>
					))}
				</div>

				{/* Trust logos */}
				{trustBrands.length > 0 && (
					<div className="mt-16 text-center">
						<p className="mb-6 text-muted-foreground text-sm">{trustLabel}</p>
						<div className="flex flex-wrap items-center justify-center gap-8">
							{trustBrands.map((brand) => (
								<span
									className="font-semibold text-base text-muted-foreground/60 tracking-wide"
									key={brand.name}
								>
									{brand.name}
								</span>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
