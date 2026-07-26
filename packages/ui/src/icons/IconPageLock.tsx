import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPageLock: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="page-lock">
		{variant === "filled" ? (
			<>
				<path
					d="M4 5.75C4 3.67893 5.67893 2 7.75 2H16.25C18.3211 2 20 3.67893 20 5.75V12.8131C19.2059 12.0028 18.0992 11.5 16.875 11.5C14.8312 11.5 13.1147 12.9014 12.6341 14.7958C11.9566 15.1835 11.5 15.9134 11.5 16.75V21.25C11.5 21.513 11.5451 21.7654 11.628 22H7.75C5.67893 22 4 20.3211 4 18.25V5.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M20 16.1684V16C20 14.3431 18.6569 13 17 13C15.3431 13 14 14.3431 14 16V16.1684C13.4088 16.4493 13 17.0519 13 17.75V20.25C13 21.2165 13.7835 22 14.75 22H19.25C20.2165 22 21 21.2165 21 20.25V17.75C21 17.0519 20.5912 16.4493 20 16.1684ZM15.5 16H18.5C18.5 15.1716 17.8284 14.5 17 14.5C16.1716 14.5 15.5 15.1716 15.5 16ZM19.25 17.5H14.75C14.6119 17.5 14.5 17.6119 14.5 17.75V20.25C14.5 20.3881 14.6119 20.5 14.75 20.5H19.25C19.3881 20.5 19.5 20.3881 19.5 20.25V17.75C19.5 17.6119 19.3881 17.5 19.25 17.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M13.75 17.75C13.75 17.1977 14.1977 16.75 14.75 16.75H19.25C19.8023 16.75 20.25 17.1977 20.25 17.75V20.25C20.25 20.8023 19.8023 21.25 19.25 21.25H14.75C14.1977 21.25 13.75 20.8023 13.75 20.25V17.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 16C14.75 14.7574 15.7574 13.75 17 13.75C18.2426 13.75 19.25 14.7574 19.25 16C19.25 16.4142 18.9142 16.75 18.5 16.75H15.5C15.0858 16.75 14.75 16.4142 14.75 16Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.75 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPageLock;
