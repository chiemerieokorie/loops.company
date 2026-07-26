import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconUnderline: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="underline">
		{variant === "filled" ? (
			<>
				<path
					d="M6.5 3.75C6.5 3.33579 6.16421 3 5.75 3C5.33579 3 5 3.33579 5 3.75V12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12V3.75C19 3.33579 18.6642 3 18.25 3C17.8358 3 17.5 3.33579 17.5 3.75V12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12V3.75Z"
					fill="currentColor"
				/>
				<path
					d="M5.75 20C5.33579 20 5 20.3358 5 20.75C5 21.1642 5.33579 21.5 5.75 21.5H18.25C18.6642 21.5 19 21.1642 19 20.75C19 20.3358 18.6642 20 18.25 20H5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 20.75H18.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.75 3.75V12C5.75 15.4518 8.54822 18.25 12 18.25C15.4518 18.25 18.25 15.4518 18.25 12V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconUnderline;
