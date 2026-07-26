export interface TextWithMediaItem {
	description: string;
	imageAlt: string;
	imageSrc: string;
	label: string;
}

export interface TextWithMediaProps {
	items?: TextWithMediaItem[];
}

const defaultItems: TextWithMediaItem[] = [
	{
		label: "Visual Intelligence",
		imageSrc:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/time_djv8te.webp",
		imageAlt: "Visual intelligence representation",
		description:
			"Our advanced visual processing system can analyze and interpret complex images, enabling applications from medical diagnostics to autonomous navigation and content moderation.",
	},
	{
		label: "Multimodal Learning",
		imageSrc:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/dots-2_kmiukp.webp",
		imageAlt: "Multimodal learning visualization",
		description:
			"Our platform integrates text, image, and audio processing into a unified framework, creating more intuitive and powerful AI systems that understand the world more like humans do.",
	},
];

export function TextWithMedia({ items = defaultItems }: TextWithMediaProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-4xl px-6">
				<div className="grid gap-12 md:grid-cols-2">
					{items.map((item) => (
						<div
							className="row-span-3 grid grid-rows-subgrid gap-6"
							key={item.label}
						>
							<h3 className="text-muted-foreground">{item.label}</h3>
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
							<p className="text-muted-foreground">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
