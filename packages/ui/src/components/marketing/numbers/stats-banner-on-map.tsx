import Image from "next/image";
import { defaultStatsBannerOnMap } from "./data";

export interface StatsBannerOnMapStat {
	label: string;
	value: string;
}

export interface StatsBannerOnMapProps {
	mapSrc?: string;
	stats?: StatsBannerOnMapStat[];
}

export function StatsBannerOnMap({
	mapSrc,
	stats = defaultStatsBannerOnMap,
}: StatsBannerOnMapProps) {
	return (
		<section className="@container bg-background py-16 md:py-24">
			<div className="relative mx-auto max-w-5xl px-6">
				{mapSrc && (
					<div className="@max-md:mask-t-from-75% @max-md:scale-200">
						<Image
							alt="dotted map illustration"
							className="h-auto w-full"
							height={400}
							src={mapSrc}
							width={800}
						/>
					</div>
				)}
				<div className="@xl:absolute relative @xl:inset-x-6 @xl:bottom-0">
					<div className="grid @xl:grid-cols-3 grid-cols-2 divide-x rounded-xl bg-card shadow-black/6.5 shadow-lg ring-1 ring-border *:p-6 **:text-center *:hover:bg-foreground/2 sm:*:p-8">
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
