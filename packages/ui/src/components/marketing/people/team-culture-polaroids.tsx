import { defaultPhotos, defaultPolaroidsStats } from "./data";
import type { CulturePhoto, TeamStat } from "./types";

export type { CulturePhoto };

export interface TeamCulturePolaroidsProps {
	description?: string;
	photos?: CulturePhoto[];
	stats?: TeamStat[];
	title?: string;
}

export function TeamCulturePolaroids({
	title = "We build together",
	description = "Our team thrives on collaboration, creativity, and a shared commitment to excellence. Every day brings new challenges and opportunities to grow.",
	stats = defaultPolaroidsStats,
	photos = defaultPhotos,
}: TeamCulturePolaroidsProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-6xl px-6">
				<div>
					<div className="mx-auto mb-16 max-w-xl md:mb-24">
						<h2 className="text-balance font-semibold text-4xl text-foreground">
							{title}
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">{description}</p>
						<div className="mt-8 grid grid-cols-3 gap-4 *:space-y-1">
							{stats.map((stat) => (
								<div key={stat.label}>
									<p className="font-medium text-2xl text-foreground">
										{stat.value}
									</p>
									<p className="text-muted-foreground text-sm">{stat.label}</p>
								</div>
							))}
						</div>
					</div>
					<div className="relative grid grid-cols-2 gap-3 md:grid-cols-4">
						{photos.map((photo) => (
							<div className={photo.rotation} key={photo.caption}>
								<div className="relative aspect-square overflow-hidden rounded-2xl shadow-black/5 shadow-xl before:absolute before:inset-0 before:z-1 before:rounded-2xl before:border before:border-foreground/10">
									<img
										alt={photo.alt}
										className="size-full object-cover grayscale"
										decoding="async"
										height="600"
										loading="lazy"
										src={photo.src}
										style={{ color: "transparent" }}
										width="600"
									/>
								</div>
								<p className="mt-2 px-2 text-muted-foreground text-xs">
									{photo.caption}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
