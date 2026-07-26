import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowLeftRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="arrow-left-right, sort 2, switch horizonatl"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16.2197 21.2803C16.5126 21.5732 16.9874 21.5732 17.2803 21.2803L20.2197 18.341C21.0983 17.4623 21.0984 16.0377 20.2197 15.159L17.2803 12.2197C16.9874 11.9268 16.5126 11.9268 16.2197 12.2197C15.9268 12.5126 15.9268 12.9874 16.2197 13.2803L18.9393 16H3.75C3.33579 16 3 16.3358 3 16.75C3 17.1642 3.33579 17.5 3.75 17.5H18.9393L16.2197 20.2197C15.9268 20.5126 15.9268 20.9874 16.2197 21.2803ZM7.78033 11.7803C8.07322 11.4874 8.07322 11.0126 7.78033 10.7197L5.06066 8L20.25 8C20.6642 8 21 7.66421 21 7.25C21 6.83579 20.6642 6.5 20.25 6.5L5.06066 6.5L7.78033 3.78033C8.07322 3.48744 8.07322 3.01256 7.78033 2.71967C7.48744 2.42678 7.01256 2.42678 6.71967 2.71967L3.78033 5.65901C2.90165 6.53769 2.90165 7.96231 3.78033 8.84099L6.71967 11.7803C7.01256 12.0732 7.48744 12.0732 7.78033 11.7803Z"
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

export default IconArrowLeftRight;
