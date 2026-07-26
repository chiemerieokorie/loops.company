import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolderBookmarks: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-bookmarks">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 6.75C2 4.67893 3.67893 3 5.75 3H8.39445C9.64827 3 10.8191 3.62663 11.5146 4.66987L12.0303 5.44338C12.2621 5.79112 12.6524 6 13.0704 6H18.25C20.3211 6 22 7.67893 22 9.75V16.25C22 18.3211 20.3211 20 18.25 20H9.5V13.5C9.5 12.3954 8.60457 11.5 7.5 11.5H2V6.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M1 14.75C1 13.7835 1.7835 13 2.75 13H6.25C7.2165 13 8 13.7835 8 14.75V20.25C8 20.5147 7.86047 20.7598 7.63285 20.8949C7.40523 21.03 7.12324 21.0352 6.89086 20.9084L4.5 19.6043L2.10914 20.9084C1.87676 21.0352 1.59477 21.03 1.36715 20.8949C1.13953 20.7598 1 20.5147 1 20.25V14.75ZM2.75 14.5C2.61193 14.5 2.5 14.6119 2.5 14.75V18.9866L4.14086 18.0916C4.36472 17.9695 4.63528 17.9695 4.85914 18.0916L6.5 18.9866V14.75C6.5 14.6119 6.38807 14.5 6.25 14.5H2.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 13.75H6.25C6.80228 13.75 7.25 14.1977 7.25 14.75V20.25L4.5 18.75L1.75 20.25V14.75C1.75 14.1977 2.19772 13.75 2.75 13.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.25 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H13.0704C12.4017 6.75 11.7772 6.4158 11.4063 5.8594L10.5937 4.6406C10.2228 4.0842 9.59834 3.75 8.92963 3.75H5.75C4.09315 3.75 2.75 5.09315 2.75 6.75V10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolderBookmarks;
