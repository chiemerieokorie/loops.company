import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconOpencode: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="opencode">
		{variant === "filled" ? (
			<>
				<path
					d="M16 10.0002V18.0002H8V10.0002H16Z"
					fill="currentColor"
					opacity="0.4"
				/>
				<path
					clipRule="evenodd"
					d="M20 22H4V2H20V22ZM16 6H8V18H16V6Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M16 10.0002V18.0002H8V10.0002H16Z"
					fill="currentColor"
					opacity="0.4"
				/>
				<path
					clipRule="evenodd"
					d="M20 22H4V2H20V22ZM16 6H8V18H16V6Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconOpencode;
