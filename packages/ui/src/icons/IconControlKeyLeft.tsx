import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconControlKeyLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="control-key-left">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM9.53033 7.21967C9.23744 6.92678 8.76256 6.92678 8.46967 7.21967L6.21967 9.46967C5.92678 9.76256 5.92678 10.2374 6.21967 10.5303C6.51256 10.8232 6.98744 10.8232 7.28033 10.5303L9 8.81066L10.7197 10.5303C11.0126 10.8232 11.4874 10.8232 11.7803 10.5303C12.0732 10.2374 12.0732 9.76256 11.7803 9.46967L9.53033 7.21967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.25 10L9.5 7.75L11.75 10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconControlKeyLeft;
