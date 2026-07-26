import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBank: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bank">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M22 7.9641C22 9.0765 21.1078 9.98052 20 9.99967V16.9385C20.7248 17.3459 21.2951 18.0135 21.5707 18.8402C21.9248 19.9027 21.134 21 20.014 21H3.986C2.86602 21 2.07518 19.9027 2.42934 18.8402C2.70493 18.0135 3.27518 17.3459 4 16.9385V9.99967C2.89217 9.98052 2 9.0765 2 7.9641C2 7.196 2.43229 6.49329 3.11786 6.14694L10.309 2.51397C11.3724 1.97679 12.6276 1.97679 13.691 2.51397L20.8821 6.14694C21.5677 6.49329 22 7.196 22 7.9641ZM16 9.99998H18.5V16.5045C18.4415 16.5015 18.3828 16.5 18.3237 16.5H16V9.99998ZM14.5 16.5H9.5V9.99998H14.5V16.5ZM8 16.5V9.99998H5.5V16.5045C5.55847 16.5015 5.61724 16.5 5.67628 16.5H8Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M13.3528 3.18339C12.5021 2.75365 11.4979 2.75365 10.6472 3.18339L3.45605 6.81636C3.02304 7.03512 2.75 7.47896 2.75 7.9641C2.75 8.67427 3.32571 9.24998 4.03588 9.24998H19.9641C20.6743 9.24998 21.25 8.67427 21.25 7.9641C21.25 7.47896 20.977 7.03512 20.5439 6.81636L13.3528 3.18339Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.8594 19.0774C21.0517 19.6543 20.6223 20.25 20.0143 20.25H3.98627C3.37821 20.25 2.94884 19.6543 3.14113 19.0774C3.5049 17.9861 4.52619 17.25 5.67655 17.25H18.324C19.4743 17.25 20.4956 17.9861 20.8594 19.0774Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 9.25V17.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 17.25V9.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 9.25V17.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 17.25V9.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBank;
