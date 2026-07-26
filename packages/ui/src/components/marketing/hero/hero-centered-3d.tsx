export interface HeroCentered3dProps {
	description?: string;
	highlightText?: string;
	partners?: Array<{ label: string; value: string }>;
	primaryCta?: { label: string; href: string };
	screenshotAlt?: string;
	screenshotSrc?: string;
	secondaryCta?: { label: string; href: string };
	title?: string;
}

export function HeroCentered3d({
	title = "The Financial OS",
	highlightText = "powering businesses on your platform",
	description = "Experience seamless payments, real-time collaboration, and actionable insights. Set up in minutes.",
	primaryCta = { label: "Get Started", href: "#" },
	secondaryCta = { label: "Learn More", href: "#" },
	screenshotSrc,
	screenshotAlt = "Product dashboard",
	partners = [
		{ label: "Annual Revenue Managed", value: "$2.4B+" },
		{ label: "Businesses Using Platform", value: "18,000+" },
		{ label: "Countries Supported", value: "95+" },
	],
}: HeroCentered3dProps) {
	return (
		<section className="relative bg-background">
			<div className="bg-linear-to-b from-background to-primary/6 pt-24 pb-20 md:pt-32 lg:pt-36 lg:pb-72">
				<div className="perspective-near relative z-10 mx-auto max-w-5xl px-6 text-center">
					<h1 className="mx-auto max-w-2xl text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
						{title}{" "}
						<span className="text-muted-foreground">{highlightText}</span>
					</h1>
					<p className="mx-auto mt-4 mb-8 max-w-lg text-balance text-lg text-muted-foreground">
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

					{/* 3D perspective screenshot */}
					<div
						aria-hidden="true"
						className="relative mx-auto mt-12 aspect-video max-w-2xl"
						style={{ transform: "rotateX(16deg)" }}
					>
						<div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/20 ring-1 ring-border">
							{screenshotSrc ? (
								<img
									alt={screenshotAlt}
									className="w-full object-cover"
									src={screenshotSrc}
								/>
							) : (
								<div className="flex h-64 flex-col bg-background">
									<div className="flex items-center gap-1.5 border-border border-b px-4 py-2.5">
										<div className="size-2 rounded-full bg-foreground/15" />
										<div className="size-2 rounded-full bg-foreground/15" />
										<div className="size-2 rounded-full bg-foreground/15" />
										<div className="mx-auto h-4 w-48 rounded bg-muted" />
									</div>
									<div className="flex flex-1 gap-3 p-4">
										<div className="w-40 shrink-0 space-y-2 rounded-lg border border-border bg-muted/30 p-3">
											{Array.from({ length: 6 }).map((_, i) => (
												<div
													className="h-3 rounded bg-muted"
													key={i}
													style={{ width: `${60 + i * 6}%` }}
												/>
											))}
										</div>
										<div className="flex-1 space-y-3">
											<div className="grid grid-cols-2 gap-2">
												{Array.from({ length: 4 }).map((_, i) => (
													<div
														className="rounded-lg border border-border bg-card p-3"
														key={i}
													>
														<div className="h-2 w-12 rounded bg-muted" />
														<div className="mt-2 h-4 w-16 rounded bg-muted" />
													</div>
												))}
											</div>
											<div className="h-24 rounded-lg border border-border bg-card" />
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Partner stats row */}
			{partners.length > 0 && (
				<div className="relative z-20 mx-auto -mt-20 max-w-5xl px-6 lg:flex lg:items-center lg:justify-center lg:gap-8">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						{partners.map((partner) => (
							<div
								className="rounded-2xl border border-border bg-card p-6 text-center shadow-black/6.5 shadow-lg ring-1 ring-border"
								key={partner.label}
							>
								<p className="font-semibold text-2xl">{partner.value}</p>
								<p className="mt-1 text-muted-foreground text-sm">
									{partner.label}
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</section>
	);
}
