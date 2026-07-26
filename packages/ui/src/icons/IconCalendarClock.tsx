import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalendarClock: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calendar-clock, date-time">
		{variant === "filled" ? (
			<>
				<path
					d="M4.59163 4.75754C2.55203 5.11718 1.19015 7.06215 1.54979 9.10175L1.62214 9.51209L9.93329 8.04661C11.4753 6.47536 13.623 5.50052 15.9983 5.50002C15.283 4.03585 13.6626 3.15808 11.9777 3.45518L4.59163 4.75754Z"
					fill="currentColor"
				/>
				<path
					d="M8.60652 9.8037C7.90236 11.0417 7.50017 12.4739 7.50017 14C7.50017 15.552 7.91613 17.0069 8.64264 18.2592L7.02271 18.5449C4.9831 18.9045 3.03814 17.5426 2.6785 15.503L1.88261 10.9893L8.60652 9.8037Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M9.00017 14C9.00017 10.134 12.1342 7.00003 16.0002 7.00003C19.8662 7.00003 23.0002 10.134 23.0002 14C23.0002 17.866 19.8662 21 16.0002 21C12.1342 21 9.00017 17.866 9.00017 14ZM16.0002 11C16.4144 11 16.7502 11.3358 16.7502 11.75V13.6894L18.5305 15.4697C18.8234 15.7626 18.8234 16.2375 18.5305 16.5304C18.2376 16.8233 17.7627 16.8233 17.4698 16.5304L15.4698 14.5304C15.3292 14.3897 15.2502 14.1989 15.2502 14V11.75C15.2502 11.3358 15.586 11 16.0002 11Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.46191 9.95632L3.41698 15.3728C3.70469 17.0044 5.26067 18.094 6.89235 17.8062L10.116 17.2378M2.46191 9.95632L2.28827 8.97151C2.00056 7.33983 3.09006 5.78385 4.72174 5.49614L12.1078 4.19378C13.7395 3.90607 15.2955 4.99558 15.5832 6.62726L15.7568 7.61207L2.46191 9.95632Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16 20.25C19.4518 20.25 22.25 17.4518 22.25 14C22.25 10.5482 19.4518 7.75 16 7.75C12.5482 7.75 9.75 10.5482 9.75 14C9.75 17.4518 12.5482 20.25 16 20.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16 11.75V14L18 16"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalendarClock;
