import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCircleHalfFill: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="circle-half-fill, contrast">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5V3.5ZM2 12C2 6.47715 6.47715 2 12 2C12.2725 2 12.5427 2.01092 12.81 2.03237C17.9544 2.44515 22 6.74975 22 12C22 17.2502 17.9544 21.5548 12.81 21.9676C12.5427 21.9891 12.2725 22 12 22C6.47715 22 2 17.5228 2 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					clipRule="evenodd"
					d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5V20.5ZM22 12C22 17.5228 17.5228 22 12 22C11.7275 22 11.4573 21.9891 11.19 21.9676C6.04558 21.5549 2 17.2502 2 12C2 6.74975 6.04558 2.44515 11.19 2.03237C11.4573 2.01092 11.7275 2 12 2C17.5228 2 22 6.47715 22 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCircleHalfFill;
