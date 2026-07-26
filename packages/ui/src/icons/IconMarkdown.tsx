import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMarkdown: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="markdown">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 4C3.67893 4 2 5.67893 2 7.75V16.25C2 18.3211 3.67893 20 5.75 20H18.25C20.3211 20 22 18.3211 22 16.25V7.75C22 5.67893 20.3211 4 18.25 4H5.75ZM7.28033 9.21967C7.06583 9.00517 6.74324 8.941 6.46299 9.05709C6.18273 9.17318 6 9.44665 6 9.75V14.25C6 14.6642 6.33579 15 6.75 15C7.16421 15 7.5 14.6642 7.5 14.25V11.5607L8.46967 12.5303C8.76256 12.8232 9.23744 12.8232 9.53033 12.5303L10.5 11.5607V14.25C10.5 14.6642 10.8358 15 11.25 15C11.6642 15 12 14.6642 12 14.25V9.75C12 9.44665 11.8173 9.17318 11.537 9.05709C11.2568 8.941 10.9342 9.00517 10.7197 9.21967L9 10.9393L7.28033 9.21967ZM16.5 9.75C16.5 9.33579 16.1642 9 15.75 9C15.3358 9 15 9.33579 15 9.75V12.4393L14.5303 11.9697C14.2374 11.6768 13.7626 11.6768 13.4697 11.9697C13.1768 12.2626 13.1768 12.7374 13.4697 13.0303L15.2197 14.7803C15.5126 15.0732 15.9874 15.0732 16.2803 14.7803L18.0303 13.0303C18.3232 12.7374 18.3232 12.2626 18.0303 11.9697C17.7374 11.6768 17.2626 11.6768 16.9697 11.9697L16.5 12.4393V9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 7.75C21.25 6.09315 19.9069 4.75 18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 14.25V9.75L9 12L11.25 9.75V14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 9.75V14.25L14 12.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 14.25L17.5 12.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMarkdown;
