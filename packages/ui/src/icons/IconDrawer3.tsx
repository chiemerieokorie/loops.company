import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDrawer3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="drawer-3">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 4H11.25V19H5.75C5.66599 19 5.58263 18.9972 5.5 18.9918V20.25C5.5 20.6642 5.16421 21 4.75 21C4.33579 21 4 20.6642 4 20.25V18.5675C2.81055 17.9387 2 16.689 2 15.25V7.75C2 5.67893 3.67893 4 5.75 4ZM9.5 9.75C9.5 9.33579 9.16421 9 8.75 9C8.33579 9 8 9.33579 8 9.75V12.25C8 12.6642 8.33579 13 8.75 13C9.16421 13 9.5 12.6642 9.5 12.25V9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M18.25 19H12.75V4H18.25C20.3211 4 22 5.67893 22 7.75V15.25C22 16.689 21.1895 17.9387 20 18.5675V20.25C20 20.6642 19.6642 21 19.25 21C18.8358 21 18.5 20.6642 18.5 20.25V18.9918C18.4174 18.9972 18.334 19 18.25 19ZM15.25 9C15.6642 9 16 9.33579 16 9.75V12.25C16 12.6642 15.6642 13 15.25 13C14.8358 13 14.5 12.6642 14.5 12.25V9.75C14.5 9.33579 14.8358 9 15.25 9Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V15.25C21.25 16.9069 19.9069 18.25 18.25 18.25H5.75C4.09315 18.25 2.75 16.9069 2.75 15.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 4.75V18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 18.25V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 18.25V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 9.75L9.25 12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 9.75L14.75 12.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDrawer3;
