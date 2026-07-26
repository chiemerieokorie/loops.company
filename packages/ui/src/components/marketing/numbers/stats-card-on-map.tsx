import Image from "next/image";
import { defaultStatsCardOnMap } from "./data";

export interface StatsCardOnMapStat {
	description: string;
	label: string;
	unit?: string;
	value: string;
}

export interface StatsCardOnMapProps {
	description?: string;
	descriptionHighlight?: string;
	heading?: string;
	headingHighlight?: string;
	mapSrc?: string;
	stats?: StatsCardOnMapStat[];
}

export function StatsCardOnMap({
	mapSrc,
	heading = "Building the next generation of",
	headingHighlight = "AI-powered Marketing Tools",
	description = "Our advanced visual processing system can",
	descriptionHighlight = "analyze and interpret complex images",
	stats = defaultStatsCardOnMap,
}: StatsCardOnMapProps) {
	return (
		<section className="@container relative bg-background py-12 md:py-20">
			{mapSrc && (
				<div className="mask-radial-to-75% absolute inset-0 max-md:hidden">
					<Image
						alt="map illustration"
						className="object-cover"
						fill
						src={mapSrc}
					/>
				</div>
			)}
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative rounded-xl bg-card p-6 shadow-black/6.5 shadow-xl ring-1 ring-border sm:p-10 md:max-w-3/5 lg:max-w-1/2">
					<div className="mb-8 space-y-4">
						<h2 className="text-balance font-semibold text-3xl text-muted-foreground">
							{heading}{" "}
							<strong className="font-semibold text-foreground">
								{headingHighlight}
							</strong>
						</h2>
						<p className="text-muted-foreground">
							{description}{" "}
							<strong className="font-semibold text-foreground">
								{descriptionHighlight}
							</strong>
							, enabling applications.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-1 *:rounded-md *:bg-muted/50 *:p-4 **:text-center">
						{stats.map((stat, i) => (
							<div className="space-y-3 *:block" key={`${stat.label}-${i}`}>
								<span className="font-semibold text-3xl">
									{stat.value}{" "}
									{stat.unit && (
										<span className="text-lg text-muted-foreground">
											{stat.unit}
										</span>
									)}
								</span>
								<p className="text-balance text-muted-foreground text-sm">
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
