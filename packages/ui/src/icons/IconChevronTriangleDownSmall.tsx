import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronTriangleDownSmall: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="chevron-triangle-down-small, dropdown, caret"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M9.8007 10.25C8.74816 10.25 8.16683 11.4713 8.83056 12.2882L11.0301 14.9953C11.5303 15.611 12.4701 15.611 12.9704 14.9953L15.1699 12.2882C15.8336 11.4713 15.2523 10.25 14.1997 10.25H9.8007Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.5876 11.8153C14.8531 11.4885 14.6205 11 14.1995 11H9.80049C9.37947 11 9.14694 11.4885 9.41243 11.8153L11.6119 14.5224C11.812 14.7687 12.188 14.7687 12.3881 14.5224L14.5876 11.8153Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronTriangleDownSmall;
