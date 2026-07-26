import {
	ArrowLeft,
	ArrowRight,
	Check,
	Circle,
	CornerDownLeft,
	Plus,
	Sparkles,
} from "lucide-react";

export interface CarouselProps {
	title?: string;
}

export function Carousel({
	title = "Powerful features for modern teams",
}: CarouselProps) {
	return (
		<section className="@container bg-background py-24 max-lg:px-1">
			<div
				aria-roledescription="carousel"
				className="relative mx-auto max-w-5xl"
				role="region"
			>
				<div className="mb-6 flex flex-wrap items-end justify-between gap-4 px-6 lg:mb-10">
					<h2 className="max-w-xs text-balance font-semibold text-4xl text-foreground">
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

				<div className="overflow-hidden px-4">
					<div
						className="-ml-4 flex gap-1 pt-6"
						style={{ transform: "translate3d(0px, 0px, 0px)" }}
					>
						{/* Slide 1 — Smart email composition */}
						<div
							aria-roledescription="slide"
							className="min-w-0 shrink-0 grow-0 basis-full space-y-4 pl-4 md:basis-1/2"
							role="group"
							style={{ transform: "translate3d(0px, 0px, 0px)" }}
						>
							<div
								className="flex aspect-square items-center justify-center rounded-2xl bg-card text-card-foreground shadow-black/4 shadow-md ring-1 ring-border *:scale-90"
								data-slot="card"
							>
								<div
									aria-hidden="true"
									className="mask-b-from-75% relative min-w-92 max-w-92 px-4 pt-2"
								>
									<div className="rounded-2xl bg-card p-6 pt-2 pb-16 shadow-black/6.5 shadow-xl ring-1 ring-border-illustration">
										<div className="divide-y border-b text-xs *:flex *:h-10 *:items-center *:py-2">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-1">
													<span className="text-foreground/50">To:</span>
													<div className="flex cursor-pointer gap-1 rounded-full bg-illustration p-0.5 pr-2.5 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
														<div className="relative size-4 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/20">
															<img
																alt="Shadcn"
																decoding="async"
																height="20"
																loading="lazy"
																src="https://avatars.githubusercontent.com/u/124599?v=4"
																style={{ color: "transparent" }}
																width="20"
															/>
														</div>
														<span className="font-medium text-xs">Shadcn</span>
													</div>
												</div>
												<div className="flex size-6 rounded-full border bg-foreground/10">
													<Plus className="m-auto size-3.5" strokeWidth={3} />
												</div>
											</div>
											<div className="flex gap-1">
												<span className="text-foreground/50">Cc:</span>
											</div>
											<div className="flex gap-1">
												<span className="text-foreground/50">Subject:</span>
											</div>
											<div className="flex gap-1">
												<span className="text-foreground/50">From:</span>
											</div>
										</div>
										<div className="mt-6 space-y-2 text-muted-foreground text-sm/6">
											<p>
												Web applications with{" "}
												<span className="rounded bg-linear-to-r from-primary to-emerald-500 bg-clip-text px-0.5 text-transparent">
													React and TypeScript
												</span>{" "}
												using best practices.
											</p>
											<p className="mt-3">Sent from my iPhone</p>
										</div>
									</div>
								</div>
							</div>
							<p className="text-balance text-muted-foreground">
								<strong className="font-medium text-foreground">
									Smart email composition
								</strong>{" "}
								with AI-powered suggestions, templates, and seamless
								collaboration for faster communication.
							</p>
						</div>

						{/* Slide 2 — Organized note-taking */}
						<div
							aria-roledescription="slide"
							className="min-w-0 shrink-0 grow-0 basis-full space-y-4 pl-4 md:basis-1/2"
							role="group"
							style={{ transform: "translate3d(0px, 0px, 0px)" }}
						>
							<div
								className="flex aspect-square items-center justify-center rounded-2xl bg-card text-card-foreground shadow-black/4 shadow-md ring-1 ring-border *:scale-90"
								data-slot="card"
							>
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
							<p className="text-balance text-muted-foreground">
								<strong className="font-medium text-foreground">
									Organized note-taking
								</strong>{" "}
								with rich formatting, tagging, and instant search to capture and
								retrieve ideas effortlessly.
							</p>
						</div>

						{/* Slide 3 — AI autocomplete */}
						<div
							aria-roledescription="slide"
							className="min-w-0 shrink-0 grow-0 basis-full space-y-4 pl-4 md:basis-1/2"
							role="group"
						>
							<div
								className="flex aspect-square items-center justify-center rounded-2xl bg-card text-card-foreground shadow-black/4 shadow-md ring-1 ring-border *:scale-90"
								data-slot="card"
							>
								<div aria-hidden="true" className="min-w-2xs">
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
											<div className="font-medium text-xs">AI Suggestions</div>
										</div>
										<div className="divide-y divide-border">
											<div className="flex cursor-pointer items-center gap-2 bg-primary/5 px-3 py-2.5 transition-colors">
												<div className="flex-1 text-xs">
													...authentication with OAuth 2.0?
												</div>
												<div className="flex items-center gap-1 rounded bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground ring-1 ring-border-illustration">
													<CornerDownLeft className="size-2.5" />
													Tab
												</div>
											</div>
											<div className="flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors hover:bg-muted/50">
												<div className="flex-1 text-muted-foreground text-xs">
													...a dark mode toggle in React?
												</div>
											</div>
											<div className="flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors hover:bg-muted/50">
												<div className="flex-1 text-muted-foreground text-xs">
													...caching for API responses?
												</div>
											</div>
										</div>
									</div>
									<div className="mt-4 flex items-center justify-between text-xs">
										<div className="text-muted-foreground">3 suggestions</div>
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
							<p className="text-balance text-muted-foreground">
								<strong className="font-medium text-foreground">
									AI autocomplete
								</strong>{" "}
								that learns your writing style and provides context-aware
								suggestions to boost productivity.
							</p>
						</div>

						{/* Slide 4 — Real-time translation */}
						<div
							aria-roledescription="slide"
							className="min-w-0 shrink-0 grow-0 basis-full space-y-4 pl-4 md:basis-1/2"
							role="group"
						>
							<div
								className="flex aspect-square items-center justify-center rounded-2xl bg-card text-card-foreground shadow-black/4 shadow-md ring-1 ring-border *:scale-90"
								data-slot="card"
							>
								<div aria-hidden="true" className="min-w-xs max-w-xs">
									<div className="space-y-3">
										<div className="mask-y-from-35%">
											<p className="text-sm/6">
												Corporis voluptates voluptatem atque excepturi, tempore
												dolor distinctio libero dicta vel, nihil rem consequatur
												esse aspernatur nostrum, minus magnam labore quas optio?
											</p>
										</div>
										<div className="relative flex w-fit items-center gap-1">
											<span className="rounded bg-linear-to-r from-primary to-emerald-500 bg-clip-text text-sm text-transparent">
												Auto translated from English
											</span>
										</div>
										<div className="rounded-xl bg-illustration p-3 shadow-black/6.5 shadow-md ring-1 ring-primary/50">
											<div className="mb-3 text-muted-foreground text-xs">
												Spanish
											</div>
											<p className="text-foreground text-sm/6">
												Hola, ¿cómo puedo ayudarte hoy? Estoy aquí para
												responder cualquier pregunta que tengas sobre nuestros
												servicios y productos.
											</p>
										</div>
									</div>
								</div>
							</div>
							<p className="text-balance text-muted-foreground">
								<strong className="font-medium text-foreground">
									Real-time translation
								</strong>{" "}
								across 50+ languages with automatic detection and
								natural-sounding output for global teams.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
