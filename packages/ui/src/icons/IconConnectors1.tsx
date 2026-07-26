import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconConnectors1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="connectors-1, connection, apps">
		{variant === "filled" ? (
			<>
				<path
					d="M17 3C19.2091 3 21 4.79086 21 7C21 9.20914 19.2091 11 17 11C16.1663 11 15.3928 10.744 14.752 10.3076L10.3076 14.752C10.744 15.3928 11 16.1663 11 17C11 19.2091 9.20914 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13C7.83325 13 8.60649 13.2555 9.24707 13.6914L13.6914 9.24707C13.2555 8.60649 13 7.83325 13 7C13 4.79086 14.7909 3 17 3Z"
					fill="currentColor"
				/>
				<path
					d="M17 13C19.2091 13 21 14.7909 21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13Z"
					fill="currentColor"
				/>
				<path
					d="M7 3C9.20914 3 11 4.79086 11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 7C3.75 8.79493 5.20507 10.25 7 10.25C8.79493 10.25 10.25 8.79493 10.25 7C10.25 5.20507 8.79493 3.75 7 3.75C5.20507 3.75 3.75 5.20507 3.75 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 17C3.75 18.7949 5.20507 20.25 7 20.25C8.79493 20.25 10.25 18.7949 10.25 17C10.25 15.2051 8.79493 13.75 7 13.75C5.20507 13.75 3.75 15.2051 3.75 17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 7C13.75 8.79493 15.2051 10.25 17 10.25C18.7949 10.25 20.25 8.79493 20.25 7C20.25 5.20507 18.7949 3.75 17 3.75C15.2051 3.75 13.75 5.20507 13.75 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 17C13.75 18.7949 15.2051 20.25 17 20.25C18.7949 20.25 20.25 18.7949 20.25 17C20.25 15.2051 18.7949 13.75 17 13.75C15.2051 13.75 13.75 15.2051 13.75 17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.5 14.5L14.5 9.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconConnectors1;
