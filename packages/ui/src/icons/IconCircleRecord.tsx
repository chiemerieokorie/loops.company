import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCircleRecord: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="circle-record, voicemail, band, tape">
		{variant === "filled" ? (
			<>
				<path
					d="M7 12C7 11.1716 7.67157 10.5 8.5 10.5C9.32843 10.5 10 11.1716 10 12C10 12.8284 9.32843 13.5 8.5 13.5C7.67157 13.5 7 12.8284 7 12Z"
					fill="currentColor"
				/>
				<path
					d="M15.5 13.5C16.3284 13.5 17 12.8284 17 12C17 11.1716 16.3284 10.5 15.5 10.5C14.6716 10.5 14 11.1716 14 12C14 12.8284 14.6716 13.5 15.5 13.5Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.5 12C11.5 12.5464 11.3539 13.0587 11.0987 13.5H12.9013C12.6461 13.0587 12.5 12.5464 12.5 12C12.5 10.3431 13.8431 9 15.5 9C17.1569 9 18.5 10.3431 18.5 12C18.5 13.6569 17.1569 15 15.5 15H8.5C6.84315 15 5.5 13.6569 5.5 12C5.5 10.3431 6.84315 9 8.5 9C10.1569 9 11.5 10.3431 11.5 12Z"
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
					d="M10.75 12C10.75 13.2426 9.74264 14.25 8.5 14.25C7.25736 14.25 6.25 13.2426 6.25 12C6.25 10.7574 7.25736 9.75 8.5 9.75C9.74264 9.75 10.75 10.7574 10.75 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.75 12C17.75 13.2426 16.7426 14.25 15.5 14.25C14.2574 14.25 13.25 13.2426 13.25 12C13.25 10.7574 14.2574 9.75 15.5 9.75C16.7426 9.75 17.75 10.7574 17.75 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8.5 14.25H15.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCircleRecord;
