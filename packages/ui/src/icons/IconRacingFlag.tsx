import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRacingFlag: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="racing-flag, target">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16.75 3C18.8211 3 20.5 4.67893 20.5 6.75V12.25C20.5 14.3211 18.8211 16 16.75 16H5V20.25C5 20.6642 4.66421 21 4.25 21C3.83579 21 3.5 20.6642 3.5 20.25V4.75C3.5 3.7835 4.2835 3 5.25 3H16.75ZM7 12.5V14.5H9V12.5H7ZM11 12.5V14.5H13V12.5H11ZM15 12.5V14.5H17V12.5H15ZM5 10.5V12.5H7V10.5H5ZM9 10.5V12.5H11V10.5H9ZM13 10.5V12.5H15V10.5H13ZM17 10.5V12.5H19V10.5H17ZM7 8.5V10.5H9V8.5H7ZM11 8.5V10.5H13V8.5H11ZM15 8.5V10.5H17V8.5H15ZM5 6.5V8.5H7V6.5H5ZM9 6.5V8.5H11V6.5H9ZM13 6.5V8.5H15V6.5H13ZM17 6.5V8.5H19V6.5H17ZM7 4.5V6.5H9V4.5H7ZM11 4.5V6.5H13V4.5H11ZM15 4.5V6.5H17V4.5H15Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.25 15.25H16.75C18.4069 15.25 19.75 13.9069 19.75 12.25V6.75C19.75 5.09315 18.4069 3.75 16.75 3.75H5.25C4.69772 3.75 4.25 4.19772 4.25 4.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path d="M9 14.5H7V12.5H9V14.5Z" fill="currentColor" />
				<path d="M13 14.5H11V12.5H13V14.5Z" fill="currentColor" />
				<path d="M17 14.5H15V12.5H17V14.5Z" fill="currentColor" />
				<path d="M7 12.5H5V10.5H7V12.5Z" fill="currentColor" />
				<path d="M11 12.5H9V10.5H11V12.5Z" fill="currentColor" />
				<path d="M15 12.5H13V10.5H15V12.5Z" fill="currentColor" />
				<path d="M19 12.5H17V10.5H19V12.5Z" fill="currentColor" />
				<path d="M9 10.5H7V8.5H9V10.5Z" fill="currentColor" />
				<path d="M13 10.5H11V8.5H13V10.5Z" fill="currentColor" />
				<path d="M17 10.5H15V8.5H17V10.5Z" fill="currentColor" />
				<path d="M7 8.5H5V6.5H7V8.5Z" fill="currentColor" />
				<path d="M11 8.5H9V6.5H11V8.5Z" fill="currentColor" />
				<path d="M15 8.5H13V6.5H15V8.5Z" fill="currentColor" />
				<path d="M19 8.5H17V6.5H19V8.5Z" fill="currentColor" />
				<path d="M9 6.5H7V4.5H9V6.5Z" fill="currentColor" />
				<path d="M13 6.5H11V4.5H13V6.5Z" fill="currentColor" />
				<path d="M17 6.5H15V4.5H17V6.5Z" fill="currentColor" />
			</>
		)}
	</CentralIconBase>
);

export default IconRacingFlag;
