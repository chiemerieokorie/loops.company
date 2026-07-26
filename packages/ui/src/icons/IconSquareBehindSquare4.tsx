import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareBehindSquare4: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="square-behind-square-4, copy 4, layers, pages"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8 8V5C8 3.34315 9.34315 2 11 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H16V19C16 20.6569 14.6569 22 13 22H5C3.34315 22 2 20.6569 2 19V11C2 9.34315 3.34315 8 5 8H8ZM11 16C9.34315 16 8 14.6569 8 13V9.5H5C4.17157 9.5 3.5 10.1716 3.5 11V19C3.5 19.8284 4.17157 20.5 5 20.5H13C13.8284 20.5 14.5 19.8284 14.5 19V16H11Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M15.25 15.25V19C15.25 20.2426 14.2426 21.25 13 21.25H5C3.75736 21.25 2.75 20.2426 2.75 19V11C2.75 9.75736 3.75736 8.75 5 8.75H8.75M11 15.25H19C20.2426 15.25 21.25 14.2426 21.25 13V5C21.25 3.75736 20.2426 2.75 19 2.75H11C9.75736 2.75 8.75 3.75736 8.75 5V13C8.75 14.2426 9.75736 15.25 11 15.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareBehindSquare4;
