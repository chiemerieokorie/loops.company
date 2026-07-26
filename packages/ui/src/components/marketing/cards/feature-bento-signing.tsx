import { SigningLogoIllustration } from "./signing-logo-illustration";

export interface FeatureBentoSigningProps {
	collaborativeDescription?: string;
	collaborativeTitle?: string;
	documentSigningDescription?: string;
	documentSigningTitle?: string;
	keyboardShortcutDescription?: string;
	keyboardShortcutTitle?: string;
	smartLightingDescription?: string;
	smartLightingTitle?: string;
	statsDescription?: string;
	statsTitle?: string;
}

export function FeatureBentoSigning({
	smartLightingTitle = "Smart Lighting Control",
	smartLightingDescription = "Automate your home lighting with customizable schedules.",
	keyboardShortcutTitle = "Smart Lighting Control",
	keyboardShortcutDescription = "Automate your home lighting with customizable schedules.",
	collaborativeTitle = "Smart Lighting Control",
	collaborativeDescription = "Automate your home lighting with customizable schedules.",
	documentSigningTitle = "Collaborative Analysis",
	documentSigningDescription = "Add comments, share insights, and work together with your team.",
	statsTitle = "65% Faster Integration",
	statsDescription = "Reduced integration time from weeks to days.",
}: FeatureBentoSigningProps) {
	return (
		<section className="@container py-24">
			<h2 className="sr-only">Features</h2>
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="grid @4xl:grid-cols-3 @xl:grid-cols-2 gap-3">
					{/* Card 1 — Smart Lighting 3D logo */}
					<div
						className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{smartLightingTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{smartLightingDescription}
							</p>
						</div>
						<div className="relative flex flex-wrap items-center justify-between gap-1 from-transparent via-blue-50 to-indigo-50">
							<div className="mx-auto size-2/3">
								<SigningLogoIllustration className="size-full fill-foreground/2 text-foreground/15" />
							</div>
						</div>
					</div>

					{/* Card 2 — Keyboard shortcut illustration */}
					<div
						className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{keyboardShortcutTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{keyboardShortcutDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="flex @4xl:aspect-auto aspect-video items-center justify-center"
						>
							<div className="relative mx-auto flex w-fit gap-3">
								<div className="absolute -inset-x-6 inset-y-0 border-border-illustration border-y border-dashed" />
								<div className="absolute inset-x-0 -inset-y-6 border-border-illustration border-x border-dashed" />
								<div className="relative flex aspect-square size-16 items-center rounded-[7px] border border-border-illustration border-white/25 bg-foreground/65 p-3 text-white shadow-black/35 shadow-lg ring ring-black dark:border-border-illustration dark:bg-zinc-900 dark:ring-background">
									<span className="absolute top-1 right-2 block text-sm">
										fn
									</span>
									<svg
										className="mt-auto size-4"
										fill="none"
										height="24"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="12" cy="12" r="10" />
										<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
										<path d="M2 12h20" />
									</svg>
								</div>
								<div className="relative flex aspect-square size-16 items-center justify-center rounded-[7px] border border-white/25 bg-foreground/65 p-3 shadow-black/35 shadow-lg ring ring-black dark:border-border-illustration dark:bg-zinc-900 dark:ring-background">
									<span className="text-white">K</span>
								</div>
							</div>
						</div>
					</div>

					{/* Card 3 — Collaborative comment (bg-muted) */}
					<div
						className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-muted p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{collaborativeTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{collaborativeDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="relative mt-0 flex w-full origin-bottom flex-col space-y-4 rounded-2xl border border-transparent bg-illustration px-4 pt-4 pb-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration"
						>
							<p className="font-medium text-primary text-sm">
								@Bernard{" "}
								<span className="font-normal text-muted-foreground">
									Shared 2 invoices
								</span>
							</p>
							<div className="-ml-1.5 flex text-muted-foreground">
								<div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
									<svg
										className="m-auto size-4"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="4" />
										<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
									</svg>
								</div>
								<div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
									<svg
										className="m-auto size-4"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
										<path d="M8 14s1.5 2 4 2 4-2 4-2" />
										<line x1="9" x2="9.01" y1="9" y2="9" />
										<line x1="15" x2="15.01" y1="9" y2="9" />
									</svg>
								</div>
								<div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
									<svg
										className="m-auto size-4"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M13.234 20.252 21 12.3" />
										<path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" />
									</svg>
								</div>
							</div>
						</div>
					</div>

					{/* Card 4 — Document signing flow: spans 2 columns */}
					<div
						className="@4xl:col-span-2 grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<h3 className="font-semibold text-foreground">
								{documentSigningTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{documentSigningDescription}
							</p>
						</div>
						<div
							aria-hidden="true"
							className="flex flex-wrap items-center justify-center gap-2"
						>
							{/* Source document */}
							<div className="w-16 space-y-2 rounded-md bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
								<div className="flex items-center gap-1">
									<div className="size-2.5 rounded-full bg-primary" />
									<div className="h-[3px] w-4 rounded-full bg-foreground/15" />
								</div>
								<div className="space-y-1.5">
									<div className="flex items-center gap-1">
										<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
										<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
									</div>
									<div className="flex items-center gap-1">
										<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
										<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
									</div>
								</div>
								<div className="space-y-1.5">
									<div className="h-[3px] w-full rounded-full bg-foreground/15" />
									<div className="flex items-center gap-1">
										<div className="h-[3px] w-2/3 rounded-full bg-foreground/15" />
										<div className="h-[3px] w-1/3 rounded-full bg-foreground/15" />
									</div>
								</div>
								<svg
									className="ml-auto size-3"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
									<path d="M3 21h18" />
								</svg>
							</div>
							{/* Arrow */}
							<svg
								className="size-5 text-muted-foreground"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
							{/* Signed copy */}
							<div className="w-16 space-y-2 rounded-md border border-primary/50 bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration">
								<div className="flex items-center gap-1">
									<div className="size-2.5 rounded-full bg-primary" />
									<div className="h-[3px] w-4 rounded-full bg-foreground/15" />
								</div>
								<div className="space-y-1.5">
									<div className="flex items-center gap-1">
										<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
										<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
									</div>
									<div className="flex items-center gap-1">
										<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
										<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
									</div>
								</div>
								<div className="space-y-1.5">
									<div className="h-[3px] w-full rounded-full bg-foreground/15" />
									<div className="flex items-center gap-1">
										<div className="h-[3px] w-2/3 rounded-full bg-foreground/15" />
										<div className="h-[3px] w-1/3 rounded-full bg-foreground/15" />
									</div>
								</div>
								<svg
									className="ml-auto size-3 text-primary"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
									<path d="M3 21h18" />
								</svg>
							</div>
							{/* Equals */}
							<svg
								className="size-5 text-muted-foreground"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<line x1="5" x2="19" y1="9" y2="9" />
								<line x1="5" x2="19" y1="15" y2="15" />
							</svg>
							{/* Verified badge */}
							<div className="flex size-14 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/30">
								<svg
									className="size-6 text-primary"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<path d="m9 12 2 2 4-4" />
									<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
								</svg>
							</div>
						</div>
					</div>

					{/* Card 5 — Document minicard grid */}
					<div
						className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div className="grid h-fit grid-cols-3 gap-3">
							{Array.from({ length: 6 }).map((_, i) => (
								<div
									className="w-16 space-y-2 rounded-md bg-illustration p-2 shadow-black/6.5 shadow-md ring-1 ring-border-illustration"
									key={i}
								>
									<div className="flex items-center gap-1">
										<div className="size-2.5 rounded-full bg-primary" />
										<div className="h-[3px] w-4 rounded-full bg-foreground/15" />
									</div>
									<div className="space-y-1.5">
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
											<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
										</div>
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2.5 rounded-full bg-foreground/15" />
											<div className="h-[3px] w-6 rounded-full bg-foreground/15" />
										</div>
									</div>
									<div className="space-y-1.5">
										<div className="h-[3px] w-full rounded-full bg-foreground/15" />
										<div className="flex items-center gap-1">
											<div className="h-[3px] w-2/3 rounded-full bg-foreground/15" />
											<div className="h-[3px] w-1/3 rounded-full bg-foreground/15" />
										</div>
									</div>
								</div>
							))}
						</div>
						<div>
							<h3 className="font-semibold text-foreground">
								{documentSigningTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">
								{documentSigningDescription}
							</p>
						</div>
					</div>

					{/* Card 6 — Stats (hidden on smaller screens) */}
					<div
						className="@4xl:block grid hidden grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow shadow-black/6.5 ring-1 ring-border"
						data-slot="card"
					>
						<div>
							<div className="font-bold text-4xl text-foreground">65%</div>
							<h3 className="mt-2 font-semibold text-foreground">
								{statsTitle}
							</h3>
							<p className="mt-3 text-muted-foreground">{statsDescription}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
