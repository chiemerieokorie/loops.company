import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowTriangleLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-triangle-left">
		{variant === "filled" ? (
			<>
				<path
					d="M16.0258 4.29233C17.8513 3.37989 20 4.70668 20 6.74799V17.2519C20 19.2932 17.8513 20.62 16.0258 19.7076L5.51814 14.4556C3.49395 13.4439 3.49396 10.556 5.51814 9.54431L16.0258 4.29233Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 17.252V6.74803C19.25 5.26465 17.6884 4.29985 16.3611 4.96324L5.85345 10.2152C4.38218 10.9506 4.38218 13.0494 5.85345 13.7848L16.3611 19.0368C17.6884 19.7001 19.25 18.7354 19.25 17.252Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowTriangleLeft;
