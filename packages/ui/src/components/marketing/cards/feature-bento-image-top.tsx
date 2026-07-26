import {
	CloudflareLogo,
	FigmaLogo,
	LinearLogo,
	NangoLogo,
	OpenAILogo,
} from "./integration-logos";

export interface FeatureBentoImageTopProps {
	campaignDescription?: string;
	campaignTitle?: string;
	collaborativeAnalysisDescription?: string;
	collaborativeAnalysisTitle?: string;
	integrationDescription?: string;
	integrationTitle?: string;
	scheduledReportsDescription?: string;
	scheduledReportsTitle?: string;
}

export function FeatureBentoImageTop({
	scheduledReportsTitle = "Scheduled Reports",
	scheduledReportsDescription = "Automate report delivery to stakeholders with customizable scheduling options.",
	collaborativeAnalysisTitle = "Collaborative Analysis",
	collaborativeAnalysisDescription = "Add comments, share insights, and work together with your team to extract maximum.",
	campaignTitle = "Scheduled Reports",
	campaignDescription = "Automate report delivery to stakeholders with customizable scheduling options.",
	integrationTitle = "Seamless Integration",
	integrationDescription = "Add comments, share insights, and work together with your team to extract maximum.",
}: FeatureBentoImageTopProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @3xl:grid-cols-6 @xl:grid-cols-2 gap-3 not-dark:*:bg-card/50">
					{/* Card 1 — Scheduled Reports: illustration top, text bottom */}
					<div
						className="@3xl:col-span-2 grid grid-rows-[1fr_auto] gap-y-12 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div className="relative -m-8 p-8">
							<div
								aria-hidden="true"
								className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_6px)] opacity-3 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
							/>
							<div aria-hidden="true" className="relative w-full">
								<div className="group relative grid w-full gap-2.5 rounded-2xl border border-transparent bg-illustration p-4 text-xs shadow-black/6.5 shadow-md ring-1 ring-border-illustration duration-300 [grid-template-columns:auto_1fr]">
									<div className="relative h-fit">
										<div className="absolute bottom-1.5 -left-1.5 rounded-md border-red-700 border-t bg-red-500 px-1 py-px font-medium text-[10px] text-white shadow-md shadow-red-500/35">
											PDF
										</div>
										<div className="h-10 w-8 rounded-md border bg-gradient-to-b from-gray-100 to-gray-200" />
									</div>
									<div className="mt-0.5">
										<div className="font-medium text-sm">
											react-visualizations.pdf
										</div>
										<div className="relative my-1.5 h-1 overflow-hidden rounded-full bg-foreground/5 before:absolute before:inset-0 before:w-1/3 before:rounded-r-full before:bg-primary before:delay-150 before:duration-300 group-hover:before:w-2/3" />
										<div className="text-muted-foreground text-xs">
											29 KB / 120KB
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">
								{scheduledReportsTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{scheduledReportsDescription}
							</p>
						</div>
					</div>

					{/* Card 2 — Collaborative Analysis: currency cards top, text bottom */}
					<div
						className="@3xl:col-span-2 grid grid-rows-[1fr_auto] gap-y-12 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div className="relative -m-8 p-8">
							<div
								aria-hidden="true"
								className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_6px)] opacity-3 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
							/>
							<div aria-hidden="true" className="flex -space-x-4">
								{[
									{ icon: "btc", color: "blue", label: "BTC" },
									{ icon: "usd", color: "green", label: "USD" },
									{ icon: "euro", color: "red", label: "EURO" },
								].map(({ icon, color, label }) => (
									<div
										className={`before:mask-b-from-65% relative w-16 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-25% before:from-${color}-500/15 before:to-75%`}
										key={label}
									>
										<div
											className={`flex -translate-x-0.5 items-center gap-0.5 text-${color}-900 dark:text-${color}-300`}
										>
											{icon === "btc" && (
												<svg
													className="size-3"
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
												</svg>
											)}
											{icon === "usd" && (
												<svg
													className="size-3"
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<line x1="12" x2="12" y1="2" y2="22" />
													<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
												</svg>
											)}
											{icon === "euro" && (
												<svg
													className="size-3"
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M4 10h12" />
													<path d="M4 14h9" />
													<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
												</svg>
											)}
											<span className="font-medium text-xs">{label}</span>
										</div>
										<div className="space-y-1.5">
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2.5 rounded-full bg-border" />
												<div className="h-[3px] w-6 rounded-full bg-border" />
											</div>
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2.5 rounded-full bg-border" />
												<div className="h-[3px] w-6 rounded-full bg-border" />
											</div>
										</div>
										<div className="space-y-1.5">
											<div className="h-[3px] w-full rounded-full bg-border" />
											<div className="flex items-center gap-1">
												<div className="h-[3px] w-2/3 rounded-full bg-border" />
												<div className="h-[3px] w-1/3 rounded-full bg-border" />
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">
								{collaborativeAnalysisTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{collaborativeAnalysisDescription}
							</p>
						</div>
					</div>

					{/* Card 3 — Spending limit */}
					<div
						className="group @3xl:col-span-2 grid grid-rows-[1fr_auto] gap-y-12 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div
							aria-hidden="true"
							className="mask-b-from-65% relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50"
						>
							<div className="relative z-10 rounded-2xl border border-transparent bg-illustration p-6 shadow-black/6.5 shadow-xl ring-1 ring-border-illustration">
								<div className="font-medium text-foreground">
									<span className="bg-amber-100 py-1 text-amber-900">
										Spending
									</span>{" "}
									Limit
								</div>
								<div className="mt-0.5 text-muted-foreground text-sm">
									New users by First user primary channel group
								</div>
								<div className="relative mt-4 mb-4 flex">
									<div className="h-5 w-1/5 rounded-l-md bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
									<div className="h-5 w-1/5 bg-primary duration-300 group-hover:w-2/5" />
									<div className="h-5 w-3/5 rounded-r-md border duration-300 [--stripes-color:--alpha(var(--color-foreground)/20%)] [background-image:linear-gradient(-90deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] group-hover:w-2/5" />
								</div>
								<div className="flex gap-1 border-b border-dashed pb-3">
									<div className="w-2/5">
										<div className="font-medium text-foreground text-xl">
											40%
										</div>
										<div className="text-muted-foreground text-sm">Used</div>
									</div>
									<div className="w-3/5">
										<div className="font-medium text-foreground text-xl">
											60%
										</div>
										<div className="text-muted-foreground text-sm">Free</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-foreground">{campaignTitle}</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{campaignDescription}
							</p>
						</div>
					</div>

					{/* Card 4 — Campaign scheduling */}
					<div
						className="@3xl:col-span-3 @xl:col-span-full grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">{campaignTitle}</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{campaignDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-card after:absolute after:inset-x-8 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background"
						>
							<div className="relative z-10 rounded-2xl border border-transparent bg-illustration p-4 text-xs shadow-black/6.5 shadow-lg ring-1 ring-border-illustration duration-300">
								<div className="mb-0.5 font-semibold text-sm">Campaign</div>
								<div className="mb-4 flex gap-2 text-sm">
									<span>Loyalty program</span>
									<span className="text-muted-foreground">loyalty program</span>
								</div>
								<div className="grid @md:grid-cols-2 gap-2">
									<div className="flex gap-2 rounded-md border bg-muted/50 p-2">
										<div className="w-1 rounded-full bg-primary" />
										<div>
											<div className="font-medium text-sm">Start Date</div>
											<div className="text-muted-foreground">
												Feb 6, 2024 at 00:00
											</div>
										</div>
									</div>
									<div className="flex gap-2 rounded-md border bg-muted/50 p-2">
										<div className="w-1 rounded-full bg-primary" />
										<div>
											<div className="font-medium text-sm">End Date</div>
											<div className="text-muted-foreground">
												Feb 6, 2024 at 00:00
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Card 5 — Seamless Integration */}
					<div
						className="@3xl:col-span-3 @xl:col-span-full grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{integrationTitle}
							</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{integrationDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="relative -m-8 flex flex-col justify-center border-background border-x bg-linear-to-b from-transparent via-orange-400/5 to-zinc-400/5 p-8"
						>
							<div
								aria-hidden="true"
								className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,black,black_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
							/>
							<div className="relative grid @md:grid-cols-6 grid-cols-3 gap-4">
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								{/* Nango/Elysia icon */}
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration p-4 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<NangoLogo className="size-6" />
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								{/* Figma icon */}
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration p-4 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<FigmaLogo className="size-6" />
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
							</div>
							<div className="relative mt-4 grid @md:grid-cols-6 grid-cols-3 gap-4">
								{/* Linear icon */}
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<LinearLogo className="size-6" />
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								{/* OpenAI icon */}
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<OpenAILogo className="size-6" />
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								{/* Cloudflare icon */}
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<CloudflareLogo className="size-6" />
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
