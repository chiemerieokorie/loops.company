import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconControlKeyRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="control-key-right">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM14.5303 7.21967C14.2374 6.92678 13.7626 6.92678 13.4697 7.21967L11.2197 9.46967C10.9268 9.76256 10.9268 10.2374 11.2197 10.5303C11.5126 10.8232 11.9874 10.8232 12.2803 10.5303L14 8.81066L15.7197 10.5303C16.0126 10.8232 16.4874 10.8232 16.7803 10.5303C17.0732 10.2374 17.0732 9.76256 16.7803 9.46967L14.5303 7.21967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M11.75 10L14 7.75L16.25 10M6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconControlKeyRight;
