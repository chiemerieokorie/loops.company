import type { JobDepartment, JobPosting } from "./types";

export const defaultDepartments: JobDepartment[] = [
	{
		name: "Engineering",
		jobs: [
			{
				title: "AI Engineer",
				href: "ai-engineer",
				location: "San Francisco",
				type: "full",
			},
			{
				title: "Design Engineer",
				href: "design-engineer",
				location: "San Francisco",
				type: "full",
			},
			{
				title: "Product Engineer",
				href: "product-engineer",
				location: "Remote",
				type: "full",
			},
			{
				title: "Backend Engineer",
				href: "backend-engineer",
				location: "San Francisco",
				type: "full",
			},
			{
				title: "Software Engineer",
				href: "software-engineer",
				location: "New York",
				type: "full",
			},
		],
	},
	{
		name: "Marketing",
		jobs: [
			{
				title: "Marketing Manager",
				href: "marketing-manager",
				location: "New York",
				type: "full",
			},
			{
				title: "Content Strategist",
				href: "content-strategist",
				location: "Remote",
				type: "part",
			},
		],
	},
	{
		name: "Compliance",
		jobs: [
			{
				title: "Compliance Officer",
				href: "compliance-officer",
				location: "San Francisco",
				type: "full",
			},
			{
				title: "Regulatory Analyst",
				href: "regulatory-analyst",
				location: "New York",
				type: "full",
			},
		],
	},
	{
		name: "Data",
		jobs: [
			{
				title: "Data Scientist",
				href: "data-scientist",
				location: "Remote",
				type: "full",
			},
			{
				title: "Data Analyst",
				href: "data-analyst",
				location: "San Francisco",
				type: "full",
			},
		],
	},
	{
		name: "Finance",
		jobs: [
			{
				title: "Financial Analyst",
				href: "financial-analyst",
				location: "New York",
				type: "full",
			},
			{
				title: "Accountant",
				href: "accountant",
				location: "San Francisco",
				type: "part",
			},
		],
	},
];

export const defaultDepartmentsWithDescription: JobDepartment[] = [
	{
		name: "Engineering",
		jobs: [
			{
				title: "AI Engineer",
				href: "ai-engineer",
				location: "San Francisco",
				type: "full",
				description: "Build and deploy cutting-edge AI models and systems.",
			},
			{
				title: "Design Engineer",
				href: "design-engineer",
				location: "San Francisco",
				type: "full",
				description: "Bridge the gap between design and engineering.",
			},
			{
				title: "Product Engineer",
				href: "product-engineer",
				location: "Remote",
				type: "full",
				description: "Own features end-to-end from ideation to delivery.",
			},
			{
				title: "Backend Engineer",
				href: "backend-engineer",
				location: "San Francisco",
				type: "full",
				description: "Design and build scalable backend services.",
			},
			{
				title: "Software Engineer",
				href: "software-engineer",
				location: "New York",
				type: "full",
				description: "Develop high-quality software solutions.",
			},
		],
	},
	{
		name: "Marketing",
		jobs: [
			{
				title: "Marketing Manager",
				href: "marketing-manager",
				location: "New York",
				type: "full",
				description: "Lead marketing campaigns and brand strategy.",
			},
			{
				title: "Content Strategist",
				href: "content-strategist",
				location: "Remote",
				type: "part",
				description: "Create compelling content that drives engagement.",
			},
			{
				title: "Growth Marketer",
				href: "growth-marketer",
				location: "San Francisco",
				type: "full",
				description: "Drive user acquisition and retention strategies.",
			},
		],
	},
	{
		name: "Compliance",
		jobs: [
			{
				title: "Compliance Officer",
				href: "compliance-officer",
				location: "San Francisco",
				type: "full",
				description: "Ensure regulatory compliance across operations.",
			},
			{
				title: "Regulatory Analyst",
				href: "regulatory-analyst",
				location: "New York",
				type: "full",
				description: "Analyze and interpret regulatory requirements.",
			},
			{
				title: "Compliance Manager",
				href: "compliance-manager",
				location: "Remote",
				type: "full",
				description: "Oversee compliance programs and policies.",
			},
		],
	},
	{
		name: "Data",
		jobs: [
			{
				title: "Data Scientist",
				href: "data-scientist",
				location: "Remote",
				type: "full",
				description: "Extract insights from complex datasets.",
			},
			{
				title: "Data Analyst",
				href: "data-analyst",
				location: "San Francisco",
				type: "full",
				description: "Transform data into actionable business insights.",
			},
			{
				title: "Data Engineer",
				href: "data-engineer",
				location: "New York",
				type: "full",
				description: "Build and maintain data pipelines and infrastructure.",
			},
		],
	},
	{
		name: "Finance",
		jobs: [
			{
				title: "Financial Analyst",
				href: "financial-analyst",
				location: "New York",
				type: "full",
				description: "Provide financial analysis and forecasting.",
			},
			{
				title: "Accountant",
				href: "accountant",
				location: "San Francisco",
				type: "part",
				description: "Manage financial records and reporting.",
			},
			{
				title: "Finance Manager",
				href: "finance-manager",
				location: "Remote",
				type: "full",
				description: "Lead financial planning and strategy.",
			},
		],
	},
];

