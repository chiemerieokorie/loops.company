"use client";

// Block002: Split layout — testimonial panel on the left, centered form on the right 2/3

export function SignupSplitLeft() {
	return (
		<main className="bg-background">
			<div className="grid min-h-dvh lg:grid-cols-3">
				{/* Testimonial + logos panel */}
				<div className="h-full py-6 pl-6 max-lg:hidden">
					<div className="relative inset-ring inset-ring-border grid h-full grid-rows-[1fr_auto] gap-32 rounded-2xl not-dark:bg-foreground/2 p-12">
						<div className="mx-auto flex max-w-xs flex-col justify-center">
							<div className="space-y-6">
								<p className="text-balance text-center text-foreground text-lg">
									Looks really good. Did you design in code or Figma first?
								</p>
								<div className="space-y-3">
									<div className="relative mx-auto size-8 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/25">
										<img
											alt="Shadcn Avatar"
											className="size-full object-cover"
											decoding="async"
											height={56}
											loading="lazy"
											src="https://avatars.githubusercontent.com/u/124599?v=4"
											width={56}
										/>
									</div>
									<div className="space-y-1">
										<p className="text-balance text-center text-foreground text-sm">
											Shadcn
										</p>
										<p className="text-balance text-center text-foreground/65 text-xs">
											Creator of Shadcn/UI
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="mx-auto mt-4 flex max-w-xs flex-wrap justify-center gap-x-12 gap-y-10 pb-4 *:w-fit **:fill-foreground/75">
							<svg
								fill="none"
								height="16"
								viewBox="0 0 251 83"
								width="auto"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M153.602 82.4612H173.519V0.015625H153.602V82.4612ZM118.632 58.9549C118.632 61.8498 116.201 64.2815 113.306 64.2815H101.726C98.8314 64.2815 96.3998 61.8498 96.3998 58.9549C96.3998 57.797 96.3998 25.722 96.3998 25.722H76.4831V60.5761C76.4831 74.8188 85.6309 82.3454 99.063 82.3454H118.516C130.906 82.3454 138.433 73.4292 138.433 60.5761V25.722H118.516C118.632 25.722 118.632 57.9128 118.632 58.9549Z"
									fill="#1CE783"
								/>
							</svg>
							<svg
								aria-label="Vercel logotype"
								height="16"
								role="img"
								viewBox="0 0 262 52"
								width="auto"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M59.8019 52L29.9019 0L0.00190544 52H59.8019Z"
									fill="currentColor"
								/>
							</svg>
						</div>

						<div className="mask-radial-from-35% mask-radial-[100%_100%] mask-radial-at-bottom absolute inset-0 mt-auto h-fit max-h-120 rounded-2xl opacity-20 dark:opacity-35">
							<img
								alt="background"
								className="size-full object-cover"
								decoding="async"
								height={426}
								loading="lazy"
								src="https://images.unsplash.com/photo-1601774413782-7864d677650e?q=80&w=2340&auto=format&fit=crop"
								width={640}
							/>
						</div>
					</div>
				</div>

				{/* Form column — centered text */}
				<div className="flex flex-col items-center justify-center p-6 lg:col-span-2">
					<div className="m-auto max-w-xs text-center">
						<a
							aria-label="go home"
							className="mx-auto flex size-10 *:m-auto"
							href="#"
						>
							<svg
								className="size-6"
								fill="none"
								viewBox="0 0 180 220"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clipRule="evenodd"
									d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
									fill="url(#paint_logo_sl)"
									fillRule="evenodd"
								/>
								<defs>
									<linearGradient
										gradientUnits="userSpaceOnUse"
										id="paint_logo_sl"
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

						<div className="mt-6 mb-10 space-y-2">
							<h1 className="font-semibold text-xl">Create an Account</h1>
							<p className="text-muted-foreground text-sm">
								Sign up to get started
							</p>
						</div>

						<div className="space-y-5">
							<div className="space-y-3">
								<button
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
									type="button"
								>
									<svg
										height="1em"
										preserveAspectRatio="xMidYMid"
										viewBox="0 0 256 222"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="m128 0 128 221.705H0z" fill="currentColor" />
									</svg>
									Continue with Vercel
								</button>

								<button
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
									type="button"
								>
									<svg viewBox="0 0 2447.6 2452.5">
										<g clipRule="evenodd" fillRule="evenodd">
											<path
												d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
												fill="#36c5f0"
											/>
											<path
												d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
												fill="#2eb67d"
											/>
											<path
												d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
												fill="#ecb22e"
											/>
											<path
												d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
												fill="#e01e5a"
											/>
										</g>
									</svg>
									Continue with Slack
								</button>

								<button
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
									type="button"
								>
									<svg
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
										<path d="M3 7V5a2 2 0 0 1 2-2h2" />
										<path d="M17 3h2a2 2 0 0 1 2 2v2" />
										<path d="M21 17v2a2 2 0 0 1-2 2h-2" />
										<path d="M7 21H5a2 2 0 0 1-2-2v-2" />
										<path d="M8 14s1.5 2 4 2 4-2 4-2" />
										<path d="M9 9h.01" />
										<path d="M15 9h.01" />
									</svg>
									Continue with Passkey
								</button>
							</div>

							<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-3">
								<div className="h-0.5 border-card border-b bg-border" />
								<div className="text-center text-muted-foreground text-sm">
									or
								</div>
								<div className="h-0.5 border-card border-b bg-border" />
							</div>

							<form action="" className="space-y-5">
								<div className="space-y-2.5">
									<label
										className="block select-none text-left font-medium text-sm leading-none"
										htmlFor="email-sl"
									>
										Email
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="email-sl"
										placeholder="Enter your email"
										required
										type="email"
									/>
								</div>
								<button
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
									type="submit"
								>
									Continue with Email
								</button>
							</form>

							<div className="pt-5 text-muted-foreground text-sm">
								Already have an account?{" "}
								<a
									className="font-medium text-primary hover:underline"
									href="#"
								>
									Sign in
								</a>
							</div>
						</div>
					</div>

					<div className="mx-auto mt-auto w-full max-w-5xl pt-6">
						<div className="mx-auto flex max-w-xs items-center justify-center gap-6">
							<a
								className="text-muted-foreground text-sm hover:text-foreground"
								href="#"
							>
								Privacy
							</a>
							<a
								className="text-muted-foreground text-sm hover:text-foreground"
								href="#"
							>
								Terms
							</a>
							<a
								className="text-muted-foreground text-sm hover:text-foreground"
								href="#"
							>
								Cookies
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
