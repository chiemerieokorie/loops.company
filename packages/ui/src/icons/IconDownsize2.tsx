import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDownsize2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="downsize-2, exit-full-screen, scale-down"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11 7.25C11 9.32107 9.32107 11 7.25 11H3.75C3.33579 11 3 10.6642 3 10.25C3 9.83579 3.33579 9.5 3.75 9.5H7.25C8.49264 9.5 9.5 8.49264 9.5 7.25V3.75C9.5 3.33579 9.83579 3 10.25 3C10.6642 3 11 3.33579 11 3.75V7.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M21 10.25C21 10.6642 20.6642 11 20.25 11H16.75C14.6789 11 13 9.32107 13 7.25V3.75C13 3.33579 13.3358 3 13.75 3C14.1642 3 14.5 3.33579 14.5 3.75V7.25C14.5 8.49264 15.5074 9.5 16.75 9.5H20.25C20.6642 9.5 21 9.83579 21 10.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M13.75 21C13.3358 21 13 20.6642 13 20.25V16.75C13 14.6789 14.6789 13 16.75 13H20.25C20.6642 13 21 13.3358 21 13.75C21 14.1642 20.6642 14.5 20.25 14.5H16.75C15.5074 14.5 14.5 15.5074 14.5 16.75V20.25C14.5 20.6642 14.1642 21 13.75 21Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M10.25 21C9.83579 21 9.5 20.6642 9.5 20.25V16.75C9.5 15.5074 8.49264 14.5 7.25 14.5H3.75C3.33579 14.5 3 14.1642 3 13.75C3 13.3358 3.33579 13 3.75 13H7.25C9.32107 13 11 14.6789 11 16.75V20.25C11 20.6642 10.6642 21 10.25 21Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 10.25H7.25C8.90685 10.25 10.25 8.90685 10.25 7.25V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 10.25H16.75C15.0931 10.25 13.75 8.90685 13.75 7.25V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 20.25V16.75C13.75 15.0931 15.0931 13.75 16.75 13.75H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 13.75H7.25C8.90685 13.75 10.25 15.0931 10.25 16.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDownsize2;
