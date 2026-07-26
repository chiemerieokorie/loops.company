import { PhoneCall, UsersRound } from "lucide-react";

export interface ContactCardsTestimonialProps {
	description?: string;
	salesHref?: string;
	supportEmail?: string;
	supportHref?: string;
	testimonialAuthor?: string;
	testimonialAvatarAlt?: string;
	testimonialAvatarSrc?: string;
	testimonialQuote?: string;
	testimonialRole?: string;
	title?: string;
}

export function ContactCardsTestimonial({
	title = "Help us route your inquiry",
	description = "Find answers to your questions and get support for our services.",
	salesHref = "#link",
	supportHref = "#link",
	supportEmail = "hey@runwayhq.com",
	testimonialQuote = "Their support team resolved my issue within minutes. Best customer service I've experienced in years.",
	testimonialAuthor = "Shadcn",
	testimonialRole = "Creator of Shadcn/UI",
	testimonialAvatarSrc = "https://avatars.githubusercontent.com/u/124599?v=4",
	testimonialAvatarAlt = "Shadcn Avatar",
}: ContactCardsTestimonialProps) {
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
					<div className="mx-auto mt-12 grid max-w-2xl @lg:grid-cols-2 gap-1 rounded-2xl border p-1">
						<div
							className="flex flex-col rounded-xl bg-card p-6 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
							data-slot="card"
						>
							<div className="relative mb-4">
								<UsersRound className="lucide lucide-users-round size-5 drop-shadow drop-shadow-indigo-500/20 not-dark:*:nth-2:stroke-card not-dark:*:first:stroke-card *:last:opacity-25" />
								<UsersRound className="lucide lucide-users-round mask-t-from-25% mask-t-to-75% absolute inset-0 size-5 drop-shadow drop-shadow-emerald-500/20 not-dark:*:nth-2:stroke-card not-dark:*:first:stroke-card *:last:opacity-25" />
							</div>
							<h2 className="font-medium">Contact Sales</h2>
							<p className="mt-2 mb-4 text-balance text-muted-foreground">
								Get in touch with our sales team for more information.
							</p>
							<a
								className="mt-auto inline-flex h-8 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								href={salesHref}
							>
								Talk to sales
							</a>
						</div>
						<div
							className="flex flex-col rounded-xl bg-card p-6 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
							data-slot="card"
						>
							<div className="relative mb-4">
								<PhoneCall className="lucide lucide-phone-call size-5 drop-shadow drop-shadow-indigo-500/20 *:not-first:opacity-25 not-dark:*:first:stroke-card" />
								<PhoneCall className="lucide lucide-phone-call mask-t-from-25% mask-t-to-75% absolute inset-0 size-5 drop-shadow drop-shadow-emerald-500/20 *:not-first:opacity-50 not-dark:*:first:stroke-card" />
							</div>
							<h2 className="font-medium text-lg">Help and Support</h2>
							<p className="mt-2 mb-4 text-balance text-muted-foreground">
								Find answers to your questions and get support for our services.
							</p>
							<div className="mt-auto flex flex-wrap gap-1">
								<a
									className="inline-flex h-8 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
									href={supportHref}
								>
									Contact Support
								</a>
								<a
									className="inline-flex h-8 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 font-medium text-primary text-xs transition-all hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
									href={`mailto:${supportEmail}`}
								>
									{supportEmail}
								</a>
							</div>
						</div>
						<div className="col-span-full flex flex-col p-6">
							<div className="space-y-6">
								<p className="text-balance text-foreground text-xl">
									{'"'}
									{testimonialQuote}
									{'"'}
								</p>
								<div className="grid grid-cols-[auto_1fr] items-center gap-4">
									<div className="relative size-18 overflow-hidden rounded-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/25">
										<img
											alt={testimonialAvatarAlt}
											className="h-full w-full object-cover"
											decoding="async"
											height="72"
											loading="lazy"
											src={testimonialAvatarSrc}
											style={{ color: "transparent" }}
											width="72"
										/>
									</div>
									<div className="space-y-0.5">
										<p className="text-balance font-medium text-foreground text-sm">
											{testimonialAuthor}
										</p>
										<p className="text-balance text-foreground/65 text-xs">
											{testimonialRole}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
