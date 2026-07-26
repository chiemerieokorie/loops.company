import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronTopSmall: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="chevron-top-small">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M12.5303 11.5908C12.2374 11.2979 11.7626 11.2979 11.4697 11.5908L8.53033 14.5301C8.23744 14.823 7.76256 14.823 7.46967 14.5301C7.17678 14.2372 7.17678 13.7623 7.46967 13.4694L10.409 10.5301C11.2877 9.65142 12.7123 9.65143 13.591 10.5301L16.5303 13.4694C16.8232 13.7623 16.8232 14.2372 16.5303 14.5301C16.2374 14.823 15.7626 14.823 15.4697 14.5301L12.5303 11.5908Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8 13.9998L10.9393 11.0604C11.5251 10.4746 12.4749 10.4746 13.0607 11.0604L16 13.9998"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronTopSmall;
