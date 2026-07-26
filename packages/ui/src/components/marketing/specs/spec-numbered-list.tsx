import { defaultSpecNumberedItems } from "./data";
import type { SpecNumberedItem } from "./types";

export type { SpecNumberedItem };

export interface SpecNumberedListProps {
	heading?: string;
	items?: SpecNumberedItem[];
	subtitle?: string;
}

export function SpecNumberedList({
	heading = "What makes Astor your perfect fit",
	subtitle = "Optimized for lightning-fast performance with intelligent caching and load balancing that seamlessly grows with your business demands without compromising speed.",
	items = defaultSpecNumberedItems,
}: SpecNumberedListProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-2xl px-6">
				<div className="@container">
					<h2 className="text-balance font-medium text-2xl text-foreground">
						{heading}
					</h2>
					<p className="mt-3 text-muted-foreground">{subtitle}</p>
					<dl className="mt-12 space-y-6">
						{items.map((item, index) => (
							<div
								className="grid grid-cols-[auto_1fr] border-b pb-6"
								key={item.title}
							>
								<span className="mt-0.5 w-14 font-mono text-muted-foreground text-sm">
									{String(index + 1).padStart(2, "0")}.
								</span>
								<div className="space-y-3">
									<dt className="font-medium text-foreground">{item.title}</dt>
									<dd className="text-muted-foreground">{item.description}</dd>
								</div>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
