import { defaultStatsSplit } from "./data";

export interface StatsSplitStat {
	description: string;
	label: string;
	value: string;
}

export interface StatsSplitProps {
	description?: string;
	eyebrow?: string;
	heading?: string;
	headingHighlight?: string;
	stats?: StatsSplitStat[];
}

export function StatsSplit({
	heading = "Building the next generation of",
	headingHighlight = "AI-powered Marketing Tools",
	description = "Our advanced visual processing system can analyze and interpret complex images, enabling applications.",
	stats = defaultStatsSplit,
}: StatsSplitProps) {
	return (
		<section className="bg-background py-12 md:py-20">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-12 sm:grid-cols-2">
					<div className="space-y-6">
						<h2 className="text-balance font-semibold text-4xl text-muted-foreground md:w-2/3">
							{heading}{" "}
							<strong className="font-semibold text-foreground">
								{headingHighlight}
							</strong>
						</h2>
						<p className="text-muted-foreground">{description}</p>
					</div>
					<div className="space-y-6 border-l sm:mx-auto sm:max-w-xs">
						{stats.map((stat) => (
							<div className="space-y-4 *:block" key={stat.value}>
								<span className="-ml-px border-primary border-l pl-6 font-semibold text-3xl lg:pl-8">
									{stat.value}
								</span>
								<p className="text-balance pl-6 text-muted-foreground text-sm lg:pl-8">
									<strong className="font-medium text-foreground">
										{stat.label}
									</strong>{" "}
									{stat.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
