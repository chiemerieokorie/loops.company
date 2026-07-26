import { DOWN_INDICES, UPTIME_COUNT } from "./data";

export interface FeatureGridBorderedWideProps {
	analyticsDescription?: string;
	analyticsTitle?: string;
	feedbackDescription?: string;
	feedbackTitle?: string;
	identityDescription?: string;
	identityTitle?: string;
	kitsDescription?: string;
	kitsTitle?: string;
	reliabilityDescription?: string;
	reliabilityTitle?: string;
	resourceDescription?: string;
	resourceTitle?: string;
}

export function FeatureGridBorderedWide({
	identityTitle = "Identity Verification",
	identityDescription = "Secure authentication with biometric recognition.",
	analyticsTitle = "Analytics Dashboard",
	analyticsDescription = "Track performance metrics with real-time insights.",
	resourceTitle = "Resource Monitoring",
	resourceDescription = "Optimize system resources with intelligent allocation.",
	reliabilityTitle = "Service Reliability",
	reliabilityDescription = "Maintain continuous operations with 99.9% uptime.",
	kitsTitle = "Favorite Kits",
	kitsDescription = "Browse and organize your favorite UI component kits.",
	feedbackTitle = "User Feedback",
	feedbackDescription = "Collect valuable insights through interactive surveys.",
}: FeatureGridBorderedWideProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				{/* Bordered grid with corner + markers */}
				<div className="relative overflow-hidden rounded-2xl border">
					{/* Corner + markers */}
					{[
						"absolute -top-2.5 -left-2.5",
						"absolute -top-2.5 -right-2.5",
						"absolute -bottom-2.5 -left-2.5",
						"absolute -bottom-2.5 -right-2.5",
					].map((pos, i) => (
						<div
							className={`${pos} flex size-5 items-center justify-center font-bold text-foreground/30 text-sm`}
							key={i}
						>
							+
						</div>
					))}

					<div className="grid @2xl:grid-cols-2 @4xl:grid-cols-3 @2xl:divide-x divide-y *:grid *:grid-rows-[1fr_auto] *:p-8 *:hover:bg-foreground/[0.02]">
						{/* Cell 1 — Identity Verification */}
						<div className="space-y-8">
							<div
								aria-hidden="true"
								className="relative aspect-3/4 w-16 rounded border border-foreground/5 bg-radial from-foreground/10 to-transparent"
							>
								<span className="absolute -top-px -left-px block size-2 animate-pulse rounded-tl border-foreground border-t border-l" />
								<span className="absolute -top-px -right-px block size-2 animate-pulse rounded-tr border-foreground border-t border-r" />
								<span className="absolute -bottom-px -left-px block size-2 animate-pulse rounded-bl border-foreground border-b border-l" />
								<span className="absolute -right-px -bottom-px block size-2 animate-pulse rounded-br border-foreground border-r border-b" />
								<div className="absolute inset-x-0 bottom-2 flex justify-center">
									<div className="h-0.5 w-8 rounded-full bg-indigo-400" />
								</div>
							</div>
							<div>
								<h3 className="font-semibold text-foreground">
									{identityTitle}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{identityDescription}
								</p>
							</div>
						</div>

						{/* Cell 2 — Analytics Dashboard */}
						<div className="space-y-8">
							<div aria-hidden="true">
								<svg
									className="w-full"
									preserveAspectRatio="none"
									viewBox="0 0 276 100"
									xmlns="http://www.w3.org/2000/svg"
								>
									<defs>
										<linearGradient id="fillA-wide" x1="0" x2="0" y1="0" y2="1">
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
									</defs>
									<path
										d="M0,77C55,77,92,77,110,68C128,60,147,44,165,48C184,53,202,78,221,73C239,68,258,34,276,0L276,100L0,100Z"
										fill="url(#fillA-wide)"
									/>
									<path
										d="M0,77C55,77,92,77,110,68C128,60,147,44,165,48C184,53,202,78,221,73C239,68,258,34,276,0"
										fill="none"
										stroke="var(--color-primary)"
										strokeWidth="1.5"
									/>
								</svg>
							</div>
							<div>
								<h3 className="font-semibold text-foreground">
									{analyticsTitle}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{analyticsDescription}
								</p>
							</div>
						</div>

						{/* Cell 3 — Resource Monitoring */}
						<div className="space-y-8">
							<div aria-hidden="true">
								<div className="space-y-2.5">
									<span className="block font-medium text-foreground text-sm">
										Memory Usage
									</span>
									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground">
											56 GB / 128 GB
										</span>
										<span className="text-foreground">45%</span>
									</div>
									<div className="relative h-1.5 rounded-full bg-muted before:absolute before:inset-0 before:z-1 before:w-2/5 before:rounded-full before:bg-linear-to-r before:from-emerald-500 before:to-indigo-400 after:absolute after:inset-0 after:w-2/5 after:bg-linear-to-r after:from-white after:to-indigo-400 after:opacity-50 after:blur-xs dark:before:from-white" />
								</div>
							</div>
							<div>
								<h3 className="font-semibold text-foreground">
									{resourceTitle}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{resourceDescription}
								</p>
							</div>
						</div>

						{/* Cell 4 — Favorite Kits: spans 2 rows in 4xl */}
						<div className="@4xl:row-span-2 space-y-8">
							{/* Campaign scheduling card */}
							<div
								aria-hidden="true"
								className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50"
							>
								<div className="relative z-10 rounded-2xl border border-transparent bg-illustration p-4 text-xs shadow-xl ring-1 ring-border-illustration">
									<div className="mb-0.5 font-semibold text-sm">Campaign</div>
									<div className="mb-4 flex gap-2 text-sm">
										<span>Loyalty program</span>
										<span className="text-muted-foreground">
											loyalty program
										</span>
									</div>
									<div className="grid grid-cols-2 gap-2">
										<div className="flex gap-2 rounded-md border bg-muted/50 p-2">
											<div className="w-1 rounded-full bg-primary" />
											<div>
												<div className="font-medium text-sm">Start Date</div>
												<div className="text-muted-foreground">Feb 6, 2024</div>
											</div>
										</div>
										<div className="flex gap-2 rounded-md border bg-muted/50 p-2">
											<div className="w-1 rounded-full bg-primary" />
											<div>
												<div className="font-medium text-sm">End Date</div>
												<div className="text-muted-foreground">Mar 6, 2024</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Favorite Kits list */}
							<div>
								<div className="mb-3 font-medium">{kitsTitle}</div>
								<div className="-mx-2 flex flex-col gap-0.5 *:cursor-pointer *:rounded-md *:p-2 *:hover:bg-muted">
									{[
										{
											label: "Astor",
											time: "Now",
											gradient: "from-amber-400 to-rose-500",
										},
										{
											label: "Dusk",
											time: "12h ago",
											gradient: "from-purple-300 to-blue-600",
										},
										{
											label: "Mist",
											time: "2 days ago",
											gradient: "from-lime-300 to-teal-600",
										},
									].map((kit) => (
										<div className="flex items-center gap-1" key={kit.label}>
											<div
												className={`flex size-5 items-center justify-center rounded bg-linear-to-b ${kit.gradient} shadow-md`}
											/>
											<div className="text-xs">{kit.label}</div>
											<div className="ml-auto text-muted-foreground text-xs">
												{kit.time}
											</div>
										</div>
									))}
								</div>
							</div>
							<div>
								<h3 className="font-semibold text-foreground">{kitsTitle}</h3>
								<p className="mt-2 text-muted-foreground">{kitsDescription}</p>
							</div>
						</div>

						{/* Cell 5 — Service Reliability: uptime bars */}
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
									{reliabilityDescription}
								</p>
							</div>
						</div>

						{/* Cell 6 — User Feedback: testimonial + poll */}
						<div className="space-y-8">
							<div aria-hidden="true">
								<blockquote className="border-primary/40 border-l-2 pl-4 text-muted-foreground text-sm italic">
									&ldquo;This platform transformed how we collect user
									feedback.&rdquo;
								</blockquote>
							</div>
							<div>
								<h3 className="font-semibold text-foreground">
									{feedbackTitle}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{feedbackDescription}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
