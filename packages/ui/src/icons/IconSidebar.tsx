import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSidebar: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sidebar, menu, list, window">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 20C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75ZM3.5 7.75C3.5 6.50736 4.50736 5.5 5.75 5.5H10.5V18.5H5.75C4.50736 18.5 3.5 17.4926 3.5 16.25V7.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M7 9.5C6.44772 9.5 6 9.05228 6 8.5C6 7.94772 6.44772 7.5 7 7.5C7.55229 7.5 8 7.94772 8 8.5C8 9.05228 7.55229 9.5 7 9.5ZM7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55229 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13ZM7 16.5C6.44772 16.5 6 16.0523 6 15.5C6 14.9477 6.44772 14.5 7 14.5C7.55228 14.5 8 14.9477 8 15.5C8 16.0523 7.55228 16.5 7 16.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M11.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H11.25M11.25 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H11.25M11.25 4.75V19.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.25 8.5C6.25 8.91421 6.58579 9.25 7 9.25C7.41421 9.25 7.75 8.91421 7.75 8.5C7.75 8.08579 7.41421 7.75 7 7.75C6.58579 7.75 6.25 8.08579 6.25 8.5ZM6.25 12C6.25 12.4142 6.58579 12.75 7 12.75C7.41421 12.75 7.75 12.4142 7.75 12C7.75 11.5858 7.41421 11.25 7 11.25C6.58579 11.25 6.25 11.5858 6.25 12ZM6.25 15.5C6.25 15.9142 6.58579 16.25 7 16.25C7.41421 16.25 7.75 15.9142 7.75 15.5C7.75 15.0858 7.41421 14.75 7 14.75C6.58579 14.75 6.25 15.0858 6.25 15.5Z"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="0.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSidebar;
