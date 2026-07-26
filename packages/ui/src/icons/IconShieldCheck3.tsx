import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconShieldCheck3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="shield-check-3, check">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.5354 2.05661C11.4714 1.65952 12.5286 1.65952 13.4646 2.05661L18.7146 4.28388C20.1001 4.8717 21 6.23096 21 7.73606V13C21 17.9705 16.9706 22 12 22C7.02944 22 3 17.9705 3 13V7.73606C3 6.23096 3.89987 4.8717 5.28544 4.28388L10.5354 2.05661ZM15.7702 9.20974C16.0686 9.49706 16.0776 9.97184 15.7902 10.2702L11.4569 14.7702C11.3155 14.917 11.1205 15 10.9167 15C10.7128 15 10.5178 14.917 10.3764 14.7702L8.20976 12.5202C7.92244 12.2218 7.9314 11.7471 8.22977 11.4597C8.52814 11.1724 9.00292 11.1814 9.29024 11.4797L10.9167 13.1687L14.7098 9.22975C14.9971 8.93138 15.4719 8.92242 15.7702 9.20974Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 12L10.9167 14.25L15.25 9.75M3.75 13V7.73608C3.75 6.532 4.4699 5.44459 5.57835 4.97434L10.8284 2.74706C11.5772 2.42939 12.4228 2.42939 13.1716 2.74706L18.4216 4.97434C19.5301 5.44459 20.25 6.532 20.25 7.73608V13C20.25 17.5563 16.5563 21.25 12 21.25C7.44365 21.25 3.75 17.5563 3.75 13Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconShieldCheck3;
