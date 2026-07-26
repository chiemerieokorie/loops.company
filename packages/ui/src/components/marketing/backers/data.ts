import type { InvestorPerson } from "./types";

export interface AngelInvestor {
	avatarUrl: string;
	name: string;
}

export const defaultIndividuals: InvestorPerson[] = [
	{
		name: "Shadcn",
		role: "Creator, Shadcn UI",
		avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
	},
	{
		name: "Guillermo Rauch",
		role: "Founder, CEO - Vercel",
		avatarUrl: "https://avatars.githubusercontent.com/u/13041?v=4",
	},
	{
		name: "Adam Wathan",
		role: "CEO - Tailwind Labs",
		avatarUrl: "https://avatars.githubusercontent.com/u/4323180?v=4",
	},
	{
		name: "Lee Robinson",
		role: "VP of Developer Education - Cursor",
		avatarUrl: "https://avatars.githubusercontent.com/u/9113740?v=4",
	},
	{
		name: "Tobias Lütke",
		role: "Founder, Shopify",
		avatarUrl: "https://avatars.githubusercontent.com/u/347?v=4",
	},
	{
		name: "Brandon Eich",
		role: "Founder, Brave Browser",
		avatarUrl: "https://avatars.githubusercontent.com/u/313317?v=4",
	},
	{
		name: "Thomas Paul Mann",
		role: "Co-Founder, Raycast",
		avatarUrl: "https://avatars.githubusercontent.com/u/12066405?v=4",
	},
	{
		name: "Paul Copplestone",
		role: "Co-Founder, Supabase",
		avatarUrl: "https://avatars.githubusercontent.com/u/10214025?v=4",
	},
	{
		name: "Dylan Field",
		role: "Founder, CEO - Figma",
		avatarUrl: "https://avatars.githubusercontent.com/u/159643?v=4",
	},
];

export const defaultAngels: AngelInvestor[] = [
	{
		name: "Shadcn",
		avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
	},
	{
		name: "Guillermo Rauch",
		avatarUrl: "https://avatars.githubusercontent.com/u/13041?v=4",
	},
	{
		name: "Adam Wathan",
		avatarUrl: "https://avatars.githubusercontent.com/u/4323180?v=4",
	},
	{
		name: "Lee Robinson",
		avatarUrl: "https://avatars.githubusercontent.com/u/9113740?v=4",
	},
	{
		name: "Tobias Lütke",
		avatarUrl: "https://avatars.githubusercontent.com/u/347?v=4",
	},
	{
		name: "Brandon Eich",
		avatarUrl: "https://avatars.githubusercontent.com/u/313317?v=4",
	},
	{
		name: "Thomas Paul Mann",
		avatarUrl: "https://avatars.githubusercontent.com/u/12066405?v=4",
	},
	{
		name: "Paul Copplestone",
		avatarUrl: "https://avatars.githubusercontent.com/u/10214025?v=4",
	},
];
