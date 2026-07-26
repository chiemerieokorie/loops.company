import {
	AccelLogo,
	SalesforceLogo,
	SequoiaLogo,
	SVALogo,
	YCombinatorLogo,
} from "./brand-logos";

export interface BackerPanelWithStatProps {
	eyebrow?: string;
	heading?: string;
	stat?: string;
	statLabel?: string;
}

/**
 * Backer section with all logos inside a rounded panel (rounded-3xl bg-foreground/3)
 * and a standalone funding stat displayed below the panel. No individual investor list.
 * Distinct: the contained-panel treatment and the prominent bottom stat callout.
 */
export function BackerPanelWithStat({
	eyebrow = "Our investors",
	heading = "Backed by world-class firms",
	stat = "$50M+",
	statLabel = "Total funding raised",
}: BackerPanelWithStatProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-6xl px-6">
				<div className="@3xl:col-span-2 rounded-3xl bg-foreground/3 p-8 md:p-12">
					<p className="text-muted-foreground text-sm tracking-wide">
						{eyebrow}
					</p>
					<h2 className="mt-4 max-w-sm text-balance font-semibold text-3xl text-foreground md:text-4xl">
						{heading}
					</h2>
					<div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-12">
						{/* Y Combinator */}
						<div className="*:size-6">
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

						{/* Sequoia */}
						<div className="*:h-4 *:w-fit">
							<SequoiaLogo />
						</div>

						{/* Salesforce */}
						<div className="*:h-11 *:w-fit">
							<SalesforceLogo />
						</div>
					</div>
				</div>

				{/* Funding stat below the panel */}
				<div className="mt-6 px-8 md:px-12 lg:mt-12">
					<p className="font-semibold text-3xl md:text-4xl">{stat}</p>
					<p className="mt-2 text-muted-foreground">{statLabel}</p>
				</div>
			</div>
		</section>
	);
}
