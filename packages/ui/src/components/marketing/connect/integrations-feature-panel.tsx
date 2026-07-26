import {
	CursorLogo,
	GeminiLogo,
	OpenAILogo,
	StripeLogo,
	VercelLogo,
} from "./integration-logos";

export interface IntegrationsFeaturePanelProps {
	description?: string;
	title?: string;
}

export function IntegrationsFeaturePanel({
	title = "Seamlessly Integrate with your favorite Tools",
	description = "Each integration is built for precision and an eye for modern trends. Connect with the tools your team already uses — no extra setup required.",
}: IntegrationsFeaturePanelProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid grid-cols-4 grid-rows-6 border *:border-dashed md:grid-cols-10 md:grid-rows-3">
					{/* Left copy panel */}
					<div className="col-span-full row-span-3 space-y-4 p-8 md:col-span-7">
						<h2 className="text-balance font-semibold text-3xl md:text-4xl">
							{title}
						</h2>
						<p className="text-balance text-muted-foreground md:text-lg">
							{description}
						</p>
					</div>

					{/* Gemini icon cell */}
					<div className="col-start-4 flex items-center justify-center border-b border-l max-md:row-start-4 max-md:border-t md:col-start-10">
						<GeminiLogo />
					</div>

					{/* Vercel icon cell */}
					<div className="col-start-3 row-start-5 flex items-center justify-center border-t border-l md:col-start-9 md:row-start-2">
						<VercelLogo />
					</div>

					{/* Cursor icon cell */}
					<div className="col-start-4 row-start-5 flex items-center justify-center border-l md:col-start-10 md:row-start-2">
						<CursorLogo />
					</div>

					{/* OpenAI icon cell */}
					<div className="col-start-2 row-start-6 flex items-center justify-center border-t border-l md:col-start-8 md:row-start-3">
						<OpenAILogo />
					</div>

					{/* Stripe wordmark cell */}
					<div className="col-start-3 col-end-5 row-start-6 flex items-center justify-center border-t border-l md:col-start-9 md:col-end-11 md:row-start-3">
						<StripeLogo />
					</div>
				</div>
			</div>
		</section>
	);
}
