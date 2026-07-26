import { HuluLogo, StripeLogo } from "./brand-logos";

export interface TestimonialCardProps {
	authorAvatar?: string;
	authorName?: string;
	authorTitle?: string;
	companyLogoAlt?: string;
	companyLogoSrc?: string;
	quote?: string;
}

export function TestimonialCard({
	quote = "Astor has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences.",
	authorName = "Méschac Irung",
	authorTitle = "UI Engineer",
	authorAvatar = "https://avatars.githubusercontent.com/u/47919550?v=4",
}: TestimonialCardProps) {
	return (
		<section className="bg-background py-16 md:py-44">
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative mx-auto max-w-xl">
					<div
						className="relative z-10"
						style={{ opacity: 1, transform: "none" }}
					>
						<div
							className="space-y-8 rounded-2xl bg-card p-10 text-card-foreground shadow-black/6.5 shadow-lg ring-1 ring-border"
							data-slot="card"
						>
							<div>
								<HuluLogo className="h-7 w-16" />
							</div>
							<p className="text-lg before:mr-1 before:font-serif before:content-['\201C'] after:ml-1 after:font-serif after:content-['\201D']">
								{quote}
							</p>
							<div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
								<div className="aspect-square size-12 overflow-hidden rounded-xl border border-transparent shadow-black/15 shadow-md ring-1 ring-border">
									<img
										alt={`Avatar of ${authorName}`}
										decoding="async"
										height={120}
										loading="lazy"
										src={authorAvatar}
										style={{ color: "transparent" }}
										width={120}
									/>
								</div>
								<div className="space-y-0.5 text-base *:block">
									<span className="font-medium text-foreground">
										{authorName}
									</span>
									<span className="text-muted-foreground text-sm">
										{authorTitle}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mask-x-from-75% relative mx-auto mt-6 max-w-xl border-foreground/10 border-y border-dashed bg-background px-4 py-0.5">
					<span
						className="absolute top-0 flex h-px -translate-y-px rounded-full"
						style={{
							backgroundColor: "rgb(28, 231, 131)",
							transform: "translateX(244px)",
							width: "48px",
						}}
					/>
					<div className="flex items-center justify-center gap-1">
						<button
							aria-label="Stripe"
							className="relative flex h-10 items-center rounded px-6 transition-all duration-200 not-last:before:absolute not-last:before:inset-y-0.5 not-last:before:-right-[2.5px] not-last:before:w-px not-last:before:bg-foreground/10 hover:bg-foreground/5"
							type="button"
						>
							<StripeLogo height={20} width={56} />
						</button>
						<button
							aria-label="Hulu"
							className="relative flex h-10 items-center rounded px-6 transition-all duration-200 not-last:before:absolute not-last:before:inset-y-0.5 not-last:before:-right-[2.5px] not-last:before:w-px not-last:before:bg-foreground/10 hover:bg-foreground/5"
							type="button"
						>
							<HuluLogo className="h-7 w-16" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
