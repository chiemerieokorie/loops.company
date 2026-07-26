import {
	ChartPie,
	Clover,
	Cpu,
	Fan,
	Gem,
	HeartPulse,
	PanelsTopLeft,
} from "lucide-react";
import { createElement } from "react";
import { BoltLogo, StripeLogo } from "./brand-logos";
import type {
	CompetitorColumn,
	CompetitorComparisonFeature,
} from "./comparison-split";
import type { ComparisonPlan, ComparisonRow } from "./comparison-table";
import type {
	DetailedComparisonPlan,
	DetailedComparisonTableProps,
} from "./comparison-table-detailed";
import type {
	ComparisonTableHorizontalProps,
	HorizontalComparisonPlan,
} from "./comparison-table-horizontal";
import type {
	ComparisonTablePricingProps,
	PricingComparisonPlan,
} from "./comparison-table-pricing";

// ── comparison-split ──────────────────────────────────────────────────────────

export const defaultSplitFeatures: CompetitorComparisonFeature[] = [
	{ label: "Daily Exercises" },
	{ label: "Unlimited Storage" },
	{ label: "Custom Dashboards" },
	{ label: "Self-paced Learning" },
	{ label: "Ad-free Experience" },
	{ label: "Team Collaboration" },
	{ label: "Priority Support" },
	{ label: "Dedicated Account Manager" },
];

export const defaultSplitColumns: CompetitorColumn[] = [
	{
		name: "Stripe",
		logo: createElement(StripeLogo),
		values: [true, true, true, true, true, true, true, true],
	},
	{
		name: "Bolt",
		logo: createElement(BoltLogo),
		values: [true, true, false, true, false, false, true, false],
	},
];

// ── comparison-table ──────────────────────────────────────────────────────────

export const defaultPlans: ComparisonPlan[] = [
	{
		name: "Free",
		icon: createElement(Clover, { className: "size-4" }),
		cta: { label: "Get Started", href: "#", variant: "secondary" },
	},
	{
		name: "Pro",
		icon: createElement(Gem, { className: "size-4" }),
		cta: { label: "Start a free trial", href: "#", variant: "primary" },
	},
	{
		name: "Team",
		icon: createElement(Fan, { className: "size-4" }),
		cta: { label: "Contact Us", href: "#", variant: "secondary" },
	},
];

export const defaultRows: ComparisonRow[] = [
	{ feature: { label: "Daily Exercises" }, values: [true, true, true] },
	{ feature: { label: "Unlimited Access" }, values: [false, true, true] },
	{ feature: { label: "Advance Quickly" }, values: [false, true, true] },
	{ feature: { label: "Self-paced Learning" }, values: [false, true, true] },
	{ feature: { label: "Ad-free Experience" }, values: [false, true, true] },
	{
		feature: { label: "Team Collaboration" },
		values: [false, false, true],
	},
];

// ── comparison-table-detailed ─────────────────────────────────────────────────

export const defaultDetailedPlans: DetailedComparisonPlan[] = [
	{
		name: "Free",
		icon: createElement(Clover, { className: "size-4" }),
		cta: { label: "Get Started", href: "#", variant: "secondary" },
	},
	{
		name: "Pro",
		icon: createElement(Gem, { className: "size-4" }),
		highlighted: true,
		cta: { label: "Start a free trial", href: "#", variant: "primary" },
	},
	{
		name: "Team",
		icon: createElement(Fan, { className: "size-4" }),
		cta: { label: "Contact Us", href: "#", variant: "secondary" },
	},
];

