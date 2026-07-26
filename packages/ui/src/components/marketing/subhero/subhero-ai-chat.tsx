export interface SubheroAiChatProps {
	badge?: string;
	chatDate?: string;
	chatLinks?: Array<{ href: string; label: string; faviconDomain: string }>;
	chatMessage?: string;
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	replyMessage?: string;
	title?: string;
}

export function SubheroAiChat({
	badge = "Astor AI",
	title = "AI-driven insights, seamless execution.",
	description = "With Astor's personal AI, get your projects to the finish line faster and with context.",
	ctaLabel = "Get Started",
	ctaHref = "#",
	chatMessage = "Distinctio provident nobis repudiandae deleniti necessitatibus.",
	chatDate = "Sat 22 Feb",
	replyMessage = "Astor is a collection of pre-built, responsive UI blocks and components designed to accelerate the development of marketing websites.",
	chatLinks = [
		{
			href: "https://astor.com",
			label: "astor.com",
			faviconDomain: "https://astor.com",
		},
		{
			href: "https://www.google.com",
			label: "google.com",
			faviconDomain: "https://www.google.com",
		},
	],
}: SubheroAiChatProps) {
	return (
		<section className="bg-linear-to-b to-background pt-24 pb-36">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-4xl">
					<div aria-hidden="true" className="flex flex-col gap-6">
						<div>
							<div className="before:mask-x-from-75% relative before:absolute before:inset-0 before:border-foreground/10 before:border-y before:border-dashed">
								<div className="relative mx-auto max-w-lg">
									<div className="inset-ring inset-ring-background/50 ml-auto w-fit max-w-3/4 rounded-t-2xl rounded-br rounded-bl-2xl bg-linear-to-b from-card to-indigo-500/5 p-3 text-indigo-950 text-sm shadow-indigo-600/10 shadow-md ring-1 ring-foreground/10 selection:bg-indigo-900/10 selection:text-indigo-700 dark:text-indigo-50/65 dark:selection:text-indigo-300">
										{chatMessage}
									</div>
								</div>
							</div>
							<div className="mx-auto mt-1 max-w-lg">
								<span className="block text-right text-muted-foreground text-xs">
									{chatDate}
								</span>
							</div>
						</div>
						<div className="h-30">
							<div className="before:mask-x-from-75% relative before:absolute before:inset-0 before:border-foreground/10 before:border-y before:border-dashed">
								<div className="relative mx-auto max-w-lg">
									<div className="inset-ring inset-ring-background/50 w-fit max-w-3/4 rounded-t-2xl rounded-br-2xl rounded-bl bg-linear-to-b from-card to-emerald-500/5 p-3 text-emerald-950 text-sm shadow-emerald-600/10 shadow-md ring-1 ring-foreground/10 selection:bg-emerald-900/10 selection:text-emerald-700 dark:text-emerald-50/65 dark:selection:text-emerald-300">
										<div className="text-sm">{replyMessage}</div>
									</div>
								</div>
							</div>
							<div className="mx-auto mt-2 max-w-lg">
								<div className="flex flex-wrap gap-2">
									{chatLinks.map((link) => (
										<a
											className="inline-flex h-6 max-w-32 items-center gap-1 overflow-hidden rounded-full bg-muted py-0 pr-2 pl-1 text-muted-foreground text-xs leading-none no-underline transition-colors duration-150 hover:bg-foreground/5 hover:text-primary"
											href={link.href}
											key={link.href}
											rel="noopener noreferrer"
											target="_blank"
										>
											<img
												alt="favicon"
												className="size-3.5"
												height="14"
												src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(link.faviconDomain)}`}
												width="14"
											/>
											<span className="truncate text-center font-normal">
												{link.label}
											</span>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-20 max-w-2xl text-center">
					<span className="rounded-full border border-primary/10 bg-primary/5 px-2 py-1 font-medium text-primary text-sm">
						{badge}
					</span>
					<h1 className="mt-4 text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
						{title}
					</h1>
					<p className="mx-auto mt-4 mb-6 max-w-md text-balance text-lg text-muted-foreground">
						{description}
					</p>
					<a
						className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
						href={ctaHref}
					>
						{ctaLabel}
					</a>
				</div>
			</div>
		</section>
	);
}
