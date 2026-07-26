import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDoor: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="door, login, logout">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M20 20.5V5.75C20 3.67893 18.3211 2 16.25 2H7.75C5.67893 2 4 3.67893 4 5.75V20.5H2.75C2.33579 20.5 2 20.8358 2 21.25C2 21.6642 2.33579 22 2.75 22H21.25C21.6642 22 22 21.6642 22 21.25C22 20.8358 21.6642 20.5 21.25 20.5H20ZM7 12.25C7 11.8358 7.33579 11.5 7.75 11.5H8.75C9.16421 11.5 9.5 11.8358 9.5 12.25C9.5 12.6642 9.16421 13 8.75 13H7.75C7.33579 13 7 12.6642 7 12.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 21.25L21.25 21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 21.25V5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 12.25H8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDoor;
