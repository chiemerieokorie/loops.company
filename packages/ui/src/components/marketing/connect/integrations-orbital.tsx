import {
	CursorLogo,
	GeminiLogo,
	LinearLogo,
	OpenAILogo,
	ReplitLogo,
	VercelLogo,
	VSCodeLogo,
} from "./integration-logos";

export interface IntegrationsOrbitalProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	title?: string;
}

export function IntegrationsOrbital({
	title = "Seamlessly Integrate with your favorite Tools",
	description = "Connect seamlessly with popular platforms and services to enhance your workflow.",
}: IntegrationsOrbitalProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative">
					{/* Centered copy overlay (absolute on desktop) */}
					<div className="!aspect-auto inset-0 m-auto h-fit w-full max-w-xl space-y-4 text-center md:absolute">
						<h2 className="text-balance font-semibold text-3xl md:text-5xl">
							{title}
						</h2>
						<p className="text-balance text-lg text-muted-foreground">
							{description}
						</p>
					</div>

					{/* Orbital grid of icons */}
					<div className="grid gap-1 *:aspect-square max-md:mt-12 md:grid-cols-18 md:grid-rows-6">
						{/* Decorative corner blocks */}
						<div
							aria-hidden="true"
							className="col-start-3 flex max-md:hidden md:row-start-2"
						>
							<div className="mt-auto ml-auto size-1/2 translate-x-full translate-y-[125%] rounded-lg border bg-muted/50" />
						</div>
						<div
							aria-hidden="true"
							className="flex max-md:hidden md:row-start-5"
						>
							<div className="ml-auto size-1/2 rounded-lg border bg-muted/50 md:translate-x-full md:-translate-y-[125%]" />
						</div>
						<div
							aria-hidden="true"
							className="col-start-16 flex max-md:hidden md:row-start-3"
						>
							<div className="size-1/2 rounded-lg border bg-muted md:-translate-x-full md:-translate-y-[125%]" />
						</div>
						<div
							aria-hidden="true"
							className="col-start-18 flex max-md:hidden md:row-start-5"
						>
							<div className="size-1/2 rounded-lg border bg-muted md:-translate-x-full md:-translate-y-[125%]" />
						</div>

						{/* Gemini — col 3 */}
						<div className="relative z-20 col-start-3 m-auto flex size-full rounded-full border border-transparent bg-card shadow-md ring-1 ring-foreground/10 *:m-auto *:size-5">
							<GeminiLogo />
						</div>
						{/* Linear — centered bottom */}
						<div className="relative z-20 col-start-9 m-auto flex size-full rounded-full border border-transparent bg-card shadow-md ring-1 ring-foreground/10 *:m-auto *:size-5 md:row-start-8 md:translate-x-1/2">
							<LinearLogo />
						</div>
						{/* Replit — left side top */}
						<div className="relative z-20 m-auto flex size-full rounded-full border border-transparent bg-card shadow-md ring-1 ring-foreground/10 *:m-auto *:size-5 md:row-start-3">
							<ReplitLogo />
						</div>
						{/* Vercel — col 3 row 5 */}
						<div className="relative z-20 col-start-3 m-auto flex size-full rounded-full border border-transparent bg-card shadow-md ring-1 ring-foreground/10 *:m-auto *:size-5 md:row-start-5">
							<VercelLogo />
						</div>
						{/* OpenAI — col 16 row 1 */}
						<div className="relative z-20 col-start-16 m-auto flex size-full rounded-full border border-transparent bg-card shadow-md ring-1 ring-foreground/10 *:m-auto *:size-5">
							<OpenAILogo />
						</div>
						{/* VSCode — col 18 row 3 */}
						<div className="relative z-20 col-start-18 m-auto flex size-full rounded-full border border-transparent bg-card shadow-md ring-1 ring-foreground/10 *:m-auto *:size-5 md:row-start-3">
							<VSCodeLogo />
						</div>
						{/* Cursor — col 16 row 5 */}
						<div className="relative z-20 col-start-16 m-auto flex size-full rounded-full border border-transparent bg-card shadow-md ring-1 ring-foreground/10 *:m-auto *:size-5 md:row-start-5">
							<CursorLogo />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
