export interface ContactLinksProps {
	description?: string;
	generalEmail?: string;
	githubHandle?: string;
	githubHref?: string;
	salesDescription?: string;
	salesHref?: string;
	salesTitle?: string;
	supportDescription?: string;
	supportEmail?: string;
	supportEmailAddress?: string;
	supportHref?: string;
	supportTitle?: string;
	title?: string;
	twitterHandle?: string;
	twitterHref?: string;
}

export function ContactLinks({
	title = "Contact Us",
	description = "Find answers to your questions and get support for our services.",
	salesTitle = "Contact Sales",
	salesDescription = "Get in touch with our sales team for more information.",
	salesHref = "#link",
	supportTitle = "Help and Support",
	supportDescription = "Find answers to your questions and get support for our services.",
	supportHref = "#link",
	supportEmail = "hey@runwayhq.com",
	generalEmail = "hello@runwayhq.com",
	supportEmailAddress = "support@runwayhq.com",
	twitterHandle = "@runwayhq",
	twitterHref = "https://twitter.com/astorhq",
	githubHandle = "@runwayhq",
	githubHref = "https://github.com/astorhq",
}: ContactLinksProps) {
	return (
		<section className="bg-background py-24">
			<div className="@container mx-auto max-w-5xl px-2">
				<div className="mx-auto max-w-4xl">
					<div className="mx-auto max-w-2xl px-6">
						<h1 className="text-balance font-semibold text-4xl md:text-5xl lg:tracking-tight">
							{title}
						</h1>
						<p className="mt-4 text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>
					<div className="mx-auto mt-10 grid max-w-2xl @lg:grid-cols-2 gap-3 @lg:gap-y-12">
						<div className="flex flex-col rounded-xl border p-6">
							<h2 className="font-medium">{salesTitle}</h2>
							<p className="mt-2 mb-4 text-balance text-muted-foreground">
								{salesDescription}
							</p>
							<a
								className="mt-auto inline-flex h-8 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								href={salesHref}
							>
								Talk to sales
							</a>
						</div>
						<div className="flex flex-col rounded-xl border p-6">
							<h2 className="font-medium text-lg">{supportTitle}</h2>
							<p className="mt-2 mb-4 text-balance text-muted-foreground">
								{supportDescription}
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
						<div className="flex flex-col p-6">
							<h2 className="mb-2 text-muted-foreground text-sm">General</h2>
							<a
								className="font-medium hover:underline hover:decoration-primary"
								href={`mailto:${generalEmail}`}
							>
								{generalEmail}
							</a>
						</div>
						<div className="flex flex-col p-6">
							<h2 className="mb-2 text-muted-foreground text-sm">Support</h2>
							<a
								className="font-medium hover:underline hover:decoration-primary"
								href={`mailto:${supportEmailAddress}`}
							>
								{supportEmailAddress}
							</a>
						</div>
						<div className="flex flex-col p-6">
							<h2 className="mb-2 text-muted-foreground text-sm">X/Twitter</h2>
							<a
								className="font-medium hover:underline hover:decoration-primary"
								href={twitterHref}
							>
								{twitterHandle}
							</a>
						</div>
						<div className="flex flex-col p-6">
							<h2 className="mb-2 text-muted-foreground text-sm">GitHub</h2>
							<a
								className="font-medium hover:underline hover:decoration-primary"
								href={githubHref}
							>
								{githubHandle}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
