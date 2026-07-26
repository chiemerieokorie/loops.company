import { ChevronRight } from "lucide-react";
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

export interface LogoCloudCtaProps {
	ctaHref?: string;
	ctaText?: string;
	heading?: string;
}

export function LogoCloudCta({
	heading = "Trusted by leading teams worldwide",
	ctaText = "Meet our Customers",
	ctaHref = "#",
}: LogoCloudCtaProps) {
	return (
		<section className="py-16">
			<div className="relative m-auto max-w-5xl px-6 text-center">
				<h2 className="text-center font-medium text-xl">{heading}</h2>
				<div className="mx-auto my-12 grid max-w-3xl grid-cols-3 gap-x-6 gap-y-8 *:justify-center *:duration-200 sm:grid-cols-4 sm:gap-y-12">
					<div className="group flex">
						<AmazonLogo
							className="not-group-hover:*:fill-foreground!"
							height={28}
						/>
					</div>
					<div className="group flex">
						<LemonSqueezyLogo
							className="not-group-hover:*:fill-foreground!"
							height={32}
						/>
					</div>
					<div className="group flex">
						<StripeLogo
							className="not-group-hover:*:fill-foreground!"
							height={24}
						/>
					</div>
					<div className="group flex">
						<NuxtLogo
							className="not-group-hover:*:fill-foreground!"
							height={20}
						/>
					</div>
					<div className="group flex">
						<TailusLogo
							className="not-group-hover:*:fill-foreground!"
							height={20}
						/>
					</div>
					<div className="group flex">
						<SupabaseLogo
							className="not-group-hover:*:fill-foreground!"
							height={24}
							id="lcc-supa"
						/>
					</div>
					<div className="group flex">
						<OpenAILogo
							className="not-group-hover:*:fill-foreground!"
							height={24}
						/>
					</div>
					<div className="group flex">
						<BeaconLogo
							className="not-group-hover:*:fill-foreground!"
							height={20}
						/>
					</div>
				</div>
				<a
					className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 pr-2 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
					href={ctaHref}
				>
					{ctaText}
					<ChevronRight className="size-3.5!" />
				</a>
			</div>
		</section>
	);
}
