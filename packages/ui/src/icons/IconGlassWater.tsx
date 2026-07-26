import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGlassWater: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="glass-water, drink">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M19.2539 3C19.4691 3 19.674 3.09255 19.8164 3.25391C19.9587 3.41526 20.0248 3.63029 19.998 3.84375L18.2558 17.7168C18.0204 19.5925 16.4256 21 14.5351 21H9.47264C7.58219 21 5.98742 19.5925 5.75194 17.7168L4.00975 3.84375C3.98295 3.63028 4.04909 3.41526 4.19139 3.25391C4.33377 3.09255 4.5387 3 4.75389 3H19.2539ZM6.10741 8.5127C8.21073 7.96341 10.2786 8.39116 12.1474 8.76465C14.2068 9.17622 16.0404 9.52562 17.8457 8.93945L18.4043 4.5H5.6035L6.10741 8.5127Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.2539 3.75H4.75391L6.49562 17.6237C6.68401 19.1243 7.9599 20.25 9.47226 20.25H14.5356C16.0479 20.25 17.3238 19.1243 17.5122 17.6237L19.2539 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.5 9.49999C9.83333 7.76796 14.1667 11.2321 18.5 9.49999"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGlassWater;
