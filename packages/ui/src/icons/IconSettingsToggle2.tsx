import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSettingsToggle2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="settings-toggle-2">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 11.75C1 8.57436 3.57436 6 6.75 6H17.25C20.4256 6 23 8.57436 23 11.75V12.25C23 15.4256 20.4256 18 17.25 18H6.75C3.57436 18 1 15.4256 1 12.25V11.75ZM17 7.5C14.5147 7.5 12.5 9.51472 12.5 12C12.5 14.4853 14.5147 16.5 17 16.5C19.4853 16.5 21.5 14.4853 21.5 12C21.5 9.51472 19.4853 7.5 17 7.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M1.75 12C1.75 9.10051 4.10051 6.75 7 6.75H17C19.8995 6.75 22.25 9.10051 22.25 12C22.25 14.8995 19.8995 17.25 17 17.25H7C4.10051 17.25 1.75 14.8995 1.75 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M11.75 12C11.75 9.10051 14.1005 6.75 17 6.75C19.8995 6.75 22.25 9.10051 22.25 12C22.25 14.8995 19.8995 17.25 17 17.25C14.1005 17.25 11.75 14.8995 11.75 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSettingsToggle2;
