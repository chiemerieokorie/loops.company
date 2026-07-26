export interface CtaSplitProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	title?: string;
}

export function CtaSplit({
	title = "Create, Sell and Grow",
	description = "Join a community of over 1000+ companies and developers who have already discovered the power of Astor.",
	ctaLabel = "Contact Sales",
	ctaHref = "#",
}: CtaSplitProps) {
	return (
		<section className="bg-background py-12 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div
					className="relative overflow-hidden rounded-xl bg-card pt-8 pl-8 text-card-foreground shadow-black/6.5 shadow-lg ring-1 ring-border md:p-20"
					data-slot="card"
				>
					<div className="max-w-xl max-md:pr-8">
						<div className="relative">
							<h2 className="text-balance font-semibold text-3xl text-foreground md:text-4xl">
								{title}
							</h2>
							<p className="mt-4 mb-6 text-balance text-muted-foreground">
								{description}
							</p>
							<a
								className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
								href={ctaHref}
							>
								{ctaLabel}
							</a>
						</div>
					</div>
					<div className="max-lg:mask-b-from-35% max-md:mt-4 max-lg:pt-6 lg:absolute lg:inset-0 lg:top-12 lg:ml-auto lg:w-2/5">
						<div aria-hidden="true" className="relative">
							<div className="absolute -top-6 -right-6 bottom-0 left-[13rem] z-1 rounded-xl border bg-card shadow-xl" />
							<div className="mask-b-from-50% rounded-xl border">
								<div className="absolute inset-y-0 left-0 w-[12rem] border-r">
									<div className="flex gap-1.5 px-4 pt-4">
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
									</div>
								</div>
								<div className="ml-auto w-[calc(100%-12rem)]">
									<div className="h-11 border-b" />
									<div className="relative h-80">
										<div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-50" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
