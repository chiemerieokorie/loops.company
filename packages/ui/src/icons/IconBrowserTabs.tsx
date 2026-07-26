import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBrowserTabs: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="browser-tabs, tab-groups">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M18.25 4C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4H18.25ZM5.75 7C5.33579 7 5 7.33579 5 7.75C5 8.16421 5.33579 8.5 5.75 8.5H11.25C11.6642 8.5 12 8.16421 12 7.75C12 7.33579 11.6642 7 11.25 7H5.75ZM13.75 7C13.3358 7 13 7.33579 13 7.75C13 8.16421 13.3358 8.5 13.75 8.5H14.75C15.1642 8.5 15.5 8.16421 15.5 7.75C15.5 7.33579 15.1642 7 14.75 7H13.75ZM17.25 7C16.8358 7 16.5 7.33579 16.5 7.75C16.5 8.16421 16.8358 8.5 17.25 8.5H18.25C18.6642 8.5 19 8.16421 19 7.75C19 7.33579 18.6642 7 18.25 7H17.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 7.75L11.25 7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.25 7.75H18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 7.75H14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBrowserTabs;
