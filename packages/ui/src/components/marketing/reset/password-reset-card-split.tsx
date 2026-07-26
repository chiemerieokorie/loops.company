export interface PasswordResetCardSplitProps {
	cookiesHref?: string;
	logoHref?: string;
	privacyHref?: string;
	signInHref?: string;
	termsHref?: string;
}

export function PasswordResetCardSplit({
	logoHref = "#",
	signInHref = "#",
	privacyHref = "#",
	termsHref = "#",
	cookiesHref = "#",
}: PasswordResetCardSplitProps) {
	return (
		<main className="@container">
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 bg-linear-[-16deg] from-50% from-card to-50% to-background"
			/>
			<div className="relative flex min-h-dvh flex-col items-center justify-center gap-6 p-2 sm:p-6 lg:col-span-2">
				<div
					className="m-auto w-fit rounded-xl bg-card not-dark:bg-card/35 p-8 text-center text-card-foreground shadow shadow-black/6.5 ring-1 ring-border backdrop-blur"
					data-slot="card"
				>
					<div className="@sm:min-w-xs max-w-xs">
						<a
							aria-label="go home"
							className="mx-auto flex size-10 *:m-auto"
							href={logoHref}
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
									fill="url(#paint_logo_prcs)"
									fillRule="evenodd"
								/>
								<defs>
									<linearGradient
										gradientUnits="userSpaceOnUse"
										id="paint_logo_prcs"
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
							<h1 className="font-semibold text-xl">Forgot Password?</h1>
							<p className="text-muted-foreground text-sm">
								No worries, we&apos;ll send you reset instructions
							</p>
						</div>
						<div className="space-y-5">
							<form action="" className="space-y-5">
								<div className="space-y-2.5">
									<label
										className="block select-none text-left font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
										data-slot="label"
										htmlFor="email"
									>
										Email
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-foreground/5 dark:aria-invalid:ring-destructive/40 dark:focus-visible:border-foreground/25"
										data-slot="input"
										id="email"
										placeholder="Enter your email"
										required
										type="email"
									/>
								</div>
								<button
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:drop-shadow-sm"
									type="submit"
								>
									Send Reset Link
								</button>
							</form>
							<div className="pt-5 text-muted-foreground text-sm">
								<a
									className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
									href={signInHref}
								>
									<svg
										className="lucide lucide-arrow-left size-4"
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
										<path d="m12 19-7-7 7-7" />
										<path d="M19 12H5" />
									</svg>
									Back to Sign in
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-auto w-full pb-6">
					<div className="mx-auto flex max-w-xs items-center justify-center gap-6">
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
							href={cookiesHref}
						>
							Cookies
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
