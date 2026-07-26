import {
	ChartPie,
	Clock4,
	Clock9,
	Cloud,
	MessageCircleHeart,
	MessagesSquare,
	MousePointer2,
	Puzzle,
	ShieldCheck,
	Tickets,
	UserRoundPen,
} from "lucide-react";
import type { SpecIconItem, SpecItem, SpecNumberedItem } from "./types";

// Shared icon items used by spec-card-grid, spec-grid-inline-icons, spec-grid-with-icons, spec-wide-grid
export const defaultSpecIconItems: SpecIconItem[] = [
	{
		icon: (
			<UserRoundPen
				aria-hidden="true"
				className="size-4 drop-shadow *:nth-2:fill-primary *:nth-2:stroke-primary *:not-nth-2:opacity-50"
			/>
		),
		title: "AI-Powered Analytics",
		description:
			"Leverage machine learning to gain deeper insights from your marketing data and optimize campaigns in real-time.",
	},
	{
		icon: (
			<ChartPie
				aria-hidden="true"
				className="size-4 drop-shadow *:first:fill-primary *:first:stroke-primary"
			/>
		),
		title: "Intelligent Automation",
		description:
			"Automate repetitive tasks and workflows, allowing your team to focus on strategic initiatives.",
	},
	{
		icon: (
			<MessageCircleHeart
				aria-hidden="true"
				className="size-4 fill-illustration drop-shadow *:last:fill-primary"
			/>
		),
		title: "Predictive Targeting",
		description:
			"Identify high-value audiences with precision using advanced predictive modeling.",
	},
	{
		icon: (
			<Tickets
				aria-hidden="true"
				className="size-4 drop-shadow *:first:fill-primary"
			/>
		),
		title: "Smart Personalization",
		description:
			"Deliver tailored content and experiences to each user based on their behavior and preferences.",
	},
];

// Extended icon items used by spec-card-grid and spec-wide-grid (6 items)
export const defaultSpecIconItemsExtended: SpecIconItem[] = [
	...defaultSpecIconItems,
	{
		icon: (
			<Clock9
				aria-hidden="true"
				className="size-4 fill-background drop-shadow *:not-nth-2:stroke-foreground/50 *:nth-2:stroke-primary"
			/>
		),
		title: "Real-Time Insights",
		description:
			"Monitor campaign performance with live dashboards and instant notifications for critical metrics.",
	},
	{
		icon: (
			<Puzzle
				aria-hidden="true"
				className="size-4 fill-background drop-shadow"
			/>
		),
		title: "Cross-Channel Integration",
		description:
			"Seamlessly connect all your marketing channels for unified reporting and coordinated campaigns.",
	},
];

