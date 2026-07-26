import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolderAddLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-add-left">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 3C3.67893 3 2 4.67893 2 6.75V15H2.5V14.25C2.5 13.0074 3.50736 12 4.75 12C5.99264 12 7 13.0074 7 14.25V15H7.75C8.99264 15 10 16.0074 10 17.25C10 18.4926 8.99264 19.5 7.75 19.5H7V20H18.25C20.3211 20 22 18.3211 22 16.25V9.75C22 7.67893 20.3211 6 18.25 6H13.0704C12.6524 6 12.2621 5.79112 12.0303 5.44338L11.5146 4.66987C10.8191 3.62663 9.64827 3 8.39445 3H5.75Z"
					fill="currentColor"
				/>
				<path
					d="M5.5 14.25C5.5 13.8358 5.16421 13.5 4.75 13.5C4.33579 13.5 4 13.8358 4 14.25V16.5H1.75C1.33579 16.5 1 16.8358 1 17.25C1 17.6642 1.33579 18 1.75 18H4V20.25C4 20.6642 4.33579 21 4.75 21C5.16421 21 5.5 20.6642 5.5 20.25V18H7.75C8.16421 18 8.5 17.6642 8.5 17.25C8.5 16.8358 8.16421 16.5 7.75 16.5H5.5V14.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M10.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H13.0704C12.4017 6.75 11.7772 6.4158 11.4063 5.8594L10.5937 4.6406C10.2228 4.0842 9.59834 3.75 8.92963 3.75H5.75C4.09315 3.75 2.75 5.09315 2.75 6.75V11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.75 14.25V17.25V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 17.25H4.75H7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolderAddLeft;
