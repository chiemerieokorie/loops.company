import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowCornerLeftUp: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-corner-left-up">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.28033 3.21967C8.98744 2.92678 8.51256 2.92678 8.21967 3.21967L4.21967 7.21967C3.92678 7.51256 3.92678 7.98744 4.21967 8.28033C4.51256 8.57322 4.98744 8.57322 5.28033 8.28033L8 5.56066V17.25C8 19.3211 9.67893 21 11.75 21H19.25C19.6642 21 20 20.6642 20 20.25C20 19.8358 19.6642 19.5 19.25 19.5H11.75C10.5074 19.5 9.5 18.4926 9.5 17.25V5.56066L12.2197 8.28033C12.5126 8.57322 12.9874 8.57322 13.2803 8.28033C13.5732 7.98744 13.5732 7.51256 13.2803 7.21967L9.28033 3.21967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 20.25H11.75C10.0931 20.25 8.75 18.9069 8.75 17.25V4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 7.75L8.75 3.75L4.75 7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowCornerLeftUp;
