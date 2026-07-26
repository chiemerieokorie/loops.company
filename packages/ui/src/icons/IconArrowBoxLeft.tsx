import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowBoxLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-box-left, logout, leave, door">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303L16.2803 17.0303C15.9874 17.3232 15.5126 17.3232 15.2197 17.0303C14.9268 16.7374 14.9268 16.2626 15.2197 15.9697L18.4393 12.75L9 12.75C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25L18.4393 11.25L15.2197 8.03033C14.9268 7.73744 14.9268 7.26256 15.2197 6.96967C15.5126 6.67678 15.9874 6.67678 16.2803 6.96967L20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M12 3.75C12 4.16421 11.6642 4.5 11.25 4.5L6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75L4.5 17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H11.25C11.6642 19.5 12 19.8358 12 20.25C12 20.6642 11.6642 21 11.25 21H6.75C4.67893 21 3 19.3211 3 17.25L3 6.75C3 4.67893 4.67893 3 6.75 3L11.25 3C11.6642 3 12 3.33579 12 3.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 12L9 12M20.25 12L15.75 16.5M20.25 12L15.75 7.5M11.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25L3.75 6.75C3.75 5.09315 5.09315 3.75 6.75 3.75L11.25 3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowBoxLeft;
