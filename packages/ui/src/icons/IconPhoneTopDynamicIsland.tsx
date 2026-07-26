import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconPhoneTopDynamicIsland: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="phone-top-dynamic-island">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M17 3C19.2091 3 21 4.79086 21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V7C3 4.79086 4.79086 3 7 3H17ZM11 5C10.5858 5 10.25 5.33579 10.25 5.75C10.25 6.16421 10.5858 6.5 11 6.5H13C13.4142 6.5 13.75 6.16421 13.75 5.75C13.75 5.33579 13.4142 5 13 5H11Z"
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
				<path
					d="M11 6.25H13"
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconPhoneTopDynamicIsland;
