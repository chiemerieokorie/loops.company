import { defaultSpecIconItemsExtended } from "./data";
import type { SpecIconItem } from "./types";

export interface SpecCardGridProps {
	heading?: string;
	items?: SpecIconItem[];
}

export function SpecCardGrid({
	heading = "AI-powered Marketing Tools",
	items = defaultSpecIconItemsExtended,
}: SpecCardGridProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="space-y-12">
					<h2 className="text-balance font-semibold text-4xl text-foreground">
						{heading}
					</h2>
					<div className="@container lg:col-span-2">
						<dl className="grid @2xl:grid-cols-3 @md:grid-cols-2 gap-6 *:space-y-2 *:rounded-xl *:border *:p-6">
							{items.map((item) => (
								<div key={item.title}>
									{item.icon}
									<dt className="mt-12 font-medium text-foreground">
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
