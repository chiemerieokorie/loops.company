import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileLock: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="file-lock, document">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75 2H12V7.25C12 8.76878 13.2312 10 14.75 10H20V18.25C20 20.3211 18.3211 22 16.25 22H11.9891C12.3125 21.4949 12.5 20.8943 12.5 20.25V17.75C12.5 16.6806 11.9841 15.7337 11.1888 15.1418C10.8401 13.0746 9.04142 11.5 6.875 11.5C5.77448 11.5 4.76886 11.9063 4 12.5772V5.75C4 3.67893 5.67893 2 7.75 2Z"
					fill="currentColor"
				/>
				<path
					d="M19.4874 8.42678C19.5112 8.45058 19.5343 8.475 19.5566 8.5H14.75C14.0596 8.5 13.5 7.94036 13.5 7.25V2.44343C13.525 2.46571 13.5494 2.48876 13.5732 2.51256L19.4874 8.42678Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M10 16.1684V16C10 14.3431 8.65685 13 7 13C5.34315 13 4 14.3431 4 16V16.1684C3.40876 16.4493 3 17.0519 3 17.75V20.25C3 21.2165 3.7835 22 4.75 22H9.25C10.2165 22 11 21.2165 11 20.25V17.75C11 17.0519 10.5912 16.4493 10 16.1684ZM5.5 16H8.5C8.5 15.1716 7.82843 14.5 7 14.5C6.17157 14.5 5.5 15.1716 5.5 16Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 17.75C3.75 17.1977 4.19772 16.75 4.75 16.75H9.25C9.80228 16.75 10.25 17.1977 10.25 17.75V20.25C10.25 20.8023 9.80228 21.25 9.25 21.25H4.75C4.19772 21.25 3.75 20.8023 3.75 20.25V17.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 16C4.75 14.7574 5.75736 13.75 7 13.75C8.24264 13.75 9.25 14.7574 9.25 16C9.25 16.4142 8.91421 16.75 8.5 16.75H5.5C5.08579 16.75 4.75 16.4142 4.75 16Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 10.75V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H11.9216C12.452 2.75 12.9607 2.96071 13.3358 3.33579L18.6642 8.66421C19.0393 9.03929 19.25 9.54799 19.25 10.0784V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 3.25V7.25C12.75 8.35457 13.6454 9.25 14.75 9.25H18.75"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileLock;
