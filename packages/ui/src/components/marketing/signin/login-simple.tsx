export interface LoginSimpleProps {
	forgotPasswordHref?: string;
	heading?: string;
	privacyHref?: string;
	signUpHref?: string;
	termsHref?: string;
}

export function LoginSimple({
	heading = "Log in to Astor",
	signUpHref = "#",
	forgotPasswordHref = "#",
	privacyHref = "#",
	termsHref = "#",
}: LoginSimpleProps) {
	return (
		<main className="bg-background">
			<div className="grid min-h-dvh grid-rows-[1fr_auto] gap-6 p-6">
				<div className="m-auto w-full max-w-72 self-center text-center">
					<a
						aria-label="go home"
						className="mx-auto flex size-10 *:m-auto"
						href="#"
					>
						<svg
							className="size-7"
							fill="none"
							viewBox="0 0 180 220"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clipRule="evenodd"
								d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
								fill="url(#paint_logo_simple)"
								fillRule="evenodd"
							/>
							<defs>
								<linearGradient
									gradientUnits="userSpaceOnUse"
									id="paint_logo_simple"
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

					<h1 className="mt-6 mb-10 font-semibold text-xl">{heading}</h1>

					<div className="space-y-2">
						<form action="" className="space-y-5">
							<div className="space-y-2.5">
								<label
									className="block select-none text-left font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
									htmlFor="email-simple"
								>
									Email
								</label>
								<input
									className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
									id="email-simple"
									placeholder="Enter your email"
									required
									type="email"
								/>
							</div>

							<div className="space-y-2.5">
								<label
									className="block select-none text-left font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
									htmlFor="password-simple"
								>
									Password
								</label>
								<input
									className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
									id="password-simple"
									placeholder="Enter your password"
									required
									type="password"
								/>
							</div>

							<button
								className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								type="submit"
							>
								Continue
							</button>
						</form>

						<a
							className="inline-flex h-8 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 font-medium text-muted-foreground text-xs transition-all hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							href={forgotPasswordHref}
						>
							Forgot your password?
						</a>

						<div className="mt-4 text-muted-foreground text-sm">
							{"Don't have an account?"}{" "}
							<a
								className="font-medium text-primary hover:underline"
								href={signUpHref}
							>
								Sign up
							</a>
						</div>
					</div>
				</div>

				<div className="mx-auto max-w-xs">
					<p className="text-center text-muted-foreground text-xs">
						This site is protected by reCAPTCHA and the Google{" "}
						<a
							className="font-medium text-foreground hover:underline"
							href={privacyHref}
						>
							Privacy Policy
						</a>{" "}
						and{" "}
						<a
							className="font-medium text-foreground hover:underline"
							href={termsHref}
						>
							Terms of Service
						</a>{" "}
						apply.
					</p>
				</div>
			</div>
		</main>
	);
}
