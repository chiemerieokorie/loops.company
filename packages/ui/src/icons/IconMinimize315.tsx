import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMinimize315: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="minimize-315, arrow, shrink">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L9.5 8.43934V3.75C9.5 3.33579 9.83579 3 10.25 3C10.6642 3 11 3.33579 11 3.75V10.25C11 10.6642 10.6642 11 10.25 11H3.75C3.33579 11 3 10.6642 3 10.25C3 9.83579 3.33579 9.5 3.75 9.5H8.43934L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967ZM13 13.75C13 13.3358 13.3358 13 13.75 13H20.25C20.6642 13 21 13.3358 21 13.75C21 14.1642 20.6642 14.5 20.25 14.5H15.5607L20.7803 19.7197C21.0732 20.0126 21.0732 20.4874 20.7803 20.7803C20.4874 21.0732 20.0126 21.0732 19.7197 20.7803L14.5 15.5607V20.25C14.5 20.6642 14.1642 21 13.75 21C13.3358 21 13 20.6642 13 20.25V13.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.25 3.75V10.25M10.25 10.25H3.75M10.25 10.25L3.75 3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 20.25V13.75M13.75 13.75H20.25M13.75 13.75L20.25 20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMinimize315;
