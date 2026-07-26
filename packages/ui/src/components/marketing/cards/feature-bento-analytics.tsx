export interface FeatureBentoAnalyticsProps {
	chartDescription?: string;
	chartTitle?: string;
	chatDescription?: string;
	chatTitle?: string;
	smartLightingDescription?: string;
	smartLightingTitle?: string;
}

export function FeatureBentoAnalytics({
	chartTitle = "Collaborative Analysis",
	chartDescription = "Add comments, share insights...",
	chatTitle = "Collaborative Analysis",
	chatDescription = "Add comments, share insights, and work together.",
	smartLightingTitle = "Smart Lighting Control",
	smartLightingDescription = "Automate your home lighting with customizable schedules and advanced team collaboration features.",
}: FeatureBentoAnalyticsProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @4xl:grid-cols-5 @xl:grid-cols-2 gap-3">
					{/* Left 2-column stack */}
					<div className="@4xl:col-span-2 space-y-3">
						{/* Small area chart card */}
						<div
							className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
							data-slot="card"
						>
							<div>
								<h3 className="font-semibold text-foreground">{chartTitle}</h3>
								<p className="mt-2 text-muted-foreground">{chartDescription}</p>
							</div>
							<div aria-hidden="true">
								<div className="-mb-4 flex aspect-auto h-28 justify-center">
									<svg
										className="w-full"
										preserveAspectRatio="none"
										viewBox="0 0 319 82"
										xmlns="http://www.w3.org/2000/svg"
									>
										<defs>
											<linearGradient
												id="fillDesktop-analytics"
												x1="0"
												x2="0"
												y1="0"
												y2="1"
											>
												<stop
													offset="0%"
													stopColor="orange"
													stopOpacity="0.5"
												/>
												<stop
													offset="55%"
													stopColor="orange"
													stopOpacity="0.05"
												/>
											</linearGradient>
											<linearGradient
												id="fillMobile-analytics"
												x1="0"
												x2="0"
												y1="0"
												y2="1"
											>
												<stop
													offset="0%"
													stopColor="violet"
													stopOpacity="0.5"
												/>
												<stop
													offset="55%"
													stopColor="violet"
													stopOpacity="0.05"
												/>
											</linearGradient>
										</defs>
										{/* Mobile series */}
										<path
											d="M0,67C21,66,43,66,64,67C85,67,106,69,128,65C149,60,170,50,191,54C213,58,234,75,255,73C277,71,298,49,319,27L319,82L0,82Z"
											fill="url(#fillMobile-analytics)"
										/>
										<path
											d="M0,67C21,66,43,66,64,67C85,67,106,69,128,65C149,60,170,50,191,54C213,58,234,75,255,73C277,71,298,49,319,27"
											fill="none"
											stroke="violet"
											strokeWidth="1.5"
										/>
										{/* Desktop series */}
										<path
											d="M0,63C21,63,43,63,64,63C85,63,106,63,128,56C149,50,170,36,191,40C213,43,234,64,255,60C277,56,298,28,319,0L319,27C298,49,277,71,255,73C234,75,213,58,191,54C170,50,149,60,128,65C106,69,85,67,64,67C43,66,21,66,0,67Z"
											fill="url(#fillDesktop-analytics)"
										/>
										<path
											d="M0,63C21,63,43,63,64,63C85,63,106,63,128,56C149,50,170,36,191,40C213,43,234,64,255,60C277,56,298,28,319,0"
											fill="none"
											stroke="orange"
											strokeWidth="1.5"
										/>
										{/* X-axis labels */}
										<line
											stroke="var(--color-muted)"
											x1="0"
											x2="319"
											y1="82"
											y2="82"
										/>
										<text
											fill="var(--color-muted-foreground)"
											fontSize="9"
											textAnchor="middle"
											x="64"
											y="82"
										>
											June
										</text>
										<text
											fill="var(--color-muted-foreground)"
											fontSize="9"
											textAnchor="middle"
											x="128"
											y="82"
										>
											January
										</text>
										<text
											fill="var(--color-muted-foreground)"
											fontSize="9"
											textAnchor="middle"
											x="191"
											y="82"
										>
											February
										</text>
										<text
											fill="var(--color-muted-foreground)"
											fontSize="9"
											textAnchor="middle"
											x="255"
											y="82"
										>
											March
										</text>
										<text
											fill="var(--color-muted-foreground)"
											fontSize="9"
											textAnchor="middle"
											x="306"
											y="82"
										>
											April
										</text>
									</svg>
								</div>
							</div>
						</div>

						{/* Chat message card */}
						<div
							className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
							data-slot="card"
						>
							<div>
								<h3 className="font-semibold text-foreground">{chatTitle}</h3>
								<p className="mt-2 text-muted-foreground">{chatDescription}</p>
							</div>
							<div aria-hidden="true">
								<div className="flex items-center gap-2">
									<div className="relative size-5">
										<img
											alt="Shadcn"
											className="size-full rounded-full object-cover"
											decoding="async"
											height="40"
											loading="lazy"
											src="https://avatars.githubusercontent.com/u/124599?v=4"
											width="40"
										/>
									</div>
									<span className="font-medium text-xs">
										Shadcn <span className="ml-1 opacity-65">12m ago</span>
									</span>
								</div>
								<div className="mt-2 w-fit rounded-2xl rounded-tl bg-linear-to-b from-illustration to-foreground/5 p-3 text-sm shadow-black/6.5 shadow-md ring-1 ring-foreground/10">
									Hey <span className="text-primary">@bernard</span>, I&apos;ve
									updated the dashboard metrics.
								</div>
							</div>
						</div>
					</div>

					{/* Right 3-column: Smart Lighting Control large card */}
					<div
						className="group @4xl:col-span-3 grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{smartLightingTitle}
							</h3>
							<p className="mt-2 text-muted-foreground">
								{smartLightingDescription
									.split("team collaboration features")
									.map((part, i) =>
										i === 0 ? (
											<span key={i}>
												{part}
												<span className="font-medium text-foreground">
													team collaboration features
												</span>
											</span>
										) : (
											<span key={i}>{part}</span>
										)
									)}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="perspective-dramatic mask-b-from-55% h-fit px-6"
						>
							<div className="relative mx-auto mt-auto h-fit translate-x-4 -skew-x-4">
								{/* Overlaid app card */}
								<div className="absolute -bottom-6 left-0 z-10 h-64 w-3/4 overflow-hidden rounded-2xl border border-transparent bg-illustration/75 shadow-2xl shadow-black/10 ring-1 ring-border-illustration backdrop-blur">
									<div className="relative space-y-3 p-4">
										<div className="flex items-center gap-1.5">
											<svg
												className="size-5"
												height="1em"
												viewBox="0 0 32 32"
												width="1em"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g fill="none">
													<path
														d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"
														fill="#ff6723"
													/>
													<path
														d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"
														fill="#ffb02e"
													/>
												</g>
											</svg>
											<div className="font-medium text-sm">Steps</div>
										</div>
										<div className="space-y-3">
											<div className="border-white/10 border-b pb-3 font-medium text-muted-foreground text-sm">
												This year, you&apos;re walking more on average{" "}
												<span className="text-foreground">
													than you did in 2023.
												</span>
											</div>
											<div className="space-y-3">
												<div className="space-y-1">
													<div>
														<span className="align-baseline font-medium text-foreground text-xl">
															8,081
														</span>{" "}
														<span className="text-muted-foreground text-xs">
															Steps/day
														</span>
													</div>
													<div className="flex h-5 items-center rounded bg-gradient-to-r from-indigo-600 to-purple-300 px-2 text-white text-xs">
														2024
													</div>
												</div>
												<div className="space-y-1">
													<div>
														<span className="align-baseline font-medium text-foreground text-xl">
															5,412
														</span>{" "}
														<span className="text-muted-foreground text-xs">
															Steps/day
														</span>
													</div>
													<div className="flex h-5 w-2/3 items-center rounded bg-white/20 px-2 text-white text-xs">
														2023
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Favorite Kits card */}
								<div className="mx-auto h-80 w-3/4 rounded-2xl border border-border-illustration bg-card px-6 py-4">
									<div className="space-y-2">
										<div>Favorite Kits</div>
										<div className="-mx-2 flex flex-col gap-0.5 *:cursor-pointer *:rounded-md *:p-2 *:hover:bg-muted">
											{/* Astor */}
											<div className="flex items-center gap-1">
												<div className="relative flex size-5 items-center justify-center rounded bg-linear-to-b from-amber-400 to-rose-500 shadow-black/25 shadow-md before:absolute before:inset-px before:rounded-[3px] before:border before:border-white/40 before:ring-1 before:ring-black/25 dark:before:border-transparent dark:before:ring-white/25">
													<div className="absolute inset-x-px inset-y-1.5 border-white/25 border-y border-dotted" />
													<div className="absolute inset-x-1.5 inset-y-px border-white/25 border-x border-dotted" />
													<svg
														className="size-3 fill-white stroke-white drop-shadow"
														fill="none"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														viewBox="0 0 24 24"
													>
														<path d="M6 3h12l4 6-10 13L2 9Z" />
														<path d="M11 3 8 9l4 13 4-13-3-6" />
														<path d="M2 9h20" />
													</svg>
												</div>
												<div className="text-xs">Astor</div>
												<div className="ml-auto text-muted-foreground text-xs">
													Now
												</div>
											</div>
											{/* Dusk */}
											<div className="flex items-center gap-1">
												<div className="relative flex size-5 items-center justify-center rounded border border-background bg-linear-to-b from-purple-300 to-blue-600 shadow-black/20 shadow-md ring-1 ring-black/10">
													<div className="absolute inset-x-0 inset-y-1.5 border-white/25 border-y border-dotted" />
													<div className="absolute inset-x-1.5 inset-y-0 border-white/25 border-x border-dotted" />
													<svg
														className="size-3 fill-white stroke-white drop-shadow"
														fill="none"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														viewBox="0 0 24 24"
													>
														<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
														<path d="M20 3v4" />
														<path d="M22 5h-4" />
													</svg>
												</div>
												<div className="text-xs">Dusk</div>
												<div className="ml-auto text-muted-foreground text-xs">
													12h ago
												</div>
											</div>
											{/* Mist */}
											<div className="flex items-center gap-1">
												<div className="relative flex size-5 items-center justify-center rounded border border-background bg-linear-to-b from-lime-300 to-teal-600 shadow-black/20 shadow-md ring-1 ring-black/10">
													<div className="absolute inset-1 aspect-square rounded-full border border-white/35 bg-black/15" />
													<div className="absolute inset-px aspect-square rounded-full border border-white/25 border-dashed" />
													<svg
														className="size-3 fill-white stroke-white drop-shadow-sm"
														fill="none"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														viewBox="0 0 24 24"
													>
														<path d="M12 7v14" />
														<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
													</svg>
												</div>
												<div className="text-xs">Mist</div>
												<div className="ml-auto text-muted-foreground text-xs">
													2 days ago
												</div>
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
