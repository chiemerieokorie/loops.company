import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHomeCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="home-circle">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.1289 1.9619C11.2872 1.29501 12.7128 1.29501 13.8711 1.9619L19.1211 4.98462C20.2836 5.65391 21 6.89311 21 8.23446V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V8.23446C3 6.89311 3.71644 5.65391 4.87888 4.98462L10.1289 1.9619ZM8.75 12.25C8.75 10.4551 10.2051 9 12 9C13.7949 9 15.25 10.4551 15.25 12.25C15.25 14.0449 13.7949 15.5 12 15.5C10.2051 15.5 8.75 14.0449 8.75 12.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 8.23446C3.75 7.16138 4.32315 6.17002 5.25311 5.63459L10.5031 2.61186C11.4297 2.07835 12.5703 2.07835 13.4969 2.61186L18.7469 5.63459C19.6768 6.17002 20.25 7.16138 20.25 8.23446V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V8.23446Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M15 12.25C15 13.9069 13.6569 15.25 12 15.25C10.3431 15.25 9 13.9069 9 12.25C9 10.5931 10.3431 9.25 12 9.25C13.6569 9.25 15 10.5931 15 12.25Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHomeCircle;
