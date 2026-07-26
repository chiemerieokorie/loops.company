import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolderLink: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folder-link, link, attachment">
		{variant === "filled" ? (
			<>
				<path
					d="M5.75 3C3.67893 3 2 4.67893 2 6.75V12.3895C2.86278 11.8269 3.89321 11.5 5 11.5H8C11.0376 11.5 13.5 13.9624 13.5 17C13.5 18.1068 13.1731 19.1372 12.6105 20H18.25C20.3211 20 22 18.3211 22 16.25V9.75C22 7.67893 20.3211 6 18.25 6H13.0704C12.6524 6 12.2621 5.79112 12.0303 5.44338L11.5146 4.66987C10.8191 3.62663 9.64827 3 8.39445 3H5.75Z"
					fill="currentColor"
				/>
				<path
					d="M5 19.5C3.61929 19.5 2.5 18.3807 2.5 17C2.5 15.6193 3.61929 14.5 5 14.5C5.41421 14.5 5.75 14.1642 5.75 13.75C5.75 13.3358 5.41421 13 5 13C2.79086 13 1 14.7909 1 17C1 19.2091 2.79086 21 5 21C5.41421 21 5.75 20.6642 5.75 20.25C5.75 19.8358 5.41421 19.5 5 19.5Z"
					fill="currentColor"
				/>
				<path
					d="M5.75 16.25C5.33579 16.25 5 16.5858 5 17C5 17.4142 5.33579 17.75 5.75 17.75H7.25C7.66421 17.75 8 17.4142 8 17C8 16.5858 7.66421 16.25 7.25 16.25H5.75Z"
					fill="currentColor"
				/>
				<path
					d="M8 19.5C7.58579 19.5 7.25 19.8358 7.25 20.25C7.25 20.6642 7.58579 21 8 21C10.2091 21 12 19.2091 12 17C12 14.7909 10.2091 13 8 13C7.58579 13 7.25 13.3358 7.25 13.75C7.25 14.1642 7.58579 14.5 8 14.5C9.38071 14.5 10.5 15.6193 10.5 17C10.5 18.3807 9.38071 19.5 8 19.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.25 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V9.75C21.25 8.09315 19.9069 6.75 18.25 6.75H13.0704C12.4017 6.75 11.7772 6.4158 11.4063 5.8594L10.5937 4.6406C10.2228 4.0842 9.59834 3.75 8.92963 3.75H5.75C4.09315 3.75 2.75 5.09315 2.75 6.75V10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5 20.25C3.20507 20.25 1.75 18.7949 1.75 17C1.75 15.2051 3.20507 13.75 5 13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8 20.25C9.79493 20.25 11.25 18.7949 11.25 17C11.25 15.2051 9.79493 13.75 8 13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 17H7.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolderLink;
