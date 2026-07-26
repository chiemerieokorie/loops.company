export interface ContactSplitFormProps {
	address?: string;
	description?: string;
	email?: string;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
	phone?: string;
	title?: string;
}

export function ContactSplitForm({
	title = "Get in touch",
	description = "Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.",
	email = "hello@runwayhq.com",
	phone = "+1 (234) 567-890",
	address = "123 Innovation Drive\nSan Francisco, CA 94107",
	onSubmit,
}: ContactSplitFormProps) {
	const addressLines = address.split("\n");

	return (
		<section className="bg-background py-24">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="grid @2xl:grid-cols-2 gap-12">
					<div>
						<h1 className="text-balance font-semibold text-4xl">{title}</h1>
						<p className="mt-4 max-w-md text-balance text-muted-foreground">
							{description}
						</p>
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
					<div className="relative">
						<div className="mask-radial-at-top-right mask-radial-from-65% mask-radial-[130%_150%] absolute inset-0 rounded-2xl border" />
						<form
							className="relative space-y-6 p-8 **:data-[slot=label]:block"
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
									className="field-sizing-content flex min-h-16 w-full rounded-md border border-transparent bg-card px-3 py-2 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
									data-slot="textarea"
									id="message"
									placeholder="Tell us about your project..."
									required
									rows={5}
								/>
							</div>
							<button
								className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
								type="submit"
							>
								Send message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
