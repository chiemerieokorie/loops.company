import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowRightLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="arrow-right-left, sort 1, switch horizontal"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16.2197 2.71967C16.5126 2.42678 16.9874 2.42678 17.2803 2.71967L20.2197 5.65901C21.0983 6.53769 21.0984 7.96231 20.2197 8.84099L17.2803 11.7803C16.9874 12.0732 16.5126 12.0732 16.2197 11.7803C15.9268 11.4874 15.9268 11.0126 16.2197 10.7197L18.9393 8H3.75C3.33579 8 3 7.66421 3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H18.9393L16.2197 3.78033C15.9268 3.48744 15.9268 3.01256 16.2197 2.71967ZM7.78033 12.2197C8.07322 12.5126 8.07322 12.9874 7.78033 13.2803L5.06066 16H20.25C20.6642 16 21 16.3358 21 16.75C21 17.1642 20.6642 17.5 20.25 17.5H5.06066L7.78033 20.2197C8.07322 20.5126 8.07322 20.9874 7.78033 21.2803C7.48744 21.5732 7.01256 21.5732 6.71967 21.2803L3.78033 18.341C2.90165 17.4623 2.90165 16.0377 3.78033 15.159L6.71967 12.2197C7.01256 11.9268 7.48744 11.9268 7.78033 12.2197Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.24977 20.75L4.31043 17.8107C3.72465 17.2249 3.72465 16.2751 4.31043 15.6893L7.24977 12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 11.25L19.6893 8.31066C20.2751 7.72487 20.2751 6.77513 19.6893 6.18934L16.75 3.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5 16.75H20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 7.25H19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowRightLeft;
