import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalendarCheck4: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calendar-check-4">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H17.25C19.3211 4 21 5.67893 21 7.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V7.75C3 5.67893 4.67893 4 6.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM15.2803 10.0447C15.5732 10.3376 15.5732 10.8124 15.2803 11.1053L11.4303 14.9553C11.2897 15.096 11.0989 15.175 10.9 15.175C10.7011 15.175 10.5103 15.096 10.3697 14.9553L8.71967 13.3053C8.42678 13.0124 8.42678 12.5376 8.71967 12.2447C9.01256 11.9518 9.48744 11.9518 9.78033 12.2447L10.9 13.3644L14.2197 10.0447C14.5126 9.75179 14.9874 9.75179 15.2803 10.0447Z"
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
					d="M9.25 12.7749L10.9 14.4249L14.75 10.575"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalendarCheck4;
