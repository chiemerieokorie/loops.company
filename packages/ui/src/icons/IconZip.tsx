import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconZip: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="zip, rar, compressed, archive">
		{variant === "filled" ? (
			<>
				<path
					d="M10.5 16V14.5H13.5V16C13.5 16.8284 12.8284 17.5 12 17.5C11.1716 17.5 10.5 16.8284 10.5 16Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M3 6.75001C2.99999 4.67894 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75L21 17.25C21 19.3211 19.3211 21 17.25 21H6.75001C4.67894 21 3 19.3211 3.00001 17.25L3 6.75001ZM9.75 5C9.33579 5 9 5.33579 9 5.75C9 6.16421 9.33579 6.5 9.75 6.5H14.25C14.6642 6.5 15 6.16421 15 5.75C15 5.33579 14.6642 5 14.25 5H9.75ZM9 9.75C9 9.33579 9.33579 9 9.75 9H14.25C14.6642 9 15 9.33579 15 9.75C15 10.1642 14.6642 10.5 14.25 10.5H9.75C9.33579 10.5 9 10.1642 9 9.75ZM9.75 13C9.33579 13 9 13.3358 9 13.75V16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16V13.75C15 13.3358 14.6642 13 14.25 13H9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.75 3.75001H14.25M9.75 7.75001H14.25M17.25 3.75C18.9069 3.75 20.25 5.09315 20.25 6.75L20.25 17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75001C5.09315 20.25 3.75 18.9069 3.75001 17.25L3.75 6.75001C3.74999 5.09315 5.09314 3.75 6.75 3.75M9.75 11.75H14.25V14C14.25 15.2426 13.2426 16.25 12 16.25C10.7574 16.25 9.75 15.2426 9.75 14V11.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconZip;
