import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUserDuo: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="user-duo, team, members, persons">
		{variant === "filled" ? (
			<>
				<path
					d="M12.0731 12.3086C13.571 13.3822 14.3109 14.7503 14.6711 16.273C15.148 18.2884 13.3219 20 11.2508 20H4.75084C2.67977 20 0.853693 18.2884 1.33037 16.273C1.69048 14.7503 2.43012 13.3822 3.9276 12.3086C4.96872 13.3534 6.4093 14 8.00084 14C9.59214 14 11.032 13.3532 12.0731 12.3086Z"
					fill="currentColor"
				/>
				<path
					d="M21.4022 12.626C22.1878 13.417 22.5907 14.3114 22.796 15.2633C23.2327 17.2878 21.3219 19 19.2508 19H16.5008V18C16.5008 16.5965 16.1588 15.2734 15.5565 14.1074C16.1542 14.36 16.8111 14.5 17.5008 14.5C19.0791 14.5 20.4859 13.7682 21.4022 12.626Z"
					fill="currentColor"
				/>
				<path
					d="M17.5008 6C19.4338 6 21.0008 7.567 21.0008 9.5C21.0008 11.433 19.4338 13 17.5008 13C15.5678 13 14.0008 11.433 14.0008 9.5C14.0008 7.567 15.5678 6 17.5008 6Z"
					fill="currentColor"
				/>
				<path
					d="M8.00084 4C10.3481 4 12.2508 5.90279 12.2508 8.25C12.2508 10.5972 10.3481 12.5 8.00084 12.5C5.65363 12.5 3.75084 10.5972 3.75084 8.25C3.75084 5.90279 5.65363 4 8.00084 4Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 19.25C3.09315 19.25 1.67671 17.8733 2.16196 16.2891C2.86531 13.9928 4.51906 12.25 7.5 12.25C10.4809 12.25 12.1347 13.9928 12.838 16.2891C13.3233 17.8733 11.9069 19.25 10.25 19.25H4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 18.25H19.25C20.9069 18.25 22.3599 16.8654 21.852 15.2884C21.249 13.4161 19.9142 12.25 17.5357 12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="7.5"
					cy="8.5"
					r="3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="17.5"
					cy="9.5"
					r="2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUserDuo;
