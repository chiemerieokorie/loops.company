export interface SubheroEnterprise3dProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	screenshotAlt?: string;
	screenshotSrc?: string;
	screenshotSrcDark?: string;
	testimonial?: string;
	testimonialAuthor?: string;
	testimonialAuthorAvatar?: string;
	testimonialAuthorCompany?: string;
	testimonialAuthorRole?: string;
	title?: string;
}

export function SubheroEnterprise3d({
	title = "Invoicing. Enterprise Efficiency. Real Impact.",
	description = "Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease, all on a secure platform.",
	ctaLabel = "Watch demo",
	ctaHref = "#",
	screenshotSrc = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/circle_un3f39.png",
	screenshotSrcDark = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/circle-dark_cv2taw.png",
	screenshotAlt = "app screenshot",
	testimonial = "This platform transformed how we handle client projects. The automation features alone saved us countless hours of manual work every week.",
	testimonialAuthor = "Théo Balick",
	testimonialAuthorRole = "CTO, Vercel",
	testimonialAuthorAvatar = "https://avatars.githubusercontent.com/u/68236786?v=4",
}: SubheroEnterprise3dProps) {
	return (
		<section className="overflow-x-hidden bg-background py-24 lg:py-32">
			<div className="mx-auto max-w-6xl px-6 lg:px-12">
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
						{/* Full-width hero + 3D screenshot */}
						<div className="col-span-full overflow-hidden border-r-0 border-b p-0! text-center">
							<div className="px-12 pt-16">
								<h1 className="text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
									{title}
								</h1>
								<p className="mx-auto mt-6 mb-8 max-w-md text-balance text-lg text-muted-foreground">
									{description}
								</p>
								<a
									className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-8 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
									href={ctaHref}
								>
									{ctaLabel}
								</a>
							</div>
							{/* 3D perspective app screenshot */}
							<div className="pointer-events-none relative scale-105">
								<div className="perspective-[4000px] transform-3d">
									<div className="mask-radial-from-65% mask-radial-at-top-left relative z-1 mx-auto min-w-xl max-w-[96rem] rotate-[332deg] rotate-x-[30deg] rotate-y-[36deg] pt-6 pl-12 lg:min-w-5xl lg:translate-x-12 xl:translate-x-16">
										<div className="absolute top-1 -right-36 bottom-0 left-52 z-10 rounded-2xl bg-background p-1 shadow-2xl shadow-indigo-900/35 ring-1 ring-foreground/10 backdrop-blur md:-right-56 lg:max-w-6xl">
											<div className="relative aspect-video origin-top overflow-hidden rounded-xl">
												<img
													alt={screenshotAlt}
													className="size-full object-cover object-top-left dark:hidden"
													decoding="async"
													height="1920"
													loading="lazy"
													src={screenshotSrc}
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
										<div className="min-w-2xl rounded-2xl border border-background bg-linear-to-b from-muted via-background to-background p-1 shadow-2xl shadow-black/5 ring-1 ring-foreground/10 lg:max-w-6xl dark:bg-card dark:from-card">
											<div className="relative aspect-video origin-top overflow-hidden rounded-xl">
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

						{/* Stat cell 1 */}
						<div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:border-b">
							<p className="text-balance text-muted-foreground">
								<strong className="font-medium text-foreground">
									99.9% Uptime guarantee
								</strong>{" "}
								ensured across all platforms.
							</p>
							<div className="font-medium text-muted-foreground text-xs">
								Stripe
							</div>
						</div>
						{/* Stat cell 2 */}
						<div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:relative max-lg:border-r-0 max-lg:border-b">
							<p className="text-balance text-muted-foreground">
								<strong className="font-medium text-foreground">15X</strong>{" "}
								faster deployment speed.
							</p>
							<div className="font-medium text-muted-foreground text-xs">
								Tailwind
							</div>
						</div>
						{/* Testimonial cell spanning 2 cols */}
						<div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-5 *:block">
							<blockquote className="relative max-w-xl">
								<p className="text-foreground">{testimonial}</p>
								<footer className="mt-4 flex items-center gap-2">
									<div className="size-6 overflow-hidden rounded-md border border-transparent shadow ring-1 ring-foreground/10">
										<img
											alt={testimonialAuthor}
											className="size-full object-cover"
											decoding="async"
											height="46"
											loading="lazy"
											src={testimonialAuthorAvatar}
											style={{ color: "transparent" }}
											width="46"
										/>
									</div>
									<cite>{testimonialAuthor}</cite>
									<span
										aria-hidden="true"
										className="size-1 rounded-full bg-foreground/15"
									/>
									<span className="text-muted-foreground">
										{testimonialAuthorRole}
									</span>
								</footer>
							</blockquote>
							<div className="font-medium text-muted-foreground text-xs">
								Vercel
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
