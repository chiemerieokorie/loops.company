import { CursorLogo, JetBrainsLogo, VSCodeLogo } from "./brand-logos";

export interface FeatureGridApiCodeProps {
	codeSnippet?: string;
	description?: string;
	ideSupportTitle?: string;
	title?: string;
}

export function FeatureGridApiCode({
	title = "Build powerful integrations with our API",
	description = "Generate payment links at scale, enabling seamless marketing campaigns, efficient sales processes, and faster payment.",
	ideSupportTitle = "Native IDE Support",
	codeSnippet = `const axios = require('axios');

const response = await axios.post('https://api.example.com/data', {
  key: 'value',
  anotherKey: 'anotherValue',
});

console.log(response.data);`,
}: FeatureGridApiCodeProps) {
	return (
		<section className="@container bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="relative grid @3xl:grid-cols-3 gap-12">
					<div className="flex flex-col justify-between gap-12 @3xl:pb-3">
						<div>
							<h2 className="relative z-10 text-balance font-bold text-3xl md:text-4xl">
								{title}
							</h2>
							<p className="my-6 max-w-2xl text-lg text-muted-foreground">
								{description}
							</p>
						</div>
						<div className="max-w-56 space-y-3">
							<h3 className="font-medium">{ideSupportTitle}</h3>
							<div className="grid grid-cols-3 gap-0.5 *:flex *:items-center *:justify-center *:rounded *:bg-foreground/5 *:px-2 *:py-3">
								<div className="!rounded-l-lg">
									<JetBrainsLogo id="api_code_jb" />
								</div>
								<div>
									<VSCodeLogo id="api_code_vsc" />
								</div>
								<div className="!rounded-r-lg">
									<CursorLogo />
								</div>
							</div>
						</div>
					</div>
					<div className="@3xl:col-span-2 mt-auto h-fit">
						<div className="relative z-10 max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-transparent bg-illustration pt-6 shadow-black/6.5 shadow-lg ring-1 ring-border-illustration backdrop-blur">
							<div className="relative z-10 px-3">
								<div className="flex gap-1.5 px-3">
									<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
									<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
									<div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
								</div>
								<div className="mt-4 h-76 overflow-hidden p-4">
									<pre className="whitespace-pre-wrap font-mono text-[13px] text-foreground/80 leading-relaxed">
										<code>{codeSnippet}</code>
									</pre>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
