export interface FeatureBentoTextTopProps {
	collaborativeAnalysisDescription?: string;
	collaborativeAnalysisTitle?: string;
	pollTimelineDescription?: string;
	pollTimelineTitle?: string;
	scheduledReportsDescription?: string;
	scheduledReportsTitle?: string;
	spendingLimitDescription?: string;
	spendingLimitTitle?: string;
	teamCommentDescription?: string;
	teamCommentTitle?: string;
}

export function FeatureBentoTextTop({
	scheduledReportsTitle = "Scheduled Reports",
	scheduledReportsDescription = "Automate report delivery to stakeholders with customizable scheduling options.",
	collaborativeAnalysisTitle = "Collaborative Analysis",
	collaborativeAnalysisDescription = "Add comments, share insights, and work together with your team to extract maximum.",
	teamCommentTitle = "Collaborative Analysis",
	teamCommentDescription = "Add comments, share insights, and work together with your team to extract maximum.",
	pollTimelineTitle = "Collaborative Analysis",
	pollTimelineDescription = "Add comments, share insights, and work together with your team to extract maximum.",
	spendingLimitTitle = "Collaborative Analysis",
	spendingLimitDescription = "Add comments, share insights, and work together with your team to extract maximum.",
}: FeatureBentoTextTopProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @3xl:grid-cols-6 @xl:grid-cols-2 gap-3 not-dark:*:bg-card/50">
					{/* Card 1 — Scheduled Reports */}
					<div
						className="@3xl:col-span-2 grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{scheduledReportsTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{scheduledReportsDescription}
							</p>
						</div>
						<div className="relative -m-8 flex items-end bg-linear-to-b p-8">
							<div
								aria-hidden="true"
								className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_6px)] opacity-3 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
							/>
							<div aria-hidden="true" className="relative w-full">
								<div className="group relative grid w-full gap-2.5 rounded-2xl border border-transparent bg-illustration p-4 text-xs shadow-black/6.5 shadow-md ring-1 ring-border-illustration duration-300 [grid-template-columns:auto_1fr]">
									<div className="relative h-fit">
										<div className="absolute bottom-1.5 -left-1.5 rounded-md border-red-700 border-t bg-red-500 px-1 py-px font-medium text-[10px] text-white shadow-md shadow-red-500/35">
											PDF
										</div>
										<div className="h-10 w-8 rounded-md border bg-gradient-to-b from-gray-100 to-gray-200" />
									</div>
									<div className="mt-0.5">
										<div className="font-medium text-sm">
											react-visualizations.pdf
										</div>
										<div className="relative my-1.5 h-1 overflow-hidden rounded-full bg-foreground/5 before:absolute before:inset-0 before:w-1/3 before:rounded-r-full before:bg-primary before:delay-150 before:duration-300 group-hover:before:w-2/3" />
										<div className="text-muted-foreground text-xs">
											29 KB / 120KB
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Card 2 — Collaborative Analysis with currency cards */}
					<div
						className="@3xl:col-span-2 grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{collaborativeAnalysisTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{collaborativeAnalysisDescription}
							</p>
						</div>
						<div className="relative -m-8 flex items-end bg-linear-to-b p-8">
							<div
								aria-hidden="true"
								className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_6px)] opacity-3 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
							/>
							<div aria-hidden="true" className="flex -space-x-4">
								<div className="before:mask-b-from-65% relative w-16 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-25% before:from-blue-500/15 before:to-75%">
									<div className="flex -translate-x-0.5 items-center gap-0.5 text-blue-900 dark:text-blue-300">
										<svg
											className="size-3"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
										</svg>
										<span className="font-medium text-xs">BTC</span>
									</div>
									<div className="space-y-1.5">
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-border" />
											<div className="h-[3px] w-6 rounded-full bg-border" />
										</div>
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-border" />
											<div className="h-[3px] w-6 rounded-full bg-border" />
										</div>
									</div>
									<div className="space-y-1.5">
										<div className="h-[3px] w-full rounded-full bg-border" />
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2/3 rounded-full bg-border" />
											<div className="h-[3px] w-1/3 rounded-full bg-border" />
										</div>
									</div>
									<svg
										className="ml-auto size-3"
										fill="none"
										height="24"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
										<path d="M3 21h18" />
									</svg>
								</div>
								<div className="before:mask-b-from-65% relative w-16 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-25% before:from-green-500/15 before:to-75%">
									<div className="flex -translate-x-0.5 items-center gap-0.5 text-green-900 dark:text-green-300">
										<svg
											className="size-3"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<line x1="12" x2="12" y1="2" y2="22" />
											<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
										</svg>
										<span className="font-medium text-xs">USD</span>
									</div>
									<div className="space-y-1.5">
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-border" />
											<div className="h-[3px] w-6 rounded-full bg-border" />
										</div>
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-border" />
											<div className="h-[3px] w-6 rounded-full bg-border" />
										</div>
									</div>
									<div className="space-y-1.5">
										<div className="h-[3px] w-full rounded-full bg-border" />
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2/3 rounded-full bg-border" />
											<div className="h-[3px] w-1/3 rounded-full bg-border" />
										</div>
									</div>
									<svg
										className="ml-auto size-3"
										fill="none"
										height="24"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
										<path d="M3 21h18" />
									</svg>
								</div>
								<div className="before:mask-b-from-65% relative w-16 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-25% before:from-red-500/15 before:to-75%">
									<div className="flex -translate-x-0.5 items-center gap-0.5 text-red-900 dark:text-red-300">
										<svg
											className="size-3"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M4 10h12" />
											<path d="M4 14h9" />
											<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
										</svg>
										<span className="font-medium text-xs">EURO</span>
									</div>
									<div className="space-y-1.5">
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-border" />
											<div className="h-[3px] w-6 rounded-full bg-border" />
										</div>
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-border" />
											<div className="h-[3px] w-6 rounded-full bg-border" />
										</div>
									</div>
									<div className="space-y-1.5">
										<div className="h-[3px] w-full rounded-full bg-border" />
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2/3 rounded-full bg-border" />
											<div className="h-[3px] w-1/3 rounded-full bg-border" />
										</div>
									</div>
									<svg
										className="ml-auto size-3"
										fill="none"
										height="24"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
										<path d="M3 21h18" />
									</svg>
								</div>
							</div>
						</div>
					</div>

					{/* Card 3 — Team comment composer */}
					<div
						className="@3xl:col-span-2 grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{teamCommentTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{teamCommentDescription}
							</p>
						</div>
						<div className="relative -m-8 flex items-end bg-linear-to-b p-8">
							<div
								aria-hidden="true"
								className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_6px)] opacity-3 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
							/>
							<div
								aria-hidden="true"
								className="relative mt-0 flex w-full origin-bottom flex-col space-y-4 rounded-2xl border border-transparent bg-illustration px-4 pt-4 pb-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration transition-all duration-300"
							>
								<p className="font-medium text-primary text-sm">
									@Bernard{" "}
									<span className="font-normal text-muted-foreground">
										Shared 2 invoices
									</span>
								</p>
								<div className="-ml-1.5 flex text-muted-foreground">
									<div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
										<svg
											className="m-auto size-4"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="12" cy="12" r="4" />
											<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
										</svg>
									</div>
									<div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
										<svg
											className="m-auto size-4"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="12" cy="12" r="10" />
											<path d="M8 14s1.5 2 4 2 4-2 4-2" />
											<line x1="9" x2="9.01" y1="9" y2="9" />
											<line x1="15" x2="15.01" y1="9" y2="9" />
										</svg>
									</div>
									<div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
										<svg
											className="m-auto size-4"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M13.234 20.252 21 12.3" />
											<path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Card 4 — Poll timeline */}
					<div
						className="group @3xl:col-span-2 grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{pollTimelineTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{pollTimelineDescription}
							</p>
						</div>
						<div className="relative -m-8 flex items-end bg-linear-to-b p-8">
							<div
								aria-hidden="true"
								className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_6px)] opacity-3 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
							/>
							<div
								aria-hidden="true"
								className="relative w-full select-none px-5"
							>
								<div className="before:mask-y-from-75% relative w-full space-y-3 py-6 before:absolute before:inset-y-0 before:w-px before:bg-foreground/15">
									<div className="pl-5">
										<div className="text-muted-foreground text-xs">06 AM</div>
										<div className="relative mt-0.5 font-medium text-foreground text-sm before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
											Poll Created
										</div>
									</div>
									<div className="relative -mx-5 rounded-2xl border border-transparent bg-illustration p-2 text-xs shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
										<div className="ml-7 text-muted-foreground text-xs">
											12 PM
										</div>
										<div className="ml-7 flex py-1.5">
											<div className="flex items-center gap-1">
												{[
													{
														alt: "Méschac Irung",
														src: "https://avatars.githubusercontent.com/u/47919550?v=4",
													},
													{
														alt: "Bernard Ngandu",
														src: "https://avatars.githubusercontent.com/u/31113941?v=4",
													},
													{
														alt: "Théo Balick",
														src: "https://avatars.githubusercontent.com/u/68236786?v=4",
													},
													{
														alt: "Glodie Lukose",
														src: "https://avatars.githubusercontent.com/u/99137927?v=4",
													},
												].map((user) => (
													<div
														className="size-6 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5 *:rounded-full"
														key={user.alt}
													>
														<img
															alt={user.alt}
															className="aspect-square rounded-full object-cover"
															decoding="async"
															height="46"
															loading="lazy"
															src={user.src}
															width="46"
														/>
													</div>
												))}
											</div>
										</div>
										<div className="relative mt-0.5 ml-7 font-medium text-sm before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-primary before:bg-background before:ring before:ring-background">
											+50 Users voted
										</div>
									</div>
									<div className="pl-5">
										<div className="text-muted-foreground text-xs">
											12:30 PM
										</div>
										<div className="relative mt-0.5 font-medium text-foreground text-sm before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
											Poll Closed
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Card 5 — Spending limit / progress chart */}
					<div
						className="@3xl:col-span-4 @xl:col-span-2 grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{spendingLimitTitle}
							</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{spendingLimitDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50"
						>
							<div className="relative z-10 rounded-2xl border border-transparent bg-illustration p-6 shadow-black/6.5 shadow-xl ring-1 ring-border-illustration">
								<div className="font-medium text-foreground">
									<span className="bg-amber-100 py-1 text-amber-900">
										Spending
									</span>{" "}
									Limit
								</div>
								<div className="mt-0.5 text-muted-foreground text-sm">
									New users by First user primary channel group
								</div>
								<div className="relative mt-4 mb-4 flex">
									<div className="h-5 w-1/5 rounded-l-md bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
									<div className="h-5 w-1/5 bg-primary duration-300 group-hover:w-2/5" />
									<div className="h-5 w-3/5 rounded-r-md border duration-300 [--stripes-color:--alpha(var(--color-foreground)/20%)] [background-image:linear-gradient(-90deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] group-hover:w-2/5" />
								</div>
								<div className="flex gap-1 border-b border-dashed pb-3">
									<div className="w-2/5">
										<div className="font-medium text-foreground text-xl">
											40%
										</div>
										<div className="text-muted-foreground text-sm">Used</div>
									</div>
									<div className="w-3/5">
										<div className="font-medium text-foreground text-xl">
											60%
										</div>
										<div className="text-muted-foreground text-sm">Free</div>
									</div>
								</div>
								<div className="mt-3 space-y-1">
									<div className="grid grid-cols-[auto_1fr] items-center gap-2">
										<div className="size-1.5 rounded-full bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
										<div className="line-clamp-1 font-medium text-sm">
											Running{" "}
											<span className="text-muted-foreground">(20%)</span>{" "}
											average of 12 Minutes
										</div>
									</div>
									<div className="grid grid-cols-[auto_1fr] items-center gap-2">
										<div className="size-1.5 rounded-full bg-primary" />
										<div className="line-clamp-1 font-medium text-sm">
											Swimming{" "}
											<span className="text-muted-foreground">(20%)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
