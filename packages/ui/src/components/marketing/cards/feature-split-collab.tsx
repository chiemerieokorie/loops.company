export interface FeatureSplitCollabProps {
	description?: string;
	eyebrow?: string;
	feature1Description?: string;
	feature1Title?: string;
	feature2Description?: string;
	feature2Title?: string;
	heading?: string;
}

export function FeatureSplitCollab({
	eyebrow = "Real-time Collaboration",
	heading = "Real-time Collaboration",
	description = "Work seamlessly with your team using real-time collaboration tools designed for modern workflows.",
	feature1Title = "Comment Threads",
	feature1Description = "Discuss changes inline without leaving your workflow.",
	feature2Title = "Shared Workspaces",
	feature2Description = "Invite your team and collaborate in a shared environment.",
}: FeatureSplitCollabProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @3xl:grid-cols-6 gap-3 overflow-hidden rounded-2xl border">
					{/* Left 3 columns spanning 2 rows: heading + @Bernard comment composer */}
					<div className="@3xl:col-span-3 @3xl:row-span-2 flex flex-col gap-8 @3xl:border-r border-b @3xl:border-b-0 p-8">
						<div>
							<p className="font-medium text-primary text-sm">{eyebrow}</p>
							<h2 className="mt-2 font-bold text-2xl text-foreground">
								{heading}
							</h2>
							<p className="mt-3 text-muted-foreground">{description}</p>
						</div>

						{/* Comment composer illustration */}
						<div
							aria-hidden="true"
							className="relative mt-auto flex w-full origin-bottom flex-col space-y-4 rounded-2xl border border-transparent bg-illustration px-4 pt-4 pb-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration"
						>
							<p className="font-medium text-primary text-sm">
								@Bernard{" "}
								<span className="font-normal text-muted-foreground">
									Shared 2 invoices
								</span>
							</p>
							<div className="-ml-1.5 flex text-muted-foreground">
								<button
									className="flex size-7 rounded-full hover:bg-muted hover:text-foreground"
									type="button"
								>
									<svg
										className="m-auto size-4"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="4" />
										<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
									</svg>
								</button>
								<button
									className="flex size-7 rounded-full hover:bg-muted hover:text-foreground"
									type="button"
								>
									<svg
										className="m-auto size-4"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
										<path d="M8 14s1.5 2 4 2 4-2 4-2" />
										<line x1="9" x2="9.01" y1="9" y2="9" />
										<line x1="15" x2="15.01" y1="9" y2="9" />
									</svg>
								</button>
								<button
									className="flex size-7 rounded-full hover:bg-muted hover:text-foreground"
									type="button"
								>
									<svg
										className="m-auto size-4"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M13.234 20.252 21 12.3" />
										<path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" />
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* Top-right 3 columns */}
					<div className="@3xl:col-span-3 border-b p-8">
						<h3 className="font-semibold text-foreground">{feature1Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature1Description}</p>
					</div>

					{/* Bottom-right 3 columns */}
					<div className="@3xl:col-span-3 p-8">
						<h3 className="font-semibold text-foreground">{feature2Title}</h3>
						<p className="mt-3 text-muted-foreground">{feature2Description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
