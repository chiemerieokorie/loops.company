export interface SubheroSearchProps {
	badge?: string;
	description?: string;
	searchPlaceholder?: string;
	title?: string;
}

export function SubheroSearch({
	badge = "Support",
	title = "How can we help?",
	description = "Find answers to your questions and get support for our services.",
	searchPlaceholder = "Ask a question",
}: SubheroSearchProps) {
	return (
		<section className="bg-background py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-4xl text-center">
					<span className="rounded-full border border-primary/10 bg-primary/5 px-2 py-1 font-medium text-primary text-sm">
						{badge}
					</span>
					<h1 className="mt-4 text-balance font-semibold text-4xl md:text-5xl lg:text-6xl lg:tracking-tight">
						{title}
					</h1>
					<p className="mt-4 mb-6 text-balance text-lg text-muted-foreground">
						{description}
					</p>
					<div className="relative mx-auto max-w-lg">
						<svg
							className="absolute top-1/2 left-5 size-4 -translate-y-1/2"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="11" cy="11" r="8" />
							<path d="m21 21-4.3-4.3" />
						</svg>
						<input
							className="h-14 w-full rounded-full border border-foreground/15 py-3 pr-4 pl-12 outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
							id="search"
							name="search"
							placeholder={searchPlaceholder}
							type="text"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
