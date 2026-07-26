export interface HeroCenteredDashboardProps {
	announcement?: { label: string; href: string };
	description?: string;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	title?: string;
}

export function HeroCenteredDashboard({
	announcement = { label: "Astor raises $12M series B", href: "#" },
	title = "Transform your Sales with Data-Driven Insights",
	description = "Efficiently manage your sales team with our innovative tools. Enhance productivity, and achieve your goals.",
	primaryCta = { label: "Get Started", href: "#" },
	secondaryCta = { label: "Learn More", href: "#" },
}: HeroCenteredDashboardProps) {
	return (
		<section id="home">
			<div className="relative mx-auto max-w-6xl border-x border-b px-3 pt-24 pb-10 md:pt-36 md:pb-20">
				<div>
					{/* Announcement badge */}
					<div className="relative mx-auto w-fit bg-foreground/5 p-2">
						<div
							aria-hidden="true"
							className="absolute top-1 left-1 size-[3px] rounded-full bg-foreground/20"
						/>
						<div
							aria-hidden="true"
							className="absolute top-1 right-1 size-[3px] rounded-full bg-foreground/20"
						/>
						<div
							aria-hidden="true"
							className="absolute bottom-1 left-1 size-[3px] rounded-full bg-foreground/20"
						/>
						<div
							aria-hidden="true"
							className="absolute right-1 bottom-1 size-[3px] rounded-full bg-foreground/20"
						/>
						<a
							className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-3 py-1 text-xs transition-colors hover:bg-muted/50"
							href={announcement.href}
						>
							<span className="text-muted-foreground">
								{announcement.label}
							</span>
							<span className="text-primary">Read</span>
							<svg
								className="size-3 text-muted-foreground"
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
					</div>

					<div className="mt-8 text-center">
						<h1 className="mx-auto max-w-2xl text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
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
					</div>
				</div>

				{/* Dashboard screenshot preview */}
				<div
					aria-hidden="true"
					className="mask-b-from-95% relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-border bg-card p-2 shadow-2xl shadow-black/10 ring-1 ring-border"
				>
					<div className="overflow-hidden rounded-lg bg-background">
						<div className="flex items-center gap-2 border-border border-b px-4 py-3">
							<div className="font-medium text-sm">Home</div>
							<div className="ml-4 font-medium text-muted-foreground text-sm">
								Revenue
							</div>
						</div>
						<div className="p-4">
							<p className="text-muted-foreground text-xs">Last 30 days</p>
							<div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
								{[
									{ label: "Revenue", value: "$48.2K", change: "+12.4%" },
									{ label: "Customers", value: "2,847", change: "+8.1%" },
									{ label: "Avg. Deal", value: "$1,690", change: "+5.3%" },
									{ label: "Win Rate", value: "64%", change: "+2.1%" },
								].map((metric) => (
									<div
										className="rounded-lg border border-border bg-card p-3"
										key={metric.label}
									>
										<p className="text-muted-foreground text-xs">
											{metric.label}
										</p>
										<p className="mt-1 font-semibold text-lg">{metric.value}</p>
										<span className="font-medium text-emerald-600 text-xs dark:text-emerald-400">
											{metric.change}
										</span>
									</div>
								))}
							</div>
							<div className="mt-4 h-32 w-full rounded-lg bg-muted/50" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
