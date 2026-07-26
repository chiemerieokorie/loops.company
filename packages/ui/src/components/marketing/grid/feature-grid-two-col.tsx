import { AppBrandLogo } from "./brand-logos";

export interface FeatureGridTwoColProps {
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
}

export function FeatureGridTwoCol({
	feature1Title = "Powerful analytics dashboard",
	feature1Description = "Track performance metrics with real-time data visualization and customizable reports for informed decisions.",
	feature2Title = "Streamlined invoicing system",
	feature2Description = "Generate, send, and manage professional invoices automatically with integrated payment tracking.",
}: FeatureGridTwoColProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative grid @4xl:grid-cols-2 @4xl:divide-x @max-4xl:divide-y overflow-hidden rounded-2xl border border-transparent bg-card/50 shadow-black/5 shadow-md ring-1 ring-border">
					<div className="row-span-2 grid grid-rows-subgrid gap-8">
						<div className="px-8 pt-8">
							<h3 className="text-balance font-semibold">{feature1Title}</h3>
							<p className="mt-3 text-muted-foreground">
								{feature1Description}
							</p>
						</div>
						<div className="self-end pb-4">
							{/* Area chart illustration placeholder */}
							<div
								aria-hidden="true"
								className="flex aspect-auto h-72 items-end justify-center px-8 pb-4"
							>
								<div className="flex h-full w-full items-center justify-center rounded-xl border border-border/50 bg-muted/30">
									<span className="text-muted-foreground text-sm">
										Analytics Chart
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row-span-2 grid grid-rows-subgrid gap-8">
						<div className="relative z-10 px-8 pt-8">
							<h3 className="text-balance font-semibold">{feature2Title}</h3>
							<p className="mt-3 text-muted-foreground">
								{feature2Description}
							</p>
						</div>
						<div className="self-end px-8 pb-8">
							<div aria-hidden="true" className="relative">
								<div className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50">
									<div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-illustration p-8 text-sm shadow-black/6.5 shadow-xl ring-1 ring-border-illustration">
										<div className="mb-6 flex items-start justify-between">
											<div className="space-y-0.5">
												<AppBrandLogo id="paint_logo_inv" />
												<div className="mt-4 font-mono text-xs">INV-456789</div>
												<div className="mt-1 -translate-x-1 font-mono font-semibold text-2xl">
													$284,342.57
												</div>
												<div className="font-medium text-xs">
													Due in 15 days
												</div>
											</div>
											<div className="w-16 space-y-2 rounded-md bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration [--color-border:color-mix(in_oklab,var(--color-foreground)15%,transparent)]">
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
					</div>
				</div>
			</div>
		</section>
	);
}
