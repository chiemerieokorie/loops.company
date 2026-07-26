import {
	CloudflareLogo,
	CursorLogo,
	LinearLogo,
	OpenAILogo,
	ReplitLogo,
	VercelLogo,
	VSCodeLogo,
} from "./integration-logos";

const iconRows = [
	[
		<VSCodeLogo key="vscode" />,
		<LinearLogo key="linear" />,
		<ReplitLogo key="replit" />,
		<VercelLogo key="vercel" />,
		<CursorLogo key="cursor" />,
		<OpenAILogo key="openai" />,
		<CloudflareLogo key="cloudflare" />,
		<VSCodeLogo key="vscode2" />,
		<LinearLogo key="linear2" />,
	],
	[
		<LinearLogo key="linear3" />,
		<ReplitLogo key="replit2" />,
		<VercelLogo key="vercel2" />,
		<CursorLogo key="cursor2" />,
		<OpenAILogo key="openai2" />,
		<CloudflareLogo key="cloudflare2" />,
		<VSCodeLogo key="vscode3" />,
		<LinearLogo key="linear4" />,
		<ReplitLogo key="replit3" />,
	],
	[
		<ReplitLogo key="replit4" />,
		<VercelLogo key="vercel3" />,
		<CursorLogo key="cursor3" />,
		<OpenAILogo key="openai3" />,
		<CloudflareLogo key="cloudflare3" />,
		<VSCodeLogo key="vscode4" />,
		<LinearLogo key="linear5" />,
		<ReplitLogo key="replit5" />,
		<VercelLogo key="vercel4" />,
	],
];

export interface IntegrationsMarqueeProps {
	description?: string;
	title?: string;
}

export function IntegrationsMarquee({
	title = "Seamlessly Integrate with Astor",
	description = "Connect Astor with the tools your team already uses to streamline your real estate workflow.",
}: IntegrationsMarqueeProps) {
	return (
		<section className="bg-background py-24">
			<div className="perspective-dramatic group mx-auto max-w-5xl px-6">
				<div className="mask-radial-from-70% mask-radial-[50%_90%] group relative mx-auto max-w-2xl rotate-x-6 scale-y-90 items-center justify-between space-y-6 from-transparent pb-1 transition-transform duration-1000 hover:rotate-x-0 hover:scale-y-100">
					<div className="mask-radial-to-55% absolute inset-0 bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] opacity-25 [background-size:16px_16px]" />
					{iconRows.map((row, rowIndex) => (
						<div className="overflow-hidden" key={rowIndex}>
							<div
								className="flex w-max"
								style={{
									gap: "56px",
									flexDirection: "row",
									transform: `translateX(-${19.6 + rowIndex * 13}px)`,
								}}
							>
								{row.map((icon, iconIndex) => (
									<div
										aria-hidden="true"
										className="relative z-20 flex size-20 rounded-xl border bg-card"
										key={iconIndex}
									>
										<div className="m-auto size-fit *:size-8">{icon}</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="mx-auto mt-12 max-w-lg text-center">
					<h2 className="text-balance font-semibold text-3xl md:text-4xl">
						{title}
					</h2>
					<p className="mt-4 mb-6 text-balance text-muted-foreground">
						{description}
					</p>
					<a
						className="inline-flex h-8 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-card px-3 font-medium text-xs shadow-black/10 shadow-sm ring-1 ring-foreground/10 transition-all duration-200 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
						href="#"
					>
						Get Started
					</a>
				</div>
			</div>
		</section>
	);
}
