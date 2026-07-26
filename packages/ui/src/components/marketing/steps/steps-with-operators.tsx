import { Equal, Plus } from "lucide-react";

export interface StepsWithOperatorsProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	title?: string;
}

export function StepsWithOperators({
	title = "Simple Three-Step Workflow",
	description = "Experience our streamlined approach to data analysis that empowers your team to make informed decisions quickly and efficiently.",
	ctaLabel = "Get Started",
	ctaHref = "/sign-up",
}: StepsWithOperatorsProps) {
	return (
		<section className="overflow-hidden bg-background">
			<div className="relative m-4 overflow-hidden rounded-[2rem] py-24">
				{/* Dotted overlay */}
				<div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px]" />

				<div className="@container relative mx-auto w-full max-w-5xl px-6">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="font-semibold text-4xl text-foreground">{title}</h2>
						<p className="mt-4 text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>

					<div className="my-20 grid @3xl:grid-cols-3 gap-12">
						{/* Step 1 — Face / document illustration with corner brackets */}
						<div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
							<div className="relative flex h-28 items-center self-center">
								<div className="relative mx-auto size-fit border bg-foreground/5 p-2">
									{/* Corner bracket decorators */}
									<span className="absolute -top-px -left-px block size-2 rounded-tl border-primary border-t border-l" />
									<span className="absolute -top-px -right-px block size-2 rounded-tr border-primary border-t border-r" />
									<span className="absolute -bottom-px -left-px block size-2 rounded-bl border-primary border-b border-l" />
									<span className="absolute -right-px -bottom-px block size-2 rounded-br border-primary border-r border-b" />
									<div className="w-16 space-y-2 rounded-md bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
										<div className="flex items-center gap-1">
											<div className="size-2.5 rounded-full bg-foreground/15" />
											<div className="h-[3px] w-4 rounded-full bg-foreground/15" />
										</div>
										<div className="space-y-1.5">
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
												<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
											</div>
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
												<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
											</div>
										</div>
										<div className="space-y-1.5">
											<div className="h-[3px] w-full rounded-full bg-foreground/15" />
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2/3 rounded-full bg-foreground/15" />
												<div className="h-[3px] w-1/3 rounded-full bg-foreground/15" />
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
											width="24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
											<path d="M3 21h18" />
										</svg>
									</div>
								</div>
								{/* Plus separator (desktop) */}
								<Plus
									className="absolute inset-y-0 right-0 my-auto @3xl:block hidden translate-x-[75%] fill-illustration stroke-illustration drop-shadow"
									strokeWidth={4}
								/>
							</div>
							<div>
								<h3 className="mb-3 font-medium text-foreground">
									Face Detection
								</h3>
								<p className="text-balance text-muted-foreground text-sm">
									Effortlessly identify and manage users with our advanced face
									recognition system.
								</p>
							</div>
							{/* Plus separator (mobile) */}
							<Plus
								className="mx-auto @3xl:hidden translate-y-[75%] fill-illustration stroke-illustration drop-shadow"
								strokeWidth={4}
							/>
						</div>

						{/* Step 2 — Verified identity card */}
						<div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
							<div className="relative flex h-28 items-center self-center">
								<div
									aria-hidden="true"
									className="relative mx-auto w-fit before:absolute before:inset-x-2 before:top-2 before:-bottom-2 before:rounded-xl before:bg-card before:shadow before:ring-1 before:ring-border"
								>
									<div className="relative overflow-hidden rounded-xl border border-border-illustration bg-illustration shadow-black/6.5 shadow-md">
										<div className="grid grid-cols-[1fr_auto] gap-6 p-3">
											<div className="text-left text-sm">
												<div className="text-foreground">Méschac Irung</div>
												<div className="text-muted-foreground text-xs">
													CEO, Acme
												</div>
											</div>
											<div className="border p-2">
												<svg
													className="size-5"
													fill="none"
													height="24"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													viewBox="0 0 24 24"
													width="24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
													<path d="M3 21h18" />
												</svg>
											</div>
										</div>
										<div className="flex items-center gap-1 border-foreground/5 border-t bg-linear-to-br from-indigo-400 to-emerald-600 p-2 text-sm">
											<svg
												className="size-4 text-white drop-shadow-sm"
												fill="none"
												height="24"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												width="24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
												<path d="m9 12 2 2 4-4" />
											</svg>
											<span className="text-white">Verified</span>
										</div>
									</div>
								</div>
								{/* Equals separator (desktop) */}
								<Equal
									className="absolute inset-y-0 right-0 my-auto @3xl:block hidden translate-x-[75%] fill-illustration stroke-illustration drop-shadow"
									strokeWidth={4}
								/>
							</div>
							<div>
								<h3 className="mb-3 font-medium text-foreground">
									Automated Analysis
								</h3>
								<p className="text-balance text-muted-foreground text-sm">
									Our AI-powered system processes complex datasets to identify
									patterns and insights instantly.
								</p>
							</div>
							{/* Equals separator (mobile) */}
							<Equal
								className="mx-auto @3xl:hidden translate-y-[75%] fill-illustration stroke-illustration drop-shadow"
								strokeWidth={4}
							/>
						</div>

						{/* Step 3 — Signature approved notification */}
						<div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
							<div
								aria-hidden="true"
								className="relative mx-auto my-6 w-fit max-w-[14.5rem] self-center before:absolute before:inset-x-2 before:top-2 before:-bottom-2 before:rounded-2xl before:bg-card before:opacity-75 before:shadow before:ring-1 before:ring-border-illustration"
							>
								<div className="relative inset-ring-1 inset-ring-background flex gap-3 overflow-hidden rounded-2xl bg-illustration p-4 pr-8 shadow-black/6.5 shadow-md ring-1 ring-border-illustration backdrop-blur">
									<div className="mask-r-from-25% absolute inset-1 w-1/2 rounded-l-xl border border-emerald-400 opacity-10 [background-image:linear-gradient(-45deg,var(--color-emerald-500)_25%,transparent_25%,transparent_50%,var(--color-emerald-500)_50%,var(--color-emerald-500)_75%,transparent_75%,transparent)] [background-size:5px_5px]" />
									<div className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-illustration">
										<svg
											className="size-4 text-emerald-600"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											width="24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
											<path d="M3 21h18" />
										</svg>
									</div>
									<div className="relative text-left">
										<div className="mb-3 text-sm">
											<div className="font-medium text-foreground">
												Signature Approved!
											</div>
											<div className="line-clamp-1 text-muted-foreground text-xs">
												Generate reports and insights
											</div>
										</div>
										<div className="inline-flex h-7 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50">
											View Report
										</div>
									</div>
								</div>
							</div>
							<div>
								<h3 className="mb-3 font-medium text-foreground">
									Actionable Reports
								</h3>
								<p className="text-balance text-muted-foreground text-sm">
									Transform insights into beautiful visualizations and shareable
									reports to drive decisions.
								</p>
							</div>
						</div>
					</div>

					{ctaLabel && (
						<a
							className="mx-auto flex h-9 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
							href={ctaHref}
						>
							{ctaLabel}
						</a>
					)}
				</div>
			</div>
		</section>
	);
}
