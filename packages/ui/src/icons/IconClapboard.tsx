import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconClapboard: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="clapboard, movie, film">
		{variant === "filled" ? (
			<>
				<path
					d="M21 17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V9.5H21V17.25Z"
					fill="currentColor"
				/>
				<path
					d="M7.20898 8H3V6.75C3 4.67893 4.67893 3 6.75 3H8.87598L7.20898 8Z"
					fill="currentColor"
				/>
				<path
					d="M13.459 8H8.79102L10.458 3H15.126L13.459 8Z"
					fill="currentColor"
				/>
				<path
					d="M17.25 3C19.3211 3 21 4.67893 21 6.75V8H15.041L16.708 3H17.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path d="M4 8.75H20" stroke="currentColor" strokeWidth="1.5" />
				<path
					d="M8.25 8.75L10.25 3.75"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 8.75L15.75 3.75"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconClapboard;
