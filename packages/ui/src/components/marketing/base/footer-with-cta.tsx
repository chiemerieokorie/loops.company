import type { FooterNavLink } from "./types";

export interface FooterWithCtaProps {
	companyLinks?: FooterNavLink[];
	companyName?: string;
	ctaButtonHref?: string;
	ctaButtonLabel?: string;
	ctaDescription?: string;
	ctaTitle?: string;
	description?: string;
	linkedinHref?: string;
	productLinks?: FooterNavLink[];
	statusLabel?: string;
	statusOk?: boolean;
	twitterHref?: string;
	year?: number;
}

export function FooterWithCta({
	companyName = "Astor",
	description = "Astor is a platform for building AI-powered applications.",
	year = 2026,
	ctaTitle = "Create, Sell and Grow",
	ctaDescription = "Join a community of over 1000+ companies and developers who have already discovered the power of Astor.",
	ctaButtonLabel = "Contact Sales",
	ctaButtonHref = "#",
	productLinks = [
		{ label: "Features", href: "#" },
		{ label: "Solution", href: "#" },
		{ label: "Partnerships", href: "#" },
		{ label: "Mobile App", href: "#" },
	],
	companyLinks = [
		{ label: "About", href: "#" },
		{ label: "Licence", href: "#" },
		{ label: "Privacy", href: "#" },
	],
	twitterHref = "#",
	linkedinHref = "#",
	statusLabel = "All Systems Normal",
	statusOk = true,
}: FooterWithCtaProps) {
	return (
		<>
			<section className="relative bg-linear-to-b from-50% from-background to-50% to-muted pt-12 md:pt-24 dark:to-card">
				<div className="mx-auto max-w-5xl px-6">
					<div
						className="relative overflow-hidden rounded-xl bg-card p-12 text-card-foreground shadow-black/[0.065] shadow-lg ring-1 ring-border md:px-32 md:py-20"
						data-slot="card"
					>
						<svg
							className="pointer-events-none absolute inset-0 size-full translate-y-3/4 text-muted"
							fill="none"
							viewBox="0 0 180 220"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clipRule="evenodd"
								d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
								fill="currentColor"
								fillRule="evenodd"
							/>
							<defs>
								<linearGradient
									gradientUnits="userSpaceOnUse"
									id="paint_logo"
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
						<div className="relative text-center">
							<h2 className="text-balance font-semibold text-3xl md:text-4xl">
								{ctaTitle}
							</h2>
							<p className="mt-4 mb-6 text-balance text-muted-foreground">
								{ctaDescription}
							</p>
							<a
								className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 ring-[--ring-color] transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
								href={ctaButtonHref}
							>
								{ctaButtonLabel}
							</a>
						</div>
					</div>
				</div>
			</section>
			<footer
				className="bg-muted py-12 sm:py-20 dark:bg-card"
				role="contentinfo"
			>
				<div className="mx-auto max-w-5xl space-y-16 px-6">
					<div className="grid gap-12 md:grid-cols-5">
						<div className="space-y-6 md:col-span-2 md:space-y-12">
							<a className="font-semibold text-foreground" href="/">
								{companyName}
							</a>
							<p className="text-balance text-muted-foreground text-sm">
								{description}
							</p>
						</div>
						<div className="col-span-3 grid gap-6 sm:grid-cols-3">
							<div className="space-y-4 text-sm">
								<span className="block font-medium">Product</span>
								<div className="flex flex-wrap gap-4 sm:flex-col">
									{productLinks.map((link) => (
										<a
											className="block text-muted-foreground duration-150 hover:text-primary"
											href={link.href}
											key={link.label}
										>
											<span>{link.label}</span>
										</a>
									))}
								</div>
							</div>
							<div className="space-y-4 text-sm">
								<span className="block font-medium">Company</span>
								<div className="flex flex-wrap gap-4 sm:flex-col">
									{companyLinks.map((link) => (
										<a
											className="block text-muted-foreground duration-150 hover:text-primary"
											href={link.href}
											key={link.label}
										>
											<span>{link.label}</span>
										</a>
									))}
								</div>
							</div>
							<div className="space-y-4">
								<span className="block font-medium">Community</span>
								<div className="flex flex-wrap gap-3 text-sm">
									<a
										aria-label="X/Twitter"
										className="block text-muted-foreground hover:text-primary"
										href={twitterHref}
										rel="noopener noreferrer"
										target="_blank"
									>
										<svg
											className="size-5"
											height="1em"
											viewBox="0 0 24 24"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
												fill="currentColor"
											/>
										</svg>
									</a>
									<a
										aria-label="LinkedIn"
										className="block text-muted-foreground hover:text-primary"
										href={linkedinHref}
										rel="noopener noreferrer"
										target="_blank"
									>
										<svg
											className="size-5"
											height="1em"
											viewBox="0 0 24 24"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
												fill="currentColor"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div
						aria-hidden="true"
						className="h-px bg-[length:6px_1px] bg-repeat-x opacity-25 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)]"
					/>
					<div className="flex flex-wrap justify-between gap-4">
						<span className="text-muted-foreground text-sm">
							&copy; {year} {companyName}, All rights reserved
						</span>
						<div className="flex items-center gap-2 rounded-full border border-transparent bg-card py-1 pr-4 pl-2 shadow ring-1 ring-foreground/5">
							<div className="relative flex size-3">
								<span
									className={`absolute inset-0 block size-full animate-pulse rounded-full duration-1500 ${statusOk ? "bg-emerald-100" : "bg-red-100"}`}
								/>
								<span
									className={`relative m-auto block size-1 rounded-full ${statusOk ? "bg-emerald-500" : "bg-red-500"}`}
								/>
							</div>
							<span className="text-sm">{statusLabel}</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
