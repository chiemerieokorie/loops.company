import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTrendingCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="trending-circle">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 9.75C12 9.33579 12.3358 9 12.75 9H16.25C16.6642 9 17 9.33579 17 9.75V13.25C17 13.6642 16.6642 14 16.25 14C15.8358 14 15.5 13.6642 15.5 13.25V11.5607L13.5303 13.5303C12.6852 14.3755 11.3148 14.3755 10.4697 13.5303C10.2103 13.2709 9.78972 13.2709 9.53033 13.5303L8.03033 15.0303C7.73744 15.3232 7.26256 15.3232 6.96967 15.0303C6.67678 14.7374 6.67678 14.2626 6.96967 13.9697L8.46967 12.4697C9.31485 11.6245 10.6852 11.6245 11.5303 12.4697C11.7897 12.7291 12.2103 12.7291 12.4697 12.4697L14.4393 10.5H12.75C12.3358 10.5 12 10.1642 12 9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 14.5L9 13C9.55229 12.4477 10.4477 12.4477 11 13C11.5523 13.5523 12.4477 13.5523 13 13L15.5 10.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 9.75H16.25V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTrendingCircle;
