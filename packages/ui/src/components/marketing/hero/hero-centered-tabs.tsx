export interface HeroCenteredTabsProps {
	description?: string;
	industryTabs?: string[];
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	title?: string;
}

export function HeroCenteredTabs({
	title = "Powerful Analytics for Smarter Decisions",
	description = "Trusted by leading teams across industries.",
	primaryCta = { label: "Get Started", href: "#" },
	secondaryCta = { label: "Learn More", href: "#" },
	industryTabs = [
		"Generative AI Companies",
		"Hosting Providers",
		"Payments Providers",
		"Streaming Providers",
	],
}: HeroCenteredTabsProps) {
	return (
		<section>
			<div className="mx-auto max-w-6xl border-x px-3">
				<div className="border-x py-8 md:py-16">
					<div className="mx-auto mb-12 max-w-xl text-balance text-center md:mb-16">
						<p className="mt-4 text-muted-foreground md:text-lg">
							{description}{" "}
							{industryTabs.map((tab, i) => (
								<span key={tab}>
									<span className="font-medium text-foreground">{tab}</span>
									{i < industryTabs.length - 1 ? ", " : ""}
								</span>
							))}
						</p>
						<h1 className="mt-6 text-balance font-semibold text-4xl md:text-5xl">
							{title}
						</h1>
						<div className="mt-8 flex items-center justify-center gap-3 max-sm:flex-col">
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

					{/* Analytics dashboard preview */}
					<div
						aria-hidden="true"
						className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-black/10 shadow-xl ring-1 ring-border"
					>
						<div className="flex items-center gap-1.5 border-border border-b px-4 py-3">
							<div className="size-2.5 rounded-full bg-foreground/10" />
							<div className="size-2.5 rounded-full bg-foreground/10" />
							<div className="size-2.5 rounded-full bg-foreground/10" />
						</div>
						<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
							{[
								{
									label: "Total Balance",
									value: "$23,056",
									change: "+65%",
									up: true,
								},
								{
									label: "Revenue",
									value: "$12,400",
									change: "+12%",
									up: true,
								},
								{
									label: "Expenses",
									value: "$4,200",
									change: "-3%",
									up: false,
								},
								{
									label: "Net Profit",
									value: "$8,200",
									change: "+18%",
									up: true,
								},
							].map((stat) => (
								<div
									className="rounded-xl bg-background p-4 shadow shadow-black/6.5 ring-1 ring-border"
									key={stat.label}
								>
									<p className="text-muted-foreground text-xs">{stat.label}</p>
									<p className="mt-1 font-semibold text-xl">{stat.value}</p>
									<span
										className={`mt-1 inline-block font-medium text-xs ${stat.up ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}
									>
										{stat.change}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
