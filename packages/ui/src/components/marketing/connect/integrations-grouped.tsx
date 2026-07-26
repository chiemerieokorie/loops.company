import {
	CloudflareLogo,
	CursorLogo,
	GeminiLogo,
	JetBrainsLogo,
	OpenAILogo,
	VercelLogo,
	VSCodeLogo,
} from "./integration-logos";

export interface IntegrationsGroupedProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	title?: string;
}

export function IntegrationsGrouped({
	title = "Seamless Integration",
	description = "Seamlessly integrate with over 200+ tools and platforms to streamline your workflow and boost productivity.",
	ctaLabel = "Get Started",
	ctaHref = "#",
}: IntegrationsGroupedProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="text-balance font-semibold text-3xl md:text-5xl md:tracking-tight">
						{title}
					</h2>
					<p className="mt-4 mb-6 text-balance text-lg text-muted-foreground">
						{description}
					</p>
					<a
						className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
						href={ctaHref}
					>
						{ctaLabel}
					</a>
				</div>

				<div className="relative mx-auto mt-12 grid @max-xl:max-w-xs max-w-2xl @xl:grid-cols-9 grid-cols-4 gap-4">
					{/* Dot grid background decorators */}
					<div
						aria-hidden="true"
						className="mask-radial-to-85% absolute inset-x-0 inset-y-4 m-auto bg-[linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] bg-[size:12px_12px] opacity-5"
					/>
					<div
						aria-hidden="true"
						className="mask-radial-to-85% absolute inset-x-6 inset-y-4 m-auto bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] opacity-25 [background-size:24px_24px]"
						style={{ translate: "0.5px" }}
					/>

					{/* Development group */}
					<div className="relative z-20 col-span-2 row-span-2 @max-xl:row-start-3 grid grid-rows-subgrid gap-1.5 self-center rounded-2xl border border-transparent bg-foreground/[0.03] p-2 shadow ring-1 ring-foreground/5 backdrop-blur">
						<span className="block self-center text-balance text-center text-muted-foreground text-sm">
							Development
						</span>
						<div className="grid grid-cols-2 gap-2">
							{/* JetBrains */}
							<div className="flex aspect-square size-full rounded-lg border border-transparent bg-card shadow ring-1 ring-foreground/10 *:m-auto *:size-5">
								<JetBrainsLogo />
							</div>
							{/* VS Code */}
							<div className="flex aspect-square size-full rounded-lg border border-transparent bg-card shadow ring-1 ring-foreground/10 *:m-auto *:size-5">
								<VSCodeLogo />
							</div>
						</div>
					</div>

					<div aria-hidden="true" className="@max-xl:hidden" />

					{/* LLMs group */}
					<div className="relative z-20 @max-xl:col-span-4 col-span-3 row-span-2 @max-xl:row-start-1 grid @max-xl:w-3/4 grid-rows-subgrid gap-1.5 @max-xl:place-self-center self-center rounded-2xl border border-transparent bg-foreground/[0.03] p-2 shadow ring-1 ring-foreground/5 backdrop-blur">
						<span className="block self-center text-balance text-center text-muted-foreground text-sm">
							LLMs
						</span>
						<div className="grid grid-cols-3 gap-2">
							{/* OpenAI */}
							<div className="flex aspect-square size-full rounded-lg border border-transparent bg-card shadow ring-1 ring-foreground/10 *:m-auto *:size-5">
								<OpenAILogo />
							</div>
							{/* Cursor */}
							<div className="flex aspect-square size-full rounded-lg border border-transparent bg-card shadow ring-1 ring-foreground/10 *:m-auto *:size-5">
								<CursorLogo />
							</div>
							{/* Gemini */}
							<div className="flex aspect-square size-full rounded-lg border border-transparent bg-card shadow ring-1 ring-foreground/10 *:m-auto *:size-5">
								<GeminiLogo />
							</div>
						</div>
					</div>

					<div aria-hidden="true" className="@max-xl:hidden" />

					{/* Hosting group */}
					<div className="relative z-20 col-span-2 row-span-2 grid grid-rows-subgrid gap-1.5 self-center rounded-2xl border border-transparent bg-foreground/[0.03] p-2 shadow ring-1 ring-foreground/5 backdrop-blur">
						<span className="block self-center text-balance text-center text-muted-foreground text-sm">
							Hosting
						</span>
						<div className="grid grid-cols-2 gap-2">
							{/* Cloudflare */}
							<div className="flex aspect-square size-full rounded-lg border border-transparent bg-card shadow ring-1 ring-foreground/10 *:m-auto *:size-5">
								<span className="!w-7 flex items-center">
									<CloudflareLogo />
								</span>
							</div>
							{/* Vercel */}
							<div className="flex aspect-square size-full rounded-lg border border-transparent bg-card shadow ring-1 ring-foreground/10 *:m-auto *:size-5">
								<VercelLogo />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
