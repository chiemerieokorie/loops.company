export interface StepsScrollConnectorProps {
	description?: string;
	eyebrow?: string;
	title?: string;
}

export function StepsScrollConnector({
	eyebrow,
	title = "Set up your pipeline in minutes with Astor analytics platform",
	description = "Our powerful analytics platform helps you visualize complex data, identify trends, and make data-driven decisions with confidence.",
}: StepsScrollConnectorProps) {
	return (
		<section className="overflow-hidden bg-background py-24">
			<div className="relative mx-auto max-w-5xl space-y-2 pr-6 md:px-6">
				<div className="mb-32 max-w-xl space-y-4 max-md:pl-6">
					{eyebrow && (
						<span className="font-medium text-primary text-sm">{eyebrow}</span>
					)}
					<h2 className="text-balance font-semibold text-3xl text-foreground">
						{title}
					</h2>
					<p className="text-balance text-lg text-muted-foreground">
						{description}
					</p>
				</div>

				{/* Step 1 */}
				<div className="flex gap-4 max-md:pl-4 sm:gap-8 md:gap-16 lg:gap-24">
					<div className="relative grid w-7 grid-rows-[auto_1fr]">
						<span className="relative flex size-6 items-center justify-center rounded-full border border-transparent bg-background font-medium font-mono text-foreground text-xs shadow ring-1 ring-foreground/10">
							1
						</span>
						<div aria-hidden="true" className="relative">
							<div className="absolute inset-x-0 top-2 bottom-[15.45rem] mx-auto w-0.5 border-background border-r bg-border" />
							<div className="absolute inset-x-0 bottom-0 mx-auto h-[4.5rem] w-0.5 border-background border-r bg-border" />
							<div className="absolute inset-x-0 bottom-20 h-40 translate-x-[0.5px] -scale-x-100">
								<div className="absolute top-0 left-0 h-40 w-1/2 -translate-x-2 rounded-l-full border-background border-y border-l">
									<div className="size-full rounded-l-full border-y border-l" />
								</div>
								<div className="absolute right-1/2 -bottom-2 size-2.5 translate-x-px rounded-tr-full border-t border-r">
									<div className="size-full rounded-tr-full border-background border-t border-r" />
								</div>
								<div className="absolute -top-[7px] right-1/2 size-[9px] translate-x-px rounded-br-full border-r border-b">
									<div className="size-full rounded-br-full border-background border-r border-b" />
								</div>
							</div>
						</div>
					</div>
					<div className="w-full pb-32">
						<div className="relative z-10 max-w-xl space-y-3">
							<h3 className="text-balance font-semibold text-foreground text-xl">
								Transform your data into visual insights
							</h3>
							<p className="text-balance text-muted-foreground md:text-lg">
								Transform raw data into actionable insights with our intuitive
								visualization tools. Create beautiful charts and graphs that
								make complex information easy to understand and share.
							</p>
							<div className="mt-12 flex gap-12">
								<div className="space-y-1">
									<div className="font-bold text-4xl text-foreground">90+</div>
									<p className="text-muted-foreground text-sm">Integrations</p>
								</div>
								<div className="space-y-1">
									<div className="font-bold text-4xl text-foreground">56%</div>
									<p className="text-muted-foreground text-sm">
										Productivity Boost
									</p>
								</div>
							</div>
						</div>
						{/* Decorative chart placeholder */}
						<div aria-hidden="true" className="-mt-24">
							<div className="-mb-4 flex aspect-auto h-72 items-end justify-center overflow-hidden rounded-2xl border border-border/50 bg-muted/20 p-4">
								<div className="flex h-48 w-full items-end gap-3">
									{[40, 100, 42, 65, 20, 100].map((h, i) => (
										<div className="flex flex-1 items-end gap-1" key={i}>
											<div
												className="flex-1 rounded-sm bg-emerald-500/60"
												style={{ height: `${h}%` }}
											/>
											<div
												className="flex-1 rounded-sm bg-indigo-400/60"
												style={{ height: `${h * 0.6}%` }}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Step 2 */}
				<div className="flex gap-4 max-md:pl-4 sm:gap-8 md:gap-16 lg:gap-24">
					<div className="relative grid w-7 grid-rows-[auto_1fr]">
						<span className="relative flex size-6 items-center justify-center rounded-full border border-transparent bg-background font-medium font-mono text-foreground text-xs shadow ring-1 ring-foreground/10">
							2
						</span>
						<div aria-hidden="true" className="relative">
							<div className="absolute inset-x-0 top-2 bottom-[15.45rem] mx-auto w-0.5 border-background border-r bg-border" />
							<div className="absolute inset-x-0 bottom-0 mx-auto h-[4.5rem] w-0.5 border-background border-r bg-border" />
							<div className="absolute inset-x-0 bottom-20 h-40 translate-x-[0.5px] -scale-x-100">
								<div className="absolute top-0 left-0 h-40 w-1/2 -translate-x-2 rounded-l-full border-background border-y border-l">
									<div className="size-full rounded-l-full border-y border-l" />
								</div>
								<div className="absolute right-1/2 -bottom-2 size-2.5 translate-x-px rounded-tr-full border-t border-r">
									<div className="size-full rounded-tr-full border-background border-t border-r" />
								</div>
								<div className="absolute -top-[7px] right-1/2 size-[9px] translate-x-px rounded-br-full border-r border-b">
									<div className="size-full rounded-br-full border-background border-r border-b" />
								</div>
							</div>
						</div>
					</div>
					<div className="w-[calc(100%-3rem)] pb-32 md:w-[calc(100%-8rem)]">
						<div className="max-w-xl space-y-3">
							<h3 className="text-balance font-semibold text-foreground text-xl">
								Manage your projects efficiently
							</h3>
							<p className="text-balance text-muted-foreground md:text-lg">
								Plan, track, and manage your projects with our comprehensive
								Gantt chart system. Visualize timelines, allocate resources, and
								keep your team aligned on project milestones.
							</p>
						</div>
						{/* Decorative Gantt chart placeholder */}
						<div aria-hidden="true" className="mt-16">
							<div className="overflow-hidden rounded-2xl border border-transparent bg-illustration shadow-black/10 shadow-md ring-1 ring-border-illustration">
								<div className="space-y-4 px-4 pt-4">
									<div className="flex gap-1.5">
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
									</div>
									<div className="space-y-2 pb-4">
										{[
											"Collaborative Editing",
											"AI Scene Analysis",
											"AI-Powered Color Grading",
											"AI Voice-to-Text Subtitles",
										].map((task, i) => (
											<div className="flex items-center gap-3 text-xs" key={i}>
												<div className="w-36 truncate font-medium text-foreground">
													{task}
												</div>
												<div className="h-5 flex-1 overflow-hidden rounded bg-muted/50">
													<div
														className="h-full rounded bg-primary/30"
														style={{
															width: `${40 + i * 15}%`,
															marginLeft: `${i * 8}%`,
														}}
													/>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Step 3 */}
				<div className="flex gap-4 max-md:pl-4 sm:gap-8 md:gap-16 lg:gap-24">
					<div className="relative grid w-7 grid-rows-[auto_1fr]">
						<span className="relative flex size-6 items-center justify-center rounded-full border border-transparent bg-background font-medium font-mono text-foreground text-xs shadow ring-1 ring-foreground/10">
							3
						</span>
						<div aria-hidden="true" className="relative">
							<div className="absolute inset-x-0 top-2 mx-auto h-[calc(4rem+0.75px)] w-0.5 border-background border-r bg-border" />
							<div className="mask-b-from-35% absolute inset-x-0 top-[15.5rem] bottom-0 mx-auto w-0.5 border-background border-r bg-border" />
							<div className="absolute inset-x-0 top-20 h-40">
								<div className="absolute top-0 left-0 h-40 w-1/2 -translate-x-2 rounded-l-full border-y border-l">
									<div className="size-full rounded-l-full border-background border-y border-l" />
								</div>
								<div className="absolute right-1/2 -bottom-2 size-2.5 translate-x-px rounded-tr-full border-background border-t border-r">
									<div className="size-full rounded-tr-full border-t border-r" />
								</div>
								<div className="absolute -top-[7px] right-1/2 size-[9px] translate-x-px rounded-br-full border-background border-r border-b">
									<div className="size-full rounded-br-full border-r border-b" />
								</div>
							</div>
						</div>
					</div>
					<div className="w-[calc(100%-3rem)] md:w-[calc(100%-8rem)]">
						<div className="relative z-10 max-w-xl space-y-3">
							<h3 className="text-balance font-semibold text-foreground text-xl">
								Create your perfect workspace layout
							</h3>
							<p className="text-balance text-muted-foreground md:text-lg">
								Design your ideal analytics dashboard with our flexible layout
								options. Arrange components, resize panels, and create
								personalized views that match your specific workflow needs.
							</p>
						</div>
						{/* Decorative table placeholder */}
						<div aria-hidden="true" className="mt-16">
							<div className="relative">
								<div className="mask-b-from-50% overflow-hidden rounded-2xl border">
									<div className="flex gap-1.5 border-b bg-foreground/5 px-4 py-2">
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
									</div>
									<table className="w-full table-auto border-collapse text-sm">
										<thead className="bg-foreground/5">
											<tr className="*:border *:p-3 *:text-left *:font-medium">
												<th>#</th>
												<th>Date</th>
												<th>Status</th>
												<th>Customer</th>
												<th>Revenue</th>
											</tr>
										</thead>
										<tbody>
											{[
												{
													n: 1,
													date: "10/31/2023",
													status: "Paid",
													statusClass:
														"bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
													customer: "Bernard Ng",
													revenue: "$43.99",
												},
												{
													n: 2,
													date: "10/21/2023",
													status: "Ref",
													statusClass:
														"bg-amber-500/10 text-amber-800 dark:text-amber-200",
													customer: "Méschac Irung",
													revenue: "$19.99",
												},
												{
													n: 3,
													date: "10/15/2023",
													status: "Paid",
													statusClass:
														"bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
													customer: "Glodie Ng",
													revenue: "$99.99",
												},
												{
													n: 4,
													date: "10/12/2023",
													status: "Cancelled",
													statusClass:
														"bg-rose-500/10 text-rose-800 dark:text-rose-200",
													customer: "Theo Ng",
													revenue: "$19.99",
												},
											].map((row) => (
												<tr className="*:border *:p-2" key={row.n}>
													<td>{row.n}</td>
													<td>{row.date}</td>
													<td>
														<span
															className={`inset-ring-1 inset-ring-foreground/10 rounded-full px-2 py-1 text-xs ${row.statusClass}`}
														>
															{row.status}
														</span>
													</td>
													<td>{row.customer}</td>
													<td>{row.revenue}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
