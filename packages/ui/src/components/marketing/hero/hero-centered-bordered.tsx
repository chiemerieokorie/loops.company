export interface HeroCenteredBorderedProps {
	description?: string;
	features?: Array<{ icon: string; label: string }>;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	title?: string;
}

export function HeroCenteredBordered({
	title = "Modern Solutions for Customer Engagement",
	description = "Experience seamless payments, real-time collaboration, and actionable insights. Set up in minutes.",
	primaryCta = { label: "Get Started", href: "#" },
	secondaryCta = { label: "Learn More", href: "#" },
	features = [
		{ icon: "zap", label: "Lightning fast setup" },
		{ icon: "shield", label: "Enterprise security" },
		{ icon: "globe", label: "Global coverage" },
		{ icon: "bar-chart", label: "Real-time analytics" },
	],
}: HeroCenteredBorderedProps) {
	return (
		<section className="relative bg-background">
			<div className="pt-20 md:pt-28">
				<div className="relative z-10 mx-auto max-w-6xl">
					<div className="relative p-2">
						{/* Border illustration decoration */}
						<div
							aria-hidden="true"
							className="absolute inset-0 flex items-center justify-between max-md:hidden"
						>
							<div className="space-y-2 px-12 py-2">
								<div className="h-2 w-32 rounded bg-[repeating-linear-gradient(90deg,var(--color-border),var(--color-border)_1.5px,transparent_0,transparent_6px)]" />
								<div className="h-2 w-24 rounded bg-[repeating-linear-gradient(90deg,var(--color-border),var(--color-border)_1.5px,transparent_0,transparent_6px)]" />
							</div>
							<div className="space-y-2 px-12 py-2">
								<div className="h-2 w-32 rounded bg-[repeating-linear-gradient(90deg,var(--color-border),var(--color-border)_1.5px,transparent_0,transparent_6px)]" />
								<div className="h-2 w-24 rounded bg-[repeating-linear-gradient(90deg,var(--color-border),var(--color-border)_1.5px,transparent_0,transparent_6px)]" />
							</div>
						</div>

						<div className="relative mx-auto max-w-2xl px-6 pt-16 pb-12 text-center">
							<h1 className="text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
								{title}
							</h1>
							<p className="mx-auto mt-4 mb-8 max-w-lg text-balance text-lg text-muted-foreground">
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
					</div>

					{/* App preview with border */}
					<div
						aria-hidden="true"
						className="relative mx-auto max-w-5xl overflow-hidden rounded-t-2xl border-border border-x border-t bg-card/50 shadow-black/6.5 shadow-xl"
					>
						<div className="h-1.5 rounded-t-xs bg-card shadow ring-1 ring-foreground/5" />
						<div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
							{features.map((feat) => (
								<div
									className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 shadow-sm"
									key={feat.label}
								>
									<div className="size-2 rounded-full bg-primary/60" />
									<span className="text-xs">{feat.label}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
