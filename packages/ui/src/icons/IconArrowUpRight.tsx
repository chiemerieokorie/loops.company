import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconArrowUpRight: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="arrow-up-right">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8 6.25C8 5.55964 8.55964 5 9.25 5H17.75C18.4404 5 19 5.55964 19 6.25V14.75C19 15.4404 18.4404 16 17.75 16C17.0596 16 16.5 15.4404 16.5 14.75V9.26777L7.13388 18.6339C6.64573 19.122 5.85427 19.122 5.36612 18.6339C4.87796 18.1457 4.87796 17.3543 5.36612 16.8661L14.7322 7.5H9.25C8.55964 7.5 8 6.94036 8 6.25Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconArrowUpRight;
