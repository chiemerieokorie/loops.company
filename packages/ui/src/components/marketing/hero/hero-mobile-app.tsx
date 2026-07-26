import { AppleLogo, GooglePlayLogo } from "./brand-logos";

export interface HeroMobileAppProps {
	androidHref?: string;
	description?: string;
	iosHref?: string;
	subtitle?: string;
	title?: string;
}

export function HeroMobileApp({
	title = "Your Personal AI, With you Anywhere",
	subtitle = "Craft. Build. Ship Modern Websites.",
	iosHref = "#",
	androidHref = "#",
}: HeroMobileAppProps) {
	return (
		<section>
			<div className="relative pt-44 pb-36">
				<div className="mask-radial-from-55% mask-radial-at-top mask-radial-[100%_100%] absolute inset-0 h-fit md:max-h-[24rem] lg:max-h-[32rem] dark:lg:max-h-[36rem]">
					<div className="aspect-video md:aspect-square">
						<img
							alt="hero background light"
							className="absolute inset-0 w-full md:-translate-y-1/12 dark:hidden"
							height="5000"
							loading="lazy"
							src="https://raw.githubusercontent.com/Astor/assets/refs/heads/main/clouds_blcfda.jpg"
							width="5000"
						/>
						<img
							alt="hero background dark"
							className="absolute inset-0 not-dark:hidden w-full opacity-50"
							height="5000"
							loading="lazy"
							src="https://images.unsplash.com/photo-1602517300834-9dc3336a714f?q=80&w=2719&auto=format&fit=crop"
							width="5000"
						/>
					</div>
				</div>

				<div className="relative mx-auto max-w-5xl px-6">
					<div className="mb-12 text-center">
						<div>
							<h1 className="mx-auto max-w-2xl text-balance font-bold text-4xl md:text-5xl lg:mt-8">
								{title}
							</h1>
							<p className="mx-auto my-6 max-w-2xl text-balance text-xl">
								{subtitle}
							</p>
							<div className="flex items-center justify-center gap-3">
								<a
									className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 pl-3.5 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
									href={iosHref}
								>
									<AppleLogo />
									<span className="text-nowrap">iPhone</span>
								</a>
								<a
									className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 pl-3.5 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
									href={androidHref}
								>
									<GooglePlayLogo />
									<span className="text-nowrap">Android</span>
								</a>
							</div>
						</div>
					</div>

					<div
						aria-hidden="true"
						className="mask-b-from-75% relative mx-auto max-w-92 scale-95 px-4 pt-2"
					>
						<div className="mx-auto items-end overflow-hidden rounded-t-[2.5rem] border border-transparent bg-background/75 px-2 pt-2 shadow-black/10 shadow-xl ring-1 ring-border">
							<div className="overflow-hidden rounded-t-[2rem] bg-card px-6 pt-2 pb-16 shadow shadow-black/6.5 ring-1 ring-border">
								<div className="flex items-center justify-between py-2 pl-4 text-xs">
									<span className="font-semibold">9:41</span>
									<div className="flex items-end gap-1">
										<svg
											className="size-4"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											width="24"
										>
											<path d="M2 20h.01" />
											<path d="M7 20v-4" />
											<path d="M12 20v-8" />
											<path d="M17 20V8" />
										</svg>
										<svg
											className="size-4.5"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											width="24"
										>
											<path d="M12 20h.01" />
											<path d="M5 12.859a10 10 0 0 1 14 0" />
											<path d="M8.5 16.429a5 5 0 0 1 7 0" />
										</svg>
									</div>
								</div>
								<div className="mt-6 mb-12 font-medium text-sm">My Wallet</div>
								<div className="flex items-center gap-2 text-muted-foreground text-xs">
									Total Balance
									<div className="flex items-center gap-1">
										<div className="flex size-3 rounded-xs bg-emerald-600">
											<svg
												className="m-auto size-2 text-white"
												fill="none"
												height="24"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												width="24"
											>
												<polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
												<polyline points="16 7 22 7 22 13" />
											</svg>
										</div>
										<span className="font-medium text-[11px] text-emerald-600 dark:text-emerald-400">
											65%
										</span>
									</div>
								</div>
								<div className="mt-0.5">
									<span className="align-baseline font-bold text-3xl text-foreground">
										$230
									</span>
									<span className="align-baseline font-bold text-3xl text-foreground/50">
										.56
									</span>
								</div>
								<div className="mt-8 flex items-end gap-1 text-muted-foreground">
									{Array.from({ length: 40 }).map((_, i) => (
										<div
											className={
												i === 39
													? "h-20 w-[3px] rounded-full bg-linear-to-b from-green-300 to-green-500"
													: "h-4 w-[3px] rounded-full bg-foreground/10"
											}
											key={i}
										/>
									))}
								</div>
								<div className="mt-4 flex justify-between px-12 text-foreground/50 text-xs">
									<span>1D</span>
									<span className="font-medium text-foreground">1W</span>
									<span>1M</span>
									<span>6M</span>
									<span>1Y</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
