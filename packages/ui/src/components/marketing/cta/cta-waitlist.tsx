"use client";

export interface CtaWaitlistProps {
	companiesJoinedCount?: number;
	ctaLabel?: string;
	description?: string;
	emailPlaceholder?: string;
	onSubmit?: (email: string) => void;
	title?: string;
}

export function CtaWaitlist({
	title = "Create, Sell and Grow",
	description = "Join a community of over 1000+ companies and developers who have already discovered the power of Astor.",
	emailPlaceholder = "Your email",
	ctaLabel = "Join Waitlist",
	companiesJoinedCount = 78,
	onSubmit,
}: CtaWaitlistProps) {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const email = (form.elements.namedItem("email") as HTMLInputElement).value;
		onSubmit?.(email);
	}

	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-md text-center">
					<h2 className="text-balance font-semibold text-3xl text-foreground md:text-4xl">
						{title}
					</h2>
					<p className="mt-4 text-balance text-muted-foreground">
						{description}
					</p>
					<form
						className="mx-auto my-6 w-full max-w-xs"
						onSubmit={handleSubmit}
					>
						<label
							className="sr-only block select-none font-medium text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
							data-slot="label"
							htmlFor="email"
						>
							{ctaLabel}
						</label>
						<div className="flex gap-2">
							<input
								className="flex h-8 w-full min-w-0 rounded-md border border-transparent bg-background px-3 py-1 text-base shadow outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
								data-slot="input"
								id="email"
								name="email"
								placeholder={emailPlaceholder}
								required
								type="email"
							/>
							<button
								className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-3 font-medium text-primary-foreground text-shadow-sm text-xs shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
								type="submit"
							>
								<span>{ctaLabel}</span>
							</button>
						</div>
					</form>
					<p className="text-muted-foreground text-sm">
						<span className="font-mono font-semibold text-foreground">
							{companiesJoinedCount}
						</span>{" "}
						Companies Joined Today
					</p>
				</div>
			</div>
		</section>
	);
}
