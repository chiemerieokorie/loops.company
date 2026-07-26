import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconConsole: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="console, terminal">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM6.71967 7.21967C7.01256 6.92678 7.48744 6.92678 7.78033 7.21967L9.53033 8.96967C9.82322 9.26256 9.82322 9.73744 9.53033 10.0303L7.78033 11.7803C7.48744 12.0732 7.01256 12.0732 6.71967 11.7803C6.42678 11.4874 6.42678 11.0126 6.71967 10.7197L7.93934 9.5L6.71967 8.28033C6.42678 7.98744 6.42678 7.51256 6.71967 7.21967ZM10.75 10.5C10.3358 10.5 10 10.8358 10 11.25C10 11.6642 10.3358 12 10.75 12H12.75C13.1642 12 13.5 11.6642 13.5 11.25C13.5 10.8358 13.1642 10.5 12.75 10.5H10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M7.25 7.75L9 9.5L7.25 11.25M10.75 11.25H12.75M6.75 20.25H17.25C18.9069 20.25 20.25 18.9069 20.25 17.25V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H6.75C5.09315 3.75 3.75 5.09315 3.75 6.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconConsole;
