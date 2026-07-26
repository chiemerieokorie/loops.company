import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPullRequestClosedSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="pull-request-closed-simple">
		{variant === "filled" ? (
			<>
				<path
					d="M18 10C18.4142 10 18.75 10.3358 18.75 10.75V14.3242C20.4618 14.6716 21.75 16.1857 21.75 18C21.75 20.0711 20.0711 21.75 18 21.75C15.9289 21.75 14.25 20.0711 14.25 18C14.25 16.1857 15.5382 14.6716 17.25 14.3242V10.75C17.25 10.3358 17.5858 10 18 10Z"
					fill="currentColor"
				/>
				<path
					d="M6 2.25C8.07107 2.25 9.75 3.92893 9.75 6C9.75 7.81421 8.46166 9.32734 6.75 9.6748V20.25C6.75 20.6642 6.41421 21 6 21C5.58579 21 5.25 20.6642 5.25 20.25V9.6748C3.53834 9.32734 2.25 7.81421 2.25 6C2.25 3.92893 3.92893 2.25 6 2.25Z"
					fill="currentColor"
				/>
				<path
					d="M19.7197 3.21973C20.0126 2.92683 20.4874 2.92683 20.7803 3.21973C21.0732 3.51262 21.0732 3.98738 20.7803 4.28027L19.0605 6L20.7803 7.71973C21.0732 8.01262 21.0732 8.48738 20.7803 8.78027C20.4874 9.07317 20.0126 9.07317 19.7197 8.78027L18 7.06055L16.2803 8.78027C15.9874 9.07317 15.5126 9.07317 15.2197 8.78027C14.9268 8.48738 14.9268 8.01262 15.2197 7.71973L16.9395 6L15.2197 4.28027C14.9268 3.98738 14.9268 3.51262 15.2197 3.21973C15.5126 2.92683 15.9874 2.92683 16.2803 3.21973L18 4.93945L19.7197 3.21973Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 20.25V9"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.75 3.75L20.25 8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.25 3.75L15.75 8.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 15V10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPullRequestClosedSimple;
