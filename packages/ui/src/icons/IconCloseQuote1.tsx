import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCloseQuote1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="close-quote-1, blockquote">
		{variant === "filled" ? (
			<>
				<path
					d="M6.48986 5C4.0283 5 2 6.95019 2 9.39583C2 11.8415 4.0283 13.7917 6.48986 13.7917C7.42886 13.7917 8.30482 13.5079 9.02918 13.0211C8.8255 13.56 8.56249 14.031 8.25362 14.4567C7.37729 15.6645 6.08904 16.5744 4.47836 17.6211C4.13106 17.8469 4.03249 18.3114 4.2582 18.6587C4.48392 19.006 4.94845 19.1046 5.29576 18.8789C6.89069 17.8423 8.40734 16.799 9.46771 15.3376C10.5513 13.8441 11.117 11.9794 10.9797 9.37492C10.9682 6.93909 8.94441 5 6.48986 5Z"
					fill="currentColor"
				/>
				<path
					d="M17.4899 5C15.0283 5 13 6.95019 13 9.39583C13 11.8415 15.0283 13.7917 17.4899 13.7917C18.4289 13.7917 19.3048 13.5079 20.0292 13.0211C19.8255 13.56 19.5625 14.031 19.2536 14.4567C18.3773 15.6645 17.089 16.5744 15.4784 17.6211C15.1311 17.8469 15.0325 18.3114 15.2582 18.6587C15.4839 19.006 15.9485 19.1046 16.2958 18.8789C17.8907 17.8423 19.4073 16.799 20.4677 15.3376C21.5513 13.8441 22.117 11.9794 21.9797 9.37492C21.9682 6.93909 19.9444 5 17.4899 5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M10.2297 9.39583C10.2297 11.4094 8.55533 13.0417 6.48986 13.0417C4.42439 13.0417 2.75 11.4094 2.75 9.39583C2.75 7.3823 4.42439 5.75 6.48986 5.75C8.55533 5.75 10.2297 7.3823 10.2297 9.39583Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.2297 9.39583C21.2297 11.4094 19.5553 13.0417 17.4899 13.0417C15.4244 13.0417 13.75 11.4094 13.75 9.39583C13.75 7.3823 15.4244 5.75 17.4899 5.75C19.5553 5.75 21.2297 7.3823 21.2297 9.39583Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.2333 9.396C10.5004 14.3439 8.09622 16.1668 4.89062 18.2502"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.2333 9.396C21.5004 14.3439 19.0962 16.1668 15.8906 18.2502"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCloseQuote1;
