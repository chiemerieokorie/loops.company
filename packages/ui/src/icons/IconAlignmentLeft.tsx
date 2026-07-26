import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAlignmentLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="alignment-left">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 4.75C3 4.33579 3.33579 4 3.75 4H20.25C20.6642 4 21 4.33579 21 4.75C21 5.16421 20.6642 5.5 20.25 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75ZM3 4.75C3 4.33579 3.33579 4 3.75 4H20.25C20.6642 4 21 4.33579 21 4.75C21 5.16421 20.6642 5.5 20.25 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75ZM3 4.75C3 4.33579 3.33579 4 3.75 4H20.25C20.6642 4 21 4.33579 21 4.75C21 5.16421 20.6642 5.5 20.25 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H12.25C12.6642 11.25 13 11.5858 13 12C13 12.4142 12.6642 12.75 12.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
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
					d="M3.75 12H12.25"
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

export default IconAlignmentLeft;
