import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAnimationLinear: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="animation-linear">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M20.7803 3.21967C21.0732 3.51256 21.0732 3.98744 20.7803 4.28033L4.28033 20.7803C3.98744 21.0732 3.51256 21.0732 3.21967 20.7803C2.92678 20.4874 2.92678 20.0126 3.21967 19.7197L19.7197 3.21967C20.0126 2.92678 20.4874 2.92678 20.7803 3.21967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 20.25L20.25 3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAnimationLinear;
