import Image from "next/image";
import {
	SalesforceLogo,
	SequoiaLogo,
	SVALogo,
	YCombinatorLogo,
} from "./brand-logos";
import { defaultIndividuals } from "./data";
import type { InvestorPerson } from "./types";

export interface BackerFirmListProps {
	angelsDescription?: string;
	angelsHeading?: string;
	description?: string;
	heading?: string;
	individuals?: InvestorPerson[];
}

/**
 * Narrow two-column layout with VC firms shown as horizontal pill rows
 * (logo left, round label right) and angel investors shown with square
 * (rounded-xl) avatars. Distinct: labeled round tiers, square avatar treatment.
 */
export function BackerFirmList({
	heading = "Backed by legendary firms",
	description = "The world's leading investors believe in our mission.",
	angelsHeading = "Angel investors",
	angelsDescription = "Industry pioneers who guide our journey.",
	individuals = defaultIndividuals,
}: BackerFirmListProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-2xl max-sm:px-6">
				<div className="space-y-16">
					{/* VC firms */}
					<div>
						<h2 className="max-w-xs text-balance font-semibold text-4xl text-foreground">
							{heading}
						</h2>
						<p className="mt-3 text-muted-foreground">{description}</p>
						<div className="mt-12 grid @md:grid-cols-2 gap-4">
							{/* YC — Lead Investor */}
							<div className="flex h-18 items-center justify-between rounded-2xl bg-card px-6 shadow-lg shadow-transparent ring-1 ring-border hover:shadow-black/3">
								<div className="*:size-6">
									<YCombinatorLogo />
								</div>
								<span className="text-muted-foreground text-sm">
									Lead Investor
								</span>
							</div>

							{/* SVA — Series A */}
							<div className="flex h-18 items-center justify-between rounded-2xl bg-card px-6 shadow-lg shadow-transparent ring-1 ring-border hover:shadow-black/3">
								<div className="*:h-6 *:w-fit">
									<SVALogo />
								</div>
								<span className="text-muted-foreground text-sm">Series A</span>
							</div>

							{/* Sequoia — Seed */}
							<div className="flex h-18 items-center justify-between rounded-2xl bg-card px-6 shadow-lg shadow-transparent ring-1 ring-border hover:shadow-black/3">
								<div className="*:h-4 *:w-fit">
									<SequoiaLogo />
								</div>
								<span className="text-muted-foreground text-sm">Seed</span>
							</div>

							{/* Salesforce — Strategic */}
							<div className="flex h-18 items-center justify-between rounded-2xl bg-card px-6 shadow-lg shadow-transparent ring-1 ring-border hover:shadow-black/3">
								<div className="*:h-10 *:w-fit">
									<SalesforceLogo />
								</div>
								<span className="text-muted-foreground text-sm">Strategic</span>
							</div>
						</div>
					</div>

					{/* Angel investors */}
					<div>
						<h3 className="font-semibold text-foreground text-xl">
							{angelsHeading}
						</h3>
						<p className="mt-3 text-muted-foreground">{angelsDescription}</p>
						<div className="mt-12 grid @md:grid-cols-2 gap-x-4 gap-y-6">
							{individuals.map((person) => (
								<div className="flex @md:items-center gap-3" key={person.name}>
									<div className="relative size-10 shrink-0 rounded-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/15">
										<Image
											alt={person.name}
											className="size-full rounded-xl"
											decoding="async"
											height={64}
											loading="lazy"
											src={person.avatarUrl}
											unoptimized
											width={64}
										/>
									</div>
									<div className="flex flex-col gap-0.5">
										<p className="font-medium text-foreground text-sm">
											{person.name}
										</p>
										<p className="text-muted-foreground text-sm">
											{person.role}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
