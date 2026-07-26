import { cva, type VariantProps } from "class-variance-authority";
import type { SVGProps } from "react";
import { cn } from "./lib/cn";

const iconVariants = cva("inline-block shrink-0", {
	variants: {
		iconSize: {
			sm: "size-4",
			md: "size-5",
			lg: "size-6",
			xl: "size-8",
		},
	},
});

export type IconVariants = VariantProps<typeof iconVariants>;

export type CentralIconBaseProps = SVGProps<SVGSVGElement> &
	IconVariants & {
		ariaLabel?: string;
		ariaHidden?: boolean;
	};

export const CentralIconBase = ({
	ref,
	className,
	iconSize,
	ariaLabel,
	ariaHidden = true,
	children,
	...rest
}: CentralIconBaseProps) => (
	<svg
		aria-hidden={ariaHidden}
		fill="none"
		height="1em"
		role={ariaHidden ? undefined : "img"}
		viewBox="0 0 24 24"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
		className={cn(iconVariants({ iconSize }), className)}
		ref={ref}
	>
		{ariaLabel && !ariaHidden && <title>{ariaLabel}</title>}
		{children}
	</svg>
);

export { iconVariants };

export type IconVariant = "outlined" | "filled";
export type CentralIconProps = CentralIconBaseProps & {
	variant?: IconVariant;
};
