import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconApps: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="apps, skills, circles">
		{variant === "filled" ? (
			<>
				<path
					d="M6.75 13.5C8.82107 13.5 10.5 15.1789 10.5 17.25C10.5 19.3211 8.82107 21 6.75 21C4.67893 21 3 19.3211 3 17.25C3 15.1789 4.67893 13.5 6.75 13.5Z"
					fill="currentColor"
				/>
				<path
					d="M17.25 13.5C19.3211 13.5 21 15.1789 21 17.25C21 19.3211 19.3211 21 17.25 21C15.1789 21 13.5 19.3211 13.5 17.25C13.5 15.1789 15.1789 13.5 17.25 13.5Z"
					fill="currentColor"
				/>
				<path
					d="M6.75 3C8.82107 3 10.5 4.67893 10.5 6.75C10.5 8.82107 8.82107 10.5 6.75 10.5C4.67893 10.5 3 8.82107 3 6.75C3 4.67893 4.67893 3 6.75 3Z"
					fill="currentColor"
				/>
				<path
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75C21 8.82107 19.3211 10.5 17.25 10.5C15.1789 10.5 13.5 8.82107 13.5 6.75C13.5 4.67893 15.1789 3 17.25 3Z"
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
			</>
		)}
	</CentralIconBase>
);

export default IconApps;
