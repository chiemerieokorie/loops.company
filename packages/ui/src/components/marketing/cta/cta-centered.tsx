import { LogoMark } from "./logo-mark";

export interface CtaCenteredProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	title?: string;
}

export function CtaCentered({
	title = "Create, Sell and Grow",
	description = "Join a community of over 1000+ companies and developers who have already discovered the power of Astor.",
	ctaLabel = "Contact Sales",
	ctaHref = "#",
}: CtaCenteredProps) {
	return (
		<section className="bg-background py-12 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div
					className="relative overflow-hidden rounded-xl bg-card p-8 text-card-foreground shadow-black/6.5 shadow-lg ring-1 ring-border md:px-32 md:py-20"
					data-slot="card"
				>
					<LogoMark className="pointer-events-none absolute inset-0 size-full translate-y-3/4 text-foreground/10" />
					<div className="relative text-center">
						<h2 className="text-balance font-semibold text-3xl text-foreground md:text-4xl">
							{title}
						</h2>
						<p className="mt-4 mb-6 text-balance text-muted-foreground">
							{description}
						</p>
						<a
							className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
							href={ctaHref}
						>
							{ctaLabel}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
