import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSimCard2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="sim-card-2">
		{variant === "filled" ? (
			<>
				<path
					d="M20 5.75V18.25C20 20.3211 18.3211 22 16.25 22H7.75C5.67893 22 4 20.3211 4 18.25V7.99264C4 6.99808 4.39509 6.04425 5.09835 5.34099L7.34099 3.09835C8.04425 2.39509 8.99808 2 9.99264 2H11.5V7.25C11.5 7.66421 11.8358 8 12.25 8C12.6642 8 13 7.66421 13 7.25V2H15.5V7.25C15.5 7.66421 15.8358 8 16.25 8C16.6642 8 17 7.66421 17 7.25V2.07501C18.7117 2.42247 20 3.93578 20 5.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M19.25 5.75C19.25 4.09315 17.9069 2.75 16.25 2.75H9.99264C9.19699 2.75 8.43393 3.06607 7.87132 3.62868L5.62868 5.87132C5.06607 6.43393 4.75 7.19699 4.75 7.99264V18.25C4.75 19.9069 6.09315 21.25 7.75 21.25H16.25C17.9069 21.25 19.25 19.9069 19.25 18.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M11.25 2.75V7.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M15.25 2.75V7.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSimCard2;
