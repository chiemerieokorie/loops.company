import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronBottom: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-bottom">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L10.409 14.3484C11.2877 15.227 12.7123 15.227 13.591 14.3483L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L14.6517 15.409C13.1872 16.8735 10.8128 16.8735 9.34837 15.409L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20 9L14.1213 14.8787C12.9498 16.0503 11.0503 16.0503 9.8787 14.8787L4 9"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronBottom;
