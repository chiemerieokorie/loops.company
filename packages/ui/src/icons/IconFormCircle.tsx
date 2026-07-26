import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFormCircle: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="form-circle">
		{variant === "filled" ? (
			<>
				<circle cx="12" cy="12" fill="currentColor" r="10" />
			</>
		) : (
			<>
				<circle
					cx="12"
					cy="12"
					r="9.25"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFormCircle;
