export interface SocialLink {
	href: string;
	icon: "x" | "linkedin";
	label: string;
}

export interface TeamMember {
	glowFrom?: string;
	glowTo?: string;
	glowVia?: string;
	image: string;
	name: string;
	role: string;
	socials?: SocialLink[];
}

export interface TeamStat {
	label: string;
	value: string;
}

export interface CulturePhoto {
	alt: string;
	caption: string;
	rotation?: string;
	src: string;
}

export interface TimelineEvent {
	description: string;
	quarter: string;
	title: string;
}

export interface TimelineMilestone {
	description: string;
	image: string;
	imageAlt: string;
	imageCaption: string;
	isLast?: boolean;
	label: string;
	rotation?: string;
}
