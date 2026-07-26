import { defaultTestimonialBento } from "./data";

export interface TestimonialBentoItem {
	authorAvatar: string;
	authorName: string;
	authorTitle: string;
	dark?: boolean;
	logoNode: React.ReactNode;
	quote: string;
}

export interface TestimonialBentoProps {
	testimonials?: [TestimonialBentoItem, TestimonialBentoItem];
}

export function TestimonialBento({
	testimonials = defaultTestimonialBento,
}: TestimonialBentoProps) {
	const [first, second] = testimonials;

	return (
		<section className="@container bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid @4xl:grid-cols-9 gap-6 *:overflow-hidden *:rounded-2xl *:border *:border-transparent *:bg-card *:shadow-black/10 *:shadow-md *:ring-1 *:ring-foreground/10">
					{/* First card — light */}
					<div className="@4xl:col-span-4 row-span-2 grid grid-rows-subgrid gap-px">
						<div className="self-end @3xl:p-12 p-8">
							<p className="text-lg before:mr-1 before:font-serif before:content-['\201C'] after:ml-1 after:font-serif after:content-['\201D'] lg:text-xl">
								{first.quote}
							</p>
						</div>
						<div className="grid grid-cols-[1fr_auto] border-t bg-linear-to-b from-background to-green-500/10 p-8 @3xl:px-12">
							<div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
								<div className="aspect-square size-10 overflow-hidden rounded-full border border-transparent shadow-black/15 shadow-md ring-1 ring-foreground/10">
									<img
										alt={`${first.authorName}'s avatar`}
										decoding="async"
										height={120}
										loading="lazy"
										src={first.authorAvatar}
										style={{ color: "transparent" }}
										width={120}
									/>
								</div>
								<div className="text-base *:block">
									<span className="font-medium text-foreground">
										{first.authorName}
									</span>
									<span className="text-muted-foreground text-sm">
										{first.authorTitle}
									</span>
								</div>
							</div>
							<div>{first.logoNode}</div>
						</div>
					</div>

					{/* Second card — dark */}
					<div
						className="@4xl:col-span-5 row-span-2 grid grid-rows-subgrid gap-px"
						data-theme={second.dark ? "dark" : undefined}
					>
						<div className="self-end p-8 @3xl:px-12">
							<p className="text-lg before:mr-1 before:font-serif before:content-['\201C'] after:ml-1 after:font-serif after:content-['\201D'] lg:text-xl">
								{second.quote}
							</p>
						</div>
						<div className="relative grid grid-cols-[1fr_auto] border-foreground/10 border-t bg-linear-to-bl from-foreground/10 to-background/5 p-8 @3xl:px-12">
							<div className="relative grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
								<div className="aspect-square size-10 overflow-hidden rounded-full border border-transparent shadow-black/15 shadow-md ring-1 ring-foreground/10">
									<img
										alt={`${second.authorName}'s avatar`}
										decoding="async"
										height={120}
										loading="lazy"
										src={second.authorAvatar}
										style={{ color: "transparent" }}
										width={120}
									/>
								</div>
								<div className="text-base *:block">
									<span className="font-medium text-foreground">
										{second.authorName}
									</span>
									<span className="text-foreground/65 text-sm">
										{second.authorTitle}
									</span>
								</div>
							</div>
							<div className="relative">{second.logoNode}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
