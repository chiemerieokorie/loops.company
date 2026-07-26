export interface FeatureGridThreeColProps {
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
	feature3Description?: string;
	feature3Title?: string;
}

export function FeatureGridThreeCol({
	feature1Title = "Fast Messaging",
	feature1Description = "Send and receive messages quickly and efficiently.",
	feature2Title = "Scan QR codes",
	feature2Description = "Scan QR codes to access your polls and vote.",
	feature3Title = "Customizable polls",
	feature3Description = "Create polls with custom questions, options, and voting methods.",
}: FeatureGridThreeColProps) {
	const uptimeBars = Array.from({ length: 36 }, (_, i) => i);
	const dimIndices = new Set([9, 10, 21, 22, 23, 31]);

	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="verflow-hidden mx-auto @max-4xl:max-w-sm rounded-2xl border border-transparent bg-card/50 shadow-black/5 shadow-md ring-1 ring-border">
					<div className="grid @4xl:grid-cols-3 @4xl:divide-x @max-4xl:divide-y">
						{/* Feature 1 — chat message */}
						<div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
							<div className="mx-auto max-w-56 self-center">
								<div aria-hidden="true">
									<div className="flex items-center gap-2">
										<div className="size-4 rounded-full bg-muted" />
										<span className="text-sm">Irung</span>
									</div>
									<div className="mt-2 w-fit rounded-2xl rounded-tl border border-transparent bg-illustration p-3 text-sm shadow shadow-black/10 ring-1 ring-border-illustration">
										Hey <span className="text-primary">@bernard</span>,
										I&apos;ve updated the dashboard metrics.
									</div>
								</div>
							</div>
							<div className="mx-auto max-w-sm text-center">
								<h3 className="text-balance font-semibold">{feature1Title}</h3>
								<p className="mt-3 text-balance text-muted-foreground">
									{feature1Description}
								</p>
							</div>
						</div>

						{/* Feature 2 — uptime bars */}
						<div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
							<div className="self-center">
								<div
									aria-hidden="true"
									className="space-y-2.5 rounded-2xl border border-transparent bg-illustration p-4 shadow shadow-black/10 ring-1 ring-border-illustration"
								>
									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground">Uptime</span>
										<span className="text-foreground">99.9%</span>
									</div>
									<div className="mask-x-from-55% flex justify-between gap-px">
										{uptimeBars.map((i) => (
											<div
												className={`h-7 w-0.5 rounded-full ${dimIndices.has(i) ? "bg-muted-foreground/40" : "bg-emerald-500"}`}
												key={i}
											/>
										))}
									</div>
								</div>
							</div>
							<div className="relative z-10 mx-auto max-w-sm text-center">
								<h3 className="text-balance font-semibold">{feature2Title}</h3>
								<p className="mt-3 text-balance text-muted-foreground">
									{feature2Description}
								</p>
							</div>
						</div>

						{/* Feature 3 — poll timeline */}
						<div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
							<div className="mx-auto self-center">
								<div aria-hidden="true" className="relative w-full select-none">
									<div className="relative w-full space-y-2 py-4">
										<div className="absolute inset-y-0 left-0 w-px bg-[length:1px_4px] bg-repeat-y opacity-25 [background-image:linear-gradient(180deg,var(--color-foreground)_1px,transparent_1px)]" />
										<div className="pl-5">
											<div className="relative mt-0.5 inline-flex items-center gap-2 font-medium text-foreground text-sm before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
												<div className="text-muted-foreground text-xs">
													06 AM
												</div>
												Poll Created
											</div>
										</div>
										<div className="relative -mx-5 flex rounded-xl border border-transparent bg-illustration py-1 pr-4 pl-2 text-xs shadow shadow-black/10 ring-1 ring-border-illustration">
											<div className="relative mt-0.5 ml-7 inline-flex items-center gap-2 font-medium text-sm before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-primary before:bg-background before:ring before:ring-background">
												<div className="flex items-center -space-x-2">
													<div className="size-6 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5 *:rounded-full">
														<div
															aria-label="User avatar"
															className="aspect-square size-full rounded-full bg-muted"
														/>
													</div>
													<div className="size-6 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5 *:rounded-full">
														<div
															aria-label="User avatar"
															className="aspect-square size-full rounded-full bg-muted/60"
														/>
													</div>
												</div>
												+50 Users voted
											</div>
										</div>
										<div className="pl-5">
											<div className="relative mt-0.5 inline-flex items-center gap-2 font-medium text-foreground text-sm before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
												<div className="text-muted-foreground text-xs">
													01 PM
												</div>
												Poll Closed
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="relative z-10 mx-auto max-w-sm text-center">
								<h3 className="text-balance font-semibold">{feature3Title}</h3>
								<p className="mt-3 text-balance text-muted-foreground">
									{feature3Description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
