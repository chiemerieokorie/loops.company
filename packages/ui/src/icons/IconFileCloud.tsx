import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileCloud: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="file-cloud, document">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2H7.75C5.67893 2 4 3.67893 4 5.75V13.2987C4.54736 13.1053 5.13639 13 5.75 13C7.24413 13 8.59077 13.6248 9.54442 14.6221C11.5266 15.0935 13 16.874 13 19C13 20.1525 12.5667 21.2039 11.8542 22H16.25C18.3211 22 20 20.3211 20 18.25V10H14.75C13.2312 10 12 8.76878 12 7.25V2Z"
					fill="currentColor"
				/>
				<path
					d="M19.5566 8.5C19.5343 8.475 19.5112 8.45058 19.4874 8.42678L13.5732 2.51256C13.5494 2.48876 13.525 2.46571 13.5 2.44343V7.25C13.5 7.94036 14.0596 8.5 14.75 8.5H19.5566Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M5.75 14.5C3.67893 14.5 2 16.1789 2 18.25C2 20.3211 3.67893 22 5.75 22H8.5C10.1569 22 11.5 20.6569 11.5 19C11.5 17.4301 10.2941 16.1419 8.75815 16.011C8.07569 15.0953 6.98332 14.5 5.75 14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 18.25C2.75 19.9069 4.09315 21.25 5.75 21.25H8.5C9.74264 21.25 10.75 20.2426 10.75 19C10.75 17.7574 9.74264 16.75 8.5 16.75C8.45006 16.75 8.40044 16.7516 8.35122 16.7549C7.83343 15.8558 6.86311 15.25 5.75 15.25C4.09315 15.25 2.75 16.5931 2.75 18.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 12.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H11.9216C12.452 2.75 12.9607 2.96071 13.3358 3.33579L18.6642 8.66421C19.0393 9.03929 19.25 9.54799 19.25 10.0784V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 3.25V7.25C12.75 8.35457 13.6454 9.25 14.75 9.25H18.75"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileCloud;
