import type { PricingPlan } from "./pricing-cards";
import type { PricingTier } from "./pricing-cards-three-tier";
import type {
	EnterpriseDetails,
	PricingTierItem,
} from "./pricing-cards-with-enterprise";

export const defaultPlans: [PricingPlan, PricingPlan] = [
	{
		name: "Free",
		description: "For developers trying out Astor for the first time",
		price: "$0",
		cta: "Get Started",
		href: "#",
		features: [
			"Basic Analytics Dashboard",
			"5GB Cloud Storage",
			"Email and Chat Support",
		],
	},
	{
		name: "Pro",
		description: "Ideal for developers who need more features and support",
		price: "$14",
		cta: "Get Started",
		href: "#",
		featured: true,
		featuresHeader: "Everything in Free Plan plus:",
		features: [
			"5GB Cloud Storage",
			"Email and Chat Support",
			"Access to Community Forum",
			"Single User Access",
			"Access to Basic Templates",
			"Mobile App Access",
			"1 Custom Report Per Month",
			"Monthly Product Updates",
			"Standard Security Features",
		],
	},
];

export const defaultThreeTierPlans: [PricingTier, PricingTier, PricingTier] = [
	{
		name: "Free",
		description: "For developers trying out Astor for the first time",
		price: "$0",
		cta: "Get Started",
		href: "#",
		ctaVariant: "secondary",
		features: [
			"Basic Analytics Dashboard",
			"5GB Cloud Storage",
			"Email and Chat Support",
		],
	},
	{
		name: "Pro",
		description: "Ideal for developers who need more features and support",
		price: "$14",
		cta: "Get Started",
		href: "#",
		featured: true,
		ctaVariant: "primary",
		featuresHeader: "Everything in Free Plan plus:",
		features: [
			"5GB Cloud Storage",
			"Email and Chat Support",
			"Access to Community Forum",
			"Single User Access",
			"Access to Basic Templates",
			"Mobile App Access",
			"1 Custom Report Per Month",
			"Monthly Product Updates",
			"Standard Security Features",
		],
	},
	{
		name: "Startup",
		description: "For startups that need more advanced features and support.",
		price: "$37",
		cta: "Get Started",
		href: "#",
		ctaVariant: "secondary",
		featuresHeader: "Everything in Pro Plan plus:",
		features: [
			"5GB Cloud Storage",
			"Email and Chat Support",
			"Multi-User Access",
			"1 Custom Report Per Month",
			"Monthly Product Updates",
			"Standard Security Features",
			"Access to Advanced Templates",
			"Access to Community Forum",
			"Mobile App Access",
		],
	},
];

export const defaultWithEnterpriseTiers: [
	PricingTierItem,
	PricingTierItem,
	PricingTierItem,
] = [
	{
		name: "Free",
		description: "For developers trying out Astor for the first time",
		price: "$0",
		cta: "Get Started",
		href: "#",
		features: [
			"Basic Analytics Dashboard",
			"5GB Cloud Storage",
			"Email and Chat Support",
		],
	},
	{
		name: "Pro",
		description: "Ideal for developers who need more features and support",
		price: "$14",
		cta: "Get Started",
		href: "#",
		featured: true,
		featuresHeader: "Everything in Free Plan, plus:",
		features: [
			"5GB Cloud Storage",
			"Email and Chat Support",
			"Access to Community Forum",
			"Single User Access",
			"Access to Basic Templates",
			"Mobile App Access",
			"1 Custom Report Per Month",
			"Monthly Product Updates",
			"Standard Security Features",
		],
	},
	{
		name: "Startup",
		description: "For startups that need more advanced features and support.",
		price: "$37",
		cta: "Get Started",
		href: "#",
		featuresHeader: "Everything in Pro Plan, plus:",
		features: [
			"5GB Cloud Storage",
			"Email and Chat Support",
			"Multi-User Access",
			"1 Custom Report Per Month",
			"Monthly Product Updates",
			"Standard Security Features",
			"Access to Advanced Templates",
			"Access to Community Forum",
			"Mobile App Access",
		],
	},
];

export const defaultEnterprisePlan: EnterpriseDetails = {
	name: "Enterprise Custom Plan",
	description:
		"For large organizations with complex workflows and advanced reporting requirements.",
	cta: "Contact Sales",
	href: "#",
	features: [
		"1 Custom Report Per Month",
		"Standard Security Features",
		"Access to Advanced Templates",
		"Access to Community Forum",
		"Mobile App Access",
		"Custom Invoicing",
		"Custom User Roles",
		"Enhanced Reporting",
		"Priority Support",
	],
};

export const defaultSinglePlanFeatures = [
	"Team Collaboration",
	"Custom Templates",
	"24/7 Customer Support",
	"API Access",
	"White Labeling",
	"SSO Integration",
	"Dedicated Account Manager",
	"Custom Reporting",
];
