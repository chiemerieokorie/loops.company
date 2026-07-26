import { defaultMinimalMembers } from "./data";
import type { TeamMember } from "./types";

export interface TeamGridMinimalProps {
	members?: TeamMember[];
	title?: string;
}

export function TeamGridMinimal({
	title = "Our incredible leadership team",
	members = defaultMinimalMembers,
}: TeamGridMinimalProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div>
					<h2 className="max-w-xs text-balance font-semibold text-4xl text-foreground">
						{title}
					</h2>
					<div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-y-12 md:mt-24 lg:grid-cols-3">
						{members.map((member) => (
							<div key={member.name}>
								<div className="relative aspect-square overflow-hidden rounded-2xl shadow-black/3 shadow-md before:absolute before:inset-0 before:z-1 before:rounded-2xl before:border before:border-foreground/10">
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
								<div className="space-y-0.5 pt-3">
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
