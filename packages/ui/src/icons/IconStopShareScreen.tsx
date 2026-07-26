import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStopShareScreen: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="stop-share-screen, stop-sharing">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18.25 4C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4H18.25ZM15.2803 8.71973C14.9874 8.42683 14.5126 8.42683 14.2197 8.71973L12 10.9395L9.78027 8.71973C9.48738 8.42683 9.01262 8.42683 8.71973 8.71973C8.42683 9.01262 8.42683 9.48738 8.71973 9.78027L10.9395 12L8.71973 14.2197C8.42683 14.5126 8.42683 14.9874 8.71973 15.2803C9.01262 15.5732 9.48738 15.5732 9.78027 15.2803L12 13.0605L14.2197 15.2803C14.5126 15.5732 14.9874 15.5732 15.2803 15.2803C15.5732 14.9874 15.5732 14.5126 15.2803 14.2197L13.0605 12L15.2803 9.78027C15.5732 9.48738 15.5732 9.01262 15.2803 8.71973Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 9.25L14.75 14.75M14.75 9.25L9.25 14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStopShareScreen;
