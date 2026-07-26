import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAspectRatio34: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="aspect-ratio-3-4, portrait">
		{variant === "filled" ? (
			<>
				<path
					d="M7.75 2C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V5.75C20 3.67893 18.3211 2 16.25 2H7.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 5.75C4.75 4.09315 6.09315 2.75 7.75 2.75H16.25C17.9069 2.75 19.25 4.09315 19.25 5.75V18.25C19.25 19.9069 17.9069 21.25 16.25 21.25H7.75C6.09315 21.25 4.75 19.9069 4.75 18.25V5.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAspectRatio34;
