import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPostcard1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="postcard-1,address">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM6 9.75C6 9.33579 6.33579 9 6.75 9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H6.75C6.33579 10.5 6 10.1642 6 9.75ZM14 9.75C14 9.33579 14.3358 9 14.75 9H17.25C17.6642 9 18 9.33579 18 9.75V13.25C18 13.6642 17.6642 14 17.25 14H14.75C14.3358 14 14 13.6642 14 13.25V9.75ZM6 12.75C6 12.3358 6.33579 12 6.75 12H9.27C9.68421 12 10.02 12.3358 10.02 12.75C10.02 13.1642 9.68422 13.5 9.27 13.5H6.75C6.33579 13.5 6 13.1642 6 12.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M6.75 9.75H11.25M6.75 12.75H9.27M14.75 9.75H17.25V13.25H14.75V9.75ZM5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPostcard1;
