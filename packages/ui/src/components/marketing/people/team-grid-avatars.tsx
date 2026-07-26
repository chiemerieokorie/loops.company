import { defaultAvatarMembers } from "./data";
import type { TeamMember } from "./types";

export interface TeamGridAvatarsProps {
	members?: TeamMember[];
	title?: string;
}

export function TeamGridAvatars({
	title = "Our incredible leadership team",
	members = defaultAvatarMembers,
}: TeamGridAvatarsProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="text-center">
					<h2 className="mx-auto max-w-xs text-balance font-semibold text-4xl text-foreground">
						{title}
					</h2>
					<div className="mt-24 grid @max-2xs:grid-cols-1 grid-cols-2 gap-16 sm:grid-cols-3 lg:grid-cols-4">
						{members.map((member) => (
							<div key={member.name}>
								<div className="relative mx-auto aspect-square size-24 overflow-hidden rounded-full shadow-black/3 shadow-md before:absolute before:inset-0 before:z-1 before:rounded-full before:border before:border-foreground/6.5">
									<img
										alt={member.name}
										className="size-full object-cover grayscale"
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
