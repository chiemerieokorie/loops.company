import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconEyeOpen: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="eye-open, show, see, reveal, look, visible"
	>
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.0001 4C15.7434 4.00003 19.3963 6.16075 21.9147 10.2948C22.5514 11.34 22.5514 12.66 21.9147 13.7052C19.3963 17.8393 15.7434 20 12.0001 19.9999C8.25676 19.9999 4.60378 17.8392 2.08543 13.7051C1.44874 12.6599 1.44873 11.3399 2.08544 10.2947C4.60378 6.16064 8.25676 3.99997 12.0001 4ZM8.37506 12C8.37506 9.99797 9.99803 8.375 12.0001 8.375C14.0021 8.375 15.6251 9.99797 15.6251 12C15.6251 14.002 14.0021 15.625 12.0001 15.625C9.99803 15.625 8.37506 14.002 8.37506 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M21.2742 10.685C16.4537 2.77174 7.54646 2.77164 2.72595 10.6849C2.23523 11.4904 2.23523 12.5094 2.72595 13.3149C7.54646 21.2282 16.4537 21.2283 21.2742 13.3151C21.7649 12.5095 21.7649 11.4905 21.2742 10.685Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconEyeOpen;
