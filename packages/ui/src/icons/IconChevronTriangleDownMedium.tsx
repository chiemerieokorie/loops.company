import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronTriangleDownMedium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="chevron-triangle-down-medium, dropdown, caret"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M15.1046 9C16.5912 9.00037 17.4007 10.7375 16.4444 11.876L13.3399 15.5713C12.6406 16.4033 11.3595 16.4034 10.6603 15.5713L7.55576 11.876C6.59967 10.7376 7.40916 9.00054 8.89561 9H15.1046Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.104 9.75H8.89599C8.04631 9.75 7.58378 10.7426 8.13028 11.3932L11.2343 15.0884C11.6339 15.5642 12.3661 15.5642 12.7657 15.0884L15.8697 11.3932C16.4162 10.7426 15.9537 9.75 15.104 9.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronTriangleDownMedium;
