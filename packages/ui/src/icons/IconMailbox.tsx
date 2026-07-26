import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMailbox: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="mailbox, inbox">
		{variant === "filled" ? (
			<>
				<path
					d="M17.5 4C19.9853 4 22 6.01472 22 8.5V18.25C22 19.2165 21.2165 20 20.25 20H14V21.25C14 21.6642 13.6642 22 13.25 22C12.8358 22 12.5 21.6642 12.5 21.25V8.5C12.5 6.70744 11.7131 5.09944 10.4668 4H17.5Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M6.5 4C8.98528 4 11 6.01472 11 8.5V18.25C11 19.2165 10.2165 20 9.25 20H3.75C2.7835 20 2 19.2165 2 18.25L2 8.5C2 6.09234 3.89083 4.12632 6.26855 4.00586L6.5 4ZM5 9C4.58579 9 4.25 9.33579 4.25 9.75C4.25 10.1642 4.58579 10.5 5 10.5H8C8.41421 10.5 8.75 10.1642 8.75 9.75C8.75 9.33579 8.41421 9 8 9H5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.5 19.25H10.25C11.3545 19.25 12.25 18.3546 12.25 17.25V9.25C12.25 6.76472 10.2353 4.75 7.74998 4.75H7.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.25 21.25V19.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M16.75 4.75H7.25C4.76472 4.75 2.75 6.76472 2.75 9.25V17.25C2.75 18.3546 3.64543 19.25 4.75 19.25H19.25C20.3546 19.25 21.25 18.3546 21.25 17.25V9.25C21.25 6.76472 19.2353 4.75 16.75 4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 9.75H9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMailbox;
