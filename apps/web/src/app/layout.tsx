import type { Metadata } from "next";
import { Geist, Mona_Sans } from "next/font/google";
import "./styles.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-body" });
const mona = Mona_Sans({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = { title: "Loops", description: "Loops builds and operates focused software businesses." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html className={`${geist.variable} ${mona.variable}`} lang="en"><body>{children}</body></html>; }
