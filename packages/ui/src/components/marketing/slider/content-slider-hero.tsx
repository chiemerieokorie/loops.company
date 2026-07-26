import { Check, Circle, CornerDownLeft, Sparkles } from "lucide-react";

export interface ContentSliderHeroProps {
	description?: string;
	title?: string;
}

export function ContentSliderHero({
	title = "Build modern AI development tools",
	description = "Our platform combines cutting-edge AI models with intuitive interfaces to streamline your development workflow and boost productivity.",
}: ContentSliderHeroProps) {
	return (
		<section className="@container bg-background py-24 max-lg:px-1">
			<div aria-roledescription="carousel" className="relative" role="region">
				<div className="mx-auto max-w-5xl px-6">
					<div className="grid items-end gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
						<h2 className="max-w-md text-balance font-semibold text-4xl text-foreground lg:text-5xl">
							{title}
						</h2>
						<p className="text-balance text-lg text-muted-foreground leading-relaxed">
							{description}
						</p>
					</div>
				</div>

				<div className="mask-x-from-98% mx-auto max-w-5xl">
					<div className="overflow-hidden px-4">
						<div
							className="mx-0 flex py-12 *:px-1"
							style={{ transform: "translate3d(0px, 0px, 0px)" }}
						>
							{/* Slide 1 — Collaborative documentation */}
							<div
								aria-roledescription="slide"
								className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
								role="group"
								style={{ transform: "translate3d(0px, 0px, 0px)" }}
							>
								<div
									className="row-span-2 grid h-full grid-rows-subgrid gap-6 rounded-2xl bg-card p-6 text-card-foreground shadow-black/4 shadow-lg ring-1 ring-border"
									data-slot="card"
								>
									<div className="mx-auto scale-90 self-center">
										<div
											aria-hidden="true"
											className="min-w-2xs max-w-xs px-4 pt-4 selection:bg-amber-500/25"
										>
											<div className="relative">
												<div className="absolute right-1 -bottom-2 left-1 h-full rotate-2 rounded-sm bg-gradient-to-br from-amber-200 to-yellow-300 shadow-sm dark:from-amber-300 dark:to-yellow-400" />
												<div className="absolute right-0.5 -bottom-1 left-0.5 h-full -rotate-1 rounded-sm bg-gradient-to-br from-amber-100 to-yellow-200 shadow-sm dark:from-amber-200 dark:to-yellow-300" />
												<div className="relative rounded-sm bg-gradient-to-br from-amber-100 to-yellow-200 p-5 pb-12 shadow-amber-900/15 shadow-lg dark:from-amber-300 dark:to-yellow-300">
													<div className="mb-4 flex items-center justify-between pt-2">
														<span className="font-semibold text-amber-950 text-sm">
															Quick Tasks
														</span>
														<span className="text-amber-700 text-xs">3/5</span>
													</div>
													<div className="space-y-2">
														<div className="flex cursor-pointer items-center gap-2.5">
															<div className="flex size-4 items-center justify-center rounded bg-emerald-500/30">
																<Check className="size-3 text-emerald-700" />
															</div>
															<span className="font-medium text-amber-800/60 text-sm line-through">
																Review pull requests
															</span>
														</div>
														<div className="flex cursor-pointer items-center gap-2.5">
															<div className="flex size-4 items-center justify-center rounded bg-emerald-500/30">
																<Check className="size-3 text-emerald-700" />
															</div>
															<span className="font-medium text-amber-800/60 text-sm line-through">
																Update documentation
															</span>
														</div>
														<div className="flex cursor-pointer items-center gap-2.5">
															<div className="flex size-4 items-center justify-center rounded bg-emerald-500/30">
																<Check className="size-3 text-emerald-700" />
															</div>
															<span className="font-medium text-amber-800/60 text-sm line-through">
																Deploy to staging
															</span>
														</div>
														<div className="flex cursor-pointer items-center gap-2.5">
															<Circle className="size-4 text-amber-700/40" />
															<span className="font-medium text-amber-900 text-sm dark:text-amber-950">
																Write unit tests
															</span>
														</div>
														<div className="flex cursor-pointer items-center gap-2.5">
															<Circle className="size-4 text-amber-700/40" />
															<span className="font-medium text-amber-900 text-sm dark:text-amber-950">
																Send weekly report
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space-y-3 self-end">
										<h3 className="font-medium text-foreground">
											Collaborative documentation
										</h3>
										<p className="text-balance text-foreground/65">
											With version history, inline comments, and real-time
											editing.
										</p>
									</div>
								</div>
							</div>

							{/* Slide 2 — AI code completion */}
							<div
								aria-roledescription="slide"
								className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
								role="group"
								style={{ transform: "translate3d(0px, 0px, 0px)" }}
							>
								<div
									className="row-span-2 grid h-full grid-rows-subgrid gap-6 rounded-2xl bg-card p-6 text-card-foreground shadow-black/4 shadow-lg ring-1 ring-border"
									data-slot="card"
								>
									<div className="mx-auto scale-90 self-center">
										<div aria-hidden="true" className="mx-auto max-w-2xs">
											<div className="relative rounded-lg p-3 ring-1 ring-border-illustration">
												<div className="relative flex w-fit items-center gap-1">
													<div className="absolute inset-0 h-5 bg-linear-to-r via-indigo-500/15 to-emerald-500/15" />
													<span className="text-xs">How do I implement</span>
													<div className="h-5 w-px animate-pulse bg-current text-primary" />
												</div>
											</div>
											<div className="mt-2 overflow-hidden rounded-xl bg-illustration shadow-black/6.5 shadow-lg ring-1 ring-border-illustration">
												<div className="flex items-center gap-2 border-primary/20 border-b bg-primary/10 px-3 py-2">
													<Sparkles className="size-3.5 fill-primary text-primary" />
													<div className="font-medium text-xs">
														AI Suggestions
													</div>
												</div>
												<div className="divide-y divide-border">
													<div className="flex cursor-pointer items-center gap-2 bg-primary/5 px-3 py-2.5 transition-colors">
														<div className="line-clamp-1 flex-1 text-xs">
															...authentication with OAuth 2.0?
														</div>
														<div className="flex items-center gap-1 rounded bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground ring-1 ring-border-illustration">
															<CornerDownLeft className="size-2.5" />
															Tab
														</div>
													</div>
													<div className="flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors hover:bg-muted/50">
														<div className="line-clamp-1 flex-1 text-muted-foreground text-xs">
															...a dark mode toggle in React?
														</div>
													</div>
													<div className="flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors hover:bg-muted/50">
														<div className="line-clamp-1 flex-1 text-muted-foreground text-xs">
															...caching for API responses?
														</div>
													</div>
												</div>
											</div>
											<div className="mt-4 flex items-center justify-between text-xs">
												<div className="text-muted-foreground">
													3 suggestions
												</div>
												<div className="flex items-center gap-1 text-muted-foreground">
													<span className="rounded bg-background px-1 ring-1 ring-border-illustration">
														↑
													</span>
													<span className="rounded bg-background px-1 ring-1 ring-border-illustration">
														↓
													</span>
													to navigate
												</div>
											</div>
										</div>
									</div>
									<div className="space-y-3 self-end">
										<h3 className="font-medium text-foreground">
											Intelligent code completion
										</h3>
										<p className="text-balance text-foreground/65">
											That understands your codebase and suggests context-aware
											snippets.
										</p>
									</div>
								</div>
							</div>

							{/* Slide 3 — Usage analytics */}
							<div
								aria-roledescription="slide"
								className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
								role="group"
							>
								<div
									className="row-span-2 grid h-full grid-rows-subgrid gap-6 rounded-2xl bg-card p-6 text-card-foreground shadow-black/4 shadow-lg ring-1 ring-border"
									data-slot="card"
								>
									<div className="mx-auto scale-90 self-center">
										<div aria-hidden="true" className="-mx-4">
											<div className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top px-3 pt-1">
												<div className="min-w-2xs rounded-t-2xl bg-background/75 px-2 pt-4 shadow-black/6.5 shadow-lg ring-1 ring-border-illustration">
													<div className="mb-3 flex items-center gap-2.5 px-3 font-medium text-muted-foreground">
														Usage
													</div>
													<div className="flex flex-col gap-5 rounded-t-xl bg-illustration px-5 pt-5 shadow ring-1 ring-border-illustration">
														<div className="space-y-6">
															<div className="space-y-2">
																<div className="flex items-center justify-between text-xs">
																	<span className="text-base text-foreground">
																		User prompt tokens
																	</span>
																	<span className="font-medium text-foreground">
																		43%
																	</span>
																</div>
																<div className="text-muted-foreground text-xs">
																	Using a premium model costs one prompt credit
																	per use.
																</div>
																<div className="relative mt-5">
																	<div className="relative h-2 overflow-hidden rounded-full bg-foreground/5">
																		<div className="before:mask-x-from-65% absolute inset-y-0 left-0 w-[43%] rounded-full bg-linear-to-l from-primary to-emerald-500 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20" />
																	</div>
																	<div className="absolute inset-y-0 left-0 w-[43%] rounded-full bg-linear-to-l from-white to-emerald-500 opacity-35 blur" />
																</div>
																<div className="flex items-center justify-between text-xs">
																	<span className="text-muted-foreground">
																		550 / 1,500 tokens
																	</span>
																	<span className="text-emerald-500">
																		950 left
																	</span>
																</div>
															</div>
															<div className="grid grid-cols-2 gap-2 text-xs">
																<div className="rounded-lg border bg-muted/50 p-2">
																	<div className="text-muted-foreground">
																		Est. Cost
																	</div>
																	<div className="mt-0.5 font-medium text-foreground">
																		$0.25
																	</div>
																</div>
																<div className="rounded-lg border bg-muted/50 p-2">
																	<div className="text-muted-foreground">
																		Requests
																	</div>
																	<div className="mt-0.5 font-medium text-foreground">
																		48
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space-y-3 self-end">
										<h3 className="font-medium text-foreground">
											Usage analytics
										</h3>
										<p className="text-balance text-foreground/65">
											With detailed token tracking, cost estimation, and budget
											alerts.
										</p>
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
