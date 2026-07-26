export interface TextCenteredProps {
	body?: string;
	bodyHighlight?: string;
	heading?: string;
	imageAlt?: string;
	imageSrc?: string;
}

export function TextCentered({
	imageSrc = "https://raw.githubusercontent.com/Astor/assets/refs/heads/main/ai-human-2_uo6bxc.jpg",
	imageAlt = "AI and human illustration",
	heading = "Unified Ecosystem for Modern Development",
	body = "Our platform integrates cutting-edge models with developer-friendly",
	bodyHighlight = "APIs and business solutions",
}: TextCenteredProps) {
	return (
		<section className="bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mask-radial-to-65% mx-auto aspect-3/2 max-w-2xl">
					<img
						alt={imageAlt}
						className="rounded-(--radius)"
						decoding="async"
						height="3334"
						loading="lazy"
						src={imageSrc}
						width="5001"
					/>
				</div>
				<div className="mx-auto max-w-xl space-y-6 text-center">
					<h2 className="text-balance font-medium text-3xl lg:text-4xl">
						{heading}
					</h2>
					<p className="text-balance text-lg text-muted-foreground">
						{body}{" "}
						<strong className="font-semibold text-foreground">
							{bodyHighlight}
						</strong>{" "}
						that drive innovation across industries and use cases.
					</p>
				</div>
			</div>
		</section>
	);
}
