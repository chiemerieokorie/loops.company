import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCar5Ev: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="car-5-ev">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.30781 4C4.46545 4 2.89598 5.33831 2.6049 7.15754L1.40404 14.6629C1.14691 16.27 2.26526 17.7383 3.82188 17.9687C4.37709 19.168 5.59126 20 6.99976 20C8.39596 20 9.60121 19.1825 10.1629 18H13.8366C14.3983 19.1825 15.6036 20 16.9998 20C18.396 20 19.6012 19.1825 20.1629 18H20.2496C21.7684 18 22.9996 16.7688 22.9996 15.25V14.1061C22.9996 12.4024 22.3553 10.7616 21.196 9.51309L18.0796 6.15695C16.8024 4.78153 15.0102 4 13.1332 4H6.30781ZM4.99976 16.5C4.99976 15.3954 5.89519 14.5 6.99976 14.5C8.10433 14.5 8.99976 15.3954 8.99976 16.5C8.99976 17.6046 8.10433 18.5 6.99976 18.5C5.89519 18.5 4.99976 17.6046 4.99976 16.5ZM14.9998 16.5C14.9998 15.3954 15.8952 14.5 16.9998 14.5C18.1043 14.5 18.9998 15.3954 18.9998 16.5C18.9998 17.6046 18.1043 18.5 16.9998 18.5C15.8952 18.5 14.9998 17.6046 14.9998 16.5ZM11.9166 9.99984H13.9932C14.2004 9.99984 14.3177 10.2375 14.1916 10.4019L11.2429 14.2481C11.0867 14.4519 10.7615 14.3159 10.7969 14.0616L11.0832 11.9998H9.00656C8.79933 11.9998 8.68207 11.7622 8.80816 11.5977L11.7569 7.75157C11.9131 7.5478 12.2382 7.68374 12.2029 7.93808L11.9166 9.99984Z"
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
				<path
					d="M13.9949 9.99935H11.9183L12.2046 7.93759C12.24 7.68326 11.9148 7.54731 11.7586 7.75109L8.80987 11.5972C8.68378 11.7617 8.80104 11.9994 9.00827 11.9994H11.0849L10.7986 14.0611C10.7633 14.3155 11.0884 14.4514 11.2446 14.2476L14.1933 10.4015C14.3194 10.237 14.2022 9.99935 13.9949 9.99935Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCar5Ev;
