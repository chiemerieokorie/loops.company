import { Check } from "lucide-react";

import { defaultThreeTierPlans } from "./data";

export interface PricingTier {
	cta: string;
	ctaVariant?: "primary" | "secondary";
	description: string;
	featured?: boolean;
	features: string[];
	featuresHeader?: string;
	href: string;
	name: string;
	price: string;
}

export interface PricingCardsThreeTierProps {
	annualDiscount?: string;
	description?: string;
	tiers?: [PricingTier, PricingTier, PricingTier];
	title?: string;
}

export function PricingCardsThreeTier({
	title = "Pricing that scale with your business",
	description = "Choose the perfect plan for your needs and start optimizing your workflow today",
	annualDiscount = "Save 25%",
	tiers = defaultThreeTierPlans,
}: PricingCardsThreeTierProps) {
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
					<div className="mx-auto @4xl:max-w-full max-w-sm rounded-xl border">
						<div className="grid @4xl:grid-cols-3 *:p-8">
							{tiers.map((tier, index) => {
								const isFeatured = tier.featured;
								const isFirst = index === 0;
								const isLast = index === tiers.length - 1;

								return (
									<div
										className={
											isFeatured
												? "row-span-4 @max-4xl:mx-1 @4xl:my-2 grid grid-rows-subgrid gap-8 rounded-(--radius) bg-card shadow-black/6.5 shadow-xl ring-1 ring-border backdrop-blur"
												: `row-span-4 grid grid-rows-subgrid gap-8 ${isFirst || isLast ? "@max-4xl:p-9" : ""}`
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
				</div>
			</div>
		</section>
	);
}
