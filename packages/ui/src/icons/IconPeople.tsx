import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeople: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="people, user, person, avatar">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z"
					fill="currentColor"
				/>
				<path
					d="M12 12.5C8.73708 12.5 6.14047 14.213 4.77277 16.7569C4.19622 17.8293 4.41122 18.9365 5.05292 19.7348C5.67643 20.5105 6.69558 21 7.79526 21H16.2047C17.3044 21 18.3236 20.5105 18.9471 19.7348C19.5888 18.9365 19.8038 17.8293 19.2272 16.7569C17.8595 14.213 15.2629 12.5 12 12.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.9997 13.25C9.02123 13.25 6.67402 14.8039 5.43304 17.1121C4.59593 18.6691 6.02717 20.25 7.79494 20.25H16.2044C17.9722 20.25 19.4034 18.6691 18.5663 17.1121C17.3254 14.8039 14.9781 13.25 11.9997 13.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeople;
