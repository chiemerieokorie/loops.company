export interface HeroSplitGlobeProps {
	description?: string;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	title?: string;
	trustLabel?: string;
}

export function HeroSplitGlobe({
	title = "Software monetization for the AI era",
	description = "Streamline your transaction processing with our powerful API. Focus on building your product while we handle the complexity of global payments.",
	primaryCta = { label: "Get Started", href: "#" },
	secondaryCta = { label: "Learn More", href: "#" },
	trustLabel = "Trusted by leading teams worldwide",
}: HeroSplitGlobeProps) {
	return (
		<section className="relative">
			<div className="pt-24 pb-20 md:pt-32 lg:pt-48">
				<div className="relative z-10 mx-auto grid max-w-5xl items-end gap-4 px-6 md:grid-cols-2">
					<div>
						<h1 className="text-balance font-semibold text-5xl lg:text-7xl">
							{title}
						</h1>
					</div>
					<div className="max-w-sm">
						<p className="mb-6 text-balance text-lg text-muted-foreground lg:text-xl">
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
						{trustLabel && (
							<p className="mt-6 text-muted-foreground text-sm">{trustLabel}</p>
						)}
					</div>
				</div>

				{/* Globe visual placeholder — swap in an actual Globe component */}
				<div
					aria-hidden="true"
					className="pointer-events-none relative mx-auto mt-12 flex max-w-5xl items-center justify-center px-6"
				>
					<div className="relative flex aspect-square w-full max-w-lg items-center justify-center">
						<div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
						<div className="relative size-full rounded-full border border-border/50 bg-card/20 shadow-inner" />
						{/* Connection nodes */}
						{[
							{ top: "15%", left: "30%" },
							{ top: "40%", left: "70%" },
							{ top: "65%", left: "25%" },
							{ top: "25%", left: "60%" },
						].map((pos, i) => (
							<div
								className="absolute size-2 rounded-full bg-primary shadow-primary/50 shadow-sm"
								key={i}
								style={{ top: pos.top, left: pos.left }}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
