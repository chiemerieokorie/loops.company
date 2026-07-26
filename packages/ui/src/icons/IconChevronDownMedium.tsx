import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronDownMedium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-down-medium">
		{variant === "filled" ? (
			<>
				<path
					d="M17.7197 8.96967C18.0126 8.67678 18.4873 8.67678 18.7802 8.96967C19.0731 9.26256 19.0731 9.73732 18.7802 10.0302L12.5302 16.2802C12.2373 16.5731 11.7626 16.5731 11.4697 16.2802L5.21967 10.0302C4.92678 9.73732 4.92678 9.26256 5.21967 8.96967C5.51256 8.67678 5.98732 8.67678 6.28022 8.96967L11.9999 14.6894L17.7197 8.96967Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 9.5L12 15.75L18.25 9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronDownMedium;
