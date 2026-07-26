export interface HeroCenteredGlobeProps {
	description?: string;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	stats?: Array<{ label: string; value: string }>;
	title?: string;
}

export function HeroCenteredGlobe({
	title = "Payments infrastructure built for SaaS that Scales",
	description = "One platform to accept payments, grow revenue, and manage your business globally.",
	primaryCta = { label: "Get Started", href: "#" },
	secondaryCta = { label: "Talk to Sales", href: "#" },
	stats = [
		{ label: "Uptime", value: "99.99%" },
		{ label: "Countries", value: "135+" },
		{ label: "Currencies", value: "135+" },
	],
}: HeroCenteredGlobeProps) {
	return (
		<section className="relative bg-background">
			{/* Background image */}
			<div className="mask-b-from-55% mask-b-to-75% mask-t-from-35% mask-t-to-65% dark:mask-t-to-55% absolute inset-0">
				<img
					alt="gradient background"
					className="not-dark:hidden size-full object-cover object-bottom opacity-40"
					height="3115"
					loading="lazy"
					src="https://images.unsplash.com/photo-1655823855230-7f3b6bdd7f40?q=80&w=2874&auto=format&fit=crop"
					width="2874"
				/>
				<img
					alt="gradient background light"
					className="size-full object-cover object-bottom opacity-20 dark:hidden"
					height="3115"
					loading="lazy"
					src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=2939&auto=format&fit=crop"
					width="2939"
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center md:pt-44">
				<h1 className="mx-auto max-w-3xl text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
					{title}
				</h1>
				<p className="mx-auto mt-4 mb-8 max-w-xl text-balance text-lg text-muted-foreground">
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

				{/* Stats row */}
				<div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
					{stats.map((stat) => (
						<div className="text-center" key={stat.label}>
							<p className="font-semibold text-3xl">{stat.value}</p>
							<p className="mt-1 text-muted-foreground text-sm">{stat.label}</p>
						</div>
					))}
				</div>

				{/* Globe visual placeholder — swap in an actual Globe component */}
				<div
					aria-hidden="true"
					className="pointer-events-none relative mx-auto mt-12 flex max-w-2xl items-center justify-center"
				>
					<div className="relative flex aspect-square w-full max-w-md items-center justify-center">
						<div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/10 to-transparent opacity-60" />
						<div className="relative size-full rounded-full border border-border/50 bg-card/10 shadow-inner" />
						{[
							{ top: "20%", left: "35%" },
							{ top: "45%", left: "72%" },
							{ top: "60%", left: "20%" },
							{ top: "30%", left: "65%" },
							{ top: "70%", left: "50%" },
						].map((pos, i) => (
							<div
								className="absolute size-1.5 rounded-full bg-primary shadow-primary/50 shadow-sm"
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
