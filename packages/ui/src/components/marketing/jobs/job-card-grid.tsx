import { ArrowUpRight } from "lucide-react";
import { defaultDepartmentsWithDescription } from "./data";
import type { JobDepartment } from "./types";

export interface JobCardGridProps {
	departments?: JobDepartment[];
	heading?: string;
}

export function JobCardGrid({
	heading = "Open Positions",
	departments = defaultDepartmentsWithDescription,
}: JobCardGridProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-12 px-2">
				<h2 className="text-balance px-4 font-semibold text-4xl">{heading}</h2>
				<div className="space-y-12">
					{departments.map((dept) => (
						<div className="space-y-3" key={dept.name}>
							<h3 className="px-4 text-muted-foreground text-sm capitalize">
								{dept.name}
							</h3>
							<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
								{dept.jobs.map((job) => (
									<div
										className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl bg-card p-6 shadow shadow-black/[0.04] ring-1 ring-border hover:shadow-black/[0.065]"
										key={job.href}
									>
										<div className="space-y-2">
											<h3 className="font-medium text-lg group-hover:text-primary">
												<a
													className="after:absolute after:inset-0"
													href={job.href}
												>
													{job.title}
												</a>
											</h3>
											<p className="text-muted-foreground text-sm">
												{job.description}
											</p>
										</div>
										<div className="flex items-end justify-between">
											<div className="text-muted-foreground text-sm">
												<span>{job.location}</span>
												<span className="mx-2">&middot;</span>
												<span className="capitalize">{job.type}-time</span>
											</div>
											<ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
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
