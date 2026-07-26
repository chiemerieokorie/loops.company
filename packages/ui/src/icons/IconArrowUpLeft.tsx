import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowUpLeft: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-up-left">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M16 6.25C16 5.55964 15.4404 5 14.75 5H6.25C5.55964 5 5 5.55964 5 6.25V14.75C5 15.4404 5.55964 16 6.25 16C6.94036 16 7.5 15.4404 7.5 14.75V9.26777L16.8661 18.6339C17.3543 19.122 18.1457 19.122 18.6339 18.6339C19.122 18.1457 19.122 17.3543 18.6339 16.8661L9.26777 7.5H14.75C15.4404 7.5 16 6.94036 16 6.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M5.75 15.25V5.75H15.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.0001 18L6.3999 6.39978"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowUpLeft;
