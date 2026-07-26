import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconRunShortcut: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="run-shortcut, slash, skills">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM14.5711 6.5722C14.9454 6.74952 15.1051 7.19672 14.9278 7.57106L10.4278 17.0711C10.2505 17.4454 9.80328 17.6051 9.42894 17.4278C9.05459 17.2505 8.89488 16.8033 9.0722 16.4289L13.5722 6.92894C13.7495 6.55459 14.1967 6.39488 14.5711 6.5722Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M9.75 16.75L14.25 7.25M6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconRunShortcut;
