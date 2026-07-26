import { defaultSpecIconItemsExtended } from "./data";
import type { SpecIconItem } from "./types";

export interface SpecWideGridProps {
	heading?: string;
	items?: SpecIconItem[];
}

export function SpecWideGrid({
	heading = "AI-powered Marketing Tools",
	items = defaultSpecIconItemsExtended,
}: SpecWideGridProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="space-y-12">
					<h2 className="text-balance font-semibold text-4xl text-foreground">
						{heading}
					</h2>
					<div className="@container lg:col-span-2">
						<dl className="grid @2xl:grid-cols-3 @md:grid-cols-2 @2xl:gap-12 gap-6 *:space-y-2">
							{items.map((item) => (
								<div key={item.title}>
									<dt className="flex items-center gap-2 font-medium text-foreground">
										{item.icon}
										{item.title}
									</dt>
									<dd className="text-muted-foreground">{item.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
}
