import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPeopleRemove: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="people-remove, user-remove">
		{variant === "filled" ? (
			<>
				<path
					d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z"
					fill="currentColor"
				/>
				<path
					d="M4.33528 16.2569C5.70298 13.713 8.2996 12 11.5625 12C13.7084 12 15.5661 12.7409 16.9755 13.9718C16.1382 13.5691 15.1032 13.7148 14.409 14.409C13.5303 15.2877 13.5303 16.7123 14.409 17.591L14.818 18L14.409 18.409C13.8416 18.9764 13.6406 19.7713 13.806 20.5H7.35775C6.25807 20.5 5.23893 20.0105 4.61542 19.2348C3.97372 18.4365 3.75872 17.3293 4.33528 16.2569Z"
					fill="currentColor"
				/>
				<path
					d="M20.5303 16.5303C20.8232 16.2374 20.8232 15.7626 20.5303 15.4697C20.2374 15.1768 19.7626 15.1768 19.4697 15.4697L18 16.9393L16.5303 15.4697C16.2374 15.1768 15.7626 15.1768 15.4697 15.4697C15.1768 15.7626 15.1768 16.2374 15.4697 16.5303L16.9393 18L15.4697 19.4697C15.1768 19.7626 15.1768 20.2374 15.4697 20.5303C15.7626 20.8232 16.2374 20.8232 16.5303 20.5303L18 19.0607L19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.0607 18L20.5303 16.5303Z"
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
					d="M12.2497 20.25H7.79494C6.02717 20.25 4.59593 18.6691 5.43304 17.1121C6.67402 14.8039 9.02123 13.25 11.9997 13.25C12.4297 13.25 12.8465 13.2824 13.2488 13.3448"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20 16L18 18M18 18L16 20M18 18L16 16M18 18L20 20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPeopleRemove;
