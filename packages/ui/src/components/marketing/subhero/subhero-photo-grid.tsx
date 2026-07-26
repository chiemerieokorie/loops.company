export interface SubheroPhotoGridProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	images?: Array<{ src: string; alt: string }>;
	title?: string;
	titleHighlight?: string;
}

const defaultImages = [
	{
		src: "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/work3_n5uspm.webp",
		alt: "Astor hero section work 3",
	},
	{
		src: "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/work2_eoxbvk.webp",
		alt: "Astor hero section work 2",
	},
	{
		src: "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/work1_e1gkt8.webp",
		alt: "Astor hero section work 1",
	},
];

export function SubheroPhotoGrid({
	titleHighlight = "Join Us",
	title = "in shaping the next Gen of CRM",
	description = "Empowering businesses with cutting-edge technology to streamline operations and drive success.",
	ctaLabel = "See open roles",
	ctaHref = "#",
	images = defaultImages,
}: SubheroPhotoGridProps) {
	const [img1, img2, img3] = images;

	return (
		<section>
			<div className="py-24 md:py-32">
				<div className="mx-auto mb-8 max-w-5xl px-6">
					<div className="grid grid-cols-6 gap-4 sm:grid-cols-8">
						<div className="col-span-6 max-md:pb-6 sm:col-span-5 md:col-span-4 md:pt-6">
							<h1 className="text-balance font-semibold text-4xl md:text-6xl">
								<span className="text-primary">{titleHighlight}</span> {title}
							</h1>
							<p className="mt-4 mb-6 text-balance text-lg text-muted-foreground">
								{description}
							</p>
							<a
								className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-3 font-medium text-primary-foreground text-shadow-sm text-xs shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
								href={ctaHref}
							>
								{ctaLabel}
							</a>
						</div>
						{img1 && (
							<div className="col-span-3 flex items-end sm:col-span-2 sm:col-start-6">
								<div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5 before:bg-primary/10">
									<img
										alt={img1.alt}
										className="size-full object-cover"
										decoding="async"
										height="1648"
										loading="lazy"
										src={img1.src}
										style={{ color: "transparent" }}
										width="927"
									/>
								</div>
							</div>
						)}
						{img2 && (
							<div className="col-span-3 max-md:flex max-md:items-end sm:col-start-3">
								<div className="relative mt-auto aspect-square h-fit overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5 before:bg-primary/5">
									<img
										alt={img2.alt}
										className="size-full object-cover"
										decoding="async"
										height="1868"
										loading="lazy"
										src={img2.src}
										style={{ color: "transparent" }}
										width="3047"
									/>
								</div>
							</div>
						)}
						{img3 && (
							<div className="relative col-span-4 aspect-video overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5 before:bg-primary/5 max-md:col-start-3 md:col-span-3">
								<img
									alt={img3.alt}
									className="size-full object-cover"
									decoding="async"
									height="1560"
									loading="lazy"
									src={img3.src}
									style={{ color: "transparent" }}
									width="2340"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
