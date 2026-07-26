export interface HeroSplitProps {
	description?: string;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	title?: string;
	trustLabel?: string;
	trustLogos?: Array<{ name: string; src: string }>;
}

export function HeroSplit({
	title = "Simple payments for startups",
	description = "Streamline your transaction processing with our powerful API. Focus on building your product while we handle the complexity of global payments.",
	primaryCta = { label: "Get Started", href: "#" },
	secondaryCta = { label: "Watch Demo", href: "#" },
	trustLabel = "Trusted by 10,000+ companies",
}: HeroSplitProps) {
	return (
		<section>
			<div className="relative pt-24 pb-36 md:pt-36 lg:pt-44">
				<div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
					<div className="md:w-1/2">
						<div>
							<h1 className="max-w-md text-balance font-medium text-5xl md:text-6xl">
								{title}
							</h1>
							<p className="mt-4 mb-8 max-w-2xl text-balance text-muted-foreground md:text-lg">
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
							{trustLabel && (
								<p className="mt-8 text-muted-foreground text-sm">
									{trustLabel}
								</p>
							)}
						</div>
					</div>
				</div>

				{/* Right-side payment card visual */}
				<div
					aria-hidden="true"
					className="absolute top-1/2 right-6 hidden -translate-y-1/2 lg:block"
				>
					<div className="w-72 rounded-2xl border border-border bg-card/90 p-6 shadow-2xl shadow-black/10 ring-1 ring-border backdrop-blur-xl">
						<div className="flex items-center justify-between">
							<span className="font-medium text-sm">Payment Summary</span>
							<span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700 text-xs dark:bg-emerald-950 dark:text-emerald-400">
								Paid
							</span>
						</div>
						<div className="mt-4 space-y-3">
							{[
								{ label: "Subtotal", value: "$4,200.00" },
								{ label: "Processing fee", value: "$42.00" },
								{ label: "Tax", value: "$336.00" },
							].map((row) => (
								<div className="flex justify-between text-sm" key={row.label}>
									<span className="text-muted-foreground">{row.label}</span>
									<span>{row.value}</span>
								</div>
							))}
							<div className="border-border border-t pt-3">
								<div className="flex justify-between font-semibold">
									<span>Total</span>
									<span>$4,578.00</span>
								</div>
							</div>
						</div>
						<div className="mt-4 flex items-center gap-2 rounded-lg bg-muted/50 p-3">
							<div className="flex h-8 w-12 items-center justify-center rounded bg-card shadow-sm ring-1 ring-border">
								<div className="h-3 w-6 rounded-sm bg-gradient-to-r from-orange-400 to-yellow-400" />
							</div>
							<div>
								<p className="font-medium text-xs">•••• 4242</p>
								<p className="text-muted-foreground text-xs">Expires 12/26</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
