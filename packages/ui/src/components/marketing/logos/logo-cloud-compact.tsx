import {
	BeaconLogo,
	NuxtLogo,
	SpotifyLogo,
	StripeLogo,
	SupabaseLogo,
	VercelLogo,
} from "./brand-logos";

export function LogoCloudCompact() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-sm text-center">
				<div>
					<p className="mx-auto w-fit max-w-56 text-balance text-foreground text-sm">
						Trusted by fast-growing companies around the world
					</p>
				</div>
				<div className="mt-4 grid grid-cols-2 items-center justify-center *:h-16 **:fill-foreground sm:grid-cols-3">
					{/* Nuxt */}
					<div className="flex h-full items-center justify-center px-2">
						<NuxtLogo height={16} />
					</div>
					{/* Spotify */}
					<div className="flex items-center justify-center px-2">
						<SpotifyLogo height={22} />
					</div>
					{/* Stripe */}
					<div className="flex items-center justify-center px-2">
						<StripeLogo height={20} />
					</div>
					{/* Beacon */}
					<div className="flex items-center justify-center px-2">
						<BeaconLogo height={16} />
					</div>
					{/* Vercel */}
					<div className="flex items-center justify-center px-2">
						<VercelLogo height={16} />
					</div>
					{/* Supabase */}
					<div className="flex items-center justify-center px-2">
						<SupabaseLogo height={20} id="lcc2-supa" />
					</div>
				</div>
			</div>
		</section>
	);
}
