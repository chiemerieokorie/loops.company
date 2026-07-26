import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconFramer: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="framer">
		{variant === "filled" ? (
			<>
				<path
					d="M18.6693 2V8.66667H12.0026L5.33598 2H18.6693Z"
					fill="currentColor"
				/>
				<path
					d="M5.33594 8.66667H12.0026L18.6693 15.3333H12.0026V22L5.33594 15.3333V8.66667Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18.6693 2V8.66667H12.0026L5.33598 2H18.6693Z"
					fill="currentColor"
				/>
				<path
					d="M5.33594 8.66667H12.0026L18.6693 15.3333H12.0026V22L5.33594 15.3333V8.66667Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconFramer;
