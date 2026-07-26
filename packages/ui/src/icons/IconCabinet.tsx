import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCabinet: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cabinet">
		{variant === "filled" ? (
			<>
				<path
					d="M11.25 4H5.75C3.67893 4 2 5.67893 2 7.75V8.25C2 9.77329 2.90826 11.0844 4.21277 11.6715L3.00968 19.1306C2.94373 19.5395 3.22176 19.9245 3.63069 19.9904C4.03962 20.0564 4.42459 19.7784 4.49054 19.3694L5.67927 11.9993C5.70279 11.9998 5.72637 12 5.75 12H11.25V4Z"
					fill="currentColor"
				/>
				<path
					d="M12.75 12H18.25C18.2736 12 18.2972 11.9998 18.3207 11.9993L19.5095 19.3694C19.5754 19.7784 19.9604 20.0564 20.3693 19.9904C20.7782 19.9245 21.0563 19.5395 20.9903 19.1306L19.7872 11.6715C21.0917 11.0844 22 9.77329 22 8.25V7.75C22 5.67893 20.3211 4 18.25 4H12.75V12Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 7.75V8.25C2.75 9.90685 4.09315 11.25 5.75 11.25H18.25C19.9069 11.25 21.25 9.90685 21.25 8.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 5V11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5 11.5L3.75 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19 11.5L20.25 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCabinet;
