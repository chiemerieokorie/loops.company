import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRemoveBackground2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="remove-background-2">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 1C12.4142 1 12.75 1.33579 12.75 1.75V3H17.25L17.4434 3.00488C19.4246 3.10551 21 4.74378 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H12.75V22.25C12.75 22.6642 12.4142 23 12 23C11.5858 23 11.25 22.6642 11.25 22.25V21H6.75C4.74378 21 3.10551 19.4246 3.00488 17.4434L3 17.25V6.75C3 5.76565 3.37962 4.8702 4 4.20117V4H4.20215C4.87112 3.37991 5.7659 3 6.75 3H11.25V1.75C11.25 1.33579 11.5858 1 12 1ZM8 8H4.5V12H8V16H4.5V17.25L4.51172 17.4805C4.62714 18.6148 5.58517 19.5 6.75 19.5H8V16H11.25V12H8V8H11.25V4.5H8V8Z"
					fill="currentColor"
					fillRule="evenodd"
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
				<path d="M8 4V8H4V4H8Z" fill="currentColor" />
				<path d="M12 8V12H8V8H12Z" fill="currentColor" />
				<path d="M8 12V16H4V12H8Z" fill="currentColor" />
				<path d="M12 16V20H8V16H12Z" fill="currentColor" />
				<path
					d="M12 1.75V22.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRemoveBackground2;
