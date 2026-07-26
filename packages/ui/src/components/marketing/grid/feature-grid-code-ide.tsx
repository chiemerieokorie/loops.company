import {
	ClaudeLogo,
	CursorLogo,
	GeminiLogo,
	JetBrainsLogo,
	OpenAILogo,
	ReplitLogo,
	VSCodeLogo,
} from "./brand-logos";

export interface FeatureGridCodeIdeProps {
	cliCommand?: string;
	codeSnippet?: string;
}

export function FeatureGridCodeIde({
	codeSnippet = `const axios = require('axios');

const response = await axios.post('https://api.example.com/data', {
  key: 'value',
  anotherKey: 'anotherValue',
});

console.log(response.data);`,
	cliCommand = "Astor",
}: FeatureGridCodeIdeProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="relative @3xl:p-12">
					<div
						aria-hidden="true"
						className="mask-x-from-95% pointer-events-none absolute -inset-x-12 inset-y-0 @3xl:block hidden border-foreground/5 border-y"
					/>
					<div
						aria-hidden="true"
						className="mask-y-from-95% pointer-events-none absolute inset-x-0 -inset-y-12 @3xl:block hidden border-foreground/5 border-x"
					/>
					<div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-illustration pt-6 shadow-black/6.5 shadow-lg ring-1 ring-border-illustration backdrop-blur">
						<div className="relative z-10 px-3">
							<div className="flex gap-1.5 px-3">
								<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
								<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
								<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
							</div>
							{/* Tab bar — decorative */}
							<div className="relative mt-4 flex gap-1">
								<span
									className="absolute inset-y-0 -left-4 flex rounded-full border border-foreground/5 bg-foreground/5"
									style={{ width: "90px", transform: "translateX(16px)" }}
								/>
								<span className="z-10 flex h-8 items-center gap-1 rounded-full px-3 text-foreground text-sm">
									<GeminiLogo id="ci_gemini" />
									<span className="text-nowrap font-medium">Gemini</span>
								</span>
								<span className="z-10 flex h-8 items-center gap-1 rounded-full px-3 text-sm opacity-50">
									<ReplitLogo />
									<span className="text-nowrap font-medium">Replit</span>
								</span>
								<span className="z-10 hidden h-8 items-center gap-1 rounded-full px-3 text-sm opacity-50 sm:flex">
									<span className="text-nowrap font-medium">VSCodium</span>
								</span>
								<span className="z-10 hidden h-8 items-center gap-1 rounded-full px-3 text-sm opacity-50 sm:flex">
									<span className="text-nowrap font-medium">Google PaLM</span>
								</span>
							</div>
						</div>
						<div className="h-82 overflow-hidden p-4 pt-2">
							<pre className="whitespace-pre-wrap font-mono text-[13px] text-foreground/80 leading-snug">
								<code>{codeSnippet}</code>
							</pre>
						</div>
					</div>
					<div className="relative mt-12 grid @2xl:grid-cols-3 @sm:grid-cols-2 @3xl:gap-24 @xl:gap-12 gap-6">
						<div
							aria-hidden="true"
							className="mask-y-from-95% pointer-events-none absolute inset-x-0 -inset-y-12 @4xl:-inset-y-24 mx-auto @3xl:block hidden @4xl:w-[calc(33.333%+3rem)] w-[calc(33.333%+1.5rem)] border-x border-dashed"
						/>
						{/* IDE Support column */}
						<div className="space-y-3">
							<h3 className="font-medium">Native IDE Support</h3>
							<div className="grid grid-cols-3 gap-0.5 *:flex *:items-center *:justify-center *:rounded *:bg-foreground/5 *:px-2 *:py-3">
								<div className="!rounded-l-lg">
									<JetBrainsLogo id="ci_jb" />
								</div>
								<div>
									<VSCodeLogo id="ci_vsc" />
								</div>
								<div className="!rounded-r-lg">
									<CursorLogo />
								</div>
							</div>
						</div>
						{/* LLM column */}
						<div className="space-y-3">
							<h3 className="font-medium">Works with any LLM</h3>
							<div className="grid grid-cols-3 gap-0.5 *:flex *:items-center *:justify-center *:rounded *:bg-foreground/5 *:px-2 *:py-3">
								<div className="!rounded-l-lg">
									<GeminiLogo id="ci_llm_gemini" />
								</div>
								<div>
									<ClaudeLogo />
								</div>
								<div className="!rounded-r-lg">
									<OpenAILogo />
								</div>
							</div>
						</div>
						{/* CLI column */}
						<div className="space-y-3">
							<h3 className="font-medium">CLI Compatible</h3>
							<p className="text-muted-foreground text-sm">
								Run{" "}
								<code className="font-mono text-indigo-400">{cliCommand}</code>{" "}
								<code className="font-mono text-primary">--help</code> to see
								the available commands.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
