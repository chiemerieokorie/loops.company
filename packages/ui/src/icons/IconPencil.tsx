import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPencil: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="pencil, edit, write">
		{variant === "filled" ? (
			<>
				<path
					d="M14.7197 3.72001C16.2552 2.18448 18.7448 2.18448 20.2803 3.72001C21.8159 5.25554 21.8159 7.74514 20.2803 9.28067L8.36612 21.1949C7.85039 21.7106 7.15092 22.0003 6.42157 22.0003H2.75C2.33579 22.0003 2 21.6646 2 21.2503V17.5788C2 16.8494 2.28973 16.1499 2.80546 15.6342L12.1895 6.25017L17.75 11.8107L18.8107 10.75L13.2502 5.18951L14.7197 3.72001Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M13.25 6.24997L15.25 4.24997C16.4926 3.00733 18.5074 3.00733 19.75 4.24997C20.9926 5.49261 20.9926 7.50733 19.75 8.74997L17.75 10.75L7.83579 20.6642C7.46071 21.0393 6.95201 21.25 6.42157 21.25H2.75V17.5784C2.75 17.048 2.96071 16.5393 3.33579 16.1642L13.25 6.24997Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M13.25 6.25L17.75 10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPencil;
