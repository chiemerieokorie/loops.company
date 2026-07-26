import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconSpacebar: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="spacebar">
		{variant === "filled" ? (
			<>
				<path
					d="M2 16.25V13.75C2 13.3358 2.33579 13 2.75 13C3.16421 13 3.5 13.3358 3.5 13.75V16.25C3.5 17.4926 4.50736 18.5 5.75 18.5H18.25C19.4926 18.5 20.5 17.4926 20.5 16.25V13.75C20.5 13.3358 20.8358 13 21.25 13C21.6642 13 22 13.3358 22 13.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 13.75V16.25C2.75 17.9069 4.09315 19.25 5.75 19.25H18.25C19.9069 19.25 21.25 17.9069 21.25 16.25V13.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconSpacebar;
