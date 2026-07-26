import Image from "next/image";
import { YCombinatorLogo } from "./brand-logos";
import { defaultIndividuals } from "./data";
import type { InvestorPerson } from "./types";

export interface BackerLogosCompactProps {
	heading?: string;
	individuals?: InvestorPerson[];
	individualsHeading?: string;
}

/**
 * Backer section with logo card pills (same as BackerLogosCards) but a compact
 * 2-col individual investor grid: tiny (size-6) avatars + inline bullet separator
 * between name and role on wider viewports.
 */
export function BackerLogosCompact({
	heading = "Backed by incredible investors",
	individualsHeading = "Individual investors",
	individuals = defaultIndividuals,
}: BackerLogosCompactProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div>
					<h2 className="max-w-xs text-balance font-semibold text-4xl text-foreground">
						{heading}
					</h2>
					<div className="mt-12 flex flex-wrap items-center gap-4">
						<div className="flex h-28 items-center justify-center rounded-2xl bg-card px-8 shadow-black/3 shadow-lg ring-1 ring-border *:h-7 *:w-fit md:px-12">
							<YCombinatorLogo />
						</div>
					</div>
				</div>

				<div className="mt-24">
					<h2 className="font-semibold text-2xl text-foreground">
						{individualsHeading}
					</h2>
					<div className="mt-12 grid @2xl:grid-cols-2 gap-6">
						{individuals.map((person) => (
							<div className="flex @md:items-center gap-3" key={person.name}>
								<div className="relative size-6 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/15">
									<Image
										alt={person.name}
										className="size-full rounded-full"
										decoding="async"
										height={64}
										loading="lazy"
										src={person.avatarUrl}
										unoptimized
										width={64}
									/>
								</div>
								<div className="flex @max-sm:flex-col @sm:gap-3">
									<p className="font-medium text-foreground">{person.name}</p>
									<span className="@max-sm:hidden text-muted-foreground">
										•
									</span>
									<p className="mt-0.5 text-muted-foreground text-sm">
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
