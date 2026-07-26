export interface SubheroSplitInvoiceProps {
	badge?: string;
	description?: string;
	imageAlt?: string;
	imageSrc?: string;
	invoiceAmount?: string;
	invoiceDue?: string;
	invoiceNumber?: string;
	primaryCtaHref?: string;
	primaryCtaLabel?: string;
	secondaryCtaHref?: string;
	secondaryCtaLabel?: string;
	stat1Label?: string;
	stat1Unit?: string;
	stat1Value?: string;
	stat2Label?: string;
	stat2Unit?: string;
	stat2Value?: string;
	title?: string;
}

export function SubheroSplitInvoice({
	badge = "Billing",
	title = "Streamline Your Invoicing Process",
	description = "Simplify invoicing with automated usage tracking and reporting tools.",
	primaryCtaLabel = "Get Started",
	primaryCtaHref = "#",
	secondaryCtaLabel = "Get a demo",
	secondaryCtaHref = "#",
	stat1Value = "99.9",
	stat1Unit = "%",
	stat1Label = "Uptime guarantee for all our services.",
	stat2Value = "12",
	stat2Unit = "X",
	invoiceNumber = "INV-456789",
	invoiceAmount = "$284,342.57",
	invoiceDue = "Due in 15 days",
	imageSrc = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/work4_c0ffmk.webp",
	imageAlt = "Astor hero section work",
}: SubheroSplitInvoiceProps) {
	return (
		<section className="bg-background py-20">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid items-center gap-12 md:grid-cols-2">
					{/* Left: text + stats */}
					<div className="max-md:text-center">
						<span className="font-medium text-primary text-sm">{badge}</span>
						<h1 className="mt-4 text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
							{title}
						</h1>
						<p className="mt-4 mb-6 max-w-md text-balance text-lg text-muted-foreground max-md:mx-auto">
							{description}
						</p>
						<div className="flex gap-3 max-md:justify-center">
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
						<div className="mt-12 grid max-w-sm grid-cols-2 max-md:mx-auto">
							<div className="space-y-2 *:block">
								<span className="font-semibold text-lg">
									{stat1Value}{" "}
									<span className="text-lg text-muted-foreground">
										{stat1Unit}
									</span>
								</span>
								<p className="text-balance text-muted-foreground text-sm">
									<strong className="font-medium text-foreground">
										Uptime guarantee
									</strong>{" "}
									{stat1Label.replace("Uptime guarantee ", "")}
								</p>
							</div>
							<div className="space-y-2 *:block">
								<span className="font-semibold text-lg">
									{stat2Value}{" "}
									<span className="text-lg text-muted-foreground">
										{stat2Unit}
									</span>
								</span>
								<p className="text-balance text-muted-foreground text-sm">
									<strong className="font-medium text-foreground">
										{stat2Value}X
									</strong>{" "}
									faster processing than previous generation.
								</p>
							</div>
						</div>
					</div>

					{/* Right: invoice card overlay + photo */}
					<div className="relative max-md:-mx-6">
						{/* Floating invoice card */}
						<div className="absolute inset-y-0 z-10 my-auto h-fit w-full max-w-72 origin-left scale-75 max-lg:left-6">
							<div className="absolute -inset-6 bg-linear-to-r from-purple-400 via-emerald-400 to-white opacity-25 blur-3xl dark:opacity-15" />
							<div className="relative rounded-2xl bg-card p-6 shadow-black/10 shadow-xl ring-1 ring-border">
								<div className="mb-6 flex items-start justify-between">
									<div className="space-y-0.5">
										{/* Logo mark */}
										<svg
											className="size-5"
											fill="none"
											viewBox="0 0 180 220"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												clipRule="evenodd"
												d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
												fill="url(#paint_logo_invoice)"
												fillRule="evenodd"
											/>
											<defs>
												<linearGradient
													gradientUnits="userSpaceOnUse"
													id="paint_logo_invoice"
													x1="90"
													x2="90"
													y1="0"
													y2="220"
												>
													<stop stopColor="#9B99FE" />
													<stop offset="1" stopColor="#2BC8B7" />
												</linearGradient>
											</defs>
										</svg>
										<div className="mt-4 font-mono text-xs">
											{invoiceNumber}
										</div>
										<div className="mt-1 -translate-x-1 font-mono font-semibold text-2xl">
											{invoiceAmount}
										</div>
										<div className="font-medium text-xs">{invoiceDue}</div>
									</div>
								</div>
								<div className="mt-6 flex h-24 items-center justify-center rounded-md border border-foreground/15 border-dashed bg-foreground/5">
									<div className="border-foreground/35 border-b px-6 font-serif text-foreground/50 text-lg">
										Sign here
									</div>
								</div>
							</div>
						</div>

						{/* Background photo with radial mask fade */}
						<div className="mask-radial-from-75% ml-auto w-4/5 px-4 py-8">
							<div className="relative mt-auto aspect-2/3 h-fit overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5 before:bg-primary/5 sm:aspect-video md:aspect-2/3">
								<img
									alt={imageAlt}
									className="size-full object-cover"
									decoding="async"
									height="1481"
									loading="lazy"
									src={imageSrc}
									style={{ color: "transparent" }}
									width="987"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
