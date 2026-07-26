"use client";

import Image from "next/image";
import { useState } from "react";

export interface ExpandableSplitNavTab {
	icon?: React.ReactNode;
	label: string;
}

export interface ExpandableSplitNavProps {
	description?: string;
	imageAlt?: string;
	imageUrl?: string;
	tabs?: ExpandableSplitNavTab[];
	title?: string;
}

export function ExpandableSplitNav({
	title = "Ship with confidence using our unified platform",
	description = "Streamline your workflow with tools designed to enhance productivity at every step.",
	tabs = [
		{ label: "AI Models" },
		{ label: "Global Reach" },
		{ label: "Smart Agent" },
	],
	imageUrl = "https://images.unsplash.com/photo-1770490085047-1460359929e7?q=80&w=2148&auto=format&fit=crop",
	imageAlt = "Feature background",
}: ExpandableSplitNavProps) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section className="@container overflow-hidden bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid sm:grid-cols-7 sm:gap-6 md:gap-12">
					<div className="flex flex-col gap-12 pb-6 sm:col-span-3 md:py-12">
						<div className="text-balance">
							<h2 className="font-semibold text-3xl text-foreground lg:text-4xl">
								{title}
							</h2>
							<p className="mt-6 text-lg text-muted-foreground">
								{description}
							</p>
						</div>
						<div className="mt-auto -ml-6 flex flex-col">
							{tabs.map((tab, index) => (
								<button
									className={`relative w-fit cursor-pointer px-6 pt-2 pb-3 text-left font-medium text-sm duration-200 active:scale-[0.98] ${
										activeTab === index
											? "text-foreground"
											: "text-muted-foreground hover:text-foreground/75"
									}`}
									key={tab.label}
									onClick={() => setActiveTab(index)}
									type="button"
								>
									{tab.icon && (
										<span className="mr-2 inline-flex size-4 shrink-0 items-center">
											{tab.icon}
										</span>
									)}
									{tab.label}
								</button>
							))}
						</div>
					</div>
					<div className="relative not-sm:overflow-hidden sm:col-span-4">
						<div
							aria-hidden="true"
							className="mask-x-from-45% pointer-events-none absolute -inset-x-1 -inset-y-10 rotate-45 border-foreground/15 border-y border-dashed max-lg:hidden"
						/>
						<div
							aria-hidden="true"
							className="mask-y-from-75% pointer-events-none absolute -inset-x-1 -inset-y-24 border-foreground/15 border-x border-dashed"
						/>
						<div className="relative aspect-4/5 overflow-hidden rounded-xl rounded-tr-[5rem] rounded-bl-[5rem] bg-muted">
							<div className="absolute inset-0">
								<Image
									alt={imageAlt}
									className="size-full object-cover opacity-75 dark:opacity-50"
									fill
									loading="lazy"
									src={imageUrl}
									unoptimized
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
