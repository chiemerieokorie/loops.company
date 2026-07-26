import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVercel: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="vercel">
		{variant === "filled" ? (
			<>
				<path
					d="M11.8632 2.17999L22.7264 20.9958H1L11.8632 2.17999Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M11.8632 2.17999L22.7264 20.9958H1L11.8632 2.17999Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVercel;
