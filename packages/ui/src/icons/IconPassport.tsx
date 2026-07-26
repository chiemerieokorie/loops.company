import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPassport: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="passport, visa">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.5 6.25C3.5 4.17893 5.17893 2.5 7.25 2.5H16.75C18.8211 2.5 20.5 4.17893 20.5 6.25V17.75C20.5 19.8211 18.8211 21.5 16.75 21.5H7.25C5.17893 21.5 3.5 19.8211 3.5 17.75V6.25ZM12 8.25C10.7574 8.25 9.75 9.25736 9.75 10.5C9.75 11.7426 10.7574 12.75 12 12.75C13.2426 12.75 14.25 11.7426 14.25 10.5C14.25 9.25736 13.2426 8.25 12 8.25ZM8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 12.5711 14.0711 14.25 12 14.25C9.92893 14.25 8.25 12.5711 8.25 10.5ZM8.5 16.25C8.5 15.8358 8.83579 15.5 9.25 15.5H14.75C15.1642 15.5 15.5 15.8358 15.5 16.25C15.5 16.6642 15.1642 17 14.75 17H9.25C8.83579 17 8.5 16.6642 8.5 16.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.25 16.25H14.75M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM7.25 20.75H16.75C18.4069 20.75 19.75 19.4069 19.75 17.75V6.25C19.75 4.59315 18.4069 3.25 16.75 3.25H7.25C5.59315 3.25 4.25 4.59315 4.25 6.25V17.75C4.25 19.4069 5.59315 20.75 7.25 20.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPassport;
