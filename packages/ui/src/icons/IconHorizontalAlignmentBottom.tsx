import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHorizontalAlignmentBottom: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="horizontal-alignment-bottom">
		{variant === "filled" ? (
			<>
				<path
					d="M8.5 3C7.11929 3 6 4.11929 6 5.5V15.5C6 16.8807 7.11929 18 8.5 18C9.88071 18 11 16.8807 11 15.5V5.5C11 4.11929 9.88071 3 8.5 3Z"
					fill="currentColor"
				/>
				<path
					d="M15.5 7C14.1193 7 13 8.11929 13 9.5V15.5C13 16.8807 14.1193 18 15.5 18C16.8807 18 18 16.8807 18 15.5V9.5C18 8.11929 16.8807 7 15.5 7Z"
					fill="currentColor"
				/>
				<path
					d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 20.25H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 7.75C14.5335 7.75 13.75 8.5335 13.75 9.5V15.5C13.75 16.4665 14.5335 17.25 15.5 17.25C16.4665 17.25 17.25 16.4665 17.25 15.5V9.5C17.25 8.5335 16.4665 7.75 15.5 7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 3.75C7.5335 3.75 6.75 4.5335 6.75 5.5V15.5C6.75 16.4665 7.5335 17.25 8.5 17.25C9.4665 17.25 10.25 16.4665 10.25 15.5V5.5C10.25 4.5335 9.4665 3.75 8.5 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHorizontalAlignmentBottom;
