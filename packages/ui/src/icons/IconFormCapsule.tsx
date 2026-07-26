import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFormCapsule: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="form-capsule, button">
		{variant === "filled" ? (
			<>
				<path
					d="M14.5 4C18.9183 4 22.5 7.58172 22.5 12C22.5 16.4183 18.9183 20 14.5 20H9.5C5.08172 20 1.5 16.4183 1.5 12C1.5 7.58172 5.08172 4 9.5 4H14.5Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.5 4.75H9.5C5.49594 4.75 2.25 7.99594 2.25 12C2.25 16.0041 5.49594 19.25 9.5 19.25H14.5C18.5041 19.25 21.75 16.0041 21.75 12C21.75 7.99594 18.5041 4.75 14.5 4.75Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFormCapsule;
