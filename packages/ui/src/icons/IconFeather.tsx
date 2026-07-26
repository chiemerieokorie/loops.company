import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFeather: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="feather, writing">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M19.3448 2.93773C20.0133 3.67015 20.2394 4.74614 19.6965 5.78931C18.9571 7.21017 17.8683 8.37116 16.987 9.16606C16.7001 9.42483 16.4318 9.64788 16.1995 9.83161C17.2024 10.8162 17.6401 12.3699 16.7192 13.6986C15.2194 15.8623 11.9639 18.8621 5.58501 18.8798C5.52766 19.6638 5.5 20.4558 5.5 21.25C5.5 21.6642 5.16421 22 4.75 22C4.33579 22 4 21.6642 4 21.25C4 16.9503 4.7775 12.5888 6.73674 9.07687C8.71081 5.53834 11.8792 2.8799 16.5674 2.0508C17.6545 1.85853 18.6946 2.22532 19.3448 2.93773Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 21.25C4.75 12.8054 7.81189 4.36086 16.698 2.78935C18.3899 2.49014 19.8093 3.94796 19.0312 5.44309C17.6673 8.06393 14.9611 9.80959 14.9611 9.80959L15.3435 10.0871C16.4025 10.8556 16.842 12.2048 16.1028 13.2713C14.7169 15.2708 11.6627 18.1299 5.52834 18.1299"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFeather;
