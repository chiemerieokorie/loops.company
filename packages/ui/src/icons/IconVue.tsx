import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconVue: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="vue">
		{variant === "filled" ? (
			<>
				<path
					d="M14.5332 3.00117L12.0001 7.38871L9.46697 3.00117H1.03125L12.0001 22L22.969 3.00117H14.5332Z"
					fill="currentColor"
					opacity="0.8"
				/>
				<path
					d="M14.5363 3.00034L12.0032 7.38788L9.47005 3.00034H5.42188L12.0032 14.3994L18.5845 3.00034H14.5363Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M14.5332 3.00117L12.0001 7.38871L9.46697 3.00117H1.03125L12.0001 22L22.969 3.00117H14.5332Z"
					fill="currentColor"
					opacity="0.8"
				/>
				<path
					d="M14.5363 3.00034L12.0032 7.38788L9.47005 3.00034H5.42188L12.0032 14.3994L18.5845 3.00034H14.5363Z"
					fill="currentColor"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconVue;
