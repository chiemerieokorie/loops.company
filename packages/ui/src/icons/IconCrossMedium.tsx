import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconCrossMedium: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="cross-medium, crossed medium, close">
		{variant === "filled" ? (
			<>
				<path
					d="M17.2197 5.71967C17.5126 5.42678 17.9873 5.42678 18.2802 5.71967C18.5731 6.01256 18.5731 6.48732 18.2802 6.78022L13.0605 11.9999L18.2802 17.2197C18.5731 17.5126 18.5731 17.9873 18.2802 18.2802C17.9873 18.5731 17.5126 18.5731 17.2197 18.2802L11.9999 13.0605L6.78022 18.2802C6.48732 18.5731 6.01256 18.5731 5.71967 18.2802C5.42678 17.9873 5.42678 17.5126 5.71967 17.2197L10.9394 11.9999L5.71967 6.78022C5.42678 6.48732 5.42678 6.01256 5.71967 5.71967C6.01256 5.42678 6.48732 5.42678 6.78022 5.71967L11.9999 10.9394L17.2197 5.71967Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconCrossMedium;
