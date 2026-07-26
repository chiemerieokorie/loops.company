import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { AppBrandLogo } from "./brand-logos";
import { defaultFeatureItems, type FeatureItem } from "./data";

export type { FeatureItem };

export interface FeatureGridSplitWithItemsProps {
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
	items?: FeatureItem[];
}

function FeatureIcon({ icon }: { icon: FeatureItem["icon"] }) {
	if (icon === "zap") {
		return <Zap className="lucide size-4 text-foreground" />;
	}
	if (icon === "cpu") {
		return <Cpu className="lucide size-4 text-foreground" />;
	}
	if (icon === "lock") {
		return <Lock className="lucide size-4 text-foreground" />;
	}
	return <Sparkles className="lucide size-4 text-foreground" />;
}

export function FeatureGridSplitWithItems({
	feature1Title = "Intuitive Invoice Creation",
	feature1Description = "Create professional invoices instantly with our intuitive tools. Customize templates and automate billing to save time.",
	feature2Title = "Data Visualization",
	feature2Description = "Transform complex data into intuitive visualizations. Uncover insights and communicate findings effectively.",
	items = defaultFeatureItems,
}: FeatureGridSplitWithItemsProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid max-md:divide-y md:grid-cols-2 md:divide-x">
					<div className="row-span-2 grid grid-rows-subgrid gap-8 pb-12 md:pr-12">
						<div>
							<h3 className="font-semibold text-foreground text-xl">
								{feature1Title}
							</h3>
							<p className="mt-4 text-lg text-muted-foreground">
								{feature1Description}
							</p>
						</div>
						<div aria-hidden="true" className="relative">
							<div className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50">
								<div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-illustration p-8 text-sm shadow-black/6.5 shadow-xl ring-1 ring-border-illustration">
									<div className="mb-6 flex items-start justify-between">
										<div className="space-y-0.5">
											<AppBrandLogo id="paint_logo_split" />
											<div className="mt-4 font-mono text-xs">INV-456789</div>
											<div className="mt-1 -translate-x-1 font-mono font-semibold text-2xl">
												$284,342.57
											</div>
											<div className="font-medium text-xs">Due in 15 days</div>
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
					<div className="row-span-2 grid grid-rows-subgrid gap-8 pb-12 max-md:pt-12 md:pl-12">
						<div>
							<h3 className="font-semibold text-foreground text-xl">
								{feature2Title}
							</h3>
							<p className="mt-4 text-lg text-muted-foreground">
								{feature2Description}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50"
						>
							<div className="relative z-10 rounded-2xl bg-illustration p-6 shadow-black/10 shadow-xl ring-1 ring-border-illustration">
								<div className="font-medium text-foreground">
									<span className="bg-amber-100 py-1 text-amber-900">
										Spending
									</span>{" "}
									Limit
								</div>
								<div className="mt-0.5 text-muted-foreground text-sm">
									New users by first user primary channel group
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
								<div className="mt-3 space-y-1">
									<div className="grid grid-cols-[auto_1fr] items-center gap-2">
										<div className="size-1.5 rounded-full bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
										<div className="line-clamp-1 font-medium text-sm">
											Running{" "}
											<span className="text-muted-foreground">(20%)</span>{" "}
											average of 12 Minutes
										</div>
									</div>
									<div className="grid grid-cols-[auto_1fr] items-center gap-2">
										<div className="size-1.5 rounded-full bg-primary" />
										<div className="line-clamp-1 font-medium text-sm">
											Swimming{" "}
											<span className="text-muted-foreground">(20%)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
					{items.map((item) => (
						<div className="space-y-3" key={item.title}>
							<div className="flex items-center gap-2">
								<FeatureIcon icon={item.icon} />
								<h3 className="font-medium text-sm">{item.title}</h3>
							</div>
							<p className="text-muted-foreground text-sm">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
