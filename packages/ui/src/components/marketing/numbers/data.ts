import type {
	StatsBannerOnMapStat,
	StatsCardOnMapStat,
	StatsGridStat,
	StatsInlineStat,
	StatsMapStat,
	StatsSplitStat,
	StatsWithTestimonialQuote,
	StatsWithTestimonialStat,
} from "./index";

export const defaultStatsBannerOnMap: StatsBannerOnMapStat[] = [
	{ value: "+85%", label: "Conversion Rate" },
	{ value: "12K", label: "Active Users" },
	{ value: "40%", label: "Revenue Growth" },
];

export const defaultStatsCardOnMap: StatsCardOnMapStat[] = [
	{
		value: "99.9",
		unit: "%",
		label: "Uptime guarantee",
		description: "for all our services.",
	},
	{
		value: "24/7",
		label: "24/7 support",
		description: "available around the clock.",
	},
	{
		value: "12",
		unit: "X",
		label: "12X",
		description: "faster processing than previous generation.",
	},
	{
		value: "12",
		unit: "X",
		label: "12X",
		description: "faster processing than previous generation.",
	},
];

export const defaultStatsGrid: StatsGridStat[] = [
	{ value: "+85%", label: "Conversion Rate" },
	{ value: "12K", label: "Active Users" },
	{ value: "40%", label: "Revenue Growth" },
];

export const defaultStatsInline: StatsInlineStat[] = [
	{ value: "90+", label: "Integrations" },
	{ value: "56%", label: "Productivity Boost" },
];

export const defaultStatsMap: StatsMapStat[] = [
	{
		value: "99.9",
		unit: "%",
		label: "Uptime guarantee",
		description: "for all our services.",
	},
	{
		value: "24/7",
		label: "24/7 support",
		description: "available around the clock.",
	},
	{
		value: "12",
		unit: "X",
		label: "12X",
		description: "faster processing than previous generation.",
	},
];

export const defaultStatsSplit: StatsSplitStat[] = [
	{
		value: "99.9%",
		label: "Uptime guarantee",
		description:
			"for all our services. Experience reliability with minimal interruptions.",
	},
	{
		value: "24/7",
		label: "24/7 support",
		description:
			"available around the clock. Get help whenever you need it, wherever you are.",
	},
];

export const defaultStatsWithTestimonial: StatsWithTestimonialStat[] = [
	{ value: "+1200", label: "Stars on GitHub" },
	{ value: "+500", label: "Powered Apps" },
];

export const defaultStatsWithTestimonialQuote: StatsWithTestimonialQuote = {
	logoSrc: "https://html.tailus.io/blocks/customers/nvidia.svg",
	logoAlt: "Nvidia Logo",
	quote: "Using Astor has been like unlocking a secret design superpower.",
	avatarSrc: "https://avatars.githubusercontent.com/u/68236786?v=4",
	authorName: "John Doe",
	authorTitle: "CEO",
};
