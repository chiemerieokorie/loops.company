import { defaultStatsInline } from "./data";

export interface StatsInlineStat {
	label: string;
	value: string;
}

export interface StatsInlineProps {
	description?: string;
	stats?: StatsInlineStat[];
}

export function StatsInline({
	stats = defaultStatsInline,
	description = "Our platform continues to grow with developers and businesses using productivity.",
}: StatsInlineProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<h2 className="sr-only">Astor in stats</h2>
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
					{stats.map((stat) => (
						<div className="space-y-0.5 md:text-center" key={stat.label}>
							<div className="font-bold text-4xl text-primary">
								{stat.value}
							</div>
							<p className="text-muted-foreground">{stat.label}</p>
						</div>
					))}
					<div className="col-span-2 border-t pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-12">
						<p className="text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
