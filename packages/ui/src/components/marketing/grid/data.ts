/** Shared default data arrays for marketing grid components. */

export interface AccountMenuItem {
	name: string;
}

export const defaultAccounts: AccountMenuItem[] = [
	{ name: "Méschac Irung" },
	{ name: "Bernard Ng" },
	{ name: "Theo Ng" },
	{ name: "Glodie Ng" },
];

export type FeatureIconType = "zap" | "cpu" | "lock" | "sparkles";

export interface FeatureItem {
	description: string;
	icon: FeatureIconType;
	title: string;
}

export const defaultFeatureItems: FeatureItem[] = [
	{
		icon: "zap",
		title: "Faaast",
		description: "It supports an entire ecosystem helping developers innovate.",
	},
	{
		icon: "cpu",
		title: "Powerful",
		description:
			"It supports an entire ecosystem helping developers and businesses.",
	},
	{
		icon: "lock",
		title: "Security",
		description:
			"Enterprise-grade security helping developers businesses innovate.",
	},
	{
		icon: "sparkles",
		title: "AI Powered",
		description: "Helping developers and businesses innovate at scale.",
	},
];

/** Variant with shorter descriptions (used in account-menu and split-dark-menu). */
export const defaultFeatureItemsShort: FeatureItem[] = [
	{
		icon: "zap",
		title: "Faaast",
		description: "It supports an entire helping developers and innovate.",
	},
	{
		icon: "cpu",
		title: "Powerful",
		description: "It supports an entire helping developers and businesses.",
	},
	{
		icon: "lock",
		title: "Security",
		description: "An helping developers businesses innovate.",
	},
	{
		icon: "sparkles",
		title: "AI Powered",
		description: "Helping developers businesses innovate.",
	},
];

export type CodeWindowIconType = "clock" | "zap" | "calendar";

export interface CodeWindowItem {
	description: string;
	icon: CodeWindowIconType;
	title: string;
}

export const defaultCodeWindowItems: CodeWindowItem[] = [
	{
		icon: "clock",
		title: "Speed Is Everything",
		description:
			"Astor is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.",
	},
	{
		icon: "zap",
		title: "Speed Is Everything",
		description:
			"Astor is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.",
	},
	{
		icon: "calendar",
		title: "Speed Is Everything",
		description:
			"Astor is a fast and efficient AI-powered code editor that can help you write code faster and more efficiently.",
	},
];

export interface CustomerRow {
	amount: string;
	date: string;
	id: number;
	name: string;
	status: "Paid" | "Ref" | "Cancelled";
}

export const defaultCustomers: CustomerRow[] = [
	{
		id: 1,
		date: "10/31/2023",
		status: "Paid",
		name: "Bernard Ng",
		amount: "$43.99",
	},
	{
		id: 2,
		date: "10/21/2023",
		status: "Ref",
		name: "Méschac Irung",
		amount: "$19.99",
	},
	{
		id: 3,
		date: "10/15/2023",
		status: "Paid",
		name: "Glodie Ng",
		amount: "$99.99",
	},
	{
		id: 4,
		date: "10/12/2023",
		status: "Cancelled",
		name: "Theo Ng",
		amount: "$19.99",
	},
];

export const statusStyles: Record<string, string> = {
	Paid: "bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 inset-ring-1 inset-ring-foreground/10",
	Ref: "bg-amber-500/10 text-amber-800 dark:text-amber-200 inset-ring-1 inset-ring-foreground/10",
	Cancelled:
		"bg-rose-500/10 text-rose-800 dark:text-rose-200 inset-ring-1 inset-ring-foreground/10",
};
