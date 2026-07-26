import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFolders2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="folders-2, collection, stuff">
		{variant === "filled" ? (
			<>
				<path
					d="M2.75 6C3.16421 6 3.5 6.33579 3.5 6.75V16.25C3.5 17.4926 4.50736 18.5 5.75 18.5H18.25C18.6642 18.5 19 18.8358 19 19.25C19 19.6642 18.6642 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V6.75C2 6.33579 2.33579 6 2.75 6Z"
					fill="currentColor"
				/>
				<path
					d="M9.42188 3C10.1511 3.00008 10.8506 3.29001 11.3662 3.80566L12.1943 4.63379C12.4287 4.86814 12.7467 4.99992 13.0781 5H19.25C20.7688 5 22 6.23122 22 7.75V13.25C22 15.3211 20.3211 17 18.25 17H8.75C6.67893 17 5 15.3211 5 13.25V5.75C5 4.23122 6.23122 3 7.75 3H9.42188Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 13.25V5.75C5.75 4.64543 6.64543 3.75 7.75 3.75H9.42157C9.95201 3.75 10.4607 3.96071 10.8358 4.33579L11.6642 5.16421C12.0393 5.53929 12.548 5.75 13.0784 5.75H19.25C20.3546 5.75 21.25 6.64543 21.25 7.75V13.25C21.25 14.9069 19.9069 16.25 18.25 16.25H8.75C7.09315 16.25 5.75 14.9069 5.75 13.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 6.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFolders2;
