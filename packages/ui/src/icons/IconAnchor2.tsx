import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAnchor2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="anchor-2, link">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M15.5 5.5C15.5 7.17556 14.3226 8.57612 12.75 8.91946V20.4674C16.846 20.1093 20.1093 16.846 20.4674 12.75H18C17.5858 12.75 17.25 12.4142 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 11.5858 2.33579 11.25 2.75 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H3.53263C3.89072 16.846 7.15398 20.1093 11.25 20.4674V8.91946C9.67741 8.57612 8.5 7.17556 8.5 5.5C8.5 3.567 10.067 2 12 2C13.933 2 15.5 3.567 15.5 5.5ZM12 3.5C10.8954 3.5 10 4.39543 10 5.5C10 6.60457 10.8954 7.5 12 7.5C13.1046 7.5 14 6.60457 14 5.5C14 4.39543 13.1046 3.5 12 3.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 8.25C13.5188 8.25 14.75 7.01878 14.75 5.5C14.75 3.98122 13.5188 2.75 12 2.75C10.4812 2.75 9.25 3.98122 9.25 5.5C9.25 7.01878 10.4812 8.25 12 8.25ZM12 8.25V21M18 12H21.25C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H6"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAnchor2;
