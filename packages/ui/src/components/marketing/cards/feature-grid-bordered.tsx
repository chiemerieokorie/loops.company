import { DOWN_INDICES, UPTIME_COUNT } from "./data";

export interface FeatureGridBorderedProps {
	analyticsDescription?: string;
	analyticsTitle?: string;
	commDescription?: string;
	commTitle?: string;
	feedbackDescription?: string;
	feedbackTitle?: string;
	identityDescription?: string;
	identityTitle?: string;
	reliabilityDescription?: string;
	reliabilityTitle?: string;
	resourceDescription?: string;
	resourceTitle?: string;
}

export function FeatureGridBordered({
	identityTitle = "Identity Verification",
	analyticsTitle = "Analytics Dashboard",
	resourceTitle = "Resource Monitoring",
	reliabilityTitle = "Service Reliability",
	feedbackTitle = "User Feedback",
	commTitle = "Communication Hub",
}: FeatureGridBorderedProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				{/* Unified bordered container */}
				<div className="grid @2xl:grid-cols-2 @4xl:grid-cols-3 @2xl:divide-x divide-y overflow-hidden rounded-2xl border [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] *:grid *:grid-rows-[1fr_auto] *:p-8 *:hover:bg-foreground/[0.02] @4xl:*:[&:nth-child(2)]:border-r @2xl:*:[&:nth-child(2)]:border-r-0 @4xl:*:[&:nth-child(3)]:border-r-0 @4xl:*:[&:nth-child(4)]:border-r @2xl:*:[&:nth-child(4)]:border-r-0 @4xl:*:[&:nth-child(4)]:border-b-0 @2xl:*:[&:nth-child(5)]:border-b-0">
					{/* Cell 1 — Identity Verification: Nuro biometric SVG */}
					<div className="space-y-8">
						<div
							aria-hidden="true"
							className="relative aspect-3/4 w-16 rounded border border-foreground/5 bg-radial from-foreground/10 to-transparent"
						>
							<span className="absolute -top-px -left-px block size-2 animate-pulse rounded-tl border-foreground border-t border-l" />
							<span className="absolute -top-px -right-px block size-2 animate-pulse rounded-tr border-foreground border-t border-r" />
							<span className="absolute -bottom-px -left-px block size-2 animate-pulse rounded-bl border-foreground border-b border-l" />
							<span className="absolute -right-px -bottom-px block size-2 animate-pulse rounded-br border-foreground border-r border-b" />
							<svg
								aria-hidden="true"
								className="absolute inset-0 m-auto"
								fill="none"
								viewBox="0 0 60 40"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className="text-gray-400 dark:text-gray-600"
									d="M5 10C5 10 10 5 20 5C30 5 35 10 35 10"
									stroke="currentColor"
									strokeLinecap="round"
									strokeWidth="2"
								/>
								<line
									className="text-indigo-400"
									stroke="currentColor"
									strokeLinecap="round"
									strokeWidth="3"
									x1="1"
									x2="59"
									y1="20"
									y2="20"
								/>
							</svg>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">{identityTitle}</h3>
							<p className="mt-2 text-muted-foreground">
								Secure authentication with{" "}
								<span className="font-medium text-foreground">
									biometric recognition
								</span>
								.
							</p>
						</div>
					</div>

					{/* Cell 2 — Analytics Dashboard: area chart */}
					<div className="space-y-8">
						<div aria-hidden="true">
							<div className="-mb-4 flex aspect-auto h-36 justify-center">
								<svg
									className="w-full"
									preserveAspectRatio="none"
									viewBox="0 0 276 100"
									xmlns="http://www.w3.org/2000/svg"
								>
									<defs>
										<linearGradient id="fillA-grid" x1="0" x2="0" y1="0" y2="1">
											<stop
												offset="0%"
												stopColor="var(--color-primary)"
												stopOpacity="0.5"
											/>
											<stop
												offset="55%"
												stopColor="var(--color-primary)"
												stopOpacity="0.05"
											/>
										</linearGradient>
										<linearGradient id="fillB-grid" x1="0" x2="0" y1="0" y2="1">
											<stop
												offset="0%"
												stopColor="var(--color-indigo-300)"
												stopOpacity="0.5"
											/>
											<stop
												offset="55%"
												stopColor="var(--color-indigo-300)"
												stopOpacity="0.05"
											/>
										</linearGradient>
									</defs>
									<path
										d="M0,81C18,80,37,80,55,81C73,82,92,84,110,79C128,74,147,61,165,66C184,70,202,92,221,89C239,87,258,60,276,33L276,100L0,100Z"
										fill="url(#fillB-grid)"
									/>
									<path
										d="M0,81C18,80,37,80,55,81C73,82,92,84,110,79C128,74,147,61,165,66C184,70,202,92,221,89C239,87,258,60,276,33"
										fill="none"
										stroke="var(--color-indigo-300)"
										strokeWidth="1.5"
									/>
									<path
										d="M0,77C18,77,37,77,55,77C73,77,92,77,110,68C128,60,147,44,165,48C184,53,202,78,221,73C239,68,258,34,276,0L276,33C258,60,239,87,221,89C202,92,184,70,165,66C147,61,128,74,110,79C92,84,73,82,55,81C37,80,18,80,0,81Z"
										fill="url(#fillA-grid)"
									/>
									<path
										d="M0,77C18,77,37,77,55,77C73,77,92,77,110,68C128,60,147,44,165,48C184,53,202,78,221,73C239,68,258,34,276,0"
										fill="none"
										stroke="var(--color-primary)"
										strokeWidth="1.5"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">
								{analyticsTitle}
							</h3>
							<p className="mt-2 text-muted-foreground">
								Track performance metrics with{" "}
								<span className="font-medium text-foreground">
									real-time insights
								</span>
								.
							</p>
						</div>
					</div>

					{/* Cell 3 — Resource Monitoring: memory usage bar */}
					<div className="space-y-8">
						<div aria-hidden="true">
							<div className="mask-r-from-55% mask-l-from-85% -mx-8 -mb-8 flex flex-col justify-end border-b px-8 pt-4 pb-8">
								<div className="space-y-2.5">
									<span className="block font-medium text-foreground text-sm">
										Memory Usage
									</span>
									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground text-sm">
											56 GB / 128 GB
										</span>
										<span className="text-foreground">45%</span>
									</div>
									<div className="relative my-1.5 h-1.5 rounded-full bg-muted before:absolute before:inset-0 before:z-1 before:w-2/5 before:rounded-full before:bg-linear-to-r before:from-emerald-500 before:to-indigo-400 after:absolute after:inset-0 after:w-2/5 after:bg-linear-to-r after:from-white after:to-indigo-400 after:opacity-50 after:blur-xs dark:before:from-white" />
								</div>
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">{resourceTitle}</h3>
							<p className="mt-2 text-muted-foreground">
								Optimize system resources with{" "}
								<span className="font-medium text-foreground">
									intelligent allocation
								</span>
								.
							</p>
						</div>
					</div>

					{/* Cell 4 — Service Reliability: uptime bars */}
					<div className="space-y-8">
						<div aria-hidden="true" className="flex flex-col justify-center">
							<div className="space-y-2.5 rounded-2xl bg-illustration p-4 shadow shadow-black/6.5 ring-1 ring-border-illustration">
								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">Uptime</span>
									<span className="text-foreground">99.9%</span>
								</div>
								<div className="flex justify-between gap-px">
									{Array.from({ length: UPTIME_COUNT }).map((_, i) => (
										<div
											className={`h-7 w-1 rounded ${DOWN_INDICES.has(i) ? "bg-foreground/25" : "bg-emerald-500"}`}
											key={i}
										/>
									))}
								</div>
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">
								{reliabilityTitle}
							</h3>
							<p className="mt-2 text-muted-foreground">
								Maintain continuous operations with{" "}
								<span className="font-medium text-foreground">
									99.9% uptime
								</span>
								.
							</p>
						</div>
					</div>

					{/* Cell 5 — User Feedback: poll timeline */}
					<div className="space-y-8">
						<div aria-hidden="true" className="relative w-full select-none">
							<div className="before:mask-y-from-75% relative w-full space-y-2 py-4 before:absolute before:inset-y-0 before:w-px before:bg-foreground/15">
								<div className="pl-5">
									<div className="text-muted-foreground text-xs">06 AM</div>
									<div className="relative mt-0.5 font-medium text-foreground text-sm before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
										Poll Created
									</div>
								</div>
								<div className="relative -mx-5 flex rounded-xl bg-illustration p-2 text-xs shadow shadow-black/10 ring-1 ring-border-illustration">
									<div className="relative mt-0.5 ml-7 inline-flex items-center gap-2 font-medium text-sm before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-primary before:bg-background before:ring before:ring-background">
										<div className="flex items-center -space-x-2">
											{[
												{
													alt: "Méschac Irung",
													src: "https://avatars.githubusercontent.com/u/47919550?v=4",
												},
												{
													alt: "Bernard Ngandu",
													src: "https://avatars.githubusercontent.com/u/31113941?v=4",
												},
											].map((u) => (
												<div
													className="size-6 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5"
													key={u.alt}
												>
													<img
														alt={u.alt}
														className="size-full rounded-full object-cover"
														decoding="async"
														height="40"
														loading="lazy"
														src={u.src}
														width="40"
													/>
												</div>
											))}
										</div>
										+50 Users voted
									</div>
								</div>
								<div className="pl-5">
									<div className="text-muted-foreground text-xs">01 PM</div>
									<div className="relative mt-0.5 font-medium text-foreground text-sm before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
										Poll Closed
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">{feedbackTitle}</h3>
							<p className="mt-2 text-muted-foreground">
								Collect valuable insights through{" "}
								<span className="font-medium text-foreground">
									interactive surveys
								</span>
								.
							</p>
						</div>
					</div>

					{/* Cell 6 — Communication Hub: chat message */}
					<div className="space-y-8">
						<div aria-hidden="true" className="flex flex-col justify-center">
							<div className="flex items-center gap-2">
								<img
									alt="Shadcn"
									className="size-5 rounded-full object-cover"
									decoding="async"
									height="20"
									loading="lazy"
									src="https://avatars.githubusercontent.com/u/124599?v=4"
									width="20"
								/>
								<span className="font-medium text-xs">
									Shadcn <span className="ml-1 opacity-65">12m ago</span>
								</span>
							</div>
							<div className="mt-2 w-fit rounded-2xl rounded-tl bg-illustration p-3 text-sm shadow shadow-black/6.5 ring-1 ring-border-illustration">
								Hey <span className="text-primary">@bernard</span>, I&apos;ve
								updated the dashboard metrics.
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">{commTitle}</h3>
							<p className="mt-2 text-muted-foreground">
								Connect team members with{" "}
								<span className="font-medium text-foreground">
									seamless messaging
								</span>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
