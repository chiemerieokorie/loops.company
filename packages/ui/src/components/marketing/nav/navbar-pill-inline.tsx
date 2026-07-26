import { ChevronDown, Menu, X } from "lucide-react";

export interface NavbarPillInlineProps {
	brandName?: string;
	ctaHref?: string;
	ctaLabel?: string;
	loginHref?: string;
}

/**
 * Inline pill navbar. The navigation links and the CTA are all contained
 * inside a single floating pill (bg-popover/50, rounded-xl, shadow-md) that
 * is absolutely centred in the header. The brand name sits outside the pill
 * on the left; auth buttons sit outside on the right. The pill translates
 * horizontally when a mega-menu viewport opens.
 */
export function NavbarPillInline({
	brandName = "Astor",
	loginHref = "#",
	ctaHref = "#",
	ctaLabel = "Start for free",
}: NavbarPillInlineProps) {
	return (
		<header className="bg-background" data-state="inactive" role="banner">
			<div className="relative max-lg:in-data-[state=active]:h-screen max-lg:in-data-[state=active]:bg-card/50 max-lg:in-data-[state=active]:backdrop-blur not-in-data-scrolled:has-data-[state=open]:[--viewport-translate:-4rem]">
				<div className="mx-auto max-w-6xl px-6">
					<div className="relative flex flex-wrap items-center justify-between py-1.5 max-lg:not-in-data-[state=active]:h-16 lg:py-5">
						<div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:in-data-[state=active]:border-foreground/5 max-lg:in-data-[state=active]:border-b">
							<a className="font-semibold text-foreground" href="/">
								{brandName}
							</a>
							<button
								aria-label="Open Menu"
								className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
							>
								<Menu className="m-auto size-5 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 duration-200" />
								<X className="absolute inset-0 m-auto size-5 -rotate-180 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 scale-0 in-data-[state=active]:opacity-100 opacity-0 duration-200" />
							</button>
						</div>

						{/* The pill: nav lives inside this card */}
						<div
							className="fixed inset-x-0 z-50 mx-auto size-fit max-w-xl rounded-xl bg-popover/50 py-1.5 pl-1.5 shadow-black/6.5 shadow-md ring-1 ring-border backdrop-blur-xl"
							style={{ width: "fit-content", gap: "normal" }}
						>
							<div className="flex items-center">
								<div className="pr-1.5">
									<nav
										aria-label="Main"
										className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center **:data-[slot=navigation-menu-viewport]:min-w-lg **:data-[slot=navigation-menu-viewport]:max-w-2xl **:data-[slot=navigation-menu-viewport]:translate-x-(--viewport-translate) **:data-[slot=navigation-menu-viewport]:transition-all max-lg:hidden"
										data-orientation="horizontal"
										data-slot="navigation-menu"
										data-viewport="true"
										dir="ltr"
										role="navigation"
									>
										<div style={{ position: "relative" }}>
											<ul
												className="group flex flex-1 list-none items-center justify-center gap-1 **:data-[slot=navigation-menu-trigger]:h-7 **:data-[slot=navigation-menu-trigger]:px-3 **:data-[slot=navigation-menu-trigger]:text-foreground/75 **:data-[slot=navigation-menu-trigger]:text-sm"
												data-orientation="horizontal"
												data-slot="navigation-menu-list"
												dir="ltr"
											>
												<li
													className="relative"
													data-slot="navigation-menu-item"
												>
													<button
														aria-expanded="false"
														className="group inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 font-medium text-muted-foreground text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-foreground/5 data-[state=open]:text-foreground"
														data-slot="navigation-menu-trigger"
														data-state="closed"
													>
														Product{" "}
														<ChevronDown
															aria-hidden="true"
															className="relative top-px ml-1.5 size-3 opacity-75 transition duration-300 group-data-[state=open]:translate-y-px"
															strokeWidth="2.5"
														/>
													</button>
												</li>
												<li
													className="relative"
													data-slot="navigation-menu-item"
												>
													<button
														aria-expanded="false"
														className="group inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 font-medium text-muted-foreground text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-foreground/5 data-[state=open]:text-foreground"
														data-slot="navigation-menu-trigger"
														data-state="closed"
													>
														Solutions{" "}
														<ChevronDown
															aria-hidden="true"
															className="relative top-px ml-1.5 size-3 opacity-75 transition duration-300 group-data-[state=open]:translate-y-px"
															strokeWidth="2.5"
														/>
													</button>
												</li>
												<li
													className="relative"
													data-slot="navigation-menu-item"
												>
													<a
														className="group inline-flex h-7 w-max flex-col items-center justify-center gap-1 rounded-md p-2 px-3 py-1 font-medium text-foreground/75 text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-foreground/2.5 data-[state=open]:bg-foreground/5 data-[active=true]:text-foreground"
														data-slot="navigation-menu-link"
														href="#"
													>
														Pricing
													</a>
												</li>
												<li
													className="relative"
													data-slot="navigation-menu-item"
												>
													<a
														className="group inline-flex h-7 w-max flex-col items-center justify-center gap-1 rounded-md p-2 px-3 py-1 font-medium text-foreground/75 text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-foreground/2.5 data-[state=open]:bg-foreground/5 data-[active=true]:text-foreground"
														data-slot="navigation-menu-link"
														href="#"
													>
														Customers
													</a>
												</li>
											</ul>
										</div>
										<div
											className="fixed inset-x-0 top-12 isolate z-50 mx-auto flex max-w-6xl px-(--viewport-outer-px)"
											data-slot="navigation-menu-viewport-parent"
										/>
									</nav>
								</div>
							</div>
						</div>

						<div className="mb-6 in-data-[state=active]:flex hidden w-full flex-wrap items-center justify-end space-y-8 max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
							<div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
								<a
									className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 font-medium text-xs transition-all hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50"
									href={loginHref}
								>
									<span>Sign In</span>
								</a>
								<a
									className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-[0.5px] border-white/10 bg-primary px-3 font-medium text-primary-foreground text-shadow-sm text-xs shadow-black/15 shadow-md ring-(--ring-color) ring-1 transition-all [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))]"
									href={ctaHref}
								>
									<span>{ctaLabel}</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
