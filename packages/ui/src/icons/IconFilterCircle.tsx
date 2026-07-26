import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFilterCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="filter-circle, sort">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8.75 11.75C8.33579 11.75 8 12.0858 8 12.5C8 12.9142 8.33579 13.25 8.75 13.25H15.25C15.6642 13.25 16 12.9142 16 12.5C16 12.0858 15.6642 11.75 15.25 11.75H8.75ZM6.5 9.25C6.5 8.83579 6.83579 8.5 7.25 8.5H16.75C17.1642 8.5 17.5 8.83579 17.5 9.25C17.5 9.66421 17.1642 10 16.75 10H7.25C6.83579 10 6.5 9.66421 6.5 9.25ZM10.25 15C9.83579 15 9.5 15.3358 9.5 15.75C9.5 16.1642 9.83579 16.5 10.25 16.5H13.75C14.1642 16.5 14.5 16.1642 14.5 15.75C14.5 15.3358 14.1642 15 13.75 15H10.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 12.5H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.25 9.25L16.75 9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.25 15.75H13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFilterCircle;
