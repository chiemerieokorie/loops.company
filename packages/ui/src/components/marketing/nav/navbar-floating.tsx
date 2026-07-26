import { ChevronDown, Menu, X } from "lucide-react";

export interface NavbarFloatingProps {
	brandName?: string;
	ctaHref?: string;
	ctaLabel?: string;
	loginHref?: string;
}

/**
 * Scrolled-shrink navbar. At rest the header is wide (max-w-6xl) and
 * borderless; on scroll it contracts to max-w-4xl and acquires a frosted
 * card appearance. The nav links are centred inside the bar. On mobile the
 * header expands into a full-screen drawer.
 */
export function NavbarFloating({
	brandName = "Astor",
	loginHref = "#",
	ctaHref = "#",
	ctaLabel = "Contact Sales",
}: NavbarFloatingProps) {
	return (
		<header data-state="inactive" role="banner">
			<div className="fixed inset-x-0 top-0 z-50 pt-2 max-lg:h-18 max-lg:in-data-[state=active]:h-screen max-lg:overflow-hidden max-lg:in-data-[state=active]:bg-card/75 max-lg:px-2 max-lg:in-data-[state=active]:backdrop-blur lg:pt-3">
				<div className="mx-auto w-full in-data-scrolled:max-w-4xl max-w-6xl rounded-2xl border border-transparent in-data-scrolled:bg-background/75 px-3 in-data-scrolled:shadow-black/6.5 shadow-md shadow-transparent in-data-scrolled:ring-foreground/5 ring-1 ring-transparent in-data-scrolled:backdrop-blur transition-all duration-500 ease-in-out max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:px-5 max-lg:in-data-scrolled:px-5 max-lg:in-data-[state=active]:shadow-black/6.5 max-lg:in-data-[state=active]:ring-foreground/5 max-lg:in-data-[state=active]:backdrop-blur">
					<div className="relative flex flex-wrap items-center justify-between lg:py-3">
						<div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:in-data-[state=active]:border-b">
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

						{/* Centered nav */}
						<div className="absolute inset-0 m-auto size-fit">
							<nav
								aria-label="Main"
								className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center **:data-[slot=navigation-menu-content]:top-12 max-lg:hidden"
								data-orientation="horizontal"
								data-slot="navigation-menu"
								data-viewport="false"
								dir="ltr"
								role="navigation"
							>
								<div style={{ position: "relative" }}>
									<ul
										className="group flex flex-1 list-none items-center justify-center gap-3"
										data-orientation="horizontal"
										data-slot="navigation-menu-list"
										dir="ltr"
									>
										<li className="relative" data-slot="navigation-menu-item">
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
										<li className="relative" data-slot="navigation-menu-item">
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
										<li className="relative" data-slot="navigation-menu-item">
											<a
												className="group inline-flex h-8 w-max flex-col items-center justify-center gap-1 rounded-md p-2 px-4 py-1 font-medium text-muted-foreground text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-foreground/2.5 data-[state=open]:bg-foreground/5 data-[active=true]:text-foreground"
												data-slot="navigation-menu-link"
												href="#"
											>
												Pricing
											</a>
										</li>
										<li className="relative" data-slot="navigation-menu-item">
											<a
												className="group inline-flex h-8 w-max flex-col items-center justify-center gap-1 rounded-md p-2 px-4 py-1 font-medium text-muted-foreground text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-foreground/2.5 data-[state=open]:bg-foreground/5 data-[active=true]:text-foreground"
												data-slot="navigation-menu-link"
												href="#"
											>
												Company
											</a>
										</li>
									</ul>
								</div>
							</nav>
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
									className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
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
