import { CircleCheck } from "lucide-react";

export interface ContactSalesSplitProps {
	address?: string;
	badge?: string;
	description?: string;
	email?: string;
	features?: string[];
	helpCenterHref?: string;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
	phone?: string;
	privacyHref?: string;
	title?: string;
}

export function ContactSalesSplit({
	badge = "Sales",
	title = "Ready to scale your business?",
	description = "Get in touch with our sales team to discuss custom solutions for your organization.",
	features = [
		"24/7 support availability",
		"Dedicated account manager",
		"Custom integrations",
		"Priority response time",
	],
	helpCenterHref = "#support",
	email = "hello@runwayhq.com",
	phone = "+1 (234) 567-890",
	address = "123 Innovation Drive\nSan Francisco, CA 94107",
	privacyHref = "#link",
	onSubmit,
}: ContactSalesSplitProps) {
	const addressLines = address.split("\n");

	return (
		<section className="bg-background py-24">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="grid @2xl:grid-cols-2">
					<div className="flex max-w-sm flex-col">
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
						<div className="mt-12 space-y-6 *:space-y-2">
							<div>
								<h3 className="text-muted-foreground text-sm">Email</h3>
								<a
									className="font-medium text-foreground text-sm hover:underline hover:decoration-primary"
									href={`mailto:${email}`}
								>
									{email}
								</a>
							</div>
							<div>
								<h3 className="text-muted-foreground text-sm">Phone</h3>
								<a
									className="font-medium text-foreground text-sm hover:underline hover:decoration-primary"
									href={`tel:${phone.replace(/\s/g, "")}`}
								>
									{phone}
								</a>
							</div>
							<div>
								<h3 className="text-muted-foreground text-sm">Office</h3>
								<p className="font-medium text-foreground text-sm">
									{addressLines.map((line, i) => (
										<span key={i}>
											{line}
											{i < addressLines.length - 1 && <br />}
										</span>
									))}
								</p>
							</div>
						</div>
					</div>
					<div
						className="mx-auto mt-6 flex max-w-xl flex-col rounded-xl bg-card p-6 text-card-foreground shadow-black/6.5 shadow-xl ring-1 ring-border md:p-12"
						data-slot="card"
					>
						<h2 className="font-medium text-foreground">Talk to our team</h2>
						<p className="mt-2 text-muted-foreground text-sm">
							Fill out the form and we&apos;ll be in touch within 24 hours.
						</p>
						<form
							className="relative mt-8 space-y-6 **:data-[slot=label]:block"
							onSubmit={onSubmit}
						>
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="space-y-2.5">
									<label
										className="select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
										data-slot="label"
										htmlFor="first-name"
									>
										First name
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
										data-slot="input"
										id="first-name"
										placeholder="John"
										required
									/>
								</div>
								<div className="space-y-2.5">
									<label
										className="select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
										data-slot="label"
										htmlFor="last-name"
									>
										Last name
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
										data-slot="input"
										id="last-name"
										placeholder="Doe"
										required
									/>
								</div>
							</div>
							<div className="space-y-2.5">
								<label
									className="select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
									data-slot="label"
									htmlFor="email"
								>
									Professional Email
								</label>
								<input
									className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
									data-slot="input"
									id="email"
									placeholder="name@company.com"
									required
									type="email"
								/>
							</div>
							<div className="space-y-2.5">
								<label
									className="select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
									data-slot="label"
									htmlFor="company"
								>
									Company
								</label>
								<input
									className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
									data-slot="input"
									id="company"
									placeholder="Company Name"
									required
									type="text"
								/>
							</div>
							<div className="space-y-2.5">
								<label
									className="select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
									data-slot="label"
									htmlFor="message"
								>
									Message
								</label>
								<textarea
									className="field-sizing-content flex min-h-32 w-full rounded-md border border-transparent bg-card px-3 py-2 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
									data-slot="textarea"
									id="message"
									placeholder="Tell us about your project..."
									required
									rows={7}
								/>
							</div>
							<div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto]">
								<p className="text-muted-foreground text-sm">
									By submitting this form, you agree to our{" "}
									<a className="text-primary underline" href={privacyHref}>
										Privacy Policy
									</a>
								</p>
								<button
									className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 max-sm:row-start-1 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
									type="submit"
								>
									Get in touch
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
