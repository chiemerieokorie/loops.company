import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAnimationNone: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="animation-none">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M11.25 3.75C11.25 3.33579 11.5858 3 12 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5H12.75V20.25C12.75 20.6642 12.4142 21 12 21H3.75C3.33579 21 3 20.6642 3 20.25C3 19.8358 3.33579 19.5 3.75 19.5H11.25V3.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 3.75H12V20.25H3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAnimationNone;
