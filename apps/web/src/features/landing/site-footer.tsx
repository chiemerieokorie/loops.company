import type { Route } from "next";
import Link from "next/link";
import { Container } from "./components/container";

const footerLinks: { href: Route; label: string }[] = [
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
	{ href: "/privacy", label: "Privacy" },
	{ href: "/terms", label: "Terms" },
];

export function SiteFooter() {
	return (
		<footer className="border-border border-t bg-muted/30" id="footer">
			<Container className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
				<p className="text-muted-foreground text-sm">© 2026 Loops.</p>
				<nav className="flex items-center gap-6 text-sm">
					{footerLinks.map((link) => (
						<Link
							className="text-muted-foreground transition-colors hover:text-foreground"
							href={link.href}
							key={link.label}
						>
							{link.label}
						</Link>
					))}
				</nav>
			</Container>
		</footer>
	);
}
