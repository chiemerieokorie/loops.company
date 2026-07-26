"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { PillsDiagramIllustration } from "./pills-diagram-illustration";

export interface ExpandablePillItem {
	label: string;
}

export interface ExpandablePillsDiagramProps {
	description?: string;
	items?: ExpandablePillItem[];
	title?: string;
}

export function ExpandablePillsDiagram({
	title = "Ship with confidence using our unified platform",
	description = "Five pillars that power your development workflow from idea to deployment.",
	items = [
		{ label: "Server" },
		{ label: "Router" },
		{ label: "Database" },
		{ label: "Tab" },
		{ label: "Mobile" },
	],
}: ExpandablePillsDiagramProps) {
	const [activeItem, setActiveItem] = useState<number | null>(null);

	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mb-12 grid items-end gap-4 text-balance md:grid-cols-2">
					<h2 className="font-semibold text-4xl text-foreground">{title}</h2>
					<p className="text-lg text-muted-foreground">{description}</p>
				</div>
				<div className="grid items-center lg:grid-cols-5">
					<div className="relative z-10 lg:col-span-2">
						<div className="space-y-3 max-sm:px-9 max-lg:px-16">
							{items.map((item, index) => (
								<div
									className="group relative min-w-0 max-w-xs overflow-hidden rounded-3xl text-left text-muted-foreground ring ring-border transition-colors duration-500 hover:text-foreground max-md:mx-auto"
									data-expanded={activeItem === index}
									key={item.label}
									style={{ width: "fit-content" }}
								>
									<button
										className="flex h-10 cursor-pointer items-center gap-2 px-4"
										onClick={() =>
											setActiveItem(activeItem === index ? null : index)
										}
										type="button"
									>
										{activeItem === index ? (
											<CircleMinus className="size-3.5" />
										) : (
											<CirclePlus className="size-3.5" />
										)}
										<h3 className="text-nowrap font-medium text-sm">
											{item.label}
										</h3>
									</button>
								</div>
							))}
						</div>
					</div>
					<div className="max-lg:row-start-1 lg:col-span-3 lg:-translate-x-20">
						<PillsDiagramIllustration activeItem={activeItem} />
					</div>
				</div>
			</div>
		</section>
	);
}
