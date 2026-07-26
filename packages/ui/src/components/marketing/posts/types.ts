export interface BlogAuthor {
	avatarUrl: string;
	name: string;
}

export interface BlogPost {
	authors: BlogAuthor[];
	date: string;
	dateIso: string;
	excerpt: string;
	href: string;
	imageUrl: string;
	title: string;
}

export interface BlogCategory {
	disabled?: boolean;
	label: string;
	value: string;
}

export interface BlogListPost {
	authors: BlogAuthor[];
	category: string;
	date: string;
	dateIso: string;
	href: string;
	title: string;
}
