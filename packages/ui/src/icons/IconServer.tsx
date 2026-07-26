import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconServer: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="server, data, storage">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V11.25H2V8ZM6.25 7.5C6.25 7.91421 5.91421 8.25 5.5 8.25C5.08579 8.25 4.75 7.91421 4.75 7.5C4.75 7.08579 5.08579 6.75 5.5 6.75C5.91421 6.75 6.25 7.08579 6.25 7.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M2 12.75H22V16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V12.75ZM6.25 16.5C6.25 16.9142 5.91421 17.25 5.5 17.25C5.08579 17.25 4.75 16.9142 4.75 16.5C4.75 16.0858 5.08579 15.75 5.5 15.75C5.91421 15.75 6.25 16.0858 6.25 16.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V12H2.75V7.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 12H21.25V16.25C21.25 17.9069 19.9069 19.25 18.25 19.25H5.75C4.09315 19.25 2.75 17.9069 2.75 16.25V12Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.5 14.875C6.91421 14.875 7.25 15.2108 7.25 15.625C7.25 16.0392 6.91421 16.375 6.5 16.375C6.08579 16.375 5.75 16.0392 5.75 15.625C5.75 15.2108 6.08579 14.875 6.5 14.875ZM6.5 7.625C6.91421 7.625 7.25 7.96079 7.25 8.375C7.25 8.78921 6.91421 9.125 6.5 9.125C6.08579 9.125 5.75 8.78921 5.75 8.375C5.75 7.96079 6.08579 7.625 6.5 7.625Z"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="0.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconServer;
