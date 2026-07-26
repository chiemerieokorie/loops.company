import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconKeyhole: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="keyhole, lock, unlock">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.25 10C15.25 11.2539 14.5399 12.3419 13.5 12.8839V15.75C13.5 16.5784 12.8284 17.25 12 17.25C11.1716 17.25 10.5 16.5784 10.5 15.75V12.8839C9.46005 12.3419 8.75 11.2539 8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.5 12.8839C14.5399 12.3419 15.25 11.2539 15.25 10C15.25 8.20507 13.7949 6.75 12 6.75C10.2051 6.75 8.75 8.20507 8.75 10C8.75 11.2539 9.46005 12.3419 10.5 12.8839V15.75C10.5 16.5784 11.1716 17.25 12 17.25C12.8284 17.25 13.5 16.5784 13.5 15.75V12.8839Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconKeyhole;
