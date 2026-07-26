import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVideo2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="video-2, camera, movie, play">
		{variant === "filled" ? (
			<>
				<path
					d="M13.75 4.5C15.8211 4.5 17.5 6.17893 17.5 8.25V15.75C17.5 17.8211 15.8211 19.5 13.75 19.5H5.75C3.67893 19.5 2 17.8211 2 15.75V8.25C2 6.17893 3.67893 4.5 5.75 4.5H13.75Z"
					fill="currentColor"
				/>
				<path
					d="M20.4434 7.21484C21.4284 6.82118 22.4998 7.54658 22.5 8.60742V15.3926C22.4998 16.4534 21.4284 17.1788 20.4434 16.7852L18.5 16.0078V7.99219L20.4434 7.21484Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 8.25C2.75 6.59315 4.09315 5.25 5.75 5.25H14.25C15.9069 5.25 17.25 6.59315 17.25 8.25V15.75C17.25 17.4069 15.9069 18.75 14.25 18.75H5.75C4.09315 18.75 2.75 17.4069 2.75 15.75V8.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 9L20.3439 7.62495C21.0051 7.33105 21.75 7.8151 21.75 8.53876V15.4612C21.75 16.1849 21.0051 16.669 20.3439 16.375L17.25 15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVideo2;
