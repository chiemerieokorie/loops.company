import Image from "next/image";
import { defaultStepsCrosshairGrid } from "./data";

export interface StepsCrosshairGridProps {
	description?: string;
	steps?: Array<{
		title: string;
		description: string;
	}>;
	title?: string;
}

export function StepsCrosshairGrid({
	title = "Simple Three-Step Workflow",
	description = "Experience our streamlined approach to data analysis that empowers your team to make informed decisions quickly and efficiently.",
	steps = defaultStepsCrosshairGrid,
}: StepsCrosshairGridProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
				<div className="@4xl:text-left text-center">
					<h2 className="font-semibold text-3xl text-foreground">{title}</h2>
					<p className="mt-4 text-balance text-lg text-muted-foreground">
						{description.split("informed decisions").length > 1 ? (
							<>
								{description.split("informed decisions")[0]}
								<span className="text-foreground">informed decisions</span>
								{description.split("informed decisions")[1]}
							</>
						) : (
							description
						)}
					</p>
				</div>

				<div className="relative mx-auto mt-12 @max-4xl:max-w-sm">
					{/* Corner crosshair decorators */}
					<div
						aria-hidden="true"
						className="mask-radial-from-15% -translate-[calc(50%-0.5px)] absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute right-0 size-3 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute right-0 bottom-0 size-3 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-from-15% absolute bottom-0 size-3 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25"
					/>

					<div className="grid @4xl:grid-cols-3 @4xl:divide-x @max-4xl:divide-y overflow-hidden border [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] *:p-8">
						{/* Step 1 — Campaign card illustration */}
						<div className="row-span-2 grid grid-rows-subgrid gap-8">
							<div
								aria-hidden="true"
								className="relative flex flex-col justify-end"
							>
								<div className="mask-y-from-55% mask-x-from-55% @4xl:absolute top-0 flex size-6 -translate-x-1/3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full font-mono text-foreground text-sm before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_0.5px,transparent_0.5px,transparent_3px)] before:opacity-35">
									1
								</div>
								<div
									aria-hidden="true"
									className="mask-b-from-65% group relative -mx-4 px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-[1] before:rounded-2xl before:border before:border-foreground/10 before:bg-card after:absolute after:inset-x-8 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-foreground/5 after:bg-card after:opacity-75"
								>
									<div className="relative z-10 rounded-2xl border border-transparent bg-illustration p-4 pb-10 text-xs shadow-lg ring ring-border-illustration duration-300">
										<div className="mb-0.5 font-semibold text-sm">Campaign</div>
										<div className="mb-4 flex gap-2 text-sm">
											<span>Loyalty program</span>
											<span className="text-muted-foreground">
												loyalty program
											</span>
										</div>
										<div className="mb-4 grid @md:grid-cols-2 gap-2">
											<div className="flex gap-2 rounded-md bg-illustration p-2 shadow shadow-black/6.5 ring-1 ring-border-illustration">
												<div className="w-1 rounded-full bg-primary" />
												<div>
													<div className="font-medium text-sm">Start Date</div>
													<div className="line-clamp-1 text-muted-foreground">
														Feb 6, 2024 at 00:00
													</div>
												</div>
											</div>
											<div className="flex gap-2 rounded-md bg-illustration p-2 shadow shadow-black/6.5 ring-1 ring-border-illustration">
												<div className="w-1 rounded-full bg-primary" />
												<div>
													<div className="font-medium text-sm">End Date</div>
													<div className="line-clamp-1 text-muted-foreground">
														Feb 6, 2024 at 00:00
													</div>
												</div>
											</div>
										</div>
										<p>
											Connected to 12{" "}
											<span className="font-medium text-primary">
												Marketing Campaigns
											</span>
											.
										</p>
									</div>
								</div>
							</div>
							<div>
								<h3 className="font-semibold text-foreground">
									{steps[0]?.title}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{steps[0]?.description}
								</p>
							</div>
						</div>

						{/* Step 2 — Poll / timeline illustration */}
						<div className="row-span-2 grid grid-rows-subgrid gap-8">
							<div
								aria-hidden="true"
								className="relative flex flex-col justify-center gap-6"
							>
								<div className="mask-y-from-55% mask-x-from-55% @4xl:absolute top-0 flex size-6 -translate-x-1/3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full font-mono text-foreground text-sm before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_0.5px,transparent_0.5px,transparent_3px)] before:opacity-35">
									2
								</div>
								<div className="relative">
									<div className="absolute inset-1/3 m-auto aspect-video rounded-full bg-linear-to-br/increasing from-primary to-indigo-500 not-dark:opacity-50 blur-3xl" />
									<div
										aria-hidden="true"
										className="relative w-3/4 select-none"
									>
										<div className="relative w-full space-y-2 py-4">
											<div className="absolute inset-y-0 left-0 w-px bg-[length:1px_4px] bg-repeat-y opacity-15 [background-image:linear-gradient(180deg,var(--color-foreground)_1px,transparent_1px)]" />
											<div className="pl-5">
												<div className="relative mt-0.5 inline-flex items-center gap-2 font-medium text-foreground text-sm before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
													<div className="text-muted-foreground text-xs">
														06 AM
													</div>
													Poll Created
												</div>
											</div>
											<div className="relative -mx-5 flex rounded-xl border border-transparent bg-illustration p-2 text-xs shadow-black/6.5 shadow-md ring-1 ring-border-illustration dark:bg-white/5 dark:backdrop-blur">
												<div className="relative mt-0.5 ml-7 inline-flex items-center gap-2 font-medium text-sm before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-primary before:bg-background before:ring before:ring-background">
													<div className="flex items-center -space-x-2">
														<div className="size-6 overflow-hidden rounded-full border border-border-illustration bg-illustration p-0.5 shadow shadow-zinc-950/5">
															<Image
																alt="User 1"
																className="aspect-square size-full rounded-full object-cover"
																height={24}
																src="https://avatars.githubusercontent.com/u/47919550?v=4"
																unoptimized
																width={24}
															/>
														</div>
														<div className="size-6 overflow-hidden rounded-full border border-border-illustration bg-illustration p-0.5 shadow shadow-zinc-950/5">
															<Image
																alt="User 2"
																className="aspect-square size-full rounded-full object-cover"
																height={24}
																src="https://avatars.githubusercontent.com/u/31113941?v=4"
																unoptimized
																width={24}
															/>
														</div>
													</div>
													+50 Users voted
												</div>
											</div>
											<div className="pl-5">
												<div className="relative mt-0.5 inline-flex items-center gap-2 font-medium text-foreground text-sm before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
													<div className="text-muted-foreground text-xs">
														01 PM
													</div>
													Poll Closed
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<h3 className="font-semibold text-foreground">
									{steps[1]?.title}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{steps[1]?.description}
								</p>
							</div>
						</div>

						{/* Step 3 — Memory usage / progress bar illustration */}
						<div className="row-span-2 grid grid-rows-subgrid gap-8">
							<div
								aria-hidden="true"
								className="relative flex flex-col justify-center"
							>
								<div className="mask-y-from-55% mask-x-from-55% @4xl:absolute top-0 flex size-6 -translate-x-1/3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full font-mono text-foreground text-sm before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_0.5px,transparent_0.5px,transparent_3px)] before:opacity-35">
									3
								</div>
								<div
									aria-hidden="true"
									className="mask-r-from-55% mask-l-from-85% -mx-8 -mb-8 flex flex-col justify-end border-b px-8 pt-4 pb-8"
								>
									<div className="space-y-2.5">
										<span className="block font-medium text-foreground text-sm">
											Memory Usage
										</span>
										<div className="flex justify-between text-sm">
											<span className="text-muted-foreground text-sm">
												56 GB / 128 GB
											</span>
											<span className="text-foreground">45%</span>
										</div>
										<div className="relative my-1.5 h-1.5 rounded-full bg-foreground/5 before:absolute before:inset-0 before:z-[1] before:w-2/5 before:rounded-full before:bg-linear-to-r before:from-foreground before:to-indigo-400 after:absolute after:inset-0 after:w-2/5 after:bg-linear-to-r after:from-white after:to-indigo-400 after:opacity-50 after:blur-[2px] dark:before:from-white" />
									</div>
								</div>
							</div>
							<div className="@4xl:mt-0 mt-8">
								<h3 className="font-semibold text-foreground">
									{steps[2]?.title}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{steps[2]?.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
