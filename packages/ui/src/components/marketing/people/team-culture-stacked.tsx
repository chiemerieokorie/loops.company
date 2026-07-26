import { defaultStackedStats } from "./data";
import type { TeamStat } from "./types";

export interface TeamCultureStackedProps {
	description?: string;
	stats?: TeamStat[];
	title?: string;
}

export function TeamCultureStacked({
	title = "We build together",
	description = "Our team thrives on collaboration, creativity, and a shared commitment to excellence. Every day brings new challenges and opportunities to grow.",
	stats = defaultStackedStats,
}: TeamCultureStackedProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl">
				<div className="mb-16 max-w-xl px-6 sm:mb-24">
					<h2 className="text-balance font-semibold text-4xl text-foreground">
						{title}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">{description}</p>
					<div className="mt-8 grid grid-cols-3 gap-4 *:space-y-1">
						{stats.map((stat) => (
							<div key={stat.label}>
								<p className="font-medium text-2xl text-foreground">
									{stat.value}
								</p>
								<p className="text-muted-foreground text-sm">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
				<div className="relative grid grid-cols-3 max-sm:-space-x-4 lg:gap-6">
					<div className="z-2 h-fit -rotate-12 bg-card p-4 shadow-black/3 shadow-xl ring-1 ring-foreground/5">
						<div className="relative aspect-square overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 z-1 m-auto size-40 rounded-full bg-linear-to-r from-purple-400 via-blue-400 to-amber-500 opacity-35 mix-blend-overlay blur-2xl md:size-56"
							/>
							<img
								alt="Team brainstorming session"
								className="size-full object-cover grayscale"
								decoding="async"
								height="600"
								loading="lazy"
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
								style={{ color: "transparent" }}
								width="600"
							/>
						</div>
						<p className="mt-3 text-muted-foreground text-xs">
							Strategy offsite - Austin 2024
						</p>
					</div>
					<div className="z-1 h-fit rotate-6 bg-card p-4 shadow-black/3 shadow-xl ring-1 ring-foreground/5">
						<div className="relative aspect-square overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 z-1 m-auto size-40 rounded-full bg-linear-to-r from-pink-400 via-teal-400 to-orange-500 opacity-15 mix-blend-overlay blur-2xl md:size-56"
							/>
							<img
								alt="Team collaboration"
								className="size-full object-cover grayscale"
								decoding="async"
								height="600"
								loading="lazy"
								src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340&auto=format&fit=crop"
								style={{ color: "transparent" }}
								width="600"
							/>
						</div>
						<p className="mt-2 px-2 text-muted-foreground text-xs">
							Product launch day - NYC 2024
						</p>
					</div>
					<div className="mt-6 h-fit -rotate-12 bg-card p-4 shadow-black/3 shadow-xl ring-1 ring-foreground/5">
						<div className="relative aspect-square overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 z-1 m-auto size-40 rounded-full bg-linear-to-r from-violet-400 via-purple-400 to-fuchsia-500 opacity-15 mix-blend-overlay blur-2xl md:size-56"
							/>
							<img
								alt="Team celebration"
								className="size-full object-cover grayscale"
								decoding="async"
								height="600"
								loading="lazy"
								src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
								style={{ color: "transparent" }}
								width="600"
							/>
						</div>
						<p className="mt-2 text-muted-foreground text-xs">
							Annual retreat - Tokyo 2024
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
