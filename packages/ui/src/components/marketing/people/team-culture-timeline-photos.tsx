import { Brain } from "lucide-react";
import { defaultEvents } from "./data";
import type { TimelineEvent } from "./types";

export type { TimelineEvent };

export interface TeamCultureTimelinePhotosProps {
	description?: string;
	events?: TimelineEvent[];
	title?: string;
}

export function TeamCultureTimelinePhotos({
	title = "Moments worth sharing",
	description = "The best teams aren't just built — they're bonded through shared experiences.",
	events = defaultEvents,
}: TeamCultureTimelinePhotosProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="grid @3xl:grid-cols-2 @3xl:gap-24 gap-12">
					<div className="@3xl:sticky @3xl:top-20 @3xl:max-w-sm self-start">
						<Brain
							aria-hidden="true"
							className="size-8 fill-foreground/10 stroke-background drop-shadow"
						/>
						<h2 className="mt-8 text-balance font-semibold text-3xl text-foreground">
							{title}
						</h2>
						<p className="mt-6 text-lg text-muted-foreground">{description}</p>
						<dl className="mt-10 space-y-6">
							{events.map((event) => (
								<div className="flex gap-4" key={event.quarter}>
									<div className="mt-0.5 w-8 font-mono text-muted-foreground text-xs">
										{event.quarter}
									</div>
									<div className="grid @md:grid-cols-[auto_1fr] @md:gap-6 gap-3">
										<dt className="w-40 font-medium text-foreground text-sm">
											{event.title}
										</dt>
										<dd className="text-muted-foreground text-sm">
											{event.description}
										</dd>
									</div>
								</div>
							))}
						</dl>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="-rotate-2 bg-card p-3 shadow-black/3 shadow-xl ring-1 ring-foreground/5 md:p-4">
							<div className="relative aspect-[4/5] overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10">
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0 z-1 m-auto size-32 rounded-full bg-linear-to-r from-purple-400 via-blue-400 to-amber-500 opacity-25 mix-blend-overlay blur-2xl md:size-64"
								/>
								<img
									alt="Hackathon"
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
								Hackathon winners - Jan 2024
							</p>
						</div>
						<div className="mt-8 h-fit rotate-3 self-end bg-card p-3 shadow-black/3 shadow-xl ring-1 ring-foreground/5 md:p-4">
							<div className="relative aspect-square overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10">
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0 z-1 m-auto size-32 rounded-full bg-linear-to-r from-pink-400 via-teal-400 to-orange-500 opacity-50 mix-blend-overlay blur-2xl"
								/>
								<img
									alt="Retreat"
									className="size-full object-cover grayscale"
									decoding="async"
									height="400"
									loading="lazy"
									src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2340&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="400"
								/>
							</div>
							<p className="mt-3 text-muted-foreground text-xs">
								Lisbon retreat - Apr 2024
							</p>
						</div>
						<div className="col-span-2 -rotate-1 bg-card p-3 shadow-black/3 shadow-xl ring-1 ring-foreground/5 md:p-4">
							<div className="relative aspect-video overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10">
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0 z-1 m-auto size-40 rounded-full bg-linear-to-r from-indigo-400 via-cyan-400 to-emerald-500 opacity-15 mix-blend-overlay blur-2xl md:size-72"
								/>
								<img
									alt="Launch day"
									className="size-full object-cover grayscale"
									decoding="async"
									height="450"
									loading="lazy"
									src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="800"
								/>
							</div>
							<p className="mt-3 text-muted-foreground text-xs">
								Launch day celebration - Sep 2024
							</p>
						</div>
						<div className="h-fit rotate-2 bg-card p-3 shadow-black/3 shadow-xl ring-1 ring-foreground/5 md:p-4">
							<div className="relative aspect-square overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10">
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0 z-1 m-auto size-32 rounded-full bg-linear-to-r from-violet-400 via-purple-400 to-fuchsia-500 opacity-25 mix-blend-overlay blur-2xl"
								/>
								<img
									alt="Holiday party"
									className="size-full object-cover grayscale"
									decoding="async"
									height="400"
									loading="lazy"
									src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="400"
								/>
							</div>
							<p className="mt-3 text-muted-foreground text-xs">
								Holiday party - Dec 2024
							</p>
						</div>
						<div className="-mt-4 -rotate-3 bg-card p-3 shadow-black/3 shadow-xl ring-1 ring-foreground/5 md:p-4">
							<div className="relative aspect-[4/5] overflow-hidden before:absolute before:inset-0 before:z-1 before:border before:border-foreground/10">
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0 z-1 m-auto size-32 rounded-full bg-linear-to-r from-amber-400 via-orange-400 to-red-500 opacity-25 mix-blend-overlay blur-2xl"
								/>
								<img
									alt="End of year"
									className="size-full object-cover grayscale"
									decoding="async"
									height="500"
									loading="lazy"
									src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="400"
								/>
							</div>
							<p className="mt-3 text-muted-foreground text-xs">
								Looking ahead - Dec 2024
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
