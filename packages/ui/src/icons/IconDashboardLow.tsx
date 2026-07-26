import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDashboardLow: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="dashboard-low">
		{variant === "filled" ? (
			<>
				<path
					d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.1108 21.8189 14.1793 21.4846 15.1776C21.3539 15.0668 21.1847 15 21 15H12.4546L9.66494 9.65308C9.47334 9.28584 9.02031 9.14346 8.65308 9.33506C8.28584 9.52666 8.14346 9.97969 8.33506 10.3469L10.7628 15H3C2.81526 15 2.64612 15.0668 2.51541 15.1776C2.18111 14.1793 2 13.1108 2 12Z"
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
					d="M18.7907 5.70927C22.4031 9.32162 22.4031 15.1784 18.7907 18.7907C15.1784 22.4031 9.3216 22.4031 5.70927 18.7907C2.09691 15.1784 2.09691 9.3216 5.70927 5.70927C9.32162 2.09691 15.1784 2.09691 18.7907 5.70927Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12.1216 15.7538L9.25 10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.25 16H20.2467"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDashboardLow;
