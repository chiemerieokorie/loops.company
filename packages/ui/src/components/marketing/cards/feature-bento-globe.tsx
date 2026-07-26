import { GlobeIllustration } from "./globe-illustration";

export interface FeatureBentoGlobeProps {
	feature2Description?: string;
	feature2Title?: string;
	feature3Description?: string;
	feature3Title?: string;
	feature4Description?: string;
	feature4Title?: string;
	feature5Description?: string;
	feature5Title?: string;
	globeDescription?: string;
	globeTitle?: string;
}

export function FeatureBentoGlobe({
	globeTitle = "Advanced Data Visualization",
	globeDescription = "Visualize complex datasets with interactive maps, charts, and graphs that reveal patterns and insights.",
	feature2Title = "Smart Lighting Control",
	feature2Description = "Automate your home lighting with customizable schedules.",
	feature3Title = "Collaborative Analysis",
	feature3Description = "Add comments, share insights, and work together.",
	feature4Title = "Smart Lighting Control",
	feature4Description = "Automate your home lighting with customizable schedules.",
	feature5Title = "Collaborative Analysis",
	feature5Description = "Add comments, share insights, and work together.",
}: FeatureBentoGlobeProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @2xl:grid-cols-2 @4xl:grid-cols-3 @2xl:grid-rows-2 gap-3">
					{/* Left column spanning 2 rows: Globe map + lower card */}
					<div className="@2xl:row-span-2 space-y-3">
						{/* Globe dot-map card */}
						<div
							className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
							data-slot="card"
						>
							<div>
								<h3 className="font-semibold text-foreground">{globeTitle}</h3>
								<p className="mt-3 text-muted-foreground">{globeDescription}</p>
							</div>
							{/* Globe SVG with avatar pins */}
							<div
								aria-hidden="true"
								className="relative mt-8 flex justify-center"
							>
								<div className="relative">
									{/* Dot-map globe placeholder */}
									<GlobeIllustration className="w-full max-w-[280px] text-foreground/20" />
									{/* Avatar pins */}
									{[
										{
											alt: "Glodie",
											src: "https://avatars.githubusercontent.com/u/99137927?v=4",
											style: { top: "20%", left: "30%" },
										},
										{
											alt: "Theo",
											src: "https://avatars.githubusercontent.com/u/68236786?v=4",
											style: { top: "50%", left: "60%" },
										},
										{
											alt: "Shadcn",
											src: "https://avatars.githubusercontent.com/u/124599?v=4",
											style: { top: "65%", left: "25%" },
										},
									].map((pin) => (
										<div
											className="absolute flex size-7 items-center justify-center rounded-full border-2 border-background bg-background shadow-md"
											key={pin.alt}
											style={pin.style}
										>
											<img
												alt={pin.alt}
												className="size-full rounded-full object-cover"
												decoding="async"
												height="28"
												loading="lazy"
												src={pin.src}
												width="28"
											/>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Secondary card below globe */}
						<div
							className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
							data-slot="card"
						>
							<h3 className="font-semibold text-foreground">{feature2Title}</h3>
							<p className="mt-3 text-muted-foreground">
								{feature2Description}
							</p>
						</div>
					</div>

					{/* Top-right cell 1 */}
					<div
						className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<h3 className="font-semibold text-foreground">{feature3Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature3Description}</p>
					</div>

					{/* Top-right cell 2 */}
					<div
						className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<h3 className="font-semibold text-foreground">{feature4Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature4Description}</p>
					</div>

					{/* Bottom-right cell 1 */}
					<div
						className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<h3 className="font-semibold text-foreground">{feature5Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature5Description}</p>
					</div>

					{/* Bottom-right cell 2 */}
					<div
						className="overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<h3 className="font-semibold text-foreground">{feature5Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature5Description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
