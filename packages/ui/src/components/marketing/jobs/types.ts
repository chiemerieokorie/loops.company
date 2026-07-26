export interface JobPosting {
	department?: string;
	description?: string;
	href: string;
	location: string;
	title: string;
	type: string;
}

export interface JobDepartment {
	jobs: JobPosting[];
	name: string;
}
