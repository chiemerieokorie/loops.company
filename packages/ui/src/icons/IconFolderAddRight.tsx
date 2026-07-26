import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolderAddRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-add-right">
		{variant === "filled" ? (
			<>
				<path
					d="M8.59861 3C9.72489 3 10.7766 3.56288 11.4014 4.5C12.0261 5.43712 13.0779 6 14.2042 6H18.25C20.3211 6 22 7.67893 22 9.75V12.5278C20.9385 11.5777 19.5367 11 18 11C14.6863 11 12 13.6863 12 17C12 18.0929 12.2922 19.1175 12.8027 20H5.75C3.67893 20 2 18.3211 2 16.25V6.75C2 4.67893 3.67893 3 5.75 3H8.59861Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M18 13C18.4142 13 18.75 13.3358 18.75 13.75V16.25H21.25C21.6642 16.25 22 16.5858 22 17C22 17.4142 21.6642 17.75 21.25 17.75H18.75V20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25V17.75H14.75C14.3358 17.75 14 17.4142 14 17C14 16.5858 14.3358 16.25 14.75 16.25H17.25V13.75C17.25 13.3358 17.5858 13 18 13Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M11.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V6.75C2.75 5.09315 4.09315 3.75 5.75 3.75H8.39445C9.39751 3.75 10.3342 4.2513 10.8906 5.0859L11.1094 5.4141C11.6658 6.2487 12.6025 6.75 13.6056 6.75H18.25C19.9069 6.75 21.25 8.09315 21.25 9.75V10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 13.75V17V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 17H18H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolderAddRight;
