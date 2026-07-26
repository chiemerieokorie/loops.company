import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareBehindSquare3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="square-behind-square-3, copy 3, layers, pages"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16 8V5C16 3.34315 14.6569 2 13 2H5C3.34315 2 2 3.34315 2 5V13C2 14.6569 3.34315 16 5 16H8V19C8 20.6569 9.34315 22 11 22H19C20.6569 22 22 20.6569 22 19V11C22 9.34315 20.6569 8 19 8H16ZM13 16C14.6569 16 16 14.6569 16 13V9.5H19C19.8284 9.5 20.5 10.1716 20.5 11V19C20.5 19.8284 19.8284 20.5 19 20.5H11C10.1716 20.5 9.5 19.8284 9.5 19V16H13Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 15.25V19C8.75 20.2426 9.75736 21.25 11 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V11C21.25 9.75736 20.2426 8.75 19 8.75H15.25M13 15.25H5C3.75736 15.25 2.75 14.2426 2.75 13V5C2.75 3.75736 3.75736 2.75 5 2.75H13C14.2426 2.75 15.25 3.75736 15.25 5V13C15.25 14.2426 14.2426 15.25 13 15.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareBehindSquare3;
