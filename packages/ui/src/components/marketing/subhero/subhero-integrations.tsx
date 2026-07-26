export interface SubheroIntegrationsProps {
	badge?: string;
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	title?: string;
}

export function SubheroIntegrations({
	badge = "Integrations",
	title = "Connect all your preferred applications",
	description = "With Astor's integrations, connect with all your preferred applications and get your projects to the finish line faster.",
	ctaLabel = "Browse Integrations",
	ctaHref = "#",
}: SubheroIntegrationsProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div>
					{/* Decorative integration icon grid */}
					<div className="relative mx-auto max-w-sm">
						<div className="absolute -top-16 -bottom-64 left-0 w-1/7 border-foreground/10 border-l border-dashed" />
						<div className="absolute -top-13 -bottom-56 left-1/7 w-1/7 border-foreground/10 border-l border-dashed" />
						<div className="absolute -top-9 -bottom-52 left-2/7 w-1/7 border-foreground/10 border-l border-dashed" />
						<div className="absolute -top-6 -bottom-48 left-3/7 w-1/7 border-foreground/10 border-x border-dashed" />
						<div className="absolute -top-9 -bottom-52 left-5/7 w-1/7 border-foreground/10 border-x border-dashed" />
						<div className="absolute -top-13 -bottom-64 left-6/7 w-1/7 border-foreground/10 border-r border-dashed" />
					</div>
					<div className="lg:before:mask-x-from-85% relative mx-auto max-w-xl before:absolute before:inset-0 before:border-foreground/10 before:border-t before:border-dashed">
						<div className="mx-auto grid max-w-sm grid-cols-7 shadow-black/6.5 *:relative *:flex *:aspect-square *:items-center *:justify-center *:rounded-lg *:bg-illustration *:shadow-md *:ring-1 *:ring-border">
							<div className="col-start-4">
								{/* Cloudflare icon */}
								<svg
									className="size-5"
									height="1em"
									preserveAspectRatio="xMidYMid"
									viewBox="0 0 256 116"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="m202.357 49.394-5.311-2.124C172.085 103.434 72.786 69.289 66.81 85.997c-.996 11.286 54.227 2.146 93.706 4.059 12.039.583 18.076 9.671 12.964 24.484l10.069.031c11.615-36.209 48.683-17.73 50.232-29.68-2.545-7.857-42.601 0-31.425-35.497Z"
										fill="#FFF"
									/>
									<path
										d="M176.332 108.348c1.593-5.31 1.062-10.622-1.593-13.809-2.656-3.187-6.374-5.31-11.154-5.842L71.17 87.634c-.531 0-1.062-.53-1.593-.53-.531-.532-.531-1.063 0-1.594.531-1.062 1.062-1.594 2.124-1.594l92.946-1.062c11.154-.53 22.839-9.56 27.087-20.182l5.312-13.809c0-.532.531-1.063 0-1.594C191.203 20.182 166.772 0 138.091 0 111.535 0 88.697 16.995 80.73 40.896c-5.311-3.718-11.684-5.843-19.12-5.31-12.747 1.061-22.838 11.683-24.432 24.43-.531 3.187 0 6.374.532 9.56C16.996 70.107 0 87.103 0 108.348c0 2.124 0 3.718.531 5.842 0 1.063 1.062 1.594 1.594 1.594h170.489c1.062 0 2.125-.53 2.125-1.594l1.593-5.842Z"
										fill="#F4811F"
									/>
									<path
										d="M205.544 48.863h-2.656c-.531 0-1.062.53-1.593 1.062l-3.718 12.747c-1.593 5.31-1.062 10.623 1.594 13.809 2.655 3.187 6.373 5.31 11.153 5.843l19.652 1.062c.53 0 1.062.53 1.593.53.53.532.53 1.063 0 1.594-.531 1.063-1.062 1.594-2.125 1.594l-20.182 1.062c-11.154.53-22.838 9.56-27.087 20.182l-1.063 4.78c-.531.532 0 1.594 1.063 1.594h70.108c1.062 0 1.593-.531 1.593-1.593 1.062-4.25 2.124-9.03 2.124-13.81 0-27.618-22.838-50.456-50.456-50.456"
										fill="#FAAD3F"
									/>
								</svg>
							</div>
							<div className="col-start-6">
								{/* Gemini icon */}
								<svg className="size-5" fill="none" viewBox="0 0 296 298">
									<mask
										height="298"
										id="gemini__a"
										maskUnits="userSpaceOnUse"
										style={{ maskType: "alpha" }}
										width="296"
										x="0"
										y="0"
									>
										<path
											d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"
											fill="#3186FF"
										/>
									</mask>
									<g mask="url(#gemini__a)">
										<g filter="url(#gemini__b)">
											<ellipse
												cx="163"
												cy="149"
												fill="#3689FF"
												rx="196"
												ry="159"
											/>
										</g>
										<g filter="url(#gemini__c)">
											<ellipse
												cx="33.5"
												cy="142.5"
												fill="#F6C013"
												rx="68.5"
												ry="72.5"
											/>
										</g>
										<g filter="url(#gemini__e)">
											<path
												d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"
												fill="#FA4340"
											/>
										</g>
										<g filter="url(#gemini__g)">
											<path
												d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"
												fill="#14BB69"
											/>
										</g>
									</g>
									<defs>
										<filter
											colorInterpolationFilters="sRGB"
											filterUnits="userSpaceOnUse"
											height="390"
											id="gemini__b"
											width="464"
											x="-69"
											y="-46"
										>
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feBlend
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
											<feGaussianBlur
												result="effect1_foregroundBlur_69_17998"
												stdDeviation="18"
											/>
										</filter>
										<filter
											colorInterpolationFilters="sRGB"
											filterUnits="userSpaceOnUse"
											height="273"
											id="gemini__c"
											width="265"
											x="-99"
											y="6"
										>
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feBlend
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
											<feGaussianBlur
												result="effect1_foregroundBlur_69_17998"
												stdDeviation="32"
											/>
										</filter>
										<filter
											colorInterpolationFilters="sRGB"
											filterUnits="userSpaceOnUse"
											height="329"
											id="gemini__e"
											width="299.5"
											x="-41.5"
											y="-130"
										>
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feBlend
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
											<feGaussianBlur
												result="effect1_foregroundBlur_69_17998"
												stdDeviation="32"
											/>
										</filter>
										<filter
											colorInterpolationFilters="sRGB"
											filterUnits="userSpaceOnUse"
											height="329"
											id="gemini__g"
											width="299.5"
											x="-41"
											y="91"
										>
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feBlend
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
											<feGaussianBlur
												result="effect1_foregroundBlur_69_17998"
												stdDeviation="32"
											/>
										</filter>
									</defs>
								</svg>
							</div>
						</div>
					</div>
					<div className="lg:before:mask-x-from-85% relative before:absolute before:inset-0 before:border-foreground/10 before:border-y before:border-dashed">
						<div className="mx-auto grid max-w-sm grid-cols-7 *:relative *:flex *:aspect-square *:items-center *:justify-center">
							<div className="-mr-px border bg-foreground/3">
								{/* Vercel triangle icon */}
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
							</div>
							<div className="col-start-3 -mr-px border bg-foreground/3">
								{/* GNOME icon */}
								<svg
									className="size-5 *:fill-foreground"
									height="1em"
									viewBox="0 0 100 100"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<defs>
										<linearGradient
											gradientTransform="translate(-200 -213)"
											gradientUnits="userSpaceOnUse"
											id="a"
											x1="199.997"
											x2="296.665"
											y1="214.302"
											y2="307.573"
										>
											<stop offset="0" stopColor="#62A0EA" />
											<stop offset="1" stopColor="#1A5FB4" />
										</linearGradient>
									</defs>
									<path
										d="M48.26 2.274a6.113 6.113 0 0 0-1.838 8.468c10.109 15.655 12.495 27.463 11.46 37.811-4.184 19.816-13.279 23.836-21.227 23.836-7.76 0-5.682-12.771.151-16.509 3.482-2.174 7.942-3.587 11.365-3.587 3.392 0 6.142-2.741 6.142-6.123 0-3.383-2.75-6.124-6.142-6.124-3.998 0-7.92.84-11.581 2.27.748-3.529 1.024-7.343.057-11.397-1.468-6.156-5.694-12.036-13.032-17.736a6.15 6.15 0 0 0-8.621 1.065 6.114 6.114 0 0 0 1.078 8.595c5.978 4.643 7.952 8.08 8.627 10.909.675 2.829.132 5.864-1.224 10.034-1.733 5.62-3.745 10.637-4.627 15.448-.434 2.368-.471 4.945-.583 7.004-4.305-4.196-5.99-9.736-5.99-17.831-.001-3.382-2.751-6.124-6.142-6.123-3.389.003-6.135 2.743-6.136 6.123 0 11.056 3.233 21.576 11.898 28.594 7.844 7.473 27.791 4.711 27.791 16.708 0 3.386 4.956 5.034 8.347 5.034 3.478 0 7.855-2.325 7.855-5.034 0-13.612 14.345-21.885 37.96-21.849 3.392.005 6.144-2.734 6.149-6.116.006-3.383-2.738-6.13-6.13-6.136a78.226 78.226 0 0 0-4.741.145c2.64-6.209 3.811-13.045 3.569-20.429-.112-3.381-2.95-6.031-6.339-5.921-3.393.11-6.051 2.943-5.94 6.326.32 9.668-.042 18.301-7.245 22.852-2.048 1.293-4.429 2.415-6.687 2.415 1.753-4.768 3.077-9.801 3.619-15.226.346-3.462.383-7.575-.012-10.77-.613-4.95-1.353-10.564.526-14.793 1.688-3.642 5.47-5.167 11.023-5.167 3.389-.003 6.135-2.744 6.136-6.123.002-3.383-2.745-6.127-6.136-6.13-8.252 0-14.507 4.343-18.053 9.59-1.854-3.96-4.112-8.041-6.84-12.265a6.14 6.14 0 0 0-3.86-2.669 6.159 6.159 0 0 0-4.627.831z"
										fill="url(#a)"
									/>
								</svg>
							</div>
							<div className="col-start-5 rounded-lg bg-illustration shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
								{/* Linear icon */}
								<svg className="size-5" fill="none" viewBox="0 0 100 100">
									<path
										d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"
										fill="#5E6AD2"
									/>
								</svg>
							</div>
							<div className="col-start-7 -mb-px -ml-px border bg-foreground/3">
								{/* Figma icon */}
								<svg
									className="size-5 *:fill-foreground"
									fill="none"
									viewBox="0 0 20 24"
								>
									<path
										d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5V8H1.5C0.671573 8 0 7.32843 0 6.5V1.5Z"
										fill="#F26207"
									/>
									<path
										d="M10 8H18.5C19.3284 8 20 8.67157 20 9.5V14.5C20 15.3284 19.3284 16 18.5 16H10V8Z"
										fill="#F26207"
									/>
									<path
										d="M0 17.5C0 16.6716 0.671573 16 1.5 16H10V22.5C10 23.3284 9.32843 24 8.5 24H1.5C0.671573 24 0 23.3284 0 22.5V17.5Z"
										fill="#F26207"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className="lg:before:mask-x-from-85% relative mx-auto max-w-2xl before:absolute before:inset-0 before:border-foreground/10 before:border-b before:border-dashed">
						<div className="mx-auto grid max-w-sm grid-cols-7 *:relative *:flex *:aspect-square *:items-center *:justify-center">
							<div className="col-start-2 -mt-px -mr-px border bg-foreground/3">
								{/* OpenAI icon */}
								<svg
									className="size-5"
									height="1em"
									preserveAspectRatio="xMidYMid"
									viewBox="0 0 256 260"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<div className="col-start-5 rounded-lg bg-illustration shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
								{/* Claude icon */}
								<svg
									className="size-5"
									preserveAspectRatio="xMidYMid"
									viewBox="0 0 256 257"
								>
									<path
										d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"
										fill="#D97757"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-20 max-w-2xl text-center">
					<span className="rounded-full border border-primary/10 bg-primary/5 px-2 py-1 font-medium text-primary text-sm">
						{badge}
					</span>
					<h1 className="mt-4 text-balance font-semibold text-4xl md:text-5xl lg:text-6xl">
						{title}
					</h1>
					<p className="mx-auto mt-4 mb-6 max-w-xl text-balance text-lg text-muted-foreground">
						{description}
					</p>
					<a
						className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-4 py-2 font-medium text-primary-foreground text-shadow-sm text-sm shadow-black/15 shadow-md ring-1 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98"
						href={ctaHref}
					>
						{ctaLabel}
					</a>
				</div>
			</div>
		</section>
	);
}
