import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFileLink: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="file-link, hyperlink">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2H7.75C5.67893 2 4 3.67893 4 5.75V9.87494C4.61986 9.63286 5.29442 9.5 6 9.5C9.03757 9.5 11.5 11.9624 11.5 15V18C11.5 19.576 10.8371 20.9972 9.77494 22H16.25C18.3211 22 20 20.3211 20 18.25V10H14.75C13.2312 10 12 8.76878 12 7.25V2Z"
					fill="currentColor"
				/>
				<path
					d="M19.5566 8.5C19.5343 8.475 19.5112 8.45058 19.4874 8.42678L13.5732 2.51256C13.5494 2.48876 13.525 2.46571 13.5 2.44343V7.25C13.5 7.94036 14.0596 8.5 14.75 8.5H19.5566Z"
					fill="currentColor"
				/>
				<path
					d="M3.5 15C3.5 13.6193 4.61929 12.5 6 12.5C7.38071 12.5 8.5 13.6193 8.5 15C8.5 15.4142 8.83579 15.75 9.25 15.75C9.66421 15.75 10 15.4142 10 15C10 12.7909 8.20914 11 6 11C3.79086 11 2 12.7909 2 15C2 15.4142 2.33579 15.75 2.75 15.75C3.16421 15.75 3.5 15.4142 3.5 15Z"
					fill="currentColor"
				/>
				<path
					d="M6.75 15.75C6.75 15.3358 6.41421 15 6 15C5.58579 15 5.25 15.3358 5.25 15.75V17.25C5.25 17.6642 5.58579 18 6 18C6.41421 18 6.75 17.6642 6.75 17.25V15.75Z"
					fill="currentColor"
				/>
				<path
					d="M3.5 18C3.5 17.5858 3.16421 17.25 2.75 17.25C2.33579 17.25 2 17.5858 2 18C2 20.2091 3.79086 22 6 22C8.20914 22 10 20.2091 10 18C10 17.5858 9.66421 17.25 9.25 17.25C8.83579 17.25 8.5 17.5858 8.5 18C8.5 19.3807 7.38071 20.5 6 20.5C4.61929 20.5 3.5 19.3807 3.5 18Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 8.75V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H11.9216C12.452 2.75 12.9607 2.96071 13.3358 3.33579L18.6642 8.66421C19.0393 9.03929 19.25 9.54799 19.25 10.0784V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H11.25"
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
				<path
					d="M2.75 18C2.75 19.7949 4.20507 21.25 6 21.25C7.79493 21.25 9.25 19.7949 9.25 18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 15C9.25 13.2051 7.79493 11.75 6 11.75C4.20507 11.75 2.75 13.2051 2.75 15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 15.75V17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFileLink;
