import { cn } from "@runway/ui/lib/utils";
import type { ComponentProps, ReactNode } from "react";
import { Container } from "./container";

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
	return (
		<p
			className={cn("font-medium text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

export function Heading({ className, ...props }: ComponentProps<"h1">) {
	return (
		<h1
			className={cn(
				"text-balance font-display font-medium text-4xl text-foreground tracking-tight sm:text-5xl",
				className
			)}
			{...props}
		/>
	);
}

export function Subheading({ className, ...props }: ComponentProps<"h2">) {
	return (
		<h2
			className={cn(
				"text-balance font-display font-medium text-2xl text-foreground tracking-tight sm:text-3xl",
				className
			)}
			{...props}
		/>
	);
}

export function Lead({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn("text-base text-muted-foreground", className)}
			{...props}
		/>
	);
}

// Section scaffold mirroring the kit's API (eyebrow → heading → subheadline →
// cta, then children) so the section rewrites stay structurally faithful.
export function Section({
	eyebrow,
	headline,
	subheadline,
	cta,
	className,
	children,
	...props
}: {
	eyebrow?: ReactNode;
	headline?: ReactNode;
	subheadline?: ReactNode;
	cta?: ReactNode;
} & ComponentProps<"section">) {
	return (
		<section className={cn("py-16", className)} {...props}>
			<Container className="flex flex-col gap-10 sm:gap-16">
				{headline && (
					<div className="flex max-w-2xl flex-col gap-4">
						<div className="flex flex-col gap-2">
							{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
							<Subheading>{headline}</Subheading>
						</div>
						{subheadline && <Lead className="text-pretty">{subheadline}</Lead>}
						{cta}
					</div>
				)}
				<div>{children}</div>
			</Container>
		</section>
	);
}
