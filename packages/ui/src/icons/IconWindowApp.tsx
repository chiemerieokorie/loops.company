import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWindowApp: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="window-app, browser, app, desktop">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 7C5.33579 7 5 7.33579 5 7.75C5 8.16421 5.33579 8.5 5.75 8.5C6.16421 8.5 6.5 8.16421 6.5 7.75C6.5 7.33579 6.16421 7 5.75 7Z"
					fill="currentColor"
				/>
				<path
					d="M7.5 7.75C7.5 7.33579 7.83579 7 8.25 7C8.66421 7 9 7.33579 9 7.75C9 8.16421 8.66421 8.5 8.25 8.5C7.83579 8.5 7.5 8.16421 7.5 7.75Z"
					fill="currentColor"
				/>
				<path
					d="M10.75 7C10.3358 7 10 7.33579 10 7.75C10 8.16421 10.3358 8.5 10.75 8.5C11.1642 8.5 11.5 8.16421 11.5 7.75C11.5 7.33579 11.1642 7 10.75 7Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM20.5 7.75V10H3.5V7.75C3.5 6.50736 4.50736 5.5 5.75 5.5H18.25C19.4926 5.5 20.5 6.50736 20.5 7.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3 10.75H21M5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 8.375C6.09518 8.375 6.375 8.09518 6.375 7.75C6.375 7.40482 6.09518 7.125 5.75 7.125C5.40482 7.125 5.125 7.40482 5.125 7.75C5.125 8.09518 5.40482 8.375 5.75 8.375ZM8.25 8.375C8.59518 8.375 8.875 8.09518 8.875 7.75C8.875 7.40482 8.59518 7.125 8.25 7.125C7.90482 7.125 7.625 7.40482 7.625 7.75C7.625 8.09518 7.90482 8.375 8.25 8.375ZM10.75 8.375C11.0952 8.375 11.375 8.09518 11.375 7.75C11.375 7.40482 11.0952 7.125 10.75 7.125C10.4048 7.125 10.125 7.40482 10.125 7.75C10.125 8.09518 10.4048 8.375 10.75 8.375Z"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="0.25"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWindowApp;
