import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPlugin2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="plugin-2, build">
		{variant === "filled" ? (
			<>
				<path
					d="M4 5.75C4 4.23122 5.23122 3 6.75 3H8.25C9.76878 3 11 4.23122 11 5.75V7H4V5.75Z"
					fill="currentColor"
				/>
				<path
					d="M13 5.75C13 4.23122 14.2312 3 15.75 3H17.25C18.7688 3 20 4.23122 20 5.75V7H13V5.75Z"
					fill="currentColor"
				/>
				<path
					d="M2 12.25C2 10.1789 3.67893 8.5 5.75 8.5H18.25C20.3211 8.5 22 10.1789 22 12.25V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V12.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 10.75C2.75 9.09315 4.09315 7.75 5.75 7.75H18.25C19.9069 7.75 21.25 9.09315 21.25 10.75V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V10.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 7.5V5.75C4.75 4.64543 5.64543 3.75 6.75 3.75H8.25C9.35457 3.75 10.25 4.64543 10.25 5.75V7.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 7.5V5.75C13.75 4.64543 14.6454 3.75 15.75 3.75H17.25C18.3546 3.75 19.25 4.64543 19.25 5.75V7.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPlugin2;
