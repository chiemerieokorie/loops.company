export interface SubheroImageSplitProps {
	description?: string;
	imageAlt?: string;
	imageSrc?: string;
	title?: string;
}

export function SubheroImageSplit({
	title = "Building the roots for your Startup growth",
	description = "Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best web experiences.",
	imageSrc = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/3d_gsnqq2.webp",
	imageAlt = "building",
}: SubheroImageSplitProps) {
	return (
		<section className="bg-background py-24 md:pt-32 lg:pt-44">
			<div className="mx-auto mb-12 max-w-5xl px-6">
				<div className="relative aspect-[63/30] overflow-hidden">
					<img
						alt={imageAlt}
						className="size-full object-cover"
						decoding="async"
						height="1401"
						loading="lazy"
						src={imageSrc}
						style={{ color: "transparent" }}
						width="3000"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 top-0 left-0 z-0 size-40 mix-blend-overlay blur-2xl duration-200 will-change-transform md:size-72"
						style={{ transform: "translate(0px, 0px)" }}
					>
						<div className="absolute inset-0 -translate-x-[150%] -translate-y-full rounded-full bg-linear-to-r from-indigo-400 via-emerald-400 to-rose-500" />
					</div>
				</div>
				<div className="relative mt-6 grid items-end gap-6 md:-mt-12 md:grid-cols-2">
					<h1 className="text-balance font-semibold text-4xl sm:text-5xl lg:text-6xl">
						{title}
					</h1>
					<p className="text-balance text-lg text-muted-foreground">
						{description}
					</p>
				</div>
			</div>
		</section>
	);
}
