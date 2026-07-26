import Image from "next/image";
import { defaultStatsMap } from "./data";

export interface StatsMapStat {
	description: string;
	label: string;
	unit?: string;
	value: string;
}

export interface StatsMapProps {
	mapSrc?: string;
	stats?: StatsMapStat[];
}

export function StatsMap({ mapSrc, stats = defaultStatsMap }: StatsMapProps) {
	return (
		<section className="@container bg-background py-12 md:py-20">
			<div className="mx-auto max-w-5xl px-6">
				{mapSrc && (
					<div className="mask-y-from-75% mx-auto max-w-4xl">
						<Image
							alt="map illustration"
							className="h-auto w-full"
							height={400}
							src={mapSrc}
							width={800}
						/>
					</div>
				)}
				<div className="relative mx-auto max-w-3xl">
					<span className="pointer-events-none absolute inset-y-4 left-1/3 @2xl:block hidden w-px bg-border" />
					<span className="pointer-events-none absolute inset-y-4 left-2/3 @2xl:block hidden w-px bg-border" />
					<div className="@max-2xl:mx-auto grid @max-2xl:max-w-2xs @2xl:grid-cols-3 @max-2xl:gap-6 *:px-6 **:text-center">
						{stats.map((stat) => (
							<div className="space-y-4 *:block" key={stat.label}>
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
