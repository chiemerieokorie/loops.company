import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStage: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="stage, show">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75ZM19.8102 17.8712L18.0938 16.1576C17.6719 15.7365 17.1002 15.5 16.5041 15.5H7.49264C6.8959 15.5 6.32361 15.7371 5.90165 16.159L4.18963 17.871C4.59415 18.2605 5.14411 18.5 5.75 18.5H18.25C18.8558 18.5 19.4057 18.2606 19.8102 17.8712Z"
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
					d="M3.5 17.5L5.37132 15.6287C5.93393 15.0661 6.69699 14.75 7.49264 14.75H16.5041C17.2989 14.75 18.0612 15.0654 18.6236 15.6269L20.5 17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStage;
