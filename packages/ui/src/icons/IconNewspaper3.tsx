import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNewspaper3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="newspaper-3">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM12 8.75C12 8.33579 12.3358 8 12.75 8H17.75C18.1642 8 18.5 8.33579 18.5 8.75C18.5 9.16421 18.1642 9.5 17.75 9.5H12.75C12.3358 9.5 12 9.16421 12 8.75ZM12 12C12 11.5858 12.3358 11.25 12.75 11.25H17.75C18.1642 11.25 18.5 11.5858 18.5 12C18.5 12.4142 18.1642 12.75 17.75 12.75H12.75C12.3358 12.75 12 12.4142 12 12ZM5.5 15.25C5.5 14.8358 5.83579 14.5 6.25 14.5H17.75C18.1642 14.5 18.5 14.8358 18.5 15.25C18.5 15.6642 18.1642 16 17.75 16H6.25C5.83579 16 5.5 15.6642 5.5 15.25ZM6.8011 8.24129C6.59164 8.01437 6.2645 7.93904 5.97689 8.05149C5.68928 8.16394 5.5 8.44119 5.5 8.75V12C5.5 12.4142 5.83579 12.75 6.25 12.75C6.66421 12.75 7 12.4142 7 12V10.6682L8.6989 12.5087C8.90836 12.7356 9.2355 12.811 9.52311 12.6985C9.81072 12.5861 10 12.3088 10 12V8.75C10 8.33579 9.66421 8 9.25 8C8.83579 8 8.5 8.33579 8.5 8.75V10.0818L6.8011 8.24129Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.25 15.25H17.75M12.75 12H17.75M12.75 8.75H17.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 8.75V12L6.25 8.75V12"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconNewspaper3;
