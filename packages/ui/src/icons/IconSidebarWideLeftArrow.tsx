import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSidebarWideLeftArrow: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sidebar-wide-left-arrow">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18.25 20H7.5V4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20ZM15.7803 10.2803C16.0732 9.98744 16.0732 9.51256 15.7803 9.21967C15.4874 8.92678 15.0126 8.92678 14.7197 9.21967L12.4697 11.4697C12.1768 11.7626 12.1768 12.2374 12.4697 12.5303L14.7197 14.7803C15.0126 15.0732 15.4874 15.0732 15.7803 14.7803C16.0732 14.4874 16.0732 14.0126 15.7803 13.7197L14.0607 12L15.7803 10.2803Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M5.75 4H6V20H5.75C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 9.75L13 12L15.25 14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path d="M7.75 4.75V19.25" stroke="currentColor" strokeWidth="1.5" />
			</>
		)}
	</CentralIconBase>
);

export default IconSidebarWideLeftArrow;
