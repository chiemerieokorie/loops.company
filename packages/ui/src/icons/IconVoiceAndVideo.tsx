import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVoiceAndVideo: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="voice-and-video, media">
		{variant === "filled" ? (
			<>
				<path
					d="M7 4C4.79086 4 3 5.79086 3 8V13C3 15.2091 4.79086 17 7 17C9.20914 17 11 15.2091 11 13V8C11 5.79086 9.20914 4 7 4Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M13.75 5C13.3358 5 13 5.33579 13 5.75C13 6.16421 13.3358 6.5 13.75 6.5H16.25C17.4926 6.5 18.5 7.50736 18.5 8.75V15.25C18.5 16.4926 17.4926 17.5 16.25 17.5H15.75C15.3358 17.5 15 17.8358 15 18.25C15 18.6642 15.3358 19 15.75 19H16.25C18.3211 19 20 17.3211 20 15.25V15.2274L21.4734 15.9571C22.6365 16.5331 24 15.6868 24 14.3888V9.61114C24 8.31314 22.6365 7.46687 21.4734 8.04292L20 8.77258V8.75C20 6.67893 18.3211 5 16.25 5H13.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
				<path
					d="M1.5 12.75C1.5 12.3358 1.16421 12 0.75 12C0.335786 12 0 12.3358 0 12.75C0 16.7261 3.10655 20 7 20C10.8934 20 14 16.7261 14 12.75C14 12.3358 13.6642 12 13.25 12C12.8358 12 12.5 12.3358 12.5 12.75C12.5 15.9536 10.0101 18.5 7 18.5C3.98989 18.5 1.5 15.9536 1.5 12.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13.75 5.75H16.25C17.9069 5.75 19.25 7.09315 19.25 8.75V15.25C19.25 16.9069 17.9069 18.25 16.25 18.25H15.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="16"
					strokeWidth="1.5"
				/>
				<path
					d="M13.25 12.75C13.25 16.3399 10.4518 19.25 7 19.25C3.54822 19.25 0.75 16.3399 0.75 12.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="16"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 8C3.75 6.20507 5.20507 4.75 7 4.75C8.79493 4.75 10.25 6.20507 10.25 8V13C10.25 14.7949 8.79493 16.25 7 16.25C5.20507 16.25 3.75 14.7949 3.75 13V8Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="16"
					strokeWidth="1.5"
				/>
				<path
					d="M19.5 9.85713L21.8062 8.71501C22.4709 8.38584 23.25 8.86942 23.25 9.61114V14.3888C23.25 15.1306 22.4709 15.6141 21.8062 15.285L19.5 14.1428"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="16"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVoiceAndVideo;
