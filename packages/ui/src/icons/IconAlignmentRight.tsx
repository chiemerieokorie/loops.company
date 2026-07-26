import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAlignmentRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="alignment-right">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 4.75C3 4.33579 3.33579 4 3.75 4H20.25C20.6642 4 21 4.33579 21 4.75C21 5.16421 20.6642 5.5 20.25 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75ZM3 4.75C3 4.33579 3.33579 4 3.75 4H20.25C20.6642 4 21 4.33579 21 4.75C21 5.16421 20.6642 5.5 20.25 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75ZM3 4.75C3 4.33579 3.33579 4 3.75 4H20.25C20.6642 4 21 4.33579 21 4.75C21 5.16421 20.6642 5.5 20.25 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M11 12C11 11.5858 11.3358 11.25 11.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H11.75C11.3358 12.75 11 12.4142 11 12Z"
					fill="currentColor"
				/>
				<path
					d="M3 19.25C3 18.8358 3.33579 18.5 3.75 18.5H20.25C20.6642 18.5 21 18.8358 21 19.25C21 19.6642 20.6642 20 20.25 20H3.75C3.33579 20 3 19.6642 3 19.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 4.75H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 12H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 19.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAlignmentRight;
