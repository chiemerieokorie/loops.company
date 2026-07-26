import Image from "next/image";
import { AccelLogo, SVALogo, YCombinatorLogo } from "./brand-logos";
import { defaultIndividuals } from "./data";
import type { InvestorPerson } from "./types";

export interface BackerGridProps {
	angelsHeading?: string;
	eyebrow?: string;
	heading?: string;
	individuals?: InvestorPerson[];
}

/**
 * Centered backer section with logos in bg-muted aspect-ratio grid cells (no border)
 * and angel investors shown as hover-card rows with large avatars.
 * Distinct from other variants: eyebrow label, muted tile grid, card-hover individuals.
 */
export function BackerGrid({
	eyebrow = "Trusted by the best",
	heading = "Our investors",
	angelsHeading = "Angel investors",
	individuals = defaultIndividuals,
}: BackerGridProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="text-center">
					<p className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
						{eyebrow}
					</p>
					<h2 className="mt-4 text-balance font-semibold text-4xl text-foreground">
						{heading}
					</h2>
				</div>

				<div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5">
					<div className="flex aspect-[3/2] items-center justify-center rounded-xl bg-muted *:h-6 *:w-fit">
						<YCombinatorLogo />
					</div>
					<div className="flex aspect-[3/2] items-center justify-center rounded-xl bg-muted *:h-5 *:w-fit">
						<AccelLogo />
					</div>
					<div className="flex aspect-[3/2] items-center justify-center rounded-xl bg-muted *:h-6 *:w-fit">
						<SVALogo />
					</div>
				</div>

				<div className="mt-16">
					<h3 className="text-center font-medium text-foreground text-lg">
						{angelsHeading}
					</h3>
					<div className="mt-8 grid @2xl:grid-cols-3 @md:grid-cols-2 gap-4">
						{individuals.map((person) => (
							<div
								className="flex items-center gap-4 rounded-2xl p-4 shadow-lg shadow-transparent ring-1 ring-border-illustration hover:bg-card hover:shadow-black/3"
								key={person.name}
							>
								<div className="relative size-12 shrink-0 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/15">
									<Image
										alt={person.name}
										className="size-full object-cover"
										decoding="async"
										height={56}
										loading="lazy"
										src={person.avatarUrl}
										unoptimized
										width={56}
									/>
								</div>
								<div className="min-w-0">
									<p className="truncate font-medium text-foreground">
										{person.name}
									</p>
									<p className="mt-0.5 truncate text-muted-foreground text-sm">
										{person.role}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
