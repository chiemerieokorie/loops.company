import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowsRepeatRightLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrows-repeat-right-left, repost">
		{variant === "filled" ? (
			<>
				<path
					d="M17.2197 2.21967C17.5126 1.92678 17.9874 1.92678 18.2803 2.21967L20.5732 4.51256C21.2566 5.19598 21.2566 6.30402 20.5732 6.98744L18.2803 9.28033C17.9874 9.57322 17.5126 9.57322 17.2197 9.28033C16.9268 8.98744 16.9268 8.51256 17.2197 8.21967L18.9393 6.5H6.75C5.50736 6.5 4.5 7.50736 4.5 8.75V10.25C4.5 10.6642 4.16421 11 3.75 11C3.33579 11 3 10.6642 3 10.25V8.75C3 6.67893 4.67893 5 6.75 5H18.9393L17.2197 3.28033C16.9268 2.98744 16.9268 2.51256 17.2197 2.21967Z"
					fill="currentColor"
				/>
				<path
					d="M21 13.25C21 12.8358 20.6642 12.5 20.25 12.5C19.8358 12.5 19.5 12.8358 19.5 13.25V15.25C19.5 16.4926 18.4926 17.5 17.25 17.5H5.06051L6.78018 15.7803C7.07307 15.4874 7.07307 15.0126 6.78018 14.7197C6.48729 14.4268 6.01241 14.4268 5.71952 14.7197L3.42663 17.0126C2.74321 17.696 2.74321 18.804 3.42663 19.4874L5.71952 21.7803C6.01241 22.0732 6.48729 22.0732 6.78018 21.7803C7.07307 21.4874 7.07307 21.0126 6.78018 20.7197L5.06051 19H17.25C19.3211 19 21 17.3211 21 15.25V13.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.75 2.75L20.0429 5.04289C20.4334 5.43342 20.4334 6.06658 20.0429 6.45711L17.75 8.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.24985 21.25L3.95696 18.9571C3.56643 18.5666 3.56643 17.9334 3.95696 17.5429L6.24985 15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 18.25H17.25C18.9069 18.25 20.25 16.9069 20.25 15.25V13.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 10.25V8.75C3.75 7.09315 5.09315 5.75 6.75 5.75H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowsRepeatRightLeft;
