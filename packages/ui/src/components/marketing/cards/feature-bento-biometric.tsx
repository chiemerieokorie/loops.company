export interface FeatureBentoBiometricProps {
	biometricDescription?: string;
	biometricTitle?: string;
	campaignDescription?: string;
	campaignTitle?: string;
	dashboardDescription?: string;
	dashboardTitle?: string;
	documentsDescription?: string;
	documentsTitle?: string;
	keyboardShortcutDescription?: string;
	keyboardShortcutTitle?: string;
}

export function FeatureBentoBiometric({
	keyboardShortcutTitle = "Smart Lighting Control",
	keyboardShortcutDescription = "Automate your home lighting with customizable schedules.",
	dashboardTitle = "Interactive Dashboards",
	dashboardDescription = "Create custom dashboards with drag-and-drop simplicity. Automate your home lighting with customizable schedules.",
	biometricTitle = "Smart Lighting Control",
	biometricDescription = "Automate your home lighting with customizable schedules.",
	campaignTitle = "Smart Lighting Control",
	campaignDescription = "Automate your home lighting with customizable schedules.",
	documentsTitle = "Collaborative Analysis",
	documentsDescription = "Add comments, share insights, and work together.",
}: FeatureBentoBiometricProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @4xl:grid-cols-10 @xl:grid-cols-2 grid-cols-1 gap-3">
					{/* Card 1 — Keyboard shortcut: 4 columns */}
					<div
						className="group @4xl:col-span-4 grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{keyboardShortcutTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{keyboardShortcutDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="flex @4xl:aspect-auto aspect-video items-center justify-center"
						>
							<div className="relative mx-auto flex w-fit gap-3">
								<div className="absolute -inset-x-6 inset-y-0 border-border-illustration border-y border-dashed" />
								<div className="absolute inset-x-0 -inset-y-6 border-border-illustration border-x border-dashed" />
								<div className="relative flex aspect-square size-16 items-center rounded-[7px] border border-border-illustration border-white/25 bg-foreground/65 p-3 text-white shadow-black/35 shadow-lg ring ring-black dark:border-border-illustration dark:bg-zinc-900 dark:ring-background">
									<span className="absolute top-1 right-2 block text-sm">
										fn
									</span>
									<svg
										className="mt-auto size-4"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
										<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
										<path d="M2 12h20" />
									</svg>
								</div>
								<div className="relative flex aspect-square size-16 items-center justify-center rounded-[7px] border border-white/25 bg-foreground/65 p-3 shadow-black/35 shadow-lg ring ring-black dark:border-border-illustration dark:bg-zinc-900 dark:ring-background">
									<span className="text-white">K</span>
								</div>
							</div>
						</div>
					</div>

					{/* Card 2 — Area chart dashboard: 6 columns */}
					<div
						className="@4xl:col-span-6 @xl:col-span-2 grid grid-rows-[auto_1fr] gap-8 rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border [--color-background:var(--color-muted)]"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{dashboardTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{dashboardDescription}
							</p>
						</div>
						{/* Baked SVG area chart — two series: indigo desktop + emerald mobile */}
						<div
							aria-hidden="true"
							className="relative w-full overflow-hidden rounded-xl"
						>
							<svg
								className="w-full"
								preserveAspectRatio="none"
								viewBox="0 0 517 224"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<linearGradient
										id="fillDesktop-biometric"
										x1="0"
										x2="0"
										y1="0"
										y2="1"
									>
										<stop
											offset="0%"
											stopColor="var(--color-indigo-500)"
											stopOpacity="0.4"
										/>
										<stop
											offset="55%"
											stopColor="var(--color-indigo-500)"
											stopOpacity="0.05"
										/>
									</linearGradient>
									<linearGradient
										id="fillMobile-biometric"
										x1="0"
										x2="0"
										y1="0"
										y2="1"
									>
										<stop
											offset="0%"
											stopColor="var(--color-emerald-400)"
											stopOpacity="0.4"
										/>
										<stop
											offset="55%"
											stopColor="var(--color-emerald-400)"
											stopOpacity="0.05"
										/>
									</linearGradient>
								</defs>
								<line
									stroke="var(--color-border)"
									strokeOpacity="0.5"
									x1="0"
									x2="517"
									y1="168"
									y2="168"
								/>
								<line
									stroke="var(--color-border)"
									strokeOpacity="0.5"
									x1="0"
									x2="517"
									y1="112"
									y2="112"
								/>
								<line
									stroke="var(--color-border)"
									strokeOpacity="0.5"
									x1="0"
									x2="517"
									y1="56"
									y2="56"
								/>
								{/* Mobile series fill + line */}
								<path
									d="M0,182C34,181,69,180,103,182C138,184,172,188,207,177C241,165,276,137,310,147C345,158,379,206,414,200C448,195,483,135,517,75L517,224L0,224Z"
									fill="url(#fillMobile-biometric)"
								/>
								<path
									d="M0,182C34,181,69,180,103,182C138,184,172,188,207,177C241,165,276,137,310,147C345,158,379,206,414,200C448,195,483,135,517,75"
									fill="none"
									stroke="var(--color-emerald-400)"
									strokeWidth="2"
								/>
								{/* Desktop series fill + line */}
								<path
									d="M0,172C34,172,69,172,103,172C138,172,172,171,207,153C241,135,276,100,310,109C345,119,379,174,414,163C448,153,483,76,517,0L517,75C483,135,448,195,414,200C379,206,345,158,310,147C276,137,241,165,207,177C172,188,138,184,103,182C69,180,34,181,0,182Z"
									fill="url(#fillDesktop-biometric)"
								/>
								<path
									d="M0,172C34,172,69,172,103,172C138,172,172,171,207,153C241,135,276,100,310,109C345,119,379,174,414,163C448,153,483,76,517,0"
									fill="none"
									stroke="var(--color-indigo-500)"
									strokeWidth="2"
								/>
							</svg>
						</div>
					</div>

					{/* Card 3 — Fingerprint biometric scanner: 3 columns, dark theme */}
					<div
						className="group @4xl:col-span-3 grid grid-rows-[1fr_auto] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
						data-theme="dark"
					>
						<div className="relative aspect-square max-w-64">
							<div className="relative flex aspect-square justify-center [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_75%,transparent_100%)]">
								<img
									alt="Fingerprint scanner"
									className="size-full scale-110 object-cover"
									decoding="async"
									height="224"
									loading="lazy"
									src="https://raw.githubusercontent.com/Astor/assets/refs/heads/main/fingerprint-scanner_vtvyyq.png"
									width="224"
								/>
							</div>
							<div className="absolute inset-18 m-auto aspect-3/4 translate-x-1.5 -translate-y-9.5 border border-white/5 bg-linear-to-b from-foreground/5 via-transparent to-foreground/5">
								<span className="absolute -top-px -left-px block size-2.5 animate-pulse rounded-tl border-primary border-t-[1.5px] border-l-[1.5px]" />
								<span className="absolute -top-px -right-px block size-2.5 animate-pulse rounded-tr border-primary border-t-[1.5px] border-r-[1.5px]" />
								<span className="absolute -bottom-px -left-px block size-2.5 animate-pulse rounded-bl border-primary border-b-[1.5px] border-l-[1.5px]" />
								<span className="absolute -right-px -bottom-px block size-2.5 animate-pulse rounded-br border-primary border-r-[1.5px] border-b-[1.5px]" />
								<div className="absolute inset-0 z-10 animate-bounce">
									<div className="absolute inset-x-0 m-auto h-2 w-2/3 bg-indigo-500 blur-lg" />
								</div>
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">
								{biometricTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{biometricDescription}
							</p>
						</div>
					</div>

					{/* Card 4 — Campaign scheduling: 4 columns */}
					<div
						className="group @4xl:col-span-4 grid grid-rows-[1fr_auto] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border [--color-background:var(--color-muted)]"
						data-slot="card"
					>
						<div
							aria-hidden="true"
							className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-foreground/10 before:bg-card after:absolute after:inset-x-8 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-foreground/5 after:bg-card"
						>
							<div className="relative z-10 h-full rounded-t-2xl border border-border-illustration bg-card p-4 pb-10 text-xs shadow-lg duration-300">
								<div className="mb-0.5 font-semibold text-sm">Campaign</div>
								<div className="mb-4 flex gap-2 text-sm">
									<span>Loyalty program</span>
									<span className="text-muted-foreground">loyalty program</span>
								</div>
								<div className="mb-4 grid @md:grid-cols-2 gap-2">
									<div className="flex gap-2 rounded-md border border-border-illustration bg-illustration p-2">
										<div className="w-1 rounded-full bg-primary" />
										<div>
											<div className="font-medium text-sm">Start Date</div>
											<div className="line-clamp-1 text-muted-foreground">
												Feb 6, 2024 at 00:00
											</div>
										</div>
									</div>
									<div className="flex gap-2 rounded-md border border-border-illustration bg-illustration p-2">
										<div className="w-1 rounded-full bg-primary" />
										<div>
											<div className="font-medium text-sm">End Date</div>
											<div className="line-clamp-1 text-muted-foreground">
												Feb 6, 2024 at 00:00
											</div>
										</div>
									</div>
								</div>
								<p>
									Connected to 12{" "}
									<span className="font-medium text-primary">
										Marketing Campaigns
									</span>
									.
								</p>
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">{campaignTitle}</h3>
							<p className="mt-3 text-muted-foreground">
								{campaignDescription}
							</p>
						</div>
					</div>

					{/* Card 5 — Document mini-card grid: 3 columns */}
					<div
						className="@4xl:col-span-3 @4xl:row-start-auto row-start-1 grid grid-rows-[1fr_auto] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div className="grid h-fit grid-cols-3 gap-3">
							{Array.from({ length: 6 }).map((_, i) => (
								<div
									className="w-16 space-y-2 rounded-md bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration"
									key={i}
								>
									<div className="flex items-center gap-1">
										<div className="size-2.5 rounded-full bg-primary" />
										<div className="h-[3px] w-4 rounded-full bg-foreground/15" />
									</div>
									<div className="space-y-1.5">
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
											<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
										</div>
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
											<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
										</div>
									</div>
									<div className="space-y-1.5">
										<div className="h-[3px] w-full rounded-full bg-foreground/15" />
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2/3 rounded-full bg-foreground/15" />
											<div className="h-[3px] w-1/3 rounded-full bg-foreground/15" />
										</div>
									</div>
								</div>
							))}
						</div>
						<div>
							<h3 className="font-semibold text-foreground">
								{documentsTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{documentsDescription}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
