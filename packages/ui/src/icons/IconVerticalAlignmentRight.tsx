import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVerticalAlignmentRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="vertical-alignment-right">
		{variant === "filled" ? (
			<>
				<path
					d="M21 3.75C21 3.33579 20.6642 3 20.25 3C19.8358 3 19.5 3.33579 19.5 3.75V20.25C19.5 20.6642 19.8358 21 20.25 21C20.6642 21 21 20.6642 21 20.25V3.75Z"
					fill="currentColor"
				/>
				<path
					d="M5.5 6C4.11929 6 3 7.11929 3 8.5C3 9.88071 4.11929 11 5.5 11H15.5C16.8807 11 18 9.88071 18 8.5C18 7.11929 16.8807 6 15.5 6H5.5Z"
					fill="currentColor"
				/>
				<path
					d="M9.5 13C8.11929 13 7 14.1193 7 15.5C7 16.8807 8.11929 18 9.5 18H15.5C16.8807 18 18 16.8807 18 15.5C18 14.1193 16.8807 13 15.5 13H9.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 3.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 6.75H5.5C4.5335 6.75 3.75 7.5335 3.75 8.5C3.75 9.4665 4.5335 10.25 5.5 10.25H15.5C16.4665 10.25 17.25 9.4665 17.25 8.5C17.25 7.5335 16.4665 6.75 15.5 6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.5 13.75H9.5C8.5335 13.75 7.75 14.5335 7.75 15.5C7.75 16.4665 8.5335 17.25 9.5 17.25H15.5C16.4665 17.25 17.25 16.4665 17.25 15.5C17.25 14.5335 16.4665 13.75 15.5 13.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVerticalAlignmentRight;
