import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconGovernment: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="government, bank, building">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M14.25 0C14.6642 0 15 0.335786 15 0.75V2.25L14.9961 2.32715C14.9575 2.70512 14.6382 3 14.25 3H12.75V4.0332C16.6963 4.35885 19.9184 7.2287 20.7744 11H21.25C21.6642 11 22 11.3358 22 11.75C22 12.1642 21.6642 12.5 21.25 12.5H20.9854C20.9944 12.6655 21 12.8322 21 13V19.5H21.25C21.6642 19.5 22 19.8358 22 20.25C22 20.6642 21.6642 21 21.25 21H2.75C2.33579 21 2 20.6642 2 20.25C2 19.8358 2.33579 19.5 2.75 19.5H3V13C3 12.8322 3.00558 12.6655 3.01465 12.5H2.75C2.33579 12.5 2 12.1642 2 11.75C2 11.3358 2.33579 11 2.75 11H3.22559C4.08159 7.2287 7.30369 4.35885 11.25 4.0332V0.75C11.25 0.335786 11.5858 0 12 0H14.25ZM4.51855 12.5C4.50767 12.6653 4.5 12.8319 4.5 13V19.5H8.5V12.5H4.51855ZM10 12.5V19.5H14V12.5H10ZM15.5 12.5V19.5H19.5V13C19.5 12.8319 19.4923 12.6653 19.4814 12.5H15.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.75 12V20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.25 12V20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 19.5V13C3.75 8.44365 7.44365 4.75 12 4.75C16.5563 4.75 20.25 8.44365 20.25 13V19.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 4.5V0.75H14.25V2.25H12.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 20.25H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 11.75H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconGovernment;
