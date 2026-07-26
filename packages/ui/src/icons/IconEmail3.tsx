import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEmail3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="email-3, envelope">
		{variant === "filled" ? (
			<>
				<path
					d="M21.9844 7.41638C21.8156 5.50159 20.2077 4 18.249 4H5.74903C3.7904 4 2.18248 5.50159 2.01367 7.41637C4.58491 9.94212 8.11004 11.5 11.999 11.5C15.888 11.5 19.4132 9.94212 21.9844 7.41638Z"
					fill="currentColor"
				/>
				<path
					d="M22 9.4187C19.2802 11.6564 15.797 13 12 13C8.20301 13 4.71984 11.6564 2 9.4187V16.25C2 18.3211 3.67893 20 5.75 20H18.25C20.3211 20 22 18.3211 22 16.25V9.4187Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21.001 9.25C18.4937 11.1337 15.377 12.25 11.9995 12.25C8.62204 12.25 5.50528 11.1337 2.99805 9.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEmail3;
