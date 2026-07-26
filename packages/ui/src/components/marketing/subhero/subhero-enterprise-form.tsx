export interface SubheroEnterpriseFormProps {
	badge?: string;
	checklistItems?: string[];
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	privacyPolicyHref?: string;
	/** Show dashed crosshair corner decorations (Block015 variant) */
	showDecorations?: boolean;
	title?: string;
}

export function SubheroEnterpriseForm({
	badge = "Enterprise",
	title = "Invoicing. Enterprise Efficiency. Real Impact.",
	description = "Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease, all on a secure platform.",
	ctaLabel = "Watch demo",
	ctaHref = "#",
	checklistItems = ["Create invoices", "Track payments", "Manage finances"],
	privacyPolicyHref = "#",
	showDecorations = false,
}: SubheroEnterpriseFormProps) {
	return (
		<section className="relative">
			{showDecorations && (
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 mx-1 grid max-w-5xl grid-cols-3 border-x px-6 [--color-border:var(--color-border-illustration)] max-lg:hidden sm:grid-cols-4 md:mx-auto"
				>
					<div className="h-full border-r border-dashed" />
					<div className="h-full border-r border-dashed" />
					<div className="h-full max-sm:hidden" />
					<div className="h-full border-l border-dashed max-sm:hidden" />
				</div>
			)}
			<div className="overflow-x-hidden bg-background py-24 lg:py-32">
				<div className="mx-auto max-w-5xl px-6">
					<span className="block font-medium text-primary text-sm max-md:text-center">
						{badge}
					</span>
					<div className="mt-8 grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-12">
						<div className="max-md:text-center">
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
						<div className="relative">
							<div
								aria-hidden="true"
								className="mask-b-from-50% absolute -inset-6 px-6 pt-4"
							>
								<div className="size-full rounded-t-2xl bg-card/75 shadow-black/10 shadow-xl ring-1 ring-border" />
							</div>
							<form className="relative space-y-6 p-8">
								<div className="grid gap-3 sm:grid-cols-2">
									<div className="space-y-3">
										<label
											className="block select-none font-medium text-sm leading-none"
											htmlFor="enterprise-name"
										>
											Full name
										</label>
										<input
											className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
											id="enterprise-name"
											required
											type="text"
										/>
									</div>
									<div className="space-y-3">
										<label
											className="block select-none font-medium text-sm leading-none"
											htmlFor="enterprise-email"
										>
											Work Email
										</label>
										<input
											className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
											id="enterprise-email"
											required
											type="email"
										/>
									</div>
								</div>
								<div className="space-y-3">
									<label
										className="block select-none font-medium text-sm leading-none"
										htmlFor="enterprise-country"
									>
										Country/Region
									</label>
									<select
										className="flex h-9 w-full items-center justify-between rounded-md border border-transparent bg-card px-3 py-2 text-sm shadow-sm ring-1 ring-foreground/10 transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-foreground/5"
										defaultValue=""
										id="enterprise-country"
									>
										<option value="">Select Country/Region</option>
										<option value="cd">DR Congo</option>
										<option value="us">United States</option>
										<option value="fr">France</option>
									</select>
								</div>
								<div className="space-y-3">
									<label
										className="block select-none font-medium text-sm leading-none"
										htmlFor="enterprise-website"
									>
										Company Website
									</label>
									<div className="relative">
										<input
											className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 pl-16 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
											id="enterprise-website"
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
										htmlFor="enterprise-job"
									>
										Job function
									</label>
									<select
										className="flex h-9 w-full items-center justify-between rounded-md border border-transparent bg-card px-3 py-2 text-sm shadow-sm ring-1 ring-foreground/10 transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-foreground/5"
										defaultValue=""
										id="enterprise-job"
									>
										<option value="">Select Job Function</option>
										<option value="finance">Finance</option>
										<option value="education">Education</option>
										<option value="legal">Legal</option>
										<option value="other">More</option>
									</select>
								</div>
								<div className="space-y-3">
									<label
										className="block select-none font-medium text-sm leading-none"
										htmlFor="enterprise-msg"
									>
										Message
									</label>
									<textarea
										className="field-sizing-content flex min-h-16 w-full rounded-md border border-transparent bg-card px-3 py-2 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="enterprise-msg"
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
					</div>
				</div>
			</div>
		</section>
	);
}
