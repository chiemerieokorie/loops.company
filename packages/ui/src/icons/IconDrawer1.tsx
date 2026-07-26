import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDrawer1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="drawer-1">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 5V10.25H20V5C20 3.34315 18.6569 2 17 2H7C5.34315 2 4 3.34315 4 5ZM9.75 5C9.33579 5 9 5.33579 9 5.75C9 6.16421 9.33579 6.5 9.75 6.5H14.25C14.6642 6.5 15 6.16421 15 5.75C15 5.33579 14.6642 5 14.25 5H9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M4 17V11.75H20V17C20 18.3062 19.1652 19.4175 18 19.8293V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V20H8V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21V19.8293C4.83481 19.4175 4 18.3062 4 17ZM9 15.75C9 15.3358 9.33579 15 9.75 15H14.25C14.6642 15 15 15.3358 15 15.75C15 16.1642 14.6642 16.5 14.25 16.5H9.75C9.33579 16.5 9 16.1642 9 15.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19 11L5 11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 19.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 19.25V21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 7H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 15H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDrawer1;
