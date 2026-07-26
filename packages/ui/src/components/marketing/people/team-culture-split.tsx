import { Brain } from "lucide-react";
import { defaultSplitStats } from "./data";
import type { TeamStat } from "./types";

export interface TeamCultureSplitProps {
	description?: string;
	stats?: TeamStat[];
	title?: string;
}

export function TeamCultureSplit({
	title = "Memories in the making",
	description = "Every project, every milestone — captured in moments that define who we are.",
	stats = defaultSplitStats,
}: TeamCultureSplitProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="flex max-w-xl flex-col gap-8">
					<div className="max-w-lg">
						<Brain
							aria-hidden="true"
							className="size-8 fill-foreground/10 stroke-background drop-shadow"
						/>
						<h2 className="mt-8 text-balance font-semibold text-4xl text-foreground">
							{title}
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">{description}</p>
					</div>
					<div className="grid max-w-sm grid-cols-2 gap-6 *:space-y-1">
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
				<div className="mt-16 flex items-center justify-center">
					<div className="z-1 -mr-16 -rotate-6 bg-card p-4 shadow-black/3 shadow-xl ring-1 ring-border">
						<div className="relative aspect-[4/5] w-48 overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10 md:w-56">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 z-1 m-auto size-32 rounded-full bg-linear-to-r from-purple-400 via-blue-400 to-amber-500 opacity-25 mix-blend-overlay blur-2xl lg:size-96"
							/>
							<img
								alt="Team brainstorming"
								className="size-full object-cover grayscale"
								decoding="async"
								height="500"
								loading="lazy"
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
								style={{ color: "transparent" }}
								width="400"
							/>
						</div>
						<p className="mt-3 text-muted-foreground text-xs">
							Kickoff meeting - SF 2024
						</p>
					</div>
					<div className="z-3 rotate-3 bg-card p-4 shadow-black/3 shadow-xl ring-1 ring-foreground/5">
						<div className="relative aspect-[4/5] w-56 overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10 md:w-64">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 z-1 m-auto size-40 rounded-full bg-linear-to-r from-indigo-400 via-cyan-400 to-emerald-500 opacity-15 mix-blend-overlay blur-2xl lg:size-72"
							/>
							<img
								alt="Team workshop"
								className="size-full object-cover grayscale"
								decoding="async"
								height="500"
								loading="lazy"
								src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
								style={{ color: "transparent" }}
								width="400"
							/>
						</div>
						<p className="mt-3 text-muted-foreground text-xs">
							Design week - Berlin 2024
						</p>
					</div>
					<div className="z-2 -ml-16 -rotate-3 bg-card p-4 shadow-black/3 shadow-xl ring-1 ring-foreground/5">
						<div className="relative aspect-[4/5] w-48 overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10 md:w-56">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 z-1 m-auto size-32 rounded-full bg-linear-to-r from-pink-400 via-rose-400 to-orange-500 opacity-15 mix-blend-overlay blur-2xl lg:size-64"
							/>
							<img
								alt="Team celebration"
								className="size-full object-cover grayscale"
								decoding="async"
								height="500"
								loading="lazy"
								src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
								style={{ color: "transparent" }}
								width="400"
							/>
						</div>
						<p className="mt-3 text-muted-foreground text-xs">
							Launch party - NYC 2024
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
