import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHorizontalAlignmentTop: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="horizontal-alignment-top">
		{variant === "filled" ? (
			<>
				<path
					d="M3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.16421 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H3.75Z"
					fill="currentColor"
				/>
				<path
					d="M8.5 6C7.11929 6 6 7.11929 6 8.5V18.5C6 19.8807 7.11929 21 8.5 21C9.88071 21 11 19.8807 11 18.5V8.5C11 7.11929 9.88071 6 8.5 6Z"
					fill="currentColor"
				/>
				<path
					d="M15.5 6C14.1193 6 13 7.11929 13 8.5V14.5C13 15.8807 14.1193 17 15.5 17C16.8807 17 18 15.8807 18 14.5V8.5C18 7.11929 16.8807 6 15.5 6Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 3.75H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 6.75C14.5335 6.75 13.75 7.5335 13.75 8.5V14.5C13.75 15.4665 14.5335 16.25 15.5 16.25C16.4665 16.25 17.25 15.4665 17.25 14.5V8.5C17.25 7.5335 16.4665 6.75 15.5 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 6.75C7.5335 6.75 6.75 7.5335 6.75 8.5V18.5C6.75 19.4665 7.5335 20.25 8.5 20.25C9.4665 20.25 10.25 19.4665 10.25 18.5V8.5C10.25 7.5335 9.4665 6.75 8.5 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHorizontalAlignmentTop;
