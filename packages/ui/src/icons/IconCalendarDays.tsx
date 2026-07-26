import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalendarDays: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calendar-days">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 3C4.67893 3 3 4.67893 3 6.75V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V6.75C21 4.67893 19.3211 3 17.25 3H6.75ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11ZM15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12ZM6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75V7H19.5V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V7.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V7.75V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 7.75H20.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					clipRule="evenodd"
					d="M8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M8 15C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalendarDays;
