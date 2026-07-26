"use client";

import { useState } from "react";
import { defaultExpandableColumnsFeatures } from "./data";

export interface ExpandableColumnsFeature {
	description: string;
	icon: React.ReactNode;
	id: string;
	/** Render the card illustration for this feature */
	illustration: React.ReactNode;
	title: string;
}

export interface ExpandableColumnsProps {
	description?: string;
	features?: ExpandableColumnsFeature[];
	title?: string;
}

export function ExpandableColumns({
	title = "Ship with confidence using our unified platform",
	description = "Streamline your workflow with tools designed to enhance productivity at every step.",
	features = defaultExpandableColumnsFeatures,
}: ExpandableColumnsProps) {
	const [activeFeature, setActiveFeature] = useState(0);

	return (
		<section className="@container bg-background py-24 max-lg:px-1">
			<div className="mx-auto max-w-5xl max-lg:px-6">
				<div className="mb-12 grid items-end gap-6 sm:mb-20 md:grid-cols-2 lg:gap-12">
					<h2 className="text-balance font-semibold text-4xl text-foreground">
						{title}
					</h2>
					<p className="text-balance text-lg text-muted-foreground">
						{description}
					</p>
				</div>
				<div
					className="grid gap-px rounded-2xl bg-foreground/10 p-px transition-[grid-template-columns] duration-300 ease-in-out"
					style={{
						gridTemplateColumns: features
							.map((_, i) => (i === activeFeature ? "2fr" : "1fr"))
							.join(" "),
					}}
				>
					{features.map((feature, index) => (
						<div
							className={`relative overflow-hidden bg-background text-left text-card-foreground shadow-black/4 shadow-md ring-1 ring-transparent ${
								index === 0
									? "max-md:rounded-t-[15px] md:rounded-l-[15px]"
									: "max-md:rounded-b-[15px] md:rounded-r-[15px]"
							}`}
							data-expanded={activeFeature === index}
							key={feature.id}
						>
							<div className="grid h-full gap-3 sm:grid-cols-2">
								<div className="flex h-full flex-col justify-between gap-12 py-8 pl-8">
									<span className="text-muted-foreground">{feature.icon}</span>
									<div>
										<button
											aria-expanded={activeFeature === index}
											className="absolute inset-0 cursor-pointer"
											onClick={() => setActiveFeature(index)}
											type="button"
										/>
										<h3 className="font-medium text-foreground">
											{feature.title}
										</h3>
										<p className="mt-4 text-balance text-muted-foreground">
											{feature.description}
										</p>
									</div>
								</div>
								<div className="overflow-hidden">
									<div className="*:scale-95 sm:py-12">
										{feature.illustration}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
