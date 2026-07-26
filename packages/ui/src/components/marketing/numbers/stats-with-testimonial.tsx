import {
	defaultStatsWithTestimonial,
	defaultStatsWithTestimonialQuote,
} from "./data";

export interface StatsWithTestimonialStat {
	label: string;
	value: string;
}

export interface StatsWithTestimonialQuote {
	authorName: string;
	authorTitle: string;
	avatarSrc?: string;
	logoAlt?: string;
	logoSrc?: string;
	quote: string;
}

export interface StatsWithTestimonialProps {
	description?: string;
	stats?: StatsWithTestimonialStat[];
	testimonial?: StatsWithTestimonialQuote;
}

export function StatsWithTestimonial({
	description = "From products to the APIs and platforms helping developers and businesses innovate",
	stats = defaultStatsWithTestimonial,
	testimonial = defaultStatsWithTestimonialQuote,
}: StatsWithTestimonialProps) {
	return (
		<section className="bg-background py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
					<div>
						<p className="text-lg text-muted-foreground">{description}</p>
						<div className="mt-6 mb-12 grid grid-cols-2 gap-2 divide-x md:mb-0">
							{stats.map((stat) => (
								<div className="space-y-2 pl-6 first:pl-0" key={stat.label}>
									<div className="bg-linear-to-b from-foreground to-muted-foreground bg-clip-text font-bold text-4xl text-transparent">
										{stat.value}
									</div>
									<p className="text-muted-foreground text-sm">{stat.label}</p>
								</div>
							))}
						</div>
					</div>
					<div className="relative">
						<blockquote className="relative max-w-xl space-y-6 pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-primary">
							{testimonial.logoSrc && (
								<img
									alt={testimonial.logoAlt ?? "Logo"}
									className="h-5 w-fit"
									height="20"
									src={testimonial.logoSrc}
									width="auto"
								/>
							)}
							<p className="text-foreground">{testimonial.quote}</p>
							<div className="flex gap-2">
								{testimonial.avatarSrc && (
									<span className="relative flex size-6 shrink-0 overflow-hidden rounded-full border border-transparent shadow ring-1 ring-foreground/10">
										<img
											alt={testimonial.authorName}
											className="aspect-square size-full"
											src={testimonial.avatarSrc}
										/>
									</span>
								)}
								<cite className="block font-medium not-italic">
									{testimonial.authorName}, {testimonial.authorTitle}
								</cite>
							</div>
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
}
