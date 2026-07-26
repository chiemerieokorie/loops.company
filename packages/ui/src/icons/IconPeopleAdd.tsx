import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleAdd: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="people-add, user-add">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z"
					fill="currentColor"
				/>
				<path
					d="M4.77278 16.7569C6.14048 14.213 8.7371 12.5 12 12.5C13.7224 12.5 15.2592 12.9774 16.5275 13.8023C16.1983 14.1936 16 14.6986 16 15.25V16H15.25C14.0074 16 13 17.0074 13 18.25C13 19.4926 14.0074 20.5 15.25 20.5H16V21H7.79525C6.69557 21 5.67643 20.5105 5.05292 19.7348C4.41122 18.9365 4.19622 17.8293 4.77278 16.7569Z"
					fill="currentColor"
				/>
				<path
					d="M19 15.25C19 14.8358 18.6642 14.5 18.25 14.5C17.8358 14.5 17.5 14.8358 17.5 15.25V17.5H15.25C14.8358 17.5 14.5 17.8358 14.5 18.25C14.5 18.6642 14.8358 19 15.25 19H17.5V21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25V19H21.25C21.6642 19 22 18.6642 22 18.25C22 17.8358 21.6642 17.5 21.25 17.5H19V15.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.9997 13.838C14.1003 13.4592 13.0925 13.25 11.9997 13.25C9.02123 13.25 6.67402 14.8039 5.43304 17.1121C4.59593 18.6691 6.02717 20.25 7.79494 20.25H12.2497"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 15.25V18.25M18.25 18.25V21.25M18.25 18.25H15.25M18.25 18.25H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleAdd;
