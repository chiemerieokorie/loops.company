import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalendarCheck: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calendar-check, date-check">
		{variant === "filled" ? (
			<>
				<path
					d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H6.75C4.67893 4 3 5.67893 3 7.75V17.25C3 19.3211 4.67893 21 6.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H6.75C5.50736 19.5 4.5 18.4926 4.5 17.25V10H19.5V12.25C19.5 12.6642 19.8358 13 20.25 13C20.6642 13 21 12.6642 21 12.25V7.75C21 5.67893 19.3211 4 17.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z"
					fill="currentColor"
				/>
				<path
					d="M21.8391 16.2141C22.0955 15.8888 22.0395 15.4172 21.7142 15.1609C21.3888 14.9045 20.9172 14.9605 20.6609 15.2858L16.8541 20.1176L15.2844 18.5237C14.9937 18.2286 14.5189 18.225 14.2237 18.5156C13.9286 18.8063 13.925 19.2811 14.2156 19.5762L16.3823 21.7762C16.5334 21.9296 16.7431 22.0107 16.9581 21.9988C17.173 21.9869 17.3725 21.8832 17.5058 21.7141L21.8391 16.2141Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 4.75H6.75C5.09315 4.75 3.75 6.09315 3.75 7.75C3.75 8.57843 4.42157 9.25 5.25 9.25H20.25V7.75C20.25 6.09315 18.9069 4.75 17.25 4.75H16.25H7.75Z"
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
					d="M20.25 9.25V12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 9.25V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.25 15.75L16.9167 21.25L14.75 19.05"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalendarCheck;
