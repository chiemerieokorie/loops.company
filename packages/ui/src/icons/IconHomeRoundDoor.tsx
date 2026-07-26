import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconHomeRoundDoor: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="home-round-door">
		{variant === "filled" ? (
			<>
				<path
					d="M14.1829 3.6403C12.8776 2.70584 11.1224 2.70584 9.81708 3.6403L4.56708 7.39882C3.58351 8.10297 3 9.23833 3 10.448V17.2499C3 19.321 4.67893 20.9999 6.75 20.9999H8.75C9.16421 20.9999 9.5 20.6641 9.5 20.2499V16.7499C9.5 15.3692 10.6193 14.2499 12 14.2499C13.3807 14.2499 14.5 15.3692 14.5 16.7499V20.2499C14.5 20.6641 14.8358 20.9999 15.25 20.9999H17.25C19.3211 20.9999 21 19.321 21 17.2499V10.448C21 9.23833 20.4165 8.10297 19.4329 7.39882L14.1829 3.6403Z"
					fill="currentColor"
				/>
			</>
		) : (
			<>
				<path
					d="M9.5 16.75V20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V10.4481C3.75 9.48035 4.21681 8.57206 5.00367 8.00874L10.2537 4.25022C11.2979 3.50265 12.7021 3.50265 13.7463 4.25022L18.9963 8.00874C19.7832 8.57206 20.25 9.48035 20.25 10.4481V17.25C20.25 18.9069 18.9069 20.25 17.25 20.25H14.5V16.75C14.5 15.3693 13.3807 14.25 12 14.25C10.6193 14.25 9.5 15.3693 9.5 16.75Z"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconHomeRoundDoor;
