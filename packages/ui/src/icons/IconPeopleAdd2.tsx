import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleAdd2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="people-add-2, user-add, user, person">
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
					d="M20.25 8.75C20.25 8.33579 19.9142 8 19.5 8C19.0858 8 18.75 8.33579 18.75 8.75V10.75H16.75C16.3358 10.75 16 11.0858 16 11.5C16 11.9142 16.3358 12.25 16.75 12.25H18.75V14.25C18.75 14.6642 19.0858 15 19.5 15C19.9142 15 20.25 14.6642 20.25 14.25V12.25H22.25C22.6642 12.25 23 11.9142 23 11.5C23 11.0858 22.6642 10.75 22.25 10.75H20.25V8.75Z"
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
					d="M19.5 8.75V11.5M19.5 11.5V14.25M19.5 11.5H16.75M19.5 11.5H22.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleAdd2;
