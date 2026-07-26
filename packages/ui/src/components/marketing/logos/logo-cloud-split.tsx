import {
	BeaconLogo,
	NuxtLogo,
	SpotifyLogo,
	StripeLogo,
	SupabaseLogo,
	TailwindLogo,
	VercelLogo,
} from "./brand-logos";

export interface LogoCloudSplitProps {
	ctaHref?: string;
	ctaText?: string;
	heading?: string;
}

export function LogoCloudSplit({
	heading = "Trusted by fast-growing companies around the world",
	ctaText = "Read case studies",
	ctaHref = "#",
}: LogoCloudSplitProps) {
	return (
		<section className="relative py-24">
			<div className="mx-auto max-w-6xl px-6 lg:px-12">
				<div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-6">
					<div className="space-y-4 max-lg:text-center">
						<p className="w-fit max-w-sm text-balance text-foreground text-xl max-lg:mx-auto">
							{heading}
						</p>
						<a className="text-primary text-sm underline" href={ctaHref}>
							{ctaText}
						</a>
					</div>
					<div className="grid grid-cols-3 items-center gap-y-12 **:fill-foreground sm:grid-cols-4">
						<div className="flex h-full items-center justify-center px-2">
							<NuxtLogo height={16} />
						</div>
						<div className="flex items-center justify-center px-2">
							<SpotifyLogo height={22} />
						</div>
						<div className="flex items-center justify-center px-2">
							<SupabaseLogo height={20} id="lcs-supa" />
						</div>
						<div className="flex items-center justify-center px-2">
							<BeaconLogo height={16} />
						</div>
						<div className="flex items-center justify-center px-2">
							<VercelLogo height={16} />
						</div>
						<div className="flex items-center justify-center px-2">
							<StripeLogo height={20} />
						</div>
						<div className="flex items-center justify-center px-2">
							<TailwindLogo height={20} />
						</div>
						<div className="flex items-center justify-center px-2">
							<StripeLogo height={20} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
