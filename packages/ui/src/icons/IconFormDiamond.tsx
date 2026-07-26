import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFormDiamond: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="form-diamond, square-45-degrees">
		{variant === "filled" ? (
			<>
				<path
					d="M10.0553 2.38404C11.1292 1.3103 12.8701 1.3103 13.944 2.38404L21.6159 10.0559C22.6892 11.1298 22.6895 12.8708 21.6159 13.9446L13.944 21.6165C12.8702 22.6901 11.1292 22.6898 10.0553 21.6165L2.38343 13.9446C1.30969 12.8707 1.30969 11.1298 2.38343 10.0559L10.0553 2.38404Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13.4142 2.91421C12.6332 2.13316 11.3668 2.13316 10.5858 2.91421L2.91421 10.5858C2.13316 11.3668 2.13316 12.6332 2.91421 13.4142L10.5858 21.0858C11.3668 21.8668 12.6332 21.8668 13.4142 21.0858L21.0858 13.4142C21.8668 12.6332 21.8668 11.3668 21.0858 10.5858L13.4142 2.91421Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFormDiamond;
