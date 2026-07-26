export interface SubheroEnterpriseGridProps {
	checklistItems?: string[];
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	privacyPolicyHref?: string;
	title?: string;
}

export function SubheroEnterpriseGrid({
	title = "Invoicing. Enterprise Efficiency. Real Impact.",
	description = "Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease, all on a secure platform.",
	ctaLabel = "Watch demo",
	ctaHref = "#",
	checklistItems = ["Create invoices", "Track payments", "Manage finances"],
	privacyPolicyHref = "#",
}: SubheroEnterpriseGridProps) {
	return (
		<section className="overflow-x-hidden bg-background py-24 lg:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative">
					{/* Corner crosshair decorations */}
					<div
						aria-hidden="true"
						className="mask-radial-from-15% -translate-[calc(50%-0.5px)] absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute right-0 size-3 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute right-0 bottom-0 size-3 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute bottom-0 size-3 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>

					<div className="grid grid-cols-2 divide-x border *:p-6 md:*:p-8 lg:grid-cols-4">
						{/* Left: headline + form */}
						<div className="col-span-2 border-b max-md:text-center max-lg:border-r-0">
							<h1 className="text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
								{title}
							</h1>
							<p className="mt-6 mb-8 max-w-sm text-balance text-lg text-muted-foreground max-md:mx-auto">
								{description}
							</p>
							<a
								className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-8 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
								href={ctaHref}
							>
								{ctaLabel}
							</a>
							<ul className="mt-8 space-y-2">
								{checklistItems.map((item) => (
									<li
										className="flex items-center gap-2 text-muted-foreground max-md:justify-center"
										key={item}
									>
										<svg
											className="size-4 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="12" cy="12" r="10" />
											<path d="m9 12 2 2 4-4" />
										</svg>
										{item}
									</li>
								))}
							</ul>
						</div>

						{/* Right: contact form */}
						<div className="relative col-span-2 border-r-0 border-b bg-card/25 lg:pt-10">
							<div
								aria-hidden="true"
								className="mask-radial-from-15% absolute bottom-0 left-0 size-3 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
							/>
							<form className="relative space-y-6 p-8">
								<div className="grid gap-3 sm:grid-cols-2">
									<div className="space-y-3">
										<label
											className="block select-none font-medium text-sm leading-none"
											htmlFor="grid-name"
										>
											Full name
										</label>
										<input
											className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 md:text-sm dark:bg-foreground/5"
											id="grid-name"
											required
											type="text"
										/>
									</div>
									<div className="space-y-3">
										<label
											className="block select-none font-medium text-sm leading-none"
											htmlFor="grid-email"
										>
											Work Email
										</label>
										<input
											className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 md:text-sm dark:bg-foreground/5"
											id="grid-email"
											required
											type="email"
										/>
									</div>
								</div>
								<div className="space-y-3">
									<label
										className="block select-none font-medium text-sm leading-none"
										htmlFor="grid-website"
									>
										Company Website
									</label>
									<div className="relative">
										<input
											className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 pl-16 text-base shadow-sm outline-none ring-1 ring-foreground/10 placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 md:text-sm dark:bg-foreground/5"
											id="grid-website"
											placeholder="astor.com"
											type="url"
										/>
										<span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground text-sm">
											https://
										</span>
									</div>
								</div>
								<div className="space-y-3">
									<label
										className="block select-none font-medium text-sm leading-none"
										htmlFor="grid-msg"
									>
										Message
									</label>
									<textarea
										className="field-sizing-content flex min-h-16 w-full rounded-md border border-transparent bg-card px-3 py-2 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 md:text-sm dark:bg-foreground/5"
										id="grid-msg"
										rows={3}
									/>
								</div>
								<div className="grid gap-6 sm:grid-cols-[1fr_auto]">
									<p className="text-muted-foreground text-sm">
										By submitting this form, you agree to our{" "}
										<a
											className="text-primary underline"
											href={privacyPolicyHref}
										>
											Privacy Policy
										</a>
									</p>
									<button
										className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 max-sm:row-start-1"
										type="submit"
									>
										Get in touch
									</button>
								</div>
							</form>
						</div>

						{/* Stat cells */}
						<div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:border-b">
							<p className="text-balance text-muted-foreground">
								<strong className="font-medium text-foreground">
									99.9% Uptime guarantee
								</strong>{" "}
								ensured across all platforms.
							</p>
							<div className="text-muted-foreground text-xs">Stripe</div>
						</div>
						<div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:relative max-lg:border-r-0 max-lg:border-b">
							<p className="text-balance text-muted-foreground">
								<strong className="font-medium text-foreground">15X</strong>{" "}
								faster deployment speed.
							</p>
							<div className="text-muted-foreground text-xs">Tailwind</div>
						</div>
						<div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
							<p className="text-muted-foreground">
								<strong className="font-medium text-foreground">
									24/7 Support
								</strong>{" "}
								with dedicated teams.
							</p>
							<div className="text-muted-foreground text-xs">Beacon</div>
						</div>
						<div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
							<p className="text-balance text-muted-foreground">
								<strong className="font-medium text-foreground">
									Seamless Integration
								</strong>{" "}
								with top industry tools.
							</p>
							<div className="text-muted-foreground text-xs">Vercel</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
