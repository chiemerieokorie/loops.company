import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCamera3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="camera-3, picture, image, cam">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 3C3.67893 3 2 4.67893 2 6.75V17.25C2 19.3211 3.67893 21 5.75 21H18.25C20.3211 21 22 19.3211 22 17.25V6.75C22 4.67893 20.3211 3 18.25 3H5.75ZM16.5 7.5C16.5 8.05228 16.9477 8.5 17.5 8.5C18.0523 8.5 18.5 8.05228 18.5 7.5C18.5 6.94772 18.0523 6.5 17.5 6.5C16.9477 6.5 16.5 6.94772 16.5 7.5ZM8.375 12C8.375 9.99797 9.99797 8.375 12 8.375C14.002 8.375 15.625 9.99797 15.625 12C15.625 14.002 14.002 15.625 12 15.625C9.99797 15.625 8.375 14.002 8.375 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 6.75C2.75 5.09315 4.09315 3.75 5.75 3.75H18.25C19.9069 3.75 21.25 5.09315 21.25 6.75V17.25C21.25 18.9069 19.9069 20.25 18.25 20.25H5.75C4.09315 20.25 2.75 18.9069 2.75 17.25V6.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.5 7.5V7.49M17.75 7.5C17.75 7.63807 17.6381 7.75 17.5 7.75C17.3619 7.75 17.25 7.63807 17.25 7.5C17.25 7.36193 17.3619 7.25 17.5 7.25C17.6381 7.25 17.75 7.36193 17.75 7.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCamera3;
