import { ArrowRight } from "lucide-react";
import { defaultDepartments } from "./data";
import type { JobDepartment } from "./types";

export interface JobListingsSplitProps {
	departments?: JobDepartment[];
	description?: string;
	heading?: string;
}

function CornerMark({ className }: { className: string }) {
	return (
		<div
			aria-hidden="true"
			className={`mask-radial-from-15% absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25 ${className}`}
		/>
	);
}

function ArrowRightPill() {
	return (
		<div className="ml-auto flex h-6 items-center rounded-full bg-card px-2 shadow shadow-black/[0.065] ring-1 ring-border-illustration">
			<ArrowRight className="size-3.5 not-group-hover:opacity-50 group-hover:text-primary" />
		</div>
	);
}

export function JobListingsSplit({
	heading = "Open Roles",
	description = "Join our team and help shape the future. Browse our current openings and find the perfect opportunity to grow your career with us.",
	departments = defaultDepartments,
}: JobListingsSplitProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-2">
				<div className="relative">
					<CornerMark className="-translate-[calc(50%-0.5px)]" />
					<CornerMark className="right-0 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)]" />
					<CornerMark className="right-0 bottom-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
					<CornerMark className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
					<div className="grid border max-md:divide-y md:grid-cols-3 md:divide-x">
						<div className="p-6 md:p-8">
							<h2 className="text-balance font-semibold text-4xl">{heading}</h2>
							<p className="mt-4 text-muted-foreground">{description}</p>
						</div>
						<div className="@container px-2 pt-8 pb-2 md:col-span-2">
							{departments.map((dept) => (
								<div className="not-last:mb-12" key={dept.name}>
									<h3 className="mb-4 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">
										{dept.name}{" "}
										<span className="ml-2">[{dept.jobs.length}]</span>
									</h3>
									{dept.jobs.map((job) => (
										<div
											className="group not-last:space-y-0.5 not-last:pb-0.5"
											key={job.href}
										>
											<div className="relative grid @3xl:grid-cols-2 gap-1 overflow-hidden rounded-xl p-4 hover:bg-foreground/5">
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
															<span className="capitalize">{job.type}</span>
															-time
														</span>
													</div>
													<ArrowRightPill />
												</div>
											</div>
											<div
												aria-hidden="true"
												className="mx-4 h-px bg-[length:4px_1px] bg-repeat-x opacity-20 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] group-last:hidden"
											/>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
