import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleRemove2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="people-remove-2">
		{variant === "filled" ? (
			<>
				<path
					d="M6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5Z"
					fill="currentColor"
				/>
				<path
					d="M3.77277 16.7569C5.14047 14.213 7.73708 12.5 11 12.5C14.2629 12.5 16.8595 14.213 18.2272 16.7569C18.8038 17.8293 18.5888 18.9365 17.9471 19.7348C17.3236 20.5105 16.3044 21 15.2047 21H6.79526C5.69558 21 4.67643 20.5105 4.05292 19.7348C3.41122 18.9365 3.19622 17.8293 3.77277 16.7569Z"
					fill="currentColor"
				/>
				<path
					d="M17.75 10.5C17.3358 10.5 17 10.8358 17 11.25C17 11.6642 17.3358 12 17.75 12H22.25C22.6642 12 23 11.6642 23 11.25C23 10.8358 22.6642 10.5 22.25 10.5H17.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.75 6.5C14.75 8.57107 13.0711 10.25 11 10.25C8.92893 10.25 7.25 8.57107 7.25 6.5C7.25 4.42893 8.92893 2.75 11 2.75C13.0711 2.75 14.75 4.42893 14.75 6.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M10.9997 13.25C8.02123 13.25 5.67402 14.8039 4.43304 17.1121C3.59593 18.6691 5.02717 20.25 6.79494 20.25H15.2044C16.9722 20.25 18.4034 18.6691 17.5663 17.1121C16.3254 14.8039 13.9781 13.25 10.9997 13.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M17.75 11.25H22.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleRemove2;
