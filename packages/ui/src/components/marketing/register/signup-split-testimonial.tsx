"use client";

// Block007: Split layout with testimonial+stars panel left, OAuth-first + inline email form right

export function SignupSplitTestimonial() {
	return (
		<main className="bg-background">
			<div className="min-h-dvh lg:grid lg:grid-cols-5">
				{/* Vertical divider */}
				<div
					aria-hidden="true"
					className="pointer-events-none fixed inset-y-0 left-2/5 z-1 w-px bg-border max-lg:hidden"
				/>
				{/* Two-tone background */}
				<div
					aria-hidden="true"
					className="pointer-events-none fixed inset-0 bg-linear-to-r from-40% from-card to-40% to-background max-lg:hidden"
				/>

				{/* Left: brand + testimonial */}
				<div className="relative hidden flex-col justify-between px-24 py-12 selection:bg-white/15 selection:text-white lg:col-span-2 lg:flex">
					<a className="font-semibold text-foreground" href="/">
						Astor
					</a>

					<div className="mx-auto w-fit space-y-6 text-center">
						<div className="space-y-2">
							<div className="flex justify-center gap-1">
								{Array.from({ length: 5 }).map((_, i) => (
									<svg
										className="size-4 fill-current/85 text-primary/50"
										fill="none"
										height="24"
										key={i}
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
									</svg>
								))}
							</div>
							<p className="mt-6 max-w-2xs text-balance text-foreground text-xl">
								Looks really good. Did you design in code or Figma first?
							</p>
						</div>

						<div className="mx-auto grid w-fit grid-cols-[auto_1fr] items-center gap-3">
							<div className="relative mx-auto size-10 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/25">
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
							<div className="space-y-0.5 text-left">
								<p className="text-balance text-foreground text-sm">Shadcn</p>
								<p className="text-balance text-muted-foreground text-xs">
									Creator of Shadcn/UI
								</p>
							</div>
						</div>
					</div>

					<p className="text-center text-muted-foreground text-sm">
						&copy; 2024 Astor. All rights reserved.
					</p>
				</div>

				{/* Right: form */}
				<div className="relative flex flex-1 flex-col gap-32 p-6 lg:col-span-3 lg:p-12">
					<a className="font-semibold text-foreground" href="/">
						Astor
					</a>

					<div className="m-auto w-full max-w-sm">
						<div className="mb-8">
							<h1 className="font-semibold text-3xl">Create account</h1>
							<p className="mt-2 text-muted-foreground">
								to get started with Astor
							</p>
						</div>

						<div className="space-y-3">
							<button
								className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-8 font-medium text-primary-foreground text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								type="button"
							>
								<svg
									className="size-5"
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
								className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-8 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								type="button"
							>
								<svg className="size-5" viewBox="0 0 2447.6 2452.5">
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
								Continue with Slack
							</button>

							<button
								className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-8 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								type="button"
							>
								<svg className="size-5" fill="none" viewBox="0 0 100 100">
									<path
										d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM12.659 18.074a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"
										fill="#5E6AD2"
									/>
								</svg>
								Continue with Linear
							</button>
						</div>

						<div className="my-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
							<div className="h-0.5 border-card border-b bg-border" />
							<div className="text-center text-muted-foreground text-sm">
								or
							</div>
							<div className="h-0.5 border-card border-b bg-border" />
						</div>

						{/* Inline email + button */}
						<form action="" className="space-y-5">
							<div className="space-y-2.5">
								<label
									className="block select-none font-medium text-sm leading-none"
									htmlFor="email-st"
								>
									Email
								</label>
								<div className="grid grid-cols-[1fr_auto] gap-2">
									<input
										className="flex h-9 w-full min-w-0 rounded-md border border-transparent bg-white px-3 py-1 text-base shadow-sm outline-none ring-1 ring-foreground/10 transition-[color,box-shadow] placeholder:text-muted-foreground/75 focus-visible:border-foreground/35 focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 md:text-sm dark:bg-foreground/5"
										id="email-st"
										placeholder="Enter your email"
										required
										type="email"
									/>
									<button
										className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-4 py-2 font-medium text-sm shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
										type="submit"
									>
										Sign up
									</button>
								</div>
							</div>
						</form>

						<p className="mt-10 text-muted-foreground text-sm">
							Already have an account?{" "}
							<a className="font-medium text-primary hover:underline" href="#">
								Sign in
							</a>
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
