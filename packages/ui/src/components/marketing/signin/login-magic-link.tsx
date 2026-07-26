export interface LoginMagicLinkProps {
	heading?: string;
	helpHref?: string;
	privacyHref?: string;
	signUpHref?: string;
	subheading?: string;
	termsHref?: string;
}

export function LoginMagicLink({
	heading = "Log in",
	subheading = "Log in to continue",
	signUpHref = "#",
	privacyHref = "#",
	termsHref = "#",
	helpHref = "#",
}: LoginMagicLinkProps) {
	return (
		<main className="bg-background">
			<div className="grid min-h-dvh grid-rows-[1fr_auto] gap-6 p-6 pt-24">
				<div className="mx-auto w-full max-w-72 self-center">
					<a
						aria-label="go home"
						className="-ml-2.5 flex size-10 *:m-auto"
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
								fill="url(#paint_logo_magic)"
								fillRule="evenodd"
							/>
							<defs>
								<linearGradient
									gradientUnits="userSpaceOnUse"
									id="paint_logo_magic"
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

					<div className="my-10 space-y-2">
						<h1 className="font-semibold text-2xl">{heading}</h1>
						<p className="text-muted-foreground text-sm">{subheading}</p>
					</div>

					<form action="" className="space-y-5">
						<div className="space-y-2.5">
							<label
								className="block select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
								htmlFor="email-magic"
							>
								Email
							</label>
							<input
								className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
								id="email-magic"
								placeholder="name@company.com"
								required
								type="email"
							/>
						</div>

						<div className="space-y-2.5">
							<label
								className="block select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
								htmlFor="password-magic"
							>
								Password{" "}
								<span className="text-muted-foreground">(optional)</span>
							</label>
							<input
								className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
								id="password-magic"
								placeholder="Enter your password"
								type="password"
							/>
						</div>

						<button
							className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							type="submit"
						>
							Send Magic Link
						</button>
					</form>

					<div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
						<div className="h-0.5 border-card border-b bg-border" />
						<div className="text-center text-muted-foreground text-sm">
							or continue with
						</div>
						<div className="h-0.5 border-card border-b bg-border" />
					</div>

					<div className="grid grid-cols-2 gap-3">
						<button
							className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							type="button"
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
							Vercel
						</button>

						<button
							className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							type="button"
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
							Slack
						</button>
					</div>

					<p className="mt-8 text-muted-foreground text-sm">
						New to Astor?{" "}
						<a
							className="font-medium text-primary hover:underline"
							href={signUpHref}
						>
							Create an account
						</a>
					</p>
				</div>

				<div className="mx-auto mt-auto w-fit pt-8">
					<div className="flex gap-6">
						<a
							className="text-muted-foreground text-sm hover:text-foreground"
							href={privacyHref}
						>
							Privacy
						</a>
						<a
							className="text-muted-foreground text-sm hover:text-foreground"
							href={termsHref}
						>
							Terms
						</a>
						<a
							className="text-muted-foreground text-sm hover:text-foreground"
							href={helpHref}
						>
							Help
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
