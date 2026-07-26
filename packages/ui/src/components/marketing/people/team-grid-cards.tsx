import { defaultCardMembers } from "./data";
import type { TeamMember } from "./types";

export interface TeamGridCardsProps {
	members?: TeamMember[];
	title?: string;
}

export function TeamGridCards({
	title = "Our incredible leadership team",
	members = defaultCardMembers,
}: TeamGridCardsProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div>
					<h2 className="max-w-xs text-balance font-semibold text-4xl text-foreground">
						{title}
					</h2>
					<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{members.map((member) => (
							<div
								className="rounded-3xl bg-card p-2 shadow-black/6.5 shadow-xl ring-1 ring-border"
								key={member.name}
							>
								<div className="relative aspect-square overflow-hidden rounded-2xl before:absolute before:inset-0 before:z-1 before:rounded-2xl before:border before:border-foreground/10">
									<div
										aria-hidden="true"
										className={`pointer-events-none absolute inset-0 z-1 size-40 rounded-full bg-linear-to-r from-${member.glowFrom ?? "purple-400"} via-${member.glowVia ?? "blue-400"} to-${member.glowTo ?? "amber-500"} opacity-6.5 mix-blend-overlay blur-2xl will-change-transform md:size-72`}
									/>
									<img
										alt={member.name}
										className="size-full object-cover object-top grayscale"
										decoding="async"
										height="540"
										loading="lazy"
										src={member.image}
										style={{ color: "transparent" }}
										width="320"
									/>
								</div>
								<div className="space-y-0.5 px-3 pt-3 pb-2">
									<p className="font-medium text-foreground">{member.name}</p>
									<p className="text-muted-foreground text-sm">{member.role}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
