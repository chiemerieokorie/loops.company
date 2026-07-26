import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowWall2Up: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-wall-2-up, align top">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H12.7516C13.0581 4.60835 13.3458 4.78513 13.591 5.03033L16.7803 8.21967C17.0732 8.51256 17.0732 8.98744 16.7803 9.28033C16.4874 9.57322 16.0126 9.57322 15.7197 9.28033L12.75 6.31065V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V6.31067L8.28033 9.28033C7.98744 9.57322 7.51256 9.57322 7.21967 9.28033C6.92678 8.98744 6.92678 8.51256 7.21967 8.21967L10.409 5.03033C10.6542 4.78513 10.9419 4.60835 11.2484 4.5H4.75C4.33579 4.5 4 4.16421 4 3.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.75 8.74977L10.9393 5.56044C11.5251 4.97465 12.4749 4.97465 13.0606 5.56043L16.25 8.74977"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 20.25V5.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 3.75H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowWall2Up;
