import { defaultSpecIconGridItems } from "./data";
import type { SpecIconItem } from "./types";

export interface SpecIconGridProps {
	items?: SpecIconItem[];
}

export function SpecIconGrid({
	items = defaultSpecIconGridItems,
}: SpecIconGridProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="@container">
					<dl className="grid @2xl:grid-cols-3 @md:grid-cols-2 @2xl:gap-12 gap-6 *:space-y-2 *:text-balance *:text-center *:text-sm">
						{items.map((item) => (
							<div key={item.title}>
								{item.icon}
								<dt className="mt-4 font-medium text-foreground">
									{item.title}
								</dt>
								<dd className="text-muted-foreground">{item.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
