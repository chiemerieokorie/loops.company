import {
	AmazonLogo,
	BeaconLogo,
	LemonSqueezyLogo,
	NuxtLogo,
	OpenAILogo,
	StripeLogo,
	SupabaseLogo,
	TailusLogo,
} from "./brand-logos";

export function LogoGridDivided() {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid grid-cols-3 gap-x-6 divide-dashed *:items-center *:nth-4:border-r-0 *:px-4 *:py-6 sm:grid-cols-4 sm:divide-x sm:border-x">
					{/* Amazon */}
					<div className="flex">
						<AmazonLogo height={28} />
					</div>
					{/* Lemon Squeezy */}
					<div className="flex">
						<LemonSqueezyLogo height={32} />
					</div>
					{/* Stripe */}
					<div className="flex">
						<StripeLogo height={24} />
					</div>
					{/* Nuxt */}
					<div className="flex">
						<NuxtLogo height={22} />
					</div>
					{/* Tailus */}
					<div className="flex">
						<TailusLogo height={20} />
					</div>
					{/* Supabase */}
					<div className="flex">
						<SupabaseLogo height={24} id="lgd-supa" />
					</div>
					{/* OpenAI */}
					<div className="flex">
						<OpenAILogo height={24} />
					</div>
					{/* Beacon */}
					<div className="flex">
						<BeaconLogo height={20} />
					</div>
				</div>
			</div>
		</section>
	);
}
