export interface HeroSplitCardsProps {
	description?: string;
	features?: Array<{ title: string; description: string }>;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	tagline?: string;
	title?: string;
}

export function HeroSplitCards({
	tagline = "Get Started",
	title = "Payments infrastructure for SaaS",
	description = "One tool that does it all. Search, generate, analyze, and chat — right inside your product.",
	primaryCta = { label: "Start Building", href: "#" },
	secondaryCta = { label: "Documentation", href: "#" },
	features = [
		{
			title: "Accept payments globally",
			description: "135+ currencies and payment methods",
		},
		{
			title: "Revenue optimization",
			description: "Smart retry logic and dunning flows",
		},
		{
			title: "Real-time reporting",
			description: "Instant insights across all channels",
		},
		{ title: "Enterprise security", description: "PCI DSS Level 1 certified" },
	],
}: HeroSplitCardsProps) {
	return (
		<section className="relative">
			{/* Dashed column decoration */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 z-10 mx-1 grid max-w-5xl grid-cols-3 border-x sm:grid-cols-4 md:mx-auto"
				style={{ borderColor: "var(--color-border)" }}
			>
				<div
					className="h-full border-r border-dashed"
					style={{ borderColor: "var(--color-border)" }}
				/>
				<div
					className="h-full border-r border-dashed"
					style={{ borderColor: "var(--color-border)" }}
				/>
				<div className="h-full max-sm:hidden" />
				<div
					className="h-full border-l border-dashed max-sm:hidden"
					style={{ borderColor: "var(--color-border)" }}
				/>
			</div>

			<div className="relative z-20 mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-36 lg:pt-44">
				<div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
					{/* Left — text */}
					<div className="flex flex-col justify-center">
						<a
							className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-muted-foreground text-xs transition-colors hover:text-foreground"
							href={primaryCta.href}
						>
							{tagline}
							<svg
								className="size-3"
								fill="none"
								height="24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="m9 18 6-6-6-6" />
							</svg>
						</a>
						<h1 className="text-balance font-semibold text-4xl md:text-5xl">
							{title}
						</h1>
						<p className="mt-4 mb-8 text-balance text-lg text-muted-foreground">
							{description}
						</p>
						<div className="flex flex-col gap-3 sm:flex-row">
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

					{/* Right — feature cards */}
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						{features.map((feat) => (
							<div
								className="rounded-xl border border-border bg-card p-4 shadow-black/6.5 shadow-sm ring-1 ring-border"
								key={feat.title}
							>
								<div className="mb-2 size-6 rounded-md bg-primary/10">
									<div
										className="m-auto size-2 rounded-full bg-primary"
										style={{ marginTop: "8px" }}
									/>
								</div>
								<p className="font-medium text-sm">{feat.title}</p>
								<p className="mt-1 text-muted-foreground text-xs">
									{feat.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
