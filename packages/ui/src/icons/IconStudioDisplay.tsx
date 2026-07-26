import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconStudioDisplay: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="studio-display, thunderbolt">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M2 7.75C2 5.67893 3.67893 4 5.75 4H18.25C20.3211 4 22 5.67893 22 7.75V14.25C22 16.3211 20.3211 18 18.25 18H16V20.25C16 20.6642 15.6642 21 15.25 21H8.75C8.33579 21 8 20.6642 8 20.25V18H5.75C3.67893 18 2 16.3211 2 14.25V7.75ZM9.5 18V19.5H14.5V18H9.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M8.75 17.25H5.75C4.09315 17.25 2.75 15.9069 2.75 14.25V7.75C2.75 6.09315 4.09315 4.75 5.75 4.75H18.25C19.9069 4.75 21.25 6.09315 21.25 7.75V14.25C21.25 15.9069 19.9069 17.25 18.25 17.25H15.25M8.75 17.25V20.25H15.25V17.25M8.75 17.25H15.25"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconStudioDisplay;
