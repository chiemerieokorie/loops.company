import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBlocks: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="blocks, integration, apps">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.25 6.5C10.6642 6.5 11 6.83579 11 7.25V13H16.75C17.1642 13 17.5 13.3358 17.5 13.75V17.25C17.5 19.3211 15.8211 21 13.75 21H6.75C4.67893 21 3 19.3211 3 17.25V10.25C3 8.17893 4.67893 6.5 6.75 6.5H10.25ZM11 19.5H13.75C14.9926 19.5 16 18.4926 16 17.25V14.5H11V19.5ZM6.75 8C5.50736 8 4.5 9.00736 4.5 10.25V13H9.5V8H6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V10.25C21 10.6642 20.6642 11 20.25 11H13.75C13.3358 11 13 10.6642 13 10.25V3.75C13 3.33579 13.3358 3 13.75 3H17.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.25 20.25V7.25H6.75C5.09315 7.25 3.75 8.59315 3.75 10.25V13.75M3.75 13.75H16.75V17.25C16.75 18.9069 15.4069 20.25 13.75 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V13.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H13.75V10.25H20.25V6.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBlocks;
