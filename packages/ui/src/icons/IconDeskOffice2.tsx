import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDeskOffice2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="desk-office-2">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5 4.75C5 3.7835 5.7835 3 6.75 3H13.25C14.2165 3 15 3.7835 15 4.75V8.25C15 9.2165 14.2165 10 13.25 10H10.75V11H17.25C19.3211 11 21 12.6789 21 14.75V20.25C21 20.6642 20.6642 21 20.25 21H13C12.5858 21 12.25 20.6642 12.25 20.25V12.5H6.75C5.50736 12.5 4.5 13.5074 4.5 14.75V20.25C4.5 20.6642 4.16421 21 3.75 21C3.33579 21 3 20.6642 3 20.25V14.75C3 12.6789 4.67893 11 6.75 11H9.25V10H6.75C5.7835 10 5 9.2165 5 8.25V4.75ZM13.75 15.25H19.5V14.75C19.5 13.5074 18.4926 12.5 17.25 12.5H13.75V15.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 4.75C5.75 4.19772 6.19772 3.75 6.75 3.75H13.25C13.8023 3.75 14.25 4.19772 14.25 4.75V8.25C14.25 8.80228 13.8023 9.25 13.25 9.25H6.75C6.19772 9.25 5.75 8.80228 5.75 8.25V4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10 9.5V11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.75 16H13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 20.25V14.75C3.75 13.0931 5.09315 11.75 6.75 11.75H13M13 11.75H17.25C18.9069 11.75 20.25 13.0931 20.25 14.75V20.25H13V11.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDeskOffice2;
