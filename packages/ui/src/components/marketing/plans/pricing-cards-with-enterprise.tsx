import { Check } from "lucide-react";

import { defaultEnterprisePlan, defaultWithEnterpriseTiers } from "./data";

export interface PricingTierItem {
	cta: string;
	description: string;
	featured?: boolean;
	features: string[];
	featuresHeader?: string;
	href: string;
	name: string;
	price: string;
}

export interface EnterpriseDetails {
	cta?: string;
	description?: string;
	features?: string[];
	href?: string;
	name?: string;
}

export interface PricingCardsWithEnterpriseProps {
	annualDiscount?: string;
	/** When true renders decorative corner-cross ornaments on the outer border */
	decorativeCorners?: boolean;
	description?: string;
	enterprise?: EnterpriseDetails;
	tiers?: [PricingTierItem, PricingTierItem, PricingTierItem];
	title?: string;
}

const CornerCross = ({ className }: { className: string }) => (
	<div
		aria-hidden="true"
		className={`mask-radial-from-15% absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25 ${className}`}
	/>
);

export function PricingCardsWithEnterprise({
	title = "Pricing that scale with your business",
	description = "Choose the perfect plan for your needs and start optimizing your workflow today",
	annualDiscount = "Save 25%",
	tiers = defaultWithEnterpriseTiers,
	enterprise = defaultEnterprisePlan,
	decorativeCorners = false,
}: PricingCardsWithEnterpriseProps) {
	const ent = { ...defaultEnterprisePlan, ...enterprise };

	return (
		<section className="relative bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance font-bold text-3xl md:text-4xl lg:text-5xl lg:tracking-tight">
						{title}
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-balance text-lg text-muted-foreground">
						{description}
					</p>
					<div className="my-12">
						<div
							className="relative mx-auto grid w-fit grid-cols-2 rounded-full bg-foreground/5 p-1 *:block *:h-8 *:w-24 *:rounded-full *:text-foreground/75 *:text-sm *:hover:opacity-75"
							data-period="annually"
						>
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-1 w-1/2 in-data-[period=monthly]:translate-x-0 translate-x-full rounded-full border border-transparent bg-card shadow ring-1 ring-foreground/5 transition-transform duration-500 ease-in-out"
							/>
							<button
								className="relative data-active:font-medium data-active:text-foreground"
								type="button"
							>
								Monthly
							</button>
							<button
								className="relative data-active:font-medium data-active:text-foreground"
								data-active="true"
								type="button"
							>
								Annually
							</button>
						</div>
						<div className="mt-3 text-center text-xs">
							<span className="font-medium text-primary">{annualDiscount}</span>{" "}
							On Annual Billing
						</div>
					</div>
				</div>

				<div className="@container">
					<div className="relative mx-auto @max-4xl:max-w-sm border">
						{decorativeCorners && (
							<>
								<CornerCross className="-translate-[calc(50%+0.5px)]" />
								<CornerCross className="absolute right-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+0.5px)]" />
								<CornerCross className="absolute right-0 bottom-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />
								<CornerCross className="absolute bottom-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />
							</>
						)}

						{/* Three-tier grid */}
						<div className={decorativeCorners ? "relative border-b" : ""}>
							{decorativeCorners && (
								<CornerCross className="absolute bottom-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />
							)}
							<div className="grid @4xl:grid-cols-3 *:p-8">
								{tiers.map((tier, index) => {
									const isFeatured = tier.featured;
									const isEdge = index === 0 || index === tiers.length - 1;

									return (
										<div
											className={
												isFeatured
													? "row-span-4 @max-4xl:mx-1 @4xl:my-2 grid grid-rows-subgrid gap-8 rounded-(--radius) bg-card shadow-black/6.5 shadow-xl ring-1 ring-border backdrop-blur"
													: `row-span-4 grid grid-rows-subgrid gap-8 ${isEdge ? "@max-4xl:p-9" : ""}`
											}
											key={tier.name}
										>
											<div className="self-end">
												<div className="font-medium text-lg tracking-tight">
													{tier.name}
												</div>
												<div className="mt-1 text-balance text-muted-foreground text-sm">
													{tier.description}
												</div>
											</div>
											<div>
												<span className="font-semibold text-3xl">
													{tier.price}
												</span>
												<div className="text-muted-foreground text-sm">
													Per month
												</div>
											</div>
											{isFeatured ? (
												<a
													className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))]"
													href={tier.href}
												>
													{tier.cta}
												</a>
											) : (
												<a
													className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
													href={tier.href}
												>
													{tier.cta}
												</a>
											)}
											<ul className="space-y-3 text-sm" role="list">
												{tier.featuresHeader && (
													<li className="font-medium">{tier.featuresHeader}</li>
												)}
												{tier.features.map((feature) => (
													<li className="flex items-center gap-2" key={feature}>
														<Check
															className="size-3 text-muted-foreground"
															strokeWidth={3.5}
														/>
														{feature}
													</li>
												))}
											</ul>
										</div>
									);
								})}
							</div>
						</div>

						{/* Enterprise band */}
						<div className={decorativeCorners ? "relative" : ""}>
							{decorativeCorners && (
								<CornerCross className="absolute right-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%-0.5px)]" />
							)}
							<div className="grid @4xl:grid-cols-3 @4xl:divide-x @max-4xl:divide-y border-t *:p-8">
								<div className="space-y-6">
									<div className="self-end">
										<div className="font-medium text-lg tracking-tight">
											{ent.name}
										</div>
										<div className="mt-1 text-balance text-muted-foreground text-sm">
											{ent.description}
										</div>
									</div>
									<a
										className="inline-flex h-9 @max-4xl:w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
										href={ent.href}
									>
										{ent.cta}
									</a>
								</div>
								<div className="col-span-2">
									<ul
										className="grid @4xl:grid-cols-2 gap-x-14 gap-y-3 text-sm"
										role="list"
									>
										{ent.features?.map((feature) => (
											<li className="flex items-center gap-2" key={feature}>
												<Check
													className="size-3 text-muted-foreground"
													strokeWidth={3.5}
												/>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
