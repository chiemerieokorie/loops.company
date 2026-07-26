import { CalendarDays, Clock2, Zap } from "lucide-react";
import { GeminiLogo, ReplitLogo } from "./brand-logos";
import { type CodeWindowItem, defaultCodeWindowItems } from "./data";

export interface FeatureGridCodeWindowItem {
	description: string;
	icon: "clock" | "zap" | "calendar";
	title: string;
}

export interface FeatureGridCodeWindowProps {
	codeSnippet?: string;
	items?: FeatureGridCodeWindowItem[];
}

function ItemIcon({ icon }: { icon: CodeWindowItem["icon"] }) {
	if (icon === "clock") {
		return (
			<Clock2 className="lucide size-4 fill-foreground/10 stroke-primary" />
		);
	}
	if (icon === "zap") {
		return <Zap className="lucide size-4 fill-foreground/10 stroke-primary" />;
	}
	return (
		<CalendarDays className="lucide size-4 fill-foreground/10 stroke-primary" />
	);
}

export function FeatureGridCodeWindow({
	codeSnippet = `const axios = require('axios');

const response = await axios.post('https://api.example.com/data', {
  key: 'value',
  anotherKey: 'anotherValue',
});

console.log(response.data);`,
	items = defaultCodeWindowItems,
}: FeatureGridCodeWindowProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto w-full max-w-5xl px-6">
				<div className="relative p-4 md:p-12">
					<div className="mask-x-from-95% absolute -inset-x-12 inset-y-0 border-y" />
					<div className="mask-y-from-95% absolute inset-x-0 -inset-y-12 border-x" />
					<div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-illustration pt-6 shadow-black/6.5 shadow-lg ring-1 ring-border-illustration">
						<div className="relative z-10 px-3">
							<div className="flex gap-1.5 px-3">
								<div className="size-2 rounded-full border border-black/5 bg-muted-foreground/10" />
								<div className="size-2 rounded-full border border-black/5 bg-muted-foreground/10" />
								<div className="size-2 rounded-full border border-black/5 bg-muted-foreground/10" />
							</div>
							{/* Tab bar — decorative, static */}
							<div className="relative mt-4 flex gap-1">
								<span
									className="absolute inset-y-0 -left-4 flex rounded-full border border-foreground/5 bg-foreground/5"
									style={{ transform: "translateX(16px)", width: "90px" }}
								/>
								<span className="z-10 flex h-8 items-center gap-1 rounded-full px-3 text-foreground text-sm">
									<GeminiLogo id="cw_gemini" />
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
					<div className="relative mt-12 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-24">
						<div
							aria-hidden="true"
							className="mask-y-from-95% absolute inset-x-0 -inset-y-24 mx-auto w-[calc(33.333%+3rem)] border-x border-dashed max-md:hidden"
						/>
						{items.slice(0, 3).map((item) => (
							<div className="space-y-1.5" key={item.title + item.icon}>
								<ItemIcon icon={item.icon} />
								<h3 className="mt-3 font-medium">{item.title}</h3>
								<p className="line-clamp-2 text-muted-foreground text-sm">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
