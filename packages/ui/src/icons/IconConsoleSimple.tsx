import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconConsoleSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="console-simple">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4.21967 6.21967C4.51256 5.92678 4.98744 5.92678 5.28033 6.21967L9.82322 10.7626C10.5066 11.446 10.5066 12.554 9.82322 13.2374L5.28033 17.7803C4.98744 18.0732 4.51256 18.0732 4.21967 17.7803C3.92678 17.4874 3.92678 17.0126 4.21967 16.7197L8.76256 12.1768C8.86019 12.0791 8.86019 11.9209 8.76256 11.8232L4.21967 7.28033C3.92678 6.98744 3.92678 6.51256 4.21967 6.21967ZM19.25 18H12.75C12.3358 18 12 17.6642 12 17.25C12 16.8358 12.3358 16.5 12.75 16.5H19.25C19.6642 16.5 20 16.8358 20 17.25C20 17.6642 19.6642 18 19.25 18Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 6.75L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L4.75 17.25M12.75 17.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconConsoleSimple;
