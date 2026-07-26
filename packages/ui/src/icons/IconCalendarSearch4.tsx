import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalendarSearch4: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calendar-search-4">
		{variant === "filled" ? (
			<>
				<path
					d="M9.5 12C9.5 10.7574 10.5074 9.75 11.75 9.75C12.9926 9.75 14 10.7574 14 12C14 13.2426 12.9926 14.25 11.75 14.25C10.5074 14.25 9.5 13.2426 9.5 12Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H17.25C19.3211 4 21 5.67893 21 7.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V7.75C3 5.67893 4.67893 4 6.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM11.75 8.25C9.67893 8.25 8 9.92893 8 12C8 14.0711 9.67893 15.75 11.75 15.75C12.5143 15.75 13.2252 15.5213 13.818 15.1287L14.7197 16.0303C15.0126 16.3232 15.4874 16.3232 15.7803 16.0303C16.0732 15.7374 16.0732 15.2626 15.7803 14.9697L14.8787 14.068C15.2713 13.4752 15.5 12.7643 15.5 12C15.5 9.92893 13.8211 8.25 11.75 8.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 7.75C3.75 6.09315 5.09315 4.75 6.75 4.75H17.25C18.9069 4.75 20.25 6.09315 20.25 7.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 4.75V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 4.75V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 12C14.75 13.6569 13.4069 15 11.75 15C10.0931 15 8.75 13.6569 8.75 12C8.75 10.3431 10.0931 9 11.75 9C13.4069 9 14.75 10.3431 14.75 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14 14.25L15.25 15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalendarSearch4;
