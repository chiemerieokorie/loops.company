import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUnlocked2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="unlocked-2, unlock, private">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 1.5C14.1061 1.5 15.8906 2.87007 16.5137 4.76562C16.643 5.15912 16.4286 5.58354 16.0352 5.71289C15.6417 5.84222 15.2172 5.62785 15.0879 5.23438C14.6611 3.93603 13.4391 3 12 3C10.2051 3 8.75 4.45507 8.75 6.25V7.23828C9.75341 6.76736 10.8563 6.5 12 6.5C16.2802 6.5 20 10.2198 20 14.5C20 18.7802 16.2802 22.5 12 22.5C7.71979 22.5 4 18.7802 4 14.5C4 11.9685 5.30128 9.63325 7.25 8.14746V6.25C7.25 3.62665 9.37665 1.5 12 1.5ZM12 12C11.5858 12 11.25 12.3358 11.25 12.75V16.25C11.25 16.6642 11.5858 17 12 17C12.4142 17 12.75 16.6642 12.75 16.25V12.75C12.75 12.3358 12.4142 12 12 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 14.5C4.75 10.634 8.13401 7.25 12 7.25C15.866 7.25 19.25 10.634 19.25 14.5C19.25 18.366 15.866 21.75 12 21.75C8.13401 21.75 4.75 18.366 4.75 14.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 12.75V16.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M8 8.25V6.25C8 4.04086 9.79086 2.25 12 2.25C13.7726 2.25 15.2759 3.40303 15.8008 5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUnlocked2;
