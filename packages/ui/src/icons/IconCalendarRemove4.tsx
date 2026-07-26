import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalendarRemove4: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calendar-remove-4">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H17.25C19.3211 4 21 5.67893 21 7.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V7.75C3 5.67893 4.67893 4 6.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM10.0284 9.46967C9.73548 9.17678 9.26061 9.17678 8.96772 9.46967C8.67482 9.76256 8.67482 10.2374 8.96772 10.5303L10.9392 12.5018L8.96967 14.4713C8.67678 14.7642 8.67678 15.2391 8.96967 15.532C9.26256 15.8249 9.73744 15.8249 10.0303 15.532L11.9999 13.5625L13.9694 15.532C14.2623 15.8249 14.7372 15.8249 15.03 15.532C15.3229 15.2391 15.3229 14.7642 15.03 14.4713L13.0605 12.5018L15.032 10.5303C15.3249 10.2374 15.3249 9.76256 15.032 9.46967C14.7391 9.17678 14.2642 9.17678 13.9713 9.46967L11.9999 11.4411L10.0284 9.46967Z"
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
					d="M9.5 10L14.5017 15.0017"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.5017 10L9.5 15.0017"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalendarRemove4;
