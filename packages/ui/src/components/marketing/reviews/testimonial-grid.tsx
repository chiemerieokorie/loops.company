import { defaultTestimonialGridItems } from "./data";

export interface TestimonialGridItem {
	authorAvatar: string;
	authorName: string;
	authorTitle: string;
	/** Href for the company logo card (elevated cards only). */
	href?: string;
	/** Optional company logo node — when present the card uses an elevated style with the logo above the quote. */
	logoNode?: React.ReactNode;
	quote: string;
}

export interface TestimonialGridProps {
	description?: string;
	heading?: string;
	testimonials?: TestimonialGridItem[];
}

function FlatCard({ item }: { item: TestimonialGridItem }) {
	return (
		<div className="flex flex-col justify-end gap-6 rounded-(--radius) border border-transparent bg-card/25 p-8 ring-1 ring-foreground/[0.07]">
			<p className="self-end text-balance text-foreground before:mr-1 before:content-['\201C'] after:ml-1 after:content-['\201D']">
				{item.quote}
			</p>
			<div className="flex items-center gap-3">
				<div className="aspect-square size-9 overflow-hidden rounded-lg border border-transparent shadow-black/15 shadow-md ring-1 ring-foreground/10">
					<img
						alt={item.authorName}
						className="size-full object-cover"
						decoding="async"
						height={120}
						loading="lazy"
						src={item.authorAvatar}
						style={{ color: "transparent" }}
						width={120}
					/>
				</div>
				<div className="space-y-px">
					<p className="font-medium text-sm">{item.authorName}</p>
					<p className="text-muted-foreground text-xs">{item.authorTitle}</p>
				</div>
			</div>
		</div>
	);
}

function ElevatedCard({ item }: { item: TestimonialGridItem }) {
	return (
		<div className="flex flex-col justify-between gap-6 rounded-(--radius) border border-transparent bg-card p-8 shadow-black/10 shadow-lg ring-1 ring-foreground/5">
			<div className="space-y-6">
				{item.logoNode}
				<p>{`"${item.quote}"`}</p>
			</div>
			<div className="flex items-center gap-3">
				<div className="aspect-square size-9 overflow-hidden rounded-lg border border-transparent shadow-black/15 shadow-md ring-1 ring-foreground/10">
					<img
						alt={item.authorName}
						className="size-full object-cover"
						decoding="async"
						height={120}
						loading="lazy"
						src={item.authorAvatar}
						style={{ color: "transparent" }}
						width={120}
					/>
				</div>
				<div className="space-y-px">
					<p className="font-medium text-sm">{item.authorName}</p>
					<p className="text-muted-foreground text-xs">{item.authorTitle}</p>
				</div>
			</div>
		</div>
	);
}

export function TestimonialGrid({
	heading = "What our customers are saying about Astor",
	description = "Join the increasing number of customers and advocates who rely on Astor for seamless and effective user A/B testing.",
	testimonials = defaultTestimonialGridItems,
}: TestimonialGridProps) {
	// Elevated cards (with logos) are rendered last in the grid; flat cards first
	const flat = testimonials.filter((t) => !t.logoNode);
	const elevated = testimonials.filter((t) => t.logoNode);

	return (
		<section className="bg-background py-12 md:py-24" id="reviews">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-2xl text-balance text-center">
					<h2 className="mb-4 font-semibold text-3xl text-foreground tracking-tight md:text-4xl">
						{heading}
					</h2>
					<p className="mb-6 text-muted-foreground md:mb-12 lg:mb-16">
						{description}
					</p>
				</div>
				<div className="relative rounded-(--radius) border-border/50 lg:border">
					<div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-px lg:*:nth-1:rounded-t-none lg:*:nth-4:rounded-r-none lg:*:nth-6:rounded-b-none lg:*:nth-3:rounded-l-none lg:*:nth-2:rounded-tl-none lg:*:nth-5:rounded-tl-none lg:*:nth-2:rounded-br-none lg:*:nth-5:rounded-br-none">
						{flat.map((item) => (
							<FlatCard
								item={item}
								key={`${item.authorName}-${item.authorTitle}`}
							/>
						))}
						{elevated.map((item) => (
							<ElevatedCard
								item={item}
								key={`${item.authorName}-${item.authorTitle}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
