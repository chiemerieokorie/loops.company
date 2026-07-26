import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronTriangleLeftMedium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="chevron-triangle-left-medium, dropdown, caret"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M12.124 7.55579C13.2624 6.59964 14.9995 7.40917 15 8.89563V15.1046C14.9996 16.5912 13.2624 17.4007 12.124 16.4445L8.4287 13.34C7.59673 12.6406 7.59664 11.3595 8.4287 10.6603L12.124 7.55579Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12.6068 8.13028C13.2574 7.58378 14.25 8.04631 14.25 8.89599V15.104C14.25 15.9537 13.2574 16.4162 12.6068 15.8697L8.91155 12.7657C8.43581 12.3661 8.43581 11.6339 8.91155 11.2343L12.6068 8.13028Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronTriangleLeftMedium;
