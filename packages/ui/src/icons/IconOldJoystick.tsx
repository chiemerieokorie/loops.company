import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOldJoystick: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="old-joystick, gamepad, gaming, control"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M12 3C13.933 3 15.5 4.567 15.5 6.5C15.5 8.17545 14.3224 9.57452 12.75 9.91797V14H16.5V11.75C16.5 11.3358 16.8358 11 17.25 11C17.6642 11 18 11.3358 18 11.75V14.0352C19.6962 14.2778 21 15.7367 21 17.5C21 19.433 19.433 21 17.5 21H6.5C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14H11.25V9.91797C9.67756 9.57452 8.5 8.17545 8.5 6.5C8.5 4.567 10.067 3 12 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 9.25V14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 11.75V14.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.5 14.75H6.5C4.98122 14.75 3.75 15.9812 3.75 17.5C3.75 19.0188 4.98122 20.25 6.5 20.25H17.5C19.0188 20.25 20.25 19.0188 20.25 17.5C20.25 15.9812 19.0188 14.75 17.5 14.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="6.5"
					r="2.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconOldJoystick;
