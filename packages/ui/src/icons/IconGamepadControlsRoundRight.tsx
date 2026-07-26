import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGamepadControlsRoundRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="gamepad-controls-round-right">
		{variant === "filled" ? (
			<>
				<path
					d="M8.25 5.75C8.25 3.67893 9.92893 2 12 2C14.0711 2 15.75 3.67893 15.75 5.75C15.75 7.82107 14.0711 9.5 12 9.5C9.92893 9.5 8.25 7.82107 8.25 5.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M22 12C22 9.92893 20.3211 8.25 18.25 8.25C16.1789 8.25 14.5 9.92893 14.5 12C14.5 14.0711 16.1789 15.75 18.25 15.75C20.3211 15.75 22 14.0711 22 12ZM18.25 9.75C19.4926 9.75 20.5 10.7574 20.5 12C20.5 13.2426 19.4926 14.25 18.25 14.25C17.0074 14.25 16 13.2426 16 12C16 10.7574 17.0074 9.75 18.25 9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M12 14.5C9.92893 14.5 8.25 16.1789 8.25 18.25C8.25 20.3211 9.92893 22 12 22C14.0711 22 15.75 20.3211 15.75 18.25C15.75 16.1789 14.0711 14.5 12 14.5Z"
					fill="currentColor"
				/>
				<path
					d="M9.5 12C9.5 9.92893 7.82107 8.25 5.75 8.25C3.67893 8.25 2 9.92893 2 12C2 14.0711 3.67893 15.75 5.75 15.75C7.82107 15.75 9.5 14.0711 9.5 12Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 15C16.5931 15 15.25 13.6569 15.25 12C15.25 10.3431 16.5931 9 18.25 9C19.9069 9 21.25 10.3431 21.25 12C21.25 13.6569 19.9069 15 18.25 15Z"
					fill="currentColor"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M15 5.75C15 7.40685 13.6569 8.75 12 8.75C10.3431 8.75 9 7.40685 9 5.75C9 4.09315 10.3431 2.75 12 2.75C13.6569 2.75 15 4.09315 15 5.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M15 18.25C15 19.9069 13.6569 21.25 12 21.25C10.3431 21.25 9 19.9069 9 18.25C9 16.5931 10.3431 15.25 12 15.25C13.6569 15.25 15 16.5931 15 18.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 15C4.09315 15 2.75 13.6569 2.75 12C2.75 10.3431 4.09315 9 5.75 9C7.40685 9 8.75 10.3431 8.75 12C8.75 13.6569 7.40685 15 5.75 15Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGamepadControlsRoundRight;
