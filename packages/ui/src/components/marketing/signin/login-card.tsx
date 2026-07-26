export interface LoginCardProps {
	forgotPasswordHref?: string;
	heading?: string;
	signUpHref?: string;
	subheading?: string;
}

export function LoginCard({
	heading = "Welcome back",
	subheading = "Choose your preferred sign in method",
	signUpHref = "#",
	forgotPasswordHref = "#",
}: LoginCardProps) {
	return (
		<main className="@container relative min-h-dvh bg-background">
			<div className="relative flex min-h-dvh flex-col items-center justify-center p-6">
				<div
					className="w-full max-w-sm rounded-2xl bg-card @sm:p-8 @sm:pt-6 text-card-foreground shadow shadow-black/4 ring-1 ring-border"
					data-slot="card"
				>
					<div
						className="flex flex-col gap-1.5 p-6 text-center"
						data-slot="card-header"
					>
						<a
							aria-label="go home"
							className="corner-squircle inset-ring inset-ring-foreground/10 inset-shadow-2xs inset-shadow-white/35 mx-auto mb-4 flex size-12 items-center justify-center rounded-3xl bg-gradient-to-b from-zinc-400 to-zinc-500 dark:inset-ring-foreground/4 dark:from-zinc-700 dark:to-zinc-800"
							href="#"
						>
							<svg
								className="mask-b-from-25% size-7 text-white opacity-85 drop-shadow drop-shadow-black/15"
								fill="none"
								viewBox="0 0 180 220"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clipRule="evenodd"
									d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
									fill="currentColor"
									fillRule="evenodd"
								/>
							</svg>
						</a>
						<div
							className="font-medium text-2xl tracking-tight"
							data-slot="card-title"
						>
							{heading}
						</div>
						<div
							className="text-muted-foreground text-sm"
							data-slot="card-description"
						>
							{subheading}
						</div>
					</div>

					<div className="space-y-4 p-6 pt-0" data-slot="card-content">
						<div className="grid gap-3">
							<button className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
								<svg fill="none" viewBox="0 0 54 80">
									<g clipPath="url(#clip0_912_3)">
										<path
											d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z"
											fill="#0ACF83"
										/>
										<path
											d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z"
											fill="#A259FF"
										/>
										<path
											d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z"
											fill="#F24E1E"
										/>
										<path
											d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z"
											fill="#FF7262"
										/>
										<path
											d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z"
											fill="#1ABCFE"
										/>
									</g>
									<defs>
										<clipPath id="clip0_912_3">
											<rect fill="white" height="80" width="53.3333" />
										</clipPath>
									</defs>
								</svg>
								Continue with Figma
							</button>

							<button className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
								<svg fill="none" viewBox="0 0 100 100">
									<path
										d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"
										fill="#5E6AD2"
									/>
								</svg>
								Continue with Linear
							</button>
						</div>

						<div className="relative py-2">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-border border-t" />
							</div>
							<div className="relative flex justify-center">
								<span className="bg-card px-3 text-muted-foreground text-sm">
									or
								</span>
							</div>
						</div>

						<form action="" className="space-y-5">
							<div className="space-y-2.5">
								<label
									className="block select-none font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
									htmlFor="email-card"
								>
									Email address
								</label>
								<input
									className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
									id="email-card"
									placeholder="hello@example.com"
									required
									type="email"
								/>
							</div>

							<div className="space-y-2.5">
								<div className="flex items-center justify-between">
									<label
										className="block select-none text-left font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
										htmlFor="password-card"
									>
										Password
									</label>
									<a
										className="text-muted-foreground text-sm underline hover:text-foreground"
										href={forgotPasswordHref}
									>
										Forgot Password?
									</a>
								</div>
								<input
									className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-foreground/5"
									id="password-card"
									placeholder="••••••••"
									required
									type="password"
								/>
							</div>

							<label className="flex items-center gap-2 text-sm">
								<input
									className="size-4 rounded border border-input"
									type="checkbox"
								/>
								Remember me
							</label>

							<button
								className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								type="submit"
							>
								Sign in
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
									<path d="M5 12h14" />
									<path d="m12 5 7 7-7 7" />
								</svg>
							</button>
						</form>
					</div>
				</div>

				<p className="mt-6 text-center text-muted-foreground text-sm">
					{"Don't have an account?"}{" "}
					<a
						className="font-medium text-primary hover:underline"
						href={signUpHref}
					>
						Create account
					</a>
				</p>
			</div>
		</main>
	);
}
