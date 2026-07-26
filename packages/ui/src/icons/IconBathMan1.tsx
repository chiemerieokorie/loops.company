import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBathMan1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bath-man-1, man, male">
		{variant === "filled" ? (
			<>
				<path
					d="M12 1C10.3431 1 9 2.34315 9 4C9 5.65685 10.3431 7 12 7C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1Z"
					fill="currentColor"
				/>
				<path
					d="M9.75 8C7.67893 8 6 9.67893 6 11.75V15.25C6 16.2165 6.7835 17 7.75 17H8V21.25C8 22.2165 8.7835 23 9.75 23H14.25C15.2165 23 16 22.2165 16 21.25V17H16.25C17.2165 17 18 16.2165 18 15.25V11.75C18 9.67893 16.3211 8 14.25 8H9.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="4"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 22.25V16.25H16.25C16.8023 16.25 17.25 15.8023 17.25 15.25V11.75C17.25 10.0931 15.9069 8.75 14.25 8.75H9.75C8.09315 8.75 6.75 10.0931 6.75 11.75V15.25C6.75 15.8023 7.19772 16.25 7.75 16.25H8.75V22.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBathMan1;
