import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDashboardFast: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="dashboard-fast">
		{variant === "filled" ? (
			<>
				<path
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.1108 21.8189 14.1793 21.4846 15.1776C21.3539 15.0668 21.1847 15 21 15H13.2372L15.6649 10.3469C15.8565 9.97969 15.7142 9.52666 15.3469 9.33506C14.9797 9.14346 14.5267 9.28584 14.3351 9.65308L11.5454 15H3C2.81526 15 2.64612 15.0668 2.51541 15.1776C2.18111 14.1793 2 13.1108 2 12Z"
					fill="currentColor"
				/>
				<path
					d="M3.06641 16.5C4.71322 19.7626 8.09488 22 11.9991 22C15.9034 22 19.285 19.7626 20.9318 16.5H3.06641Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18.5407 5.45927C22.1531 9.07162 22.1531 14.9284 18.5407 18.5407C14.9284 22.1531 9.0716 22.1531 5.45927 18.5407C1.84691 14.9284 1.84691 9.0716 5.45927 5.45927C9.07162 1.84691 14.9284 1.84691 18.5407 5.45927Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.2617 15.2519L15.0019 10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4 15.75H20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDashboardFast;
