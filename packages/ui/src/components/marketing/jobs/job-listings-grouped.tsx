import { ArrowRight } from "lucide-react";

import { defaultDepartmentsGrouped } from "./data";

interface JobPosting {
	href: string;
	location: string;
	title: string;
}

interface JobDepartment {
	jobs: JobPosting[];
	name: string;
}

export interface JobListingsGroupedProps {
	departments?: JobDepartment[];
	description?: string;
	heading?: string;
}

function ArrowRightLearnMore() {
	return (
		<div className="ml-auto flex h-7 items-center gap-1.5 rounded-full border border-transparent pr-2 pl-3 group-hover:border-border-illustration group-hover:bg-foreground/[0.065]">
			<span className="font-medium text-xs not-group-hover:opacity-0 duration-100">
				Learn More
			</span>
			<ArrowRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
		</div>
	);
}

export function JobListingsGrouped({
	heading = "Open Roles",
	description = "Join our team and help shape the future. Browse our current openings and find the perfect opportunity to grow your career with us.",
	departments = defaultDepartmentsGrouped,
}: JobListingsGroupedProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-12 px-2">
				<div className="max-w-xl px-4">
					<h2 className="text-balance font-semibold text-4xl">{heading}</h2>
					<p className="mt-4 text-balance text-muted-foreground">
						{description}
					</p>
				</div>
				<div className="space-y-8">
					{departments.map((dept) => (
						<div
							className="overflow-hidden rounded-2xl bg-foreground/5 p-1"
							key={dept.name}
						>
							<div className="px-4 py-3">
								<h3 className="font-medium text-muted-foreground text-xs uppercase">
									{dept.name}
								</h3>
							</div>
							<div className="overflow-hidden rounded-xl bg-card shadow-black/[0.065] shadow-md ring-1 ring-border">
								{dept.jobs.map((job) => (
									<div
										className="group not-last:border-b not-last:border-dashed"
										key={job.href}
									>
										<div className="relative flex flex-wrap items-center gap-1 gap-x-2 px-4 py-3 hover:bg-foreground/[0.02]">
											<a
												className="font-medium after:absolute after:inset-0 max-md:w-full"
												href={job.href}
											>
												{job.title}
											</a>
											<span className="size-0.5 rounded-full bg-foreground/35 max-md:hidden" />
											<span className="text-muted-foreground text-sm">
												{job.location}
											</span>
											<ArrowRightLearnMore />
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
