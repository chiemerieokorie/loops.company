import { Quote } from "lucide-react";
import { StripeLogo } from "./brand-logos";

export interface TestimonialQuoteProps {
	/** Avatar URL — used when companyLogo is not provided. */
	authorAvatar?: string;
	authorName?: string;
	authorRole?: string;
	/** When provided, renders a company logo SVG node next to the author instead of an avatar image. */
	companyLogo?: React.ReactNode;
	quote?: string;
}

/**
 * Large centered pull-quote block.
 *
 * Pass `companyLogo` to render a logo beside the divider (Block003 style).
 * Pass `authorAvatar` without `companyLogo` to render an avatar (Block004 style).
 */
export function TestimonialQuote({
	quote = "Using Astor has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
	authorName = "John Doe",
	authorRole = "Founder & CEO, Stripe",
	companyLogo,
	authorAvatar,
}: TestimonialQuoteProps) {
	const hasLogo = Boolean(companyLogo);

	return (
		<section className="bg-background py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-2xl">
					<Quote
						aria-hidden="true"
						className="size-6 fill-illustration stroke-illustration drop-shadow-md dark:fill-muted-foreground dark:stroke-muted-foreground"
					/>
					<div className="mt-12">
						<p className="font-medium text-xl before:mr-1 before:content-['\201C'] after:ml-1 after:content-['\201D'] md:text-3xl/9.5">
							{quote}
						</p>
						{hasLogo ? (
							/* Logo + divider layout (Block003) */
							<div className="mt-12 flex items-center gap-6">
								{companyLogo ?? <StripeLogo className="h-auto w-16" />}
								<div className="space-y-px border-foreground/10 border-l pl-6">
									<p className="font-medium text-sm">{authorName}</p>
									<p className="text-muted-foreground text-xs">{authorRole}</p>
								</div>
							</div>
						) : (
							/* Avatar layout (Block004) */
							<div className="mt-12 flex items-center gap-3">
								{authorAvatar && (
									<div className="aspect-square size-10 overflow-hidden rounded-full border border-transparent shadow-black/15 shadow-md ring-1 ring-foreground/10">
										<img
											alt={`${authorName}'s avatar`}
											className="size-full object-cover"
											decoding="async"
											height={120}
											loading="lazy"
											src={authorAvatar}
											style={{ color: "transparent" }}
											width={120}
										/>
									</div>
								)}
								<div className="space-y-px">
									<p className="font-medium text-sm">{authorName}</p>
									<p className="text-muted-foreground text-xs">{authorRole}</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
