import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconChevronTriangleUpMedium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="chevron-triangle-up-medium, dropdown, caret"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M10.6603 8.4287C11.3596 7.59664 12.6406 7.59673 13.34 8.4287L16.4445 12.124C17.4007 13.2624 16.5912 14.9996 15.1046 15H8.89563C7.40917 14.9995 6.59964 13.2624 7.55579 12.124L10.6603 8.4287Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M15.8697 12.6068C16.4162 13.2574 15.9537 14.25 15.104 14.25H8.89599C8.04631 14.25 7.58378 13.2574 8.13028 12.6068L11.2343 8.91155C11.6339 8.43581 12.3661 8.43581 12.7657 8.91155L15.8697 12.6068Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconChevronTriangleUpMedium;
