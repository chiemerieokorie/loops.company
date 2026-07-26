import { Link, Plus } from "lucide-react";
import { AppBrandLogo, GeminiLogo, ReplitLogo } from "./brand-logos";

export interface FeatureGridBorderedStatsProps {
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
	globeDescription?: string;
	globeTitle?: string;
	stat1Label?: string;
	stat1Value?: string;
	stat2Label?: string;
	stat2Value?: string;
	testimonialAuthor?: string;
	testimonialQuote?: string;
	testimonialRole?: string;
}

function Crosshair({ className }: { className: string }) {
	return (
		<div
			aria-hidden="true"
			className={`mask-radial-from-15% absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25 ${className}`}
		/>
	);
}

export function FeatureGridBorderedStats({
	feature1Title = "Intuitive Dashboard Experience",
	feature1Description = "Simplify complex data with our user-friendly interface designed for quick insights.",
	feature2Title = "Seamless Integration Ecosystem",
	feature2Description = "Connect with your favorite tools through our extensive API network, eliminating data silos.",
	stat1Value = "99%",
	stat1Label = "Uptime Guarantee",
	stat2Value = "73%",
	stat2Label = "Time Savings",
	testimonialQuote = "This platform transformed how we handle client projects. The automation features alone saved us countless hours of manual work every week.",
	testimonialAuthor = "Théo Balick",
	testimonialRole = "CTO, TechSolutions",
	globeTitle = "Global Reach",
	globeDescription = "Deploy to any region with a single click.",
}: FeatureGridBorderedStatsProps) {
	const integrations = [
		{
			name: "Gemini",
			desc: "The AI model that powers Google's search engine.",
		},
		{
			name: "Replit",
			desc: "Build, run, and deploy applications in your browser.",
		},
	];

	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
				<div className="relative">
					<Crosshair className="-translate-[calc(50%-0.5px)] absolute" />
					<Crosshair className="absolute right-0 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)]" />
					<Crosshair className="absolute right-0 bottom-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
					<Crosshair className="absolute bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
					<div className="relative grid @3xl:grid-cols-4 grid-cols-2 divide-foreground/10 overflow-hidden border border-foreground/10 *:p-8">
						{/* Large cell 1 — invoice */}
						<div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8 border-foreground/10 border-r border-b">
							<div className="mx-auto w-full max-w-84 self-center">
								<div aria-hidden="true" className="relative">
									<div className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50">
										<div className="relative z-10 overflow-hidden rounded-2xl bg-illustration p-8 text-sm shadow-black/10 shadow-xl ring-1 ring-border-illustration">
											<div className="mb-6 flex items-start justify-between">
												<div className="space-y-0.5">
													<AppBrandLogo id="bs_logo" />
													<div className="mt-4 font-mono text-xs">
														INV-456789
													</div>
													<div className="mt-1 -translate-x-1 font-mono font-semibold text-2xl">
														$284,342.57
													</div>
													<div className="font-medium text-xs">
														Due in 15 days
													</div>
												</div>
												<div
													aria-hidden="true"
													className="w-16 space-y-2 rounded-md bg-illustration p-2 shadow-md ring-1 ring-border-illustration [--color-border:color-mix(in_oklab,var(--color-foreground)15%,transparent)]"
												>
													<div className="flex items-center gap-1">
														<div className="size-2.5 rounded-full bg-foreground/15" />
														<div className="h-[3px] w-4 rounded-full bg-foreground/15" />
													</div>
													<div className="space-y-1.5">
														<div className="flex items-center gap-1">
															<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
															<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
														</div>
													</div>
													<div className="space-y-1.5">
														<div className="h-[3px] w-full rounded-full bg-foreground/15" />
													</div>
												</div>
											</div>
											<div className="space-y-1.5 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)]">
												<div className="grid grid-cols-[auto_1fr] items-center">
													<span className="block w-18 text-muted-foreground">
														To
													</span>
													<span className="h-2 w-1/4 rounded-full bg-border px-2" />
												</div>
												<div className="grid grid-cols-[auto_1fr] items-center">
													<span className="block w-18 text-muted-foreground">
														From
													</span>
													<span className="h-2 w-1/2 rounded-full bg-border px-2" />
												</div>
												<div className="grid grid-cols-[auto_1fr] items-center">
													<span className="block w-18 text-muted-foreground">
														Address
													</span>
													<span className="h-2 w-2/3 rounded-full bg-border px-2" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mx-auto max-w-sm text-center">
								<h3 className="text-balance font-semibold">{feature1Title}</h3>
								<p className="mt-3 text-muted-foreground">
									{feature1Description}
								</p>
							</div>
						</div>

						{/* Large cell 2 — integrations */}
						<div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8 border-foreground/10 border-b">
							<div className="mx-auto max-w-sm self-center @4xl:px-8">
								<div
									aria-hidden="true"
									className="group rounded-2xl bg-foreground/5"
								>
									<div className="flex items-center gap-1.5 px-6 py-2.5 font-medium text-sm">
										<Link className="lucide size-3.5 opacity-50" />
										Integrations
									</div>
									<div className="relative">
										<div className="absolute inset-0 opacity-75 blur-lg">
											<div className="absolute inset-x-6 top-12 bottom-0 -translate-y-3 animate-hue-rotate bg-linear-to-r/increasing from-pink-400 to-purple-400" />
										</div>
										<div className="relative overflow-hidden rounded-2xl border border-transparent bg-card px-6 py-3 shadow-black/5 shadow-md ring-1 ring-foreground/10">
											{integrations.map((int) => (
												<div
													className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0"
													key={int.name}
												>
													<div className="flex size-12 items-center justify-center rounded-lg border border-foreground/5 bg-muted">
														{int.name === "Gemini" ? (
															<GeminiLogo id="bs_gem" />
														) : (
															<ReplitLogo />
														)}
													</div>
													<div className="space-y-0.5">
														<h3 className="font-medium text-sm">{int.name}</h3>
														<p className="line-clamp-1 text-muted-foreground text-sm">
															{int.desc}
														</p>
													</div>
													<button
														aria-label={`Add ${int.name}`}
														className="inline-flex size-9 items-center justify-center rounded-md bg-card ring-1 ring-foreground/10 hover:bg-muted/50"
														type="button"
													>
														<Plus className="lucide size-4" />
													</button>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="mx-auto max-w-sm text-center">
								<h3 className="text-balance font-semibold">{feature2Title}</h3>
								<p className="mt-3 text-muted-foreground">
									{feature2Description}
								</p>
							</div>
						</div>

						{/* Stat cells */}
						<div className="flex flex-col items-center justify-center space-y-1 border-foreground/10 border-r text-center">
							<div className="font-bold text-4xl text-foreground">
								{stat1Value}
							</div>
							<p className="text-muted-foreground">{stat1Label}</p>
						</div>
						<div className="flex flex-col items-center justify-center space-y-1 text-center">
							<div className="font-bold text-4xl text-foreground">
								{stat2Value}
							</div>
							<p className="text-muted-foreground">{stat2Label}</p>
						</div>

						{/* Testimonial */}
						<div className="col-span-2 border-foreground/10 border-r">
							<blockquote className="relative max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-primary">
								<p className="text-foreground">{testimonialQuote}</p>
								<footer className="mt-4 flex items-center gap-2">
									<span
										className="relative flex size-6 shrink-0 overflow-hidden rounded-full border border-transparent bg-muted shadow ring-1 ring-foreground/10"
										data-slot="avatar"
									/>
									<cite>{testimonialAuthor}</cite>
									<span
										aria-hidden="true"
										className="size-1 rounded-full bg-foreground/15"
									/>
									<span className="text-muted-foreground">
										{testimonialRole}
									</span>
								</footer>
							</blockquote>
						</div>

						{/* Globe cell */}
						<div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8">
							<div className="mask-radial-from-35% relative -mx-8 self-center [--color-background:transparent]">
								{/* Simplified dot-matrix globe placeholder */}
								<svg
									aria-hidden="true"
									className="w-full text-foreground/20 opacity-75"
									style={{ background: "var(--color-background)" }}
									viewBox="0 0 120 60"
								>
									{Array.from({ length: 60 }, (_, row) =>
										Array.from({ length: 120 }, (_, col) => {
											const cx = col;
											const cy = row;
											const rx = 55;
											const ry = 28;
											const centerX = 60;
											const centerY = 30;
											const normalized =
												((cx - centerX) / rx) ** 2 + ((cy - centerY) / ry) ** 2;
											if (normalized <= 1 && Math.random() > 0.6) {
												return (
													<circle
														cx={cx}
														cy={cy}
														fill="currentColor"
														key={`${row}-${col}`}
														r="0.15"
													/>
												);
											}
											return null;
										})
									)}
									{/* User pin placeholders */}
									<circle cx="40" cy="20" fill="white" r="1.5" />
									<circle cx="60" cy="30" fill="white" r="1.5" />
									<circle cx="75" cy="18" fill="white" r="1.5" />
								</svg>
							</div>
							<div className="mx-auto max-w-sm text-center">
								<h3 className="text-balance font-semibold">{globeTitle}</h3>
								<p className="mt-3 text-muted-foreground">{globeDescription}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
