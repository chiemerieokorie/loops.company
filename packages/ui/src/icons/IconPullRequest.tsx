import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPullRequest: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="pull-request, pr-create">
		{variant === "filled" ? (
			<>
				<path
					d="M6 3C4.34315 3 3 4.34315 3 6C3 7.39788 3.95608 8.57245 5.25 8.90549V15.0945C3.95608 15.4275 3 16.6021 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18C9 16.6021 8.04392 15.4275 6.75 15.0945V8.90549C8.04392 8.57245 9 7.39788 9 6C9 4.34315 7.65685 3 6 3Z"
					fill="currentColor"
				/>
				<path
					d="M13.5607 5.25L14.5303 4.28033C14.8232 3.98744 14.8232 3.51256 14.5303 3.21967C14.2374 2.92678 13.7626 2.92678 13.4697 3.21967L11.2197 5.46967C10.9268 5.76256 10.9268 6.23744 11.2197 6.53033L13.4697 8.78033C13.7626 9.07322 14.2374 9.07322 14.5303 8.78033C14.8232 8.48744 14.8232 8.01256 14.5303 7.71967L13.5607 6.75H15C16.2426 6.75 17.25 7.75736 17.25 9V15.0945C15.9561 15.4275 15 16.6021 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.6021 20.0439 15.4275 18.75 15.0945V9C18.75 6.92893 17.0711 5.25 15 5.25H13.5607Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<circle
					cx="6"
					cy="6"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="6"
					cy="18"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<circle
					cx="18"
					cy="18"
					r="2.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 8.25V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13 6H15C16.6569 6 18 7.34315 18 9V15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14 3.75L11.75 6L14 8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPullRequest;
