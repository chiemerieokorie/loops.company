import {
	ArrowLeft,
	ArrowRight,
	Check,
	Circle,
	CircleCheck,
	GitBranch,
	Play,
} from "lucide-react";
import {
	DeepseekLogo,
	GeminiLogo,
	LinearLogo,
	OpenAILogo,
	QwenLogo,
	VercelLogo,
} from "./brand-logos";

export interface ContentSliderBorderedProps {
	title?: string;
}

export function ContentSliderBordered({
	title = "Build modern AI development tools",
}: ContentSliderBorderedProps) {
	return (
		<section className="@container bg-background max-lg:px-1">
			<div
				aria-roledescription="carousel"
				className="relative mx-auto"
				role="region"
			>
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-wrap items-end justify-between gap-4 border-x border-dashed px-6 pt-24 pb-6 lg:px-8 lg:pb-12">
						<h2 className="max-w-xl text-balance font-semibold text-4xl text-foreground lg:text-5xl">
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

				<div className="lg:grid lg:grid-cols-[1fr_auto_1fr]">
					<div
						aria-hidden="true"
						className="border-y border-dashed max-lg:hidden"
					/>
					<div className="mx-auto border lg:max-w-6xl">
						<div className="overflow-hidden px-4">
							<div
								className="-ml-4 flex *:nth-3:border-r-0 *:bg-card *:not-dark:bg-card/50 *:p-8 *:pt-12 md:divide-x md:*:basis-1/2 lg:-mr-4 lg:*:basis-1/3"
								style={{ transform: "translate3d(0px, 0px, 0px)" }}
							>
								{/* Slide 1 — Multiple AI models */}
								<div
									aria-roledescription="slide"
									className="row-span-2 grid min-w-0 shrink-0 grow-0 basis-full grid-rows-subgrid gap-12 pl-4"
									role="group"
									style={{ transform: "translate3d(0px, 0px, 0px)" }}
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
																<GeminiLogo id="bordered-1" />
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
															<div className="flex origin-bottom items-center gap-2.5 [&>svg]:size-5">
																<QwenLogo className="fill-foreground" />
																<span className="text-base">Qwen</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<p className="self-end text-balance font-medium text-foreground/65 lg:max-w-xs">
										<strong className="font-medium text-foreground">
											Multiple AI models
										</strong>{" "}
										including GPT-5, Claude, and Llama with seamless switching
										between providers.
									</p>
								</div>

								{/* Slide 2 — Collaborative documentation */}
								<div
									aria-roledescription="slide"
									className="row-span-2 grid min-w-0 shrink-0 grow-0 basis-full grid-rows-subgrid gap-12 pl-4"
									role="group"
									style={{ transform: "translate3d(0px, 0px, 0px)" }}
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
															<Circle className="size-4 text-amber-700/40" />
															<span className="font-medium text-amber-900 text-sm dark:text-amber-950">
																Write unit tests
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<p className="self-end text-balance font-medium text-foreground/65">
										<strong className="font-medium text-foreground">
											Collaborative documentation
										</strong>{" "}
										with version history, inline comments, and real-time
										editing.
									</p>
								</div>

								{/* Slide 3 — Automated workflows */}
								<div
									aria-roledescription="slide"
									className="row-span-2 grid min-w-0 shrink-0 grow-0 basis-full grid-rows-subgrid gap-12 pl-4"
									role="group"
									style={{ transform: "translate3d(0px, 0px, 0px)" }}
								>
									<div className="mx-auto scale-90 self-center">
										<div
											aria-hidden="true"
											className="mx-auto min-w-2xs max-w-2xs"
										>
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
						</div>
					</div>
					<div
						aria-hidden="true"
						className="border-y border-dashed max-lg:hidden"
					/>
				</div>

				<div className="mx-auto w-full max-w-6xl border-x border-dashed pb-24" />
			</div>
		</section>
	);
}
