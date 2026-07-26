import {
	BeaconLogo,
	LemonSqueezyLogo,
	NuxtLogo,
	OpenAILogo,
	StripeLogo,
	SupabaseLogo,
	TailusLogo,
} from "./brand-logos";

export interface LogoCloudMarqueeProps {
	description?: string;
	heading?: string;
}

export function LogoCloudMarquee({
	heading = "You're in good company",
	description = "Astor is trusted by innovative companies worldwide to deliver exceptional products and services that drive business growth.",
}: LogoCloudMarqueeProps) {
	return (
		<section className="overflow-hidden py-16">
			<div className="group relative m-auto max-w-5xl px-6">
				<div className="text-center">
					<div className="mx-auto max-w-xl text-balance">
						<h2 className="font-semibold text-4xl">{heading}</h2>
						<p className="mt-4 text-lg text-muted-foreground">{description}</p>
					</div>
					<div className="mask-x-from-90% relative py-12">
						<div
							aria-hidden="true"
							className="mask-r-from-50% absolute inset-y-0 left-0 z-10 w-16 backdrop-grayscale-200"
						/>
						<div
							aria-hidden="true"
							className="mask-l-from-50% absolute inset-y-0 right-0 z-10 w-16 backdrop-grayscale-200"
						/>
						<div className="items-center overflow-hidden *:gap-12! md:*:gap-24! lg:*:gap-32!">
							<div
								className="flex w-max"
								style={{
									gap: "16px",
									flexDirection: "row",
									transform: "translateX(-50.72px)",
								}}
							>
								{/* Nuxt */}
								<NuxtLogo height={24} />
								{/* Beacon */}
								<BeaconLogo height={24} />
								{/* Lemon Squeezy */}
								<LemonSqueezyLogo height={32} />
								{/* Stripe */}
								<StripeLogo height={24} />
								{/* OpenAI */}
								<OpenAILogo height={24} />
								{/* Tailus */}
								<TailusLogo height={24} />
								{/* Supabase */}
								<SupabaseLogo height={24} id="lcm-supa" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