export const defaultDetailedSections: DetailedComparisonTableProps["sections"] =
	[
		{
			section: {
				title: "Platform",
				description:
					"Core features that enable seamless operations of your SaaS",
				features: [
					{ label: "Daily Exercises" },
					{ label: "Unlimited Storage" },
					{ label: "Custom Dashboards" },
					{ label: "Self-paced Learning" },
					{ label: "Ad-free Experience" },
					{ label: "Team Collaboration" },
				],
			},
			rows: [
				{ values: [true, true, true] },
				{ values: ["2 GB", "100 GB", "Unlimited"] },
				{ values: [true, true, true] },
				{ values: [true, true, true] },
				{ values: [false, true, true] },
				{ values: [false, false, true] },
			],
		},
		{
			section: {
				title: "Infrastructure",
				description: "Robust infrastructure to support your SaaS needs",
				features: [
					{ label: "Global CDN" },
					{ label: "Scalable Servers" },
					{ label: "Data Backups" },
					{ label: "API Access" },
					{ label: "24/7 Monitoring" },
					{ label: "Load Balancing" },
				],
			},
			rows: [
				{ values: [true, true, "Unlimited"] },
				{ values: [false, true, "Unlimited"] },
				{ values: [false, "3 days", "1 month"] },
				{ values: [false, true, true] },
				{ values: [true, true, true] },
				{ values: [false, false, true] },
			],
		},
		{
			section: {
				title: "Support",
				description: "Comprehensive support to assist your users",
				features: [
					{ label: "Priority Support" },
					{ label: "Live Chat" },
					{ label: "Knowledge Base" },
					{ label: "Onboarding Assistance" },
					{ label: "Community Forums" },
					{ label: "Dedicated Account Manager" },
				],
			},
			rows: [
				{ values: [false, true, true] },
				{ values: [false, true, true] },
				{ values: [true, true, true] },
				{ values: [false, "1 hour", "12 hours"] },
				{ values: [true, true, true] },
				{ values: [false, false, true] },
			],
		},
		{
			section: {
				title: "Analytics",
				description: "Advanced analytics to drive data-driven decisions",
				features: [
					{ label: "Real-time Reports" },
					{ label: "User Insights" },
					{ label: "Custom Metrics" },
					{ label: "A/B Testing" },
					{ label: "Predictive Analytics" },
				],
			},
			rows: [
				{ values: [false, true, true] },
				{ values: [false, true, true] },
				{ values: [false, "10", "Unlimited"] },
				{ values: [false, false, true] },
				{ values: [false, false, true] },
			],
		},
	];

// ── comparison-table-horizontal ───────────────────────────────────────────────

export const defaultHorizontalPlans: HorizontalComparisonPlan[] = [
	{
		name: "free",
		price: "$0 / month",
		cta: { label: "Get Started", href: "#", variant: "secondary" },
	},
	{
		name: "pro",
		price: "$15 / month",
		cta: { label: "Start a free trial", href: "#", variant: "primary" },
	},
	{
		name: "team",
		price: "Custom",
		cta: { label: "Contact Us", href: "#", variant: "secondary" },
	},
];

export const defaultHorizontalSections: ComparisonTableHorizontalProps["sections"] =
	[
		{
			section: {
				title: "Platform",
				icon: createElement(PanelsTopLeft),
				features: [
					{ label: "CMS Collections", tooltip: "CMS Collections" },
					{ label: "Custom Domains", tooltip: "Custom Domains" },
					{ label: "SEO Tools", tooltip: "SEO Tools" },
					{ label: "User Roles", tooltip: "User Roles" },
				],
			},
			rows: [
				{ values: [false, "2", "10"] },
				{ values: [false, "1", "Unlimited"] },
				{ values: ["Basic", "Advanced", "Advanced"] },
				{ values: [false, "Editor", "Admin"] },
			],
		},
		{
			section: {
				title: "Infrastructure",
				icon: createElement(Cpu),
				features: [
					{ label: "Version History", tooltip: "Version History" },
					{ label: "Uptime Monitoring", tooltip: "Uptime Monitoring" },
					{ label: "Backup & Restore", tooltip: "Backup & Restore" },
					{ label: "DDoS Protection", tooltip: "DDoS Protection" },
				],
			},
			rows: [
				{ values: ["3 days", "30 days", "1 year"] },
				{ values: [false, "Hourly", "Hourly"] },
				{ values: [false, "Weekly", "Daily"] },
				{ values: [false, "Basic", "Advanced"] },
			],
		},
		{
			section: {
				title: "Support",
				icon: createElement(HeartPulse),
				features: [
					{ label: "Workshop", tooltip: "Workshop" },
					{ label: "24/7 Support" },
					{
						label: "Dedicated Account Manager",
						tooltip: "Dedicated Account Manager",
					},
					{ label: "Community Access" },
				],
			},
			rows: [
				{ values: ["Limited", "Limited", "Extended"] },
				{ values: ["No", "Yes", "Yes"] },
				{ values: ["No", "No", "Yes"] },
				{ values: ["Yes", "Yes", "Yes"] },
			],
		},
		{
			section: {
				title: "Analytics",
				icon: createElement(ChartPie),
				features: [
					{ label: "Real-time Reports" },
					{ label: "Custom Dashboards", tooltip: "Custom Dashboards" },
					{ label: "Conversion Tracking" },
					{ label: "User Insights" },
				],
			},
			rows: [
				{ values: ["Limited", "Limited", "Extended"] },
				{ values: [false, false, "4"] },
				{ values: [false, "Yes", "Yes"] },
				{ values: ["Basic", "Advanced", "Advanced"] },
			],
		},
	];

