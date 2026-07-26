import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSettingsToggle1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="settings-toggle-1">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 12C1 8.13401 4.13401 5 8 5H16C19.866 5 23 8.13401 23 12C23 15.866 19.866 19 16 19H8C4.13401 19 1 15.866 1 12ZM12.375 12C12.375 9.99797 13.998 8.375 16 8.375C18.002 8.375 19.625 9.99797 19.625 12C19.625 14.002 18.002 15.625 16 15.625C13.998 15.625 12.375 14.002 12.375 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M1.75 12C1.75 8.54822 4.54822 5.75 8 5.75H16C19.4518 5.75 22.25 8.54822 22.25 12C22.25 15.4518 19.4518 18.25 16 18.25H8C4.54822 18.25 1.75 15.4518 1.75 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M12.75 12C12.75 10.2051 14.2051 8.75 16 8.75C17.7949 8.75 19.25 10.2051 19.25 12C19.25 13.7949 17.7949 15.25 16 15.25C14.2051 15.25 12.75 13.7949 12.75 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSettingsToggle1;
