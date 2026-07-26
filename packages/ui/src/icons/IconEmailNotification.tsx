import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEmailNotification: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="email-notification, badge, envelope">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M19 2C16.7909 2 15 3.79086 15 6C15 8.20914 16.7909 10 19 10C21.2091 10 23 8.20914 23 6C23 3.79086 21.2091 2 19 2Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M16.5 6C16.5 4.61929 17.6193 3.5 19 3.5C20.3807 3.5 21.5 4.61929 21.5 6C21.5 7.38071 20.3807 8.5 19 8.5C17.6193 8.5 16.5 7.38071 16.5 6Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M19 11.5625C18.8695 11.5625 18.74 11.558 18.6118 11.5492C16.6013 12.4804 14.3613 13 12 13C8.20301 13 4.71984 11.6564 2 9.4187V16.25C2 18.3211 3.67893 20 5.75 20H18.25C20.3211 20 22 18.3211 22 16.25V10.685C21.1344 11.2404 20.1048 11.5625 19 11.5625Z"
					fill="currentColor"
				/>
				<path
					d="M13.4365 6C13.4365 5.29501 13.5677 4.62066 13.8069 4H5.74903C3.7904 4 2.18248 5.50159 2.01367 7.41637C4.58491 9.94212 8.11004 11.5 11.999 11.5C13.4873 11.5 14.9222 11.2719 16.2708 10.8486C14.579 9.89463 13.4365 8.08073 13.4365 6Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M23.25 6C23.25 7.79493 21.7949 9.25 20 9.25C18.2051 9.25 16.75 7.79493 16.75 6C16.75 4.20507 18.2051 2.75 20 2.75C21.7949 2.75 23.25 4.20507 23.25 6Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.99805 9.25C5.50528 11.1337 8.62204 12.25 11.9995 12.25C13.5675 12.25 15.0793 12.0094 16.5 11.5631"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEmailNotification;
