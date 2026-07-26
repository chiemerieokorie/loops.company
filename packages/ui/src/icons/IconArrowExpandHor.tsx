import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowExpandHor: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-expand-hor">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.53033 7.21967C6.82322 7.51256 6.82322 7.98744 6.53033 8.28033L3.56068 11.25H20.4393L17.4697 8.28033C17.1768 7.98744 17.1768 7.51256 17.4697 7.21967C17.7626 6.92678 18.2374 6.92678 18.5303 7.21967L22.7803 11.4697C22.921 11.6103 23 11.8011 23 12C23 12.1989 22.921 12.3897 22.7803 12.5303L18.5303 16.7803C18.2374 17.0732 17.7626 17.0732 17.4697 16.7803C17.1768 16.4874 17.1768 16.0126 17.4697 15.7197L20.4394 12.75H3.56064L6.53033 15.7197C6.82322 16.0126 6.82322 16.4874 6.53033 16.7803C6.23744 17.0732 5.76256 17.0732 5.46967 16.7803L1.21967 12.5303C1.07902 12.3897 1 12.1989 1 12C1 11.8011 1.07902 11.6103 1.21967 11.4697L5.46967 7.21967C5.76256 6.92678 6.23744 6.92678 6.53033 7.21967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18 7.75L22.25 12L18 16.25M6 7.75L1.75 12L6 16.25M3 12H21"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowExpandHor;
