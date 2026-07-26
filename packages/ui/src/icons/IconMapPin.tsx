import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMapPin: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="map-pin, location">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 12.29 19.0635 14.4327 17.8969 16.2215C16.7265 18.016 15.2865 19.5125 14.19 20.5255C12.9407 21.6797 11.0593 21.6797 9.81002 20.5255C8.71352 19.5125 7.27353 18.016 6.10314 16.2215C4.93646 14.4327 4 12.29 4 10ZM8.875 10C8.875 8.27411 10.2741 6.875 12 6.875C13.7259 6.875 15.125 8.27411 15.125 10C15.125 11.7259 13.7259 13.125 12 13.125C10.2741 13.125 8.875 11.7259 8.875 10Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M14.75 10C14.75 11.5188 13.5188 12.75 12 12.75C10.4812 12.75 9.25 11.5188 9.25 10C9.25 8.48122 10.4812 7.25 12 7.25C13.5188 7.25 14.75 8.48122 14.75 10Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M19.25 10C19.25 14.1772 15.8227 17.996 13.681 19.9746C12.7191 20.8633 11.2809 20.8633 10.319 19.9746C8.17726 17.996 4.75 14.1772 4.75 10C4.75 5.99594 7.99594 2.75 12 2.75C16.0041 2.75 19.25 5.99594 19.25 10Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMapPin;
