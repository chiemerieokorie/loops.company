"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// Smooth scrolling for the marketing surface (lenis.dev). `root` drives the
// page (window) scroll and runs only inside the (marketing) route group — the
// app's data-dense pages (sheet/document) keep native scrolling.
export function SmoothScroll({ children }: { children: ReactNode }) {
	return <ReactLenis root>{children}</ReactLenis>;
}
