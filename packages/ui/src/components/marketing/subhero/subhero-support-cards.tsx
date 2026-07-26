export interface SubheroSupportCardsProps {
	badge?: string;
	description?: string;
	salesCtaHref?: string;
	salesCtaLabel?: string;
	supportCtaHref?: string;
	supportCtaLabel?: string;
	title?: string;
}

export function SubheroSupportCards({
	badge = "Support",
	title = "How can we help?",
	description = "Find answers to your questions and get support for our services.",
	salesCtaLabel = "Talk to sales",
	salesCtaHref = "#",
	supportCtaLabel = "Contact Support",
	supportCtaHref = "#",
}: SubheroSupportCardsProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-4xl text-center">
					<span className="rounded-full border border-primary/10 bg-primary/5 px-2 py-1 font-medium text-primary text-sm">
						{badge}
					</span>
					<h1 className="mt-4 text-balance font-semibold text-4xl md:text-5xl lg:text-6xl lg:tracking-tight">
						{title}
					</h1>
					<p className="mt-4 text-balance text-lg text-muted-foreground">
						{description}
					</p>
					<div className="relative mx-auto mt-12 grid max-w-xl @xl:grid-cols-2 @xl:divide-x @max-xl:divide-y overflow-hidden rounded-xl bg-card/25 text-left shadow-md ring-1 ring-border *:p-6">
						<div className="row-span-4 grid grid-rows-subgrid gap-4">
							<div className="flex size-8 rounded-md bg-card/25 text-emerald-600 shadow shadow-emerald-500/25 ring-1 ring-border">
								<svg
									className="m-auto size-4"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										className="fill-emerald-500/15"
										height="16"
										rx="2"
										width="20"
										x="2"
										y="4"
									/>
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
								</svg>
							</div>
							<h2 className="font-medium">Contact Sales</h2>
							<p className="text-balance text-muted-foreground">
								Get in touch with our sales team for more information.
							</p>
							<a
								className="inline-flex h-8 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
								href={salesCtaHref}
							>
								{salesCtaLabel}
							</a>
						</div>
						<div className="row-span-4 grid grid-rows-subgrid gap-4">
							<div className="flex size-8 rounded-md bg-card/25 text-indigo-600 shadow shadow-indigo-500/25 ring-1 ring-border">
								<svg
									className="m-auto size-4"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										className="fill-indigo-500/15"
										d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
									/>
									<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
									<path d="M12 17h.01" />
								</svg>
							</div>
							<h2 className="font-medium text-lg">Help and Support</h2>
							<p className="text-balance text-muted-foreground">
								Find answers to your questions and get support for our services.
							</p>
							<a
								className="inline-flex h-8 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
								href={supportCtaHref}
							>
								{supportCtaLabel}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
