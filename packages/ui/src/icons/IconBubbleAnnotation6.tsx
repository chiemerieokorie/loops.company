import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBubbleAnnotation6: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="bubble-annotation-6, message, chat">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 8.75C2 5.57436 4.57436 3 7.75 3H16.25C19.4256 3 22 5.57436 22 8.75V15.25C22 18.4256 19.4256 21 16.25 21H2.75C2.33579 21 2 20.6642 2 20.25V8.75ZM6.5 12C6.5 12.5523 6.94772 13 7.5 13C8.05228 13 8.5 12.5523 8.5 12C8.5 11.4477 8.05228 11 7.5 11C6.94772 11 6.5 11.4477 6.5 12ZM11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12ZM16.5 13C15.9477 13 15.5 12.5523 15.5 12C15.5 11.4477 15.9477 11 16.5 11C17.0523 11 17.5 11.4477 17.5 12C17.5 12.5523 17.0523 13 16.5 13Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 8.75C2.75 5.98858 4.98858 3.75 7.75 3.75H16.25C19.0114 3.75 21.25 5.98858 21.25 8.75V15.25C21.25 18.0114 19.0114 20.25 16.25 20.25H2.75V8.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 12C6.75 12.4142 7.08579 12.75 7.5 12.75C7.91421 12.75 8.25 12.4142 8.25 12C8.25 11.5858 7.91421 11.25 7.5 11.25C7.08579 11.25 6.75 11.5858 6.75 12ZM11.25 12C11.25 12.4142 11.5858 12.75 12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12ZM15.75 12C15.75 12.4142 16.0858 12.75 16.5 12.75C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25C16.0858 11.25 15.75 11.5858 15.75 12Z"
					fill="currentColor"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="0.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBubbleAnnotation6;
