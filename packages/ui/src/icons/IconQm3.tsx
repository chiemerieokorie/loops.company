import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconQm3: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="qm3, room, transform, xyz, 3d">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M8.21968 3.21967C8.51257 2.92678 8.98744 2.92678 9.28034 3.21967L12.7803 6.71967C13.0732 7.01256 13.0732 7.48744 12.7803 7.78033C12.4874 8.07322 12.0126 8.07322 11.7197 7.78033L9.50001 5.56066V14H20.25C20.6642 14 21 14.3358 21 14.75C21 15.1642 20.6642 15.5 20.25 15.5H9.08178L4.30496 20.7545C4.02633 21.061 3.55199 21.0836 3.2455 20.805C2.93901 20.5263 2.91642 20.052 3.19505 19.7455L8.00001 14.46V5.56066L5.78034 7.78033C5.48744 8.07322 5.01257 8.07322 4.71968 7.78033C4.42678 7.48744 4.42678 7.01256 4.71968 6.71967L8.21968 3.21967Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M20.25 14.7499H8.75M8.75 14.7499L3.75 20.2499M8.75 14.7499V4.23499"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M5.25 7.25L8.75 3.75L12.25 7.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconQm3;
