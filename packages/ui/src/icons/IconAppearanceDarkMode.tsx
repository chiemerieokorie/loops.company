import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAppearanceDarkMode: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="appearance-dark-mode, switch">
		{variant === "filled" ? (
			<>
				<path
					d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16V8Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5V8Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3V8ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16V8Z"
					fill="currentColor"
				/>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAppearanceDarkMode;
