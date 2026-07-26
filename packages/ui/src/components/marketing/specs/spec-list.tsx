import { defaultSpecListItems } from "./data";
import type { SpecItem } from "./types";

export interface SpecListProps {
	heading?: string;
	headingHighlight?: string;
	items?: SpecItem[];
}

export function SpecList({
	heading = "Building the next generation of",
	headingHighlight = "AI-powered Marketing Tools",
	items = defaultSpecListItems,
}: SpecListProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
					<h2 className="text-balance font-semibold text-4xl text-muted-foreground">
						{heading}{" "}
						<strong className="font-semibold text-foreground">
							{headingHighlight}
						</strong>
					</h2>
					<dl className="space-y-6 *:space-y-2">
						{items.map((item) => (
							<div key={item.title}>
								<dt className="font-semibold text-foreground">{item.title}</dt>
								<dd className="text-muted-foreground">{item.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
