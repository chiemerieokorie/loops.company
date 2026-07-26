import {
	BeaconLogo,
	CloudflareLogo,
	NuxtLogo,
	OpenAILogo,
	SpotifyLogo,
	StripeLogo,
	SupabaseLogo,
	VercelLogo,
} from "./brand-logos";

export interface LogoGridInsetProps {
	description?: string;
}

export function LogoGridInset({
	description = "Astor is trusted by leading teams from Generative AI Companies, Hosting Providers, Payments Providers, Streaming Providers",
}: LogoGridInsetProps) {
	return (
		<section className="relative py-24">
			<div className="relative text-center">
				<div className="px-6">
					<p className="mx-auto max-w-xl text-balance text-muted-foreground md:text-lg">
						{description}
					</p>
				</div>
				<div className="mt-6 border-foreground/10 border-y">
					<div className="mx-auto max-w-5xl px-2">
						<div className="mx-px grid grid-cols-2 items-center justify-center gap-px bg-foreground/10 *:h-20 *:bg-background/95 **:fill-foreground *:transition-colors *:duration-200 *:hover:bg-background/70 sm:grid-cols-4">
							{/* Nuxt */}
							<div className="flex items-center justify-center rounded px-6">
								<NuxtLogo height={20} />
							</div>
							{/* Spotify */}
							<div className="flex items-center justify-center rounded px-6">
								<SpotifyLogo height={26} />
							</div>
							{/* Supabase */}
							<div className="flex items-center justify-center rounded px-6">
								<SupabaseLogo height={24} id="lgi-supa" />
							</div>
							{/* Beacon */}
							<div className="flex items-center justify-center rounded px-6">
								<BeaconLogo height={20} />
							</div>
							{/* Vercel */}
							<div className="flex items-center justify-center rounded px-6">
								<VercelLogo height={20} />
							</div>
							{/* Stripe */}
							<div className="flex items-center justify-center rounded px-6">
								<StripeLogo height={26} />
							</div>
							{/* OpenAI */}
							<div className="flex items-center justify-center rounded px-6">
								<OpenAILogo height={24} />
							</div>
							{/* Cloudflare */}
							<div className="flex items-center justify-center rounded px-6">
								<CloudflareLogo height={20} />
							</div>
						</div>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 mx-auto flex max-w-5xl justify-between border-foreground/10 border-x"
				>
					<div className="relative h-full w-2 border-foreground/10 border-r" />
					<div className="relative h-full w-2 border-foreground/10 border-l" />
				</div>
			</div>
		</section>
	);
}
