import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMergedSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="merged-simple">
		{variant === "filled" ? (
			<>
				<path
					d="M6 2.25C8.07107 2.25 9.75 3.92893 9.75 6C9.75 7.80379 8.47626 9.30921 6.7793 9.66797C7.10174 13.6911 10.3081 16.8968 14.3311 17.2197C14.6901 15.5231 16.1965 14.25 18 14.25C20.0711 14.25 21.75 15.9289 21.75 18C21.75 20.0711 20.0711 21.75 18 21.75C16.1765 21.75 14.6575 20.4484 14.3203 18.7236C11.1295 18.5038 8.36301 16.7504 6.75 14.1934V20.5C6.75 20.9142 6.41421 21.25 6 21.25C5.58579 21.25 5.25 20.9142 5.25 20.5V9.6748C3.53834 9.32734 2.25 7.81421 2.25 6C2.25 3.92893 3.92893 2.25 6 2.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 20.5V9"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 9C6 13.9706 10.0294 18 15 18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMergedSimple;
