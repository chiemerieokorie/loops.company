import { IconArrowRight } from "@runway/ui/icons";
import { cn } from "@runway/ui/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";
import { Screenshot } from "../components/screenshot";
import { Section } from "../components/section";

function FeatureCard({
	demo,
	title,
	description,
}: {
	demo: ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="rounded-2xl bg-muted p-2">
			<div className="overflow-hidden rounded-xl">{demo}</div>
			<div className="flex flex-col gap-3 p-6">
				<h3 className="font-medium text-foreground">{title}</h3>
				<p className="text-muted-foreground text-sm">{description}</p>
				<a
					className="inline-flex items-center gap-1 font-medium text-foreground text-sm"
					href="/signup"
				>
					Learn more
					<IconArrowRight className="size-4" />
				</a>
			</div>
		</div>
	);
}

function featureDemo(side: "left" | "right", wallpaper: "purple" | "blue") {
	return (
		<Screenshot
			placement={side === "left" ? "bottom-right" : "bottom-left"}
			wallpaper={wallpaper}
		>
			<Image
				alt="Feature preview"
				className={cn("bg-card", "dark:hidden")}
				height={1250}
				src={`/landing/img/screenshots/1-${side}-1800-top-1250.webp`}
				width={1800}
			/>
			<Image
				alt="Feature preview"
				className="not-dark:hidden"
				height={1250}
				src={`/landing/img/screenshots/1-color-mist-${side}-1800-top-1250.webp`}
				width={1800}
			/>
		</Screenshot>
	);
}

export function FeaturesSection() {
	return (
		<Section
			eyebrow="Features"
			headline="Built for the way modern teams work."
			id="features"
			subheadline={
				<p>
					Real-time collaboration, a built-in AI assistant, and multi-tenant
					workspaces — the foundation your product runs on.
				</p>
			}
		>
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
				<FeatureCard
					demo={featureDemo("left", "purple")}
					description="Documents and notes your whole team can edit together, with every change synced instantly across the workspace."
					title="Real-time collaboration"
				/>
				<FeatureCard
					demo={featureDemo("right", "blue")}
					description="Ask, draft, and summarize without leaving your workspace — an assistant grounded in your team's context."
					title="Built-in AI assistant"
				/>
			</div>
		</Section>
	);
}
