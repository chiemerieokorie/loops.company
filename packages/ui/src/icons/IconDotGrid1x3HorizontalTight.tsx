import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDotGrid1x3HorizontalTight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="dot-grid-1x3-horizontal-tight, menu, drag, grab"
	>
		{variant === "filled" ? (
			<>
				<rect fill="currentColor" height="4" rx="2" width="4" x="3" y="10" />
				<rect fill="currentColor" height="4" rx="2" width="4" x="10" y="10" />
				<rect fill="currentColor" height="4" rx="2" width="4" x="17" y="10" />
			</>
		) : (
			<>
				<rect fill="currentColor" height="4" rx="2" width="4" x="3" y="10" />
				<rect fill="currentColor" height="4" rx="2" width="4" x="10" y="10" />
				<rect fill="currentColor" height="4" rx="2" width="4" x="17" y="10" />
			</>
		)}
	</CentralIconBase>
);

export default IconDotGrid1x3HorizontalTight;
