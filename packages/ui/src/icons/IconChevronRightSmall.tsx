import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronRightSmall: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-right-small">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967L13.4697 10.409C14.3483 11.2877 14.3484 12.7123 13.4697 13.591L10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303C9.17678 16.2374 9.17678 15.7626 9.46967 15.4697L12.409 12.5303C12.7019 12.2374 12.7019 11.7626 12.409 11.4697L9.46967 8.53033C9.17678 8.23744 9.17678 7.76256 9.46967 7.46967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10 16L12.9393 13.0607C13.5251 12.4749 13.5251 11.5251 12.9393 10.9393L10 8"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronRightSmall;
