import { cn } from "@runway/ui/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Mona_Sans } from "next/font/google";

import "../index.css";

import Providers from "@/components/providers";
import { getToken } from "@/lib/auth-server";

// Geist is the app font (--font-sans drives the design system's font-sans).
const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Mona Sans is the marketing display face (headings only); Geist remains the
// app/body font. Exposed as a CSS var, consumed by the (marketing) route group.
const monaSans = Mona_Sans({
	variable: "--font-mona",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Loops",
	description:
		"Loops is a holding company that builds and operates focused software businesses.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const token = await getToken();
	return (
		<html
			className={cn(
				"font-sans",
				geistSans.variable,
				geistMono.variable,
				monaSans.variable
			)}
			lang="en"
			suppressHydrationWarning
		>
			<body className="antialiased">
				<Providers initialToken={token}>{children}</Providers>
			</body>
		</html>
	);
}
