import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalenderNextWeek: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calender-next-week">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM19.5 8H4.5V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V8ZM7.96967 11.2197C8.26256 10.9268 8.73744 10.9268 9.03033 11.2197L11.0303 13.2197C11.3232 13.5126 11.3232 13.9874 11.0303 14.2803L9.03033 16.2803C8.73744 16.5732 8.26256 16.5732 7.96967 16.2803C7.67678 15.9874 7.67678 15.5126 7.96967 15.2197L9.43934 13.75L7.96967 12.2803C7.67678 11.9874 7.67678 11.5126 7.96967 11.2197ZM12.9697 11.2197C13.2626 10.9268 13.7374 10.9268 14.0303 11.2197L16.0303 13.2197C16.3232 13.5126 16.3232 13.9874 16.0303 14.2803L14.0303 16.2803C13.7374 16.5732 13.2626 16.5732 12.9697 16.2803C12.6768 15.9874 12.6768 15.5126 12.9697 15.2197L14.4393 13.75L12.9697 12.2803C12.6768 11.9874 12.6768 11.5126 12.9697 11.2197Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.5 11.75L10.5 13.75L8.5 15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.5 11.75L15.5 13.75L13.5 15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 7.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V7.25V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V7.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 7.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalenderNextWeek;
