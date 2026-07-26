import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMouseClassic: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="mouse-classic, click">
		{variant === "filled" ? (
			<>
				<path
					d="M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V10.5H19V15Z"
					fill="currentColor"
				/>
				<path
					d="M11.25 9H5C5 5.38739 7.73669 2.41428 11.25 2.04004V9Z"
					fill="currentColor"
				/>
				<path
					d="M12.75 2.04004C16.2633 2.41428 19 5.38739 19 9H12.75V2.04004Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 9C5.75 5.54822 8.54822 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9V15C18.25 18.4518 15.4518 21.25 12 21.25C8.54822 21.25 5.75 18.4518 5.75 15V9Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 2.75V9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 9.75H18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMouseClassic;
