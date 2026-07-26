export interface SubheroCenteredProps {
	badge?: string;
	description?: string;
	primaryCtaHref?: string;
	primaryCtaLabel?: string;
	secondaryCtaHref?: string;
	secondaryCtaLabel?: string;
	title?: string;
}

export function SubheroCentered({
	badge = "Billing",
	title = "Streamline Your Invoicing Process",
	description = "Simple and secure user authentication, complete with everything you need out-of-the-box to provide a secure experience for your users.",
	primaryCtaLabel = "Get Started",
	primaryCtaHref = "#",
	secondaryCtaLabel = "Get a demo",
	secondaryCtaHref = "#",
}: SubheroCenteredProps) {
	return (
		<section className="overflow-hidden bg-background pt-24 pb-8">
			<div className="mx-auto max-w-5xl px-6">
				{/* Centered heading block */}
				<div className="mb-20 text-center *:mx-auto">
					<span className="font-medium text-primary text-sm">{badge}</span>
					<h1 className="mt-6 max-w-2xl text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
						{title}
					</h1>
					<p className="mt-4 mb-6 max-w-3xl text-balance text-lg text-muted-foreground">
						{description}
					</p>
					<div className="flex justify-center gap-3">
						<a
							className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-3 font-medium text-primary-foreground text-shadow-sm text-xs shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
							href={primaryCtaHref}
						>
							{primaryCtaLabel}
						</a>
						<a
							className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
							href={secondaryCtaHref}
						>
							{secondaryCtaLabel}
						</a>
					</div>
				</div>

				{/* Decorative dashed grid background with placeholder app UI */}
				<div className="relative h-fit">
					{/* Horizontal dashed lines */}
					<div
						aria-hidden="true"
						className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-between"
					>
						{Array.from({ length: 5 }).map((_, i) => (
							<div
								className="h-px border-foreground/10 border-b border-dashed dark:border-foreground/5"
								key={i}
							/>
						))}
						{Array.from({ length: 8 }).map((_, i) => (
							<div
								className="h-px border-foreground/10 border-b border-dashed md:hidden dark:border-foreground/5"
								key={`md-${i}`}
							/>
						))}
					</div>

					{/* Vertical dashed columns */}
					<div aria-hidden="true" className="absolute inset-0 m-auto max-w-4xl">
						{[0, 1, 2, 3, 5, 6, 7, 8, 9, 10].map((col) => (
							<div
								className="absolute -inset-y-4 w-1/11 border-foreground/10 border-r border-dashed dark:border-foreground/5"
								key={col}
								style={{ left: `${(col / 11) * 100}%` }}
							/>
						))}
					</div>

					{/* App UI mockup cells */}
					<div className="relative mx-auto grid max-w-4xl px-px max-md:gap-6 md:grid-cols-11">
						<div className="flex flex-wrap items-center justify-center gap-2 md:col-span-3">
							<div className="w-full rounded-xl border border-border bg-card p-4 shadow-sm">
								<p className="font-medium text-muted-foreground text-xs">
									Total Revenue
								</p>
								<p className="mt-1 font-semibold text-2xl">$48,295</p>
							</div>
						</div>
						<div className="flex flex-wrap items-center justify-center gap-2 md:col-span-5">
							<div className="w-full rounded-xl border border-border bg-card p-4 shadow-sm">
								<p className="font-medium text-muted-foreground text-xs">
									Recent Invoices
								</p>
								<div className="mt-2 space-y-2">
									{[
										{ id: "INV-001", amount: "$1,200", status: "Paid" },
										{ id: "INV-002", amount: "$3,450", status: "Pending" },
										{ id: "INV-003", amount: "$890", status: "Overdue" },
									].map((inv) => (
										<div
											className="flex items-center justify-between"
											key={inv.id}
										>
											<span className="text-muted-foreground text-xs">
												{inv.id}
											</span>
											<span className="text-xs">{inv.amount}</span>
											<span className="text-muted-foreground text-xs">
												{inv.status}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="flex flex-wrap items-center justify-center gap-2 md:col-span-3">
							<div className="w-full rounded-xl border border-border bg-card p-4 shadow-sm">
								<p className="font-medium text-muted-foreground text-xs">
									Active Clients
								</p>
								<p className="mt-1 font-semibold text-2xl">124</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
