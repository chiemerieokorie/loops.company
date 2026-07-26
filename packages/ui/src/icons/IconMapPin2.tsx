import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMapPin2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="map-pin-2, location">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 2C16.4183 2 20 5.58172 20 10C20 14.7862 15 17.5 13.1084 21.3418C12.8831 21.7444 12.4613 22 12 22C11.5387 22 11.0954 21.7557 10.8916 21.3418C9 17.5 4 14.7862 4 10C4 5.58172 7.58172 2 12 2ZM12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M19.5 10.15C19.5 6.06309 16.1421 2.75 12 2.75C7.85786 2.75 4.5 6.06309 4.5 10.15C4.5 14.5772 9.1875 17.0875 10.9609 20.6412C11.1519 21.024 11.5675 21.25 12 21.25C12.4325 21.25 12.8279 21.0135 13.0391 20.6412C14.8125 17.0875 19.5 14.5772 19.5 10.15Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M8.75 10.25C8.75 8.45507 10.2051 7 12 7C13.7949 7 15.25 8.45507 15.25 10.25C15.25 12.0449 13.7949 13.5 12 13.5C10.2051 13.5 8.75 12.0449 8.75 10.25Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMapPin2;
