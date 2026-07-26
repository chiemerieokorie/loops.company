import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDraft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="draft">
		{variant === "filled" ? (
			<>
				<path
					d="M6.5 3C4.84315 3 3.5 4.34315 3.5 6C3.5 7.39788 4.45608 8.57245 5.75 8.90549V15.0945C4.45608 15.4275 3.5 16.6021 3.5 18C3.5 19.6569 4.84315 21 6.5 21C8.15685 21 9.5 19.6569 9.5 18C9.5 16.6021 8.54392 15.4275 7.25 15.0945V8.90549C8.54392 8.57245 9.5 7.39788 9.5 6C9.5 4.34315 8.15685 3 6.5 3Z"
					fill="currentColor"
				/>
				<path
					d="M17.5 4.5C16.6716 4.5 16 5.17157 16 6C16 6.82843 16.6716 7.5 17.5 7.5C18.3284 7.5 19 6.82843 19 6C19 5.17157 18.3284 4.5 17.5 4.5Z"
					fill="currentColor"
				/>
				<path
					d="M17.5 9.75C16.6716 9.75 16 10.4216 16 11.25C16 12.0784 16.6716 12.75 17.5 12.75C18.3284 12.75 19 12.0784 19 11.25C19 10.4216 18.3284 9.75 17.5 9.75Z"
					fill="currentColor"
				/>
				<path
					d="M17.5 15C15.8431 15 14.5 16.3431 14.5 18C14.5 19.6569 15.8431 21 17.5 21C19.1569 21 20.5 19.6569 20.5 18C20.5 16.3431 19.1569 15 17.5 15Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="6.5"
					cy="6"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="6.5"
					cy="18"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="17.5"
					cy="18"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.5 8.25V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 6C18.25 6.41421 17.9142 6.75 17.5 6.75C17.0858 6.75 16.75 6.41421 16.75 6C16.75 5.58579 17.0858 5.25 17.5 5.25C17.9142 5.25 18.25 5.58579 18.25 6Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 11.25C18.25 11.6642 17.9142 12 17.5 12C17.0858 12 16.75 11.6642 16.75 11.25C16.75 10.8358 17.0858 10.5 17.5 10.5C17.9142 10.5 18.25 10.8358 18.25 11.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDraft;
