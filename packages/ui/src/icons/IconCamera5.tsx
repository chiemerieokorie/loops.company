import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCamera5: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="camera-5, action cam, GoPro">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.5095 4C11.8799 4.74122 11.5 5.70125 11.5 6.75V10.2526C11.5 12.5999 13.4028 14.5026 15.75 14.5026H19.25C20.2988 14.5026 21.2588 14.1228 22 13.4931V17.25C22 19.3211 20.3211 21 18.25 21H5.75C3.67893 21 2 19.3211 2 17.25V7.75C2 5.67893 3.67893 4 5.75 4H12.5095ZM5 17.25C5 16.8358 5.33579 16.5 5.75 16.5H8.25C8.66421 16.5 9 16.8358 9 17.25C9 17.6642 8.66421 18 8.25 18H5.75C5.33579 18 5 17.6642 5 17.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M15.75 4C14.2312 4 13 5.23122 13 6.75V10.2526C13 11.7714 14.2312 13.0026 15.75 13.0026H19.25C20.7688 13.0026 22 11.7714 22 10.2526V6.75C22 5.23122 20.7688 4 19.25 4H15.75ZM16.5 8.5C16.5 9.05228 16.9477 9.5 17.5 9.5C18.0523 9.5 18.5 9.05228 18.5 8.5C18.5 7.94772 18.0523 7.5 17.5 7.5C16.9477 7.5 16.5 7.94772 16.5 8.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 16.25H9.25M9.75 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25V16.25M14.75 13.253H19.25C20.3546 13.253 21.25 12.3576 21.25 11.253V6.75C21.25 5.64543 20.3546 4.75 19.25 4.75H14.75C13.6454 4.75 12.75 5.64543 12.75 6.75V11.253C12.75 12.3576 13.6454 13.253 14.75 13.253Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17 9V8.99M17.25 9C17.25 9.13807 17.1381 9.25 17 9.25C16.8619 9.25 16.75 9.13807 16.75 9C16.75 8.86193 16.8619 8.75 17 8.75C17.1381 8.75 17.25 8.86193 17.25 9Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCamera5;
