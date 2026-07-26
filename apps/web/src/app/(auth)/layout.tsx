import { IconBuildings } from "@runway/ui/icons";
import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="grid min-h-svh lg:h-svh lg:grid-cols-[1fr_minmax(28rem,34rem)] lg:overflow-hidden">
			{/* Branded panel — replaces astor's city-carousel showcase. */}
			<aside className="hidden flex-col justify-between bg-muted p-12 lg:flex">
				<Link className="flex items-center gap-2" href="/">
					<span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">
						<IconBuildings className="size-4" />
					</span>
					<span className="font-display font-medium text-foreground text-lg tracking-tight">
						Runway
					</span>
				</Link>
				<div className="max-w-md">
					<h2 className="text-balance font-display font-medium text-3xl text-foreground tracking-tight">
						Everything you need to launch.
					</h2>
					<p className="mt-3 text-pretty text-muted-foreground text-p14">
						A batteries-included starter — auth, workspaces, and a polished
						marketing surface, ready to build on.
					</p>
				</div>
			</aside>

			<div className="flex min-h-svh flex-col px-6 py-7 sm:px-10 lg:h-svh lg:min-h-0 lg:overflow-y-auto">
				<header className="flex justify-center lg:justify-start">
					<Link className="flex items-center gap-2" href="/">
						<span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">
							<IconBuildings className="size-4" />
						</span>
						<span className="font-medium text-foreground text-p14">Runway</span>
					</Link>
				</header>

				<main className="flex flex-1 flex-col py-10">
					<div className="m-auto w-full max-w-sm">{children}</div>
				</main>

				<footer className="flex flex-col items-center gap-1 text-muted-foreground text-p12 sm:flex-row sm:justify-between">
					<span>© 2026 Runway. All rights reserved.</span>
					<span className="flex items-center gap-4">
						<Link
							className="transition-colors hover:text-foreground"
							href="/terms"
						>
							Terms
						</Link>
						<Link
							className="transition-colors hover:text-foreground"
							href="/privacy"
						>
							Privacy
						</Link>
					</span>
				</footer>
			</div>
		</div>
	);
}
