export interface LoginCardIconInputsProps {
	forgotPasswordHref?: string;
	privacyHref?: string;
	signUpHref?: string;
	supportHref?: string;
	termsHref?: string;
	welcomeMessage?: string;
}

export function LoginCardIconInputs({
	welcomeMessage = "Welcome back to Astor!",
	signUpHref = "#",
	forgotPasswordHref = "#",
	termsHref = "#",
	privacyHref = "#",
	supportHref = "#",
}: LoginCardIconInputsProps) {
	return (
		<main className="relative min-h-dvh overflow-hidden bg-background">
			<div className="relative flex min-h-dvh flex-col items-center justify-center p-6">
				<div className="mx-auto w-full max-w-sm">
					<div className="mb-8 space-y-4 px-4">
						<a className="inline-block p-4" href="#">
							<svg
								className="size-5"
								fill="none"
								viewBox="0 0 180 220"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clipRule="evenodd"
									d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
									fill="url(#paint_logo_icon)"
									fillRule="evenodd"
								/>
								<defs>
									<linearGradient
										gradientUnits="userSpaceOnUse"
										id="paint_logo_icon"
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
						<h1 className="text-balance px-4 font-medium text-muted-foreground text-xl">
							{welcomeMessage}{" "}
							<span className="text-foreground">Log in to continue</span>
						</h1>
					</div>

					<div
						className="space-y-6 rounded-2xl bg-card/75 p-8 text-card-foreground shadow shadow-black/4 ring-1 ring-border"
						data-slot="card"
					>
						<form action="" className="space-y-5">
							{/* Email with icon */}
							<div className="space-y-2.5">
								<label
									className="block select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
									htmlFor="email-icon"
								>
									Email
								</label>
								<div className="relative">
									<svg
										className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
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
										<rect height="16" rx="2" width="20" x="2" y="4" />
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
									</svg>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 pl-9 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="email-icon"
										placeholder="you@example.com"
										required
										type="email"
									/>
								</div>
							</div>

							{/* Password with icon */}
							<div className="space-y-2.5">
								<div className="flex items-center justify-between">
									<label
										className="block select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
										htmlFor="password-icon"
									>
										Password
									</label>
									<a
										className="text-muted-foreground text-xs hover:text-foreground hover:underline"
										href={forgotPasswordHref}
									>
										Forgot password?
									</a>
								</div>
								<div className="relative">
									<svg
										className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
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
										<rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
										<path d="M7 11V7a5 5 0 0 1 10 0v4" />
									</svg>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 pl-9 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="password-icon"
										placeholder="••••••••"
										required
										type="password"
									/>
								</div>
							</div>

							<button
								className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								type="submit"
							>
								Sign in
							</button>
						</form>

						<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
							<div className="h-0.5 border-card border-b bg-border" />
							<div className="text-center text-muted-foreground text-xs uppercase">
								or continue with
							</div>
							<div className="h-0.5 border-card border-b bg-border" />
						</div>

						{/* Icon-only OAuth buttons */}
						<div className="grid grid-cols-3 gap-3">
							<button
								aria-label="continue with vercel"
								className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							>
								<svg
									className="size-4"
									height="1em"
									preserveAspectRatio="xMidYMid"
									viewBox="0 0 256 222"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="m128 0 128 221.705H0z" fill="currentColor" />
								</svg>
							</button>

							<button
								aria-label="continue with slack"
								className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							>
								<svg className="size-4" viewBox="0 0 2447.6 2452.5">
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
							</button>

							<button
								aria-label="continue with passkey"
								className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
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
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
									<path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
									<path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
									<path d="M2 12a10 10 0 0 1 18-6" />
									<path d="M2 16h.01" />
									<path d="M21.8 16c.2-2 .131-5.354 0-6" />
									<path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
									<path d="M8.65 22c.21-.66.45-1.32.57-2" />
									<path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
								</svg>
							</button>
						</div>
					</div>

					<p className="mt-16 text-center text-muted-foreground text-sm">
						{"Don't have an account?"}{" "}
						<a
							className="font-medium text-primary hover:underline"
							href={signUpHref}
						>
							Create one
						</a>
					</p>

					<div className="mt-6 flex justify-center gap-6">
						<a
							className="text-muted-foreground text-xs hover:text-foreground"
							href={termsHref}
						>
							Terms
						</a>
						<a
							className="text-muted-foreground text-xs hover:text-foreground"
							href={privacyHref}
						>
							Privacy
						</a>
						<a
							className="text-muted-foreground text-xs hover:text-foreground"
							href={supportHref}
						>
							Support
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
