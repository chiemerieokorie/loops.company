"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { defaultJobs } from "./data";
import type { JobPosting } from "./types";

export interface JobListingsFilteredProps {
	heading?: string;
	jobs?: JobPosting[];
}

function ArrowRightReveal() {
	return (
		<div className="ml-auto flex h-6 items-center rounded-full px-2 shadow shadow-transparent group-hover:bg-card group-hover:shadow-black/[0.065] group-hover:ring-1 group-hover:ring-border-illustration">
			<ArrowRight className="size-3.5 not-group-hover:opacity-50 group-hover:text-primary" />
		</div>
	);
}

export function JobListingsFiltered({
	heading = "Open Roles",
	jobs = defaultJobs,
}: JobListingsFilteredProps) {
	const departments = [
		"all",
		...Array.from(
			new Set(jobs.flatMap((j) => (j.department ? [j.department] : [])))
		),
	];
	const [active, setActive] = useState("all");

	const filtered =
		active === "all" ? jobs : jobs.filter((j) => j.department === active);

	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-2xl">
				<h2 className="text-balance font-semibold text-4xl max-md:px-6">
					{heading}
				</h2>
				<div className="mt-12 grid max-md:gap-6 md:grid-cols-3">
					<div className="sticky top-0 z-10 flex h-fit gap-2 bg-background pt-2 max-md:overflow-x-auto max-md:border-b max-md:px-4 max-md:pb-2 md:top-4 md:flex-col md:pt-4">
						{departments.map((dept) => (
							<button
								className="h-8 w-fit cursor-pointer rounded-lg px-3 text-muted-foreground text-sm capitalize shadow shadow-transparent ring-1 ring-border-illustration not-data-[active=true]:hover:bg-foreground/5 data-[active=true]:bg-card data-[active=true]:text-primary data-[active=true]:shadow-black/[0.065]"
								data-active={active === dept}
								key={dept}
								onClick={() => setActive(dept)}
								type="button"
							>
								{dept}
							</button>
						))}
					</div>
					<div className="@container max-md:px-2 md:col-span-2">
						{filtered.map((job) => (
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
												<span className="capitalize">{job.type}</span>-time
											</span>
										</div>
										<ArrowRightReveal />
									</div>
								</div>
								<div
									aria-hidden="true"
									className="mx-4 h-px bg-[length:4px_1px] bg-repeat-x opacity-20 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] group-last:hidden"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
