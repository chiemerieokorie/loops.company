import { ChevronDown, Menu, X } from "lucide-react";
import { LogoMark } from "./logo-mark";

export interface NavbarPillProps {
	signInHref?: string;
}

/**
 * Floating pill-shaped navbar. The entire nav chrome is contained in a
 * small max-w-xl card with a frosted-glass background, centred at the top
 * of the viewport. Designed for product / marketing pages where the hero
 * should breathe behind a lightweight nav.
 *
 * The logo slot renders an SVG mark; swap the inner SVG for your own mark
 * or replace the `<a>` with a text brand name as needed.
 */
export function NavbarPill({ signInHref = "#" }: NavbarPillProps) {
	return (
		<header className="bg-background" data-state="inactive" role="banner">
			<div className="fixed inset-x-0 top-0 z-50 bg-linear-to-b from-background px-3 pt-3 backdrop-blur">
				<div className="mx-auto max-w-xl rounded-2xl bg-card/75 px-6 shadow-black/6.5 shadow-md ring-1 ring-border backdrop-blur-xl lg:px-2">
					<div className="relative flex flex-wrap items-center justify-between lg:py-2">
						<div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:in-data-[state=active]:border-foreground/5 max-lg:in-data-[state=active]:border-b">
							<a
								aria-label="home"
								className="-ml-3 flex h-10 w-11 rounded-xl hover:bg-foreground/5 lg:-m-1"
								href="/"
							>
								<LogoMark className="m-auto size-5" />
							</a>
							<button
								aria-label="Open Menu"
								className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
							>
								<Menu className="m-auto size-5 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 duration-200" />
								<X className="absolute inset-0 m-auto size-5 -rotate-180 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 scale-0 in-data-[state=active]:opacity-100 opacity-0 duration-200" />
							</button>
						</div>

						{/* Centered nav links */}
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
									className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
									href={signInHref}
								>
									<span>Sign In</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
