import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPromptTextToVideo: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="prompt-text-to-video">
		{variant === "filled" ? (
			<>
				<path
					d="M17.25 5C19.3211 5 21 6.67893 21 8.75V17.25C21 19.3211 19.3211 21 17.25 21H8.75C6.67893 21 5 19.3211 5 17.25V15.75C5 15.3358 5.33579 15 5.75 15C6.16421 15 6.5 15.3358 6.5 15.75V17.25C6.5 18.4926 7.50736 19.5 8.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V8.75C19.5 7.50736 18.4926 6.5 17.25 6.5H14.75C14.3358 6.5 14 6.16421 14 5.75C14 5.33579 14.3358 5 14.75 5H17.25Z"
					fill="currentColor"
				/>
				<path
					d="M11 10.4727C11.0001 9.8598 11.6957 9.50572 12.1914 9.86621L15.666 12.3936C16.0778 12.6931 16.0778 13.3069 15.666 13.6064L12.1914 16.1338C11.6957 16.4943 11.0001 16.1402 11 15.5273V10.4727Z"
					fill="currentColor"
				/>
				<path
					d="M10.25 3C10.6642 3 11 3.33579 11 3.75V5C11 5.41421 10.6642 5.75 10.25 5.75C9.83579 5.75 9.5 5.41421 9.5 5V4.5H6.75V10.5H7.25C7.66421 10.5 8 10.8358 8 11.25C8 11.6642 7.66421 12 7.25 12H4.75C4.33579 12 4 11.6642 4 11.25C4 10.8358 4.33579 10.5 4.75 10.5H5.25V4.5H2.5V5C2.5 5.41421 2.16421 5.75 1.75 5.75C1.33579 5.75 1 5.41421 1 5V3.75C1 3.33579 1.33579 3 1.75 3H10.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11 15.5272V10.4728C11 9.85986 11.6954 9.50575 12.1911 9.86628L15.666 12.3934C16.0778 12.693 16.0778 13.307 15.666 13.6066L12.1911 16.1337C11.6954 16.4943 11 16.1401 11 15.5272Z"
					fill="currentColor"
				/>
				<path
					d="M5.75 15.75V17.25C5.75 18.9069 7.09315 20.25 8.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V8.75C20.25 7.09315 18.9069 5.75 17.25 5.75H14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 5V3.75H6H10.25V5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.99994 3.75V11.25M5.99994 11.25H4.75M5.99994 11.25H7.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPromptTextToVideo;
