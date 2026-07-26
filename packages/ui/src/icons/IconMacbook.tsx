import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMacbook: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="macbook, laptop, computer">
		{variant === "filled" ? (
			<>
				<path
					d="M22.25 17C22.6642 17 23 17.3358 23 17.75V18.25C23 19.7688 21.7688 21 20.25 21H3.75C2.23122 21 1 19.7688 1 18.25V17.75C1 17.3358 1.33579 17 1.75 17H22.25Z"
					fill="currentColor"
				/>
				<path
					d="M17.75 3C19.5449 3 21 4.45507 21 6.25V15.5H3V6.25C3 4.45507 4.45507 3 6.25 3H17.75Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 6.25C3.75 4.86929 4.86929 3.75 6.25 3.75H17.75C19.1307 3.75 20.25 4.86929 20.25 6.25V16.75H3.75V6.25Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M1.75 16.75H22.25V17.75C22.25 19.1307 21.1307 20.25 19.75 20.25H4.25C2.86929 20.25 1.75 19.1307 1.75 17.75V16.75Z"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMacbook;
