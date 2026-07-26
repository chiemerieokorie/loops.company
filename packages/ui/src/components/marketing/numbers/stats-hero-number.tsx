export interface StatsHeroNumberProps {
	description?: string;
	descriptionHighlight?: string;
	value?: string;
}

export function StatsHeroNumber({
	value = "67,904,370",
	description = "Our advanced visual processing system can",
	descriptionHighlight = "analyze and interpret complex images",
}: StatsHeroNumberProps) {
	return (
		<section className="bg-background py-12 md:py-20">
			<div className="mx-auto max-w-5xl px-6 text-center">
				<div>
					<span
						className="font-mono font-semibold text-5xl text-foreground sm:text-6xl lg:text-8xl"
						style={{
							fontKerning: "none",
							display: "inline-block",
							lineHeight: "var(--number-flow-char-height, 1em)",
							padding: "var(--number-flow-mask-height, 0.25em) 0",
						}}
					>
						{value}
					</span>
				</div>
				<p className="mx-auto max-w-md text-muted-foreground">
					{description}{" "}
					<strong className="font-semibold text-foreground">
						{descriptionHighlight}
					</strong>
					, enabling applications.
				</p>
			</div>
		</section>
	);
}
