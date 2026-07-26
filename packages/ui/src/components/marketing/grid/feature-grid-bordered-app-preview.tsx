import { Cpu, Link, Lock, Plus, Sparkles, Zap } from "lucide-react";
import {
	AppBrandLogo,
	CursorLogo,
	GeminiLogo,
	JetBrainsLogo,
	VSCodeLogo,
} from "./brand-logos";
import { defaultFeatureItems, type FeatureItem } from "./data";

export interface FeatureGridBorderedAppPreviewItem {
	description: string;
	icon: "zap" | "cpu" | "lock" | "sparkles";
	title: string;
}

export interface FeatureGridBorderedAppPreviewProps {
	ctaHref?: string;
	ctaLabel?: string;
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
	heading?: string;
	ideTitle?: string;
	items?: FeatureGridBorderedAppPreviewItem[];
	subheading?: string;
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

function Crosshair({ className }: { className: string }) {
	return (
		<div
			aria-hidden="true"
			className={`mask-radial-from-15% absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25 ${className}`}
		/>
	);
}

export function FeatureGridBorderedAppPreview({
	heading = "Everything you need to deploy your app",
	subheading = "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum at.",
	ctaLabel = "Get Started",
	ctaHref = "/pricing",
	ideTitle = "Replaces your IDE",
	feature1Title = "Intuitive Dashboard Experience",
	feature1Description = "Simplify complex data with our user-friendly interface designed for quick insights.",
	feature2Title = "Streamlined invoicing system",
	feature2Description = "Generate, send, and manage professional invoices automatically with integrated payment tracking.",
	items = defaultFeatureItems,
}: FeatureGridBorderedAppPreviewProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
				<div className="relative">
					<Crosshair className="-translate-[calc(50%-0.5px)] absolute" />
					<Crosshair className="absolute right-0 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)]" />
					<Crosshair className="absolute right-0 bottom-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
					<Crosshair className="absolute bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
					<div className="relative grid @3xl:grid-cols-4 grid-cols-2 divide-foreground/10 overflow-hidden border border-foreground/10 *:p-4 @4xl:*:p-8">
						{/* Full-width header cell */}
						<div className="col-span-full border-foreground/10 border-b">
							<div className="mx-auto max-w-xl pt-8 text-center">
								<h2 className="text-balance font-semibold text-4xl">
									{heading}
								</h2>
								<p className="my-6 text-balance text-lg text-muted-foreground">
									{subheading}
								</p>
								<a
									className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50"
									href={ctaHref}
								>
									{ctaLabel}
								</a>
							</div>
							<div className="relative pb-8">
								<div className="absolute inset-x-0 bottom-4 z-10 mx-auto max-w-56 space-y-3">
									<h3 className="text-center font-medium">{ideTitle}</h3>
									<div className="grid grid-cols-3 gap-0.5 *:flex *:items-center *:justify-center *:rounded *:bg-foreground/5 *:px-2 *:py-3">
										<div className="!rounded-l-lg">
											<JetBrainsLogo id="bap_jb" />
										</div>
										<div>
											<VSCodeLogo id="bap_vsc" />
										</div>
										<div className="!rounded-r-lg">
											<CursorLogo />
										</div>
									</div>
								</div>
								{/* App screenshot placeholder */}
								<div
									aria-hidden="true"
									className="mx-auto mt-6 h-48 max-w-sm rounded-t-xl border border-border/50 bg-muted/30"
								/>
							</div>
						</div>

						{/* Large cell 1 — invoice */}
						<div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8 border-foreground/10 border-r border-b p-8">
							<div className="mx-auto w-full max-w-84 self-center">
								<div aria-hidden="true" className="relative">
									<div className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50">
										<div className="relative z-10 overflow-hidden rounded-2xl bg-illustration p-8 text-sm shadow-black/10 shadow-xl ring-1 ring-border-illustration">
											<div className="mb-6 flex items-start justify-between">
												<div className="space-y-0.5">
													<AppBrandLogo id="bap_logo" />
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
						<div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8 border-foreground/10 border-b p-8">
							<div className="mx-auto max-w-sm self-center @4xl:px-8">
								<div
									aria-hidden="true"
									className="group rounded-2xl bg-foreground/5"
								>
									<div className="flex items-center gap-1.5 px-6 py-2.5 font-medium text-sm">
										<Link className="lucide size-3.5 opacity-50" />
										Integrations
									</div>
									<div className="relative overflow-hidden rounded-2xl border border-transparent bg-card px-6 py-3 shadow-black/5 shadow-md ring-1 ring-foreground/10">
										<div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3">
											<div className="flex size-12 items-center justify-center rounded-lg border border-foreground/5 bg-muted">
												<GeminiLogo id="bap_gem" />
											</div>
											<div className="space-y-0.5">
												<h3 className="font-medium text-sm">Gemini</h3>
												<p className="line-clamp-1 text-muted-foreground text-sm">
													The AI model that powers Google&apos;s search engine.
												</p>
											</div>
											<button
												aria-label="Add Gemini"
												className="inline-flex size-9 items-center justify-center rounded-md bg-card ring-1 ring-foreground/10 hover:bg-muted/50"
												type="button"
											>
												<Plus className="lucide size-4" />
											</button>
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
