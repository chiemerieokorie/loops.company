export interface SubheroEditorialProps {
	bodyLeft?: string;
	bodyLeftHighlight?: string;
	bodyRight?: string;
	bodyRightHighlight?: string;
	imageAlt?: string;
	imageSrc?: string;
	title?: string;
}

export function SubheroEditorial({
	title = "Building the next generation of AI-powered Marketing Tools",
	imageSrc = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/flower_a5umwb.webp",
	imageAlt = "flower background",
	bodyLeftHighlight = "analyze and interpret complex images",
	bodyLeft = "Our advanced visual processing system can {{highlight}}, enabling applications from medical diagnostics to autonomous navigation and content moderation.",
	bodyRightHighlight = "integrates text, image, and audio processing",
	bodyRight = "Our platform {{highlight}} into a unified framework, creating more intuitive and powerful AI systems that understand the world more like humans do.",
}: SubheroEditorialProps) {
	const [bodyLeftBefore, bodyLeftAfter] = bodyLeft.split("{{highlight}}");
	const [bodyRightBefore, bodyRightAfter] = bodyRight.split("{{highlight}}");

	return (
		<section>
			<div className="pt-56 pb-56 lg:pt-96">
				<div className="mx-auto mb-8 max-w-6xl px-6 lg:mb-12 lg:px-12">
					<h1 className="text-balance font-semibold text-4xl md:text-5xl">
						{title}
					</h1>
				</div>
				<div
					className="perspective-near mx-auto aspect-[3/2] max-w-7xl overflow-hidden md:aspect-video"
					style={{ clipPath: "inset(5% 5% 5% 5% round 0.75rem)" }}
				>
					<img
						alt={imageAlt}
						className="origin-top"
						height="1578"
						src={imageSrc}
						style={{ transform: "scale(1.4)" }}
						width="2270"
					/>
				</div>
				<div className="mx-auto mt-8 max-w-6xl px-6 lg:mt-12 lg:px-12">
					<div className="grid gap-6 md:grid-cols-2 md:gap-12">
						<p className="text-muted-foreground">
							{bodyLeftBefore}
							<strong className="font-semibold text-foreground">
								{bodyLeftHighlight}
							</strong>
							{bodyLeftAfter}
						</p>
						<p className="text-muted-foreground">
							{bodyRightBefore}
							<strong className="font-semibold text-foreground">
								{bodyRightHighlight}
							</strong>
							{bodyRightAfter}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
