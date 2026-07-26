"use client";

import { Check } from "lucide-react";

import { defaultPlans } from "./data";

export interface PricingPlan {
	cta: string;
	description: string;
	featured?: boolean;
	features: string[];
	featuresHeader?: string;
	href: string;
	name: string;
	price: string;
}

export interface PricingCardsProps {
	annualDiscount?: string;
	description?: string;
	plans?: [PricingPlan, PricingPlan];
	title?: string;
}

export function PricingCards({
	title = "Pricing that scale with your business",
	description = "Choose the perfect plan for your needs and start optimizing your workflow today",
	annualDiscount = "Save 25%",
	plans = defaultPlans,
}: PricingCardsProps) {
	const [free, pro] = plans;

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
					<div className="mx-auto @3xl:max-w-2xl max-w-sm">
						<div className="grid @3xl:grid-cols-2 gap-6 *:p-8">
							{/* Free plan */}
							<div className="row-span-4 grid grid-rows-subgrid gap-8 rounded-(--radius) border">
								<div className="self-end">
									<div className="font-medium text-lg tracking-tight">
										{free.name}
									</div>
									<div className="mt-1 text-balance text-muted-foreground text-sm">
										{free.description}
									</div>
								</div>
								<div>
									<span className="font-semibold text-3xl">{free.price}</span>
									<div className="text-muted-foreground text-sm">Per month</div>
								</div>
								<a
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
									href={free.href}
								>
									{free.cta}
								</a>
								<ul className="space-y-3 text-sm" role="list">
									{free.features.map((feature) => (
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

							{/* Pro plan (featured) */}
							<div className="row-span-4 grid grid-rows-subgrid gap-8 rounded-(--radius) bg-card shadow-black/6.5 shadow-xl ring-1 ring-border">
								<div className="self-end">
									<div className="font-medium text-lg tracking-tight">
										{pro.name}
									</div>
									<div className="mt-1 text-balance text-muted-foreground text-sm">
										{pro.description}
									</div>
								</div>
								<div>
									<span className="font-semibold text-3xl">{pro.price}</span>
									<div className="text-muted-foreground text-sm">Per month</div>
								</div>
								<a
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))]"
									href={pro.href}
								>
									{pro.cta}
								</a>
								<ul className="space-y-3 text-sm" role="list">
									{pro.featuresHeader && (
										<li className="font-medium">{pro.featuresHeader}</li>
									)}
									{pro.features.map((feature) => (
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
		</section>
	);
}
