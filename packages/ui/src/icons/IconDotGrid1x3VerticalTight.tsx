import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDotGrid1x3VerticalTight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="dot-grid-1x3-vertical-tight, menu, drag, grab"
	>
		{variant === "filled" ? (
			<>
				<rect fill="currentColor" height="4" rx="2" width="4" x="10" y="3" />
				<rect fill="currentColor" height="4" rx="2" width="4" x="10" y="10" />
				<rect fill="currentColor" height="4" rx="2" width="4" x="10" y="17" />
			</>
		) : (
			<>
				<rect fill="currentColor" height="4" rx="2" width="4" x="10" y="3" />
				<rect fill="currentColor" height="4" rx="2" width="4" x="10" y="10" />
				<rect fill="currentColor" height="4" rx="2" width="4" x="10" y="17" />
			</>
		)}
	</CentralIconBase>
);

export default IconDotGrid1x3VerticalTight;
