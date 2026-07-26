import Image from "next/image";
import { AccelLogo, SVALogo, YCombinatorLogo } from "./brand-logos";
import { defaultIndividuals } from "./data";
import type { InvestorPerson } from "./types";

export interface BackerLogosCenteredProps {
	heading?: string;
	individuals?: InvestorPerson[];
	individualsHeading?: string;
}

export function BackerLogosCentered({
	heading = "Backed by incredible investors",
	individualsHeading = "Individual investors",
	individuals = defaultIndividuals,
}: BackerLogosCenteredProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6 text-center">
				<h2 className="mx-auto max-w-xs text-balance font-semibold text-4xl text-foreground">
					{heading}
				</h2>
				<div className="mt-12">
					<div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
						{/* Y Combinator */}
						<div className="*:h-6 *:w-fit">
							<YCombinatorLogo />
						</div>
						{/* Accel */}
						<div className="*:h-5 *:w-fit">
							<AccelLogo />
						</div>
						{/* SVA */}
						<div className="*:h-6 *:w-fit">
							<SVALogo />
						</div>
					</div>
				</div>

				<div className="mt-32">
					<h2 className="font-semibold text-4xl text-foreground">
						{individualsHeading}
					</h2>
					<div className="mt-12 grid @2xl:grid-cols-3 @md:grid-cols-2 gap-x-6 gap-y-8">
						{individuals.map((person) => (
							<div
								className="flex flex-col items-center gap-3"
								key={person.name}
							>
								<div className="relative size-12 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/15">
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
								<div>
									<p className="font-medium text-foreground text-sm">
										{person.name}
									</p>
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
