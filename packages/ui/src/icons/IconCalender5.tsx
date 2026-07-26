import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCalender5: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="calender-5,date">
		{variant === "filled" ? (
			<>
				<path
					d="M15.5 3H8.5V4.25C8.5 4.66421 8.16421 5 7.75 5C7.33579 5 7 4.66421 7 4.25V3H6.75C4.67893 3 3 4.67893 3 6.75V7.5H21V6.75C21 4.67893 19.3211 3 17.25 3H17V4.25C17 4.66421 16.6642 5 16.25 5C15.8358 5 15.5 4.66421 15.5 4.25V3Z"
					fill="currentColor"
				/>
				<path
					d="M21 9H3V17.25C3 19.3211 4.67893 21 6.75 21H17.25C19.3211 21 21 19.3211 21 17.25V9Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 20.25H5.75C4.64543 20.25 3.75 19.3546 3.75 18.25V8.25V5.75C3.75 4.64543 4.64543 3.75 5.75 3.75H7.75H16.25H18.25C19.3546 3.75 20.25 4.64543 20.25 5.75V8.25V18.25C20.25 19.3546 19.3546 20.25 18.25 20.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 8.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 3.75V5.29688"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 3.75V5.29688"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCalender5;
