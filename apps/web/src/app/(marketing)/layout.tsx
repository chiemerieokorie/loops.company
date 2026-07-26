import { SiteFooter } from "@/features/landing/site-footer";
import { SiteHeader } from "@/features/landing/site-header";
import { SmoothScroll } from "@/features/landing/smooth-scroll";

// Marketing surface on Runway's shadcn/base-nova system: semantic tokens, Geist
// body, Mona Sans display headings (via the `font-display` utility). Lenis
// smooth scrolling wraps the whole group; the app's data-dense pages keep
// native scroll.
export default function MarketingLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<SmoothScroll>
			<div className="bg-background text-foreground">
				<SiteHeader />
				<main className="isolate overflow-clip">{children}</main>
				<SiteFooter />
			</div>
		</SmoothScroll>
	);
}
