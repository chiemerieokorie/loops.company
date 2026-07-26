import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalendar3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calendar-3, date">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H17.25C19.3211 4 21 5.67893 21 7.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V7.75C3 5.67893 4.67893 4 6.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM7 8.75C7 8.33579 7.33579 8 7.75 8H16.25C16.6642 8 17 8.33579 17 8.75C17 9.16421 16.6642 9.5 16.25 9.5H7.75C7.33579 9.5 7 9.16421 7 8.75Z"
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
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 4.75V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 4.75V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 8.75H16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalendar3;
