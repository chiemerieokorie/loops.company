import { ChevronDown, Menu, X } from "lucide-react";

export interface NavbarProps {
	brandName?: string;
	ctaHref?: string;
	ctaLabel?: string;
	loginHref?: string;
}

export function Navbar({
	brandName = "Astor",
	loginHref = "#",
	ctaHref = "#",
	ctaLabel = "Get Started",
}: NavbarProps) {
	return (
		<header data-state="inactive" role="banner">
			<div className="fixed inset-x-0 top-0 z-50 in-data-scrolled:border-b in-data-scrolled:bg-background/50 in-data-scrolled:backdrop-blur">
				<div className="mx-auto max-w-6xl px-6 lg:px-12">
					<div className="relative flex flex-wrap items-center justify-between lg:py-5">
						<div className="flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
							<a className="font-semibold text-foreground" href="/">
								{brandName}
							</a>
							<nav
								aria-label="Main"
								className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center **:data-[slot=navigation-menu-viewport]:top-3 **:data-[slot=navigation-menu-viewport]:left-8 max-lg:hidden"
								data-orientation="horizontal"
								data-slot="navigation-menu"
								data-viewport="true"
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
												className="group inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 font-medium text-muted-foreground text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-foreground/5 data-[state=open]:text-foreground data-[state=open]:focus:bg-foreground/5 data-[state=open]:hover:bg-foreground/5"
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
												className="group inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 font-medium text-muted-foreground text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-foreground/5 data-[state=open]:text-foreground data-[state=open]:focus:bg-foreground/5 data-[state=open]:hover:bg-foreground/5"
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
												className="group inline-flex h-8 w-max flex-col items-center justify-center gap-1 rounded-md p-2 px-4 py-1 font-medium text-muted-foreground text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-foreground/2.5 data-[state=open]:bg-foreground/5 data-[active=true]:text-foreground data-[state=open]:text-foreground"
												data-slot="navigation-menu-link"
												href="#"
											>
												Pricing
											</a>
										</li>
										<li className="relative" data-slot="navigation-menu-item">
											<a
												className="group inline-flex h-8 w-max flex-col items-center justify-center gap-1 rounded-md p-2 px-4 py-1 font-medium text-muted-foreground text-sm outline-none transition-[color,box-shadow] hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-foreground/2.5 data-[state=open]:bg-foreground/5 data-[active=true]:text-foreground data-[state=open]:text-foreground"
												data-slot="navigation-menu-link"
												href="#"
											>
												Company
											</a>
										</li>
									</ul>
								</div>
								<div
									className="fixed inset-x-0 top-12 isolate z-50 mx-auto flex max-w-6xl px-(--viewport-outer-px)"
									data-slot="navigation-menu-viewport-parent"
								/>
							</nav>
							<button
								aria-label="Open Menu"
								className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
							>
								<Menu className="m-auto size-5 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 duration-200" />
								<X className="absolute inset-0 m-auto size-5 -rotate-180 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 scale-0 in-data-[state=active]:opacity-100 opacity-0 duration-200" />
							</button>
						</div>
						<div className="mb-6 in-data-[state=active]:flex hidden w-full flex-wrap items-center justify-end space-y-8 max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
							<div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
								<a
									className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:ring-foreground/15 dark:hover:bg-muted/50"
									href={loginHref}
								>
									<span>Login</span>
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
