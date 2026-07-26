import {
	LemonSqueezyLogo,
	NuxtLogo,
	OpenAILogo,
	SpotifyLogo,
	TailusLogo,
} from "./brand-logos";

export interface LogoCloudProps {
	animated?: boolean;
	description?: string;
	heading?: string;
}

export function LogoCloud({
	heading = "You're in good company",
	description = "Astor is trusted by leading teams from Generative AI Companies, Hosting Providers, Payments Providers, Streaming Providers",
	animated = false,
}: LogoCloudProps) {
	return (
		<section className="bg-background py-16">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto mb-12 max-w-xl text-balance text-center md:mb-16">
					<h2 className="font-semibold text-4xl">{heading}</h2>
					{animated ? (
						<p className="mt-4 text-lg text-muted-foreground">
							Trusted by leading teams from{" "}
							<span className="relative text-foreground transition-colors duration-200 before:absolute before:inset-x-0 not-last:before:right-2.5 before:-bottom-0.5 before:h-px before:rounded before:bg-foreground/10 after:absolute after:inset-x-0 not-last:after:right-2.5 after:-bottom-0.5 after:h-px after:origin-left after:rounded after:bg-linear-to-r after:from-emerald-500 after:to-indigo-500 after:duration-3000 after:ease-in-out">
								Generative AI Companies,{" "}
							</span>
							<span className="relative transition-colors duration-200">
								Hosting Providers,{" "}
							</span>
							<span className="relative transition-colors duration-200">
								Payments Providers,{" "}
							</span>
							<span className="relative transition-colors duration-200">
								Streaming Providers
							</span>
						</p>
					) : (
						<p className="mt-4 text-lg text-muted-foreground">{description}</p>
					)}
				</div>
				<div className="perspective-dramatic mx-auto grid max-w-5xl grid-cols-3 items-center gap-8 md:h-10 md:grid-cols-5">
					<div className="flex items-center justify-center **:fill-foreground!">
						<OpenAILogo height={24} />
					</div>
					<div className="flex items-center justify-center **:fill-foreground!">
						<TailusLogo height={20} />
					</div>
					<div className="flex items-center justify-center **:fill-foreground!">
						<LemonSqueezyLogo height={32} />
					</div>
					<div className="flex items-center justify-center **:fill-foreground!">
						<NuxtLogo height={22} />
					</div>
					<div className="flex items-center justify-center **:fill-foreground!">
						<SpotifyLogo height={24} />
					</div>
				</div>
			</div>
		</section>
	);
}
