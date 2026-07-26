import type {
	CulturePhoto,
	TeamMember,
	TeamStat,
	TimelineEvent,
	TimelineMilestone,
} from "./types";

// team-culture-polaroids
export const defaultPolaroidsStats: TeamStat[] = [
	{ value: "42", label: "Team members" },
	{ value: "12", label: "Countries" },
	{ value: "4", label: "Offices" },
];

export const defaultPhotos: CulturePhoto[] = [
	{
		src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop",
		alt: "Team brainstorming session",
		caption: "Strategy offsite - Austin 2024",
		rotation: "-rotate-6",
	},
	{
		src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340&auto=format&fit=crop",
		alt: "Team collaboration",
		caption: "Product launch day - NYC 2024",
		rotation: "-rotate-4",
	},
	{
		src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop",
		alt: "Team workshop",
		caption: "Design sprint - London 2023",
		rotation: "",
	},
	{
		src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop",
		alt: "Team celebration",
		caption: "Annual retreat - Tokyo 2024",
		rotation: "rotate-6",
	},
];

// team-culture-split
export const defaultSplitStats: TeamStat[] = [
	{ value: "80+", label: "Team members worldwide collaborating daily" },
	{ value: "15", label: "Countries represented across the globe" },
];

// team-culture-stacked
export const defaultStackedStats: TeamStat[] = [
	{ value: "42", label: "Team members" },
	{ value: "12", label: "Countries" },
	{ value: "4", label: "Offices" },
];

// team-culture-stats
export const defaultCultureStats: TeamStat[] = [
	{ value: "156", label: "Features shipped" },
	{ value: "24", label: "Team members" },
	{ value: "8", label: "Time zones" },
	{ value: "∞", label: "Coffee consumed" },
];

// team-culture-timeline-photos
export const defaultEvents: TimelineEvent[] = [
	{
		quarter: "Q1",
		title: "Winter Hackathon",
		description: "48 hours of building, coding, and creating together",
	},
	{
		quarter: "Q2",
		title: "Spring Retreat",
		description: "Team bonding and strategy sessions in Lisbon",
	},
	{
		quarter: "Q3",
		title: "Product Launch",
		description: "Shipped our biggest release with 50+ new features",
	},
	{
		quarter: "Q4",
		title: "Holiday Party",
		description: "Celebrating another successful year with the team",
	},
];

// team-grid-avatars
export const defaultAvatarMembers: TeamMember[] = [
	{
		name: "Sarah Mitchell",
		role: "Co-Founder, CEO",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
	},
	{
		name: "Marcus Chen",
		role: "Co-Founder, CTO",
		image:
			"https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "David Thompson",
		role: "Chief Operating Officer",
		image:
			"https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=944&auto=format&fit=crop",
	},
	{
		name: "James Rodriguez",
		role: "VP of Engineering",
		image:
			"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop",
	},
	{
		name: "Emily Watson",
		role: "Head of Product",
		image:
			"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "Rachel Kim",
		role: "Chief Marketing Officer",
		image:
			"https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2088&auto=format&fit=crop",
	},
	{
		name: "Michael Foster",
		role: "Chief Financial Officer",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
	},
	{
		name: "Amanda Patel",
		role: "Head of Design",
		image:
			"https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1287&auto=format&fit=crop",
	},
];

// team-grid-cards
export const defaultCardMembers: TeamMember[] = [
	{
		name: "Alexander Chee",
		role: "Co-Founder, CEO",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
		glowFrom: "purple-400",
		glowVia: "blue-400",
		glowTo: "amber-500",
	},
	{
		name: "Sarah Johnson",
		role: "Co-Founder, CTO",
		image:
			"https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop",
		glowFrom: "purple-400",
		glowVia: "sky-400",
		glowTo: "emerald-500",
	},
	{
		name: "Michael Chen",
		role: "Head of Engineering",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1364&auto=format&fit=crop",
		glowFrom: "rose-400",
		glowVia: "orange-400",
		glowTo: "yellow-500",
	},
	{
		name: "Emily Rodriguez",
		role: "Head of Design",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1364&auto=format&fit=crop",
		glowFrom: "teal-400",
		glowVia: "cyan-400",
		glowTo: "blue-500",
	},
	{
		name: "David Kim",
		role: "Head of Product",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1364&auto=format&fit=crop",
		glowFrom: "indigo-400",
		glowVia: "violet-400",
		glowTo: "pink-500",
	},
	{
		name: "Lisa Wang",
		role: "Head of Marketing",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1364&auto=format&fit=crop",
		glowFrom: "green-400",
		glowVia: "emerald-400",
		glowTo: "teal-500",
	},
];

// team-grid-compact
export const defaultCompactMembers: TeamMember[] = [
	{
		name: "Sarah Mitchell",
		role: "Co-Founder, CEO",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
	},
	{
		name: "Marcus Chen",
		role: "Co-Founder, CTO",
		image:
			"https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "James Rodriguez",
		role: "VP of Engineering",
		image:
			"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop",
	},
	{
		name: "Emily Watson",
		role: "Head of Product",
		image:
			"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "Rachel Kim",
		role: "Chief Marketing Officer",
		image:
			"https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2088&auto=format&fit=crop",
	},
	{
		name: "Michael Foster",
		role: "Chief Financial Officer",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
	},
	{
		name: "Amanda Patel",
		role: "Head of Design",
		image:
			"https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1287&auto=format&fit=crop",
	},
	{
		name: "David Thompson",
		role: "Chief Operating Officer",
		image:
			"https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=944&auto=format&fit=crop",
	},
];

