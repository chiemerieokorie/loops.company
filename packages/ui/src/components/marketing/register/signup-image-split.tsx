"use client";

// Block005: Fixed photo panel left (2/5), form right (3/5), with quote overlay and full name+email+password

export interface SignupImageSplitProps {
	imageUrl?: string;
	quote?: string;
	quoteAuthor?: string;
}

export function SignupImageSplit({
	imageUrl = "https://images.unsplash.com/photo-1762600749688-8dfc960d86c5?q=80&w=2148&auto=format&fit=crop",
	quote = '"The best way to predict the future is to create it."',
	quoteAuthor = "— Peter Drucker",
}: SignupImageSplitProps) {
	return (
		<main className="bg-background">
			<div className="grid min-h-dvh lg:grid-cols-5">
				{/* Fixed image panel */}
				<div className="fixed inset-y-0 col-span-2 hidden w-2/5 selection:bg-black/20 selection:text-blue-400! lg:block">
					<img
						alt="Abstract gradient background"
						className="object-cover"
						decoding="async"
						loading="lazy"
						src={imageUrl}
						style={{
							position: "absolute",
							height: "100%",
							width: "100%",
							left: 0,
							top: 0,
							right: 0,
							bottom: 0,
						}}
					/>
					<div className="mask-t-form-25% mask-t-to-60% absolute inset-0 from-black/60 to-black/20 backdrop-blur-xl" />
					<div className="absolute inset-0 border-r bg-gradient-to-t from-black/60 to-black/20" />
					<div className="absolute right-12 bottom-12 left-12">
						<blockquote className="space-y-4">
							<p className="text-balance font-medium text-white text-xl">
								{quote}
							</p>
							<footer className="text-sm text-white/80">{quoteAuthor}</footer>
						</blockquote>
					</div>
				</div>

				{/* Form column */}
				<div className="flex flex-col p-6 lg:col-span-3 lg:col-start-3 lg:p-12">
					<div className="flex items-center justify-between">
						<a className="font-semibold text-foreground" href="/">
							Astor
						</a>
						<a
							className="font-medium text-muted-foreground text-sm hover:text-foreground hover:underline"
							href="#"
						>
							Sign in
						</a>
					</div>

					<div className="m-auto w-full max-w-xs">
						<div className="mb-8 space-y-2">
							<h1 className="font-semibold text-2xl">Create account</h1>
							<p className="text-muted-foreground">
								Enter your details to get started
							</p>
						</div>

						<div className="space-y-6">
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
												d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
												fill="#e01e5a"
											/>
										</g>
									</svg>
									Slack
								</button>
							</div>

							<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
								<div className="h-0.5 border-card border-b bg-border" />
								<div className="text-center text-muted-foreground text-xs uppercase">
									or continue with
								</div>
								<div className="h-0.5 border-card border-b bg-border" />
							</div>

							<form action="" className="space-y-6">
								<div className="space-y-2.5">
									<label
										className="block select-none font-medium text-sm leading-none"
										htmlFor="name-is"
									>
										Full Name
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="name-is"
										placeholder="John Doe"
										required
										type="text"
									/>
								</div>
								<div className="space-y-2.5">
									<label
										className="block select-none font-medium text-sm leading-none"
										htmlFor="email-is"
									>
										Email
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="email-is"
										placeholder="name@example.com"
										required
										type="email"
									/>
								</div>
								<div className="space-y-2.5">
									<label
										className="block select-none font-medium text-sm leading-none"
										htmlFor="password-is"
									>
										Password
									</label>
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="password-is"
										placeholder="Create a password"
										required
										type="password"
									/>
								</div>
								<button
									className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent"
									type="submit"
								>
									Create account
								</button>
							</form>

							<div className="mt-10 text-muted-foreground text-sm">
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

					<div className="mt-auto text-center text-muted-foreground text-xs">
						By signing up, you agree to our{" "}
						<a className="underline hover:text-foreground" href="#">
							Terms of Service
						</a>{" "}
						and{" "}
						<a className="underline hover:text-foreground" href="#">
							Privacy Policy
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
