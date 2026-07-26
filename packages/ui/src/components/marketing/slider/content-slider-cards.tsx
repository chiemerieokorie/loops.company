import {
	ArrowLeft,
	ArrowRight,
	CircleCheck,
	CornerDownLeft,
	GitBranch,
	Play,
	Sparkles,
} from "lucide-react";
import {
	DeepseekLogo,
	GeminiLogo,
	LinearLogo,
	OpenAILogo,
	VercelLogo,
} from "./brand-logos";

export interface ContentSliderCardsProps {
	title?: string;
}

export function ContentSliderCards({
	title = "Build modern AI development tools",
}: ContentSliderCardsProps) {
	return (
		<section className="@container bg-background py-24 max-lg:px-1">
			<div aria-roledescription="carousel" className="relative" role="region">
				<div className="mx-auto max-w-5xl px-6">
					<div className="flex flex-wrap items-end justify-between gap-4 pb-6 lg:pb-6">
						<h2 className="max-w-md text-balance font-semibold text-4xl text-foreground">
							{title}
						</h2>
						<div className="flex items-center gap-2">
							<button
								className="inline-flex size-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-card font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								type="button"
							>
								<ArrowLeft className="h-4 w-4" />
								<span className="sr-only">Previous slide</span>
							</button>
							<button
								className="inline-flex size-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-card font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								type="button"
							>
								<ArrowRight className="h-4 w-4" />
								<span className="sr-only">Next slide</span>
							</button>
						</div>
					</div>
				</div>

				<div className="mask-x-from-95% md:mask-x-from-98% mx-auto max-w-5xl">
					<div className="overflow-hidden px-4">
						<div
							className="mx-0 flex py-6 *:px-1 sm:*:basis-1/2 lg:*:basis-1/3"
							style={{ transform: "translate3d(0px, 0px, 0px)" }}
						>
							{/* Slide 1 — Multiple AI models */}
							<div
								aria-roledescription="slide"
								className="min-w-0 shrink-0 grow-0 basis-full pl-4"
								role="group"
								style={{ transform: "translate3d(0px, 0px, 0px)" }}
							>
								<div
									className="row-span-2 grid h-full grid-rows-subgrid gap-6 overflow-hidden rounded-2xl bg-card p-6 text-card-foreground shadow-black/4 shadow-md ring-1 ring-border"
									data-slot="card"
								>
									<div className="m-auto scale-90 self-center">
										<div aria-hidden="true" className="relative min-w-sm">
											<div className="perspective-dramatic flex flex-col gap-4">
												<div className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top-left -rotate-4 rotate-x-5 rotate-z-6 pt-1 pl-6">
													<div className="rounded-tl-2xl bg-background/75 px-2 pt-4 shadow-black/6.5 shadow-lg ring-1 ring-border-illustration">
														<div className="mb-3 flex items-center gap-2.5 px-3 font-medium text-muted-foreground">
															Models
															<Play className="size-2.5 translate-y-0.5 rotate-90 fill-current opacity-50" />
														</div>
														<div className="flex flex-col gap-5 rounded-tl-xl bg-illustration pt-5 pl-5 shadow ring-1 ring-border-illustration">
															<div className="flex origin-bottom items-center gap-2.5 [&>svg]:size-5">
																<GeminiLogo id="cards-1" />
																<span className="text-base">Gemini</span>
															</div>
															<div className="flex origin-bottom items-center gap-2.5 [&>svg]:size-5">
																<OpenAILogo className="fill-foreground" />
																<span className="text-base">Open AI</span>
															</div>
															<div className="flex origin-bottom items-center gap-2.5 [&>svg]:size-5">
																<DeepseekLogo />
																<span className="text-base">Deepseek</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<p className="max-w-xs self-end text-balance font-medium text-foreground/65">
										<strong className="font-medium text-foreground">
											Multiple AI models
										</strong>{" "}
										including GPT-5, Claude, and Llama with seamless switching
										between providers.
									</p>
								</div>
							</div>

							{/* Slide 2 — Automated workflows */}
							<div
								aria-roledescription="slide"
								className="min-w-0 shrink-0 grow-0 basis-full pl-4"
								role="group"
								style={{ transform: "translate3d(0px, 0px, 0px)" }}
							>
								<div
									className="row-span-2 grid h-full grid-rows-subgrid gap-6 rounded-2xl bg-card p-6 text-card-foreground shadow-black/4 shadow-md ring-1 ring-border"
									data-slot="card"
								>
									<div className="mx-auto scale-90 self-center">
										<div aria-hidden="true" className="mx-auto max-w-2xs">
											<div>
												<div className="flex items-center gap-2 rounded-xl bg-illustration p-3 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
													<CircleCheck className="size-4 fill-emerald-500/15 text-emerald-500" />
													<span className="font-medium text-foreground text-sm">
														Workflow completed
													</span>
												</div>
												<div className="relative space-y-4 pt-6 pl-6">
													<div className="absolute top-0 bottom-8 left-6 border-foreground/15 border-l border-dashed" />
													<div className="relative pl-6">
														<div className="absolute top-0 bottom-1/2 left-0 w-6 rounded-bl-full border-foreground/15 border-b border-l border-dashed" />
														<div className="flex items-center gap-2 rounded-xl bg-card p-3 shadow ring-1 ring-border-illustration">
															<LinearLogo className="size-3.5" />
															<span className="font-medium text-muted-foreground text-xs">
																Issue created{" "}
																<span className="pl-0.5 text-foreground/50 text-xs">
																	12s ago
																</span>
															</span>
														</div>
													</div>
													<div className="relative pl-6">
														<div className="absolute top-0 bottom-1/2 left-0 w-6 rounded-bl-full border-foreground/15 border-b border-l border-dashed" />
														<div className="flex items-center gap-2 rounded-xl bg-card p-3 shadow ring-1 ring-border-illustration">
															<GitBranch className="size-3.5" />
															<span className="font-medium text-muted-foreground text-xs">
																Branch created{" "}
																<span className="pl-0.5 text-foreground/50 text-xs">
																	3s ago
																</span>
															</span>
														</div>
													</div>
													<div className="relative pl-6">
														<div className="absolute top-0 bottom-1/2 left-0 w-6 rounded-bl-full border-foreground/15 border-b border-l border-dashed" />
														<div className="flex items-center gap-2 rounded-xl bg-card p-3 shadow ring-1 ring-border-illustration">
															<VercelLogo className="size-3.5 fill-foreground" />
															<span className="font-medium text-muted-foreground text-xs">
																Preview deployed{" "}
																<span className="pl-0.5 text-foreground/50 text-xs">
																	now
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<p className="self-end text-balance font-medium text-foreground/65">
										<strong className="font-medium text-foreground">
											Automated workflows
										</strong>{" "}
										with drag-and-drop pipeline builder and pre-built
										integrations.
									</p>
								</div>
							</div>

							{/* Slide 3 — AI code completion */}
							<div
								aria-roledescription="slide"
								className="min-w-0 shrink-0 grow-0 basis-full pl-4"
								role="group"
							>
								<div
									className="row-span-2 grid h-full grid-rows-subgrid gap-6 rounded-2xl bg-card p-6 text-card-foreground shadow-black/4 shadow-md ring-1 ring-border"
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
									<p className="self-end text-balance font-medium text-foreground/65">
										<strong className="font-medium text-foreground">
											Intelligent code completion
										</strong>{" "}
										that understands your codebase and suggests context-aware
										snippets.
									</p>
								</div>
							</div>

							{/* Slide 4 — Usage analytics */}
							<div
								aria-roledescription="slide"
								className="min-w-0 shrink-0 grow-0 basis-full pl-4"
								role="group"
							>
								<div
									className="row-span-2 grid h-full grid-rows-subgrid gap-6 rounded-2xl bg-card p-6 text-card-foreground shadow-black/4 shadow-md ring-1 ring-border"
									data-slot="card"
								>
									<div className="mx-auto scale-90 self-center">
										<div aria-hidden="true" className="-mx-6">
											<div className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top px-3 pt-1">
												<div className="rounded-t-2xl bg-background/75 px-2 pt-4 shadow-black/6.5 shadow-lg ring-1 ring-border-illustration">
													<div className="mb-2 flex items-center gap-2.5 px-3 font-medium text-muted-foreground text-sm">
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
									<p className="self-end text-balance font-medium text-foreground/65">
										<strong className="font-medium text-foreground">
											Usage analytics
										</strong>{" "}
										with detailed token tracking, cost estimation, and budget
										alerts.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
