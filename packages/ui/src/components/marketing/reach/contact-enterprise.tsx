import { ArrowRight, CircleCheck } from "lucide-react";

export interface ContactEnterpriseProps {
	badge?: string;
	description?: string;
	features?: string[];
	helpCenterHref?: string;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
	privacyHref?: string;
	termsHref?: string;
	title?: string;
}

export function ContactEnterprise({
	badge = "Enterprise",
	title = "Ready to scale your business?",
	description = "Get in touch with our enterprise team to discuss custom solutions for your organization.",
	features = [
		"24/7 support availability",
		"Dedicated account manager",
		"Custom integrations",
		"Priority response time",
	],
	helpCenterHref = "#support",
	termsHref = "#",
	privacyHref = "#",
	onSubmit,
}: ContactEnterpriseProps) {
	return (
		<section className="bg-background py-24">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="grid @2xl:grid-cols-2 @2xl:divide-x @max-2xl:divide-y overflow-hidden rounded-3xl border bg-muted/30 @lg:p-0">
					<div className="flex flex-col justify-center @lg:p-12 p-8">
						<div className="mb-6 w-fit font-medium text-muted-foreground text-xs">
							{badge}
						</div>
						<h1 className="text-balance font-semibold text-3xl">{title}</h1>
						<p className="mt-4 text-balance text-muted-foreground">
							{description}
						</p>
						<ul className="mt-8 space-y-3">
							{features.map((feature) => (
								<li className="flex items-center gap-3" key={feature}>
									<CircleCheck className="lucide lucide-circle-check size-4 shrink-0 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
						<div className="mt-8 text-muted-foreground text-sm">
							Looking for general support?{" "}
							<a
								className="font-medium text-primary hover:underline"
								href={helpCenterHref}
							>
								Visit our help center
							</a>
						</div>
					</div>
					<div className="flex flex-col justify-center bg-card @lg:p-12 p-8">
						<h2 className="font-semibold text-xl">Talk to our team</h2>
						<p className="mt-2 text-muted-foreground text-sm">
							Fill out the form and we&apos;ll be in touch within 24 hours.
						</p>
						<form className="mt-6 space-y-4" onSubmit={onSubmit}>
							<div className="grid gap-3 sm:grid-cols-2">
								<input
									aria-label="First name"
									className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
									data-slot="input"
									placeholder="First name"
									required
								/>
								<input
									aria-label="Last name"
									className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
									data-slot="input"
									placeholder="Last name"
									required
								/>
							</div>
							<input
								aria-label="Work email"
								className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
								data-slot="input"
								placeholder="Work email"
								required
								type="email"
							/>
							<input
								aria-label="Company name"
								className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
								data-slot="input"
								placeholder="Company name"
								required
							/>
							<input
								aria-label="Phone number"
								className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
								data-slot="input"
								placeholder="Phone number"
								type="tel"
							/>
							<button
								className="mt-4 inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-8 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
								type="submit"
							>
								Request a demo
								<ArrowRight className="lucide lucide-arrow-right ml-2 size-4" />
							</button>
						</form>
						<p className="mt-4 text-center text-muted-foreground text-xs">
							By submitting, you agree to our{" "}
							<a className="underline hover:no-underline" href={termsHref}>
								Terms
							</a>{" "}
							and{" "}
							<a className="underline hover:no-underline" href={privacyHref}>
								Privacy Policy
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
