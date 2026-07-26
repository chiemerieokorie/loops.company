import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronDownSmall: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-down-small">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.5303 12.4092C12.2374 12.7021 11.7626 12.7021 11.4697 12.4092L8.53033 9.4699C8.23744 9.177 7.76256 9.177 7.46967 9.4699C7.17678 9.76279 7.17678 10.2377 7.46967 10.5306L10.409 13.4699C11.2877 14.3486 12.7123 14.3486 13.591 13.4699L16.5303 10.5306C16.8232 10.2377 16.8232 9.76279 16.5303 9.4699C16.2374 9.177 15.7626 9.177 15.4697 9.4699L12.5303 12.4092Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8 10L10.9393 12.9393C11.5251 13.5251 12.4749 13.5251 13.0607 12.9393L16 10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronDownSmall;