// ── comparison-table-pricing ──────────────────────────────────────────────────

export const defaultPricingPlans: PricingComparisonPlan[] = [
	{
		name: "Free",
		price: "$0 / month",
		cta: { label: "Get Started", href: "#", variant: "secondary" },
	},
	{
		name: "Pro",
		price: "$15 / month",
		highlighted: true,
		cta: { label: "Start a free trial", href: "#", variant: "primary" },
	},
	{
		name: "Business",
		price: "Custom",
		cta: { label: "Contact Us", href: "#", variant: "secondary" },
	},
];

export const defaultPricingSections: ComparisonTablePricingProps["sections"] = [
	{
		section: {
			title: "Platform",
			description: "Core features that enable seamless operations of your SaaS",
			features: [
				{ label: "Daily Exercises" },
				{ label: "Unlimited Storage" },
				{ label: "Custom Dashboards" },
				{ label: "Self-paced Learning" },
				{ label: "Ad-free Experience" },
				{ label: "Team Collaboration" },
			],
		},
		rows: [
			{ values: [true, true, true] },
			{ values: ["2 GB", "100 GB", "Unlimited"] },
			{ values: [true, true, true] },
			{ values: [true, true, true] },
			{ values: ["-", true, true] },
			{ values: ["-", "-", true] },
		],
	},
	{
		section: {
			title: "Infrastructure",
			description: "Robust infrastructure to support your SaaS needs",
			features: [
				{ label: "Global CDN" },
				{ label: "Scalable Servers" },
				{ label: "Data Backups" },
				{ label: "API Access" },
				{ label: "24/7 Monitoring" },
				{ label: "Load Balancing" },
			],
		},
		rows: [
			{ values: [true, true, "Unlimited"] },
			{ values: ["-", true, "Unlimited"] },
			{ values: ["-", "3 days", "1 month"] },
			{ values: ["-", true, true] },
			{ values: ["-", "-", true] },
			{ values: ["-", "-", true] },
		],
	},
	{
		section: {
			title: "Support",
			description: "Comprehensive support to assist your users",
			features: [
				{ label: "Priority Support" },
				{ label: "Live Chat" },
				{ label: "Knowledge Base" },
				{ label: "Onboarding Assistance" },
				{ label: "Community Forums" },
				{ label: "Dedicated Account Manager" },
			],
		},
		rows: [
			{ values: ["-", true, true] },
			{ values: ["-", true, true] },
			{ values: [true, true, true] },
			{ values: ["-", "1 hour", "12 hours"] },
			{ values: [true, true, true] },
			{ values: ["-", "-", true] },
		],
	},
	{
		section: {
			title: "Analytics",
			description: "Advanced analytics to drive data-driven decisions",
			features: [
				{ label: "Real-time Reports" },
				{ label: "User Insights" },
				{ label: "Custom Metrics" },
				{ label: "A/B Testing" },
				{ label: "Predictive Analytics" },
			],
		},
		rows: [
			{ values: ["-", true, true] },
			{ values: ["-", true, true] },
			{ values: ["-", "10", "Unlimited"] },
			{ values: ["-", "-", true] },
			{ values: ["-", "-", true] },
		],
	},
];
