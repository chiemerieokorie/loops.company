import { buttonVariants } from "@runway/ui/components/button";
import type { Route } from "next";
import Link from "next/link";
import { Container } from "./components/container";

const navLinks: { href: Route; label: string }[] = [
	{ href: "/about", label: "About" },
];

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 border-border border-b bg-background/80 backdrop-blur-sm">
			<Container>
				<div className="grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-4">
					<nav className="flex items-center gap-6">
						{navLinks.map((link) => (
							<Link
								className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
								href={link.href}
								key={link.label}
							>
								{link.label}
							</Link>
						))}
					</nav>

					<Link
						className="font-display font-medium text-foreground text-lg tracking-tight"
						href="/"
					>
						Loops
					</Link>

					<div className="flex items-center justify-end">
						<Link
							className={buttonVariants({ size: "sm", variant: "outline" })}
							href="/contact"
						>
							Get in touch
						</Link>
					</div>
				</div>
			</Container>
		</header>
	);
}
