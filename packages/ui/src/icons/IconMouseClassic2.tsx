import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconMouseClassic2: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="mouse-classic-2, click">
		{variant === "filled" ? (
			<>
				<path
					d="M19 15C19 18.8659 15.866 22 12 22C8.13404 22 5.00005 18.8659 5 15V10.5H19V15Z"
					fill="currentColor"
				/>
				<path
					d="M11.25 9H5V5.75C5.00002 3.67895 6.67895 2 8.75 2H11.25V9Z"
					fill="currentColor"
				/>
				<path
					d="M15.25 2C17.321 2.00003 18.9999 3.67901 19 5.75V9H12.75V2H15.25Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M12 2.75V9.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M6 9.75H18"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18.25 15.0002V5.75013C18.25 4.09329 16.9069 2.75015 15.25 2.75013L8.75004 2.75004C7.09317 2.75002 5.75 4.09317 5.75 5.75004V15.0002C5.75 18.452 8.54822 21.2502 12 21.2502C15.4518 21.2502 18.25 18.452 18.25 15.0002Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconMouseClassic2;
