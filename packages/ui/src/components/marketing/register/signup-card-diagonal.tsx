"use client";

// Block004: Floating card on a diagonal two-tone background, 2×2 OAuth grid, full name+email+password fields

export function SignupCardDiagonal() {
	return (
		<main className="@container">
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 bg-linear-[-16deg] from-50% from-card to-50% to-background"
			/>
			<div className="relative flex min-h-dvh flex-col items-center justify-center gap-6 p-2 sm:p-6">
				<div
					className="m-auto w-fit rounded-xl bg-card not-dark:bg-card/35 p-8 text-center text-card-foreground shadow-black/6.5 shadow-lg ring-1 ring-border backdrop-blur"
					data-slot="card"
				>
					<div className="@sm:min-w-xs max-w-xs">
						<a
							aria-label="go home"
							className="mx-auto flex size-10 *:m-auto"
							href="#"
						>
							<svg
								className="size-5"
								fill="none"
								viewBox="0 0 180 220"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clipRule="evenodd"
									d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
									fill="url(#paint_logo_cd)"
									fillRule="evenodd"
								/>
								<defs>
									<linearGradient
										gradientUnits="userSpaceOnUse"
										id="paint_logo_cd"
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
							<h1 className="font-semibold text-xl">Sign Up to Astor</h1>
							<p className="text-muted-foreground text-sm">
								Create your account to get started
							</p>
						</div>

						<div className="space-y-5">
							{/* 2×2 OAuth grid */}
							<div className="grid grid-cols-2 gap-3">
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
									Vercel
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
									Slack
								</button>

								<button
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
									type="button"
								>
									<svg fill="none" viewBox="0 0 100 100">
										<path
											d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"
											fill="#5E6AD2"
										/>
									</svg>
									Linear
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
									Passkey
								</button>
							</div>

							<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-1">
								<div className="h-px bg-border" />
								<div className="text-center text-muted-foreground text-sm">
									or
								</div>
								<div className="h-px bg-border" />
							</div>

							<form action="" className="space-y-5">
								<div className="space-y-2.5">
									<label
										className="block select-none text-left font-medium text-sm leading-none"
										htmlFor="name-cd"
									>
										Full Name
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="name-cd"
										placeholder="Enter your name"
										required
										type="text"
									/>
								</div>
								<div className="space-y-2.5">
									<label
										className="block select-none text-left font-medium text-sm leading-none"
										htmlFor="email-cd"
									>
										Email
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="email-cd"
										placeholder="Enter your email"
										required
										type="email"
									/>
								</div>
								<div className="space-y-2.5">
									<label
										className="block select-none text-left font-medium text-sm leading-none"
										htmlFor="password-cd"
									>
										Password
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="password-cd"
										placeholder="Create a password"
										required
										type="password"
									/>
								</div>
								<button
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent"
									type="submit"
								>
									Create Account
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
				</div>

				<div className="mx-auto mt-auto w-full pb-6">
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
		</main>
	);
}
