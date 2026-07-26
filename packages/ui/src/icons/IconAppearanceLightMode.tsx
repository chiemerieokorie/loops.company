import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAppearanceLightMode: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="appearance-light-mode, switch">
		{variant === "filled" ? (
			<>
				<path
					d="M12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8V16Z"
					fill="currentColor"
				/>
				<path
					clipRule="evenodd"
					d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5V16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V3.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16V21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3V8ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V8Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAppearanceLightMode;
