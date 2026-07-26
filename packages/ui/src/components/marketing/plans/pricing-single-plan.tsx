import { CircleCheck } from "lucide-react";

import { defaultSinglePlanFeatures } from "./data";

export interface PricingSinglePlanFeature {
	label: string;
}

export interface PricingSinglePlanProps {
	annualDiscount?: string;
	billingNote?: string;
	cta?: string;
	ctaHref?: string;
	description?: string;
	disclaimer?: string;
	features?: string[];
	planName?: string;
	planTagline?: string;
	price?: string;
	title?: string;
}

export function PricingSinglePlan({
	title = "One simple plan, One Price",
	description = "Everything you need to optimize your workflow in one affordable package",
	annualDiscount = "Save 25%",
	planName = "All-in-One Solution",
	planTagline = "Everything you need in one simple plan",
	price = "$262",
	billingNote = "Billed annually",
	cta = "Get Started Now",
	ctaHref = "#",
	disclaimer = "No hidden fees. Cancel anytime. Invoices available for easy reimbursement",
	features = defaultSinglePlanFeatures,
}: PricingSinglePlanProps) {
	return (
		<section className="@container relative bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="text-balance font-semibold text-3xl md:text-4xl lg:text-5xl lg:tracking-tight">
						{title}
					</h2>
					<p className="mt-8 text-balance text-lg text-muted-foreground lg:text-xl">
						{description}
					</p>
					<div className="my-8">
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
						<div className="mt-3 text-xs">
							<span className="font-medium text-primary">{annualDiscount}</span>{" "}
							On Annual Billing
						</div>
					</div>
				</div>

				<div className="mx-auto max-w-md space-y-8">
					{/* Plan card */}
					<div className="space-y-6 rounded-2xl bg-card @lg:p-10 p-8 text-center shadow-black/6.5 shadow-xl ring-1 ring-border">
						<div>
							<div className="font-medium text-lg tracking-tight">
								{planName}
							</div>
							<div className="mx-auto mt-1 max-w-xs text-balance text-muted-foreground text-sm">
								{planTagline}
							</div>
						</div>

						<div className="mx-auto grid w-fit grid-cols-[auto_1fr] items-center gap-3">
							<span className="font-semibold text-5xl tracking-tight [font-feature-settings:'tnum']">
								{price}
							</span>
							<div className="text-left">
								<span className="text-sm">Per month</span>
								<div className="w-22 text-muted-foreground text-xs">
									{billingNote}
								</div>
							</div>
						</div>

						<a
							className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))]"
							href={ctaHref}
						>
							{cta}
						</a>

						<div
							aria-hidden="true"
							className="mx-16 h-px bg-[length:6px_1px] bg-repeat-x opacity-25 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)]"
						/>

						<div className="mx-auto mt-1 max-w-xs text-balance text-muted-foreground text-sm">
							{disclaimer}
						</div>
					</div>

					{/* Feature list */}
					<ul className="grid @md:grid-cols-2 gap-4 text-sm" role="list">
						{features.map((feature) => (
							<li className="flex items-center gap-2" key={feature}>
								<CircleCheck className="size-5 fill-emerald-500/10 stroke-emerald-500/10 *:last:stroke-emerald-600 *:last:drop-shadow dark:*:last:stroke-emerald-400" />
								{feature}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
