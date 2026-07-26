import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPackageOut: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="package-out, return,delivery">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75V9.25C4.5 9.66421 4.16421 10 3.75 10C3.33579 10 3 9.66421 3 9.25V6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H13.75C13.3358 21 13 20.6642 13 20.25C13 19.8358 13.3358 19.5 13.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H16V7.25C16 8.76878 14.7688 10 13.25 10H10.75C9.23122 10 8 8.76878 8 7.25V4.5H6.75ZM5.28033 13.2197C5.57322 13.5126 5.57322 13.9874 5.28033 14.2803L4.31066 15.25H7.25C8.76878 15.25 10 16.4812 10 18V20.25C10 20.6642 9.66421 21 9.25 21C8.83579 21 8.5 20.6642 8.5 20.25V18C8.5 17.3096 7.94036 16.75 7.25 16.75H4.31066L5.28033 17.7197C5.57322 18.0126 5.57322 18.4874 5.28033 18.7803C4.98744 19.0732 4.51256 19.0732 4.21967 18.7803L1.96967 16.5303C1.67678 16.2374 1.67678 15.7626 1.96967 15.4697L4.21967 13.2197C4.51256 12.9268 4.98744 12.9268 5.28033 13.2197Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 9.25V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 3.75V7.25C8.75 8.35457 9.64543 9.25 10.75 9.25H13.25C14.3546 9.25 15.25 8.35457 15.25 7.25V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 20.25V18C9.25 16.8954 8.35457 16 7.25 16H3M4.75 13.75L2.5 16L4.75 18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPackageOut;
