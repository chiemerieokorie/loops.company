import { defaultOverlayMembers } from "./data";
import type { TeamMember } from "./types";

export interface TeamGridOverlayProps {
	description?: string;
	members?: TeamMember[];
	title?: string;
}

export function TeamGridOverlay({
	title = "Our team",
	description = "A diverse group of passionate individuals working together to build something great.",
	members = defaultOverlayMembers,
}: TeamGridOverlayProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-6xl px-6">
				<div className="max-w-xl">
					<h2 className="text-balance font-semibold text-4xl text-foreground">
						{title}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">{description}</p>
				</div>
				<div className="mt-16 grid @3xl:grid-cols-4 @md:grid-cols-2 gap-4">
					{members.map((member) => (
						<div
							className="group relative aspect-[4/5] overflow-hidden rounded-2xl before:absolute before:inset-0 before:z-1 before:rounded-2xl before:border before:border-foreground/6.5"
							key={member.name}
						>
							<img
								alt={member.name}
								className="size-full object-cover grayscale transition-all duration-300 group-hover:scale-102 group-hover:grayscale-0"
								decoding="async"
								height="400"
								loading="lazy"
								src={member.image}
								style={{ color: "transparent" }}
								width="320"
							/>
							<div
								aria-hidden="true"
								className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
							/>
							<div
								aria-hidden="true"
								className="mask-t-from-35% absolute inset-0 mt-auto h-24 backdrop-blur"
							/>
							<div className="absolute inset-x-0 bottom-0 p-4">
								<p className="font-medium text-white">{member.name}</p>
								<p className="text-sm text-white/80">{member.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
