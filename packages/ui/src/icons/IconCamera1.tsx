import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCamera1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="camera-1, picture, image, cam">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.98536 4.66987C8.68086 3.62663 9.85173 3 11.1056 3H12.8944C14.1483 3 15.3191 3.62663 16.0146 4.66987L16.2334 4.99808C16.6507 5.62402 17.3533 6 18.1056 6H18.25C20.3211 6 22 7.67893 22 9.75V17.25C22 19.3211 20.3211 21 18.25 21H5.75C3.67893 21 2 19.3211 2 17.25V9.75C2 7.67893 3.67893 6 5.75 6H5.89445C6.64674 6 7.34926 5.62402 7.76656 4.99808L7.98536 4.66987ZM12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 6.75H5.89445C6.89751 6.75 7.8342 6.2487 8.3906 5.4141L8.6094 5.0859C9.1658 4.2513 10.1025 3.75 11.1056 3.75H12.8944C13.8975 3.75 14.8342 4.2513 15.3906 5.0859L15.6094 5.4141C16.1658 6.2487 17.1025 6.75 18.1056 6.75H18.25C19.9069 6.75 21.25 8.09315 21.25 9.75V17.25C21.25 18.9069 19.9069 20.25 18.25 20.25H5.75C4.09315 20.25 2.75 18.9069 2.75 17.25V9.75C2.75 8.09315 4.09315 6.75 5.75 6.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 13C15.25 14.7949 13.7949 16.25 12 16.25C10.2051 16.25 8.75 14.7949 8.75 13C8.75 11.2051 10.2051 9.75 12 9.75C13.7949 9.75 15.25 11.2051 15.25 13Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCamera1;
