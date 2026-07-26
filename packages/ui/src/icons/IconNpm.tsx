import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNpm: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="npm">
		{variant === "filled" ? (
			<>
				<path d="M3 21H12V7.5H16.5V21H21V3H3V21Z" fill="currentColor" />
			</>
		) : (
			<>
				<path d="M3 21H12V7.5H16.5V21H21V3H3V21Z" fill="currentColor" />
			</>
		)}
	</CentralIconBase>
);

export default IconNpm;
