import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBed: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bed">
		{variant === "filled" ? (
			<>
				<path
					d="M4 7.75C4 5.67893 5.67893 4 7.75 4H11.25V9.5H4V7.75Z"
					fill="currentColor"
				/>
				<path
					d="M12.75 9.5V4H16.25C18.3211 4 20 5.67893 20 7.75V9.5H12.75Z"
					fill="currentColor"
				/>
				<path
					d="M22 14.75C22 12.6789 20.3211 11 18.25 11H5.75C3.67893 11 2 12.6789 2 14.75V16.25C2 17.2165 2.7835 18 3.75 18H4V19.25C4 19.6642 4.33579 20 4.75 20C5.16421 20 5.5 19.6642 5.5 19.25V18H18.5V19.25C18.5 19.6642 18.8358 20 19.25 20C19.6642 20 20 19.6642 20 19.25V18H20.25C21.2165 18 22 17.2165 22 16.25V14.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 13.75C2.75 12.0931 4.09315 10.75 5.75 10.75H18.25C19.9069 10.75 21.25 12.0931 21.25 13.75V16.25C21.25 16.8023 20.8023 17.25 20.25 17.25H3.75C3.19772 17.25 2.75 16.8023 2.75 16.25V13.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 10.5V7.75C19.25 6.09315 17.9069 4.75 16.25 4.75H7.75C6.09315 4.75 4.75 6.09315 4.75 7.75V10.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 4.75V10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 17.25V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 17.25V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBed;
