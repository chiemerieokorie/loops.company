import { Button, buttonVariants } from "@runway/ui/components/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@runway/ui/components/sheet";
import { IconBarsThree } from "@runway/ui/icons";
import Link from "next/link";
import { Container } from "./components/container";

const navLinks = [
	{ href: "#features", label: "Features" },
	{ href: "#pricing", label: "Pricing" },
	{ href: "#faqs", label: "FAQ" },
];

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 border-border border-b bg-background/80 backdrop-blur-sm">
			<Container>
				<div className="grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-4">
					<div className="flex items-center gap-6">
						<Sheet>
							<SheetTrigger
								render={
									<Button
										aria-label="Open menu"
										className="lg:hidden"
										size="icon-sm"
										variant="ghost"
									/>
								}
							>
								<IconBarsThree />
							</SheetTrigger>
							<SheetContent className="p-6" side="left">
								<SheetTitle className="font-display font-medium text-lg tracking-tight">
									Runway
								</SheetTitle>
								<nav className="mt-2 flex flex-col gap-1">
									{navLinks.map((link) => (
										<a
											className="rounded-md px-2 py-2 font-medium text-sm hover:bg-muted"
											href={link.href}
											key={link.label}
										>
											{link.label}
										</a>
									))}
									<Link
										className="rounded-md px-2 py-2 font-medium text-sm hover:bg-muted"
										href="/login"
									>
										Log in
									</Link>
								</nav>
							</SheetContent>
						</Sheet>
						<nav className="hidden items-center gap-6 lg:flex">
							{navLinks.map((link) => (
								<a
									className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
									href={link.href}
									key={link.label}
								>
									{link.label}
								</a>
							))}
						</nav>
					</div>

					<Link
						className="font-display font-medium text-foreground text-lg tracking-tight"
						href="/"
					>
						Runway
					</Link>

					<div className="flex items-center justify-end gap-2">
						<Link
							className={buttonVariants({
								className: "max-sm:hidden",
								size: "sm",
								variant: "ghost",
							})}
							href="/login"
						>
							Log in
						</Link>
						<Link className={buttonVariants({ size: "sm" })} href="/signup">
							Get started
						</Link>
					</div>
				</div>
			</Container>
		</header>
	);
}
