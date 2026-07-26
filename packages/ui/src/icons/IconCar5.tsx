import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar5: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-5">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2.6049 7.15754C2.89598 5.33831 4.46545 4 6.30781 4H13.1332C15.0102 4 16.8024 4.78153 18.0796 6.15695L21.196 9.51309C22.3553 10.7616 22.9996 12.4024 22.9996 14.1061V15.25C22.9996 16.7688 21.7684 18 20.2496 18H20.1629C19.6012 19.1825 18.396 20 16.9998 20C15.6036 20 14.3983 19.1825 13.8366 18H10.1629C9.60121 19.1825 8.39596 20 6.99976 20C5.59126 20 4.37709 19.168 3.82188 17.9687C2.26526 17.7383 1.14691 16.27 1.40404 14.6629L2.6049 7.15754ZM6.99976 14.5C5.89519 14.5 4.99976 15.3954 4.99976 16.5C4.99976 17.6046 5.89519 18.5 6.99976 18.5C8.10433 18.5 8.99976 17.6046 8.99976 16.5C8.99976 15.3954 8.10433 14.5 6.99976 14.5ZM16.9998 14.5C15.8952 14.5 14.9998 15.3954 14.9998 16.5C14.9998 17.6046 15.8952 18.5 16.9998 18.5C18.1043 18.5 18.9998 17.6046 18.9998 16.5C18.9998 15.3954 18.1043 14.5 16.9998 14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.7495 17.25H20.2495C21.354 17.25 22.2495 16.3546 22.2495 15.25V14.1061C22.2495 12.5917 21.6768 11.1332 20.6462 10.0234L17.5298 6.66729C16.3945 5.44469 14.8015 4.75 13.1331 4.75H6.30763C4.83375 4.75 3.57817 5.82065 3.34531 7.27603L2.14445 14.7814C1.93721 16.0766 2.93776 17.25 4.24948 17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.5 17.25H14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10 17.25H14"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="7"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="17"
					cy="16.75"
					r="2.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCar5;
