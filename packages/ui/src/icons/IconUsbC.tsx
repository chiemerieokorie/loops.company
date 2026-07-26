import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUsbC: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="usb-c, type-c">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M0 12C0 8.68629 2.68629 6 6 6H18C21.3137 6 24 8.68629 24 12C24 15.3137 21.3137 18 18 18H6C2.68629 18 0 15.3137 0 12ZM5.75 11.25C5.33579 11.25 5 11.5858 5 12C5 12.4142 5.33579 12.75 5.75 12.75H18.25C18.6642 12.75 19 12.4142 19 12C19 11.5858 18.6642 11.25 18.25 11.25H5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 12H18.25M6 17.25H18C20.8995 17.25 23.25 14.8995 23.25 12C23.25 9.10051 20.8995 6.75 18 6.75H6C3.10051 6.75 0.75 9.10051 0.75 12C0.75 14.8995 3.10051 17.25 6 17.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUsbC;
