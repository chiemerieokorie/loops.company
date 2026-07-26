import { type CustomerRow, defaultCustomers, statusStyles } from "./data";

export type { CustomerRow };

export interface FeatureGridTableHeroProps {
	customers?: CustomerRow[];
	description?: string;
	highlightText?: string;
	tableTitle?: string;
	title?: string;
}

export function FeatureGridTableHero({
	title = "Set the product direction",
	description = "Monitor your application's activity in real-time.",
	highlightText = "Instantly identify and resolve issues.",
	tableTitle = "Customers",
	customers = defaultCustomers,
}: FeatureGridTableHeroProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="relative">
					<div className="z-10 max-w-xl">
						<h2 className="mb-4 font-semibold text-4xl">{title}</h2>
						<p className="mb-8 text-lg">
							{description}{" "}
							<span className="text-muted-foreground">{highlightText}</span>
						</p>
					</div>
					<div className="-translate-x-44 md:translate-x-0">
						<div aria-hidden="true" className="relative">
							<div className="absolute -right-56 bottom-6 left-[13rem] z-1 md:-right-4 md:w-[calc(100%-12rem)]">
								<div className="relative mx-auto max-w-full rounded-2xl border border-transparent bg-illustration from-card/50 p-6 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
									<div className="mb-4">
										<div className="font-medium">{tableTitle}</div>
										<p className="mt-0.5 line-clamp-1 text-muted-foreground text-sm">
											New users by first user primary channel group
										</p>
									</div>
									<table
										className="w-max table-auto border-collapse lg:w-full"
										data-rounded="medium"
									>
										<thead className="bg-foreground/5 dark:bg-background">
											<tr className="*:border *:p-3 *:text-left *:font-medium *:text-sm">
												<th className="rounded-l-[--card-radius]">#</th>
												<th>Date</th>
												<th>Status</th>
												<th>Customer</th>
												<th className="rounded-r-[--card-radius]">Revenue</th>
											</tr>
										</thead>
										<tbody className="text-sm">
											{customers.map((row) => (
												<tr className="*:border *:p-2" key={row.id}>
													<td>{row.id}</td>
													<td>{row.date}</td>
													<td>
														<span
															className={`rounded-full px-2 py-1 text-xs ${statusStyles[row.status]}`}
														>
															{row.status}
														</span>
													</td>
													<td>
														<div className="flex items-center gap-2 text-title">
															<div className="relative size-5 overflow-hidden rounded-full bg-muted before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/10" />
															<span className="text-foreground">
																{row.name}
															</span>
														</div>
													</td>
													<td>{row.amount}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
							<div className="mask-b-from-50% rounded-2xl border">
								<div className="absolute inset-y-0 left-0 w-[12rem] border-r">
									<div className="flex gap-1.5 px-4 pt-4">
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
										<div className="size-2 rounded-full border border-foreground/5 bg-foreground/5" />
									</div>
								</div>
								<div className="ml-auto w-[calc(100%-12rem)]">
									<div className="h-11 border-b" />
									<div className="relative h-80">
										<div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-50" />
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
