import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBecepsRightArm: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="beceps-right-arm, strong, flex, power">
		{variant === "filled" ? (
			<>
				<path
					d="M10.8309 2C14.4999 2 14.0005 7.99944 10.0009 7C7.50096 10.9999 9.36809 12 7.99989 15C9.33034 13.8596 10.801 13.0201 12.327 13.0312C15.0008 8.00025 22.0025 9.67814 21.9999 14.9502C21.9998 23.7105 7.40913 23.1583 2.33192 19.4707C0.678051 10.0703 5.46973 2.00035 10.8309 2Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12.2423 12.9407C15.0833 7.88889 21.2524 9.87955 21.25 14.775C21.25 18.351 17.4933 21.25 12.7973 21.25C8.96826 21.25 5.14013 20.4915 3.05702 18.9726C1.52717 10.2436 5.95975 2.75 10.9189 2.75C15.6154 2.75 13.1293 8.90913 9.68369 6.9125"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.6514 13.7572C12.4773 12.4622 10.6191 12.7335 8.77734 14.3122C9.70234 11.5372 8.31484 11.5372 10.6969 7.60596"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBecepsRightArm;
