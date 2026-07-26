import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowCornerRightUp: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-corner-right-up">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M14.7197 3.21967C15.0126 2.92678 15.4874 2.92678 15.7803 3.21967L19.7803 7.21967C20.0732 7.51256 20.0732 7.98744 19.7803 8.28033C19.4874 8.57322 19.0126 8.57322 18.7197 8.28033L16 5.56066V17.25C16 19.3211 14.3211 21 12.25 21H4.75C4.33579 21 4 20.6642 4 20.25C4 19.8358 4.33579 19.5 4.75 19.5H12.25C13.4926 19.5 14.5 18.4926 14.5 17.25V5.56066L11.7803 8.28033C11.4874 8.57322 11.0126 8.57322 10.7197 8.28033C10.4268 7.98744 10.4268 7.51256 10.7197 7.21967L14.7197 3.21967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 20.25H12.25C13.9069 20.25 15.25 18.9069 15.25 17.25V4.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.25 7.75L15.25 3.75L19.25 7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowCornerRightUp;
