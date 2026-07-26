import type { BlogCategory, BlogListPost, BlogPost } from "./types";

export const defaultCategories: BlogCategory[] = [
	{ label: "all", value: "all" },
	{ label: "company", value: "company" },
	{ label: "marketing", value: "marketing" },
	{ label: "newsroom", value: "newsroom" },
	{ label: "partners", value: "partners", disabled: true },
	{ label: "engineering", value: "engineering", disabled: true },
	{ label: "press", value: "press", disabled: true },
];

// blog-grid featured posts
export const defaultGridFeaturedPosts: BlogPost[] = [
	{
		title: "Embracing Remote Work Culture",
		excerpt:
			"Uncover the benefits and challenges of adopting a remote work culture in modern businesses.",
		date: "Aug 18, 2025",
		dateIso: "2025-08-18T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/time_djv8te.webp",
		href: "#",
		authors: [
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "The Transformative Future of AI in Digital Marketing",
		excerpt:
			"Explore the potential of AI to revolutionize marketing strategies and customer engagement.",
		date: "Sep 10, 2025",
		dateIso: "2025-09-10T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/article-2_rey9it.png",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "Cutting-Edge Innovations in Data Analytics",
		excerpt:
			"Learn about the latest trends in data analytics and how they can drive business growth.",
		date: "Oct 5, 2025",
		dateIso: "2025-10-05T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/dots-pattern_yfnqcy.jpg",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
];

// blog-grid more posts
export const defaultGridMorePosts: BlogPost[] = [
	{
		title: "Advancements in Cybersecurity",
		excerpt:
			"Discover new technologies protecting businesses from digital threats.",
		date: "Oct 15, 2025",
		dateIso: "2025-10-15T00:00:00.000Z",
		imageUrl: "",
		href: "#",
		authors: [
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "The Role of Blockchain in Modern Finance",
		excerpt: "Understand how blockchain is reshaping the financial landscape.",
		date: "Nov 1, 2025",
		dateIso: "2025-11-01T00:00:00.000Z",
		imageUrl: "",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
		],
	},
	{
		title: "Sustainability in Tech: A Growing Focus",
		excerpt: "Explore efforts towards sustainable practices in technology.",
		date: "Nov 10, 2025",
		dateIso: "2025-11-10T00:00:00.000Z",
		imageUrl: "",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
		],
	},
	{
		title: "Leveraging Big Data for Business Success",
		excerpt: "See how big data analytics can unlock new opportunities.",
		date: "Dec 5, 2025",
		dateIso: "2025-12-05T00:00:00.000Z",
		imageUrl: "",
		href: "#",
		authors: [
			{
				name: "Bernard Ngandu",
				avatarUrl: "https://avatars.githubusercontent.com/u/31113941?v=4",
			},
		],
	},
	{
		title: "Leveraging Big Data for Business Success",
		excerpt: "See how big data analytics can unlock new opportunities.",
		date: "Dec 5, 2025",
		dateIso: "2025-12-05T00:00:00.000Z",
		imageUrl: "",
		href: "#",
		authors: [
			{
				name: "Glodie Lukose",
				avatarUrl: "https://avatars.githubusercontent.com/u/99137927?v=4",
			},
		],
	},
	{
		title: "Leveraging Big Data for Business Success",
		excerpt:
			"See how big data analytics can unlock new opportunities insights and more from.",
		date: "Dec 5, 2025",
		dateIso: "2025-12-05T00:00:00.000Z",
		imageUrl: "",
		href: "#",
		authors: [
			{
				name: "Bernard Ngandu",
				avatarUrl: "https://avatars.githubusercontent.com/u/31113941?v=4",
			},
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
		],
	},
];

// blog-horizontal-cards featured posts
export const defaultHorizontalFeaturedPosts: BlogPost[] = [
	{
		title: "Embracing Remote Work Culture",
		excerpt:
			"Explore the transformative shift towards remote work and how it has reshaped business operations globally. Discover strategies for effective communication, collaboration, and productivity in a remote work environment.",
		date: "Aug 18, 2025",
		dateIso: "2025-08-18T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-2_cazz7h.png",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title:
			"The Top Industries and Business Models Using AI for Fraud Prevention and Detection",
		excerpt:
			"Discover how various industries leverage AI tools to enhance fraud prevention and detection. Gain insights into the leading sectors and business models adopting AI technologies and learn about the effectiveness of these approaches.",
		date: "Sep 10, 2025",
		dateIso: "2025-09-10T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-1_roo7z2.png",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
];

// blog-horizontal-cards more posts
export const defaultHorizontalMorePosts: BlogPost[] = [
	{
		title: "Cutting-Edge Innovations in Data Analytics",
		excerpt:
			"Learn about the latest trends in data analytics and how they can drive business growth.",
		date: "Oct 5, 2025",
		dateIso: "2025-10-05T00:00:00.000Z",
		imageUrl: "",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "Advancements in Cybersecurity Technologies",
		excerpt:
			"Discover new technologies protecting businesses from digital threats.",
		date: "Oct 15, 2025",
		dateIso: "2025-10-15T00:00:00.000Z",
		imageUrl: "",
		href: "#",
		authors: [
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "The Role of Blockchain in Modern Finance",
		excerpt: "Understand how blockchain is reshaping the financial landscape.",
		date: "Nov 1, 2025",
		dateIso: "2025-11-01T00:00:00.000Z",
		imageUrl: "",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
		],
	},
];

// blog-image-cards featured posts
export const defaultImageFeaturedPosts: BlogPost[] = [
	{
		title:
			"Embracing Remote Work Culture: Strategies for Success in a Distributed Workforce",
		excerpt:
			"Explore the transformative shift towards remote work and how it has reshaped business operations globally.",
		date: "Aug 18, 2025",
		dateIso: "2025-08-18T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-2_cazz7h.png",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title:
			"The Top Industries and Business Models Using AI for Fraud Prevention and Detection",
		excerpt:
			"Discover how various industries leverage AI tools to enhance fraud prevention and detection.",
		date: "Sep 10, 2025",
		dateIso: "2025-09-10T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-1_roo7z2.png",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
];

// blog-image-cards more posts
export const defaultImageMorePosts: BlogPost[] = [
	{
		title: "Cutting-Edge Innovations in Data Analytics",
		excerpt:
			"Learn about the latest trends in data analytics and how they can drive business growth.",
		date: "Oct 5, 2025",
		dateIso: "2025-10-05T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/dots-pattern_yfnqcy.jpg",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "Advancements in Cybersecurity Technologies",
		excerpt:
			"Discover new technologies protecting businesses from digital threats.",
		date: "Oct 15, 2025",
		dateIso: "2025-10-15T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/article-2_rey9it.png",
		href: "#",
		authors: [
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "The Role of Blockchain in Modern Finance",
		excerpt: "Understand how blockchain is reshaping the financial landscape.",
		date: "Nov 1, 2025",
		dateIso: "2025-11-01T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/dots-2_kmiukp.webp",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
		],
	},
];

// blog-list posts
export const defaultListPosts: BlogListPost[] = [
	{
		title: "Embracing Remote Work Culture",
		date: "Aug 18, 2025",
		dateIso: "2025-08-18T00:00:00.000Z",
		category: "company",
		href: "#",
		authors: [
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "The Transformative Future of AI in Digital Marketing",
		date: "Sep 10, 2025",
		dateIso: "2025-09-10T00:00:00.000Z",
		category: "marketing",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "Cutting-Edge Innovations in Data Analytics",
		date: "Oct 5, 2025",
		dateIso: "2025-10-05T00:00:00.000Z",
		category: "company",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "Advancements in Cybersecurity",
		date: "Oct 15, 2025",
		dateIso: "2025-10-15T00:00:00.000Z",
		category: "company",
		href: "#",
		authors: [
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "The Role of Blockchain in Modern Finance",
		date: "Nov 1, 2025",
		dateIso: "2025-11-01T00:00:00.000Z",
		category: "marketing",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
		],
	},
	{
		title: "Sustainability in Tech: A Growing Focus",
		date: "Nov 10, 2025",
		dateIso: "2025-11-10T00:00:00.000Z",
		category: "marketing",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
		],
	},
	{
		title: "Leveraging Big Data for Business Success",
		date: "Dec 5, 2025",
		dateIso: "2025-12-05T00:00:00.000Z",
		category: "newsroom",
		href: "#",
		authors: [
			{
				name: "Bernard Ngandu",
				avatarUrl: "https://avatars.githubusercontent.com/u/31113941?v=4",
			},
		],
	},
];

// blog-sidebar-nav posts
export const defaultSidebarPosts: BlogPost[] = [
	{
		title:
			"Embracing Remote Work Culture: Strategies for Success in a Distributed Workforce",
		excerpt:
			"Explore the transformative shift towards remote work and how it has reshaped business operations globally.",
		date: "Aug 18, 2025",
		dateIso: "2025-08-18T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-1_roo7z2.png",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title:
			"The Top Industries and Business Models Using AI for Fraud Prevention and Detection",
		excerpt:
			"Discover how various industries leverage AI tools to enhance fraud prevention and detection.",
		date: "Sep 10, 2025",
		dateIso: "2025-09-10T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-2_cazz7h.png",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "Cutting-Edge Innovations in Data Analytics",
		excerpt:
			"Learn about the latest trends in data analytics and how they can drive business growth.",
		date: "Oct 5, 2025",
		dateIso: "2025-10-05T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-4_lojema.jpg",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "Advancements in Cybersecurity Technologies",
		excerpt:
			"Discover new technologies protecting businesses from digital threats.",
		date: "Oct 15, 2025",
		dateIso: "2025-10-15T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-5_gpo4j1.png",
		href: "#",
		authors: [
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
];

// blog-split-hero hero post
export const defaultHeroPost: BlogPost = {
	title:
		"Embracing Remote Work Culture: Strategies for Success in a Distributed Workforce",
	excerpt:
		"Explore the transformative shift towards remote work and how it has reshaped business operations globally.",
	date: "Aug 18, 2025",
	dateIso: "2025-08-18T00:00:00.000Z",
	imageUrl:
		"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-1_roo7z2.png",
	href: "#",
	authors: [
		{
			name: "Shadcn",
			avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
		},
		{
			name: "Meschac Irung",
			avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
		},
	],
};

// blog-split-hero more posts
export const defaultSplitMorePosts: BlogPost[] = [
	{
		title:
			"The Top Industries and Business Models Using AI for Fraud Prevention and Detection",
		excerpt:
			"Discover how various industries leverage AI tools to enhance fraud prevention and detection.",
		date: "Sep 10, 2025",
		dateIso: "2025-09-10T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-2_cazz7h.png",
		href: "#",
		authors: [
			{
				name: "Theo Balick",
				avatarUrl: "https://avatars.githubusercontent.com/u/68236786?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "Cutting-Edge Innovations in Data Analytics",
		excerpt:
			"Learn about the latest trends in data analytics and how they can drive business growth.",
		date: "Oct 5, 2025",
		dateIso: "2025-10-05T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-4_lojema.jpg",
		href: "#",
		authors: [
			{
				name: "Shadcn",
				avatarUrl: "https://avatars.githubusercontent.com/u/124599?v=4",
			},
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
	{
		title: "Advancements in Cybersecurity Technologies",
		excerpt:
			"Discover new technologies protecting businesses from digital threats.",
		date: "Oct 15, 2025",
		dateIso: "2025-10-15T00:00:00.000Z",
		imageUrl:
			"https://raw.githubusercontent.com/Astor/assets/refs/heads/main/blog-5_gpo4j1.png",
		href: "#",
		authors: [
			{
				name: "Meschac Irung",
				avatarUrl: "https://avatars.githubusercontent.com/u/47919550?v=4",
			},
		],
	},
];
