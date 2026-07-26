import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBanknote1: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="banknote-1,money, bill">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M1 8.25C1 6.17893 2.67893 4.5 4.75 4.5H19.25C21.3211 4.5 23 6.17893 23 8.25V15.75C23 17.8211 21.3211 19.5 19.25 19.5H4.75C2.67893 19.5 1 17.8211 1 15.75V8.25ZM3.75 7C3.33579 7 3 7.33579 3 7.75C3 8.16421 3.33579 8.5 3.75 8.5H4.75C5.16421 8.5 5.5 8.16421 5.5 7.75C5.5 7.33579 5.16421 7 4.75 7H3.75ZM18.5 16.25C18.5 15.8358 18.8358 15.5 19.25 15.5H20.25C20.6642 15.5 21 15.8358 21 16.25C21 16.6642 20.6642 17 20.25 17H19.25C18.8358 17 18.5 16.6642 18.5 16.25ZM9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M4.75 8.25H5.75M18.25 15.75H19.25M1.75 15.75V8.25C1.75 6.59315 3.09315 5.25 4.75 5.25H19.25C20.9069 5.25 22.25 6.59315 22.25 8.25V15.75C22.25 17.4069 20.9069 18.75 19.25 18.75H4.75C3.09315 18.75 1.75 17.4069 1.75 15.75ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBanknote1;
