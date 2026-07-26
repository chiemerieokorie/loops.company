import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVideo2Off: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="video-2-off, cam-off, movie, play">
		{variant === "filled" ? (
			<>
				<path
					d="M2.53906 2.40813C2.86589 2.15393 3.33742 2.21239 3.5918 2.53899L17.5918 20.539C17.846 20.8658 17.7875 21.3374 17.4609 21.5917C17.1341 21.8459 16.6626 21.7874 16.4082 21.4609L2.4082 3.46087C2.15401 3.13405 2.21249 2.66251 2.53906 2.40813Z"
					fill="currentColor"
				/>
				<path
					d="M13.6914 19.4999H5.75C3.67896 19.4999 2.00004 17.821 2 15.7499V8.24993C2 7.32354 2.33591 6.47553 2.89258 5.82122L13.6914 19.4999Z"
					fill="currentColor"
				/>
				<path
					d="M13.75 4.49993C15.8211 4.49993 17.5 6.17886 17.5 8.24993V15.7499C17.5 16.5306 17.2607 17.2551 16.8525 17.8554L6.30859 4.49993H13.75Z"
					fill="currentColor"
				/>
				<path
					d="M20.4434 7.21477C21.4284 6.82111 22.4998 7.54651 22.5 8.60735V15.3925C22.4997 16.4533 21.4284 17.1787 20.4434 16.7851L18.5 16.0077V7.99212L20.4434 7.21477Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 9L20.3439 7.62495C21.0051 7.33105 21.75 7.8151 21.75 8.53876V15.4612C21.75 16.1849 21.0051 16.669 20.3439 16.375L17.25 15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 16.5V8.25C17.25 6.59315 15.9069 5.25 14.25 5.25H8.5M2.75 7.5V15.75C2.75 17.4069 4.09315 18.75 5.75 18.75H11.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3 3L17 21"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVideo2Off;