// Icon grid items with decorative layered icon compositions (spec-icon-grid)
export const defaultSpecIconGridItems: SpecIconItem[] = [
	{
		title: "AI-Powered Analytics",
		description:
			"Use machine learning for deeper marketing insights and real-time optimization.",
		icon: (
			<div
				aria-hidden="true"
				className="relative mx-auto flex size-12 items-center justify-center"
			>
				<ShieldCheck
					className="relative z-1 size-6 fill-illustration stroke-foreground/10 drop-shadow-emerald-500/15 drop-shadow-md *:nth-2:stroke-primary"
					strokeWidth={1}
				/>
				<ShieldCheck
					aria-hidden="true"
					className="absolute inset-0 m-auto size-8 opacity-15"
					strokeWidth={0.5}
				/>
				<ShieldCheck
					aria-hidden="true"
					className="absolute inset-0 m-auto size-10 opacity-10"
					strokeWidth={0.25}
				/>
			</div>
		),
	},
	{
		title: "Intelligent Automation",
		description:
			"Automate repetitive tasks so your team can focus on strategy.",
		icon: (
			<div
				aria-hidden="true"
				className="relative mx-auto flex size-12 items-center justify-center"
			>
				<Cloud
					className="relative z-1 size-6 fill-illustration stroke-foreground/10 drop-shadow-blue-500/15 drop-shadow-md"
					strokeWidth={1}
				/>
				<Cloud
					aria-hidden="true"
					className="absolute inset-0 m-auto size-8 opacity-15"
					strokeWidth={0.5}
				/>
				<Cloud
					aria-hidden="true"
					className="absolute inset-0 m-auto size-10 opacity-10"
					strokeWidth={0.25}
				/>
			</div>
		),
	},
	{
		title: "Predictive Targeting",
		description:
			"Identify high-value audiences with advanced predictive modeling.",
		icon: (
			<div
				aria-hidden="true"
				className="relative mx-auto flex size-12 items-center justify-center"
			>
				<MessagesSquare
					className="relative z-1 size-8 stroke-foreground/10 *:first:fill-illustration *:first:drop-shadow-md"
					strokeWidth={0.5}
				/>
			</div>
		),
	},
	{
		title: "Smart Personalization",
		description:
			"Deliver tailored content based on user behavior and preferences.",
		icon: (
			<div
				aria-hidden="true"
				className="relative mx-auto flex size-12 items-center justify-center"
			>
				<div className="mask-r-from-35% mask-r-to-75% absolute inset-1 rotate-45 rounded-full border border-border/50 before:absolute before:inset-1 before:rounded-full before:border" />
				<MousePointer2
					className="size-5 fill-illustration stroke-foreground/15 drop-shadow"
					strokeWidth={0.5}
				/>
			</div>
		),
	},
	{
		title: "Real-Time Insights",
		description:
			"Monitor campaigns with live dashboards and instant notifications.",
		icon: (
			<div
				aria-hidden="true"
				className="relative mx-auto flex size-12 items-center justify-center"
			>
				<div className="absolute inset-1 rounded-full border border-border/50 before:absolute before:inset-1 before:rounded-full before:border" />
				<Clock4
					className="size-6 fill-illustration drop-shadow *:not-nth-2:stroke-foreground/50 *:nth-2:stroke-2 *:nth-2:stroke-primary"
					strokeWidth={0.5}
				/>
			</div>
		),
	},
	{
		title: "Cross-Channel Integration",
		description:
			"Connect all marketing channels for unified reporting and campaigns.",
		icon: (
			<div
				aria-hidden="true"
				className="relative mx-auto flex size-12 items-center justify-center"
			>
				<div className="absolute inset-2 border border-border/50 before:absolute before:-inset-x-1 before:inset-y-0 before:border-x" />
				<Puzzle
					className="relative z-1 size-6 fill-illustration stroke-foreground/10 drop-shadow-md drop-shadow-purple-500/15"
					strokeWidth={1}
				/>
			</div>
		),
	},
];

// Plain spec items used by spec-grid and spec-list
export const defaultSpecItems: SpecItem[] = [
	{
		title: "AI-Powered Analytics",
		description:
			"Leverage machine learning to gain deeper insights from your marketing data and optimize campaigns in real-time.",
	},
	{
		title: "Intelligent Automation",
		description:
			"Automate repetitive tasks and workflows, allowing your team to focus on strategic initiatives.",
	},
	{
		title: "Predictive Targeting",
		description:
			"Identify high-value audiences with precision using advanced predictive modeling.",
	},
	{
		title: "Smart Personalization",
		description:
			"Deliver tailored content and experiences to each user based on their behavior and preferences.",
	},
];

// Trimmed plain items used by spec-list (3 items)
export const defaultSpecListItems: SpecItem[] = defaultSpecItems.slice(0, 3);

// Numbered items used by spec-numbered-list
export const defaultSpecNumberedItems: SpecNumberedItem[] = [
	{
		title: "Secure & Reliable",
		description:
			"Built with enterprise-grade security protocols and a 99.9% uptime guarantee, ensuring your data remains protected and your services stay available around the clock.",
	},
	{
		title: "Fast & Scalable",
		description:
			"Optimized for lightning-fast performance with intelligent caching and load balancing that seamlessly grows with your business demands without compromising speed.",
	},
	{
		title: "Easy to Use",
		description:
			"Intuitive interface designed for seamless onboarding and daily use, with comprehensive documentation and guided workflows that reduce the learning curve significantly.",
	},
	{
		title: "Attention to Detail",
		description:
			"Crafted with precision and care for a polished user experience, where every interaction has been thoughtfully designed to delight users and enhance productivity.",
	},
];
