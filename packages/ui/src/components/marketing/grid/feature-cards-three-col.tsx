import { ChartBarStacked, MessageCircle, Vote } from "lucide-react";

export interface FeatureCardsThreeColProps {
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
	feature3Description?: string;
	feature3Title?: string;
}

export function FeatureCardsThreeCol({
	feature1Title = "Real-time Messaging",
	feature2Title = "Performance Analytics",
	feature3Title = "Interactive Polling",
}: FeatureCardsThreeColProps) {
	const uptimeBars = Array.from({ length: 36 }, (_, i) => i);
	const dimIndices = new Set([9, 10, 21, 22, 23, 31]);

	return (
		<section className="@container py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="@max-4xl:mx-auto grid @max-4xl:max-w-sm @4xl:grid-cols-3 gap-3 *:p-6">
					{/* Card 1 — messaging */}
					<div
						className="grid grid-rows-[auto_1fr] space-y-12 overflow-hidden rounded-xl bg-card/50 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<MessageCircle className="lucide mb-5 size-4 fill-foreground/10" />
							<h3 className="font-semibold text-foreground text-lg">
								{feature1Title}
							</h3>
							<p className="mt-3 text-muted-foreground">
								Connect instantly with{" "}
								<span className="font-medium text-foreground">
									end-to-end encryption
								</span>
								.
							</p>
						</div>
						<div className="relative -m-8 flex flex-col items-end justify-center p-8">
							<div aria-hidden="true">
								<div className="flex items-center gap-2">
									<div className="size-4 rounded-full bg-muted" />
									<span className="text-sm">Irung</span>
								</div>
								<div className="mt-2 w-fit rounded-2xl rounded-tl bg-illustration p-3 text-sm shadow ring-1 ring-border-illustration">
									Hey <span className="text-primary">@bernard</span>, I&apos;ve
									updated the dashboard metrics.
								</div>
							</div>
						</div>
					</div>

					{/* Card 2 — analytics / uptime */}
					<div
						className="grid grid-rows-[auto_1fr] space-y-12 overflow-hidden rounded-xl bg-card/50 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<ChartBarStacked className="lucide mb-5 size-4 fill-foreground/10" />
							<h3 className="font-semibold text-foreground text-lg">
								{feature2Title}
							</h3>
							<p className="mt-3 text-muted-foreground">
								Track metrics with{" "}
								<span className="font-medium text-foreground">
									customizable dashboards
								</span>
								.
							</p>
						</div>
						<div className="-m-8 flex flex-col items-end justify-center p-8">
							<div className="mt-6 w-full">
								<div
									aria-hidden="true"
									className="space-y-2.5 rounded-2xl bg-illustration p-4 shadow shadow-black/6.5 ring-1 ring-border-illustration"
								>
									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground">Uptime</span>
										<span className="text-foreground">99.9%</span>
									</div>
									<div className="flex justify-between gap-px">
										{uptimeBars.map((i) => (
											<div
												className={`h-7 w-1 rounded ${dimIndices.has(i) ? "bg-foreground/25" : "bg-emerald-500"}`}
												key={i}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Card 3 — polling timeline */}
					<div
						className="grid grid-rows-[auto_1fr] space-y-12 overflow-hidden rounded-xl bg-card/50 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<Vote className="lucide mb-5 size-4 fill-foreground/10" />
							<h3 className="font-semibold text-foreground text-lg">
								{feature3Title}
							</h3>
							<p className="mt-3 text-muted-foreground">
								Gather feedback with{" "}
								<span className="font-medium text-foreground">
									real-time results
								</span>
								.
							</p>
						</div>
						<div className="-m-8 flex flex-col items-end justify-center p-8">
							<div className="w-full px-2">
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
										<div className="relative -mx-5 flex rounded-xl bg-illustration p-2 text-xs shadow shadow-black/10 ring-1 ring-border-illustration">
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
