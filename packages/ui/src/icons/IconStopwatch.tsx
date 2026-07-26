import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStopwatch: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="stopwatch, track">
		{variant === "filled" ? (
			<>
				<path
					d="M9.75 1.5C9.33579 1.5 9 1.83579 9 2.25C9 2.66421 9.33579 3 9.75 3H14.25C14.6642 3 15 2.66421 15 2.25C15 1.83579 14.6642 1.5 14.25 1.5H9.75Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13ZM8.46967 10.5303C8.17678 10.2374 8.17678 9.76256 8.46967 9.46967C8.76256 9.17678 9.23744 9.17678 9.53033 9.46967L12.5303 12.4697C12.8232 12.7626 12.8232 13.2374 12.5303 13.5303C12.2374 13.8232 11.7626 13.8232 11.4697 13.5303L8.46967 10.5303Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 13L9 10M9.75 2.25H14.25M20.25 13C20.25 17.5563 16.5563 21.25 12 21.25C7.44365 21.25 3.75 17.5563 3.75 13C3.75 8.44365 7.44365 4.75 12 4.75C16.5563 4.75 20.25 8.44365 20.25 13Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStopwatch;
