import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconWebsite: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="website, webbuilder, coding">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M21 17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V7.5H21V17.25ZM10.5303 11.7197C10.2374 11.4268 9.76262 11.4268 9.46973 11.7197L7.46973 13.7197C7.17683 14.0126 7.17683 14.4874 7.46973 14.7803L9.46973 16.7803C9.76262 17.0732 10.2374 17.0732 10.5303 16.7803C10.8232 16.4874 10.8232 16.0126 10.5303 15.7197L9.06055 14.25L10.5303 12.7803C10.8232 12.4874 10.8232 12.0126 10.5303 11.7197ZM14.5303 11.7197C14.2374 11.4268 13.7626 11.4268 13.4697 11.7197C13.1768 12.0126 13.1768 12.4874 13.4697 12.7803L14.9395 14.25L13.4697 15.7197C13.1768 16.0126 13.1768 16.4874 13.4697 16.7803C13.7626 17.0732 14.2374 17.0732 14.5303 16.7803L16.5303 14.7803C16.8232 14.4874 16.8232 14.0126 16.5303 13.7197L14.5303 11.7197Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M17.25 3C19.0642 3 20.5773 4.28834 20.9248 6H3.0752C3.42266 4.28834 4.93579 3 6.75 3H17.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4 7.25H20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10 11.75L8 13.75L10 15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14 11.75L16 13.75L14 15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconWebsite;
