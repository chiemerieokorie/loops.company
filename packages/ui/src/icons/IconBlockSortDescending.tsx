import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBlockSortDescending: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="block-sort-descending">
		{variant === "filled" ? (
			<>
				<path
					d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
					fill="currentColor"
				/>
				<path
					d="M17.5264 17.832C17.8209 18.0723 18.2557 18.0549 18.5303 17.7803L22.7803 13.5303C23.0732 13.2374 23.0732 12.7626 22.7803 12.4697C22.4874 12.1768 22.0126 12.1768 21.7197 12.4697L18.75 15.4395V6.75C18.75 6.33579 18.4142 6 18 6C17.5858 6 17.25 6.33579 17.25 6.75V15.4395L14.2803 12.4697C13.9874 12.1768 13.5126 12.1768 13.2197 12.4697C12.9268 12.7626 12.9268 13.2374 13.2197 13.5303L17.4697 17.7803L17.5264 17.832Z"
					fill="currentColor"
				/>
				<path
					d="M7 21C9.20914 21 11 19.2091 11 17C11 14.7909 9.20914 13 7 13C4.79086 13 3 14.7909 3 17C3 19.2091 4.79086 21 7 21Z"
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
					d="M18 17.25V6.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M22.25 13L18 17.25L13.75 13"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBlockSortDescending;
