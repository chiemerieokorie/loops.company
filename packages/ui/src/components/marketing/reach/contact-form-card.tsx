import { Input } from "@runway/ui/components/input";
import { Label } from "@runway/ui/components/label";

export interface ContactFormCardProps {
	collaborateEmail?: string;
	collaboratePhone?: string;
	description?: string;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
	pressEmail?: string;
	pressPhone?: string;
	title?: string;
}

export function ContactFormCard({
	title = "Contact us",
	description = "Find answers to your questions and get support for our services.",
	collaborateEmail = "hey@runwayhq.com",
	collaboratePhone = "+65 8123 4567",
	pressEmail = "press@runwayhq.com",
	pressPhone = "+65 8123 4567",
	onSubmit,
}: ContactFormCardProps) {
	return (
		<section className="bg-background py-24">
			<div className="@container mx-auto max-w-5xl px-2">
				<div className="mx-auto max-w-4xl">
					<div className="px-4 text-center">
						<h1 className="text-balance font-semibold text-4xl md:text-5xl lg:tracking-tight">
							{title}
						</h1>
						<p className="mt-4 text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>
					<div
						className="mx-auto mt-12 flex max-w-xl flex-col rounded-xl bg-card p-6 text-card-foreground shadow-black/6.5 shadow-xl ring-1 ring-border md:p-12"
						data-slot="card"
					>
						<h2 className="font-medium text-foreground">Talk to our team</h2>
						<p className="mt-2 text-muted-foreground text-sm">
							Fill out the form and we&apos;ll be in touch within 24 hours.
						</p>
						<form
							className="relative mt-12 space-y-6 **:data-[slot=label]:block"
							onSubmit={onSubmit}
						>
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="space-y-2.5">
									<Label htmlFor="first-name">First name</Label>
									<Input id="first-name" placeholder="John" required />
								</div>
								<div className="space-y-2.5">
									<Label htmlFor="last-name">Last name</Label>
									<Input id="last-name" placeholder="Doe" required />
								</div>
							</div>
							<div className="space-y-2.5">
								<Label htmlFor="email">Professional Email</Label>
								<Input
									id="email"
									placeholder="name@company.com"
									required
									type="email"
								/>
							</div>
							<div className="space-y-2.5">
								<Label htmlFor="company">Company</Label>
								<Input
									id="company"
									placeholder="Company Name"
									required
									type="text"
								/>
							</div>
							<div className="space-y-2.5">
								<Label htmlFor="message">Message</Label>
								<textarea
									className="field-sizing-content flex min-h-32 w-full rounded-md border border-transparent bg-card px-3 py-2 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
									data-slot="textarea"
									id="message"
									placeholder="Tell us about your project..."
									required
									rows={7}
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
					<div className="mx-auto mt-6 grid max-w-xl @lg:grid-cols-2 gap-4">
						<div className="flex flex-col space-y-2.5 p-6 md:p-12">
							<h2 className="font-medium text-muted-foreground text-sm">
								Collaborate
							</h2>
							<a
								className="font-medium hover:underline hover:decoration-primary"
								href={`mailto:${collaborateEmail}`}
							>
								{collaborateEmail}
							</a>
							<a
								className="font-medium hover:underline hover:decoration-primary"
								href={`tel:${collaboratePhone.replace(/\s/g, "")}`}
							>
								{collaboratePhone}
							</a>
						</div>
						<div className="flex flex-col space-y-2.5 p-6 md:p-12">
							<h2 className="font-medium text-muted-foreground text-sm">
								Press
							</h2>
							<a
								className="font-medium hover:underline hover:decoration-primary"
								href={`mailto:${pressEmail}`}
							>
								{pressEmail}
							</a>
							<a
								className="font-medium hover:underline hover:decoration-primary"
								href={`tel:${pressPhone.replace(/\s/g, "")}`}
							>
								{pressPhone}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
