import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSettingsSliderHor: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="settings-slider-hor">
		{variant === "filled" ? (
			<>
				<path
					d="M9 12.75C10.9534 12.75 12.5778 14.149 12.9287 16H20.25C20.6642 16 21 16.3358 21 16.75C21 17.1642 20.6642 17.5 20.25 17.5H12.9287C12.5778 19.351 10.9534 20.75 9 20.75C7.0466 20.75 5.42223 19.351 5.07129 17.5H3.75C3.33579 17.5 3 17.1642 3 16.75C3 16.3358 3.33579 16 3.75 16H5.07129C5.42223 14.149 7.0466 12.75 9 12.75Z"
					fill="currentColor"
				/>
				<path
					d="M15 3.25C16.9534 3.25 18.5778 4.64901 18.9287 6.5H20.25C20.6642 6.5 21 6.83579 21 7.25C21 7.66421 20.6642 8 20.25 8H18.9287C18.5778 9.85099 16.9534 11.25 15 11.25C13.0466 11.25 11.4222 9.85099 11.0713 8H3.75C3.33579 8 3 7.66421 3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H11.0713C11.4222 4.64901 13.0466 3.25 15 3.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					clipRule="evenodd"
					d="M9 20C10.7956 20 12.25 18.5456 12.25 16.75C12.25 14.9544 10.7956 13.5 9 13.5C7.20438 13.5 5.75 14.9544 5.75 16.75C5.75 18.5456 7.20438 20 9 20Z"
					fillRule="evenodd"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					clipRule="evenodd"
					d="M15 10.5C16.7956 10.5 18.25 9.04562 18.25 7.25C18.25 5.45438 16.7956 4 15 4C13.2044 4 11.75 5.45438 11.75 7.25C11.75 9.04562 13.2044 10.5 15 10.5Z"
					fillRule="evenodd"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M11.5 7.25H3.75"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M5.5 16.75H3.75"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 7.25H18.5"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 16.75H12.5"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSettingsSliderHor;