export const defaultDepartmentsGrouped: Array<{
	name: string;
	jobs: Array<{ title: string; href: string; location: string }>;
}> = [
	{
		name: "Engineering",
		jobs: [
			{ title: "AI Engineer", href: "ai-engineer", location: "San Francisco" },
			{
				title: "Design Engineer",
				href: "design-engineer",
				location: "San Francisco",
			},
			{
				title: "Product Engineer",
				href: "product-engineer",
				location: "Remote",
			},
			{
				title: "Backend Engineer",
				href: "backend-engineer",
				location: "San Francisco",
			},
			{
				title: "Software Engineer",
				href: "software-engineer",
				location: "New York",
			},
		],
	},
	{
		name: "Marketing",
		jobs: [
			{
				title: "Marketing Manager",
				href: "marketing-manager",
				location: "New York",
			},
			{
				title: "Content Strategist",
				href: "content-strategist",
				location: "Remote",
			},
		],
	},
	{
		name: "Compliance",
		jobs: [
			{
				title: "Compliance Officer",
				href: "compliance-officer",
				location: "San Francisco",
			},
			{
				title: "Regulatory Analyst",
				href: "regulatory-analyst",
				location: "New York",
			},
		],
	},
	{
		name: "Data",
		jobs: [
			{ title: "Data Scientist", href: "data-scientist", location: "Remote" },
			{
				title: "Data Analyst",
				href: "data-analyst",
				location: "San Francisco",
			},
		],
	},
	{
		name: "Finance",
		jobs: [
			{
				title: "Financial Analyst",
				href: "financial-analyst",
				location: "New York",
			},
			{ title: "Accountant", href: "accountant", location: "San Francisco" },
		],
	},
];

export const defaultJobs: JobPosting[] = [
	{
		title: "AI Engineer",
		href: "ai-engineer",
		location: "San Francisco",
		type: "full",
		department: "engineering",
	},
	{
		title: "Design Engineer",
		href: "design-engineer",
		location: "San Francisco",
		type: "full",
		department: "engineering",
	},
	{
		title: "Product Engineer",
		href: "product-engineer",
		location: "Remote",
		type: "full",
		department: "engineering",
	},
	{
		title: "Backend Engineer",
		href: "backend-engineer",
		location: "San Francisco",
		type: "full",
		department: "engineering",
	},
	{
		title: "Software Engineer",
		href: "software-engineer",
		location: "New York",
		type: "full",
		department: "engineering",
	},
	{
		title: "Marketing Manager",
		href: "marketing-manager",
		location: "New York",
		type: "full",
		department: "marketing",
	},
	{
		title: "Content Strategist",
		href: "content-strategist",
		location: "Remote",
		type: "part",
		department: "marketing",
	},
	{
		title: "Compliance Officer",
		href: "compliance-officer",
		location: "San Francisco",
		type: "full",
		department: "compliance",
	},
	{
		title: "Regulatory Analyst",
		href: "regulatory-analyst",
		location: "New York",
		type: "full",
		department: "compliance",
	},
	{
		title: "Data Scientist",
		href: "data-scientist",
		location: "Remote",
		type: "full",
		department: "data",
	},
	{
		title: "Data Analyst",
		href: "data-analyst",
		location: "San Francisco",
		type: "full",
		department: "data",
	},
	{
		title: "Financial Analyst",
		href: "financial-analyst",
		location: "New York",
		type: "full",
		department: "finance",
	},
	{
		title: "Accountant",
		href: "accountant",
		location: "San Francisco",
		type: "part",
		department: "finance",
	},
];
