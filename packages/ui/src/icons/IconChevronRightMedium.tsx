import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronRightMedium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-right-medium">
		{variant === "filled" ? (
			<>
				<path
					d="M8.96967 5.21967C9.26256 4.92678 9.73732 4.92678 10.0302 5.21967L16.2802 11.4697C16.5731 11.7626 16.5731 12.2373 16.2802 12.5302L10.0302 18.7802C9.73732 19.0731 9.26256 19.0731 8.96967 18.7802C8.67678 18.4873 8.67678 18.0126 8.96967 17.7197L14.6894 11.9999L8.96967 6.28022C8.67678 5.98732 8.67678 5.51256 8.96967 5.21967Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.5 18.25L15.75 12L9.5 5.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronRightMedium;
