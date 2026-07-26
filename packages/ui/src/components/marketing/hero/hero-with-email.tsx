"use client";

export interface HeroWithEmailProps {
	badge?: string;
	description?: string;
	disclaimer?: string;
	emailPlaceholder?: string;
	submitLabel?: string;
	title?: string;
}

export function HeroWithEmail({
	badge = "AI-Powered",
	title = "AI-Powered Meeting Assistant",
	description = "Automatically transcribe, summarize, and action-item your meetings. Focus on the conversation, not the notes.",
	emailPlaceholder = "Enter your email address",
	submitLabel = "Get early access",
	disclaimer = "No credit card required. Free 14-day trial.",
}: HeroWithEmailProps) {
	return (
		<section>
			<div className="relative pt-24 pb-24 md:pt-36 lg:pt-44">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-1 h-[calc(100%-12rem)] overflow-hidden rounded-3xl border bg-background before:absolute before:inset-0 not-dark:before:bg-primary/2.5"
				/>
				<div
					aria-hidden="true"
					className="mask-radial-from-60% mask-radial-at-bottom mask-radial-[75%_75%] pointer-events-none absolute inset-0 bottom-0 bg-gradient-to-t from-primary/5 to-transparent"
				/>

				<div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
					{badge && (
						<div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-medium text-primary text-xs">
							<svg
								className="size-3"
								fill="none"
								height="24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
							</svg>
							{badge}
						</div>
					)}
					<h1 className="mx-auto max-w-2xl text-balance font-semibold text-4xl md:text-5xl">
						{title}
					</h1>
					<p className="mx-auto mt-4 mb-8 max-w-lg text-balance text-lg text-muted-foreground">
						{description}
					</p>

					<form
						className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
						onSubmit={(e) => e.preventDefault()}
					>
						<input
							aria-label="Email address"
							className="h-9 w-full flex-1 rounded-md border border-border bg-card px-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
							placeholder={emailPlaceholder}
							type="email"
						/>
						<button
							className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent"
							type="submit"
						>
							{submitLabel}
						</button>
					</form>
					{disclaimer && (
						<p className="mt-3 text-muted-foreground text-xs">{disclaimer}</p>
					)}
				</div>

				{/* Mobile preview mockup */}
				<div aria-hidden="true" className="relative mx-auto mt-12 max-w-xs">
					<div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/10 ring-1 ring-border">
						<div className="border-border border-b bg-muted/30 px-4 py-3">
							<div className="flex items-center gap-2">
								<div className="size-2 rounded-full bg-foreground/20" />
								<span className="font-medium text-xs">Meeting Summary</span>
							</div>
						</div>
						<div className="space-y-3 p-4">
							<div className="rounded-lg bg-muted/50 p-3">
								<p className="font-medium text-xs">Q3 Planning Meeting</p>
								<p className="mt-1 text-[11px] text-muted-foreground">
									Duration: 47 minutes
								</p>
							</div>
							<div>
								<p className="mb-2 font-medium text-muted-foreground text-xs">
									Action Items
								</p>
								<div className="space-y-1.5">
									{[
										"Review Q2 metrics by Friday",
										"Schedule 1:1s with engineering",
										"Draft roadmap proposal",
									].map((item) => (
										<div className="flex items-start gap-2 text-xs" key={item}>
											<div className="mt-1 size-2 shrink-0 rounded-full border border-primary" />
											<span>{item}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
