import { defaultStepsWithIllustrations } from "./data";

export interface StepsWithIllustrationsProps {
	steps?: Array<{
		number: string;
		title: string;
		description: string;
	}>;
}

export function StepsWithIllustrations({
	steps = defaultStepsWithIllustrations,
}: StepsWithIllustrationsProps) {
	return (
		<section className="@container bg-background py-16 md:py-24 lg:py-40">
			<div className="relative mx-auto w-full max-w-5xl @max-6xl:px-6">
				<div className="mx-auto @max-4xl:max-w-sm">
					<div className="grid @4xl:grid-cols-3 @max-4xl:gap-12">
						{/* Step 1 — Payment form illustration */}
						<div className="row-span-2 grid grid-rows-subgrid gap-8">
							<div className="@4xl:pr-12">
								<h3 className="text-balance font-semibold text-lg">
									<span className="self-center font-mono text-muted-foreground text-sm">
										{steps[0]?.number}
									</span>{" "}
									{steps[0]?.title}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{steps[0]?.description}
								</p>
							</div>
							<div className="perspective-dramatic mask-radial-from-60% mask-radial-at-top-left mask-radial-[95%_100%] pt-6 @4xl:pl-4 pl-5">
								<div className="rotate-y-3 -skew-y-4">
									<div
										aria-hidden="true"
										className="relative [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-indigo-500)]"
									>
										<div className="relative space-y-5 rounded-2xl bg-card p-8 shadow-black/6.5 ring-1 ring-border-illustration">
											<div>
												<div className="mb-3 font-medium text-foreground text-sm">
													Email
												</div>
												<div className="col-span-2 flex h-8 items-center justify-between rounded-md border border-transparent bg-background px-2 shadow ring-1 ring-foreground/10">
													<span className="text-muted-foreground text-sm">
														irung@runway.com
													</span>
												</div>
											</div>
											<div className="mb-3 font-medium text-foreground text-sm">
												Card Information
											</div>
											<div className="relative grid grid-cols-2 -space-y-px [--input-radius:theme(borderRadius.lg)]">
												<div className="col-span-2 flex h-8 items-center justify-between rounded-t-md border border-transparent bg-background px-2 shadow ring-1 ring-foreground/10">
													<span className="text-muted-foreground text-sm">
														1234 123456 12345
													</span>
													<svg
														aria-hidden="true"
														className="h-2.5"
														viewBox="0 0 256 83"
														xmlns="http://www.w3.org/2000/svg"
													>
														<defs>
															<linearGradient
																id="logosVisa0"
																x1="45.974%"
																x2="54.877%"
																y1="-2.006%"
																y2="100%"
															>
																<stop offset="0%" stopColor="#222357" />
																<stop offset="100%" stopColor="#254aa5" />
															</linearGradient>
														</defs>
														<path
															d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601l6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z"
															fill="url(#logosVisa0)"
															transform="matrix(1 0 0 -1 0 82.668)"
														/>
													</svg>
												</div>
												<div className="flex h-8 items-center rounded-bl-md border border-transparent bg-background px-2 shadow ring-1 ring-foreground/10">
													<span className="text-muted-foreground text-sm">
														MM/YY
													</span>
												</div>
												<div className="flex h-8 items-center rounded-br-md border border-transparent bg-background px-2 shadow ring-1 ring-foreground/10">
													<span className="text-muted-foreground text-sm">
														CVV
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Step 2 — Invoice / sign illustration */}
						<div className="row-span-2 grid grid-rows-subgrid gap-8">
							<div className="@4xl:pr-12">
								<h3 className="text-balance font-semibold text-lg">
									<span className="self-center font-mono text-muted-foreground text-sm">
										{" "}
										{steps[1]?.number}
									</span>{" "}
									{steps[1]?.title}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{steps[1]?.description}
								</p>
							</div>
							<div className="perspective-dramatic mask-radial-from-60% mask-radial-at-top-left mask-radial-[95%_100%] pt-6 @4xl:pl-4 pl-5">
								<div className="rotate-y-3 -skew-y-4">
									<div aria-hidden="true">
										<div className="relative overflow-hidden rounded-2xl bg-card p-8 text-sm shadow-black/6.5 shadow-lg ring-1 ring-border-illustration">
											<div className="space-y-0.5">
												<svg
													className="size-5"
													fill="none"
													viewBox="0 0 180 220"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														clipRule="evenodd"
														d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
														fill="url(#paint_logo_sign)"
														fillRule="evenodd"
													/>
													<defs>
														<linearGradient
															gradientUnits="userSpaceOnUse"
															id="paint_logo_sign"
															x1="90"
															x2="90"
															y1="0"
															y2="220"
														>
															<stop stopColor="#9B99FE" />
															<stop offset="1" stopColor="#2BC8B7" />
														</linearGradient>
													</defs>
												</svg>
												<div className="mt-4 font-mono text-xs">INV-456789</div>
												<div className="mt-1 -translate-x-1 font-mono font-semibold text-2xl">
													$284,342.57
												</div>
												<div className="font-medium text-xs">
													Due in 15 days
												</div>
											</div>
											<div className="my-6 flex h-24 items-center justify-center rounded-md border border-foreground/15 border-dashed bg-foreground/5">
												<div className="border-b px-6 font-serif">
													Sign here
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Step 3 — Confirmation illustration */}
						<div className="row-span-2 grid grid-rows-subgrid gap-8">
							<div className="@4xl:pr-12">
								<h3 className="text-balance font-semibold text-lg">
									<span className="self-center font-mono text-muted-foreground text-sm">
										{steps[2]?.number}
									</span>{" "}
									{steps[2]?.title}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{steps[2]?.description}
								</p>
							</div>
							<div className="perspective-dramatic mask-radial-from-60% mask-radial-at-top-left mask-radial-[95%_100%] pt-6 @4xl:pl-4 pl-5">
								<div className="rotate-y-3 -skew-y-4">
									<div aria-hidden="true">
										<div className="relative overflow-hidden rounded-2xl border border-transparent bg-card p-8 text-sm shadow-black/6.5 shadow-lg ring-1 ring-border-illustration">
											<div className="mb-6 flex items-start justify-between">
												<div className="space-y-0.5">
													<svg
														className="size-5"
														fill="none"
														viewBox="0 0 180 220"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															clipRule="evenodd"
															d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
															fill="url(#paint_logo_confirm)"
															fillRule="evenodd"
														/>
														<defs>
															<linearGradient
																gradientUnits="userSpaceOnUse"
																id="paint_logo_confirm"
																x1="90"
																x2="90"
																y1="0"
																y2="220"
															>
																<stop stopColor="#9B99FE" />
																<stop offset="1" stopColor="#2BC8B7" />
															</linearGradient>
														</defs>
													</svg>
													<div className="mt-4 font-mono text-xs">
														INV-456789
													</div>
													<div className="mt-1 -translate-x-1 font-mono font-semibold text-2xl">
														$284,342.57
													</div>
													<div className="font-medium text-xs">
														Due in 15 days
													</div>
												</div>
												<div
													aria-hidden="true"
													className="w-16 space-y-2 rounded-md bg-illustration p-2 shadow-md ring-1 ring-border-illustration"
												>
													<div className="flex items-center gap-1">
														<div className="size-2.5 rounded-full bg-foreground/15" />
														<div className="h-[3px] w-4 rounded-full bg-foreground/15" />
													</div>
													<div className="space-y-1.5">
														<div className="flex items-center gap-1">
															<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
															<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
														</div>
														<div className="flex items-center gap-1">
															<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
															<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
														</div>
													</div>
													<div className="space-y-1.5">
														<div className="h-[3px] w-full rounded-full bg-foreground/15" />
														<div className="flex items-center gap-1">
															<div className="h-[3px] w-2/3 rounded-full bg-foreground/15" />
															<div className="h-[3px] w-1/3 rounded-full bg-foreground/15" />
														</div>
													</div>
													<svg
														className="ml-auto size-3"
														fill="none"
														height="24"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														viewBox="0 0 24 24"
														width="24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
														<path d="M3 21h18" />
													</svg>
												</div>
											</div>
											<div className="mb-12 space-y-1.5">
												<div className="grid grid-cols-[auto_1fr] items-center">
													<span className="block w-18 text-muted-foreground">
														To
													</span>
													<span className="h-2 w-1/4 rounded-full bg-border px-2" />
												</div>
												<div className="grid grid-cols-[auto_1fr] items-center">
													<span className="block w-18 text-muted-foreground">
														From
													</span>
													<span className="h-2 w-1/2 rounded-full bg-border px-2" />
												</div>
												<div className="grid grid-cols-[auto_1fr] items-center">
													<span className="block w-18 text-muted-foreground">
														Address
													</span>
													<span className="h-2 w-2/3 rounded-full bg-border px-2" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
