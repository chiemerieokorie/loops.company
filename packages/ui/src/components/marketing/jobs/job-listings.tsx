import { ArrowRight } from "lucide-react";
import { defaultDepartments } from "./data";
import type { JobDepartment } from "./types";

export interface JobListingsProps {
	departments?: JobDepartment[];
	heading?: string;
}

export function JobListings({
	heading = "Open Roles",
	departments = defaultDepartments,
}: JobListingsProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-2">
				<div className="flex flex-col gap-12">
					<h2 className="text-balance px-4 font-semibold text-4xl">
						{heading}
					</h2>
					<div>
						{departments.map((dept) => (
							<div className="mb-12" key={dept.name}>
								<h3 className="mb-4 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">
									{dept.name}
								</h3>
								{dept.jobs.map((job) => (
									<div className="group space-y-0.5 pb-0.5" key={job.href}>
										<div className="relative grid gap-1 overflow-hidden rounded-xl p-4 hover:bg-foreground/5 md:grid-cols-2">
											<a
												className="font-medium after:absolute after:inset-0"
												href={job.href}
											>
												{job.title}
											</a>
											<div className="flex items-center">
												<div>
													<span className="text-muted-foreground">
														{job.location}
													</span>{" "}
													<span className="text-muted-foreground">
														<span className="capitalize">{job.type}</span>-time
													</span>
												</div>
												<ArrowRight className="ml-auto size-4 not-group-hover:opacity-50" />
											</div>
										</div>
										<div
											aria-hidden="true"
											className="mx-4 h-px bg-[length:4px_1px] bg-repeat-x opacity-20 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)]"
										/>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
