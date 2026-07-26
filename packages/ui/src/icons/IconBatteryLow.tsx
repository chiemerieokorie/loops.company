import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBatteryLow: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="battery-low, power">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4.75 5C2.67893 5 1 6.67893 1 8.75V15.25C1 17.3211 2.67893 19 4.75 19H16.25C18.0642 19 19.5775 17.7117 19.925 16H20.75C21.9926 16 23 14.9926 23 13.75V10.25C23 9.00736 21.9926 8 20.75 8H19.925C19.5775 6.28832 18.0642 5 16.25 5H4.75ZM20 9.5V14.5H20.75C21.1642 14.5 21.5 14.1642 21.5 13.75V10.25C21.5 9.83579 21.1642 9.5 20.75 9.5H20ZM6 9C6.41421 9 6.75 9.33579 6.75 9.75V14.25C6.75 14.6642 6.41421 15 6 15C5.58579 15 5.25 14.6642 5.25 14.25V9.75C5.25 9.33579 5.58579 9 6 9Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 15.25V8.75M19.25 15.25C19.25 16.9069 17.9069 18.25 16.25 18.25H4.75C3.09315 18.25 1.75 16.9069 1.75 15.25V8.75C1.75 7.09315 3.09315 5.75 4.75 5.75H16.25C17.9069 5.75 19.25 7.09315 19.25 8.75M19.25 15.25H20.75C21.5784 15.25 22.25 14.5784 22.25 13.75V10.25C22.25 9.42157 21.5784 8.75 20.75 8.75H19.25M6 9.75V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBatteryLow;
