import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWip: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="wip, work, barrier">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.5 2.75C7.5 2.33579 7.16421 2 6.75 2C6.33579 2 6 2.33579 6 2.75V4H5.75C3.67893 4 2 5.67893 2 7.75V10.25C2 12.3211 3.67893 14 5.75 14H5.99996V20.5H5.25C4.83579 20.5 4.5 20.8358 4.5 21.25C4.5 21.6642 4.83579 22 5.25 22H8.25C8.66421 22 9 21.6642 9 21.25C9 20.8358 8.66421 20.5 8.25 20.5H7.49996V14H16.5V20.5H15.75C15.3358 20.5 15 20.8358 15 21.25C15 21.6642 15.3358 22 15.75 22H18.75C19.1642 22 19.5 21.6642 19.5 21.25C19.5 20.8358 19.1642 20.5 18.75 20.5H18V14H18.25C20.3211 14 22 12.3211 22 10.25V7.75C22 5.67893 20.3211 4 18.25 4H18V2.75C18 2.33579 17.6642 2 17.25 2C16.8358 2 16.5 2.33579 16.5 2.75V4H7.5V2.75ZM16.9885 12.5L19.6135 5.5H18.0115L15.3865 12.5H16.9885ZM7.01147 5.5L4.38647 12.5H5.98848L8.61348 5.5H7.01147ZM12.5115 5.5L9.88646 12.5H11.4885L14.1135 5.5H12.5115Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V10.25C21.25 11.9069 19.9069 13.25 18.25 13.25H5.75C4.09315 13.25 2.75 11.9069 2.75 10.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.74996 13.25V21.25M6.74996 21.25H5.25M6.74996 21.25H8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 13.25V21.25M17.25 21.25H15.75M17.25 21.25H18.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 4.5V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 4.5V2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.5 13L8.5 5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 13L18.5 5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.5 13L13.5 5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWip;
