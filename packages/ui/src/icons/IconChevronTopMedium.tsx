import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronTopMedium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-top-medium">
		{variant === "filled" ? (
			<>
				<path
					d="M11.5263 7.66809C11.8209 7.42778 12.2556 7.44524 12.5302 7.71984L18.7802 13.9698C19.0731 14.2627 19.0731 14.7375 18.7802 15.0304C18.4873 15.3233 18.0126 15.3233 17.7197 15.0304L11.9999 9.31066L6.28022 15.0304C5.98732 15.3233 5.51256 15.3233 5.21967 15.0304C4.92678 14.7375 4.92678 14.2627 5.21967 13.9698L11.4697 7.71984L11.5263 7.66809Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 14.5L12 8.25L18.25 14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronTopMedium;
