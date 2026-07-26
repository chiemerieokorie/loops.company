export function CodePreviewSplit() {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
				<div className="relative">
					<div className="mask-b-from-75% relative @3xl:grid @3xl:grid-cols-[1fr_auto] @3xl:divide-x divide-dashed divide-border/50 rounded-2xl border border-border/75 bg-background">
						{/* Code panel */}
						<div className="overflow-hidden rounded-l-2xl pr-px">
							{/* Framework tab bar */}
							<div className="h-10 px-1.5">
								<div className="relative h-full">
									<div
										className="absolute bottom-0 h-px translate-y-px rounded-full bg-primary duration-300 ease-in-out will-change-auto"
										style={{ width: "64px", left: "8px" }}
									/>
									<div className="relative flex h-full w-fit items-center py-1.5 *:h-full *:rounded-full *:px-2 *:transition-colors *:duration-200">
										{/* Next.js tab (active) */}
										<button
											className="flex items-center gap-1.5 text-muted-foreground text-sm hover:bg-foreground/5 data-[state=active]:text-foreground"
											data-state="active"
										>
											<svg
												fill="none"
												height="1em"
												viewBox="0 0 180 180"
												width="1em"
												xmlns="http://www.w3.org/2000/svg"
											>
												<mask
													height="180"
													id="nextjs__mask"
													maskUnits="userSpaceOnUse"
													style={{ maskType: "alpha" }}
													width="180"
													x="0"
													y="0"
												>
													<circle cx="90" cy="90" fill="black" r="90" />
												</mask>
												<g mask="url(#nextjs__mask)">
													<circle
														cx="90"
														cy="90"
														fill="black"
														r="87"
														stroke="white"
														strokeWidth="6"
													/>
													<path
														d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
														fill="url(#nextjs__grad0)"
													/>
													<rect
														fill="url(#nextjs__grad1)"
														height="72"
														width="12"
														x="115"
														y="54"
													/>
												</g>
												<defs>
													<linearGradient
														gradientUnits="userSpaceOnUse"
														id="nextjs__grad0"
														x1="109"
														x2="144.5"
														y1="116.5"
														y2="160.5"
													>
														<stop stopColor="white" />
														<stop
															offset="1"
															stopColor="white"
															stopOpacity="0"
														/>
													</linearGradient>
													<linearGradient
														gradientUnits="userSpaceOnUse"
														id="nextjs__grad1"
														x1="121"
														x2="120.799"
														y1="54"
														y2="106.875"
													>
														<stop stopColor="white" />
														<stop
															offset="1"
															stopColor="white"
															stopOpacity="0"
														/>
													</linearGradient>
												</defs>
											</svg>
											<span>Next.js</span>
										</button>
										{/* Svelte tab */}
										<button
											className="flex items-center gap-1.5 text-muted-foreground text-sm hover:bg-foreground/5 data-[state=active]:text-foreground"
											data-state="false"
										>
											<svg
												height="1em"
												preserveAspectRatio="xMidYMid"
												viewBox="0 0 256 308"
												width="1em"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
													fill="#FF3E00"
												/>
												<path
													d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
													fill="#FFF"
												/>
											</svg>
											<span>Svelte</span>
										</button>
									</div>
								</div>
							</div>
							{/* Syntax-highlighted code */}
							<div className="@max-3xl:mr-1 mb-1 ml-1 @max-3xl:rounded-r-lg rounded-l-lg border-y @max-3xl:border-r border-l bg-illustration">
								<div className="no-scrollbar mask-y-from-95% mask-r-from-95% [&_pre]:!bg-transparent aspect-4/3 overflow-auto [&_code]:font-mono [&_code]:text-[13px]/2 [&_pre]:min-h-[12rem] [&_pre]:border-l [&_pre]:border-none [&_pre]:p-2 [&_pre]:pb-0 [&_pre]:pl-2 [&_pre]:leading-snug">
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
												<span style={{ color: "rgb(215, 58, 73)" }}>
													import
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{" { LogoIcon } "}
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>from</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>
													{" '@/components/logo'"}
												</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(215, 58, 73)" }}>
													import
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{" { Button } "}
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>from</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>
													{" '@/components/ui/button'"}
												</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(215, 58, 73)" }}>
													import
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{" { Input } "}
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>from</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>
													{" '@/components/ui/input'"}
												</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(215, 58, 73)" }}>
													import
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{" { Label } "}
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>from</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>
													{" '@/components/ui/label'"}
												</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(215, 58, 73)" }}>
													import
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{" Link "}
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>from</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>
													{" 'next/link'"}
												</span>
											</span>
											<span className="line" />
											<span className="line">
												<span style={{ color: "rgb(215, 58, 73)" }}>
													export
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>
													{" "}
													default
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>
													{" "}
													function
												</span>
												<span style={{ color: "rgb(111, 66, 193)" }}>
													{" "}
													LoginPage
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{"() {"}
												</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(215, 58, 73)" }}>
													{"    return"}
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}> (</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{"        "}
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>{"<"}</span>
												<span style={{ color: "rgb(34, 134, 58)" }}>
													section
												</span>
												<span style={{ color: "rgb(111, 66, 193)" }}>
													{" "}
													className
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>=</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>
													{'"flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32"'}
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>{">"}</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{"            "}
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>{"<"}</span>
												<span style={{ color: "rgb(34, 134, 58)" }}>form</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(111, 66, 193)" }}>
													{"                action"}
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>=</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>{'""'}</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(111, 66, 193)" }}>
													{"                className"}
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>=</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>
													{
														'"bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md"'
													}
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>{">"}</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{"                "}
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>{"<"}</span>
												<span style={{ color: "rgb(34, 134, 58)" }}>div</span>
												<span style={{ color: "rgb(111, 66, 193)" }}>
													{" "}
													className
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>=</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>
													{'"p-8 pb-6"'}
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>{">"}</span>
											</span>
											<span className="line">
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{"                    "}
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>{"<"}</span>
												<span style={{ color: "rgb(34, 134, 58)" }}>h1</span>
												<span style={{ color: "rgb(111, 66, 193)" }}>
													{" "}
													className
												</span>
												<span style={{ color: "rgb(215, 58, 73)" }}>=</span>
												<span style={{ color: "rgb(3, 47, 98)" }}>
													{'"mb-1 mt-4 text-xl font-semibold"'}
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>{">"}</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>
													Sign In to Astor
												</span>
												<span style={{ color: "rgb(36, 41, 46)" }}>
													{"</h1>"}
												</span>
											</span>
										</code>
									</pre>
								</div>
							</div>
						</div>
						{/* Preview panel (mini login form) */}
						<div className="relative w-80" />
						<div className="@3xl:absolute @3xl:top-0 @3xl:-right-2 @3xl:h-full h-fit @3xl:w-84 -translate-y-6 @3xl:translate-y-4 rounded-xl bg-card pb-4 shadow-black/6.5 shadow-xl ring-1 ring-border dark:shadow-black/50">
							{/* Mini browser chrome */}
							<div className="flex h-9 items-center gap-1.5 px-4">
								<div className="size-2 rounded-full border border-foreground/10 bg-foreground/5" />
								<div className="size-2 rounded-full border border-foreground/10 bg-foreground/5" />
								<div className="size-2 rounded-full border border-foreground/10 bg-foreground/5" />
							</div>
							{/* Rendered preview */}
							<div>
								<section className="relative flex">
									<form action="" className="m-auto w-full max-w-80">
										<div className="p-6">
											<div>
												<a aria-label="go home" href="/">
													<svg
														className="size-5"
														fill="none"
														viewBox="0 0 180 220"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															clipRule="evenodd"
															d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
															fill="url(#preview_logo)"
															fillRule="evenodd"
														/>
														<defs>
															<linearGradient
																gradientUnits="userSpaceOnUse"
																id="preview_logo"
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
												</a>
												<h1 className="mt-6 text-balance font-semibold text-foreground text-xl">
													<span className="text-muted-foreground">
														Welcome back to Astor!
													</span>{" "}
													Sign in to continue
												</h1>
											</div>
											<div className="mt-6 space-y-2">
												<button
													className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-none duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50"
													type="button"
												>
													<svg
														className="size-4"
														viewBox="0 0 256 262"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
															fill="#4285f4"
														/>
														<path
															d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
															fill="#34a853"
														/>
														<path
															d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
															fill="#fbbc05"
														/>
														<path
															d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
															fill="#eb4335"
														/>
													</svg>
													<span>Google</span>
												</button>
												<button
													className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-none duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50"
													type="button"
												>
													<svg
														className="size-4"
														viewBox="0 0 256 256"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
															fill="#1877f2"
														/>
														<path
															d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
															fill="#fff"
														/>
													</svg>
													<span>Facebook</span>
												</button>
											</div>
											<hr className="mt-6 mb-5" />
											<div className="space-y-6">
												<div className="space-y-2">
													<label
														className="block select-none font-medium text-sm"
														htmlFor="preview-email"
													>
														Email
													</label>
													<input
														className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/15 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
														id="preview-email"
														name="email"
														placeholder="Your email"
														required
														type="email"
													/>
												</div>
												<button className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-1 transition-none hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50">
													Continue
												</button>
											</div>
										</div>
										<div className="px-6">
											<p className="text-muted-foreground text-sm">
												{"Don't have an account? "}
												<a
													className="inline-flex cursor-pointer items-center justify-center font-medium text-primary text-sm underline-offset-4 hover:underline"
													href="#"
												>
													Create an account
												</a>
											</p>
										</div>
									</form>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
