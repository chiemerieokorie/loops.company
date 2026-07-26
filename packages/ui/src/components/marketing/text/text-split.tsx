export interface TextSplitProps {
	body?: string[];
	ctaHref?: string;
	ctaLabel?: string;
	headingHighlight?: string;
	headingMuted?: string;
}

export function TextSplit({
	headingMuted = "Building the next generation of",
	headingHighlight = "AI-powered Marketing Tools",
	body = [
		"Our platform combines cutting-edge AI models with intuitive interfaces to streamline your development workflow and boost productivity.",
		"With intelligent code completion and automated testing, developers can focus on solving complex problems rather than getting caught up in repetitive tasks.",
	],
	ctaLabel = "Explore Features",
	ctaHref = "#",
}: TextSplitProps) {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
					<h2 className="font-semibold text-4xl text-muted-foreground">
						{headingMuted}{" "}
						<strong className="font-semibold text-foreground">
							{headingHighlight}
						</strong>
					</h2>
					<div className="space-y-6">
						{body.map((paragraph, index) => (
							<p
								className="text-balance text-lg text-muted-foreground leading-relaxed"
								key={index}
							>
								{paragraph}
							</p>
						))}
						<a
							className="inline-flex h-8 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-md border border-transparent bg-card px-3 pr-1.5 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							href={ctaHref}
						>
							<span>{ctaLabel}</span>
							<svg
								aria-hidden="true"
								className="lucide lucide-chevron-right size-2"
								fill="none"
								height="24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="m9 18 6-6-6-6" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
