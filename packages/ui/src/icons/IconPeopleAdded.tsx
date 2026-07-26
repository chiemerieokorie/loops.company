import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleAdded: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="people-added, user-added">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z"
					fill="currentColor"
				/>
				<path
					d="M17.6588 14.6957C16.2227 13.3313 14.273 12.5 12 12.5C8.7371 12.5 6.14048 14.213 4.77278 16.7569C4.19622 17.8293 4.41122 18.9365 5.05292 19.7348C5.67643 20.5105 6.69557 21 7.79525 21H14.2001L13.4001 20.4C12.406 19.6544 12.2045 18.2441 12.9501 17.25C13.6957 16.2559 15.106 16.0544 16.1001 16.8L16.3043 16.9531L17.6588 14.6957Z"
					fill="currentColor"
				/>
				<path
					d="M20.8932 15.1359C21.1063 14.7807 20.9911 14.32 20.6359 14.1069C20.2807 13.8938 19.82 14.0089 19.6069 14.3641L16.7348 19.151L15.2 18C14.8687 17.7515 14.3986 17.8186 14.15 18.15C13.9015 18.4814 13.9687 18.9515 14.3 19.2L16.5 20.85C16.6699 20.9774 16.8858 21.0268 17.0942 20.986C17.3026 20.9452 17.4839 20.8179 17.5932 20.6359L20.8932 15.1359Z"
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
					d="M14.75 18.6L16.95 20.25L20.25 14.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.25 20.25H7.79525C6.02749 20.25 4.59624 18.6691 5.43335 17.1121C6.67433 14.8039 9.02155 13.25 12 13.25C13.0928 13.25 14.1006 13.4592 15 13.838"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleAdded;
