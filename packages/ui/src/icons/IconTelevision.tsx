import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconTelevision: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase
		{...props}
		ariaLabel="television, tv, monitor, video, screen, display"
	>
		{variant === "filled" ? (
			<>
				<path
					d="M2 6.75C2 4.67893 3.67893 3 5.75 3H18.25C20.3211 3 22 4.67893 22 6.75V13.25C22 15.3211 20.3211 17 18.25 17H5.75C3.67893 17 2 15.3211 2 13.25V6.75Z"
					fill="currentColor"
				/>
				<path
					d="M6.24416 20.9592C8.05294 20.337 9.9879 20 12.0002 20C14.0125 20 15.9475 20.337 17.7563 20.9592C18.1479 21.0939 18.5747 20.8856 18.7094 20.494C18.8442 20.1023 18.6358 19.6755 18.2442 19.5408C16.2809 18.8655 14.1812 18.5 12.0002 18.5C9.8192 18.5 7.71949 18.8655 5.75625 19.5408C5.36456 19.6755 5.15626 20.1023 5.29099 20.494C5.42572 20.8856 5.85247 21.0939 6.24416 20.9592Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 6.75C2.75 5.09315 4.09315 3.75 5.75 3.75H18.25C19.9069 3.75 21.25 5.09315 21.25 6.75V13.25C21.25 14.9069 19.9069 16.25 18.25 16.25H5.75C4.09315 16.25 2.75 14.9069 2.75 13.25V6.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M18 20.25C16.114 19.6013 14.0967 19.25 12 19.25C9.90334 19.25 7.88601 19.6013 6 20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconTelevision;
