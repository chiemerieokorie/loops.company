import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPhoneTopPunchHoleCenter: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="phone-top-punch-hole-center">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17 3C19.2091 3 21 4.79086 21 7V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V7C3 4.79086 4.79086 3 7 3H17ZM12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M3.75 20.25V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V20.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<circle cx="12" cy="6.5" fill="currentColor" r="1" />
			</>
		)}
	</CentralIconBase>
);

export default IconPhoneTopPunchHoleCenter;
