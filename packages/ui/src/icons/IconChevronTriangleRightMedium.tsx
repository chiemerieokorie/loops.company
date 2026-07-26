import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronTriangleRightMedium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="chevron-triangle-right-medium, dropdown, caret"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M9 8.89561C9.00054 7.40916 10.7376 6.59967 11.876 7.55576L15.5713 10.6603C16.4034 11.3595 16.4033 12.6406 15.5713 13.3399L11.876 16.4444C10.7375 17.4007 9.00037 16.5912 9 15.1046V8.89561Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.3932 8.13028C10.7426 7.58378 9.75 8.04631 9.75 8.89599V15.104C9.75 15.9537 10.7426 16.4162 11.3932 15.8697L15.0884 12.7657C15.5642 12.3661 15.5642 11.6339 15.0884 11.2343L11.3932 8.13028Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronTriangleRightMedium;
