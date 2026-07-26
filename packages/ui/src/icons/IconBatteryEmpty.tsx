import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBatteryEmpty: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="battery-empty, power">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 8.75C1 6.67893 2.67893 5 4.75 5H16.25C18.0642 5 19.5775 6.28832 19.925 8H20.75C21.9926 8 23 9.00736 23 10.25V13.75C23 14.9926 21.9926 16 20.75 16H19.925C19.5775 17.7117 18.0642 19 16.25 19H4.75C2.67893 19 1 17.3211 1 15.25V8.75ZM20 14.5H20.75C21.1642 14.5 21.5 14.1642 21.5 13.75V10.25C21.5 9.83579 21.1642 9.5 20.75 9.5H20V14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 15.25V8.75M19.25 15.25C19.25 16.9069 17.9069 18.25 16.25 18.25H4.75C3.09315 18.25 1.75 16.9069 1.75 15.25V8.75C1.75 7.09315 3.09315 5.75 4.75 5.75H16.25C17.9069 5.75 19.25 7.09315 19.25 8.75M19.25 15.25H20.75C21.5784 15.25 22.25 14.5784 22.25 13.75V10.25C22.25 9.42157 21.5784 8.75 20.75 8.75H19.25"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBatteryEmpty;
