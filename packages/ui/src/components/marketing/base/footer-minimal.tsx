export interface FooterMinimalLink {
	href: string;
	label: string;
}

export interface FooterMinimalProps {
	companyName?: string;
	linkedinHref?: string;
	links?: FooterMinimalLink[];
	statusLabel?: string;
	statusOk?: boolean;
	twitterHref?: string;
	year?: number;
}

export function FooterMinimal({
	companyName = "Astor",
	year = 2026,
	links = [
		{ label: "Features", href: "#" },
		{ label: "Solutions", href: "#" },
		{ label: "Partnerships", href: "#" },
		{ label: "Mobile App", href: "#" },
		{ label: "Blog", href: "#" },
		{ label: "About", href: "#" },
		{ label: "Licence", href: "#" },
		{ label: "Privacy", href: "#" },
	],
	twitterHref = "#",
	linkedinHref = "#",
	statusLabel = "All Systems Normal",
	statusOk = true,
}: FooterMinimalProps) {
	return (
		<footer className="bg-background py-8 sm:py-16" role="contentinfo">
			<div className="mx-auto max-w-5xl space-y-6 px-6">
				<div className="flex flex-wrap justify-between gap-6">
					<a className="font-semibold text-foreground" href="/">
						{companyName}
					</a>
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
				<div className="flex flex-wrap gap-4 md:gap-6">
					{links.map((link) => (
						<a
							className="block text-foreground text-sm duration-150 hover:text-primary"
							href={link.href}
							key={link.label}
						>
							<span>{link.label}</span>
						</a>
					))}
				</div>
				<div
					aria-hidden="true"
					className="h-px bg-[length:6px_1px] bg-repeat-x opacity-25 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)]"
				/>
				<div className="flex flex-wrap justify-between gap-4">
					<span className="text-muted-foreground text-sm">
						&copy; {year} {companyName}
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
	);
}
