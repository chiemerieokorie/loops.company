import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconForkSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="fork-simple, agents">
		{variant === "filled" ? (
			<>
				<path
					d="M18 2.25C20.0711 2.25 21.75 3.92893 21.75 6C21.75 7.8368 20.4291 9.36329 18.6855 9.68555C18.3633 11.4291 16.8368 12.75 15 12.75H12.75V14.3242C14.4618 14.6716 15.75 16.1857 15.75 18C15.75 20.0711 14.0711 21.75 12 21.75C9.92893 21.75 8.25 20.0711 8.25 18C8.25 16.1857 9.53824 14.6716 11.25 14.3242V12.75H9C7.16314 12.75 5.63567 11.4292 5.31348 9.68555C3.57043 9.36291 2.25 7.83647 2.25 6C2.25 3.92893 3.92893 2.25 6 2.25C8.07107 2.25 9.75 3.92893 9.75 6C9.75 7.77977 8.50978 9.26836 6.84668 9.65234C7.12636 10.5768 7.98428 11.25 9 11.25H15C16.0156 11.25 16.8726 10.5766 17.1523 9.65234C15.4897 9.26802 14.25 7.77944 14.25 6C14.25 3.92893 15.9289 2.25 18 2.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 21C13.6569 21 15 19.6569 15 18C15 16.3431 13.6569 15 12 15C10.3431 15 9 16.3431 9 18C9 19.6569 10.3431 21 12 21Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 9C6 10.6569 7.34315 12 9 12H12M12 12V15M12 12H15C16.6569 12 18 10.6569 18 9"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconForkSimple;
