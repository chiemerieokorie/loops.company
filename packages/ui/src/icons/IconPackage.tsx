import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPackage: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="package, delivery">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 3H8V7.75C8 8.99264 9.00736 10 10.25 10H13.75C14.9926 10 16 8.99264 16 7.75V3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75C3 4.67893 4.67893 3 6.75 3ZM14.75 16.5C14.3358 16.5 14 16.8358 14 17.25C14 17.6642 14.3358 18 14.75 18H17.25C17.6642 18 18 17.6642 18 17.25C18 16.8358 17.6642 16.5 17.25 16.5H14.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M9.5 3H14.5V7.75C14.5 8.16421 14.1642 8.5 13.75 8.5H10.25C9.83579 8.5 9.5 8.16421 9.5 7.75V3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 3.75V7.75C8.75 8.57843 9.42157 9.25 10.25 9.25H13.75C14.5784 9.25 15.25 8.57843 15.25 7.75V3.75M13.75 16.25H16.25M3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPackage;
