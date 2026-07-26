import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPlanning: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="planning, list, checklist">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.19643 4.64738C9.52927 4.89393 9.59923 5.36362 9.35267 5.69647L6.01934 10.1965C5.89356 10.3663 5.70197 10.4751 5.49171 10.4963C5.28145 10.5174 5.07203 10.4489 4.91495 10.3075L3.24828 8.80752C2.9404 8.53042 2.91544 8.05621 3.19254 7.74832C3.46963 7.44044 3.94385 7.41548 4.25173 7.69258L5.30512 8.64063L8.14734 4.80363C8.39389 4.47078 8.86358 4.40083 9.19643 4.64738ZM11 7.75005C11 7.33583 11.3358 7.00005 11.75 7.00005H20.25C20.6642 7.00005 21 7.33583 21 7.75005C21 8.16426 20.6642 8.50005 20.25 8.50005H11.75C11.3358 8.50005 11 8.16426 11 7.75005ZM3.00001 16.25C3.00001 14.7312 4.23123 13.5 5.75001 13.5C7.26878 13.5 8.50001 14.7312 8.50001 16.25C8.50001 17.7689 7.26878 19 5.75001 19C4.23123 19 3.00001 17.7689 3.00001 16.25ZM11 16.25C11 15.8358 11.3358 15.5 11.75 15.5H20.25C20.6642 15.5 21 15.8358 21 16.25C21 16.6643 20.6642 17 20.25 17H11.75C11.3358 17 11 16.6643 11 16.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M11.75 7.75H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 18.25C6.85457 18.25 7.75 17.3546 7.75 16.25C7.75 15.1454 6.85457 14.25 5.75 14.25C4.64543 14.25 3.75 15.1454 3.75 16.25C3.75 17.3546 4.64543 18.25 5.75 18.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 16.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 8.25L5.41667 9.75L8.75 5.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPlanning;
