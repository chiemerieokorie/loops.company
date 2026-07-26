export interface CodeWindowProps {
	collaboratorAvatars?: Array<{ src: string; alt: string }>;
	filename?: string;
}

export function CodeWindow({
	filename = "response.json",
	collaboratorAvatars = [
		{
			src: "https://avatars.githubusercontent.com/u/47919550?v=4",
			alt: "Méschac Irung",
		},
		{
			src: "https://avatars.githubusercontent.com/u/31113941?v=4",
			alt: "Bernard Ngandu",
		},
	],
}: CodeWindowProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="relative @3xl:p-12">
					<div
						aria-hidden="true"
						className="mask-x-from-95% pointer-events-none absolute -inset-x-12 inset-y-0 @3xl:block hidden border-foreground/5 border-y"
					/>
					<div
						aria-hidden="true"
						className="mask-y-from-95% pointer-events-none absolute inset-x-0 -inset-y-12 @3xl:block hidden border-foreground/5 border-x"
					/>
					<div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-card p-1 shadow-black/6.5 shadow-lg ring-1 ring-border backdrop-blur [--code-editor-background:var(--color-illustration)]">
						{/* Collaborator avatars */}
						<div className="absolute top-0 right-1 z-10 flex h-9 w-fit translate-y-px items-center -space-x-2">
							{collaboratorAvatars.map((avatar) => (
								<button
									className="group my-auto flex size-8 rounded-xl duration-200 active:scale-90"
									key={avatar.alt}
								>
									<div className="m-auto size-5 rounded-full bg-background shadow shadow-zinc-950/5 transition-all duration-200 *:rounded-full group-focus:ring-2 group-focus:ring-indigo-400">
										<img
											alt={avatar.alt}
											className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover"
											decoding="async"
											height={52}
											loading="lazy"
											src={avatar.src}
											width={52}
										/>
									</div>
								</button>
							))}
						</div>
						{/* File tab header */}
						<div className="absolute right-1 left-0 grid h-9 grid-cols-[auto_1fr]">
							<div className="pl-6">
								<div className="flex h-full items-center gap-1.5 font-mono text-foreground/75 text-xs">
									<svg
										className="lucide lucide-braces size-3 text-amber-600"
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
										<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
										<path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
									</svg>
									{filename}
								</div>
							</div>
							<div className="grid h-full grid-cols-[auto_1fr_auto]">
								<div className="translate-px h-1/2 w-5 -translate-y-px bg-card">
									<div className="mt-px h-full rounded-tr-xl border-t border-r bg-(--code-editor-background)" />
								</div>
								<div className="h-full rounded-bl-xl border-b border-l bg-card" />
								<div className="h-full w-5 bg-card">
									<div className="h-1/2 translate-y-[200%] bg-card">
										<div className="-mt-px h-full rounded-tr-xl border-t border-r bg-(--code-editor-background)" />
									</div>
								</div>
							</div>
						</div>
						{/* Code content */}
						<div className="h-96 rounded-xl border bg-(--code-editor-background) pt-9">
							<div className="mask-y-from-80% scheme-dark h-full overflow-auto">
								<div>
									<div className="[&_pre]:no-scrollbar [&_pre]:!bg-transparent -mx-1 [&_code]:font-mono [&_code]:text-[13px]/2 [&_pre]:h-fit [&_pre]:min-h-[12rem] [&_pre]:rounded-xl [&_pre]:border-l [&_pre]:border-none [&_pre]:p-2 [&_pre]:pb-0 [&_pre]:leading-snug">
										<pre
											className="shiki shiki-themes github-light vesper"
											style={{
												backgroundColor: "rgb(255, 255, 255)",
												color: "rgb(36, 41, 46)",
											}}
											tabIndex={0}
										>
											<code>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"{"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'    "users"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: [</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"        {"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'            "name"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(3, 47, 98)" }}>
														{'"John Doe"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'            "email"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(3, 47, 98)" }}>
														{'"john.doe@example.com"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'            "age"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>30</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'            "cart"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: [</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"                {"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "id"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>1</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "name"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(3, 47, 98)" }}>
														{'"Product 1"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "price"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>10</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"                },"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"                {"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "id"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>2</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "name"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(3, 47, 98)" }}>
														{'"Product 2"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "price"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>20</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"                }"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"            ]"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"        },"}
													</span>
												</span>
											</code>
										</pre>
									</div>
								</div>
								<div>
									<div className="[&_pre]:no-scrollbar [&_pre]:!bg-transparent -mx-1 [--counter-start:20] [&_code]:font-mono [&_code]:text-[13px]/2 [&_pre]:h-fit [&_pre]:border-l [&_pre]:p-2 [&_pre]:pt-0 [&_pre]:leading-snug">
										<pre
											className="shiki shiki-themes github-light vesper"
											style={{
												backgroundColor: "rgb(255, 255, 255)",
												color: "rgb(36, 41, 46)",
											}}
											tabIndex={0}
										>
											<code>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"        {"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'            "name"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(3, 47, 98)" }}>
														{'"Jane Smith"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'            "email"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(3, 47, 98)" }}>
														{'"jane.smith@example.com"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'            "age"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>25</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'            "cart"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: [</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"                {"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "id"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>1</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "name"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(3, 47, 98)" }}>
														{'"Product 1"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "price"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>10</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"                },"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"                {"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "id"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>2</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "name"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(3, 47, 98)" }}>
														{'"Product 2"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(0, 92, 197)" }}>
														{'                    "price"'}
													</span>
													<span style={{ color: "rgb(36, 41, 46)" }}>: </span>
													<span style={{ color: "rgb(0, 92, 197)" }}>20</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"                }"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"            ]"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"        }"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"    ]"}
													</span>
												</span>
												<span className="line">
													<span style={{ color: "rgb(36, 41, 46)" }}>
														{"}"}
													</span>
												</span>
											</code>
										</pre>
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
