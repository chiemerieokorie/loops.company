export interface SubheroEnterpriseGrooveProps {
	description?: string;
	labelText?: string;
	primaryCtaHref?: string;
	primaryCtaLabel?: string;
	screenshotAlt?: string;
	screenshotSrc?: string;
	screenshotSrcDark?: string;
	secondaryCtaHref?: string;
	secondaryCtaLabel?: string;
	title?: string;
}

export function SubheroEnterpriseGroove({
	labelText = "[ Enterprise Invoicing ]",
	title = "Invoicing. Enterprise Efficiency. Real Impact.",
	description = "Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease, all on a secure platform.",
	primaryCtaLabel = "Get started",
	primaryCtaHref = "#",
	secondaryCtaLabel = "Request a demo",
	secondaryCtaHref = "#",
	screenshotSrc = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/circle_un3f39.png",
	screenshotSrcDark = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/circle-dark_cv2taw.png",
	screenshotAlt = "app screenshot",
}: SubheroEnterpriseGrooveProps) {
	return (
		<section className="bg-background">
			<div className="bg-foreground/8">
				{/* Label row */}
				<div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded bg-background max-lg:w-2" />
					</div>
					<div className="mx-auto w-full p-[0.5px] lg:min-w-5xl">
						<div className="h-full rounded bg-background">
							<div className="max-w-lg px-6 pt-12 pb-6 md:pt-24">
								<span className="font-mono text-muted-foreground text-sm uppercase">
									{labelText}
								</span>
							</div>
						</div>
					</div>
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded bg-background max-lg:w-2" />
					</div>
				</div>

				{/* Main content row */}
				<div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded bg-background max-lg:w-2" />
					</div>
					<div className="mx-auto w-full max-w-5xl lg:min-w-5xl">
						<div className="grid grid-cols-2 *:p-[0.5px] lg:grid-cols-6">
							{/* Left: heading + CTAs (3 cols) */}
							<div className="col-span-3 max-lg:text-center">
								<div className="flex h-full flex-col justify-center rounded bg-background px-8 py-16">
									<h1 className="text-balance font-semibold text-5xl lg:text-6xl">
										{title}
									</h1>
									<p className="mx-auto mt-6 mb-8 max-w-md text-balance text-lg text-muted-foreground max-lg:mx-auto">
										{description}
									</p>
									<div className="flex gap-3 max-lg:justify-center">
										<a
											className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
											href={primaryCtaHref}
										>
											{primaryCtaLabel}
										</a>
										<a
											className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
											href={secondaryCtaHref}
										>
											{secondaryCtaLabel}
										</a>
									</div>
								</div>
							</div>

							{/* Right: app screenshots (3 cols) */}
							<div className="col-span-3">
								<div className="relative h-full overflow-hidden rounded bg-background">
									<div
										aria-hidden="true"
										className="pointer-events-none absolute inset-0 opacity-50"
										style={{
											backgroundImage:
												"repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px)",
										}}
									/>
									<div className="mask-radial-at-left mask-radial-[115%_100%] mask-radial-from-45% pointer-events-none h-full">
										<div className="relative min-w-md max-w-lg px-6 pt-12 pb-12 lg:px-12 lg:pt-16">
											<div className="absolute top-8 -right-36 bottom-8 left-36 z-10 overflow-hidden rounded-2xl bg-background p-1 shadow-2xl shadow-indigo-900/35 ring-1 ring-foreground/10 backdrop-blur md:-right-56 lg:top-12 lg:bottom-6 lg:left-44 lg:max-w-6xl">
												<div className="relative aspect-video origin-top rounded-xl">
													<img
														alt={screenshotAlt}
														className="size-full object-cover object-top-left dark:hidden"
														decoding="async"
														height="1920"
														loading="lazy"
														src="https://raw.githubusercontent.com/Astor/assets/refs/heads/main/circle-4_lkhxqm.png"
														style={{ color: "transparent" }}
														width="2880"
													/>
													<img
														alt={screenshotAlt}
														className="not-dark:hidden size-full object-cover object-top-left"
														decoding="async"
														height="1920"
														loading="lazy"
														src="https://raw.githubusercontent.com/Astor/assets/refs/heads/main/circle-4-dark_m2mfxo.png"
														style={{ color: "transparent" }}
														width="2880"
													/>
												</div>
											</div>
											<div className="min-w-2xl rounded-xl border border-background bg-linear-to-b from-muted via-background to-background p-1 shadow-2xl shadow-black/5 ring-1 ring-foreground/10 lg:max-w-6xl dark:bg-card dark:from-card">
												<div className="relative aspect-video origin-top overflow-hidden rounded-lg">
													<img
														alt={screenshotAlt}
														className="size-full object-cover object-top-left mix-blend-darken dark:hidden"
														decoding="async"
														height="1920"
														loading="lazy"
														src={screenshotSrc}
														style={{ color: "transparent" }}
														width="2880"
													/>
													<img
														alt={screenshotAlt}
														className="not-dark:hidden size-full object-cover object-top-left opacity-65"
														decoding="async"
														height="1920"
														loading="lazy"
														src={screenshotSrcDark}
														style={{ color: "transparent" }}
														width="2880"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded bg-background max-lg:w-2" />
					</div>
				</div>

				{/* Logo bar row */}
				<div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded bg-background max-lg:w-2" />
					</div>
					<div className="mx-auto w-full max-w-5xl lg:min-w-5xl">
						<div className="grid grid-cols-2 *:p-[0.5px] lg:grid-cols-6">
							<div>
								<div className="flex h-16 items-center justify-center rounded bg-background md:h-20">
									<span className="font-medium text-muted-foreground text-xs">
										Stripe
									</span>
								</div>
							</div>
							<div>
								<div className="flex h-16 items-center justify-center rounded bg-background md:h-20">
									<span className="font-medium text-muted-foreground text-xs">
										OpenAI
									</span>
								</div>
							</div>
							<div>
								<div className="flex h-16 items-center justify-center rounded bg-background md:h-20">
									<span className="font-medium text-muted-foreground text-xs">
										Vercel
									</span>
								</div>
							</div>
							<div>
								<div className="flex h-16 items-center justify-center rounded bg-background md:h-20">
									<span className="font-medium text-muted-foreground text-xs">
										Hulu
									</span>
								</div>
							</div>
							<div>
								<div className="flex h-16 items-center justify-center rounded bg-background md:h-20">
									<span className="font-medium text-muted-foreground text-xs">
										Obyte
									</span>
								</div>
							</div>
							<div>
								<div className="flex h-16 items-center justify-center rounded bg-background md:h-20">
									<span className="font-medium text-muted-foreground text-xs">
										Socsci
									</span>
								</div>
							</div>
						</div>
					</div>
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded bg-background max-lg:w-2" />
					</div>
				</div>

				{/* Bottom padding row */}
				<div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded bg-background max-lg:w-2" />
					</div>
					<div className="mx-auto w-full max-w-5xl p-[0.5px] lg:min-w-5xl">
						<div className="h-8 rounded bg-background" />
					</div>
					<div aria-hidden="true" className="p-[0.5px]">
						<div className="h-full rounded bg-background max-lg:w-2" />
					</div>
				</div>
			</div>
		</section>
	);
}
