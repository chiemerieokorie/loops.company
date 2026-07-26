import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSettingsGear1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="settings-gear-1, preferences">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M10.1289 2.96207C11.2872 2.2952 12.7128 2.2952 13.8711 2.96207L19.1211 5.98477C20.2836 6.65405 21 7.89326 21 9.23461V14.7657C21 16.1071 20.2836 17.3463 19.1211 18.0155L13.871 21.0382C12.7128 21.7051 11.2872 21.7051 10.1289 21.0383L4.87899 18.0158C3.71649 17.3466 3 16.1073 3 14.7659V9.23459C3 7.89323 3.71645 6.65402 4.87891 5.98474L10.1289 2.96207ZM8.37503 12C8.37503 9.99797 9.998 8.375 12 8.375C14.0021 8.375 15.625 9.99797 15.625 12C15.625 14.002 14.0021 15.625 12 15.625C9.998 15.625 8.37503 14.002 8.37503 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.7469 6.63455L13.4969 3.61186C12.5703 3.07836 11.4297 3.07836 10.5031 3.61185L5.25313 6.63453C4.32316 7.16995 3.75 8.16132 3.75 9.23441V14.7658C3.75 15.8389 4.32319 16.8303 5.25319 17.3657L10.5031 20.3881C11.4297 20.9216 12.5702 20.9216 13.4968 20.3881L18.7469 17.3654C19.6769 16.83 20.25 15.8386 20.25 14.7655V9.23443C20.25 8.16135 19.6769 7.16998 18.7469 6.63455Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSettingsGear1;
