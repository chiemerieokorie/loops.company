import Image from "next/image";

export interface HeroCenteredWideProps {
	description?: string;
	partnerLogos?: Array<{ name: string; logoSrc?: string }>;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	stats?: Array<{ label: string; value: string }>;
	title?: string;
	titleHighlight?: string;
}

export function HeroCenteredWide({
	title = "The",
	titleHighlight = "Financial OS",
	description = "Experience seamless payments, real-time collaboration, and actionable insights. Set up in minutes.",
	primaryCta = { label: "Get Started Free", href: "#" },
	secondaryCta = { label: "Talk to Sales", href: "#" },
	partnerLogos = [
		{ name: "Shopify" },
		{ name: "WooCommerce" },
		{ name: "Squarespace" },
		{ name: "BigCommerce" },
		{ name: "Salesforce" },
		{ name: "HubSpot" },
	],
	stats = [
		{ label: "Processed annually", value: "$180B+" },
		{ label: "Platform businesses", value: "50,000+" },
		{ label: "Payout countries", value: "120+" },
	],
}: HeroCenteredWideProps) {
	return (
		<section className="bg-background">
			<div className="pt-32 lg:pt-44">
				<div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
					<div className="text-center">
						<h1 className="mx-auto text-balance font-semibold text-5xl text-foreground lg:text-6xl xl:text-7xl xl:tracking-tight">
							{title} <span className="text-primary">{titleHighlight}</span>{" "}
							powering businesses on your platform
						</h1>
						<div className="mx-auto mt-4 mb-8 max-w-lg">
							<p className="mb-6 text-balance text-lg text-muted-foreground">
								{description}
							</p>
							<div className="flex items-center justify-center gap-3 max-sm:flex-col">
								<a
									className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent"
									href={primaryCta.href}
								>
									{primaryCta.label}
								</a>
								<a
									className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
									href={secondaryCta.href}
								>
									{secondaryCta.label}
								</a>
							</div>
						</div>
					</div>

					{/* Stats row */}
					{stats.length > 0 && (
						<div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
							{stats.map((stat, i) => (
								<div className="flex items-center gap-4" key={stat.label}>
									{i > 0 && (
										<div className="hidden h-8 w-px bg-border md:block" />
									)}
									<div className="text-center">
										<p className="font-semibold text-2xl">{stat.value}</p>
										<p className="mt-0.5 text-muted-foreground text-sm">
											{stat.label}
										</p>
									</div>
								</div>
							))}
						</div>
					)}

					{/* Partner logo grid */}
					{partnerLogos.length > 0 && (
						<div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
							{partnerLogos.map((logo) => (
								<div
									className="flex items-center justify-center rounded-xl border border-border bg-card px-4 py-5 shadow-sm"
									key={logo.name}
								>
									{logo.logoSrc ? (
										<Image
											alt={logo.name}
											className="h-6 object-contain"
											height={24}
											src={logo.logoSrc}
											unoptimized
											width={96}
										/>
									) : (
										<span className="font-semibold text-muted-foreground/70 text-sm">
											{logo.name}
										</span>
									)}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
