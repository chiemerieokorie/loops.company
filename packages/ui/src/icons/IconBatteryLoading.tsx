import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBatteryLoading: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="battery-loading, power">
		{variant === "filled" ? (
			<>
				<path
					d="M4.75 5H11.8125L6.9 11.55C6.72955 11.7773 6.70214 12.0813 6.82918 12.3354C6.95622 12.5895 7.21592 12.75 7.5 12.75H12L7.3125 19H4.75C2.67893 19 1 17.3211 1 15.25V8.75C1 6.67893 2.67893 5 4.75 5Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M16.25 19H9.1875L14.1 12.45C14.2704 12.2227 14.2979 11.9187 14.1708 11.6646C14.0438 11.4105 13.7841 11.25 13.5 11.25H9L13.6875 5H16.25C18.0642 5 19.5775 6.28832 19.925 8H20.75C21.9926 8 23 9.00736 23 10.25V13.75C23 14.9926 21.9926 16 20.75 16H19.925C19.5775 17.7117 18.0642 19 16.25 19ZM20 14.5H20.75C21.1642 14.5 21.5 14.1642 21.5 13.75V10.25C21.5 9.83579 21.1642 9.5 20.75 9.5H20V14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 5.75H4.75C3.09315 5.75 1.75 7.09315 1.75 8.75V15.25C1.75 16.9069 3.09315 18.25 4.75 18.25H5.25M15.75 5.75H16.25C17.9069 5.75 19.25 7.09315 19.25 8.75M19.25 8.75V15.25M19.25 8.75H20.75C21.5784 8.75 22.25 9.42157 22.25 10.25V13.75C22.25 14.5784 21.5784 15.25 20.75 15.25H19.25M19.25 15.25C19.25 16.9069 17.9069 18.25 16.25 18.25H13.25M12.25 5.75L7.5 12H13.5L8.75 18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBatteryLoading;
