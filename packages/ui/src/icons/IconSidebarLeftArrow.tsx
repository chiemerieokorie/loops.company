import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSidebarLeftArrow: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sidebar-left-arrow">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17.25 21H8.5V3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21ZM15.7803 10.2803C16.0732 9.98744 16.0732 9.51256 15.7803 9.21967C15.4874 8.92678 15.0126 8.92678 14.7197 9.21967L12.4697 11.4697C12.1768 11.7626 12.1768 12.2374 12.4697 12.5303L14.7197 14.7803C15.0126 15.0732 15.4874 15.0732 15.7803 14.7803C16.0732 14.4874 16.0732 14.0126 15.7803 13.7197L14.0607 12L15.7803 10.2803Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M6.75 3H7V21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3Z"
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
					d="M3.75 6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path d="M8.25 3.75V20.25" stroke="currentColor" strokeWidth="1.5" />
			</>
		)}
	</CentralIconBase>
);

export default IconSidebarLeftArrow;
