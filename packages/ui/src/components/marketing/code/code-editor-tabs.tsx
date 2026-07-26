export interface CodeEditorTabsProps {
	activeTab?: string;
}

export function CodeEditorTabs({ activeTab = "users" }: CodeEditorTabsProps) {
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
					<div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-card px-1 pb-1 shadow-black/6.5 shadow-lg ring-1 ring-border-illustration backdrop-blur [--code-editor-background:var(--color-illustration)]">
						{/* Tab bar */}
						<div className="relative h-10">
							<div className="flex h-full items-center gap-1">
								{/* users.json tab (active) */}
								<button
									className="relative z-10 flex h-8 items-center gap-1.5 rounded-lg px-3 font-mono text-foreground/75 text-xs outline-none first:rounded-tl-xl not-data-[state=active]:hover:bg-foreground/5 not-data-[state=active]:focus-visible:bg-foreground/5"
									data-state={activeTab === "users" ? "active" : ""}
									data-tab="users"
								>
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
									users.json
								</button>
								{/* response.json tab */}
								<button
									className="relative z-10 flex h-8 items-center gap-1.5 rounded-lg px-3 font-mono text-foreground/75 text-xs outline-none first:rounded-tl-xl not-data-[state=active]:hover:bg-foreground/5 not-data-[state=active]:focus-visible:bg-foreground/5"
									data-state={activeTab === "response" ? "active" : ""}
									data-tab="response"
								>
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
									response.json
								</button>
							</div>
							{/* Active tab indicator with curved corner chrome */}
							<div
								className="absolute top-1 -bottom-px -translate-x-4 rounded-t-xl border-x border-t bg-(--code-editor-background)"
								style={{ left: "16px", width: "114px" }}
							>
								<div className="absolute -bottom-4 -left-px size-4 border-l bg-(--code-editor-background)" />
								<div className="absolute -right-4 bottom-0 size-4 bg-(--code-editor-background)">
									<div className="absolute inset-0 rounded-bl-xl border-b border-l bg-card" />
								</div>
							</div>
						</div>
						{/* Code content */}
						<div className="h-96 rounded-xl border bg-(--code-editor-background)">
							<div className="mask-y-from-80% scheme-dark h-full overflow-auto">
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
												<span style={{ color: "rgb(36, 41, 46)" }}>{"{"}</span>
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
												<span style={{ color: "rgb(36, 41, 46)" }}>{"}"}</span>
											</span>
										</code>
									</pre>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
