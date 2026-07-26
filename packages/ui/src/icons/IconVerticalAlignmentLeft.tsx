import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVerticalAlignmentLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="vertical-alignment-left">
		{variant === "filled" ? (
			<>
				<path
					d="M4.5 3.75C4.5 3.33579 4.16421 3 3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21C4.16421 21 4.5 20.6642 4.5 20.25V3.75Z"
					fill="currentColor"
				/>
				<path
					d="M8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11H18.5C19.8807 11 21 9.88071 21 8.5C21 7.11929 19.8807 6 18.5 6H8.5Z"
					fill="currentColor"
				/>
				<path
					d="M8.5 13C7.11929 13 6 14.1193 6 15.5C6 16.8807 7.11929 18 8.5 18H14.5C15.8807 18 17 16.8807 17 15.5C17 14.1193 15.8807 13 14.5 13H8.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 3.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.5 6.75H8.5C7.5335 6.75 6.75 7.5335 6.75 8.5C6.75 9.4665 7.5335 10.25 8.5 10.25H18.5C19.4665 10.25 20.25 9.4665 20.25 8.5C20.25 7.5335 19.4665 6.75 18.5 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.5 13.75H8.5C7.5335 13.75 6.75 14.5335 6.75 15.5C6.75 16.4665 7.5335 17.25 8.5 17.25H14.5C15.4665 17.25 16.25 16.4665 16.25 15.5C16.25 14.5335 15.4665 13.75 14.5 13.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVerticalAlignmentLeft;
