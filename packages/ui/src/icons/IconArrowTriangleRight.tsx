import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowTriangleRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-triangle-right">
		{variant === "filled" ? (
			<>
				<path
					d="M7.97419 4.29233C6.14866 3.37989 4 4.70668 4 6.74799V17.2519C4 19.2932 6.14866 20.62 7.97419 19.7076L18.4819 14.4556C20.5061 13.4439 20.506 10.556 18.4819 9.54431L7.97419 4.29233Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 17.252V6.74803C4.75 5.26465 6.31162 4.29985 7.63887 4.96324L18.1465 10.2152C19.6178 10.9506 19.6178 13.0494 18.1466 13.7848L7.63888 19.0368C6.31162 19.7001 4.75 18.7354 4.75 17.252Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowTriangleRight;
