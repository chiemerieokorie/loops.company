"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface ExpandableGridFeatureTab {
	duration?: number;
	label: string;
}

export interface ExpandableGridFeatureProps {
	activeDescription?: string;
	activeTitle?: string;
	autoplay?: boolean;
	description?: string;
	imageAlt?: string;
	imageUrl?: string;
	tabs?: ExpandableGridFeatureTab[];
	title?: string;
}

const CIRCUMFERENCE = 62.831_853_071_795_86;

export function ExpandableGridFeature({
	title = "Ship with confidence using Astor engine",
	description = "Streamline your workflow with tools designed to enhance productivity at every step.",
	tabs = [
		{ label: "AI Models", duration: 6000 },
		{ label: "Global Reach", duration: 6000 },
		{ label: "Smart Agent", duration: 6000 },
	],
	autoplay = true,
	activeTitle = "AI Models",
	activeDescription = "Access and switch between multiple AI models including GPT, Claude, and Gemini from a unified interface with seamless provider switching.",
	imageUrl = "https://images.unsplash.com/photo-1664398557235-f2a18403f68a?q=80&w=2338&auto=format&fit=crop",
	imageAlt = "Feature background",
}: ExpandableGridFeatureProps) {
	const [activeTab, setActiveTab] = useState(0);
	const [animKey, setAnimKey] = useState(0);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const activeDuration = tabs[activeTab]?.duration ?? 6000;

	useEffect(() => {
		if (!autoplay) {
			return;
		}
		timerRef.current = setTimeout(() => {
			setActiveTab((prev) => (prev + 1) % tabs.length);
			setAnimKey((k) => k + 1);
		}, activeDuration);
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, [activeTab, autoplay, activeDuration, tabs.length]);

	const handleTabClick = (index: number) => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		setActiveTab(index);
		setAnimKey((k) => k + 1);
	};

	return (
		<section className="@container overflow-hidden bg-background py-24">
			<div className="mx-auto max-w-6xl px-6 lg:px-12">
				<div className="grid gap-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
					<div className="grid pt-6 max-lg:row-span-2 max-lg:grid-rows-subgrid lg:pb-6">
						<div className="text-balance">
							<h2 className="font-medium text-4xl text-foreground">{title}</h2>
							<p className="mt-6 text-lg text-muted-foreground">
								{description}
							</p>
						</div>
						<div className="mt-auto -ml-6 flex flex-col">
							{tabs.map((tab, index) => (
								<button
									className="relative flex cursor-pointer items-center gap-2 py-2 pr-6 text-left font-medium text-sm duration-200 active:scale-[0.98]"
									key={tab.label}
									onClick={() => handleTabClick(index)}
									type="button"
								>
									<div className="size-4">
										{activeTab === index ? (
											<svg
												className="size-4"
												fill="none"
												height="24"
												key={animKey}
												viewBox="0 0 24 24"
												width="24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx="12"
													cy="12"
													opacity="0.1"
													r="10"
													stroke="currentColor"
													strokeWidth="2"
												/>
												<circle
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeDasharray={CIRCUMFERENCE}
													strokeDashoffset={CIRCUMFERENCE}
													strokeLinecap="round"
													strokeWidth="2"
													transform="rotate(-90 12 12)"
												>
													<animate
														attributeName="stroke-dashoffset"
														dur={`${activeDuration}ms`}
														fill="freeze"
														from={CIRCUMFERENCE}
														to="0"
													/>
												</circle>
											</svg>
										) : (
											<div className="size-4" />
										)}
									</div>
									<span
										className={
											activeTab === index
												? "text-foreground"
												: "text-muted-foreground hover:text-foreground/75"
										}
									>
										{tab.label}
									</span>
								</button>
							))}
						</div>
					</div>
					<div className="relative grid max-lg:row-span-2 max-lg:grid-rows-subgrid lg:col-span-2 lg:grid-cols-7 lg:gap-0">
						<div className="relative lg:col-span-4">
							<div
								aria-hidden="true"
								className="mask-x-from-45% pointer-events-none absolute -inset-x-1 -inset-y-8 rotate-45 border-foreground/15 border-y border-dashed"
							/>
							<div
								aria-hidden="true"
								className="mask-y-from-75% pointer-events-none absolute -inset-x-1 -inset-y-24 border-foreground/15 border-x border-dashed"
							/>
							<div className="relative aspect-4/5 overflow-hidden rounded-xl rounded-tr-[3rem] rounded-bl-[3rem] bg-muted lg:aspect-3/4 lg:h-full">
								<div className="absolute inset-0" style={{ opacity: 1 }}>
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
						<div className="flex flex-col justify-center gap-3 lg:col-span-3 lg:pl-12">
							<h3 className="font-medium text-foreground text-lg">
								{activeTitle}
							</h3>
							<p className="text-balance text-muted-foreground text-sm">
								{activeDescription}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
