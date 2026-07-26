import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFilterAsc: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="filter-asc">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 18.25C3 17.8358 3.33579 17.5 3.75 17.5H18.25C18.6642 17.5 19 17.8358 19 18.25C19 18.6642 18.6642 19 18.25 19H3.75C3.33579 19 3 18.6642 3 18.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25C11.6642 11.25 12 11.5858 12 12C12 12.4142 11.6642 12.75 11.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M3 5.75C3 5.33579 3.33579 5 3.75 5H9.25C9.66421 5 10 5.33579 10 5.75C10 6.16421 9.66421 6.5 9.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M18 14C18.4142 14 18.75 13.6642 18.75 13.25V6.56066L20.7197 8.53033C21.0126 8.82322 21.4874 8.82322 21.7803 8.53033C22.0732 8.23744 22.0732 7.76256 21.7803 7.46967L18.5303 4.21967C18.2374 3.92678 17.7626 3.92678 17.4697 4.21967L14.2197 7.46967C13.9268 7.76256 13.9268 8.23744 14.2197 8.53033C14.5126 8.82322 14.9874 8.82322 15.2803 8.53033L17.25 6.56066V13.25C17.25 13.6642 17.5858 14 18 14Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 18.25H18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 12H11.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 5.75H9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 21.75V13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 16.5L18 13.25L21.25 16.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFilterAsc;
