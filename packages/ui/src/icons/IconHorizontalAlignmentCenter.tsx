import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHorizontalAlignmentCenter: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="horizontal-alignment-center">
		{variant === "filled" ? (
			<>
				<path
					d="M11 6.5V11.25H13V8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H18V15.5C18 16.8807 16.8807 18 15.5 18C14.1193 18 13 16.8807 13 15.5V12.75H11V18C11 19.3807 9.88071 20.5 8.5 20.5C7.11929 20.5 6 19.3807 6 18V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H6V6.5C6 5.11929 7.11929 4 8.5 4C9.88071 4 11 5.11929 11 6.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 12H6.75M17.25 12H20.25M10.25 12H13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 4.75C7.5335 4.75 6.75 5.5335 6.75 6.5V18C6.75 18.9665 7.5335 19.75 8.5 19.75C9.4665 19.75 10.25 18.9665 10.25 18V6.5C10.25 5.5335 9.4665 4.75 8.5 4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 6.75C14.5335 6.75 13.75 7.5335 13.75 8.5V15.5C13.75 16.4665 14.5335 17.25 15.5 17.25C16.4665 17.25 17.25 16.4665 17.25 15.5V8.5C17.25 7.5335 16.4665 6.75 15.5 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHorizontalAlignmentCenter;
