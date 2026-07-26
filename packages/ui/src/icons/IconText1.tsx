import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconText1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="text-1">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75V6.25C21 6.66421 20.6642 7 20.25 7C19.8358 7 19.5 6.66421 19.5 6.25V4.5H12.75V19.5H14.25C14.6642 19.5 15 19.8358 15 20.25C15 20.6642 14.6642 21 14.25 21H9.75C9.33579 21 9 20.6642 9 20.25C9 19.8358 9.33579 19.5 9.75 19.5H11.25V4.5H4.5V6.25C4.5 6.66421 4.16421 7 3.75 7C3.33579 7 3 6.66421 3 6.25V3.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.25V3.75H12H20.25V6.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M12 20.25V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M9.75 20.25H12H14.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconText1;
