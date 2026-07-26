export interface TextArticleGridItem {
	description: string;
	imageAlt: string;
	imageFit?: "cover" | "contain";
	imageSrc: string;
	label: string;
	linkHref: string;
	linkLabel?: string;
}

export interface TextArticleGridProps {
	headingHighlight?: string;
	headingMuted?: string;
	items?: TextArticleGridItem[];
}

const defaultItems: TextArticleGridItem[] = [
	{
		imageSrc:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/time_djv8te.webp",
		imageAlt: "Visual intelligence representation",
		label: "Not a Bad Story",
		description:
			"Our platform integrates text, image, and audio processing into a unified framework.",
		linkHref: "#",
		imageFit: "cover",
	},
	{
		imageSrc:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/dots-2_kmiukp.webp",
		imageAlt: "Multimodal learning visualization",
		label: "Made 3M in 2 years",
		description:
			"Our platform integrates text, image, and audio processing into a unified framework.",
		linkHref: "#",
		imageFit: "cover",
	},
	{
		imageSrc:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/dna_lp2xey.webp",
		imageAlt: "Multimodal learning visualization",
		label: "Raised 10M",
		description:
			"Our platform integrates text, image, and audio processing into a unified framework.",
		linkHref: "#",
		imageFit: "cover",
	},
];

export function TextArticleGrid({
	headingMuted = "Building the next generation of",
	headingHighlight = "AI-powered Marketing Tools",
	items = defaultItems,
}: TextArticleGridProps) {
	return (
		<section className="@container bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<h2 className="text-balance font-semibold text-4xl text-muted-foreground md:w-2/3">
					{headingMuted}{" "}
					<strong className="font-semibold text-foreground">
						{headingHighlight}
					</strong>
				</h2>
				<div className="mt-12 grid @3xl:grid-cols-3 @xl:grid-cols-2 gap-6">
					{items.map((item) => (
						<div
							className="row-span-4 grid grid-rows-subgrid gap-4"
							key={item.label}
						>
							<div
								style={{
									position: "relative",
									width: "100%",
									paddingBottom: "100%",
								}}
							>
								<div
									className="rounded-xl border border-transparent bg-white p-6 shadow ring-1 ring-border"
									style={{
										position: "absolute",
										top: 0,
										right: 0,
										bottom: 0,
										left: 0,
									}}
								>
									<img
										alt={item.imageAlt}
										className="aspect-square size-full object-cover"
										decoding="async"
										height="900"
										loading="lazy"
										src={item.imageSrc}
										width="900"
									/>
								</div>
							</div>
							<h3 className="text-muted-foreground text-sm">{item.label}</h3>
							<p className="text-muted-foreground">{item.description}</p>
							<a
								className="flex items-center gap-1 text-primary text-sm transition-colors duration-200 hover:text-foreground"
								href={item.linkHref}
							>
								{item.linkLabel ?? "Read more"}
								<svg
									aria-hidden="true"
									className="lucide lucide-chevron-right size-3.5 translate-y-px"
									fill="none"
									height="24"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									width="24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="m9 18 6-6-6-6" />
								</svg>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