// team-grid-minimal
export const defaultMinimalMembers: TeamMember[] = [
	{
		name: "Alexander Chee",
		role: "Co-Founder, CEO",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
	},
	{
		name: "Sarah Johnson",
		role: "Co-Founder, CTO",
		image:
			"https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "Michael Chen",
		role: "Head of Engineering",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "Emily Rodriguez",
		role: "Head of Design",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "David Kim",
		role: "Head of Product",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "Lisa Wang",
		role: "Head of Marketing",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1364&auto=format&fit=crop",
	},
];

// team-grid-overlay
export const defaultOverlayMembers: TeamMember[] = [
	{
		name: "Sarah Mitchell",
		role: "Co-Founder, CEO",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
	},
	{
		name: "Marcus Chen",
		role: "Co-Founder, CTO",
		image:
			"https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "David Thompson",
		role: "Chief Operating Officer",
		image:
			"https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=944&auto=format&fit=crop",
	},
	{
		name: "Emily Watson",
		role: "Head of Product",
		image:
			"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "James Rodriguez",
		role: "VP of Engineering",
		image:
			"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop",
	},
	{
		name: "Rachel Kim",
		role: "Chief Marketing Officer",
		image:
			"https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2088&auto=format&fit=crop",
	},
	{
		name: "Michael Foster",
		role: "Chief Financial Officer",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
	},
	{
		name: "Amanda Patel",
		role: "Head of Design",
		image:
			"https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1287&auto=format&fit=crop",
	},
];

// team-grid-social
export const defaultSocialMembers: TeamMember[] = [
	{
		name: "Sarah Mitchell",
		role: "Co-Founder, CEO",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
		socials: [
			{ label: "Twitter", href: "#", icon: "x" },
			{ label: "LinkedIn", href: "#", icon: "linkedin" },
		],
	},
	{
		name: "Marcus Chen",
		role: "Co-Founder, CTO",
		image:
			"https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop",
		socials: [
			{ label: "Twitter", href: "#", icon: "x" },
			{ label: "LinkedIn", href: "#", icon: "linkedin" },
		],
	},
	{
		name: "David Thompson",
		role: "Chief Operating Officer",
		image:
			"https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=944&auto=format&fit=crop",
		socials: [
			{ label: "Twitter", href: "#", icon: "x" },
			{ label: "LinkedIn", href: "#", icon: "linkedin" },
		],
	},
	{
		name: "James Rodriguez",
		role: "VP of Engineering",
		image:
			"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop",
		socials: [
			{ label: "Twitter", href: "#", icon: "x" },
			{ label: "LinkedIn", href: "#", icon: "linkedin" },
		],
	},
	{
		name: "Emily Watson",
		role: "Head of Product",
		image:
			"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop",
		socials: [
			{ label: "Twitter", href: "#", icon: "x" },
			{ label: "LinkedIn", href: "#", icon: "linkedin" },
		],
	},
	{
		name: "Rachel Kim",
		role: "Chief Marketing Officer",
		image:
			"https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2088&auto=format&fit=crop",
		socials: [
			{ label: "Twitter", href: "#", icon: "x" },
			{ label: "LinkedIn", href: "#", icon: "linkedin" },
		],
	},
	{
		name: "Michael Foster",
		role: "Chief Financial Officer",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
		socials: [
			{ label: "Twitter", href: "#", icon: "x" },
			{ label: "LinkedIn", href: "#", icon: "linkedin" },
		],
	},
	{
		name: "Amanda Patel",
		role: "Head of Design",
		image:
			"https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1287&auto=format&fit=crop",
		socials: [
			{ label: "Twitter", href: "#", icon: "x" },
			{ label: "LinkedIn", href: "#", icon: "linkedin" },
		],
	},
];

// team-grid-split
export const defaultSplitMembers: TeamMember[] = [
	{
		name: "Sarah Mitchell",
		role: "Co-Founder, CEO",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
	},
	{
		name: "Marcus Chen",
		role: "Co-Founder, CTO",
		image:
			"https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "David Thompson",
		role: "Chief Operating Officer",
		image:
			"https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=944&auto=format&fit=crop",
	},
	{
		name: "James Rodriguez",
		role: "VP of Engineering",
		image:
			"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop",
	},
	{
		name: "Emily Watson",
		role: "Head of Product",
		image:
			"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop",
	},
	{
		name: "Rachel Kim",
		role: "Chief Marketing Officer",
		image:
			"https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2088&auto=format&fit=crop",
	},
	{
		name: "Michael Foster",
		role: "Chief Financial Officer",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
	},
	{
		name: "Amanda Patel",
		role: "Head of Design",
		image:
			"https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1287&auto=format&fit=crop",
	},
];

// team-timeline
export const defaultMilestones: TimelineMilestone[] = [
	{
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop",
		imageAlt: "Early days",
		imageCaption: "Where it all began - 2021",
		label: "The beginning",
		description: "Three founders, one vision, and a cramped garage office.",
		rotation: "-rotate-6",
	},
	{
		image:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop",
		imageAlt: "First office",
		imageCaption: "First real office - 2022",
		label: "Growing pains",
		description: "Moved to our first office. Team grew to 15.",
		rotation: "rotate-6",
	},
	{
		image:
			"https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop",
		imageAlt: "Today",
		imageCaption: "Global team - 2024",
		label: "Today",
		description: "50+ team members across 12 countries.",
		rotation: "-rotate-3",
		isLast: true,
	},
];
