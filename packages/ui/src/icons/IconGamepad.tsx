import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGamepad: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="gamepad, gaming, joystick">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8 5.25C4.27208 5.25 1.25 8.27208 1.25 12C1.25 15.7279 4.27208 18.75 8 18.75H16C19.7279 18.75 22.75 15.7279 22.75 12C22.75 8.27208 19.7279 5.25 16 5.25H8ZM8 9C8.41421 9 8.75 9.33579 8.75 9.75V11.25H10.25C10.6642 11.25 11 11.5858 11 12C11 12.4142 10.6642 12.75 10.25 12.75H8.75V14.25C8.75 14.6642 8.41421 15 8 15C7.58579 15 7.25 14.6642 7.25 14.25V12.75H5.75C5.33579 12.75 5 12.4142 5 12C5 11.5858 5.33579 11.25 5.75 11.25H7.25V9.75C7.25 9.33579 7.58579 9 8 9ZM18 11.25C17.4477 11.25 17 10.8023 17 10.25C17 9.69772 17.4477 9.25 18 9.25C18.5523 9.25 19 9.69772 19 10.25C19 10.8023 18.5523 11.25 18 11.25ZM15 14.75C14.4477 14.75 14 14.3023 14 13.75C14 13.1977 14.4477 12.75 15 12.75C15.5523 12.75 16 13.1977 16 13.75C16 14.3023 15.5523 14.75 15 14.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8 9.75V12M8 12V14.25M8 12H10.25M8 12H5.75M8 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 13.75C14.25 14.1642 14.5858 14.5 15 14.5C15.4142 14.5 15.75 14.1642 15.75 13.75C15.75 13.3358 15.4142 13 15 13C14.5858 13 14.25 13.3358 14.25 13.75ZM17.25 10.25C17.25 10.6642 17.5858 11 18 11C18.4142 11 18.75 10.6642 18.75 10.25C18.75 9.83579 18.4142 9.5 18 9.5C17.5858 9.5 17.25 9.83579 17.25 10.25Z"
					fill="currentColor"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="0.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGamepad;
