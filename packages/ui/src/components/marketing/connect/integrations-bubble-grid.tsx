import {
	CloudflareLogo,
	CursorLogo,
	LinearLogo,
	OpenAILogo,
	ReplitLogo,
	VercelLogo,
	VSCodeLogo,
} from "./integration-logos";

const Placeholder = () => (
	<div className="size-11 rounded-full border bg-foreground/[0.03]" />
);

const IconBubble = ({ children }: { children: React.ReactNode }) => (
	<div className="flex aspect-square size-11 rounded-full border border-transparent bg-card shadow-md ring-1 ring-foreground/10 *:m-auto *:size-5">
		{children}
	</div>
);

export interface IntegrationsBubbleGridProps {
	ctaHref?: string;
	ctaLabel?: string;
	description?: string;
	title?: string;
}

export function IntegrationsBubbleGrid({
	title = "Seamless Integration with your favorite Tools",
	description = "Connect seamlessly with popular platforms and services to enhance your workflow.",
	ctaLabel = "Get Started",
	ctaHref = "#",
}: IntegrationsBubbleGridProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				{/* Decorative bubble icon rows */}
				<div aria-hidden="true" className="space-y-3">
					{/* Row 1 — reversed */}
					<div className="flex flex-row-reverse justify-center gap-3">
						<Placeholder />
						<Placeholder />
						<Placeholder />
						<Placeholder />
					</div>
					{/* Row 2 */}
					<div className="flex flex-row-reverse justify-center gap-3">
						<Placeholder />
						<IconBubble>
							<VSCodeLogo />
						</IconBubble>
						<Placeholder />
						<Placeholder />
						<Placeholder />
					</div>
					{/* Row 3 */}
					<div className="flex justify-center gap-3">
						<Placeholder />
						<IconBubble>
							<ReplitLogo />
						</IconBubble>
						<Placeholder />
						<IconBubble>
							<VercelLogo />
						</IconBubble>
						<IconBubble>
							<LinearLogo />
						</IconBubble>
						<Placeholder />
					</div>
					{/* Row 4 */}
					<div className="flex justify-center gap-3">
						<Placeholder />
						<IconBubble>
							<VSCodeLogo />
						</IconBubble>
						<Placeholder />
						<IconBubble>
							<OpenAILogo />
						</IconBubble>
						<Placeholder />
						<IconBubble>
							<CloudflareLogo />
						</IconBubble>
						<Placeholder />
					</div>
					{/* Row 5 */}
					<div className="flex justify-center gap-3">
						<Placeholder />
						<IconBubble>
							<CursorLogo />
						</IconBubble>
						<IconBubble>
							<ReplitLogo />
						</IconBubble>
						<Placeholder />
						<IconBubble>
							<OpenAILogo />
						</IconBubble>
						<Placeholder />
						<Placeholder />
					</div>
					{/* Row 6 — reversed */}
					<div className="flex flex-row-reverse justify-center gap-3">
						<Placeholder />
						<Placeholder />
						<Placeholder />
						<Placeholder />
					</div>
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
						href={ctaHref}
					>
						{ctaLabel}
					</a>
				</div>
			</div>
		</section>
	);
}
