export interface SubheroSplitCardsProps {
	badge?: string;
	description?: string;
	primaryCtaHref?: string;
	primaryCtaLabel?: string;
	secondaryCtaHref?: string;
	secondaryCtaLabel?: string;
	title?: string;
}

export function SubheroSplitCards({
	badge = "Billing",
	title = "AI-powered billing automation you can trust",
	description = "Simplify invoicing with automated usage tracking and reporting tools.",
	primaryCtaLabel = "Get Started",
	primaryCtaHref = "#",
	secondaryCtaLabel = "Get a demo",
	secondaryCtaHref = "#",
}: SubheroSplitCardsProps) {
	return (
		<section className="bg-background py-20">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid items-center gap-12 md:grid-cols-2">
					<div className="max-md:text-center">
						<span className="font-medium text-primary text-sm">{badge}</span>
						<h1 className="mt-6 text-balance font-semibold text-4xl md:text-5xl">
							{title}
						</h1>
						<p className="mt-4 mb-6 max-w-md text-balance text-lg text-muted-foreground max-md:mx-auto">
							{description}
						</p>
						<a
							className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-3 font-medium text-primary-foreground text-shadow-sm text-xs shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
							href={primaryCtaHref}
						>
							{primaryCtaLabel}
						</a>
						<a
							className="ml-3 inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
							href={secondaryCtaHref}
						>
							{secondaryCtaLabel}
						</a>
					</div>
					<div className="mask-radial-from-50% mask-radial-at-center mask-radial-to-[75%_50%] relative max-md:-mx-6">
						<div className="grid grid-cols-5 items-center gap-4">
							<div className="space-y-4 *:h-32 *:rounded-2xl *:ring-1 *:ring-border">
								<div />
								<div className="h-58! origin-left scale-95 bg-card/50" />
								<div />
							</div>
							<div className="col-span-3 space-y-4">
								<div className="flex h-32 origin-top scale-95 rounded-2xl bg-card/50 p-6 ring-1 ring-border">
									<div className="mt-auto w-full space-y-1 text-sm">
										<div className="grid grid-cols-[auto_1fr] items-center">
											<span className="block w-18 text-muted-foreground">
												To
											</span>
											<span className="h-2 w-1/4 rounded-full bg-border px-2" />
										</div>
										<div className="grid grid-cols-[auto_1fr] items-center">
											<span className="block w-18 text-muted-foreground">
												From
											</span>
											<span className="h-2 w-1/2 rounded-full bg-border px-2" />
										</div>
										<div className="grid grid-cols-[auto_1fr] items-center">
											<span className="block w-18 text-muted-foreground">
												Address
											</span>
											<span className="h-2 w-3/4 rounded-full bg-border px-2" />
										</div>
									</div>
								</div>
								<div className="relative">
									<div className="absolute inset-4 bg-linear-to-br from-rose-300 via-transparent to-blue-500 opacity-50 blur-2xl dark:opacity-15" />
									<div className="relative rounded-2xl bg-illustration/95 p-6 pt-32 shadow-black/6.5 shadow-lg ring-1 ring-border-illustration">
										<div className="relative w-fit translate-y-3 border border-blue-500/50 px-5 py-3">
											<div className="absolute -inset-0.5 flex flex-col justify-between">
												<div className="flex justify-between">
													<div className="size-1 bg-blue-500" />
													<div className="size-1 bg-blue-500" />
													<div className="size-1 bg-blue-500" />
												</div>
												<div className="flex justify-between">
													<div className="size-1 bg-blue-500" />
													<div className="size-1 bg-blue-500" />
												</div>
												<div className="flex justify-between">
													<div className="size-1 bg-blue-500" />
													<div className="size-1 bg-blue-500" />
													<div className="size-1 bg-blue-500" />
												</div>
											</div>
											<span className="block h-10 w-32 rounded bg-foreground/5" />
										</div>
										<div className="border-t px-4 pt-2">
											<div className="text-xs">Méschac Irung</div>
											<div className="text-[10px] text-foreground/65">
												Founder, CEO
											</div>
										</div>
									</div>
								</div>
								<div className="h-32 origin-bottom scale-95 rounded-2xl bg-card/50 p-6 ring-1 ring-border">
									<div className="mb-6 flex items-start justify-between">
										<div className="origin-top-left scale-75 space-y-0.5">
											<div className="mt-4 font-mono text-xs">INV-456349</div>
											<div className="mt-1 font-mono font-semibold text-2xl">
												$57,452.64
											</div>
											<div className="font-medium text-xs">Due today</div>
										</div>
									</div>
								</div>
							</div>
							<div className="space-y-4 *:h-32 *:rounded-2xl *:ring-1 *:ring-border">
								<div />
								<div className="h-58! origin-right scale-95 bg-card/50" />
								<div />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
