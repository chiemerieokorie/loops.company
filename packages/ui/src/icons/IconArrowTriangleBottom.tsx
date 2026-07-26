import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowTriangleBottom: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-triangle-bottom">
		{variant === "filled" ? (
			<>
				<path
					d="M4.29233 7.97419C3.37989 6.14866 4.70668 4 6.74799 4H17.2519C19.2932 4 20.62 6.14866 19.7076 7.97419L14.4556 18.4819C13.4439 20.5061 10.556 20.506 9.54431 18.4819L4.29233 7.97419Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.252 4.75H6.74803C5.26465 4.75 4.29985 6.31162 4.96324 7.63887L10.2152 18.1465C10.9506 19.6178 13.0494 19.6178 13.7848 18.1466L19.0368 7.63888C19.7001 6.31162 18.7354 4.75 17.252 4.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowTriangleBottom;
