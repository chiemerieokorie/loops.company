import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconNotebook: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="notebook, cover">
		{variant === "filled" ? (
			<>
				<path
					d="M7 2.5082C5.04549 2.63685 3.5 4.26294 3.5 6.25V17.75C3.5 19.7371 5.04549 21.3632 7 21.4918V2.5082Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M8.5 21.5H16.75C18.8211 21.5 20.5 19.8211 20.5 17.75V6.25C20.5 4.17893 18.8211 2.5 16.75 2.5H8.5V21.5ZM12.75 7C12.3358 7 12 7.33579 12 7.75C12 8.16421 12.3358 8.5 12.75 8.5H16.25C16.6642 8.5 17 8.16421 17 7.75C17 7.33579 16.6642 7 16.25 7H12.75ZM12.75 11C12.3358 11 12 11.3358 12 11.75C12 12.1642 12.3358 12.5 12.75 12.5H16.25C16.6642 12.5 17 12.1642 17 11.75C17 11.3358 16.6642 11 16.25 11H12.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.25 6.25C4.25 4.59315 5.59315 3.25 7.25 3.25H8.75H16.75C18.4069 3.25 19.75 4.59315 19.75 6.25V17.75C19.75 19.4069 18.4069 20.75 16.75 20.75H8.75H7.25C5.59315 20.75 4.25 19.4069 4.25 17.75V6.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 3.25V20.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 7.75H15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 11.75H15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconNotebook;
