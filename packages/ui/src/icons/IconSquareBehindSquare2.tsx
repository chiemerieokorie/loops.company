import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSquareBehindSquare2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="square-behind-square-2, copy 2, layers, pages"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M22 5C22 3.34315 20.6569 2 19 2H11C9.34315 2 8 3.34315 8 5V8H5C3.34315 8 2 9.34315 2 11V19C2 20.6569 3.34315 22 5 22H13C14.6569 22 16 20.6569 16 19V16H19C20.6569 16 22 14.6569 22 13V5ZM16 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V5C20.5 4.17157 19.8284 3.5 19 3.5H11C10.1716 3.5 9.5 4.17157 9.5 5V8H13C14.6569 8 16 9.34315 16 11V14.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 8.75V5C8.75 3.75736 9.75736 2.75 11 2.75H19C20.2426 2.75 21.25 3.75736 21.25 5V13C21.25 14.2426 20.2426 15.25 19 15.25H15.25M13 8.75H5C3.75736 8.75 2.75 9.75736 2.75 11V19C2.75 20.2426 3.75736 21.25 5 21.25H13C14.2426 21.25 15.25 20.2426 15.25 19V11C15.25 9.75736 14.2426 8.75 13 8.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSquareBehindSquare2;
