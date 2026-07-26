import {
	CloudflareLogo,
	FigmaLogo,
	LinearLogo,
	OpenAILogo,
} from "./integration-logos";

export interface FeatureBentoAiScanProps {
	aiScanDescription?: string;
	aiScanTitle?: string;
	campaignDescription?: string;
	campaignTitle?: string;
	integrationDescription?: string;
	integrationTitle?: string;
	spendingLimitDescription?: string;
	spendingLimitTitle?: string;
}

export function FeatureBentoAiScan({
	aiScanTitle = "Collaborative Analysis",
	aiScanDescription = "Add comments, share insights, and work together with your team to extract maximum.",
	spendingLimitTitle = "Collaborative Analysis",
	spendingLimitDescription = "Add comments, share insights, and work together with your team to extract maximum.",
	campaignTitle = "Scheduled Reports",
	campaignDescription = "Automate report delivery to stakeholders with customizable scheduling options.",
	integrationTitle = "Seamless Integration",
	integrationDescription = "Add comments, share insights, and work together with your team to extract maximum.",
}: FeatureBentoAiScanProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @3xl:grid-cols-6 @xl:grid-cols-2 gap-3">
					{/* Card 1 — AI face scan */}
					<div
						className="group @3xl:col-span-2 grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">{aiScanTitle}</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{aiScanDescription}
							</p>
						</div>
						<div className="relative -m-8 flex flex-wrap items-center justify-between gap-1 from-transparent via-rose-50 to-amber-50 p-8">
							<div
								aria-hidden="true"
								className="group relative m-auto size-fit"
							>
								{/* Grid overlay */}
								<div
									className="absolute -inset-6 z-10 opacity-15 mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
									style={{
										backgroundImage:
											"linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
										backgroundSize: "5px 5px",
									}}
								/>
								{/* Spinning hue-rotate glow */}
								<div className="absolute inset-0 animate-spin opacity-50 blur-lg duration-[3s] dark:opacity-20">
									<div className="absolute inset-0 animate-[hue-rotate_3s_linear_infinite] rounded-full bg-gradient-to-r from-pink-300 to-indigo-300" />
								</div>
								{/* Scan line */}
								<div className="absolute inset-x-12 inset-y-0 z-10 animate-[scan_2s_ease-in-out_infinite]">
									<div className="absolute inset-x-0 m-auto h-6 rounded-full bg-white/50 blur-2xl" />
								</div>
								{/* Corner frame markers */}
								<div className="absolute inset-0 z-10 m-auto aspect-2/3 w-20">
									<span className="absolute -top-px -left-px block size-2.5 scale-125 border-white border-t-[1.5px] border-l-[1.5px] blur-[3px]" />
									<span className="absolute -top-px -right-px block size-2.5 scale-125 border-white border-t-[1.5px] border-r-[1.5px] blur-[3px]" />
									<span className="absolute -bottom-px -left-px block size-2.5 scale-125 border-white border-b-[1.5px] border-l-[1.5px] blur-[3px]" />
									<span className="absolute -right-px -bottom-px block size-2.5 scale-125 border-white border-r-[1.5px] border-b-[1.5px] blur-[3px]" />
									<span className="absolute -top-px -left-px z-10 block size-2.5 border-green-400 border-t-[1.5px] border-l-[1.5px]" />
									<span className="absolute -top-px -right-px z-10 block size-2.5 border-green-400 border-t-[1.5px] border-r-[1.5px]" />
									<span className="absolute -bottom-px -left-px z-10 block size-2.5 border-green-400 border-b-[1.5px] border-l-[1.5px]" />
									<span className="absolute -right-px -bottom-px z-10 block size-2.5 border-green-400 border-r-[1.5px] border-b-[1.5px]" />
								</div>
								{/* Human face image */}
								<div className="aspect-square max-w-xs bg-radial [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] group-hover:opacity-95">
									<img
										alt="woman face"
										className="size-full bg-illustration object-cover grayscale"
										decoding="async"
										height="560"
										loading="lazy"
										src="https://raw.githubusercontent.com/Astor/assets/refs/heads/main/human-face_kf9mt7.png"
										width="560"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Card 2 — Spending limit */}
					<div
						className="@3xl:col-span-4 grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{spendingLimitTitle}
							</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{spendingLimitDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50"
						>
							<div className="relative z-10 rounded-2xl border border-transparent bg-illustration p-6 shadow-black/10 shadow-xl ring-1 ring-border-illustration">
								<div className="font-medium text-foreground">
									<span className="bg-amber-100 py-1 text-amber-900">
										Spending
									</span>{" "}
									Limit
								</div>
								<div className="mt-0.5 text-muted-foreground text-sm">
									New users by First user primary channel group
								</div>
								<div className="relative mt-4 mb-4 flex">
									<div className="h-5 w-1/5 rounded-l-md bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
									<div className="h-5 w-1/5 bg-primary duration-300 group-hover:w-2/5" />
									<div className="h-5 w-3/5 rounded-r-md border duration-300 [--stripes-color:--alpha(var(--color-foreground)/20%)] [background-image:linear-gradient(-90deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] group-hover:w-2/5" />
								</div>
								<div className="flex gap-1 border-b border-dashed pb-3">
									<div className="w-2/5">
										<div className="font-medium text-foreground text-xl">
											40%
										</div>
										<div className="text-muted-foreground text-sm">Used</div>
									</div>
									<div className="w-3/5">
										<div className="font-medium text-foreground text-xl">
											60%
										</div>
										<div className="text-muted-foreground text-sm">Free</div>
									</div>
								</div>
								<div className="mt-3 space-y-1">
									<div className="grid grid-cols-[auto_1fr] items-center gap-2">
										<div className="size-1.5 rounded-full bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
										<div className="line-clamp-1 font-medium text-sm">
											Running{" "}
											<span className="text-muted-foreground">(20%)</span>{" "}
											average of 12 Minutes
										</div>
									</div>
									<div className="grid grid-cols-[auto_1fr] items-center gap-2">
										<div className="size-1.5 rounded-full bg-primary" />
										<div className="line-clamp-1 font-medium text-sm">
											Swimming{" "}
											<span className="text-muted-foreground">(20%)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Card 3 — Campaign scheduling */}
					<div
						className="@3xl:col-span-3 @xl:col-span-full grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">{campaignTitle}</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{campaignDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-card after:absolute after:inset-x-8 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background"
						>
							<div className="relative z-10 rounded-2xl border border-transparent bg-illustration p-4 text-xs shadow-black/6.5 shadow-lg ring-1 ring-border-illustration duration-300">
								<div className="mb-0.5 font-semibold text-sm">Campaign</div>
								<div className="mb-4 flex gap-2 text-sm">
									<span>Loyalty program</span>
									<span className="text-muted-foreground">loyalty program</span>
								</div>
								<div className="grid @md:grid-cols-2 gap-2">
									<div className="flex gap-2 rounded-md border bg-muted/50 p-2">
										<div className="w-1 rounded-full bg-primary" />
										<div>
											<div className="font-medium text-sm">Start Date</div>
											<div className="text-muted-foreground">
												Feb 6, 2024 at 00:00
											</div>
										</div>
									</div>
									<div className="flex gap-2 rounded-md border bg-muted/50 p-2">
										<div className="w-1 rounded-full bg-primary" />
										<div>
											<div className="font-medium text-sm">End Date</div>
											<div className="text-muted-foreground">
												Feb 6, 2024 at 00:00
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Card 4 — Integrations */}
					<div
						className="@3xl:col-span-3 @xl:col-span-full grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{integrationTitle}
							</h3>
							<p className="mt-3 text-balance text-muted-foreground">
								{integrationDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="relative -m-8 flex flex-col justify-center border-background border-x bg-linear-to-b from-transparent via-orange-400/5 to-zinc-400/5 p-8"
						>
							<div
								aria-hidden="true"
								className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,black,black_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
							/>
							<div className="relative grid @md:grid-cols-6 grid-cols-3 gap-4">
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration p-4 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<FigmaLogo className="size-6" />
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration p-4 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<svg
										className="size-5"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M11.34.83a2.98 2.98 0 1 1 3.83 3.83L13.31 6.5l-.09.09-1.4 1.41-2.83-2.83L11.34.83ZM8.73 5.34 3.85 10.22a2.98 2.98 0 0 0-.78 1.37l-.55 2.19a.5.5 0 0 0 .61.61l2.19-.55a2.98 2.98 0 0 0 1.37-.78l4.88-4.88-2.83-2.83Z" />
									</svg>
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
							</div>
							<div className="relative mt-4 grid @md:grid-cols-6 grid-cols-3 gap-4">
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<LinearLogo className="size-6" />
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<OpenAILogo className="size-6" />
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
								<div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<CloudflareLogo className="size-6" />
								</div>
								<div className="@md:block hidden aspect-square rounded-(--radius) border border-foreground/15 border-dashed bg-card/50 backdrop-blur-3xl" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
