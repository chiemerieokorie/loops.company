import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEmojiSleep: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="emoji-sleep,snooze">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7.28033 9.71967C6.98744 9.42678 6.51256 9.42678 6.21967 9.71967C5.92678 10.0126 5.92678 10.4874 6.21967 10.7803C6.79912 11.3598 7.72698 11.5625 8.5 11.5625C9.27302 11.5625 10.2009 11.3598 10.7803 10.7803C11.0732 10.4874 11.0732 10.0126 10.7803 9.71967C10.4874 9.42678 10.0126 9.42678 9.71967 9.71967C9.54912 9.89022 9.10198 10.0625 8.5 10.0625C7.89802 10.0625 7.45088 9.89022 7.28033 9.71967ZM14.2803 9.71967C13.9874 9.42678 13.5126 9.42678 13.2197 9.71967C12.9268 10.0126 12.9268 10.4874 13.2197 10.7803C13.7991 11.3598 14.727 11.5625 15.5 11.5625C16.273 11.5625 17.2009 11.3598 17.7803 10.7803C18.0732 10.4874 18.0732 10.0126 17.7803 9.71967C17.4874 9.42678 17.0126 9.42678 16.7197 9.71967C16.5491 9.89022 16.102 10.0625 15.5 10.0625C14.898 10.0625 14.4509 9.89022 14.2803 9.71967ZM10.0561 15.0119C9.66892 14.8647 9.2357 15.0592 9.08846 15.4464C8.94122 15.8335 9.13571 16.2667 9.52286 16.414C11.2268 17.062 12.7732 17.062 14.4771 16.414C14.8643 16.2667 15.0588 15.8335 14.9115 15.4464C14.7643 15.0592 14.3311 14.8647 13.9439 15.0119C12.5835 15.5294 11.4165 15.5294 10.0561 15.0119Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.78906 15.713C11.3212 16.2957 12.6779 16.2957 14.2101 15.713"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 10.25C7.5 11 9.5 11 10.25 10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.75 10.25C14.5 11 16.5 11 17.25 10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEmojiSleep;
