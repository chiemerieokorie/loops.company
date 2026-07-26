export interface TeamCultureBentoProps {
	description?: string;
	title?: string;
}

export function TeamCultureBento({
	title = "Built by developers. Backed by experience.",
	description = "Our team has built products you know and love. Now, we're transforming how businesses connect with customers.",
}: TeamCultureBentoProps) {
	return (
		<section className="bg-background py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div>
					<div className="mx-auto max-w-2xl">
						<h2 className="max-w-sm text-balance font-semibold text-4xl text-foreground">
							{title}
						</h2>
						<p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>
					<div className="relative mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
						<div
							aria-hidden="true"
							className="pointer-events-none absolute inset-0 z-1 m-auto rounded-full bg-linear-to-br from-purple-400 via-blue-400 to-teal-500 opacity-12.5 mix-blend-overlay blur-2xl"
						/>
						<div className="group max-sm:col-span-2">
							<div className="relative overflow-hidden rounded-2xl shadow-black/3 shadow-md before:absolute before:inset-0 before:z-1 before:rounded-2xl before:border before:border-foreground/6.5">
								<img
									alt="Office photo"
									className="size-full object-cover not-group-hover:grayscale duration-300"
									decoding="async"
									height="540"
									loading="lazy"
									src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1287&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="320"
								/>
							</div>
						</div>
						<div className="col-span-2 grid grid-cols-2 gap-3">
							<div className="group relative col-span-2 overflow-hidden rounded-2xl shadow-black/3 shadow-md before:absolute before:inset-0 before:z-1 before:rounded-2xl before:border before:border-foreground/6.5 hover:z-10">
								<img
									alt="Team vacation photo"
									className="size-full object-cover not-group-hover:grayscale duration-300"
									decoding="async"
									height="540"
									loading="lazy"
									src="https://images.unsplash.com/photo-1758272959063-ef8a2114f807?q=80&w=3131&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="920"
								/>
							</div>
							<div className="group relative overflow-hidden rounded-2xl shadow-black/3 shadow-md before:absolute before:inset-0 before:z-1 before:rounded-2xl before:border before:border-foreground/6.5 hover:z-10">
								<img
									alt="Office photo"
									className="size-full object-cover not-group-hover:grayscale duration-300"
									decoding="async"
									height="540"
									loading="lazy"
									src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2352&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="320"
								/>
							</div>
							<div className="group relative overflow-hidden rounded-2xl shadow-black/3 shadow-md before:absolute before:inset-0 before:z-1 before:rounded-2xl before:border before:border-foreground/6.5 hover:z-10">
								<img
									alt="Office photo"
									className="size-full object-cover not-group-hover:grayscale duration-300"
									decoding="async"
									height="540"
									loading="lazy"
									src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2340&auto=format&fit=crop"
									style={{ color: "transparent" }}
									width="320"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
