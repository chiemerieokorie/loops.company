import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalenderToday: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calender-today">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM19.5 8H4.5V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V8ZM9.5 13.75C9.5 12.3693 10.6193 11.25 12 11.25C13.3807 11.25 14.5 12.3693 14.5 13.75C14.5 15.1307 13.3807 16.25 12 16.25C10.6193 16.25 9.5 15.1307 9.5 13.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V7.25V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V7.25V6.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 13.75C13.75 14.7165 12.9665 15.5 12 15.5C11.0335 15.5 10.25 14.7165 10.25 13.75C10.25 12.7835 11.0335 12 12 12C12.9665 12 13.75 12.7835 13.75 13.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 7.25H20.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalenderToday;
