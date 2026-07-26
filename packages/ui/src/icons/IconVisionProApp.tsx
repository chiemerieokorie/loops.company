import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVisionProApp: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="vision-pro-app, window">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 7.75C3 5.67894 4.67893 4 6.75 4H19.25C21.3211 4 23 5.67893 23 7.75V14.1786C23 15.9936 21.7105 17.5075 19.9976 17.854C19.9433 19.0484 18.9578 20 17.75 20H8.25C7.04223 20 6.05672 19.0484 6.00237 17.854C4.28951 17.5075 3 15.9936 3 14.1786V7.75ZM18.5 17.75C18.5 17.3358 18.1642 17 17.75 17H8.25C7.83579 17 7.5 17.3358 7.5 17.75C7.5 18.1642 7.83579 18.5 8.25 18.5H17.75C18.1642 18.5 18.5 18.1642 18.5 17.75ZM0.75 8C1.16421 8 1.5 8.33579 1.5 8.75V13.25C1.5 13.6642 1.16421 14 0.75 14C0.335786 14 0 13.6642 0 13.25V8.75C0 8.33579 0.335786 8 0.75 8Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M0.75 8.75V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 17.1786C20.9069 17.1786 22.25 15.8354 22.25 14.1786V7.75C22.25 6.09315 20.9069 4.75 19.25 4.75H6.75C5.09315 4.75 3.75 6.09315 3.75 7.75V14.1786C3.75 15.8354 5.09315 17.1786 6.75 17.1786"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.75 19.25H8.25C7.42157 19.25 6.75 18.5784 6.75 17.75C6.75 16.9216 7.42157 16.25 8.25 16.25H17.75C18.5784 16.25 19.25 16.9216 19.25 17.75C19.25 18.5784 18.5784 19.25 17.75 19.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVisionProApp;
