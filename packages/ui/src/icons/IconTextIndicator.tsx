import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTextIndicator: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="text-indicator">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16 2.75C16 2.33579 16.3358 2 16.75 2H21.25C21.6642 2 22 2.33579 22 2.75C22 3.16421 21.6642 3.5 21.25 3.5H19.75V20.5H21.25C21.6642 20.5 22 20.8358 22 21.25C22 21.6642 21.6642 22 21.25 22H16.75C16.3358 22 16 21.6642 16 21.25C16 20.8358 16.3358 20.5 16.75 20.5H18.25V3.5H16.75C16.3358 3.5 16 3.16421 16 2.75ZM2 5.75C2 5.33579 2.33579 5 2.75 5H13.25C13.6642 5 14 5.33579 14 5.75C14 6.16421 13.6642 6.5 13.25 6.5H8.75V18.25C8.75 18.6642 8.41421 19 8 19C7.58579 19 7.25 18.6642 7.25 18.25V6.5H2.75C2.33579 6.5 2 6.16421 2 5.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 5.75H8M8 5.75H13.25M8 5.75V18.25M16.75 2.75H19M19 2.75H21.25M19 2.75V21.25M19 21.25H16.75M19 21.25H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTextIndicator;
