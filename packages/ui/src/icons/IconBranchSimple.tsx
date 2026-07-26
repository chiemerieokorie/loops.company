import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBranchSimple: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="branch-simple">
		{variant === "filled" ? (
			<>
				<path
					d="M18 2.25C20.0711 2.25 21.75 3.92893 21.75 6C21.75 8.07107 20.0711 9.75 18 9.75C16.1961 9.75 14.6897 8.47636 14.3311 6.7793C10.3084 7.10218 7.10218 10.3084 6.7793 14.3311C8.47636 14.6897 9.75 16.1961 9.75 18C9.75 20.0711 8.07107 21.75 6 21.75C3.92893 21.75 2.25 20.0711 2.25 18C2.25 16.1857 3.53824 14.6716 5.25 14.3242V3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75V9.80566C8.36308 7.24903 11.1297 5.49514 14.3203 5.27539C14.6579 3.55111 16.1768 2.25 18 2.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 14.75V3.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 15C6 10.0294 10.0294 6 15 6"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBranchSimple;
