export interface SubheroWithImageProps {
	description?: string;
	imageAlt?: string;
	imageSrc?: string;
	title?: string;
}

export function SubheroWithImage({
	title = "Pioneering the Medical AI Future",
	description = "With Astor's personal AI, get your projects to the finish line faster and with context.",
	imageSrc = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/healthcare_ttc35b.jpg",
	imageAlt = "hero image",
}: SubheroWithImageProps) {
	return (
		<section data-theme="Astor">
			<div className="bg-white pt-44">
				<div className="mx-auto mb-12 max-w-5xl px-6">
					<div className="mx-auto max-w-3xl">
						<h1 className="text-balance font-semibold text-5xl sm:text-7xl">
							{title}
						</h1>
						<p className="mt-6 ml-auto max-w-md text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>
				</div>
				<div className="relative aspect-63/36 overflow-hidden 2xl:mx-auto 2xl:max-w-7xl">
					<img
						alt={imageAlt}
						className="size-full object-cover"
						decoding="async"
						height="1121"
						loading="lazy"
						src={imageSrc}
						width="2000"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 top-0 left-0 z-0 size-40 mix-blend-overlay blur-2xl will-change-transform md:size-72"
						style={{ transform: "translate(0px, 0px)" }}
					>
						<div className="absolute inset-0 -translate-x-1/2 -translate-y-4/5 rounded-full bg-linear-to-r from-indigo-400 via-emerald-400 to-rose-500" />
					</div>
				</div>
			</div>
		</section>
	);
}
