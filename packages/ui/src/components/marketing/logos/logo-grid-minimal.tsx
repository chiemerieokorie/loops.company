import {
	LemonSqueezyLogo,
	NuxtLogo,
	OpenAILogo,
	StripeLogo,
	SupabaseLogo,
} from "./brand-logos";

export function LogoGridMinimal() {
	return (
		<section className="bg-background py-16">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 lg:grid-cols-5">
					<div className="relative h-10">
						<div className="absolute inset-0 flex *:m-auto">
							<OpenAILogo height={24} />
						</div>
					</div>
					<div className="relative h-10">
						<div className="absolute inset-0 flex *:m-auto">
							<SupabaseLogo height={24} id="lgm-supa" />
						</div>
					</div>
					<div className="relative h-10">
						<div className="absolute inset-0 flex *:m-auto">
							<StripeLogo height={24} />
						</div>
					</div>
					<div className="relative h-10">
						<div className="absolute inset-0 flex *:m-auto">
							<NuxtLogo height={22} />
						</div>
					</div>
					<div className="relative h-10 max-lg:hidden">
						<div className="absolute inset-0 flex *:m-auto">
							<LemonSqueezyLogo height={32} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
