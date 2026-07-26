export interface HeroMediaRecordProps {
	description?: string;
	eyebrow?: string;
	highlightWords?: string[];
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	title?: string;
	trustLogos?: Array<{ name: string }>;
}

export function HeroMediaRecord({
	eyebrow = "Studio Quality",
	title = "Record Studio quality Sounds outside the studio",
	description = "Professional audio recording and production tools designed for creators who work anywhere.",
	primaryCta = { label: "Start Recording", href: "#" },
	secondaryCta = { label: "Watch Demo", href: "#" },
	trustLogos = [
		{ name: "Spotify" },
		{ name: "Apple Music" },
		{ name: "SoundCloud" },
		{ name: "Tidal" },
	],
}: HeroMediaRecordProps) {
	return (
		<section className="relative bg-background">
			{/* Background image */}
			<div className="mask-radial-from-80% mask-radial-at-top-right mask-radial-[100%_85%] absolute inset-0 opacity-75 dark:hidden">
				<img
					alt="hero background"
					className="size-full -scale-y-100 object-cover"
					height="2070"
					loading="lazy"
					src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
					width="2070"
				/>
			</div>
			<div className="mask-radial-from-80% mask-radial-at-top-right mask-radial-[100%_85%] absolute inset-0 not-dark:hidden opacity-30">
				<img
					alt="hero background dark"
					className="size-full -scale-y-100 object-cover"
					height="2070"
					loading="lazy"
					src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
					width="2070"
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 lg:px-12 lg:pt-44">
				<div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
					{/* Left — text */}
					<div>
						{eyebrow && (
							<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-muted-foreground text-xs backdrop-blur-sm">
								<div className="size-1.5 rounded-full bg-red-500 shadow-red-500/50 shadow-sm" />
								{eyebrow}
							</div>
						)}
						<h1 className="max-w-md text-balance font-semibold text-4xl md:text-5xl">
							{title}
						</h1>
						<p className="mt-4 mb-8 max-w-sm text-balance text-muted-foreground md:text-lg">
							{description}
						</p>
						<div className="flex flex-col gap-3 sm:flex-row">
							<a
								className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent"
								href={primaryCta.href}
							>
								<div className="size-1.5 rounded-full bg-current opacity-75" />
								{primaryCta.label}
							</a>
							<a
								className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
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
								>
									<polygon points="6 3 20 12 6 21 6 3" />
								</svg>
								{secondaryCta.label}
							</a>
						</div>
						{trustLogos.length > 0 && (
							<div className="mt-10">
								<p className="mb-3 text-muted-foreground text-xs">
									Used by creators at
								</p>
								<div className="flex flex-wrap gap-4">
									{trustLogos.map((logo) => (
										<span
											className="font-medium text-muted-foreground/60 text-sm"
											key={logo.name}
										>
											{logo.name}
										</span>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Right — audio recorder mockup */}
					<div
						aria-hidden="true"
						className="relative flex justify-center md:justify-end"
					>
						<div className="w-64 overflow-hidden rounded-3xl border border-border bg-card/90 shadow-2xl shadow-black/20 ring-1 ring-border backdrop-blur-xl">
							<div className="border-border border-b bg-muted/30 px-4 py-3 text-center">
								<span className="font-medium text-sm">Recording</span>
							</div>
							<div className="flex flex-col items-center p-6">
								{/* Waveform bars */}
								<div className="mb-4 flex h-16 items-center gap-0.5">
									{Array.from({ length: 32 }).map((_, i) => {
										const heights = [
											20, 35, 60, 48, 80, 55, 30, 72, 45, 90, 40, 65, 28, 75,
											50, 85, 38, 62, 44, 70, 32, 58, 42, 78, 36, 66, 48, 82,
											34, 60, 40, 25,
										];
										return (
											<div
												className="w-1 rounded-full bg-primary/60"
												key={i}
												style={{ height: `${heights[i] ?? 20}%` }}
											/>
										);
									})}
								</div>
								<div className="mb-2 font-mono font-semibold text-2xl tabular-nums">
									02:47
								</div>
								<p className="mb-6 text-muted-foreground text-xs">
									Recording in progress
								</p>
								<div className="flex items-center gap-3">
									<button
										aria-label="Pause"
										className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:bg-muted/50"
										type="button"
									>
										<svg
											className="size-4"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
										</svg>
									</button>
									<button
										aria-label="Stop recording"
										className="inline-flex size-14 items-center justify-center rounded-full bg-red-500 text-white shadow-md shadow-red-500/30 transition-colors hover:bg-red-600"
										type="button"
									>
										<div className="size-5 rounded-sm bg-white" />
									</button>
									<button
										aria-label="Mute"
										className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:bg-muted/50"
										type="button"
									>
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
											<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
											<path d="M19 10v2a7 7 0 0 1-14 0v-2" />
											<line x1="12" x2="12" y1="19" y2="23" />
											<line x1="8" x2="16" y1="23" y2="23" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
