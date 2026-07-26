import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconDeskOffice: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="desk-office">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M5.75 6.5C4.50736 6.5 3.5 7.50736 3.5 8.75V18.25C3.5 18.6642 3.16421 19 2.75 19C2.33579 19 2 18.6642 2 18.25V8.75C2 6.67893 3.67893 5 5.75 5H18.25C20.3211 5 22 6.67893 22 8.75V18.25C22 18.6642 21.6642 19 21.25 19H11.25C10.8358 19 10.5 18.6642 10.5 18.25V6.5H5.75ZM15.5 9.75C15.5 9.33579 15.1642 9 14.75 9C14.3358 9 14 9.33579 14 9.75V10.75C14 11.1642 14.3358 11.5 14.75 11.5C15.1642 11.5 15.5 11.1642 15.5 10.75V9.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M2.75 18.25V8.75C2.75 7.09315 4.09315 5.75 5.75 5.75H11.25M11.25 5.75H18.25C19.9069 5.75 21.25 7.09315 21.25 8.75V18.25H11.25V5.75Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.75 9.75V10.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconDeskOffice;
