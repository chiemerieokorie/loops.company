export function CodeBlockTabs() {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="relative @3xl:p-12">
					<div
						aria-hidden="true"
						className="mask-x-from-95% pointer-events-none absolute -inset-x-12 inset-y-0 @3xl:block hidden border-foreground/5 border-y"
					/>
					<div
						aria-hidden="true"
						className="mask-y-from-95% pointer-events-none absolute inset-x-0 -inset-y-12 @3xl:block hidden border-foreground/5 border-x"
					/>
					<div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-illustration pt-6 shadow-black/6.5 shadow-lg ring-1 ring-border-illustration">
						<div className="relative z-10 px-3">
							<div className="flex gap-1.5 px-3">
								<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
								<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
								<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
							</div>
							<div className="relative mt-4 flex gap-1">
								<span
									className="absolute inset-y-0 -left-4 flex rounded-full border border-foreground/5 bg-foreground/5"
									style={{ width: "90px", transform: "translateX(16px)" }}
								/>
								{/* Gemini tab (active) */}
								<button
									className="z-10 flex h-8 items-center gap-1 rounded-full px-3 text-sm duration-150 hover:opacity-50 data-[state=active]:text-foreground data-[state=active]:hover:opacity-100"
									data-state="active"
								>
									<svg
										className="m-auto size-4"
										fill="none"
										viewBox="0 0 296 298"
									>
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
											<g filter="url(#gemini__d)">
												<ellipse
													cx="19.5"
													cy="148.5"
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
											<g filter="url(#gemini__f)">
												<path
													d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"
													fill="#FA4340"
												/>
											</g>
											<g filter="url(#gemini__g)">
												<path
													d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"
													fill="#14BB69"
												/>
											</g>
											<g filter="url(#gemini__h)">
												<path
													d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"
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
												height="273"
												id="gemini__d"
												width="265"
												x="-113"
												y="12"
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
												id="gemini__f"
												width="299.5"
												x="-45"
												y="-153"
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
											<filter
												colorInterpolationFilters="sRGB"
												filterUnits="userSpaceOnUse"
												height="329"
												id="gemini__h"
												width="299.5"
												x="-39"
												y="132"
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
									<span className="text-nowrap font-medium">Gemini</span>
								</button>
								{/* Replit tab */}
								<button
									className="z-10 flex h-8 items-center gap-1 rounded-full px-3 text-sm duration-150 hover:opacity-50 data-[state=active]:text-foreground data-[state=active]:hover:opacity-100"
									data-state=""
								>
									<svg
										className="m-auto size-4"
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
									<span className="text-nowrap font-medium">Replit</span>
								</button>
								{/* VSCodium tab */}
								<button
									className="z-10 flex h-8 items-center gap-1 rounded-full px-3 text-sm duration-150 hover:opacity-50 data-[state=active]:text-foreground data-[state=active]:hover:opacity-100"
									data-state=""
								>
									<svg
										className="m-auto size-4"
										height="1em"
										viewBox="0 0 100 100"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<defs>
											<linearGradient
												gradientTransform="translate(-200 -213)"
												gradientUnits="userSpaceOnUse"
												id="vscodium__a"
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
											fill="url(#vscodium__a)"
										/>
									</svg>
									<span className="text-nowrap font-medium">VSCodium</span>
								</button>
								{/* Google PaLM tab */}
								<button
									className="z-10 flex h-8 items-center gap-1 rounded-full px-3 text-sm duration-150 hover:opacity-50 data-[state=active]:text-foreground data-[state=active]:hover:opacity-100"
									data-state=""
								>
									<svg
										className="m-auto size-4"
										height="1em"
										preserveAspectRatio="xMidYMid"
										viewBox="0 0 256 229"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M128 228.542c9.895 0 17.91-8.015 17.91-17.91V55.413h-35.82v155.219c0 9.895 8.015 17.91 17.91 17.91Z"
											fill="#F9AB00"
										/>
										<path
											d="M199.356 112.053C180.043 92.755 151.193 88.845 128 100.307l76.669 76.67c3.164 3.163 8.612 1.91 9.955-2.344 6.746-21.357 1.657-45.64-15.268-62.58Z"
											fill="#5BB974"
										/>
										<path
											d="M56.644 112.053C75.957 92.755 104.807 88.845 128 100.307l-76.669 76.67c-3.164 3.163-8.612 1.91-9.955-2.344-6.746-21.357-1.657-45.64 15.268-62.58Z"
											fill="#129EAF"
										/>
										<path
											d="M193.67 52.548c-30.507 0-56.402 20-65.67 47.76h121.25c4.97 0 8.283-5.254 6.03-9.687-11.523-22.611-34.776-38.073-61.61-38.073Z"
											fill="#AF5CF7"
										/>
										<path
											d="M140.671 20.101C119.09 41.682 114.926 74.114 128 100.307l85.743-85.743c3.523-3.522 2.15-9.582-2.582-11.119-24.148-7.836-51.52-2.313-70.49 16.656Z"
											fill="#FF8BCB"
										/>
										<path
											d="M115.329 20.101C136.91 41.682 141.074 74.114 128 100.307L42.257 14.564c-3.523-3.522-2.15-9.582 2.582-11.119 24.148-7.836 51.52-2.313 70.49 16.656Z"
											fill="#FA7B17"
										/>
										<path
											d="M62.33 52.548c30.507 0 56.402 20 65.67 47.76H6.75c-4.97 0-8.283-5.254-6.03-9.687C12.244 68.01 35.497 52.548 62.33 52.548Z"
											fill="#4285F4"
										/>
									</svg>
									<span className="text-nowrap font-medium">Google PaLM</span>
								</button>
							</div>
						</div>
						<div className="h-82">
							<div className="[&_pre]:no-scrollbar [&_pre]:mask-y-from-85% [&_pre]:!bg-transparent -mx-1 [&_code]:font-mono [&_code]:text-[13px]/2 [&_pre]:h-80 [&_pre]:min-h-[12rem] [&_pre]:rounded-xl [&_pre]:border-l [&_pre]:border-none [&_pre]:p-2 [&_pre]:leading-snug">
								<pre
									className="shiki shiki-themes github-light vesper"
									style={{
										backgroundColor: "rgb(255, 255, 255)",
										color: "rgb(36, 41, 46)",
									}}
									tabIndex={0}
								>
									<code>
										<span className="line">
											<span style={{ color: "rgb(215, 58, 73)" }}>const</span>
											<span style={{ color: "rgb(0, 92, 197)" }}> axios</span>
											<span style={{ color: "rgb(215, 58, 73)" }}> =</span>
											<span style={{ color: "rgb(111, 66, 193)" }}>
												{" "}
												require
											</span>
											<span style={{ color: "rgb(36, 41, 46)" }}>(</span>
											<span style={{ color: "rgb(3, 47, 98)" }}>
												&#39;axios&#39;
											</span>
											<span style={{ color: "rgb(36, 41, 46)" }}>);</span>
										</span>
										<span className="line" />
										<span className="line">
											<span style={{ color: "rgb(215, 58, 73)" }}>const</span>
											<span style={{ color: "rgb(0, 92, 197)" }}>
												{" "}
												response
											</span>
											<span style={{ color: "rgb(215, 58, 73)" }}> =</span>
											<span style={{ color: "rgb(215, 58, 73)" }}> await</span>
											<span style={{ color: "rgb(36, 41, 46)" }}> axios.</span>
											<span style={{ color: "rgb(111, 66, 193)" }}>post</span>
											<span style={{ color: "rgb(36, 41, 46)" }}>(</span>
											<span style={{ color: "rgb(3, 47, 98)" }}>
												&#39;https://api.example.com/data&#39;
											</span>
											<span style={{ color: "rgb(36, 41, 46)" }}>, {"{"}</span>
										</span>
										<span className="line">
											<span style={{ color: "rgb(36, 41, 46)" }}>
												{"  "}key:{" "}
											</span>
											<span style={{ color: "rgb(3, 47, 98)" }}>
												&#39;value&#39;
											</span>
											<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
										</span>
										<span className="line">
											<span style={{ color: "rgb(36, 41, 46)" }}>
												{"  "}anotherKey:{" "}
											</span>
											<span style={{ color: "rgb(3, 47, 98)" }}>
												&#39;anotherValue&#39;
											</span>
											<span style={{ color: "rgb(36, 41, 46)" }}>,</span>
										</span>
										<span className="line">
											<span style={{ color: "rgb(36, 41, 46)" }}>{"})"}</span>
											<span style={{ color: "rgb(36, 41, 46)" }}>;</span>
										</span>
										<span className="line" />
										<span className="line">
											<span style={{ color: "rgb(36, 41, 46)" }}>console.</span>
											<span style={{ color: "rgb(111, 66, 193)" }}>log</span>
											<span style={{ color: "rgb(36, 41, 46)" }}>
												(response.data);
											</span>
										</span>
									</code>
								</pre>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
