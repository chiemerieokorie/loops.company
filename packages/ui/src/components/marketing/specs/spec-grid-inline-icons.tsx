import { defaultSpecIconItems } from "./data";
import type { SpecIconItem } from "./types";

export interface SpecGridInlineIconsProps {
	heading?: string;
	items?: SpecIconItem[];
}

export function SpecGridInlineIcons({
	heading = "AI-powered Marketing Tools",
	items = defaultSpecIconItems,
}: SpecGridInlineIconsProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-24">
					<h2 className="text-balance font-semibold text-4xl text-foreground">
						{heading}
					</h2>
					<div className="@container lg:col-span-2">
						<dl className="grid @md:grid-cols-2 gap-6 *:space-y-2">
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
