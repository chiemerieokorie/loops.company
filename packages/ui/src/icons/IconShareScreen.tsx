import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShareScreen: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="share-screen, screen-sharing">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM11.4697 7.71967C11.7626 7.42678 12.2374 7.42678 12.5303 7.71967L15.5303 10.7197C15.8232 11.0126 15.8232 11.4874 15.5303 11.7803C15.2374 12.0732 14.7626 12.0732 14.4697 11.7803L12.75 10.0607V15.75C12.75 16.1642 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.1642 11.25 15.75V10.0607L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803C8.17678 11.4874 8.17678 11.0126 8.46967 10.7197L11.4697 7.71967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9 11.25L12 8.25L15 11.25M12 15.75V9.5M5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShareScreen;
