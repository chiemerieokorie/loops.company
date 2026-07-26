import { BezelLogo, HuluLogo, SpotifyLogo, SupabaseLogo } from "./brand-logos";

export interface HeroCenteredProps {
	brandName?: string;
	description?: string;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	title?: string;
}

export function HeroCentered({
	title = "Powerful Analytics for Smarter Decisions",
	description = "With Astor's personal AI, get your projects to the finish line faster and with no context switching.",
	primaryCta = { label: "Start Using", href: "#" },
	secondaryCta = { label: "Watch Video", href: "#" },
	brandName = "Astor",
}: HeroCenteredProps) {
	return (
		<section>
			<div className="relative pt-24 pb-36 lg:pt-16">
				<div className="relative z-10 mx-auto max-w-5xl px-6">
					<div className="text-center">
						<h1 className="mx-auto mt-8 max-w-xl text-balance font-semibold text-4xl md:text-5xl">
							{title}
						</h1>
						<p className="mx-auto mt-4 mb-8 max-w-xl text-balance text-lg text-muted-foreground">
							{description}
						</p>
						<div className="flex items-center justify-center gap-3 max-sm:flex-col">
							<a
								className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent"
								href={primaryCta.href}
							>
								<span className="text-nowrap">{primaryCta.label}</span>
							</a>
							<a
								className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 pl-3.5 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
								href={secondaryCta.href}
							>
								<svg
									className="!size-3 fill-foreground"
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
									<polygon points="6 3 20 12 6 21 6 3" />
								</svg>
								<span className="text-nowrap">{secondaryCta.label}</span>
							</a>
						</div>
					</div>
				</div>

				<div className="relative mt-6 overflow-hidden pb-12 max-md:px-6">
					<div className="mask-radial-to-65% absolute inset-0 mx-auto lg:w-2/3 dark:hidden">
						<img
							alt="background"
							className="mx-auto size-full origin-top object-cover mix-blend-multiply"
							src="https://images.unsplash.com/photo-1740516367183-90f0b6094907?q=80&w=2300&auto=format&fit=crop"
						/>
					</div>
					<div className="mask-radial-to-65% absolute inset-0 mx-auto not-dark:hidden lg:w-2/3">
						<img
							alt="background"
							className="mx-auto size-full origin-top object-cover mix-blend-multiply"
							src="https://images.unsplash.com/photo-1653919492307-6191a10280f4?q=80&w=987&auto=format&fit=crop"
						/>
					</div>

					<div className="pb-12">
						<div
							aria-hidden="true"
							className="m-auto max-w-sm translate-y-12 rounded-2xl border border-transparent bg-card/75 p-6 shadow-black/6.5 shadow-xl ring-1 ring-border backdrop-blur-3xl"
						>
							<div className="flex gap-1">
								<div className="size-2 rounded-full bg-foreground/10" />
								<div className="size-2 rounded-full bg-foreground/10" />
								<div className="size-2 rounded-full bg-foreground/10" />
							</div>
							<div className="mt-6 text-center">
								<div className="flex justify-center gap-1">
									<div className="relative flex size-5 items-center justify-center rounded-full border border-background bg-linear-to-b from-purple-300 to-indigo-600 shadow-black/20 shadow-md ring-1 ring-black/10 dark:border-0 dark:ring-black/50">
										<div className="absolute inset-1 aspect-square rounded-full border border-white/35 bg-black/15" />
										<svg
											className="size-3 fill-white stroke-white drop-shadow-sm"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											width="24"
										>
											<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
										</svg>
									</div>
									<span className="font-medium text-[15px]">
										{brandName} AI
									</span>
								</div>
								<p className="mx-auto mt-3 max-w-40 text-balance text-foreground/75 leading-tight">
									Your Personal AI When it really matters
								</p>
								<div className="inline-flex h-0.5 w-20 border-background border-b bg-foreground/10" />
							</div>

							<div className="mt-4 mb-8 space-y-6">
								<div className="ml-auto w-fit max-w-3/4">
									<p className="mb-2 rounded-t-2xl rounded-l-2xl rounded-br border border-foreground/5 bg-foreground/5 p-4 text-sm">
										How can I improve my investment analysis workflow?
									</p>
									<span className="block text-right text-muted-foreground text-xs">
										Now
									</span>
								</div>
								<div className="w-fit max-w-3/4">
									<svg
										className="size-4 fill-white stroke-white drop-shadow-md"
										fill="none"
										height="24"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										width="24"
									>
										<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
									</svg>
									<p className="mt-2 text-sm">
										I can help you define a typed model once and run it as a
										filter across your entire market — automatically ranking by
										financing profile.
									</p>
								</div>
							</div>

							<div className="-mx-3 -mb-3 space-y-3 rounded-lg bg-foreground/5 p-3">
								<div className="text-muted-foreground text-sm">
									Ask Anything
								</div>
								<div className="flex justify-between">
									<div className="flex gap-2">
										<button
											aria-label="Attach"
											className="inline-flex size-7 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-transparent bg-transparent font-medium text-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50"
											type="button"
										>
											<svg
												fill="none"
												height="24"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												width="24"
											>
												<path d="M5 12h14" />
												<path d="M12 5v14" />
											</svg>
										</button>
										<button
											aria-label="Web search"
											className="inline-flex size-7 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-transparent bg-transparent font-medium text-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50"
											type="button"
										>
											<svg
												fill="none"
												height="24"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												width="24"
											>
												<circle cx="12" cy="12" r="10" />
												<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
												<path d="M2 12h20" />
											</svg>
										</button>
									</div>
									<button
										aria-label="Send"
										className="inline-flex size-7 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border-[0.5px] border-white/10 bg-foreground font-medium text-background text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent"
										type="button"
									>
										<svg
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											width="24"
										>
											<path d="m5 12 7-7 7 7" />
											<path d="M12 19V5" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="mx-auto mt-8 max-w-5xl px-6 text-center">
						<p className="text-muted-foreground text-sm">Trusted by teams at</p>
						<div className="mx-auto mt-6 flex w-full max-w-lg flex-wrap items-center justify-center gap-8 *:w-fit **:fill-foreground lg:justify-between">
							<HuluLogo />
							<SpotifyLogo />
							<SupabaseLogo />
							<BezelLogo />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
