export interface HeroCenteredInputProps {
	backgroundSrc?: string;
	description?: string;
	disclaimer?: string;
	inputPlaceholder?: string;
	submitLabel?: string;
	title?: string;
}

export function HeroCenteredInput({
	title = "Write. Refine. Publish.",
	description = "Write poetry and stories with the world's first AI writing muse.",
	inputPlaceholder = "Start writing, or describe what you want to create...",
	submitLabel = "Generate",
	disclaimer = "No account required. Start for free.",
}: HeroCenteredInputProps) {
	return (
		<section>
			<div className="relative pt-24 pb-16 md:pt-36">
				<div className="relative z-30 mx-auto max-w-5xl px-6 text-center">
					<h1 className="mx-auto max-w-3xl text-balance font-semibold text-4xl sm:text-5xl">
						{title}
					</h1>
					<p className="mx-auto mt-3 mb-7 max-w-xl text-balance text-muted-foreground text-xl">
						{description}
					</p>
					<div className="mx-auto w-full max-w-xl">
						<form className="relative w-full">
							<div className="overflow-hidden rounded-2xl border border-border bg-card shadow-black/6.5 shadow-xl ring-1 ring-border transition-all focus-within:ring-2 focus-within:ring-primary/50">
								<textarea
									className="field-sizing-content flex max-h-[6lh] min-h-16 w-full resize-none rounded-none border-none bg-transparent p-4 text-base shadow-none outline-none ring-0"
									placeholder={inputPlaceholder}
									rows={3}
								/>
								<div className="flex items-center justify-between border-border border-t px-3 py-2">
									<div className="flex gap-1.5">
										<button
											aria-label="Attach file"
											className="inline-flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
											type="button"
										>
											<svg
												className="size-4"
												fill="none"
												height="24"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												width="24"
											>
												<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
											</svg>
										</button>
										<button
											aria-label="Insert image"
											className="inline-flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
											type="button"
										>
											<svg
												className="size-4"
												fill="none"
												height="24"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												width="24"
											>
												<rect
													height="18"
													rx="2"
													ry="2"
													width="18"
													x="3"
													y="3"
												/>
												<circle cx="8.5" cy="8.5" r="1.5" />
												<path d="m21 15-5-5L5 21" />
											</svg>
										</button>
									</div>
									<button
										className="inline-flex h-7 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-3 font-medium text-primary-foreground text-xs shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent"
										type="submit"
									>
										<svg
											className="size-3"
											fill="none"
											height="24"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											width="24"
										>
											<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
										</svg>
										{submitLabel}
									</button>
								</div>
							</div>
						</form>
						{disclaimer && (
							<p className="mt-3 text-center text-muted-foreground text-xs">
								{disclaimer}
							</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
