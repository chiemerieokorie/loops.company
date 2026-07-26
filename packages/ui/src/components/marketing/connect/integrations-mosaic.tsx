import {
	CursorLogo,
	GeminiLogo,
	GooglePaLMLogo,
	LinearLogo,
	OpenAILogo,
	VercelLogo,
} from "./integration-logos";

export function IntegrationsMosaic() {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-xl">
					<div
						aria-hidden="true"
						className="grid aspect-ratio grid-cols-8 gap-px *:flex *:aspect-square *:rounded-xl *:ring-1 *:ring-border sm:grid-cols-10"
					>
						<div aria-hidden="true" className="max-sm:hidden" />
						<div aria-hidden="true" />
						<div aria-hidden="true" />
						{/* Linear */}
						<div className="relative bg-muted shadow-black/10 shadow-md">
							<LinearLogo />
						</div>
						<div aria-hidden="true" />
						<div />
						<div />
						{/* Vercel */}
						<div className="relative bg-muted shadow-black/10 shadow-md">
							<VercelLogo />
						</div>
						<div />
						<div aria-hidden="true" className="max-sm:hidden" />
						<div aria-hidden="true" className="max-sm:hidden" />
						<div />
						{/* Cursor */}
						<div className="relative bg-muted shadow-black/10 shadow-md">
							<CursorLogo />
						</div>
						<div aria-hidden="true" />
						<div aria-hidden="true" />
						<div aria-hidden="true" />
						{/* Gemini */}
						<div className="relative bg-muted shadow-black/10 shadow-md">
							<GeminiLogo />
						</div>
						<div aria-hidden="true" />
						<div aria-hidden="true" />
						<div aria-hidden="true" className="max-sm:hidden" />
						<div aria-hidden="true" className="max-sm:hidden" />
						<div aria-hidden="true" />
						<div aria-hidden="true" />
						{/* Google PaLM */}
						<div className="relative bg-muted shadow-black/10 shadow-md">
							<GooglePaLMLogo />
						</div>
						<div aria-hidden="true" />
						{/* OpenAI */}
						<div className="relative bg-muted shadow-black/10 shadow-md">
							<OpenAILogo />
						</div>
						<div aria-hidden="true" />
						<div aria-hidden="true" />
						<div aria-hidden="true" />
						<div aria-hidden="true" className="max-sm:hidden" />
					</div>
				</div>
			</div>
		</section>
	);
}
