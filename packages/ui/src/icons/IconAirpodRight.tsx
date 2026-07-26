import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAirpodRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="airpod-right">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7.375 13C8.82475 13 10 14.1753 10 15.625C10 16.4472 9.62098 17.1798 9.0293 17.6611C9.08275 17.7118 9.13519 17.7632 9.18457 17.8174C9.76952 18.4591 10.0098 19.2739 10.0098 20V20.25C10.0098 20.6642 9.67398 21 9.25977 21C8.84561 20.9999 8.50977 20.6642 8.50977 20.25V20C8.50977 19.5867 8.37079 19.1514 8.07617 18.8281C7.79598 18.5208 7.31681 18.25 6.5 18.25H5.5V20.25C5.5 20.6642 5.16421 21 4.75 21C4.33579 21 4 20.6642 4 20.25V13.75L4.00391 13.6729C4.04253 13.2949 4.36183 13 4.75 13H7.375ZM5.5 16.75H7.375C7.99632 16.75 8.5 16.2463 8.5 15.625C8.5 15.0037 7.99632 14.5 7.375 14.5H5.5V16.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M15 3C17.7614 3 20 5.23858 20 8V19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19V12.9004C15.6769 12.966 15.3424 13 15 13C13.8144 13 12.7252 12.587 11.8682 11.8975C11.2353 11.3882 11.0001 10.5613 11 9.74902V6.25098C11.0001 5.43867 11.2353 4.61178 11.8682 4.10254C12.7252 3.41303 13.8144 3 15 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 20.25V13.75H7.375C8.41053 13.75 9.25 14.5895 9.25 15.625V15.625C9.25 16.6605 8.41053 17.5 7.375 17.5H5.3125"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25988 20.25V20C9.25988 18.8603 8.5 17.5 6.5 17.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.4287 3.75C17.0914 3.75007 19.25 5.87669 19.25 8.5V18.75C19.25 19.5784 18.5784 20.25 17.75 20.25C16.9216 20.25 16.25 19.5784 16.25 18.75V12.8984C15.688 13.1246 15.0733 13.25 14.4287 13.25C14.0113 13.25 13.6064 13.1976 13.2202 13.0993C12.2431 12.8504 11.75 11.8425 11.75 10.8342V6.16504C11.75 5.15665 12.2434 4.14864 13.2207 3.90029C13.6068 3.80218 14.0116 3.75 14.4287 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.25 13V11.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAirpodRight;
