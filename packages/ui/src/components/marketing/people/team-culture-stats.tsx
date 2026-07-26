import { defaultCultureStats } from "./data";
import type { TeamStat } from "./types";

export interface TeamCultureStatsProps {
	description?: string;
	stats?: TeamStat[];
	title?: string;
}

export function TeamCultureStats({
	title = "A team that ships",
	description = "From whiteboard to production — we move fast and build things that matter.",
	stats = defaultCultureStats,
}: TeamCultureStatsProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="grid @3xl:grid-cols-2 items-center @3xl:gap-16 gap-12">
					<div>
						<h2 className="text-balance font-semibold text-4xl text-foreground">
							{title}
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">{description}</p>
						<div className="mt-10 grid grid-cols-2 gap-6 *:space-y-1">
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
					<div className="relative flex items-center justify-center py-8">
						<div className="absolute top-0 left-0 -rotate-12 bg-card p-3 shadow-black/3 shadow-xl ring-1 ring-foreground/5 md:p-4">
							<div className="relative aspect-square w-32 overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10 md:w-40">
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0 z-1 m-auto size-24 rounded-full bg-linear-to-r from-purple-400 via-blue-400 to-amber-500 opacity-25 mix-blend-overlay blur-2xl"
								/>
								<img
									alt="Planning session"
									className="size-full object-cover grayscale"
									decoding="async"
									height="320"
									loading="lazy"
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="320"
								/>
							</div>
							<p className="mt-2 text-muted-foreground text-xs">
								Sprint planning
							</p>
						</div>
						<div className="z-10 rotate-3 bg-card p-3 shadow-black/3 shadow-xl ring-1 ring-foreground/5 md:p-4">
							<div className="relative aspect-[3/4] w-44 overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10 md:w-52">
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0 z-1 m-auto size-32 rounded-full bg-linear-to-r from-indigo-400 via-cyan-400 to-emerald-500 opacity-25 mix-blend-overlay blur-2xl"
								/>
								<img
									alt="Team workshop"
									className="size-full object-cover grayscale"
									decoding="async"
									height="533"
									loading="lazy"
									src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="400"
								/>
							</div>
							<p className="mt-2 text-muted-foreground text-xs">
								Design workshop - 2024
							</p>
						</div>
						<div className="absolute right-0 bottom-0 -rotate-6 bg-card p-3 shadow-black/3 shadow-xl ring-1 ring-foreground/5 md:p-4">
							<div className="relative aspect-square w-32 overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10 md:w-40">
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0 z-1 m-auto size-24 rounded-full bg-linear-to-r from-pink-400 via-rose-400 to-orange-500 opacity-25 mix-blend-overlay blur-2xl"
								/>
								<img
									alt="Team celebration"
									className="size-full object-cover grayscale"
									decoding="async"
									height="320"
									loading="lazy"
									src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="320"
								/>
							</div>
							<p className="mt-2 text-muted-foreground text-xs">Ship day</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
