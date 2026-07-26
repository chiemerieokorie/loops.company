import Image from "next/image";
import { AccelLogo, YCombinatorLogo } from "./brand-logos";
import type { AngelInvestor } from "./data";
import { defaultAngels } from "./data";

export interface BackerLogosWithSummaryProps {
	angelCount?: number;
	angelSubtext?: string;
	angelSummaryText?: string;
	angels?: AngelInvestor[];
	description?: string;
	heading?: string;
}

/**
 * Centered backer section with bare logos above a summary card that shows
 * stacked overlapping angel avatars and a count + tagline.
 * No individual investor list — the card summarizes angels in aggregate.
 */
export function BackerLogosWithSummary({
	heading = "Backed by world-class investors",
	description = "We're proud to be supported by leading venture capital firms and visionary angel investors.",
	angelCount = 8,
	angelSummaryText = `Joined by ${angelCount}+ angel investors`,
	angelSubtext = "Industry leaders from Vercel, Tailwind, Figma, and more",
	angels = defaultAngels,
}: BackerLogosWithSummaryProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6 text-center">
				<h2 className="text-balance font-semibold text-4xl text-foreground">
					{heading}
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-balance text-lg text-muted-foreground">
					{description}
				</p>

				<div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:gap-x-24">
					{/* Y Combinator */}
					<div className="*:h-6 *:w-fit">
						<YCombinatorLogo />
					</div>
					{/* Accel */}
					<div className="*:h-5 *:w-fit">
						<AccelLogo />
					</div>
				</div>

				{/* Angel investor summary card */}
				<div className="mx-auto mt-16 max-w-lg rounded-2xl bg-card p-8 shadow-black/3 shadow-xl ring-1 ring-foreground/5">
					<div className="flex justify-center -space-x-1.5">
						{angels.map((angel, index) => (
							<div
								className="relative size-8 overflow-hidden rounded-full ring-2 ring-background before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/15"
								key={angel.name}
								style={{ zIndex: angels.length - index }}
							>
								<Image
									alt={angel.name}
									className="size-full object-cover"
									decoding="async"
									height={48}
									loading="lazy"
									src={angel.avatarUrl}
									unoptimized
									width={48}
								/>
							</div>
						))}
					</div>
					<p className="mt-6 font-medium text-foreground">{angelSummaryText}</p>
					<p className="mt-2 text-muted-foreground text-sm">{angelSubtext}</p>
				</div>
			</div>
		</section>
	);
}
