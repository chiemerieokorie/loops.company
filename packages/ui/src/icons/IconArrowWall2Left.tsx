import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowWall2Left: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-wall-2-left, align left">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.75 4C4.16421 4 4.5 4.33579 4.5 4.75V11.2484C4.60835 10.9419 4.78513 10.6542 5.03033 10.409L8.21967 7.21967C8.51256 6.92678 8.98744 6.92678 9.28033 7.21967C9.57322 7.51256 9.57322 7.98744 9.28033 8.28033L6.31067 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H6.31065L9.28033 15.7197C9.57322 16.0126 9.57322 16.4874 9.28033 16.7803C8.98744 17.0732 8.51256 17.0732 8.21967 16.7803L5.03033 13.591C4.78513 13.3458 4.60835 13.0581 4.5 12.7516V19.25C4.5 19.6642 4.16421 20 3.75 20C3.33579 20 3 19.6642 3 19.25V4.75C3 4.33579 3.33579 4 3.75 4Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.74977 7.75L5.56044 10.9393C4.97465 11.5251 4.97465 12.4749 5.56043 13.0606L8.74977 16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 12H5.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 4.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowWall2Left;
