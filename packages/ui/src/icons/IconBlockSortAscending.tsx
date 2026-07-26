import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBlockSortAscending: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="block-sort-ascending">
		{variant === "filled" ? (
			<>
				<path
					d="M7 13C9.20914 13 11 14.7909 11 17C11 19.2091 9.20914 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13Z"
					fill="currentColor"
				/>
				<path
					d="M17.5264 6.16797C17.8209 5.92766 18.2557 5.94512 18.5303 6.21973L22.7803 10.4697C23.0732 10.7626 23.0732 11.2374 22.7803 11.5303C22.4874 11.8232 22.0126 11.8232 21.7197 11.5303L18.75 8.56055V17.25C18.75 17.6642 18.4142 18 18 18C17.5858 18 17.25 17.6642 17.25 17.25V8.56055L14.2803 11.5303C13.9874 11.8232 13.5126 11.8232 13.2197 11.5303C12.9268 11.2374 12.9268 10.7626 13.2197 10.4697L17.4697 6.21973L17.5264 6.16797Z"
					fill="currentColor"
				/>
				<path
					d="M7 3C9.20914 3 11 4.79086 11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 7C3.75 8.79493 5.20507 10.25 7 10.25C8.79493 10.25 10.25 8.79493 10.25 7C10.25 5.20507 8.79493 3.75 7 3.75C5.20507 3.75 3.75 5.20507 3.75 7Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 17C3.75 18.7949 5.20507 20.25 7 20.25C8.79493 20.25 10.25 18.7949 10.25 17C10.25 15.2051 8.79493 13.75 7 13.75C5.20507 13.75 3.75 15.2051 3.75 17Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 17.25V7"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 11L18 6.75L22.25 11"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBlockSortAscending;
