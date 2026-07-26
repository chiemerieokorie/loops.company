import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPhoneDynamicIsland: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="phone-dynamic-island">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.75 23C6.67893 23 5 21.3211 5 19.25V4.75C5 2.67893 6.67893 1 8.75 1H15.25C17.3211 1 19 2.67893 19 4.75V19.25C19 21.3211 17.3211 23 15.25 23H8.75ZM10.75 3.49C10.3358 3.49 10 3.82579 10 4.24C10 4.65421 10.3358 4.99 10.75 4.99H13.25C13.6642 4.99 14 4.65421 14 4.24C14 3.82579 13.6642 3.49 13.25 3.49H10.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.75 4.25H13.25M8.75 22.25H15.25C16.9069 22.25 18.25 20.9069 18.25 19.25V4.75C18.25 3.09315 16.9069 1.75 15.25 1.75H8.75C7.09315 1.75 5.75 3.09315 5.75 4.75V19.25C5.75 20.9069 7.09315 22.25 8.75 22.25Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPhoneDynamicIsland;
