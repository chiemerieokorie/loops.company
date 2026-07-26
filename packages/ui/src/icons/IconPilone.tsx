import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPilone: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="pilone, maintenance">
		{variant === "filled" ? (
			<>
				<path
					d="M8.41005 4.70739C8.86792 3.10485 10.3327 2 11.9993 2C13.666 2 15.1307 3.10485 15.5886 4.70739L16.815 9H7.18359L8.41005 4.70739Z"
					fill="currentColor"
				/>
				<path
					d="M6.75558 10.5L5.89844 13.5H18.1013L17.2442 10.5H6.75558Z"
					fill="currentColor"
				/>
				<path
					d="M18.53 15H5.46999L4.18427 19.5H2.75C2.33579 19.5 2 19.8358 2 20.25C2 20.6642 2.33579 21 2.75 21H21.25C21.6642 21 22 20.6642 22 20.25C22 19.8358 21.6642 19.5 21.25 19.5H19.8157L18.53 15Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M16 9.75H8"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6.75 14.25H17.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M4.82031 20L9.13076 4.91343C9.49663 3.63287 10.6671 2.75 11.9989 2.75C13.3307 2.75 14.5011 3.63287 14.867 4.91343L19.1775 20"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M2.75 20.25H21.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPilone;
