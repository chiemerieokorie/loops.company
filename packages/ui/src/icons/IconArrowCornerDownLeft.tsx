import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowCornerDownLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-corner-down-left">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M20.25 4C19.8358 4 19.5 4.33579 19.5 4.75V12.25C19.5 13.4926 18.4926 14.5 17.25 14.5H5.56066L8.28033 11.7803C8.57322 11.4874 8.57322 11.0126 8.28033 10.7197C7.98744 10.4268 7.51256 10.4268 7.21967 10.7197L3.21967 14.7197C2.92678 15.0126 2.92678 15.4874 3.21967 15.7803L7.21967 19.7803C7.51256 20.0732 7.98744 20.0732 8.28033 19.7803C8.57322 19.4874 8.57322 19.0126 8.28033 18.7197L5.56066 16H17.25C19.3211 16 21 14.3211 21 12.25V4.75C21 4.33579 20.6642 4 20.25 4Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 4.75V12.25C20.25 13.9069 18.9069 15.25 17.25 15.25H4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 11.25L3.75 15.25L7.75 19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowCornerDownLeft;
