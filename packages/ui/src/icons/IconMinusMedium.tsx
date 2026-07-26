import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMinusMedium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="minus-medium, remove, delete">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4.5 12C4.5 11.5858 4.77982 11.25 5.125 11.25H18.875C19.2202 11.25 19.5 11.5858 19.5 12C19.5 12.4142 19.2202 12.75 18.875 12.75H5.125C4.77982 12.75 4.5 12.4142 4.5 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.25 12H18.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMinusMedium;
