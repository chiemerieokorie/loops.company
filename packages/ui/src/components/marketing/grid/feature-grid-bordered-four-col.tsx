import { Cpu, Link, Lock, Plus, Sparkles, Zap } from "lucide-react";
import { AppBrandLogo, GeminiLogo, ReplitLogo } from "./brand-logos";
import { defaultFeatureItems, type FeatureItem } from "./data";

export interface FeatureGridBorderedFourColItem {
	description: string;
	icon: "zap" | "cpu" | "lock" | "sparkles";
	title: string;
}

export interface FeatureGridBorderedFourColProps {
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
	items?: FeatureGridBorderedFourColItem[];
}

function CellIcon({ icon }: { icon: FeatureItem["icon"] }) {
	if (icon === "zap") {
		return <Zap className="lucide size-4 fill-foreground/10 text-foreground" />;
	}
	if (icon === "cpu") {
		return <Cpu className="lucide size-4 fill-foreground/10 text-foreground" />;
	}
	if (icon === "lock") {
		return (
			<Lock className="lucide size-4 fill-foreground/10 text-foreground" />
		);
	}
	return (
		<Sparkles className="lucide size-4 fill-foreground/10 text-foreground" />
	);
}

/** Crosshair corner decoration used at each corner of the bordered grid. */
function Crosshair({ className }: { className: string }) {
	return (
		<div
			aria-hidden="true"
			className={`mask-radial-from-15% absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25 ${className}`}
		/>
	);
}

export function FeatureGridBorderedFourCol({
	feature1Title = "Powerful analytics dashboard",
	feature1Description = "Track performance metrics with real-time data visualization and customizable reports for informed.",
	feature2Title = "Streamlined invoicing system",
	feature2Description = "Generate, send, and manage professional invoices automatically with integrated payment tracking.",
	items = defaultFeatureItems,
}: FeatureGridBorderedFourColProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
				<div className="relative">
					<Crosshair className="-translate-[calc(50%-0.5px)] absolute" />
					<Crosshair className="absolute right-0 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)]" />
					<Crosshair className="absolute right-0 bottom-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
					<Crosshair className="absolute bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
					<div className="relative grid @4xl:grid-cols-4 grid-cols-2 divide-x divide-y divide-foreground/10 overflow-hidden border border-foreground/10 *:p-4 @4xl:*:p-8">
						{/* Large cell 1 — invoice card */}
						<div className="!p-8 @4xl:col-span-2 col-span-full row-span-2 grid grid-rows-subgrid gap-8">
							<div className="mx-auto w-full max-w-84 self-center">
								<div aria-hidden="true" className="relative">
									<div className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50">
										<div className="relative z-10 overflow-hidden rounded-2xl bg-illustration p-8 text-sm shadow-black/10 shadow-xl ring-1 ring-border-illustration">
											<div className="mb-6 flex items-start justify-between">
												<div className="space-y-0.5">
													<AppBrandLogo id="bf_logo" />
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
						<div className="!p-8 @4xl:col-span-2 col-span-full row-span-2 grid grid-rows-subgrid gap-8">
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
										<div className="absolute inset-0 scale-100 opacity-100 blur-lg transition-all duration-300">
											<div className="absolute inset-x-6 top-12 bottom-0 -translate-y-3 animate-hue-rotate bg-linear-to-r/increasing from-pink-400 to-purple-400" />
										</div>
										<div className="relative overflow-hidden rounded-2xl border border-transparent bg-card px-6 py-3 shadow-black/5 shadow-md ring-1 ring-foreground/10">
											<div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0">
												<div className="flex size-12 items-center justify-center rounded-lg border border-foreground/5 bg-muted">
													<GeminiLogo id="bf_gemini" />
												</div>
												<div className="space-y-0.5">
													<h3 className="font-medium text-sm">Gemini</h3>
													<p className="line-clamp-1 text-muted-foreground text-sm">
														The AI model that powers Google&apos;s search
														engine.
													</p>
												</div>
												<button
													aria-label="Add Gemini"
													className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-transparent bg-card font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all hover:bg-muted/50"
													type="button"
												>
													<Plus className="lucide size-4" />
												</button>
											</div>
											<div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0">
												<div className="flex size-12 items-center justify-center rounded-lg border border-foreground/5 bg-muted">
													<ReplitLogo />
												</div>
												<div className="space-y-0.5">
													<h3 className="font-medium text-sm">Replit</h3>
													<p className="line-clamp-1 text-muted-foreground text-sm">
														Build, run, and deploy applications in your browser.
													</p>
												</div>
												<button
													aria-label="Add Replit"
													className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-transparent bg-card font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all hover:bg-muted/50"
													type="button"
												>
													<Plus className="lucide size-4" />
												</button>
											</div>
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

						{/* Small feature cells */}
						{items.map((item) => (
							<div className="space-y-3" key={item.title}>
								<div className="flex items-center gap-2">
									<CellIcon icon={item.icon} />
									<h3 className="font-medium text-sm">{item.title}</h3>
								</div>
								<p className="text-muted-foreground text-sm">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
