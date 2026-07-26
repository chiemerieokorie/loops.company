export interface SubheroWithFeaturesProps {
	badge?: string;
	description?: string;
	features?: Array<{
		icon: "sparkles" | "activity" | "shield";
		title: string;
		description: string;
	}>;
	primaryCtaHref?: string;
	primaryCtaLabel?: string;
	secondaryCtaHref?: string;
	secondaryCtaLabel?: string;
	title?: string;
}

const defaultFeatures: SubheroWithFeaturesProps["features"] = [
	{
		icon: "sparkles",
		title: "Automated Billing",
		description:
			"Streamline your billing process with automated tools that save you time.",
	},
	{
		icon: "activity",
		title: "Detailed Reports",
		description:
			"Access comprehensive reports to better understand your business performance.",
	},
	{
		icon: "shield",
		title: "Secure Transactions",
		description:
			"Ensure the safety of your financial data with top-notch security measures.",
	},
];

function FeatureIcon({ icon }: { icon: "sparkles" | "activity" | "shield" }) {
	if (icon === "sparkles") {
		return (
			<svg
				className="size-4 fill-blue-500/15 stroke-foreground"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
				<path d="M20 3v4" />
				<path d="M22 5h-4" />
				<path d="M4 17v2" />
				<path d="M5 18H3" />
			</svg>
		);
	}
	if (icon === "activity") {
		return (
			<svg
				className="size-4 fill-indigo-500/15 stroke-foreground"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect height="18" rx="2" width="18" x="3" y="3" />
				<path d="M17 12h-2l-2 5-2-10-2 5H7" />
			</svg>
		);
	}
	return (
		<svg
			className="size-4 fill-emerald-500/15 stroke-foreground"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
		</svg>
	);
}

export function SubheroWithFeatures({
	badge = "Billing",
	title = "Streamline Your Invoicing Process",
	description = "Simplify invoicing with automated and reporting tools. Empowering businesses with cutting-edge technology to streamline operations.",
	primaryCtaLabel = "Get Started",
	primaryCtaHref = "#",
	secondaryCtaLabel = "Get a demo",
	secondaryCtaHref = "#",
	features = defaultFeatures,
}: SubheroWithFeaturesProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-4xl text-center">
					<span className="rounded-full border border-primary/10 bg-primary/5 px-2 py-1 font-medium text-primary text-sm">
						{badge}
					</span>
					<h1 className="mt-4 text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
						{title}
					</h1>
					<p className="mt-4 mb-6 text-balance text-lg text-muted-foreground">
						{description}
					</p>
					<a
						className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
						href={primaryCtaHref}
					>
						{primaryCtaLabel}
					</a>
					<a
						className="ml-3 inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
						href={secondaryCtaHref}
					>
						{secondaryCtaLabel}
					</a>
					<div className="mt-20 grid gap-6 border-border-illustration border-y py-6 text-left sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
						{features?.map((feature) => (
							<div className="space-y-3" key={feature.title}>
								<div className="flex size-8 items-center justify-center rounded-md bg-card shadow ring-1 ring-border-illustration">
									<FeatureIcon icon={feature.icon} />
								</div>
								<h2 className="font-medium text-lg">{feature.title}</h2>
								<p className="text-muted-foreground text-sm">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
