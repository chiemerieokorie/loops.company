"use client";

import { buttonVariants } from "@runway/ui/components/button";
import { IconArrowRight } from "@runway/ui/icons";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Container } from "../components/container";
import { Orb } from "../components/orb";
import { Heading, Lead } from "../components/section";

// Canvas clear colors approximating the `--background` token (globals.css)
// per theme, so the orb's shader blends into the page. The shader only uses
// this for luminance mixing, so a close hex approximation is enough.
const ORB_BACKGROUND = {
	dark: "#14161c",
	light: "#fbfcfe",
} as const;

export function HeroSection() {
	const { resolvedTheme } = useTheme();
	const orbBackground =
		resolvedTheme === "light" ? ORB_BACKGROUND.light : ORB_BACKGROUND.dark;

	return (
		<section
			className="relative flex min-h-[calc(100svh-3.5rem)] items-center justify-center overflow-hidden"
			id="hero"
		>
			<div aria-hidden className="absolute inset-0 grid place-items-center">
				<div className="size-[min(88vmin,44rem)]">
					<Orb backgroundColor={orbBackground} hoverIntensity={0.4} />
				</div>
			</div>
			<Container className="pointer-events-none relative z-10 flex flex-col items-center gap-6 py-24 text-center">
				<Heading className="text-5xl sm:text-6xl">Loops</Heading>
				<Lead className="max-w-md text-pretty text-lg">
					A holding company that builds and operates focused software
					businesses.
				</Lead>
				<Link
					className={buttonVariants({
						className: "pointer-events-auto",
						size: "lg",
					})}
					href="/contact"
				>
					Get in touch
					<IconArrowRight />
				</Link>
			</Container>
		</section>
	);
}
