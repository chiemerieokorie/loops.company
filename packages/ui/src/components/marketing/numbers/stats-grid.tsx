import { defaultStatsGrid } from "./data";

export interface StatsGridStat {
	label: string;
	value: string;
}

export interface StatsGridProps {
	description?: string;
	descriptionHighlight?: string;
	heading?: string;
	stats?: StatsGridStat[];
}

export function StatsGrid({
	heading = "Delivering measurable Results",
	description = "Our platform has helped companies",
	descriptionHighlight = "increase conversion rates and boost engagement",
	stats = defaultStatsGrid,
}: StatsGridProps) {
	return (
		<section className="@container bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<h2 className="mx-auto max-w-2xl text-balance text-center font-semibold text-3xl lg:text-4xl">
					{heading}
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-pretty text-center text-lg text-muted-foreground">
					{description}{" "}
					<strong className="font-semibold text-foreground">
						{descriptionHighlight}
					</strong>{" "}
					across all digital channels.
				</p>
				<div className="relative mt-12">
					{/* Corner decorators */}
					<div
						aria-hidden="true"
						className="mask-radial-from-15% -translate-[calc(50%-0.5px)] absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute right-0 size-3 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute right-0 bottom-0 size-3 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute bottom-0 size-3 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div className="grid @xl:grid-cols-3 grid-cols-2 divide-x border bg-card *:p-8 **:text-center *:hover:bg-foreground/2">
						{stats.map((stat, i) => (
							<div
								className={`space-y-2${i === 2 ? "@max-xl:hidden" : ""}${i === 1 ? "@max-xl:border-0" : ""}`}
								key={stat.label}
							>
								<div className="bg-linear-to-t from-foreground to-muted-foreground bg-clip-text font-medium text-3xl text-transparent md:text-5xl">
									{stat.value}
								</div>
								<p className="text-muted-foreground text-sm">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
