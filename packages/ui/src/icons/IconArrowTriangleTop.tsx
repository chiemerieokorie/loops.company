import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowTriangleTop: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-triangle-top">
		{variant === "filled" ? (
			<>
				<path
					d="M4.29233 16.0258C3.37989 17.8513 4.70668 20 6.74799 20H17.2519C19.2932 20 20.62 17.8513 19.7076 16.0258L14.4556 5.51814C13.4439 3.49395 10.556 3.49396 9.54431 5.51814L4.29233 16.0258Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M17.252 19.25H6.74803C5.26465 19.25 4.29985 17.6884 4.96324 16.3611L10.2152 5.85345C10.9506 4.38218 13.0494 4.38218 13.7848 5.85345L19.0368 16.3611C19.7001 17.6884 18.7354 19.25 17.252 19.25Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowTriangleTop;
