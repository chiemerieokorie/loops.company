import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconAspectRatio219: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="aspect-ratio-21-9, wide, landscape">
		{variant === "filled" ? (
			<>
				<path
					d="M3.75 6C1.67893 6 0 7.67893 0 9.75V14.25C0 16.3211 1.67893 18 3.75 18H20.25C22.3211 18 24 16.3211 24 14.25V9.75C24 7.67893 22.3211 6 20.25 6H3.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M0.75 9.75C0.75 8.09315 2.09315 6.75 3.75 6.75H20.25C21.9069 6.75 23.25 8.09315 23.25 9.75V14.25C23.25 15.9069 21.9069 17.25 20.25 17.25H3.75C2.09315 17.25 0.75 15.9069 0.75 14.25V9.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconAspectRatio219;
