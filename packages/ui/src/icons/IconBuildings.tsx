import type { FC } from "react";

import { CentralIconBase, type CentralIconProps } from "./CentralIconBase";

export const IconBuildings: FC<CentralIconProps> = ({
	variant = "outlined",
	...props
}) => (
	<CentralIconBase {...props} ariaLabel="buildings, company, workspace">
		{variant === "filled" ? (
			<>
				<path
					clipRule="evenodd"
					d="M6.75 3C4.67893 3 3 4.67893 3 6.75V18.5H1.75C1.33579 18.5 1 18.8358 1 19.25C1 19.6642 1.33579 20 1.75 20H22.25C22.6642 20 23 19.6642 23 19.25C23 18.8358 22.6642 18.5 22.25 18.5H21V11C21 8.92893 19.3211 7.25 17.25 7.25H16V18.5H15V6.75C15 4.67893 13.3211 3 11.25 3H6.75ZM7.75 8C7.33579 8 7 8.33579 7 8.75C7 9.16421 7.33579 9.5 7.75 9.5H10.25C10.6642 9.5 11 9.16421 11 8.75C11 8.33579 10.6642 8 10.25 8H7.75ZM7.75 12C7.33579 12 7 12.3358 7 12.75C7 13.1642 7.33579 13.5 7.75 13.5H10.25C10.6642 13.5 11 13.1642 11 12.75C11 12.3358 10.6642 12 10.25 12H7.75Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</>
		) : (
			<>
				<path
					d="M10.25 8.75H7.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M7.75 12.75H10.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M22.25 19.25H1.75"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3.75 19.25V6.75C3.75 5.09315 5.09315 3.75 6.75 3.75H11.25C12.9069 3.75 14.25 5.09315 14.25 6.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M14.25 7.75H17.25C18.9069 7.75 20.25 9.09315 20.25 10.75V19.25"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</>
		)}
	</CentralIconBase>
);

export default IconBuildings;
