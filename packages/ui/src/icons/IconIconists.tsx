import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconIconists: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="iconists">
		{variant === "filled" ? (
			<>
				<path d="M12 2V22L8 20V4L12 2Z" fill="currentColor" />
				<path d="M16 4V20L12 22V2L16 4Z" fill="currentColor" opacity="0.35" />
			</>
		) : (
			<>
				<path d="M12 2V22L8 20V4L12 2Z" fill="currentColor" />
				<path d="M16 4V20L12 22V2L16 4Z" fill="currentColor" opacity="0.35" />
			</>
		)}
	</CentralIconBase>
);

export default IconIconists;
