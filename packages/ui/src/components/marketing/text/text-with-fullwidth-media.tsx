export interface TextWithFullwidthMediaProps {
	bodyColumns?: string[];
	headingHighlight?: string;
	headingMuted?: string;
	imageAlt?: string;
	imageSrc?: string;
}

export function TextWithFullwidthMedia({
	headingMuted = "Building the next generation of",
	headingHighlight = "AI-powered Marketing Tools",
	imageSrc = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/dots-pattern_yfnqcy.jpg",
	imageAlt = "Visual intelligence representation",
	bodyColumns,
}: TextWithFullwidthMediaProps) {
	const defaultColumns = [
		<>
			Our advanced visual processing system can{" "}
			<strong className="font-semibold text-foreground">
				analyze and interpret complex images
			</strong>
			, enabling applications from medical diagnostics to autonomous navigation
			and content moderation.
		</>,
		<>
			Our platform{" "}
			<strong className="font-semibold text-foreground">
				integrates text, image, and audio processing
			</strong>{" "}
			into a unified framework, creating more intuitive and powerful AI systems
			that understand the world more like humans do.
		</>,
	];

	return (
		<section className="bg-background py-16 md:py-24">
			<div className="mx-auto max-w-4xl space-y-12 px-6">
				<h2 className="text-balance font-semibold text-4xl text-muted-foreground md:w-2/3">
					{headingMuted}{" "}
					<strong className="font-semibold text-foreground">
						{headingHighlight}
					</strong>
				</h2>
				<div className="aspect-video rounded-xl border border-transparent bg-white py-6 shadow ring-1 ring-border">
					<img
						alt={imageAlt}
						className="h-full w-full object-cover"
						decoding="async"
						height="4500"
						loading="lazy"
						src={imageSrc}
						width="6394"
					/>
				</div>
				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					{bodyColumns
						? bodyColumns.map((col, i) => (
								<p className="text-muted-foreground" key={i}>
									{col}
								</p>
							))
						: defaultColumns.map((col, i) => (
								<p className="text-muted-foreground" key={i}>
									{col}
								</p>
							))}
				</div>
			</div>
		</section>
	);
}
