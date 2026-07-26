import { Link, Plus } from "lucide-react";
import { GeminiLogo, ReplitLogo } from "./brand-logos";

export interface FeatureGridChatIntegrationsProps {
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
}

export function FeatureGridChatIntegrations({
	feature1Title = "Powerful analytics dashboard",
	feature1Description = "Track performance metrics with real-time data visualization and customizable reports for informed decisions.",
	feature2Title = "Streamlined invoicing system",
	feature2Description = "Generate, send, and manage professional invoices automatically with integrated payment tracking.",
}: FeatureGridChatIntegrationsProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="relative grid @4xl:grid-cols-2 @4xl:divide-x @max-4xl:divide-y overflow-hidden rounded-2xl border border-transparent bg-card/50 shadow-black/5 shadow-md ring-1 ring-border">
					<div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
						<div className="mx-auto max-w-xs self-center">
							<div aria-hidden="true">
								<div className="flex items-center gap-2">
									<div className="size-4 rounded-full bg-muted" />
									<span className="text-sm">Irung</span>
								</div>
								<div className="mt-2 w-fit rounded-2xl rounded-tl border border-transparent bg-illustration p-3 text-sm shadow shadow-black/10 ring-1 ring-border-illustration">
									Hey <span className="text-primary">@bernard</span>, I&apos;ve
									updated the dashboard metrics.
								</div>
							</div>
						</div>
						<div className="mx-auto max-w-sm text-center">
							<h3 className="text-balance font-semibold">{feature1Title}</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{feature1Description}
							</p>
						</div>
					</div>
					<div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
						<div className="mx-auto max-w-sm @4xl:px-8">
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
										{/* Gemini row */}
										<div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0">
											<div className="flex size-12 items-center justify-center rounded-lg border border-foreground/5 bg-muted">
												<GeminiLogo id="gemini_ci" />
											</div>
											<div className="space-y-0.5">
												<h3 className="font-medium text-sm">Gemini</h3>
												<p className="line-clamp-1 text-muted-foreground text-sm">
													The AI model that powers Google&apos;s search engine.
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
										{/* Replit row */}
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
						<div className="relative z-10 mx-auto max-w-sm text-center">
							<h3 className="text-balance font-semibold">{feature2Title}</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{feature2Description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
