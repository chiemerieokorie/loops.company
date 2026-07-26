import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronTop: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-top">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M13.591 9.65168C12.7123 8.773 11.2877 8.77301 10.409 9.65169L4.53033 15.5304C4.23744 15.8233 3.76256 15.8233 3.46967 15.5304C3.17678 15.2375 3.17678 14.7626 3.46967 14.4697L9.34833 8.59103C10.8128 7.12656 13.1872 7.12656 14.6516 8.59102L20.5303 14.4697C20.8232 14.7626 20.8232 15.2375 20.5303 15.5304C20.2374 15.8233 19.7626 15.8233 19.4697 15.5304L13.591 9.65168Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4 15L9.87866 9.12136C11.0502 7.94978 12.9497 7.94978 14.1213 9.12135L20 15"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronTop;
