import { Button } from "@runway/ui/components/button";
import { Input } from "@runway/ui/components/input";
import { Separator } from "@runway/ui/components/separator";
import {
	IconArrowRight,
	IconGithub,
	IconTwitter,
	IconYoutube,
} from "@runway/ui/icons";
import { Container } from "./components/container";

const linkCategories = [
	{
		title: "Product",
		links: [
			{ label: "Features", href: "#features" },
			{ label: "Pricing", href: "#pricing" },
			{ label: "Integrations", href: "/" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About", href: "/about" },
			{ label: "Careers", href: "/" },
			{ label: "Blog", href: "/" },
			{ label: "Press Kit", href: "/" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Help Center", href: "/" },
			{ label: "API Docs", href: "/" },
			{ label: "Status", href: "/" },
			{ label: "Contact", href: "/contact" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Privacy Policy", href: "/privacy" },
			{ label: "Terms of Service", href: "/terms" },
			{ label: "Security", href: "/" },
		],
	},
];

const socials = [
	{ label: "X", href: "https://x.com", Icon: IconTwitter },
	{ label: "GitHub", href: "https://github.com", Icon: IconGithub },
	{ label: "YouTube", href: "https://www.youtube.com", Icon: IconYoutube },
];

export function SiteFooter() {
	return (
		<footer className="border-border border-t bg-muted/30" id="footer">
			<Container className="flex flex-col gap-12 py-16">
				<div className="grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2">
					<form className="flex max-w-sm flex-col gap-2">
						<p className="font-medium text-foreground text-sm">
							Stay in the loop
						</p>
						<p className="text-muted-foreground text-sm">
							Product updates, tips, and the occasional story — straight to your
							inbox.
						</p>
						<div className="mt-2 flex gap-2">
							<Input aria-label="Email" placeholder="Email" type="email" />
							<Button aria-label="Subscribe" size="icon" type="submit">
								<IconArrowRight />
							</Button>
						</div>
					</form>
					<nav className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
						{linkCategories.map((category) => (
							<div key={category.title}>
								<h3 className="font-medium text-foreground">
									{category.title}
								</h3>
								<ul className="mt-2 flex flex-col gap-2">
									{category.links.map((link) => (
										<li key={link.label}>
											<a
												className="text-muted-foreground transition-colors hover:text-foreground"
												href={link.href}
											>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>
				<Separator />
				<div className="flex items-center justify-between gap-10 text-sm">
					<p className="text-muted-foreground">© 2025 Runway, Inc.</p>
					<div className="flex items-center gap-4">
						{socials.map(({ label, href, Icon }) => (
							<a
								aria-label={label}
								className="text-muted-foreground transition-colors hover:text-foreground"
								href={href}
								key={label}
								rel="noopener"
								target="_blank"
							>
								<Icon className="size-5" />
							</a>
						))}
					</div>
				</div>
			</Container>
		</footer>
	);
}
