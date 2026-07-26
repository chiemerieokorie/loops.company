import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMathBasic: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="math-basic, calc">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M7 3C7.41421 3 7.75 3.33579 7.75 3.75V6.25H10.25C10.6642 6.25 11 6.58579 11 7C11 7.41421 10.6642 7.75 10.25 7.75H7.75V10.25C7.75 10.6642 7.41421 11 7 11C6.58579 11 6.25 10.6642 6.25 10.25V7.75H3.75C3.33579 7.75 3 7.41421 3 7C3 6.58579 3.33579 6.25 3.75 6.25H6.25V3.75C6.25 3.33579 6.58579 3 7 3Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M13 7C13 6.58579 13.3358 6.25 13.75 6.25H20.25C20.6642 6.25 21 6.58579 21 7C21 7.41421 20.6642 7.75 20.25 7.75H13.75C13.3358 7.75 13 7.41421 13 7Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M13 17C13 16.5858 13.3358 16.25 13.75 16.25H20.25C20.6642 16.25 21 16.5858 21 17C21 17.4142 20.6642 17.75 20.25 17.75H13.75C13.3358 17.75 13 17.4142 13 17Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M3.71967 13.7197C4.01256 13.4268 4.48743 13.4268 4.78033 13.7197L7.00002 15.9393L9.21967 13.7197C9.51256 13.4268 9.98744 13.4268 10.2803 13.7197C10.5732 14.0126 10.5732 14.4874 10.2803 14.7803L8.06068 17L10.2803 19.2197C10.5732 19.5126 10.5732 19.9874 10.2803 20.2803C9.98743 20.5732 9.51256 20.5732 9.21967 20.2803L7.00002 18.0606L4.78033 20.2803C4.48744 20.5732 4.01256 20.5732 3.71967 20.2803C3.42678 19.9874 3.42678 19.5126 3.71967 19.2197L5.93936 17L3.71967 14.7803C3.42678 14.4874 3.42677 14.0126 3.71967 13.7197Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M16 14C16 13.4477 16.4477 13 17 13C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7 3.75V10.25M3.75 7H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 7H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 17H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.25 14.25L7.00002 17M7.00002 17L9.75 19.75M7.00002 17L4.25 19.75M7.00002 17L9.75 14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17 14V13.99M17.25 14C17.25 14.1381 17.1381 14.25 17 14.25C16.8619 14.25 16.75 14.1381 16.75 14C16.75 13.8619 16.8619 13.75 17 13.75C17.1381 13.75 17.25 13.8619 17.25 14Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17 20V19.99M17.25 20C17.25 20.1381 17.1381 20.25 17 20.25C16.8619 20.25 16.75 20.1381 16.75 20C16.75 19.8619 16.8619 19.75 17 19.75C17.1381 19.75 17.25 19.8619 17.25 20Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMathBasic;
